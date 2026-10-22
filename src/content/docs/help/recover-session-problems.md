---
title: "Recover from lost messages and ended sessions"
description: "Fix two problems in older Firehose releases: messages that clear without reaching a Claude Code agent, and Claude Code sessions that end on their own. Then update and pick up the lost work."
verified: "2026-10-21"
evidence: ["chat-history-snapshots", "oom-isolation", "update-command", "update-notice", "release-1-2-5", "launch", "persistence", "cut-off-sessions"]
---

Work out which of two recent problems you hit, update Firehose to the release that fixes it, and pick up the work you lost. Both problems affect Claude Code sessions in older releases:

- **A message cleared but never arrived.** Fixed in Firehose 1.2.5.
- **A session ended on its own.** Fixed in Firehose 1.2.4, for Linux.

This article describes Firehose 1.2.5.

## Before you begin

- You can open a terminal on the Firehose computer, directly or over SSH.
- You know which project and branch the affected session was using. The prompt bar above the message box shows both while the session is open.

The examples use a fictional `hello-firehose` project with a worktree on the branch `greet-blank-names`. Replace them with your own.

## 1. Match what you saw

| What you saw | Problem | Fixed in |
| --- | --- | --- |
| You sent a message to a Claude Code session. It cleared from the message box, but it never appeared in the conversation and the agent never answered. Tool activity also appears twice in the conversation. | [A message cleared but never arrived](#a-message-cleared-but-never-arrived) | 1.2.5 |
| A Claude Code session stopped and left the **Sessions** sidebar without you closing it. Firehose runs on Linux, and the agent was running something large, such as a build or a test suite. | [A session ended on its own](#a-session-ended-on-its-own) | 1.2.4 |

If neither matches, see [Get unstuck](/troubleshooting/common-problems/).

### A message cleared but never arrived

Claude Code 2.1.300, released on October 14, 2026, started saving internal records in its conversation history. Firehose 1.2.4 and earlier show those records as chat messages. That doubles the tool activity, and it stops the next message you send before it leaves the dashboard, even though the message box clears.

To check which Claude Code version you have, run `claude --version` on the Firehose computer. The problem needs both Claude Code 2.1.300 or later and Firehose 1.2.4 or earlier.

### A session ended on its own

When a Linux computer runs out of memory, the system stops a process to free some. Before Firehose 1.2.4, on Linux computers where tmux runs each pane under systemd, stopping one command the agent ran could end the whole Claude Code session with it.

Firehose 1.2.4 protects Claude Code sessions from this, usually within 15 seconds of their start. Only the stopped command fails, and the agent keeps running and can read the failure. A session still ends if the system stops the agent itself. Codex and Antigravity sessions are not covered, and Macs are not affected.

From Firehose 1.3.0 on, a Claude Code session the system stops this way stays in the **Sessions** sidebar, and sending it a message reconnects it. See [Reconnect a cut-off Claude Code session](/guides/return-to-work/#reconnect-a-cut-off-claude-code-session).

## 2. Check your Firehose version

On the Firehose computer, run:

```sh
firehose version
```

The version follows the word `firehose`, as in `firehose 1.2.5 (release, …)`. If it is lower than the **Fixed in** release for your problem, continue to the next step. If it is already that release or later, skip to [Pick up the lost work](#4-pick-up-the-lost-work).

From Firehose 1.2.3 on, the dashboard also shows a banner such as **Firehose 1.3.0 is available (you have 1.2.5)** when a newer release is out. See [Know when an update is available](/getting-started/install/#know-when-an-update-is-available).

## 3. Update Firehose

Updating restarts Firehose, so do it between agent turns rather than while an agent is in the middle of a task.

1. On the Firehose computer, run:

   ```sh
   firehose update
   ```

   It downloads the newest release, checks it, and switches to it. It finishes with a line like this:

   ```text
   [update] Now running 1.2.5
   ```

   If it says `is up to date` instead, you already have the newest release.

2. Reload the dashboard in your browser, and on any other device you use it from.
3. For each session you had open, check that it still accepts input. See [Leave and return to work](/guides/return-to-work/) for what a restart can and cannot keep.

If the new release does not start, `firehose update` switches back to the release you had and Firehose keeps running. Run `firehose version` to see which one you are on.

## 4. Pick up the lost work

### Resend a message that never arrived

After the update and reload, Firehose stops showing the internal records, so the doubled tool activity goes away.

1. Open the session and read the end of the conversation. Your message is not there, and the agent has not answered it.
2. Send the message again. The copy that cleared never reached the agent, so this does not duplicate it.

**Example:** you sent “Run the greeting tests”, the message box cleared, and nothing happened. After updating to 1.2.5 and reloading, the conversation still ends with the agent's previous answer. Send “Run the greeting tests” once more. **Expected result:** your message appears in the conversation, and the agent starts the tests.

If the message does appear in the conversation, it did arrive. Do not send it again; see [My message didn't reach the agent](/troubleshooting/common-problems/#my-message-didnt-reach-the-agent).

### Continue after a session ended

The files the agent already changed stay in the workspace. Only the agent process and the session stopped.

1. Check what was finished. Look at the workspace's changes and the last results you saw; see [Leave and return to work](/guides/return-to-work/).
2. Select **New session** (the **+** at the top of the **Sessions** sidebar), pick the project, select **Next: Choose a workspace**, and choose **Existing branch**.
3. Search for the branch, such as `greet-blank-names`. Choose the result that reads **Open existing checkout** followed by the worktree's path, so the new session opens the same files. See [Continue an existing branch](/guides/workspaces/#continue-an-existing-branch).
4. Choose Claude Code and start the session.
5. Tell the agent what happened and what is left to do.

**Example message:**

```text
The previous session ended while running the full test suite, because the computer ran out of memory. The changes in this worktree are from that session. Review them, then run only the greeting tests with node --test greeting.test.mjs, and continue the "greet blank names as guest" task.
```

**Expected result:** the agent reviews the existing changes and runs the narrower test command, instead of starting the task over.

To keep it from happening again, free memory before the agent runs a heavy command. Close programs you don't need, or run fewer sessions at once. Asking the agent to run a narrower command, as in the example, also helps.

## If it happens again

If a message clears without arriving on Firehose 1.2.5 or later, or a Claude Code session ends on its own on Firehose 1.2.4 or later, [report the problem](/troubleshooting/common-problems/#i-need-to-report-a-problem). Include the time it happened, your Firehose version from `firehose version`, and your Claude Code version from `claude --version`.
