---
title: "Recover from an unwanted change"
description: "Stop additional work, identify the affected edits, and request a correction while preserving unrelated changes."
verified: "2026-09-13"
evidence: ["chat", "diff", "closing", "example"]
---

Correct an agent's unwanted edits without treating every change in the workspace as disposable.

## 1. Stop additional work and identify the workspace

If the agent is still making the wrong change, use **Interrupt**. On mobile, find it in the session header's three-dot menu. Check the last response once the session settles. Interrupting does not undo commands or file edits already completed.

Confirm the full workspace path and branch. If another session shares the directory, coordinate a pause in its editing too.

## 2. Separate the changes

Open **Diff → Changes** and inspect **Working changes**. Compare the files with the starting state recorded before the task. Use **Commits** for work already committed.

Ask the agent to explain which edits it made, but verify its answer against the diff and your notes. If an affected file contained earlier uncommitted work and you cannot distinguish it, preserve the current files and ask the owner to review the relevant lines before requesting a reversal. Do not use a repository-wide reset or clean command to resolve that uncertainty.

## 3. Request a targeted correction

Suppose the greeting task changed the function correctly but also changed unrelated README text. If that README edit is confirmed to belong to this task, send:

```text
Keep the blank-name fix and all four tests.
Reverse only the README paragraph edit you made during this task.
Preserve the README edits that existed before the task.
Show the affected lines before changing them if their ownership is unclear.
Rerun the greeting checks. Do not commit or push.
```

Review the resulting diff and rerun the checks. Success means both the unwanted edit is corrected and the intended behavior still works.

If the bad change is already committed, ask for a proposed corrective commit. Review its patch before authorizing it. In shared history, follow the maintainer's process rather than asking the agent to rewrite published commits.

## 4. Account for effects outside Git

A diff cannot reverse a command that changed a database, contacted a service, or published something. Record the command and reported result, stop further related actions, and have the resource owner identify the recovery procedure. A clean working tree does not establish that those effects were reversed.

If you deleted the worktree, the retained-work instructions no longer apply to that directory. Ask the maintainer to locate preserved commits or backups; these guides cannot promise recovery of deleted uncommitted files.

Finish with a short record of the correction, checks, and anything still unresolved. Continue the task only when that remaining scope is clear.
