---
title: "Finish and close a task"
description: "Verify the result, hand off changes, and choose whether to retain or delete a session’s worktree."
verified: "2026-09-13"
evidence: ["closing", "chat", "diff", "review-actions"]
---

Check the result, hand off the changes, and close the session with a deliberate choice about its files.

## Before you begin

Select the intended session and check its project and branch. An **Idle** session may have finished its turn or need input. Read its last response before deciding the task is complete.

## 1. Verify the work

1. Compare the result with your original request.
2. Inspect **Diff → Changes**. Check **All changes** and **Working changes** so you account for committed work and outstanding edits.
3. Run the relevant checks in the session’s workspace on the server. Record what passed and what remains untested.
4. Resolve important review findings or record why you are leaving them open.

**Expected result:** you can explain what changed and what evidence supports it. For the greeting example, that includes the blank-name fallback, unchanged nonblank behavior, and passing tests.

If something is missing, send a focused follow-up instead of closing the task.

## 2. Hand off the result

Follow your repository’s commit and pull-request requirements. If you are unsure of that process, ask its maintainer before publishing changes. You can ask the agent for a handoff without authorizing publication:

```text
Summarize the files changed, checks run, and any remaining concerns.
Identify changes that are not committed yet.
Do not commit, push, or create a pull request.
```

Closing a Firehose session does not itself commit, push, merge, or approve its changes.

## 3. Choose what to keep

Use the session’s close control when you are ready to end it. If a confirmation appears, read its branch and pull-request information. An unknown check is not confirmation that your work has been pushed.

For a worktree, the dialog may offer **Also delete the worktree**. It starts unchecked:

| Choice | What you request |
| --- | --- |
| Leave deletion unchecked and select **Close** | Close the session while retaining its worktree |
| Check **Also delete the worktree**, then **Close and delete** | Close the session and remove the worktree; read any subsequent branch-deletion decision separately |
| **Cancel** | Return without confirming the close |

Keep the worktree if you still need its files. Removing a worktree removes that checkout, including work you have not preserved elsewhere. Check the path carefully before choosing deletion.

## Check the outcome

Follow the close or cleanup notice. Cleanup can continue after the session closes; starting deletion is not proof it finished. Read any failure or branch-deletion prompt before taking another action.

Deletion may be unavailable because Firehose is running from that worktree, another agent is still working there, or the main repository could not be located. Read the stated reason. Ask the server operator for help when the server’s own checkout needs to move.

**Interrupt** is a separate control for stopping an active turn. It does not undo edits or replace the handoff and cleanup steps above. See [session activity](/tools/chat/#read-the-session-signals) when you only need to change direction.
