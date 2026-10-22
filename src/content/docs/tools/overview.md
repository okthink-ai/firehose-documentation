---
title: "Find the right tool"
description: "Choose a Firehose control by the result you want, from starting a session to reviewing changes."
verified: "2026-10-21"
evidence: ["launch", "chat", "diff", "questions", "review", "review-actions", "review-scope", "terminal", "attachments", "commit-action", "layout", "review-start-screen", "commit-hook-retry", "workflows-beta"]
---

Find the control you need for your next step. Firehose’s controls organize the work; the commands your agent can run also depend on its provider and permissions.

## New session: start work

**You provide:** a project, workspace, provider, model, and permission choices. **You get:** a session in the selected directory on your server.

Have a configured provider and a project ready. [Start your first session](/getting-started/first-session/) or [choose a workspace](/guides/workspaces/) for a separate task.

## Chat: give direction

**You provide:** a task, a follow-up, or an answer. **You get:** the agent’s response and activity.

Check the selected project and branch before sending. [Use Chat](/tools/chat/) to follow the work and understand delivery notices.

## Questions: clarify a decision

**You provide:** a topic through **tools → Ask me questions** on the prompt bar, an interview depth, and your answers in the **Ask me** tab. **You get:** a combined answer message for the selected session in that worktree.

Use a session where Chat input is available and check for an unfinished questionnaire first. [Answer clarifying questions](/tools/questions/).

## Diff: inspect what changed

**You choose:** a comparison and a file. **You get:** changed lines, file contents, or commit details.

Select the **Diff** tab at the top of a session associated with a Git repository. [Review with Diff](/tools/diff/) to distinguish working edits from branch commits.

## Smart Review: investigate and act

**You provide:** branch changes, optional focus areas, and decisions on findings. **You get:** an assessment and follow-up work after you dispatch your choices with **Act**.

Start one from **tools → Smart review** on the prompt bar, or with **Start a review** in the **Smart Review** tab when the branch has no findings yet, and read it in that tab. It needs committed branch changes, an available agent, and a usable review base such as `origin/main`. For the standalone greeting sample, use Diff and its checks. [Use Smart Review](/tools/smart-review/), then [finish the task](/guides/finish-a-task/).

## Terminal: run an independent check

**You provide:** a server directory and a command. **You get:** live command output in a server shell, in the **Terminal** tab at the top of a session. [Run a terminal check](/tools/terminal/) and distinguish a separate shell from the agent's live terminal.

## Attachments: supply concrete evidence

**You provide:** a file or screenshot and a request explaining its relevance. **You get:** a staged copy available to the selected agent. [Attach evidence](/tools/attachments/) and check upload, delivery, and the response separately.

## Commit: record reviewed work

The prompt bar's **commit** button, shown when the branch has uncommitted changes, opens a list grouped as **Staged**, **Unstaged**, and **Untracked**. Selecting **Commit** requests agent work; the list is not a per-file selection interface. For mixed edits, give explicit scope in Chat and verify the resulting commit. Follow [the local commit walkthrough](/guides/project-workflow/#4-request-and-inspect-a-local-commit).

With Claude Code, Codex, and Antigravity, **Commit** asks the agent for one local commit of all current changes, including untracked files. If a file looks like it holds secrets or credentials, the agent commits it and then warns you. It doesn't push.

If the project's pre-commit hook rejects the commit, the agent fixes the reported problem, reruns the check, and tries the commit again. Its final message lists every file it edited to satisfy the hook, so review those edits in **Diff**. If it can't fix the problem safely, it reports what blocked it and stops, leaving your changes in place. It never bypasses the hook, and never uses `git reset`, `git restore`, `git checkout --`, `git stash`, or `git clean` to recover. Pi and Grok sessions use their own commit instructions without this retry.

## Workflows (beta): run a chain of steps

**You provide:** a workflow of steps, such as implement, Smart Review, and confirm, plus an optional GitHub issue or request. **You get:** a run that Firehose drives step by step, which you follow and control in the **Workflows** panel.

Workflows is a beta feature; turn it on in **Settings → Beta features**. [Use Workflows](/tools/workflows/) to build a workflow, start a run from a session or an issue, and understand issue claims.

Team Chat, X-Ray, Timeline, and voice still need complete verified walkthroughs. Their presence in an installation does not mean this guide covers their prerequisites or outcomes. For running a workflow on a GitHub issue, see [Workflows (beta)](/tools/workflows/#github-issues-and-claims).
