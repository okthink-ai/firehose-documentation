---
title: "Make and review a change"
description: "Give an agent a small task, verify its checks, and inspect the resulting code changes."
verified: "2026-09-13"
evidence: ["launch", "chat", "diff", "example", "diff-comparisons"]
---

Improve the greeting example, check the result, and review the files before deciding what to do next.

## Before you begin

Complete the [first-session example](/getting-started/first-session/). The initial `greeting.mjs` returns `Hello, !` for a blank name. This task changes that behavior to `Hello, guest!`.

**Starting state:** `greeting.mjs` is committed and still returns `Hello, !` for empty or spaces-only strings. The input contract remains strings only. There should be no unrelated uncommitted edits. The task adds `greeting.test.mjs` and leaves the resulting change uncommitted for review.

For a separate branch and directory, [start a new worktree](/guides/workspaces/) named `greeting-blank-names`. Confirm that the session is using the intended workspace.

## 1. Describe the change

Send:

```text
Update greet in greeting.mjs to use "guest" when the trimmed name is empty.
Keep the existing output for nonblank names.
The input contract is strings only; do not add other input types.
Add a greeting.test.mjs file using Node's built-in test runner.
Cover "Ada", " Ada ", "", and "   ".
Run node --test and report the result. Do not commit or push.
```

This gives the agent a small implementation target and a clear check. If it needs a decision, answer in the same session.

## 2. Check the behavior

The expected outputs are:

| Input | Expected output |
| --- | --- |
| `"Ada"` | `"Hello, Ada!"` |
| `" Ada "` | `"Hello, Ada!"` |
| `""` | `"Hello, guest!"` |
| `"   "` | `"Hello, guest!"` |

Read the agent’s test report. To verify independently, use [the terminal location checks](/getting-started/files-and-terminal/#check-the-file) to open this session’s workspace on the server, then run:

```sh
node --test
```

The test run should pass and cover all four cases. The exact test names and implementation may differ. If the agent could not run the command, resolve the reported cause and run it before treating the result as verified.

### If a check fails

A fallback that checks the original name before trimming can still return `Hello, !` for spaces. If the test expects `Hello, guest!`, the run must fail. Send the failure back with the exact input:

```text
The spaces-only test fails: expected "Hello, guest!", got "Hello, !".
Check whether you choose the fallback before or after trimming.
Fix the function, keep the expected result, and rerun all four cases.
```

Do not accept a change that merely deletes the failing test. A passing run should cover both blank cases and both nonblank cases.

A [completed reference function](/examples/hello-firehose-result/greeting.mjs) and [four-case test file](/examples/hello-firehose-result/greeting.test.mjs) are available for comparison. They are one checked implementation, not guaranteed agent output. Keep them separate from the original sample until you have attempted the task.

## 3. Review the files

Open **Diff → Changes → Diff filters → Compare → Working changes**. You should see the greeting change and a new test file. Check untracked files if the test file is not in the current view.

Look for unrelated edits, deleted behavior, or tests that only check the easy case. If needed, send a precise follow-up:

```text
The test file does not cover spaces-only input yet.
Add that case and rerun node --test. Keep the change scoped to this task.
```

## 4. Decide whether it is ready

You’re done with this walkthrough when the expected outputs are covered, the checks pass, and you understand the diff. Follow [Finish and close a task](/guides/finish-a-task/) to hand off the result and choose what to keep. [Smart Review](/tools/smart-review/) is optional: it starts from committed branch changes and needs a usable review base. The standalone practice repository has no remote by default, so Diff and the test checks are sufficient for this walkthrough.
