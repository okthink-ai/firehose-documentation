---
title: "Complete a browser task"
description: "Reproduce a visible bug, request a focused fix, check it in a browser, and review a local commit."
verified: "2026-09-29"
evidence: ["launch", "chat", "diff", "commit-action", "browser-example", "layout"]
---

Fix a small greeting form and finish with a local commit you have inspected. This example adds a visible browser check to the earlier function exercise.

## Before you begin

Use a separate disposable Git project, such as `hello-form`, with no unrelated edits. Download the [original index.html](/examples/hello-form/index.html) and save it as `index.html` in that server workspace using the [file-access guide](/getting-started/files-and-terminal/). The location checks apply; its greeting command is specific to the earlier JavaScript example.

This form is a standalone HTML file. It needs a browser with JavaScript enabled, with no dependency installation, backend, credentials, or development server. For your own application, complete [project preparation](/guides/prepare-project/) and use its documented startup and check commands instead.

In a terminal in the project folder, such as the session's **Terminal** tab, record the baseline:

```sh
git add index.html
git commit -m "Add greeting form baseline"
```

Start a Firehose session in this project's **Current checkout**: select **New session**, pick `hello-form`, select **Next: Choose a workspace**, then **Current checkout**. The standalone example can be completed with Diff; it has no remote review base by default.

## 1. Reproduce the problem

Open that saved `index.html` in a browser on the server computer. If you use another computer, copy this exact workspace file back to it and open the copy. With SSH, adapt this download command to your operator's account and path:

```sh
scp YOUR_USER@YOUR_SERVER:projects/hello-form/index.html ./index.html
```

This replaces a local file named `index.html`. Check its destination before copying. On a phone without file access, ask the operator to perform the browser check and report the input and output.

Enter `Ada` in **Name**, then select **Show greeting**. Expect `Hello, Ada!`. Submit an empty value and then three spaces: both currently display `Hello, !`.

## 2. Request the change

```text
In index.html, make empty and spaces-only names display "Hello, guest!".
Keep trimming nonblank names. Preserve the label, submit button, and result area.
Keep the app standalone, with no dependencies or backend.
Check "Ada", " Ada ", "", and "   ". Report what you actually tested.
Do not commit or push yet.
```

If the agent cannot run a browser, have it say so. A code inspection alone does not complete the next step.

## 3. Check the visible result

Reload the changed workspace file. If you copied it to another computer, copy it again first; refreshing an old copy cannot show the new implementation.

| Name entered | Result after submitting |
| --- | --- |
| `Ada` | `Hello, Ada!` |
| ` Ada ` | `Hello, Ada!` |
| Empty | `Hello, guest!` |
| Three spaces | `Hello, guest!` |

Also focus **Name**, type a name, and press Enter. Confirm submission still works. Select the **Diff** tab, then **Changes**. Open **Diff filters** (the **⋮** next to the search icon) and under **Compare** choose **Working changes**. Inspect `index.html` for unrelated edits. A [completed reference](/examples/hello-form-result/index.html) is available after your attempt; it is one possible result, not guaranteed agent output.

If the blank case still fails, report the exact input and visible output. Ask for a targeted correction while keeping all four expectations. For unwanted edits, use [recovery](/guides/recover-changes/).

## 4. Request and inspect a local commit

When the checks pass and the diff is correct, send:

```text
Commit only the greeting fallback change in index.html.
Preserve any unrelated files and staged changes.
If index.html contains unrelated edits, stop and identify them before committing.
Do not push, create a pull request, or merge.
Report the commit hash and checks completed.
```

This message authorizes a local commit. Review the agent's response, then independently inspect it in a terminal in the project folder:

```sh
git log -1 --oneline
git show --stat HEAD
git show HEAD -- index.html
git status --short
```

Confirm the reported hash matches, the commit contains the intended change, and outstanding edits are explained. For this clean practice project, no working changes should remain. In Firehose, the **Commits** view beside **Changes** in the **Diff** tab also lets you inspect a commit's files.

## 5. Decide the next step

The practice task ends here with a reviewed local commit. Follow [Finish and close a task](/guides/finish-a-task/) to retain or clean up its workspace.

In a shared project, follow the maintainer's review process. Ask the agent to prepare a pull-request title, description, test results, destination repository, and target branch for review first. Explicitly request pushing or opening the pull request when you intend those actions. Afterward, verify the actual pull request and its checks in your Git hosting service; merging is a separate decision.
