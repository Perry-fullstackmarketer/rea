# REA marketplace installation

This fork provides a Perry-fullstackmarketer-branded Claude Code marketplace listing for REA.

**Important:** The marketplace installs the official, version-pinned `rea-agents@6.8.0` npm plugin. It does not build, republish, or claim ownership of the upstream REA runtime. The upstream project and release remain maintained by [morluto/rea](https://github.com/morluto/rea), and the package is published as [rea-agents on npm](https://www.npmjs.com/package/rea-agents).

## Install in Claude Code

Run these commands in Claude Code:

```text
/plugin marketplace add Perry-fullstackmarketer/rea
/plugin install rea@perry-fullstackmarketer-rea
```

Then restart/reload Claude Code if prompted and check the installed plugin with:

```text
/plugin
```

Check the REA MCP connection with:

```text
/mcp
```

## Requirements and setup notes

- Use a supported standalone Node.js version: 22.x (>=22.23.4), 24.x (>=24.22.1), or 26.12.1+.
- The plugin registers REA's MCP server and bundled workflow skill. It does not run `rea setup`.
- Configure a native analysis provider separately when your task needs one (Hopper, Ghidra, IDA or Kuna). Follow the upstream installation guide.
- Do not install both the plugin and a separate `rea setup` MCP registration in the same Claude Code client; that can start duplicate REA servers.
- The fork's marketplace manifest pins the official npm artifact to version 6.8.0. Update the pin only after checking that a corresponding qualified upstream npm release exists.

For authoritative setup, provider, troubleshooting and release information, use the [upstream installation guide](https://github.com/morluto/rea/blob/main/docs/installation.md).
