---
title: "Use workflows (beta)"
description: "Turn on Workflows, run a review-and-fix workflow on your branch, follow it to the end, and then shape your own workflow and use it on GitHub issues."
verified: "2026-10-21"
evidence: ["workflows", "workflow-runs", "workflow-guide"]
---

Learn to use Workflows by running one on a branch you are already working on. You'll turn the feature on, add a ready-made workflow that reviews your branch and fixes what the review finds, watch it run, and then change it to fit your project. At the end, you'll use the same workflow to fix GitHub issues with one click.

**Workflows are a beta feature, added in Firehose 1.3.0.** They are off by default and may change. For every control and limit, see the [workflow reference](/tools/workflows/).

## What a workflow does for you

Without a workflow, you send each request yourself: ask for a review, wait, ask the agent to fix the findings, wait, ask it to run the tests, wait. A **workflow** is that list of requests, saved once. When you start a **run**, Firehose sends the first step to the agent, waits for the agent to finish, sends the next step, and so on until the list is done. The run keeps going on the Firehose computer even if you close the browser.

Use a workflow when you repeat the same sequence on many branches or issues. For one-off work, a chat message is still simpler.

## Before you begin

- A session on a branch with committed changes, as you would have before a [Smart Review](/tools/smart-review/). This guide uses a fictional project, `hello-firehose`, on the branch `42-greet-blank-names`.
- A minute to read about [agent permissions](/reference/agent-permissions/). Workflow steps can run with **No permission prompts**, so the agent edits files and runs commands without asking you first.
- Your project's own check command, such as `npm test`. You'll need it in step 3.

The workflow in this guide doesn't push or open a pull request, so you can try it safely on real work.

## 1. Turn on Workflows

1. Select the gear icon labeled **Settings** at the bottom of the icon rail.
2. Choose **Beta features**.
3. Switch on **Show Workflows**.

**Expected result:** a **Workflows** icon appears on the icon rail. The setting applies only to the device where you switch it on, so turn it on again on your other computers or your phone.

## 2. Add the Review and fix workflow

Firehose ships with ready-made workflows you can copy into a project. **Review and fix** runs a Smart Review on the branch, runs a second review with fresh context, fixes the findings, and runs the checks. It doesn't push.

1. Select **Workflows** on the icon rail. If the panel shows a different project, choose `hello-firehose` from the menu at the top.
2. Under **Recommended**, find **Review and fix** and select **Add**.

**Expected result:** **Review and fix** appears in the **Workflows** list, and Firehose opens it in the editor. The editor says where it saved the workflow, such as `Saved in .firehose/workflows/wf-k3j9x2.json`. The file name is generated, so yours will differ.

## 3. Swap in your project's checks

The last step of **Review and fix** is a **Validate** step. Its checks are fixed commands, such as `pnpm exec tsgo --noEmit`, that most projects don't have. Replace it with your own command:

1. In the editor, select the **Validate** step to expand it, then clear **Run this step**. The step stays in the list but is skipped.
2. Select **Add step**, then **Custom step**.
3. Expand the new step and enter its **Prompt**, for example:

   ```text
   Run npm test. If anything fails, fix it and run it again until it passes. Commit the fixes.
   ```

4. Select **Save**.

**Expected result:** the workflow now has five steps, and **Validate** shows as turned off. If **Save** is unavailable and names a step, expand that step and finish its settings.

## 4. Run it on your branch

1. Open your `42-greet-blank-names` session.
2. On the prompt bar, select **tools**, then **Run workflow…**.
3. Under **Workflow**, choose **Review and fix**. Each choice lists its steps, so check that yours includes your custom step.
4. Under **Where it runs**, keep **In this session**. The steps run in this session's checkout, one after another.
5. Optionally, under **What should it work on? (optional)**, add a note for the agent, such as `Focus on the blank-name handling.` The first prompt step receives it.
6. Select **Start run**.

**Expected result:** the **Workflows** panel opens on the new run, and its first step, **Smart Review**, shows **Running**.

If **Start run** is unavailable, the dialog names the step that this computer can't run and why. Select **Edit workflow**, fix that step, and try again.

## 5. Follow the run

The run page shows each step and its state, from **Not started** to **Running** and then **Done**. While a step runs:

- Select **Open session** to watch the agent work in Chat, as you would during any request.
- Open the session's **Smart Review** tab to read the findings as they arrive. The fix step works from those findings.

You can leave and come back. The run keeps going, and you can find it under **Running** in the **Workflows** panel, or under **Recent runs** once it ends.

**Expected result:** every step shows **Done** or **Skipped**, and the run shows **Completed**. Review the branch in [Diff](/tools/diff/) before you push it. The agent's wording, the findings, and the number of fixes will differ from run to run.

## 6. When a run needs you

Most runs finish on their own. When one doesn't, the run's status tells you what to do:

| You see | What it means | What to do |
| --- | --- | --- |
| **Needs you** | A step couldn't go on. The message at the top of the run page says why, such as a missing agent or a failed sign-in. | Fix the cause, then select **Retry**. To move past the step, select **Skip step**. |
| **Paused** | You paused the run, or a **Confirm** step is waiting for you. | Select **Resume**, or **Continue** for a **Confirm** step. |
| A step finished suspiciously fast | A new agent's first turn may have failed, for example over sign-in or quota, and still counted as done. | Select **Open session** and read what happened. |

To stop a run, select **Cancel run**. Pausing or cancelling doesn't interrupt a turn the agent has already started; to stop the agent too, select **Open session** and use the session's stop control.

## 7. Add a checkpoint and a push

Once you trust the workflow, let it publish your branch, but only after you've looked:

1. In the **Workflows** panel, select **Review and fix** to open it in the editor.
2. Select **Add step**, then **Confirm**, and set its **Message** to `Check the diff before pushing.`
3. Select **Add step**, then **Push**.
4. Select **Save**.

**Expected result:** the next run pauses after your checks with the message `Check the diff before pushing.` Review the branch, then select **Continue** to push, or **Cancel run** to stop without pushing.

## 8. Share the workflow

The workflow lives in the project as a file in `.firehose/workflows/`. Commit it to share it with your team and with your other worktrees:

```sh
git add .firehose/workflows/
git commit -m "Add the Review and fix workflow"
```

Until you commit and pull it, the workflow appears only in the worktree where you saved it. Runs are different: each Firehose computer keeps its own, and teammates can't see your runs.

## 9. Fix GitHub issues with one click

A workflow can also start from a GitHub issue, in a new worktree of its own. This needs the `gh` command signed in on the Firehose computer, as the Issues panel does.

1. Open an issue in the Issues panel, such as issue #57, and select **Run workflow…**.
2. Choose a workflow. For issues, the recommended **Fix an issue** is a good start: it implements and tests a fix, reviews and resolves findings, and publishes the pull request after you confirm.
3. To make this the default for the project, check the box such as **Fix hello-firehose issues with "Fix an issue"**.
4. Select **Start run**.

**Expected result:** Firehose posts a short **claim** comment on the issue, makes a new worktree, and starts an agent there. The claim tells teammates' Firehose that the issue is taken, so nobody runs the same workflow on it twice. With the box checked, every issue in the project now shows a **Fix with Fix an issue** button that starts the run without the dialog.

## Choose a workflow to start from

| If you want to | Start from |
| --- | --- |
| Review a branch and fix what the review finds, without publishing | **Review and fix** |
| Get a review from a different agent than the one that wrote the code | **Second opinion** |
| Catch a branch up with its base and fix what breaks | **Catch up with base** |
| Clean up a finished branch before review | **Tidy up** |
| Commit, push, open the pull request, and wait for CI | **Ship it** |
| Go from an issue to a pull request | **Fix an issue** |
| Run Firehose's full review-to-pull-request sequence | **Quality**, built in. It names specific Claude Code and Codex models, so check that this computer offers them. |

## Continue

- [Workflow reference](/tools/workflows/): every step type, run status, trigger, and known gap.
- [Use Smart Review](/tools/smart-review/): what the review steps do and how to read their findings.
- [Finish the task](/guides/finish-a-task/): what to check once a run has published your branch.
