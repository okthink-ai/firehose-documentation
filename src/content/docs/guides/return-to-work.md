---
title: "Leave and return to work"
description: "Record a useful stopping point and distinguish reconnecting, restoring an agent, and finding retained files."
verified: "2026-10-21"
evidence: ["connection", "session-signals", "closing", "persistence", "terminal", "layout", "cut-off-sessions"]
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
| Agent exited | Inspect retained files and the last readable response before continuing in a new session |
| Session closed with worktree retained | Use the recorded path and branch to [find retained work](/guides/finish-a-task/#find-retained-work-later) |
| Terminal disconnected | Check whether that terminal and command still exist; detached terminals can be cleaned up |

For a Claude Code session cut off by a restart, crash, or memory shortage, see [Reconnect a cut-off Claude Code session](#reconnect-a-cut-off-claude-code-session) below.

Firehose has restoration paths for managed sessions using saved session information and history. That does not establish that every provider, in-flight command, or restart will resume identically. Full restart outcomes still need release walkthroughs; check the visible state rather than treating restored history as proof that the agent is running.

## Reconnect a cut-off Claude Code session

In releases after 1.2.5, a Claude Code session that Firehose started is not lost when it is cut off by a restart of the computer, a crash, the system stopping it for memory, or a Firehose restart. It stays in the **Sessions** sidebar looking as it did, with its full conversation. Opening it starts nothing.

1. Select the session and read the end of the conversation.
2. Send your next message. While Firehose reconnects, the session's row and your message show **Reconnecting…**.
3. The session continues in the same row, with the permissions it had before.

A hint beside the message box says what reconnecting costs:

- Within about an hour of the last turn, Claude Code rereads the conversation from its cache, which costs much less than reading it fresh. The hint reads like **Reconnect · rereads 80k tokens from cache (cache warm, 37 min left)**.
- After that, Firehose has a small model write a summary of the conversation and starts a fresh conversation from it, so the agent doesn't reread everything. The hint reads like **Reconnect · starts from a summary instead of 329k tokens**. The earlier conversation stays visible above.

If a session was in the middle of a task when a restart of the computer or a memory shortage cut it off, Firehose can continue it on its own while the cache is still warm, and a notification says how many sessions it continued. It never continues a session you stopped yourself.

If reconnecting fails, your message stays in the message box and Firehose says why, for example **This conversation is already running elsewhere** or that the session's folder no longer exists. To set a cut-off session aside, close it from its **⋮** (**Session options**) menu as usual; a session you closed doesn't come back. Only Claude Code sessions are kept this way.

## Resume from evidence

1. Confirm the server, path, and branch against your notes.
2. Read the latest conversation and inspect the **Diff** tab. **Transcript unavailable**, shown on the session's sidebar row, means the conversation cannot be read reliably, not that no work happened.
3. Check whether your last request already received a result before sending it again.
4. If input is available, give the next specific instruction. Otherwise, create a new session in the retained workspace and provide a short handoff.

```text
Continue the greeting fallback task in this workspace.
First inspect the current diff and test output; do not repeat completed edits.
Last known result: [actual result]. Still needed: [next check or correction].
Preserve existing work and report any mismatch with this handoff.
```

If the directory or history is missing, give the operator your saved path, branch, and last successful step. A new directory with the same name does not restore old work.
