---
title: "Run a workflow (beta)"
description: "Turn on Workflows, run a list of agent steps such as implement, review, commit, and push, and follow or stop the run."
verified: "2026-10-21"
evidence: ["workflows", "workflow-runs", "workflow-triggers"]
---

Hand Firehose a list of steps, such as "implement the fix, check it with Smart Review, commit, and push," and let it send each step to an agent in order while you watch. Use a workflow when you repeat the same sequence on many branches or issues and want Firehose to move from one step to the next for you.

**Workflows are a beta feature.** They are off by default, they may change or go away, and some parts have known gaps (see [Limits and known gaps](#limits-and-known-gaps)). Workflows were added in Firehose 1.3.0. If you don't see **Workflows** under **Beta features** in Settings, your Firehose doesn't include them yet.

## What a workflow is

A **workflow** is a named list of steps that belongs to one project. Firehose's server runs the steps one at a time: it sends a step to the agent, waits for the agent to finish, and then moves on. The browser doesn't have to stay open while a run is going.

A **run** is one pass through a workflow. A run works in one of these places:

- **An existing session.** The steps go to that session, in its checkout.
- **A new worktree.** Firehose makes a fresh worktree from the repository and starts an agent in it, so the run never works in a checkout someone else is using.
- **No session.** If every step runs outside a session (only **Your agent** and **Confirm** steps), Firehose starts no session at all.

Each workflow is saved as a file in the project's `.firehose/workflows/` folder. Commit that file to share the workflow with your team and with your other worktrees. Runs, on the other hand, stay on the computer that runs Firehose.

## Before you begin

- **A project with a session or a GitHub remote.** The **Workflows** panel lists workflows for projects you have sessions in. Runs about a GitHub issue need the `gh` command signed in on the Firehose computer, as the Issues panel does.
- **The agents the steps name.** A step can name a provider and model, such as Claude Code `opus` or Codex `gpt-5.6-sol`. If this computer can't start that agent, Firehose refuses to start the run and says which step needs what.
- **Permission settings you accept.** Steps often run with **No permission prompts** turned on, and a run that starts its own session does so by default. The agent then edits, runs commands, and commits without asking you first. Read [agent permissions](/reference/agent-permissions/) before you run a workflow on real work.
- **Committed or disposable work.** Steps such as **Rebase**, **Commit**, and **Push** change your branch and can publish it. Start on a branch whose current state you could recover.

## Turn on Workflows

1. Select the gear icon labeled **Settings** at the bottom of the icon rail.
2. Choose **Beta features**.
3. In the **Workflows** group, switch on **Show Workflows**.

**Expected result:** a **Workflows** icon appears on the icon rail, and **Run workflow…** appears in the **tools** menu on the prompt bar, in a session row's **⋮** (**Session options**) menu, and on GitHub issues. The setting applies to the device where you switch it on.

Switching it off hides these controls only. Runs that have already started keep going.

## Find your workflows

Select **Workflows** on the icon rail. The panel shows one project at a time; use the menu at the top of the panel to switch projects. It has these sections:

- **Workflows**: the project's workflows. Each row shows the number of steps and where the workflow comes from, such as **built into Firehose** or the file path. A row may also say **needs an agent this computer can't start** or **has a step this server cannot run**.
- **Running**: runs that haven't finished.
- **Recommended**: ready-made workflows you can add to the project.
- **Recent runs**: finished runs.

Select a workflow row to open it in the editor. Its **⋮** menu offers **Run…**, **Edit**, and, for workflows saved in the project, **Delete**.

### The built-in Quality workflow

Every project lists **Quality**, a workflow built into Firehose. It catches the branch up, reviews it, fixes the findings, and publishes it. Its steps, in order:

1. **Rebase** onto the base branch.
2. **Validate** with a type check.
3. **Smart Review**.
4. **Review more**, with a cleared context.
5. A prompt that sorts the review findings, implements the accepted ones with tests, and commits.
6. **Validate** with unit tests, lint, and a native type check.
7. **Commit**.
8. **Push**.
9. **Create or update PR**.
10. **Simplification prompt**.
11. **PR description prompt**.
12. **Wait for required CI**.

Quality uses two agents. The review, simplification, and pull-request description steps use Claude Code `opus`. The other steps use Codex `gpt-5.6-sol`. All steps use high effort with no permission prompts. If your Codex doesn't offer `gpt-5.6-sol`, Firehose won't start Quality until you change those steps' agent. To do that, open Quality in the editor, change each step's **Agent**, and select **Save**. Saving a change creates the project's own copy in `.firehose/workflows/quality.json`, which replaces the built-in in that project. Deleting that copy brings the built-in back.

Quality's checks and its two prompt steps assume a particular project setup; see [Limits and known gaps](#limits-and-known-gaps).

### Recommended workflows

Select **Add** next to a recommended workflow to save a copy in the project. Firehose opens the copy in the editor so you can adjust it. A recommended workflow whose name the project already uses shows **Added**.

| Workflow | What it does |
| --- | --- |
| **Fix an issue** | Implements and tests a fix, runs a Smart Review and resolves its findings, simplifies, checks, then publishes the pull request after you confirm. |
| **Review and fix** | Runs a Smart Review and a fresh-context Review more on the branch, resolves the findings, and runs the checks. Doesn't push. |
| **Second opinion** | Codex reviews the branch with a Smart Review, then Claude Code resolves the findings. |
| **Catch up with base** | Rebases the branch onto its base branch and fixes anything the type check finds. |
| **Tidy up** | Removes accidental complexity from the branch, then runs the checks. |
| **Ship it** | Commits, pushes, opens or updates the pull request, writes its description, and watches required CI until it passes. |

Apart from **Second opinion**, these steps name no agent, so each one runs in whatever session the run uses.

## Build or edit a workflow

1. In the **Workflows** panel, select **New workflow**, or select an existing workflow to edit it. The editor opens in the main area.
2. Type a name in the **Name this workflow** field at the top.
3. Select **Add step** and choose a step. **Starter steps** are prompts ready to use: **Implement**, **Resolve review findings**, and **Custom step**. **Building blocks** are the individual step types listed below.
4. Select a step to expand it and fill in its settings, such as its **Prompt**. Use **Move step up**, **Move step down**, and **Delete step** to arrange the list.
5. Select **Save**.

**Expected result:** the editor says where the workflow is saved, for example `Saved in .firehose/workflows/wf-k3j9x2.json`. Commit that file to share it with your team and with other worktrees. Until you commit and pull it, the workflow exists only in the worktree where you saved it.

An enabled step that isn't finished, such as an **Agent prompt** with no prompt, blocks **Save** and names the step. To save it anyway, expand the step and clear **Run this step**. The step stays in the workflow but is skipped.

If someone else saved the same workflow after you opened it, Firehose says **Someone changed this workflow since you opened it.** Select **Load their version**, then make your change again.

### Step types

| Step | What it does |
| --- | --- |
| **Agent prompt** | Sends a prompt to the agent and waits for its turn to finish. |
| **Run skill** | Invokes an installed skill or command and waits for it to finish. |
| **Your agent** | Sends a prompt to an agent you run yourself, such as a Mastra agent, and keeps its reply for the next steps. |
| **Smart Review** | Starts a [Smart Review](/tools/smart-review/) with a saved focus prompt and waits for findings. |
| **Review more** | Runs Review more on the branch's latest review with fresh context. |
| **Rebase** | Rebases onto the base branch. |
| **Validate** | Asks the agent to run the chosen checks one at a time and fix failures. |
| **Commit** | Commits the work. |
| **Push** | Asks the agent to push the branch. |
| **Create or update PR** | Creates the pull request, or updates the open one. |
| **Simplification prompt** | Runs `/create-simplification-prompt`, then has the agent carry it out. |
| **PR description prompt** | Runs `/create-pr-description-prompt`, then has the agent apply it. |
| **Wait for required CI** | Asks the agent to watch required checks on the pull request and fix failures. |
| **Wait for idle** | Waits until the agent is no longer working. |
| **Confirm** | Pauses the run until you choose **Continue**. |

### Choose the agent for a step

Steps that ask an agent to work have an **Agent** field:

- **The run's session, as it is**: the step goes to the session the run is already using.
- **Claude Code** or **Codex**: choose a model and an effort, and whether to allow **No permission prompts**. Before the step, Firehose keeps the current session if it already matches. Otherwise it starts the chosen agent in the same checkout and moves the run to that new session.

If this computer can't start the chosen model, the field says so, for example "Codex on this computer doesn't offer gpt-5.6-sol. A run can't start until you choose another model."

Some steps also offer **Start with a cleared context**, which clears the agent's conversation before the step's prompt is sent. Put anything the step needs in its prompt, because earlier discussion won't be there.

### Use your own agent

A **Your agent** step sends its prompt to a [Mastra](https://mastra.ai/) agent you run yourself, and passes the reply to the next prompt steps. Run your Mastra project with `mastra dev`, then fill in:

- **Server address**: the address `mastra dev` prints, such as `http://localhost:4111`.
- **Agent ID**: the agent's ID, such as `reportAgent`.
- **Token variable (optional)**: only if your agent's server needs a token. Enter the name of the environment variable that holds it on the Firehose computer, such as `MASTRA_TOKEN`, not the token itself. This keeps the token out of the committed workflow file.

Select **Test connection**. **Expected result:** `Connected to` followed by your agent's name.

## Start a run

You can open the **Run workflow** dialog from several places:

- In the **Workflows** panel, a workflow row's **⋮** menu, then **Run…**. The editor also has a **Run…** button once your changes are saved.
- From a session: **tools → Run workflow…** on the prompt bar, or the session row's **⋮** (**Session options**) menu, then **Run workflow…**.
- From a GitHub issue in the Issues panel: **Run workflow…**.

In the dialog:

1. Under **Workflow**, choose a workflow. Each choice lists its steps.
2. Under **Where it runs**, choose **In this session** or **In a new worktree** when you started from a session. From elsewhere, Firehose makes a new worktree and starts the first step's agent in it.
3. Optionally, enter an issue number under **GitHub issue (optional)**, and describe the job under **What should it work on? (optional)**. The first prompt step receives both.
4. Select **Start run**.

**Expected result:** the **Workflows** panel opens on the new run.

If a step's agent can't start on this computer, the dialog explains which steps are affected and **Start run** is unavailable. Select **Edit workflow** to change the steps' agents, or turn those steps off.

### Fix issues with one workflow

When you start a run from an issue, the dialog offers a checkbox such as **Fix hello-firehose issues with "Fix an issue"**. With it checked, each issue in that project shows a **Fix with Fix an issue** button. That button starts the workflow in a new worktree with the issue as its context, without opening the dialog.

### One run per issue, and issue claims

A workflow runs at most once at a time on the same issue. If you start it again while a run is open, Firehose opens the existing run instead of starting a second one.

Before a run about an issue starts, Firehose posts a **claim** comment on the GitHub issue, as the account `gh` is signed in as. The comment reads like this:

> **Firehose is running the Quality workflow on this issue**, started by @your-name. Another Firehose that sees this comment won't start Quality here too. If the run is gone, delete this comment to release the issue.

Claims stop two teammates from running the same workflow on the same issue from different computers. If a teammate's claim is already there, the run doesn't start, and Firehose names who is running it and gives the address of their comment. When the run ends, Firehose rewrites the comment to say it completed or was cancelled. A cancelled run releases the issue. Only comments from people who can push to the repository count as claims.

## Follow a run

Select a run under **Running** or **Recent runs**. The run page opens in the main area and refreshes while the run is open. It shows:

- the workflow name and the run's status;
- where the run works, such as **Session 48213 on fix/blank-names**, or **No session**;
- **What this run is about**, the issue and request the run started with;
- each step with its state, and a **Your agent's reply** disclosure for **Your agent** steps.

Select **Open session** to see the agent's conversation for the current step.

| Run status | Meaning |
| --- | --- |
| **Running** | A step is in progress. |
| **Waiting** | The run is waiting, for example for a held prompt to be delivered. |
| **Paused** | You paused the run, or a **Confirm** step is waiting for you. |
| **Needs you** | A step couldn't go on. The message at the top of the run page says why. |
| **Completed** | Every step finished. |
| **Cancelled** | You ended the run. |

Steps show **Not started**, **Running**, **Waiting**, **Done**, **Skipped**, or **Stopped**.

## Pause, continue, or stop a run

The buttons on the run page change with its status:

- **Pause** holds the run so it sends nothing further. **Resume** continues it.
- **Continue** answers a **Confirm** step.
- **Retry** tries the stopped step again after a run shows **Needs you**. Fix the cause first, such as a missing agent or a failed sign-in.
- **Skip step** moves past the current step without running it.
- **Cancel run** ends the run.

Pausing or cancelling a run doesn't interrupt a turn the agent has already started. To stop the agent itself, select **Open session** and use the session's stop control.

## Example: fix an issue and check it before pushing

This example uses fictional data: a project named `hello-firehose` and issue #42, "Greet blank names as guest."

1. In the **Workflows** panel, select **New workflow** and name it `Fix and check`.
2. Select **Add step**, then **Implement**. This starter step reproduces the issue, adds a failing regression test, fixes it, and commits.
3. Select **Add step**, then **Confirm**, and set its **Message** to `Check the diff before pushing.`
4. Select **Add step**, then **Push**. Select **Save**.
5. Open issue #42 in the Issues panel and select **Run workflow…**. Choose **Fix and check**, enter `Keep the fix small.` under **What should it work on? (optional)**, and select **Start run**.

**Expected result:** Firehose posts a claim comment on issue #42, makes a new worktree, and starts an agent there. Step 1 shows **Running**. When it shows **Done**, the run shows **Paused** with the message `Check the diff before pushing.` Select **Open session**, review the change in [Diff](/tools/diff/), and then select **Continue** to push, or **Cancel run** to stop without pushing. The agent's own wording and the branch name will differ from run to run.

## Triggers

A **trigger** starts runs of a workflow without you: on a schedule, on a GitHub event (such as an issue opened or labeled, a pull request opened, failed pull request checks, or a `/firehose run <workflow>` comment), or when a signed webhook arrives. Each trigger launches a new run, in a new worktree when the workflow needs a session.

In this beta, Firehose has no screen for triggers. They are set up through Firehose's HTTP API, and they belong to the computer where they are created. Ask whoever administers your Firehose before relying on them.

## Limits and known gaps

- **Turning the beta off doesn't stop the server.** **Show Workflows** hides the controls on your device, but runs and triggers keep going.
- **Validate checks are a fixed list.** The checks are **Type check** (`pnpm exec tsgo --noEmit`), **Unit tests** (`pnpm exec vitest run`), **Lint and audits** (`pnpm run lint`), and **Native type check** (`npm run typecheck:native`). If your project uses other commands, use an **Agent prompt** step that names your own checks instead.
- **Two steps need commands Firehose doesn't install.** **Simplification prompt** and **PR description prompt** run `/create-simplification-prompt` and `/create-pr-description-prompt`. The agent must already have those commands.
- **A failed first turn can count as done.** If a step starts a new agent whose first turn fails, for example because of sign-in or quota, the step can still show **Done**. Check the session when a step finishes suspiciously fast.
- **Pull request and push triggers don't use the pull request's branch.** Their runs start on a new branch off `main`.
- **A claim from a computer that's gone stays.** Delete the comment on the issue to release it.
- **Runs are kept on one computer.** Teammates can't see each other's runs, only the claim comments. Firehose keeps up to 50 runs per repository and drops the oldest finished ones first.
- **Integrate steps don't run.** A workflow with an enabled **Integrate** step can't start; turn the step off.
- **A workflow can have at most 40 steps.**

## If something goes wrong

| Symptom | What to do |
| --- | --- |
| No **Workflows** icon on the icon rail | Turn on **Settings → Beta features → Show Workflows**. If that switch isn't there, your Firehose predates Workflows. |
| **Start run** is unavailable and the dialog says the workflow can't start on this computer | Select **Edit workflow** and change the named steps' **Agent** to one this computer has, or clear **Run this step** on them. |
| The run doesn't start and names a teammate who is already running the workflow on the issue | Open their claim comment at the address shown and coordinate. If their run is gone, delete the comment and start again. |
| The run doesn't start because the issue couldn't be claimed | Check that `gh auth status` succeeds on the Firehose computer, then try again. |
| A run shows **Needs you** | Read the message at the top of the run page, fix the cause, then select **Retry**, or **Skip step** to move on. |
| A workflow is missing in another worktree | Commit its file in `.firehose/workflows/` and pull it into the other worktree. |
| The panel says Git ignores `.firehose/workflows` | The workflows stay on this computer. Remove the ignore rule to share them. |

## Continue

Read [Use Smart Review](/tools/smart-review/) to understand the review steps, and [finish the task](/guides/finish-a-task/) once a run has published your branch.
