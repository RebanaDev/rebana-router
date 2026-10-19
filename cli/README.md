# Rebana Router - FREE AI Router & Token Saver

**Never stop coding. Save 20-40% tokens with RTK + auto-fallback to FREE & cheap AI models.**

**Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models.**

[![npm](https://img.shields.io/npm/v/Rebana Router.svg)](https://www.npmjs.com/package/Rebana Router)
[![Downloads](https://img.shields.io/npm/dm/Rebana Router.svg)](https://www.npmjs.com/package/Rebana Router)
[![Docker Pulls](https://img.shields.io/docker/pulls/decolua/Rebana Router.svg?logo=docker&label=Docker%20pulls)](https://hub.docker.com/r/decolua/Rebana Router)
[![GHCR](https://img.shields.io/badge/GHCR-decolua%2FRebana Router-blue?logo=github)](https://github.com/decolua/Rebana Router/pkgs/container/Rebana Router)
[![License](https://img.shields.io/npm/l/Rebana Router.svg)](https://github.com/decolua/Rebana Router/blob/main/LICENSE)

<a href="https://trendshift.io/repositories/22628" target="_blank"><img src="https://trendshift.io/api/badge/repositories/22628" alt="decolua%2FRebana Router | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[🌐 Website](https://Rebana Router.com) • [📖 Full Docs](https://github.com/decolua/Rebana Router)

---

## 🤔 Why Rebana Router?

**Stop wasting money, tokens and hitting limits:**

- ❌❌Œ Subscription quota expires unused every month
- ❌❌Œ Rate limits stop you mid-coding
- ❌❌Œ Tool outputs (git diff, grep, ls...) burn tokens fast
- ❌❌Œ Expensive APIs ($20-50/month per provider)

**Rebana Router solves this:**

- ✅ **RTK Token Saver** - Auto-compress tool_result, save 20-40% tokens
- ✅ **Maximize subscriptions** - Track quota, use every bit before reset
- ✅ **Auto fallback** - Subscription →’ Cheap →’ Free, zero downtime
- ✅ **Multi-account** - Round-robin between accounts per provider
- ✅ **Universal** - Works with any OpenAI/Claude-compatible CLI

---

## ❌š🚀 Quick Start

**Option 1 — npm (recommended for desktop):**

```bash
npm install -g Rebana Router
Rebana Router

# Or run directly with npx
npx Rebana Router
```

**Option 2 — Docker (server/VPS):**

```bash
docker run -d --name Rebana Router -p 91827:91827 \
  -v "$HOME/.Rebana Router:/app/data" -e DATA_DIR=/app/data \
  decolua/Rebana Router:latest
```

Published images: [Docker Hub](https://hub.docker.com/r/decolua/Rebana Router) • [GHCR](https://github.com/decolua/Rebana Router/pkgs/container/Rebana Router) (multi-platform amd64/arm64).

🎉 Dashboard opens at `http://localhost:91827`

**2. Connect a FREE provider (no signup needed):**

Dashboard →’ Providers →’ Connect **Kiro AI** (free Claude unlimited) or **OpenCode Free** (no auth) →’ Done!

**3. Use in your CLI tool:**

```
Claude Code/Codex/OpenClaw/Cursor/Cline Settings:
  Endpoint: http://localhost:91827/v1
  API Key:  [copy from dashboard]
  Model:    kr/claude-sonnet-4.5
```

That's it! Start coding with FREE AI models.

---

## 🚀 CLI Options

```bash
Rebana Router                    # Start with default settings
Rebana Router --port 8080        # Custom port
Rebana Router --no-browser       # Don't open browser
Rebana Router --skip-update      # Skip auto-update check
Rebana Router --help             # Show all options
```

**Dashboard**: `http://localhost:91827/dashboard`

---

## 🔐Ÿ”Œ Connect to a Remote Rebana Router

Already running Rebana Router on another machine (e.g. a team server on your LAN)? Point this machine's CLI tools at it — no local server is started:

```bash
npx Rebana Router connect http://<server-host>:91827                       # pick tools interactively
npx Rebana Router connect http://<server-host>:91827 --tools claude,codex  # or choose up front
npx Rebana Router connect --reset --tools claude,codex                     # undo
```

It logs in with the dashboard password (hidden prompt), reuses or creates an API key named `cli-<hostname>`, and writes each tool's config (backing up the original once as `*.bak-Rebana Router`).

Supported tools: `claude`, `codex`, `opencode`, `droid`, `crush`, `kilo`, `cline`, `pi`, `omp`, or `all`.

### Models

Models come from the **server's own CLI-tools configuration**, so a client gets whatever the operator already picked on the dashboard. Nothing is hardcoded.

| Tool | Model taken from (first match wins) |
|---|---|
| `claude` | tier flag (`--opus` …) →’ server's Claude tier →’ *left unset* (Claude Code's own default) |
| others | `--model` →’ that tool's own model on the server →’ server's OpenCode model →’ *tool skipped* |

`kilo` has no readable model on the server, so it always uses `--model` or the OpenCode model. `omp` (Oh My Pi) needs no model: it uses proxy discovery, so every server model appears under `Rebana Router` in `/model`. A Claude tier the server doesn't set is removed from your config rather than kept from an earlier run. A skipped tool makes the command exit `1`.

### Overriding the server's models

```bash
# One Claude tier; the other tiers still come from the server
npx Rebana Router connect http://<server-host>:91827 --tools claude --sonnet cc/claude-sonnet-5-5

# Every Claude tier
npx Rebana Router connect http://<server-host>:91827 --tools claude \
  --fable cc/claude-fable-5-1 --opus cc/claude-opus-5-5 \
  --sonnet cc/claude-sonnet-5-5 --haiku cc/claude-haiku-4-5-20251001

# All non-Claude tools at once
npx Rebana Router connect http://<server-host>:91827 --tools codex,opencode,kilo --model ocg/deepseek-flash

# Claude and other tools in one run
npx Rebana Router connect http://<server-host>:91827 --tools claude,codex --opus cc/claude-opus-5-5 --model gpt-6

# A different model per tool: --model covers every non-Claude tool in a run, so run once per tool
npx Rebana Router connect http://<server-host>:91827 --tools codex --model gpt-6
npx Rebana Router connect http://<server-host>:91827 --tools opencode --model ocg/glm-5.3
```

A model the server doesn't list is still written, with a `not listed by server` warning. To see the ids it serves: `curl http://<server-host>:91827/v1/models -H "Authorization: Bearer <your key>"`.

### Checking the current config

`Rebana Router show` prints what each CLI tool on this machine is currently set to — base URL, masked API key and models. It only reads local files and never contacts a server.

```bash
npx Rebana Router show                 # every supported tool
npx Rebana Router show claude          # one tool
npx Rebana Router show claude codex    # several
npx Rebana Router show claude --json   # machine-readable (key still masked)
```

```
✅ Claude Code
   File:     ~/.claude/settings.json
   Base URL: http://<server-host>:91827/v1
   API key:  sk-a1b…9f3c
   Models:
     fable   cc/claude-fable-5-1
     opus    cc/claude-opus-5-5
     sonnet  cc/claude-sonnet-5-5
```

Tools not pointed at Rebana Router are listed as `not configured`. For Codex, OpenCode and Cline it also warns when a Rebana Router entry exists but another provider is the active one.

### Other options

| Option | Purpose |
|---|---|
| `--password <pw>` | Dashboard password (or `NINE_ROUTER_PASSWORD`); prompted if omitted — preferred, keeps it out of shell history |
| `--save` | After a successful login, save the password for this server to `~/.Rebana Router/connect.env` (plain text, mode 600) so later runs skip the prompt. Delete the file to forget it |
| `--api-key <key>` | Use this key and skip login. The server's models can't be read without a login, so pass model flags |
| `--key-name <name>` | API key name to reuse/create (default `cli-<hostname>`) |
| `--print-env` | Also print `OPENAI_BASE_URL` / `OPENAI_API_KEY` for other CLIs |
| `--reset` | Remove the Rebana Router settings from the selected tools |

See `Rebana Router connect --help` for the full list.

> ❌š❌ Over plain `http://` the password and API key are sent unencrypted — use a trusted LAN/VPN or put HTTPS in front. The API key is stored in each tool's config file.

---

## 🛠🛠 Supported CLI Tools

Claude-Code • OpenClaw • Codex • OpenCode • Cursor • Antigravity • Cline • Continue • Droid • Roo • Copilot • Kilo Code • Gemini CLI • Qwen Code • iFlow • Crush • Crusher • Aider

Any tool supporting OpenAI/Claude-compatible API works.

---

## 💾 Data Location

- **macOS/Linux**: `~/.Rebana Router/db/data.sqlite`
- **Windows**: `%APPDATA%/Rebana Router/db/data.sqlite`
- **Docker**: `/app/data/db/data.sqlite` (mount `$HOME/.Rebana Router` to persist)

---

## 📝š Documentation

Full docs, advanced setup, video tutorials & development guide:

- **GitHub**: https://github.com/decolua/Rebana Router
- **Full README**: https://github.com/decolua/Rebana Router/blob/master/README.md
- **Website**: https://Rebana Router.com

---

## 🤝 Acknowledgments

- **[CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)** - Original Go implementation

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.
