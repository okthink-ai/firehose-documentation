---
title: "Choose a workspace"
description: "Decide whether an agent should use the current checkout, a new worktree, or an existing branch."
verified: "2026-09-13"
evidence: ["launch"]
---

Put each session in the directory and branch intended for its task. Firehose offers three workspace choices during session creation.

A Git **worktree** is a separate checkout of a repository. It gives a task its own directory and branch while sharing the repository’s Git history.

## Choose the right option

| Option | When to use it | What to check |
| --- | --- | --- |
| **Current checkout** | You want the agent to use the project directory already on disk | Its branch and any existing uncommitted work |
| **New worktree** | You want a separate directory and branch for a new task | A clear, unused task or branch name |
| **Existing branch** | You want to continue work on a branch that already exists | The selected result’s branch and checkout information |

## Start a separate task

1. Select **New session** and pick the project.
2. Select **Next: Choose a workspace**.
3. Choose **New worktree**.
4. Enter a **Task or branch name**, such as `greeting-blank-names`.
5. Select **Next: Choose agent**.
6. Review the agent, model, and autonomy settings, then select **Start session**.

The task name chooses the workspace; send the actual instructions in chat after the session starts. See [make and review a change](/guides/make-a-change/) for an example.

## Continue an existing branch

Choose **Existing branch** and search by branch name. The filters are **Checked out**, **Local or remote**, and **All**.

A result may use an existing checkout or create a worktree from the selected branch reference. Read the result’s directory and action before selecting it, then choose the agent and start the session.

## Keep parallel work understandable

Use descriptive names and check the branch when switching sessions. Sessions in the same directory share files, so changes from one can affect another.

A worktree separates directories; it does not promise isolation for services, databases, or other resources outside the repository. Include any task-specific setup in the request you give the agent.
