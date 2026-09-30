---
title: "Glossary"
description: "Understand agents, models, sessions, context, and Git terms through a concrete task."
verified: "2026-09-29"
evidence: ["launch", "chat", "diff", "questions", "connection", "context-actions", "layout"]
---

Look up an unfamiliar term, then return to the step where you encountered it.

## One task, several turns

Suppose you ask an agent to fix blank greetings. That is your **task**. You choose a **provider**, such as Codex, and a **model**, the AI system it uses to produce responses. Your **session** keeps the conversation with that agent together.

The agent explains the change in one **turn**. You ask it to add a missing test; it works again in another turn. Both turns belong to the same session and task.

**Context** is the conversation and other information available to the agent when it responds. If you clear conversation context, do not assume earlier chat instructions will carry into the next request. Put essential constraints in the new request. Clearing context is separate from changing files; see [Smart Review’s context choice](/tools/smart-review/#choose-whether-to-clear-context).

## Agent and conversation terms

| Term | Meaning |
| --- | --- |
| Agent | The coding assistant that reads files, responds, and can take actions allowed by its settings |
| Provider | The agent system you choose to handle requests, such as Claude or Codex |
| Model | The AI system selected within a provider to generate responses; the choices depend on your installation |
| Session | Your ongoing conversation with one agent, associated with a project workspace |
| Task | The result you want, such as fixing blank greetings; it may take several requests |
| Turn | A period of agent work following input, ending when it returns control or stops |
| Context | Information available for the next response, including the conversation so far and relevant material the agent has read |
| Approval | A decision about whether the agent may perform a requested action |
| Questionnaire | A set of task questions answered in the **Ask me** tab; submitting them tells the agent to continue the requested work |

## Files, Git, and connections

| Term | Meaning |
| --- | --- |
| Project | The repository you choose to work on |
| Repository | Files together with their Git history |
| Workspace | The directory and branch selected for a session |
| Checkout | Working files for a Git branch or revision |
| Worktree | An additional checkout with its own directory, sharing the repository’s Git history |
| Branch | A named line of changes recorded in Git |
| Diff | Differences between two versions of files |
| Commit | A recorded snapshot of changes in Git |
| Staged | Changes selected for the next Git commit |
| Unstaged | Edits to tracked files that have not been selected for the next commit |
| Untracked | A file Git is not tracking yet |
| Server | The machine running Firehose and your agent sessions |
| Tailnet | The Tailscale network used to connect your devices |
| SSH | A separate terminal login to another machine; it requires its own access |

See [What you can do](/what-you-can-do/) for tasks and [Find the right tool](/tools/overview/) for controls.
