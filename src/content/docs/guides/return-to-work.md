---
title: "Leave and return to work"
description: "Record a useful stopping point and distinguish reconnecting, restoring an agent, and finding retained files."
verified: "2026-09-13"
evidence: ["connection", "session-signals", "closing", "persistence", "terminal"]
---

Leave a clear stopping point and check the actual state when you return. Your browser connection, agent process, conversation, and repository files have separate lifetimes.

## Before leaving

Record the server, project, full workspace path, branch, latest completed check, and next action. Let a critical command finish and record its result, or interrupt the task deliberately. Save important instructions in the task's handoff rather than relying on an unsent browser draft.

Keep the server awake and connected if you expect agents to work while you are away. Closing a browser tab is not the Firehose session's **Close** action.

| Event | What to check when you return |
| --- | --- |
| Browser reload or connection loss | Reconnect to the same server, select the task, and read its latest response and activity |
| Browser tab closed | Reopen the app with the intended server details; confirm the selected workspace rather than assuming a new tab selected it |
| Server restart or sleep | Confirm reachability first, then check whether the session accepts input and what work actually completed |
| Agent exited | Inspect retained files and the last readable response before continuing in a new session |
| Session closed with worktree retained | Use the recorded path and branch to [find retained work](/guides/finish-a-task/#find-retained-work-later) |
| Terminal disconnected | Check whether that terminal and command still exist; detached terminals can be cleaned up |

Firehose has restoration paths for managed sessions using saved session information and history. That does not establish that every provider, in-flight command, or restart will resume identically. Full restart outcomes still need release walkthroughs; check the visible state rather than treating restored history as proof that the agent is running.

## Resume from evidence

1. Confirm the server, path, and branch against your notes.
2. Read the latest conversation and inspect the diff. **Transcript unavailable** means the conversation cannot be read reliably, not that no work happened.
3. Check whether your last request already received a result before sending it again.
4. If input is available, give the next specific instruction. Otherwise, create a new session in the retained workspace and provide a short handoff.

```text
Continue the greeting fallback task in this workspace.
First inspect the current diff and test output; do not repeat completed edits.
Last known result: [actual result]. Still needed: [next check or correction].
Preserve existing work and report any mismatch with this handoff.
```

If the directory or history is missing, give the operator your saved path, branch, and last successful step. A new directory with the same name does not restore old work.
