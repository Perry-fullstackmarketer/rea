---
name: reverse-engineer-anything
description: Reverse engineer shipped applications, websites, JavaScript/Electron bundles, managed assemblies, firmware, and native binaries using REA's evidence-backed MCP tools. Use when the answer depends on binary/package inspection, decompilation, runtime behavior, or comparing a shipped artifact with source.
---

# Reverse Engineer Anything (REA)

Use the REA MCP server for investigations that depend on shipped artifacts, binary/package structure, decompilation, runtime evidence, or behavior that ordinary source inspection cannot establish. For a complete source repository, use normal repository tools first; do not run REA readiness checks unnecessarily.

## Connection and prerequisites

This plugin registers the official `rea-agents@6.8.0` MCP server through `npx`. The first launch downloads the pinned npm package, so Node.js and npm must be installed and available on PATH. REA 6.8.0 requires Node.js 22.23.4+, 24.22.1+, or 26.12.1+.

If REA tools are missing, check that the plugin is enabled and restart the Claude Desktop app. Do not run `rea setup` to duplicate this plugin-managed MCP registration. Native engines such as Hopper, Ghidra, IDA, JADX, Binwalk, and Unblob are separate optional prerequisites; do not claim they are installed merely because the plugin is enabled.

## Investigation workflow

1. **Clarify the target and question.** Identify the exact file, application, URL, capture, or running target and what needs to be established.
2. **Choose the narrowest suitable REA tool.** Inspect the advertised tool list and input schemas; do not invent tool names or arguments.
3. **Preserve evidence.** Record artifact identity, hashes, selected members, offsets, versions, and tool-reported limitations where available.
4. **Separate facts from inference.** Distinguish direct observations, decompiler output, hypotheses, and unknowns.
5. **Validate important claims.** Cross-check with a second view or focused follow-up tool when possible. Do not overstate coverage.
6. **Report clearly.** Summarize findings, evidence, confidence, limitations, and practical next steps.

## Target routing

- **JavaScript/Electron app, ASAR, or web bundle:** use REA's JavaScript application analysis workflow.
- **ZIP, APK, IPA, DMG, MSIX/AppX, or packaged executable:** begin with artifact/member inventory; inspect selected members afterward.
- **Android package:** use Android package inspection for classes, methods, and references.
- **Managed .NET assembly:** use managed-artifact inspection.
- **Firmware:** use firmware-region inspection; extraction should use a new caller-selected output directory.
- **Native executable or runtime behavior:** select the matching native static-analysis or runtime-observation workflow. Static inspection does not prove runtime behavior.
- **Browser behavior:** use browser target discovery for an already-open user-owned page; use scenario capture only when browser actions are explicitly required.
- **HAR, SAZ, PCAP, or qlog:** use the corresponding capture-inspection tools and preserve source identity across pages.

Always inspect the tool descriptions exposed by the connected REA server before choosing a tool. Tool availability depends on the installed release, operating system, and optional analysis engines.

## Safety and boundaries

- Analyze only targets the user owns or is authorized to inspect.
- Do not execute, install, or modify a target merely to inspect it unless the user has authorized that action.
- Treat downloaded binaries, scripts, and archives as untrusted.
- Do not fetch URLs found inside captures or artifacts unless the user explicitly requests it.
- Do not claim a runtime observation from static evidence.
- Preserve original artifacts; write extracted output only to a clearly selected destination.

## Upstream project

This plugin wrapper uses the official REA runtime and preserves upstream attribution. Documentation, provider setup, supported targets, and release notes are maintained by the upstream project: https://github.com/morluto/rea
