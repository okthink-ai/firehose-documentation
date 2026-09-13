---
title: "Use Smart Review"
description: "Inspect agent-generated review findings and decide what needs investigation or a fix."
verified: "2026-09-13"
evidence: ["review", "diff"]
---

Get an agent’s review of branch changes and examine its findings before deciding what to change.

## Start a review

Have a session with branch changes you want to inspect. Open **Smart Review**. When no review is available, select **Start a review**.

If the review flow asks for **Areas of Focus**, describe the concerns that matter for this change. For the greeting example:

```text
Check blank-name handling and whether the tests cover spaces-only input.
Look for unintended changes to greetings for nonblank names.
```

Follow the review’s progress in the panel. Findings may arrive as the agent works. If the review reports a failure, read that message before starting it again.

## Read a finding

Select a finding to inspect its explanation. A finding can include:

- **What**: the potential problem.
- **In practice**: the situation that would expose it.
- **Impact**: what could go wrong.
- **Fix**: a proposed way to address it.

Use the file location and [Diff](/tools/diff/) to check whether the claim matches the code. Treat the suggested fix as a proposal to evaluate.

## Add context and check again

Use **Add comment** to enter relevant context, then **Save note** to keep it with the finding. For example: “This function currently accepts strings only; please evaluate blank strings within that contract.”

After a fix, **Check status** requests another assessment of the finding. Also run the relevant checks and inspect the updated diff. An agent’s assessment is useful evidence, but it does not replace those checks.

Use **All findings** to return to the list. If a severity filter hides findings, choose **Show all findings** when that control is available.

## Finish the review

Compare the result with your original task. Confirm that important findings were addressed or have a clear explanation, and that tests or manual checks support the change. Then continue your project’s normal review process.
