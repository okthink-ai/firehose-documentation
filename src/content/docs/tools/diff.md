---
title: "Review changes with Diff"
description: "Inspect changed files and commits, compare the result with your request, and identify what to fix next."
verified: "2026-09-13"
evidence: ["diff"]
---

Inspect what changed before you accept an agent’s result. **Diff** shows the code changes associated with the session’s repository.

## Open the changes

1. Select the session whose work you want to review.
2. Open **Diff**, then **Changes**.
3. Check the comparison you’re viewing. Branch changes and uncommitted changes answer different questions.
4. Select a changed file to see its diff.
5. Read added and removed lines alongside the original request.

A diff shows differences between two versions. It does not, by itself, show that a feature works. Ask for the relevant test or manual check as well.

## Choose a comparison

The workspace supports cumulative branch changes and working changes. Working changes can be narrowed to staged, unstaged, or untracked files.

| Comparison | Use it to answer |
| --- | --- |
| Cumulative branch changes | What changed across this branch? |
| Committed branch changes | What has already been recorded in branch commits? |
| Uncommitted changes | What remains outside commits? |
| Staged or unstaged changes | Which tracked edits are prepared for the next commit? |
| Untracked files | Which new files are not tracked by Git yet? |

Check the comparison and any filters when you don’t see a file you expected.

## Read a file or commit

Select **Code** in a file view when you need the file contents represented by that comparison. Deleted files do not have new contents to display.

Open **Commits** to browse the branch’s commits. Select a commit, then a file, to inspect that commit’s changes. Use the visible back control to return to its parent view.

Images, binary files, and files that exceed display limits may not have a text diff. Read the displayed explanation; a missing text preview does not mean the file is unchanged.

## Turn your review into a follow-up

For the greeting example, check that blank names get a fallback and nonblank names still have surrounding spaces trimmed. Then ask:

```text
The diff adds a fallback name. Show the checks for an empty string,
spaces only, and a nonblank name. Report which checks you ran.
```

If the repository changes while you’re reading, refresh the comparison before making a decision. For an additional review, use [Smart Review](/tools/smart-review/).
