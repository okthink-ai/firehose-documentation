---
title: "Prepare a project for an agent"
description: "Check instructions, dependencies, configuration, and existing failures before asking for changes."
verified: "2026-09-13"
evidence: ["launch", "project-setup", "terminal", "example"]
---

Give the agent a workspace where you can reproduce the problem and check its work. Finish this preparation before asking it to implement a change.

## Before you begin

Choose a repository already on the server and confirm you can use its development setup. For a first exercise, use the [greeting example](/getting-started/first-session/). For a browser task with no dependencies, try the [greeting form walkthrough](/guides/project-workflow/).

## 1. Establish the starting point

Select the intended project and [workspace](/guides/workspaces/). In a [server terminal](/tools/terminal/), run:

```sh
pwd
git branch --show-current
git status --short
```

Record the full path, branch, and existing edits in your task notes. If the branch name is blank or the directory is unexpected, confirm the checkout with the project maintainer before continuing. Existing edits are part of your starting state; do not discard them to make the output empty.

## 2. Find the project's instructions

Ask in Chat:

```text
Read this project's README and applicable contributor and agent instructions.
Identify the package manager, required runtime, setup command, test command,
and how to run the app. Cite the files that specify each one.
List required configuration names and services without printing secret values.
Report existing working changes. Do not install, edit, or start services yet.
```

Check the cited files. A missing setup instruction is a question for the maintainer, not permission to guess a package manager or install unrelated tools.

## 3. Confirm dependencies and configuration

Agree on the commands and services needed for this task, then run the documented setup in this workspace. Use the project's prescribed runtime and lockfile. Have the operator supply required configuration through the project's usual process.

A new worktree does not establish that dependencies, ignored configuration files, or external services are ready. Firehose has a specific copy helper for `apps/expo/.env`; it is not general provisioning for every project's configuration. Check the files your project actually needs. Never paste secret values into a setup report.

If another task already uses a service, agree on whether to share it or use a separate instance. Record the application address and port so you can distinguish this workspace's app from another task's server.

## 4. Run a baseline check

Run the documented relevant tests before editing. For a visible bug, open the app and reproduce the behavior too. Record the exact command, outcome, and manual steps.

For example, a fictional project's baseline might be: “Tests pass; submitting a spaces-only name displays `Hello, !`.” If tests already fail, preserve the failure output and decide whether fixing it belongs to this task. Do not later attribute that failure to the agent without comparing the baseline.

**Ready to proceed:** you know the workspace, existing edits, setup requirements, verification command, and observable behavior to change. Continue with [a complete browser task](/guides/project-workflow/), or adapt that sequence to your application.
