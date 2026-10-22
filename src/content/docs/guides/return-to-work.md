---
title: "Leave and return to work"
description: "Record a useful stopping point, pick up a Claude Code session that was cut off, and distinguish reconnecting, restoring an agent, and finding retained files."
verified: "2026-10-21"
evidence: ["connection", "session-signals", "closing", "persistence", "terminal", "layout", "session-reconnect"]
---

Leave a clear stopping point and check the actual state when you return. Your browser connection, agent process, conversation, and repository files have separate lifetimes.

## Before leaving

Record the server, project, full workspace path, branch, latest completed check, and next action. Let a critical command finish and record its result, or interrupt the task deliberately. Save important instructions in the task's handoff rather than relying on an unsent browser draft.

Keep the server awake and connected if you expect agents to work while you are away. Closing a browser tab is not the Firehose session's **Close** action, which is in the session row's **⋮** (**Session options**) menu in the **Sessions** sidebar.

| Event | What to check when you return |
| --- | --- |
| Browser reload or connection loss | Reconnect to the same server, select the session in the **Sessions** sidebar, and read its latest response and activity |
| Browser tab closed | Reopen the app with the intended server details; confirm the selected workspace rather than assuming a new tab selected it |
| Server restart or sleep | Confirm reachability first, then check whether the session accepts input and what work actually completed |
| Computer restarted, or a Claude Code session was cut off | The session stays in the **Sessions** sidebar. Send it a message to [reconnect it](#pick-up-a-claude-code-session-that-was-cut-off) |
| Agent exited (other providers) | Inspect retained files and the last readable response before continuing in a new session |
| Session closed with worktree retained | Use the recorded path and branch to [find retained work](/guides/finish-a-task/#find-retained-work-later) |
| Terminal disconnected | Check whether that terminal and command still exist; detached terminals can be cleaned up |

Firehose has restoration paths for managed sessions using saved session information and history. That does not establish that every provider, in-flight command, or restart will resume identically. Full restart outcomes still need release walkthroughs; check the visible state rather than treating restored history as proof that the agent is running.

## Pick up a Claude Code session that was cut off

From Firehose 1.3.0, a Claude Code session that stops without you closing it stays in the **Sessions** sidebar. This covers a computer restart, a crash, the system stopping Claude Code when memory runs out, and a Firehose restart. You pick it up by sending it a message, in the same row and with the same conversation.

This applies to Claude Code sessions that Firehose runs in its tmux, which includes the sessions you start from **New session**. It does not cover Codex, Antigravity, Grok, OpenCode, or Pi sessions. A session that ended before you updated to Firehose 1.3.0 most likely has nothing saved to come back from; continue that work [in a new session](#resume-from-evidence).

### What a cut-off session looks like

The row looks like any idle session: its title, Claude Code, its model, and **Idle**. When you open it, you see its whole conversation and the usual message box. Opening it does not start anything.

Until it reconnects, the session shows only the **Chat**, **Claude Code**, and **Terminal** tabs. The model and effort pickers, Smart Review, **Ask me**, and Stop come back once it is running again. The row's **⋮** menu offers only **Close**.

### Reconnect by sending a message

1. Select the session in the **Sessions** sidebar and read the end of the conversation, so you know where the agent stopped.
2. Check the workspace before you continue. For example, inspect the **Diff** tab, or run `git status --short` in the **Terminal** tab.
3. Type your next instruction and send it.

**Example message**, for the fictional `hello-firehose` project on the branch `greet-blank-names`:

```text
The computer restarted while you were working. Check the current diff and test output first, then finish the "greet blank names as guest" task and run node --test greeting.test.mjs.
```

**Expected result:** the row and your message show **Reconnecting…** for a moment. Then the session is running again in the same row, keeps your draft and selection, and answers your message. It runs with the same permissions it had before, including skipped permission prompts if you started it that way.

Selecting the **Claude Code** tab also reconnects the session, without a message, and then opens the agent's terminal. The **Terminal** tab does not: it opens a shell in the session's folder and leaves the agent stopped.

### Read the reconnect hint

Next to the message box, a hint tells you how the session will reconnect and roughly how much it costs. A "token" is the unit that providers measure and bill model input in.

| Hint | What it means |
| --- | --- |
| **Reconnect · rereads 80k tokens from cache (cache warm, 37 min left)** | Less than an hour has passed since the session's last turn. Claude Code continues the same conversation and rereads it from its cache, which costs much less than reading it fresh. |
| **Reconnect · starts from a summary instead of 329k tokens** | More than an hour has passed. Firehose has a small model write a summary of the conversation, and a fresh Claude Code conversation starts from that summary. The earlier conversation stays visible above it. |

The numbers in the hint depend on your session. If Firehose never measured the conversation's size, the hint leaves the number out.

### When Firehose continues a session for you

If the computer restarted while a session was in the middle of a task, and its last turn was less than an hour earlier, Firehose may continue it for you as soon as it starts again. The agent gets a message saying its previous run was cut off, asking it to check the workspace and continue. You see a notice such as **Continued 1 interrupted session · reread 80k tokens from cache**.

Firehose does this at most once an hour for each conversation and two sessions at a time. It does not continue a session that was waiting for you, a session that ended for another reason, or a session that belongs to a workflow. Those wait for your next message.

### If the session doesn't reconnect

Your message stays in the message box, so you can send it again after fixing the cause.

| Message | What to do |
| --- | --- |
| **Reconnecting took too long — try again** | Send the message again. Firehose may still have finished reconnecting, and resending does not start a second copy. |
| **This conversation is already running elsewhere** | The same Claude Code conversation is already running, for example because you resumed it in your own terminal. Use that copy, or stop it, then try again. |
| **This session belongs to a running workflow** | The workflow that started this session will bring it back. Check the workflow's run instead. |
| **Can't wake: the folder this session ran in no longer exists.** | The worktree was deleted or moved. Close the session and continue the work [in a new session](#resume-from-evidence) in an existing workspace. |
| **Can't wake: Firehose does not know which conversation this session was running.** | Firehose cannot find the conversation to resume. Continue in a new session with a short handoff. |
| **Can't wake: this session was already woken or dismissed.** | Look for the running session in the sidebar, or reload the dashboard. |
| **Can't wake: could not reach the server. Check the connection and try again.** | Check that Firehose is reachable, then send again. |
| **Your message wasn't delivered** | The session reconnected but did not get your message. Select **Retry**. |

### Close a cut-off session

If you don't need the session any more, select its row's **⋮** (**Session options**), then **Close**. The row leaves the sidebar and does not come back. No dialog appears, because nothing is running, and the session's worktree stays on disk.

## Resume from evidence

1. Confirm the server, path, and branch against your notes.
2. Read the latest conversation and inspect the **Diff** tab. **Transcript unavailable**, shown on the session's sidebar row, means the conversation cannot be read reliably, not that no work happened.
3. Check whether your last request already received a result before sending it again.
4. If input is available, give the next specific instruction. For a Claude Code session that was cut off, sending the instruction [reconnects it](#reconnect-by-sending-a-message). Otherwise, create a new session in the retained workspace and provide a short handoff.

```text
Continue the greeting fallback task in this workspace.
First inspect the current diff and test output; do not repeat completed edits.
Last known result: [actual result]. Still needed: [next check or correction].
Preserve existing work and report any mismatch with this handoff.
```

If the directory or history is missing, give the operator your saved path, branch, and last successful step. A new directory with the same name does not restore old work.
