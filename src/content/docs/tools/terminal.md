---
title: "Run a check in the terminal"
description: "Open a server shell in the intended workspace and distinguish it from an agent's live terminal."
verified: "2026-09-29"
evidence: ["terminal", "file-access", "example", "layout"]
---

Run a project command yourself and inspect its output in Firehose's **Terminal** tab or terminal drawer.

## Before you begin

Know the session's full server workspace path and the command you intend to run. Terminal access must be available on your installation. The terminal runs as the account running the server; an agent's approval settings do not limit commands you type into this shell.

## Open a shell in the right directory

1. Select the session whose folder you want, then select the **Terminal** tab at the top of the session.
2. The first time, **Live shell access** explains what the shell can do. Select **I understand** only when you intend to use that computer's shell.
3. The shell opens in the session's own folder. Run `pwd` and `git branch --show-current` to check the directory and branch before other commands.

### Open more shells in the terminal drawer

For extra shells or another directory, use the terminal drawer:

1. On web with a keyboard, press Control plus backtick, or Command plus backtick on macOS. If **Live shell access** appears, select **I understand — enable terminal**.
2. Select the arrow beside the plus button, labeled **New terminal (choose kind + cwd)**.
3. Set **Kind** to **Shell**. Choose the intended directory under **Cwd**, which means working directory. Add a useful **Label**, then select **Open**.

The plus button labeled **New shell** opens a shell directly; do not assume its initial directory matches the selected agent's worktree. If the directory you need is unavailable, use the [external terminal route](/getting-started/files-and-terminal/).

## Run and interpret a check

For the completed greeting example, run:

```sh
node --test greeting.test.mjs
```

Expect four passing cases. A missing file usually means you need to check the workspace or finish creating the tests. A failed test needs its input, expected result, and actual result sent back to the agent. For other projects, use their documented check command.

**Command** opens a terminal for a specified command. **Tmux** attaches to an existing terminal session. **Open Claude Code**, a button on some approval cards and delivery notices, and the **Claude Code** tab let you interact with the agent's terminal. Input there can answer or interrupt the agent; use a separate **Shell** for independent checks.

## Hide, close, and reconnect

**Close terminal drawer** hides the drawer. The close button on an individual terminal tab requests termination of that terminal; it is a different action. Keep output you need before closing it.

Disconnected terminals can be cleaned up by the server, so use the project's normal process management for work that must survive your departure. See [Leave and return](/guides/return-to-work/) before relying on a terminal command to keep running.

If **Terminal needs authorization** appears, read the error and select **Retry** after checking your connection. If it still fails, check that Firehose is running with `firehose status`. Use the manual **Authorize** field only with a terminal key from a source you trust; keep that key out of Chat and public reports.
