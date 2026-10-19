import { DefaultExecutor } from "./default.js";
import { refreshCodeBuddyToken } from "../services/tokenRefresh.js";

const CODEBUDDY_SYSTEM_PROMPT = "You are CodeBuddy Code.";

const CHANNEL_MARKERS = [
  "You are Claude Code, Anthropic's official CLI for Claude.",
  "x-anthropic-billing-header",
  "Main branch (you will usually use this for PRs):",
];

const CHANNEL_MARKER_REGEX =
  /you are claude code|claude.?code.+official.+cli|anthropic.+official.+cli|anxthxropic.+official.+cli|you are (?:cursor|windsurf|cline|aider|continue|copilot|cody)|cc_entrypoint\s*=\s*(?:cli|vscode|jetbrains|gui)|claude.?code.+issues|give feedback.+claude.?code|OhMyOpenCode/gi;

function sanitizeChannelMarkers(text) {
  if (typeof text !== "string" || !text) return text;
  let result = text;
  for (const marker of CHANNEL_MARKERS) {
    if (result.includes(marker)) {
      result = result.split(marker).join("[external-client-identity]");
    }
  }
  return result.replace(CHANNEL_MARKER_REGEX, "[external-client-identity]");
}

/**
 * Tencent CodeBuddy Executor (codebuddy-cn / codebuddy-intl)
 * Uses OpenAI-compatible chat completions API with CodeBuddy CLI channel headers.
 */
export class CodeBuddyExecutor extends DefaultExecutor {
  constructor(provider = "codebuddy-cn") {
    super(provider);
  }

  buildHeaders(credentials, stream = true, body, requestHeaders, clientTool = null) {
    const headers = super.buildHeaders(credentials, true, body, requestHeaders, clientTool);
    const reqId = crypto.randomUUID().replace(/-/g, "");
    const convId = crypto.randomUUID();
    const convReqId = crypto.randomUUID().replace(/-/g, "");
    const domain =
      credentials?.providerSpecificData?.domain ||
      (this.provider === "codebuddy-cn" ? "copilot.tencent.com" : "www.codebuddy.ai");

    delete headers["x-requested-with"];
    delete headers["x-codebuddy-request"];

    Object.assign(headers, {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "CLI/2.108.1 CodeBuddy/2.108.1",
      "X-Product": "SaaS",
      "X-App": "cli",
      "X-IDE-Type": "CLI",
      "X-IDE-Name": "CLI",
      "X-IDE-Version": "2.108.1",
      "X-Private-Data": "false",
      "X-Requested-With": "XMLHttpRequest",
      "X-CodeBuddy-Request": "1",
      "X-Domain": domain,
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": process.version || "v24.11.1",
      "X-Stainless-Lang": "js",
      "X-Stainless-Arch": "x64",
      "X-Stainless-Os": "Windows",
      "X-Stainless-Package-Version": "6.25.0",
      "X-Stainless-Helper-Method": "stream",
      "X-Stainless-Retry-Count": "0",
      "X-Request-ID": reqId,
      "X-Conversation-ID": convId,
      "X-Conversation-Request-ID": convReqId,
      "X-Conversation-Message-ID": reqId,
      "X-Agent-Intent": "craft",
      "X-Agent-Purpose": "conversation",
    });

    return headers;
  }

  transformRequest(model, body, stream, credentials) {
    const transformed = super.transformRequest(model, body, stream, credentials);
    transformed.stream = true;

    // Prepend "You are CodeBuddy Code." as required leading system prompt, then
    // consolidate all system/developer messages into one so caller instructions
    // are preserved while passing channel verification. Sanitize third-party
    // client identity markers in system/developer/assistant messages.
    const source = Array.isArray(transformed.messages) ? transformed.messages : [];
    const systemMessages = source.filter((m) => m && (m.role === "system" || m.role === "developer"));
    const otherMessages = source.filter((m) => m && m.role !== "system" && m.role !== "developer");

    let combinedSystem = CODEBUDDY_SYSTEM_PROMPT;
    for (const msg of systemMessages) {
      const text = typeof msg.content === "string"
        ? msg.content
        : Array.isArray(msg.content)
          ? msg.content.map((b) => (b && typeof b.text === "string" ? b.text : "")).join("\n")
          : "";
      if (text) combinedSystem += "\n" + text;
    }
    combinedSystem = sanitizeChannelMarkers(combinedSystem);

    transformed.messages = [{ role: "system", content: combinedSystem }];
    for (const message of otherMessages) {
      if (!message || typeof message !== "object") continue;
      const sanitized = { ...message };
      if (typeof sanitized.content === "string") {
        sanitized.content = sanitizeChannelMarkers(sanitized.content);
      } else if (Array.isArray(sanitized.content)) {
        sanitized.content = sanitized.content.map((block) => {
          if (block && typeof block.text === "string") {
            return { ...block, text: sanitizeChannelMarkers(block.text) };
          }
          return block;
        });
      }
      if (message.role === "user" && typeof message.content === "string") {
        sanitized.content = [{ type: "text", text: sanitized.content }];
      }
      transformed.messages.push(sanitized);
    }

    // CodeBuddy only surfaces model reasoning when the request carries the CLI's
    // OpenAI-style params: reasoning_effort + reasoning_summary:"auto". Rebana Router's
    // thinking pipeline sets reasoning_effort only when the client asks, and never
    // sets reasoning_summary — so reasoning never shows. Mirror the CLI here.
    const eff = transformed.reasoning_effort;
    if (eff === "none" || eff === "off") {
      delete transformed.reasoning_effort;
    } else if (eff) {
      transformed.reasoning_summary = "auto";
    }
    return transformed;
  }

  parseError(response, bodyText) {
    if (bodyText) {
      try {
        const data = JSON.parse(bodyText);
        const msg = data?.msg || data?.message || data?.error?.message || "";
        if (data?.code === 6004 || /超出频率限制|frequency limit|限额/i.test(msg)) {
          let resetsAtMs = null;
          const match = msg.match(/(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}:\d{2})(?:\s*UTC\+?([0-9:]+))?/i);
          if (match) {
            const dp = match[1];
            const tp = match[2];
            const tz = match[3]
              ? (match[3].includes(":") ? (match[3].startsWith("+") ? match[3] : `+${match[3]}`) : `+${match[3].padStart(2, "0")}:00`)
              : "+08:00";
            const dt = new Date(`${dp}T${tp}${tz}`);
            if (!isNaN(dt.getTime())) resetsAtMs = dt.getTime();
          }
          return {
            status: 429,
            message: msg || "CodeBuddy frequency limit (6004)",
            resetsAtMs,
          };
        }
      } catch {
        // Not JSON, fall through
      }
    }
    return super.parseError(response, bodyText);
  }

  async refreshCredentials(credentials, log) {
    if (!credentials?.refreshToken) return null;
    return refreshCodeBuddyToken(this.provider, credentials.refreshToken, log);
  }
}

export default CodeBuddyExecutor;
