---
title: "Find the right tool"
description: "Choose a Firehose control by the result you want, from starting a session to reviewing changes."
verified: "2026-09-13"
evidence: ["launch", "chat", "diff", "questions", "review", "review-actions", "review-scope", "terminal", "attachments", "commit-action"]
---

Find the control you need for your next step. Firehose’s controls organize the work; the commands your agent can run also depend on its provider and permissions.

## New session: start work

**You provide:** a project, workspace, provider, model, and permission choices. **You get:** a session in the selected directory on your server.

Have a configured provider and a project ready. [Start your first session](/getting-started/first-session/) or [choose a workspace](/guides/workspaces/) for a separate task.

## Chat: give direction

**You provide:** a task, a follow-up, or an answer. **You get:** the agent’s response and activity.

Check the selected project and branch before sending. [Use Chat](/tools/chat/) to follow the work and understand delivery notices.

## Questions: clarify a decision

**You provide:** a topic through **ask me questions**, an interview depth, and your answers in **Questions**. **You get:** a combined answer message for the selected session in that worktree.

Use a session where Chat input is available and check for an unfinished questionnaire first. [Answer clarifying questions](/tools/questions/).

## Diff: inspect what changed

**You choose:** a comparison and a file. **You get:** changed lines, file contents, or commit details.

Use a session associated with a Git repository. [Review with Diff](/tools/diff/) to distinguish working edits from branch commits.

## Smart Review: investigate and act

**You provide:** branch changes, optional focus areas, and decisions on findings. **You get:** an assessment and follow-up work after you dispatch your choices with **Act**.

Use committed branch changes, an available agent, and a usable review base such as `origin/main`. For the standalone greeting sample, use Diff and its checks. [Use Smart Review](/tools/smart-review/), then [finish the task](/guides/finish-a-task/).

## Terminal: run an independent check

**You provide:** a server directory and a command. **You get:** live command output in a server shell. [Run a terminal check](/tools/terminal/) and distinguish a separate shell from the agent's live terminal.

## Attachments: supply concrete evidence

**You provide:** a file or screenshot and a request explaining its relevance. **You get:** a staged copy available to the selected agent. [Attach evidence](/tools/attachments/) and check upload, delivery, and the response separately.

## Commit: record reviewed work

The prompt bar's **commit** control, when available, opens a list grouped as **Staged**, **Unstaged**, and **Untracked**. Selecting **Commit** requests agent work; the list is not a per-file selection interface. For mixed edits, give explicit scope in Chat and verify the resulting commit. Follow [the local commit walkthrough](/guides/project-workflow/#4-request-and-inspect-a-local-commit).

Team Chat, X-Ray, Timeline, voice, and issue workflows still need complete verified walkthroughs. Their presence in an installation does not mean this guide covers their prerequisites or outcomes.
