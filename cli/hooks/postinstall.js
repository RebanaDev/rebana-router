#!/usr/bin/env node

// Postinstall: warm-up SQLite deps into ~/.Rebana Router/runtime so the first
// `Rebana Router` start doesn't need network. Failure here is non-fatal â€”
// cli.js will retry at runtime if anything is missing.
// `npx Rebana Router â€¦` (npm_command=exec) is typically a one-shot `connect` â€” skip
// the runtime warm-up; cli.js self-heals it if the server is started later.
if (process.env.npm_command === "exec") process.exit(0);

const { ensureSqliteRuntime } = require("./sqliteRuntime");
const { ensureTrayRuntime } = require("./trayRuntime");

try {
  ensureSqliteRuntime({ silent: false });
  console.log("[Rebana Router] runtime SQLite deps ready");
} catch (e) {
  console.warn(`[Rebana Router] runtime warm-up skipped: ${e.message}`);
}

try {
  ensureTrayRuntime({ silent: false });
} catch (e) {
  console.warn(`[Rebana Router] tray runtime skipped: ${e.message}`);
}

process.exit(0);
