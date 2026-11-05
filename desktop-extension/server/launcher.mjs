#!/usr/bin/env node
import { spawn } from "node:child_process";

// REA 6.8.0 is pinned because this exact package version was verified locally
// with MCP Inspector on Windows. Keep stdout connected directly to the MCP
// client: MCP uses stdio for JSON-RPC, so diagnostics must go to stderr only.
const packageSpec = "rea-agents@6.8.0";
const child = spawn(
  "npx.cmd",
  ["--yes", packageSpec, "mcp"],
  {
    shell: true,
    stdio: "inherit",
    windowsHide: true
  }
);

let stopping = false;

function stop(signal) {
  if (stopping) return;
  stopping = true;
  try {
    child.kill(signal);
  } catch {
    // The child may already have exited.
  }
}

process.on("SIGINT", () => stop("SIGINT"));
process.on("SIGTERM", () => stop("SIGTERM"));

child.on("error", (error) => {
  process.stderr.write(
    `REA Desktop Extension could not start ${packageSpec}. Ensure Node.js 26.12.1+ and npm/npx are installed and available on PATH. Details: ${error.message}\n`
  );
  process.exitCode = 1;
});

child.on("exit", (code, signal) => {
  process.exitCode = Number.isInteger(code) ? code : signal ? 1 : 0;
});
