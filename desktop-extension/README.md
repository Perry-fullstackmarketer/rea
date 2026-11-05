# REA for Claude Desktop (MCPB)

This folder packages REA as a Claude Desktop Extension for the regular Claude Desktop chat interface. It is separate from the Claude Code/Cowork plugin in `plugins/rea-desktop/`.

## What it does

- Installs through Claude Desktop's **Settings → Desktop app → Extensions → Advanced settings → Install Extension…** flow.
- Starts the REA MCP server over stdio using the official npm package `rea-agents@6.8.0`.
- Keeps the REA runtime out of this repository; the launcher downloads the pinned npm package on first start.

## Requirements

- Windows 10/11 (this first package is Windows-only).
- Node.js **26.12.1 or newer**, with npm/npx available on PATH. REA 6.8.0 declares this Node engine requirement.
- Internet access on first launch so `npx` can download `rea-agents@6.8.0`.

## Build the .mcpb package

Open PowerShell in this `desktop-extension` folder and run:

```powershell
npx.cmd --yes @anthropic-ai/mcpb pack
```

The MCPB CLI validates `manifest.json` and creates the installable `.mcpb` archive in the current folder.

## Install in Claude Desktop

1. Open **Settings → Desktop app → Extensions**.
2. Select **Advanced settings**.
3. Under **Extension Developer**, choose **Install Extension…**.
4. Select the generated `.mcpb` file and confirm installation.
5. Return to a normal Claude chat. Open **+ → Connectors** and check for REA and its tools.

## Troubleshooting

- If the extension installs but does not start, open its entry under **Settings → Desktop app → Extensions** and inspect its logs.
- Confirm `node --version` is at least `v26.12.1` and `npx.cmd --version` works in PowerShell.
- The launcher sends MCP traffic directly through stdio. It does not print status messages to stdout.

## Upstream

- REA: https://github.com/morluto/rea
- REA npm package: https://www.npmjs.com/package/rea-agents
- MCPB format and CLI: https://github.com/modelcontextprotocol/mcpb
