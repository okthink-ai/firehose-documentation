---
title: "Find the right tool"
description: "Find the Firehose controls for starting sessions, chatting, reviewing changes, and answering questions."
verified: "2026-09-13"
evidence: ["launch", "chat", "diff", "questions", "review"]
---

Find the control you need for the next step of your task. The tools below are Firehose controls; the commands an agent can run also depend on its provider and permissions.

| Tool | What you provide | What you get | Before you use it |
| --- | --- | --- | --- |
| **New session** | Project, workspace, agent, model, and autonomy choices | An agent session in the selected directory | Have a project and configured provider on the server |
| **Chat** | A request or follow-up message | Agent responses and visible activity | Check which session is selected |
| **Diff** | A comparison and a file to inspect | Changed lines, file contents, or commit details | Use a session associated with a Git repository |
| **ask me questions** / **Questions** | A topic, interview depth, and your answers | Clarification questions and a combined answer message | Use a controllable session in the intended worktree |
| **Smart Review** | A review request and optional areas of focus | Findings you can inspect and act on | Have branch changes to review and an available agent |

## Start and steer

[Start a session](/getting-started/first-session/) when you need an agent. [Choose a workspace](/guides/workspaces/) to decide whether it should use the current directory, a new worktree, or an existing branch.

Use [Chat](/tools/chat/) to explain the result you want and respond when the agent needs more information.

## Inspect and decide

Use [Diff](/tools/diff/) to see the actual changes. Use [Smart Review](/tools/smart-review/) to investigate potential problems. Use [Questions](/tools/questions/) when a task needs decisions before implementation.

This first set of guides covers these core controls. Additional tools will get their own guides as their complete workflows are verified.
