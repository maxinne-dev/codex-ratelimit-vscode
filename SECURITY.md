# Security Notes

This extension reads local Codex session logs from `~/.codex/sessions` (or the path configured in `codexRatelimit.sessionPath`) and does **not** transmit data to any remote services. The webview is now protected with a strict Content Security Policy that only permits resources from the extension bundle and a nonce-scoped script. Customizable colors are sanitized to prevent CSS injection in both the status bar tooltip and the webview.

If you suspect a security issue, please open an internal issue and include steps to reproduce. Avoid sharing sensitive session data in issue text; attach sanitized samples instead.
