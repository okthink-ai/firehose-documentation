---
title: "Coordinate several sessions"
description: "Separate tasks, track which session needs attention, and review each result without mixing work."
verified: "2026-09-13"
evidence: ["launch", "chat", "session-signals", "questions", "project-setup"]
---

Run independent tasks in clearly identified workspaces and keep responsibility for each result visible.

## Before you begin

Split the work into outcomes that can be checked separately. Two tasks that must change the same function are easier to sequence unless you have agreed how their edits will be combined.

For example, in a fictional shop project, one session could improve checkout error text while another documents an unrelated account setting. These are task examples, not Firehose features.

## Give each task a home

1. Use **New session → New worktree** for each independent task. Choose descriptive names such as `checkout-errors` and `account-help`.
2. Record each session's project, full workspace path, branch, intended files, and acceptance check.
3. [Prepare each workspace](/guides/prepare-project/) before asking for implementation.
4. Send a focused task to the matching session, including what it should leave for the other task.

Worktrees separate working files. They still share repository history and can use the same databases, ports, or external services. Agree on those resources before starting parallel commands. Do not assume a second worktree includes another session's uncommitted changes.

## Check in without losing your place

Use the sidebar to select a session, then confirm its project and branch before replying. Read the latest response alongside its activity signal. **Idle** can mean a completed turn or a request for input; it does not establish completion.

Keep a small task list with three fields: latest result, decision needed, and next check. Resolve ordinary questions in that session's Chat. For **Questions**, verify the receiving session before submission; sessions in the same worktree share the unfinished questionnaire.

## If sessions share a directory

Changes made by one session are visible to the other. Assign one editing task at a time when overlapping work is possible. Ask the other session to wait or limit its task to an explanation. That request communicates responsibility; it is not a file lock.

If edits collide, pause the affected work, compare the files with the recorded starting states, and use [targeted recovery](/guides/recover-changes/). Do not ask both agents to repair the same conflict simultaneously.

## Review and combine results

Inspect each workspace's diff and checks separately. Record the commit and remaining concerns for each task. Ask the project maintainer which order to integrate them, then rerun relevant checks after integration. Passing independently does not establish that the combined result works.

This procedure uses ordinary sessions and worktrees. Dedicated coordination tools such as Team Chat still need a verified user walkthrough before these guides can explain their complete behavior.
