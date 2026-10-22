---
title: "Workflows (beta)"
description: "Chain agent steps such as implement, Smart Review, and commit into one run that Firehose drives for you, start it from a session or a GitHub issue, and follow it to the end."
verified: "2026-10-21"
evidence: ["workflows-beta", "release-1-3-0", "review"]
---

Build a workflow once, then let Firehose run its steps for you: implement a fix, run a Smart Review, resolve the findings, and stop for your check before anything is published. You can start a run from a session or straight from a GitHub issue, and follow every step in one place.

Workflows is a **beta** feature in Firehose 1.3.0. It is off until you turn it on, and it may change or go away.

## What a workflow is

A **workflow** is an ordered list of steps. Each step asks an agent to do one thing, such as "implement the change" or "run a Smart Review", or pauses for you. A **run** is one pass through a workflow. Firehose's server sends each step, waits for the agent to finish it, and moves on, so the run keeps going even if you close the browser.

A workflow is saved as a file in your project, in `.firehose/workflows/`. Commit that file to share the workflow with your team and with your other worktrees. Runs are kept on the Firehose computer and are shared by every worktree of the repository.

## Turn Workflows on

1. Open **Settings** and select **Beta features**.
2. Under **Workflows**, switch on **Show Workflows**.

The switch shows the Workflows panel, and **Run workflow…** in session menus and on GitHub issues. It is saved for this device, so turn it on again on your phone or another browser.

Turning the switch off only hides these controls. Runs that already started keep going, and the server still accepts workflow requests.

## Where Workflows appears

With the switch on, you can reach Workflows from:

- **Workflows** on the icon rail on the far left, just below **GitHub Issues**. It opens the Workflows panel.
- **Run workflow…** in the prompt bar's **tools** menu, and in a session's **⋮** menu. These start a run from that session.
- **Run workflow…** in an issue's details in **GitHub Issues**. The run gets that issue as its context.

## The Workflows panel

The panel shows one project at a time; change it with the project menu at the top. It lists:

- **Workflows**: this project's workflows. Each row shows its step count and where it comes from, such as its file path or **built into Firehose**. Select a row to edit it, or use its **⋮** menu for **Run…**, **Edit**, and **Delete**.
- **Running**: runs that have not finished.
- **Recommended**: ready-made workflows you can add.
- **Recent runs**: finished runs. Firehose keeps the last 50 finished runs of each repository.

A project with no workflows shows **Build a workflow** with a **New workflow** button, followed by the recommended workflows.

A row can warn **has a step this server cannot run** or **needs an agent this computer can't start**. See [Troubleshooting](#troubleshooting).

## Built-in and recommended workflows

**Quality** is built into Firehose and listed in every project. You can view and run it, but not delete it. If you change it and select **Save**, Firehose saves this project's own copy, which replaces the built-in one in this project. Quality names specific agents: Codex with the `gpt-5.6-sol` model and Claude Code with `opus`. If this computer can't start one of them, Quality can't start until you change those steps.

**Recommended** workflows are short chains for common jobs. Select **Add** to save a copy in the project, then edit it like any other workflow:

| Workflow | What it does |
| --- | --- |
| **Fix an issue** | Implements and tests a fix, runs a Smart Review and resolves its findings, simplifies, checks, then publishes the pull request after you confirm |
| **Review and fix** | Runs a Smart Review and a fresh-context **Review more**, resolves the findings, and runs the checks; doesn't push |
| **Second opinion** | Codex reviews the branch with a Smart Review, then Claude Code resolves the findings |
| **Catch up with base** | Rebases the branch onto its base branch and fixes anything the type check finds |
| **Tidy up** | Removes accidental complexity from the branch, then runs the checks |
| **Ship it** | Commits, pushes, opens or updates the pull request, writes its description, and watches required CI until it passes |

### Steps that assume Firehose's own repository

Three building blocks send fixed commands that come from the Firehose project itself. Check that your project has them before you rely on these steps:

- **Validate** asks the agent to run the checks you tick, one at a time: **Type check** (`pnpm exec tsgo --noEmit`), **Unit tests** (`pnpm exec vitest run`), **Lint and audits** (`pnpm run lint`), and **Native type check** (`npm run typecheck:native`). The editor shows each command next to its check.
- **Simplification prompt** sends `/create-simplification-prompt`, then asks the agent to carry out the result.
- **PR description prompt** sends `/create-pr-description-prompt`, then asks the agent to apply it.

Firehose doesn't install those two skills. If your project uses different commands or doesn't have the skills, these steps won't do what their names suggest. They appear in **Fix an issue**, **Review and fix**, **Catch up with base**, **Tidy up**, **Ship it**, and the built-in **Quality**. Turn those steps off, or replace them with a **Custom step** that names your own commands.

## Build a workflow

1. In the Workflows panel, select **New workflow**.
2. Type a name in **Name this workflow**.
3. Select **Add step** and choose a step. Repeat for each step.
4. Select a step's header to open its settings, and fill them in.
5. Select **Save**.

Saving creates a file in the project's `.firehose/workflows` folder. The editor then shows **Saved in** and the file's path. A workflow can have up to 40 steps.

### Starter steps and building blocks

**Add step** offers two groups:

- **Starter steps** are steps with a prompt already written:
  - **Implement**: reproduces the problem, adds a failing regression test, makes the smallest fix, runs the type check and focused tests, and commits. It doesn't push or open a pull request.
  - **Resolve review findings**: triages every finding from the branch's latest Smart Review, fixes the accepted ones with focused tests, and commits. It starts with a cleared context.
  - **Custom step**: an empty prompt you write.
- **Building blocks** are single actions, such as **Agent prompt**, **Run skill**, **Smart Review**, **Review more**, **Rebase**, **Commit**, **Push**, **Create or update PR**, **Wait for required CI**, **Wait for idle**, **Your agent**, and **Confirm**. Each shows a short description in the editor.

**Confirm** pauses the run until you select **Continue**. Put one before any step that publishes work, so you can check the result first.

Each step card has **Move step up**, **Move step down**, and **Delete step**. Inside a step, **Run this step** turns it on or off. To save a workflow with an unfinished step, turn that step off. **Start with a cleared context**, on steps that offer it, clears the agent's conversation before the step's prompt is sent.

### Choose the agent for a step

Steps that ask an agent to work have an agent choice:

- **The run's session, as it is** keeps whichever session the run is using.
- **Claude Code** or **Codex** lets you pick a model, an effort, and **No permission prompts**. Before that step, Firehose reuses the run's session if it already matches. Otherwise it starts the chosen agent in the same checkout and moves the run to it.

Only Claude Code and Codex can be chosen. If this computer can't start the model you pick, the step warns you, and a run can't start until you choose another model.

### Your agent (Mastra)

A **Your agent** step sends its prompt to an agent you run yourself instead of to a session. Only Mastra is supported. Enter **Server address** (by default `http://localhost:4111`) and **Agent ID**, then select **Test connection**. If the server needs a token, put it in an environment variable on the Firehose computer and type that variable's name, such as `MASTRA_TOKEN`, in **Token variable (optional)**. The agent's reply is passed to the next prompt step.

## Start a run

Open **Run workflow** in one of these ways:

- In the Workflows panel, use a workflow's **⋮** menu and select **Run…**, or select **Run…** in the editor. **Run…** is unavailable while the editor has unsaved changes.
- Select **Run workflow…** in the **tools** menu or a session's **⋮** menu.
- Select **Run workflow…** in an issue's details in **GitHub Issues**.

In the dialog:

1. Under **Workflow**, choose a workflow. Each choice lists its steps.
2. Under **Where it runs**, choose **In this session** or **In a new worktree** if you opened the dialog from a session. Otherwise, Firehose makes a new worktree and starts the first step's agent in it.
3. Optionally enter a number in **GitHub issue (optional)**. The issue becomes the run's context.
4. Optionally describe the task in **What should it work on? (optional)**. The first prompt step receives it, along with the issue.
5. Select **Start run**.

The run opens in the Workflows panel.

When Firehose starts a new session for a run, it uses the first step's agent. If that step names none, it starts Claude Code with no permission prompts. To get permission prompts instead, set the first agent step to **Claude Code** or **Codex** and clear **No permission prompts**. See [Choose agent permissions](/reference/agent-permissions/).

### Fix issues with one workflow

When you start a run from an issue, the dialog offers **Fix** *project* **issues with "***workflow***"**. Tick it, and that issue view and others in the same project show **Fix with** and the workflow's name. That button starts the run in a new worktree straight away. The choice is saved on the server.

## Follow a run

Open a run from **Running** or **Recent runs**. The run view shows the run's status, its session and branch, when it started, and each step with its own state. **What this run is about** shows the issue and request it was given. A **Your agent** step shows **Your agent's reply**.

| Run status | Meaning |
| --- | --- |
| **Running** | A step is in progress |
| **Waiting** | Firehose is waiting for a message to be delivered |
| **Paused** | You paused the run, or a **Confirm** step is waiting for you |
| **Needs you** | A step stopped; the message at the top says why |
| **Completed** | Every step finished |
| **Cancelled** | The run was ended |

Steps show **Not started**, **Running**, **Waiting**, **Done**, **Skipped**, or **Stopped**.

The buttons change with the status:

- **Running** or **Waiting**: **Pause** and **Cancel run**.
- **Paused** at a **Confirm** step: **Continue**, **Skip step**, and **Cancel run**.
- **Paused** otherwise: **Resume**, **Skip step**, and **Cancel run**.
- **Needs you**: **Retry**, **Skip step**, and **Cancel run**.

**Open session** takes you to the session doing the work, where you can read the conversation and answer approvals.

## GitHub issues and claims

A run about a GitHub issue needs the [GitHub CLI](https://cli.github.com/) (`gh`) installed and signed in on the Firehose computer.

**One run per issue.** While a workflow is running on an issue, starting it on the same issue again opens the existing run instead of starting another.

**Claims.** Your teammates can't see the runs on your Firehose, so Firehose marks the issue itself. Before the run creates a worktree or starts an agent, Firehose posts a comment on the issue as the account `gh` is signed in as:

> **Firehose is running the Fix greeting issue workflow on this issue**, started by @your-login. Another Firehose that sees this comment won't start Fix greeting issue here too. If the run is gone, delete this comment to release the issue.

- When the run ends, Firehose edits the comment to say the workflow ran, who started it, and whether it **completed** or was **cancelled**.
- If a teammate's Firehose is already running the same workflow on the issue, your start is refused and nothing is posted.
- Only comments from the repository's owners, organization members, and collaborators count as claims.
- A cancelled run releases the issue. A completed one stops only automatic triggers from running the workflow there again.
- If the computer that claimed an issue goes away, its comment stays. Delete the comment to release the issue.

This behavior comes from Firehose's source. These docs have not yet checked a real claim comment posted to GitHub.

## Triggers

Triggers start runs without you: on a schedule, on a GitHub event such as a new or labeled issue, or from a signed webhook. In 1.3.0 there is no trigger screen. Triggers are managed only through Firehose's HTTP API, which these guides don't cover.

## Example: fix an issue with a workflow

This example builds a short workflow and runs it on issue #42 in the fictional `hello-firehose` project. It avoids steps that need commands or skills from Firehose's own repository.

**Before you begin:**

- Workflows is [turned on](#turn-workflows-on).
- `gh auth status` succeeds on the Firehose computer, and the project's `origin` remote is on GitHub.
- Claude Code is installed and signed in.
- Issue #42, "Greet blank names as guest", is open.

**Build it:**

1. Select **Workflows** on the icon rail, choose `hello-firehose` in the project menu, and select **New workflow**.
2. Name it `Fix greeting issue`.
3. Select **Add step** and add, in this order:
   1. **Implement**
   2. **Smart Review**, with **Focus** set to **Clean up architecture**
   3. **Resolve review findings**
   4. **Confirm**, with **Message** set to `Check the fix before you push it.`
4. Select **Save**. The editor shows the new file's path under `.firehose/workflows/`.

**Run it:**

1. Select **GitHub Issues** on the icon rail, choose `hello-firehose`, and open issue #42.
2. Select **Run workflow…**.
3. Choose **Fix greeting issue**. In **What should it work on? (optional)**, type `Keep the change inside greeting.mjs.`
4. Tick **Fix hello-firehose issues with "Fix greeting issue"**.
5. Select **Start run**.

**Expected result:** The run opens with status **Running**. Firehose posts its claim comment on issue #42, creates a new worktree, and starts Claude Code there. The steps move from **Not started** to **Done** as each finishes. At the **Confirm** step, the status becomes **Paused** and **Continue** appears. Select **Open session** and check the commits in the **Diff** tab, then select **Continue**. The run shows **Completed**, and the claim comment changes to say the run completed. Nothing has been pushed, because the workflow has no **Push** step. Issue #42 now offers **Fix with Fix greeting issue**.

**If something goes wrong:**

- **Start run** fails with an issue error: check `gh auth status` and that the issue number exists in this repository.
- The run shows **Needs you**: read the message at the top, open the session to fix the cause, then select **Retry**, or **Skip step** to move on.
- You want to stop: select **Cancel run**. The claim comment changes to cancelled, which releases the issue. The worktree and any commits stay; see [Recover unwanted changes](/guides/recover-changes/).

To publish afterwards, add **Push** and **Create or update PR** after **Confirm**, or push from the session yourself.

## Troubleshooting

| What you see | What to do |
| --- | --- |
| No **Workflows** icon or **Run workflow…** | Open **Settings**, select **Beta features**, and switch on **Show Workflows** on this device. |
| **needs an agent this computer can't start**, or **This workflow can't start on this computer** in the run dialog | A step names a provider or model this computer doesn't have, often because a teammate shared the workflow. Select **Edit workflow**, then change the step's agent or turn the step off. |
| **has a step this server cannot run** | The workflow contains a step this Firehose can't run, such as **Integrate**. Turn that step off. |
| **Workflow not found** | Its file isn't in this checkout. It may have been deleted, or saved in another worktree and not committed yet. Commit and pull it. |
| **Someone changed this workflow since you opened it.** | Select **Load their version**, then make your change again. |
| **A newer Firehose wrote this workflow, so it can't be edited here.** | Update Firehose on this computer. |
| **Git ignores .firehose/workflows here, so these workflows stay on this computer.** | Remove that folder from `.gitignore` to share workflows. |
| Starting on an issue opens an existing run | That workflow is already running on the issue. Follow that run, or cancel it first. |
| Your start is refused because the issue is claimed | A teammate's Firehose is running the workflow on that issue. If that run is gone, delete its claim comment on GitHub and try again. |
| A step shows **Done** but the agent did nothing | A step whose agent starts but whose first turn fails, for example on a sign-in or usage limit, can count as done. Open the session, fix the cause, and run the work again. |
| **Run not found** | The run may be older than the last 50 finished runs of the repository, which is all Firehose keeps. Select **Close**. |
