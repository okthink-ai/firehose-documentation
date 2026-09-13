---
title: "Get unstuck"
description: "Follow concrete checks for connection, project creation, startup, message delivery, and missing changes."
verified: "2026-09-13"
evidence: ["connection", "settings", "launch", "chat", "diff", "questions", "project-creation", "diff-comparisons", "session-signals", "diagnostics", "git-refresh", "question-details"]
---

Find the symptom you recognize and work through its checks in order. Keep the exact error text so you can tell the server operator what failed.

## I can’t connect to my server

For a direct-server setup, reopen the supplied server address. If it does not load, ask the operator to check whether that machine is awake and Firehose is running.

For the hosted app:

1. Open Tailscale on your browser device and confirm it is connected to the network your operator supplied. If the server is not available to your account, ask the network administrator to check access.
2. In Firehose’s connection form, compare the name with the full `.ts.net` name supplied by the operator. Enter it without a scheme or port. Short names and IP addresses do not work in this form.
3. Select **Connect**. Your expected projects or sessions should appear.
4. If connection still fails, send the exact error to the operator. Ask them to check **Settings → Tailscale HTTPS** on their local Firehose setup and confirm that the server allows the hosted app’s origin.

If a version warning says the server is outdated, ask its operator to update it. If it says the client is outdated, reload the app. These warnings are advisory; the warning alone does not refuse a connection.

Return to [connection setup](/getting-started/connect/) after the operator confirms the missing prerequisite.

## My project isn’t listed

1. Check that the repository exists on the server, not only on your browser device.
2. Open **Settings → Project directories**. The parent directory containing the repository should be in the comma-separated list.
3. Preserve other entries, add the missing parent if needed, and select **Save**. Look for **Saved**.
4. Reopen **New session** and find the project again.

If refresh reports an error, record it and check the server connection. If you need a new repository, use [New git project](/getting-started/first-session/#1-prepare-a-practice-project).

## Creating a project fails

If the error says the name already exists, select that existing project or choose a different name. Firehose does not overwrite an existing directory through Create.

If no project directories are configured, add a parent in **Settings → Project directories**, save it, and retry. **Location** must be one of those configured roots.

If the project was created without an initial commit, configure your normal Git identity in a terminal on the server, then commit the generated README. The repository still exists; you do not need to create it again.

## Start session is unavailable or fails

### The button says Loading models

While **Loading models** is visible, the selected provider’s list is still being requested. When it finishes, check for model choices or an unavailable-model explanation. Another provider’s slow discovery should not block this selection. If you cannot get a list, send the operator the provider name, displayed message, and whether other providers load. There is no universal wait time that proves failure.

### The selected model is unavailable

Read the explanation beside the model and choose an available option. The start button should become available once the project, workspace, and model are ready. Selecting a provider does not install or authenticate it.

### The workspace is incomplete or launch reports an error

For a new worktree, enter a task or branch name. If the branch already exists, use **Existing branch** or choose a different name for new work.

After **Start session**, read the launch error. If it concerns installation, authentication, or model access, give the provider, model, and error text to the server operator. Ask the operator to confirm a successful launch with that provider/model on the server, then retry **Start session**. Success means the session opens in the intended workspace. If it still fails, include the new error and the operator’s last successful check in your report.

## My message didn’t reach the agent

1. Read the delivery notice and confirm the selected session.
2. Check the conversation for your message before resending.
3. If you chose **Queue after current turn**, wait for that turn to finish.
4. If delivery failed because an attachment is unavailable, attach the file again before resending.

**Delivery could not be confirmed** means Firehose cannot establish whether the message arrived. Follow the notice’s terminal-opening control and check whether the message is still in the input box or already in the conversation. If you cannot check, ask the operator rather than repeatedly sending a potentially duplicated request.

If the notice reports that the agent exited or restarted, check whether the selected session still accepts input. If not, open a new session in the intended workspace and explain the unfinished task there. If it reports rejected or partial input, use the terminal-opening control to inspect that input before retrying. A network reconnection does not prove an earlier message was delivered.

### Example: delivery could not be confirmed

Suppose you sent “Run the greeting tests,” then saw **Delivery could not be confirmed**. This is an illustrative incident, not a guarantee of a particular provider response.

1. Look for that request and a response in the selected conversation. If a test result is already present, do not send the request again.
2. For a Claude session, select **Open Claude Code** when offered. If the request remains unsent in its input box, complete or correct that existing input there; do not also send a second copy from Firehose.
3. If the message is absent and you can establish it was not sent, resend it once. If you cannot determine the outcome, ask the operator to inspect it, including the notice text and task name.
4. Check the actual test output after delivery. A disappeared notice alone is not evidence that tests ran.

## The agent looks inactive

Read the latest response alongside the [session signals](/tools/chat/#read-the-session-signals). **Idle** is not proof the task succeeded. Answer an ordinary question in Chat or use **Questions** for a questionnaire.

For **Stopping...**, check whether it changes to **Idle** and whether the latest response acknowledges interruption. If it remains unchanged and you cannot read progress, report that state instead of sending repeated interrupts. For **Transcript unavailable**, check the server connection and share the status with the operator if it persists. Repeated interruption does not repair unavailable conversation data.

## Questions are still waiting or won’t submit

A clarification request waits for the current turn to finish before delivery. Once questions appear, the set can still be generating. Look for **Your turn**, then complete the required answers before **Submit to Agent**. **Queued** and the generation message describe earlier stages; see [Questions](/tools/questions/#3-answer-when-it-is-your-turn).

Only one unfinished questionnaire is allowed per worktree. Check **Questions** in the existing session before requesting another. If answer delivery fails, confirm the selected session accepts input and follow the delivery checks above before retrying **Submit to Agent**. A failed delivery leaves the set available.

## I don’t see the expected file changes

1. Check the selected session’s project and branch.
2. Open **Diff → Changes → Diff filters → Compare**. Select **All changes** for the broad comparison, **Working changes** for uncommitted edits, or **Branch changes** for branch commits.
3. Clear search, status, and annotation filters that could exclude the file. A new file may still be untracked.
4. Click or tap the branch name in the prompt bar to **Refresh git status**. Check for **Refreshing…**, then the updated list. If **Retry** appears after a loading error, select it once and read the resulting list or error.

A committed change no longer appears in Working changes unless it has further edits. If a file shows a size or format limitation, read that message; a missing text preview does not establish that the file is unchanged.

## I need to report a problem

Record the steps, expected result, actual result, exact error, browser, and whether you used desktop or mobile web. Remove credentials and private paths before sharing.

For server version information, ask the operator to open `/api/status` on the same Firehose server they normally use. For example, they can append `/api/status` to their direct-server address. The JSON response includes `serverVersion` and `protocolVersion`; copy only those fields into the report. If this request fails, report that failure rather than guessing a version. This is the Firehose server address, not this documentation site or the hosted app’s address.

Send the report through your existing support channel. For a confusing instruction, see [documentation feedback](/feedback/).
