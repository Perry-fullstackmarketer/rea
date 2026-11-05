# REA plugin for Claude Desktop

This folder packages the official REA agent workflow for Claude's repository-synced plugin marketplace.

- Plugin: `rea`
- Upstream project: https://github.com/morluto/rea
- Runtime: official npm package `rea-agents@6.8.0`
- License: MIT; upstream copyright and attribution remain with morluto.

## Install

Add this repository as a marketplace in Claude Desktop, then install the `rea` plugin from the marketplace.

The first MCP server launch uses `npx` to download the pinned package. Install a supported Node.js version and npm first. Optional native analysis engines require separate setup; see the upstream installation guide.

This is a thin marketplace-compatible wrapper, not a forked or repackaged copy of REA's compiled runtime.
