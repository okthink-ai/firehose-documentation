---
title: "Use Smart Review"
description: "Choose review actions, dispatch work to your session, and verify the resulting changes."
verified: "2026-09-13"
evidence: ["review", "review-actions", "diff"]
---

Get an agent’s assessment of branch changes, choose how to handle each finding, and send those decisions back for action.

## Before you begin

Select a session with branch changes you want reviewed. Confirm its project and branch. Review actions can request code changes or create a GitHub issue, so choose the session that should receive that work.

## 1. Start a review

Open **Smart Review**. When no review is available, select **Start a review**. If the flow asks for **Areas of Focus**, describe the concerns that matter. For the greeting example:

```text
Check blank-name handling and whether the tests cover spaces-only input.
Look for unintended changes to greetings for nonblank names.
```

**Expected result:** findings appear as the agent works. Read any failure message before starting another review.

## 2. Evaluate a finding

Select a finding and read **What**, **In practice**, **Impact**, and **Fix**. Check its file location against [Diff](/tools/diff/). A proposed fix still needs your judgment.

Use **Add comment**, then **Save note** to preserve relevant context. For example: “The input contract is strings only. Please investigate blank strings within that contract.”

## 3. Choose what should happen

Selecting an action records your choice. Selecting the same action again clears it. The choice alone does not dispatch the work.

| Action | What you ask for when you dispatch it |
| --- | --- |
| **Fix** | Implement a fix for the finding |
| **Explain** | Read the relevant code and expand the explanation |
| **Refine** | Investigate the finding and improve its assessment |
| **Rewrite** | Clarify the finding’s wording while preserving its meaning; this is not a code rewrite |
| **Issue** | Create a GitHub issue for follow-up; the agent needs the relevant GitHub access |
| **Won’t fix** | Close the finding during Act without sending it to an agent |

**Example:** if the reviewer finds missing spaces-only coverage, choose **Fix**. If you don’t yet understand why the case matters, choose **Explain** first. An explanation or refinement may leave a decision for you to make afterward.

## 4. Dispatch your decisions

1. Confirm the selected session and your choices across the findings.
2. Use **Act** to dispatch eligible items. Its menu offers **Act on items** and **Clear context and act**.
3. Choose **Act on items** to send the work without requesting a context clear. **Clear context and act** requests a context reset before delivery; include necessary task constraints in finding comments if you use it.
4. Follow the review’s progress and the session’s conversation.

**Expected result:** eligible findings are queued for work after delivery succeeds. Items already queued, working, or done are not dispatched again by the same action. Pending **Won’t fix** items close without agent work.

If dispatch fails, inspect the error and current finding states before retrying. Some Won’t fix decisions may already have closed even if other work could not be sent. Do not treat a selected action or a queued item as proof that a fix succeeded.

## 5. Verify the result

After work completes, inspect the updated diff and run the relevant checks. For the greeting example, check both spaces-only and nonblank inputs.

Use **Check status** on a finding to request another assessment after a fix. Read its response alongside your own checks. Use **All findings** to return to the list; **Show all findings** removes a severity restriction when that control is available.

Finish with the [task handoff and cleanup checklist](/guides/finish-a-task/).
