---
title: "Use Smart Review"
description: "Choose review actions, dispatch work to your session, and verify the resulting changes."
verified: "2026-09-29"
evidence: ["review", "review-actions", "diff", "context-actions", "review-scope", "layout"]
---

Get an agent’s assessment of branch changes, choose how to handle each finding, and send those decisions back for action.

## Before you begin

Select a session with branch changes you want reviewed. Confirm its project and branch. Review actions can request code changes or create a GitHub issue, so choose the session that should receive that work.

**Starting state:** use a task branch with committed changes and an available review base. Smart Review instructs the agent to start from the committed branch diff and then read full changed files. Uncommitted work alone is not that branch diff; inspect it in the **Diff** tab with **Compare** set to **Working changes**.

The default review base is `origin/main`, with `origin/master` used when it is found instead. Unlike Diff’s broader fallback behavior, a fresh practice repository with no remote references does not automatically get a usable Smart Review base. If neither exists, ask the project maintainer how reviews are configured. Do not add or publish a remote just to finish the greeting exercise.

For a configured project, follow its commit policy to record the changes before starting this branch review. A commit alone does not push them. The example below assumes a finding about spaces-only coverage; a real review can produce different findings or none.

## 1. Start a review

On the prompt bar above the message box, select **tools**, then **Smart review**, then **run review**. **Smart review** appears only on a branch other than `main` or `master`. In **Areas of Focus**, describe the concerns that matter, then select **Start Review**. Follow progress in the **Smart Review** tab at the top of the session, which says **No active review** until one exists. For the greeting example:

```text
Check blank-name handling and whether the tests cover spaces-only input.
Look for unintended changes to greetings for nonblank names.
```

**Expected result:** the review begins analyzing changes; findings may appear as it works. An empty panel alone does not establish a successful review. See [empty and unsuccessful reviews](#if-the-review-is-empty-or-unsuccessful) below.

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

### Choose between Explain, Refine, and Rewrite

Use the same hypothetical finding: “Spaces-only names may not use the fallback.”

- Choose **Explain** when you need to understand the finding: “Trace the spaces-only input through the function and explain the result.” Check the added explanation against the code.
- Choose **Refine** when you question its accuracy: “The function already trims before choosing the fallback. Recheck whether this defect exists.” The requested investigation may correct or invalidate the finding; it does not ask for a code fix.
- Choose **Rewrite** when you accept the finding but its wording is confusing: “Explain the same problem in plain language, preserving the conclusion.” This requests clearer finding text, not a different implementation.

After the response, decide whether a **Fix** is still needed. A clearer explanation is not itself a code change.

## 4. Dispatch your decisions

1. Confirm the selected session and your choices across the findings.
2. Use **Act** in the review header, which appears once a finding has an action chosen and shows a count such as **Act (1 fix)**, to dispatch eligible items. Its menu offers **Act on items** and **Clear context and act**.
3. Choose **Act on items** to send the work without requesting a context clear. **Clear context and act** requests a context reset before delivery; include necessary task constraints in finding comments if you use it.
4. Follow the review’s progress and the session’s conversation.

**Expected result:** eligible findings are queued for work after delivery succeeds. Items already queued, working, or done are not dispatched again by the same action. Pending **Won’t fix** items close without agent work.

If dispatch fails, inspect the error and current finding states before retrying. Some Won’t fix decisions may already have closed even if other work could not be sent. Do not treat a selected action or a queued item as proof that a fix succeeded.

### Choose whether to clear context

**Context** includes the conversation available to the agent for its next response. **Act on items** sends the review work without requesting a clear. Use it when earlier discussion still matters.

**Clear context and act** first requests a fresh conversation context. For managed agents, Firehose clears the conversation history after the provider clear succeeds; some providers require a replacement session. The Claude terminal path sends `/clear` before review work. This does not undo repository edits or delete the saved review findings.

The new review request is built from the actionable findings and their comments. Put necessary constraints there before clearing, such as “Strings only; keep existing nonblank greetings.” Do not assume unrelated earlier chat messages will accompany the new request. Nor should you treat this control as a guarantee that provider-side transcript records are erased.

If the clear fails, inspect the error before retrying: the normal path does not send the review work when clearing fails. Confirm the active session if a replacement was created.

## 5. Verify the result

After work completes, inspect the updated diff and run the relevant checks. For the greeting example, check both spaces-only and nonblank inputs.

Use **Check status** on a finding to request another assessment after a fix. Read its response alongside your own checks. Use **All findings** to return to the list; **Show all findings** removes a severity restriction when that control is available.

### Follow one finding through to evidence

For a finding about a missing spaces-only test, choose **Fix**, add the strings-only constraint, and use **Act on items**. After the work returns, open `greeting.test.mjs` in **Diff** and confirm it tests `"   "` against `"Hello, guest!"`. Run `node --test` in that workspace and check all four greeting cases. Then request **Check status** and read the assessment. This is an illustrative sequence; inspect the actual result instead of expecting fixed agent wording.

## If the review is empty or unsuccessful

- **Analyzing branch changes…** means analysis is still in progress. Check the selected session’s Chat for activity or a reported problem.
- **No … findings** can be a severity filter result. Select **Show all findings** before deciding the review is empty.
- A failed review can show its error in the empty panel. Keep that error and check the session before starting another review.
- A completed review with no findings means none were reported. It does not establish that tests passed or every defect was ruled out. Verify the diff and checks anyway.

Finish with the [task handoff and cleanup checklist](/guides/finish-a-task/).
