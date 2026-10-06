---
title: "Get unstuck"
description: "Follow concrete checks for activation, connection, project creation, startup, message delivery, and missing changes."
verified: "2026-10-06"
evidence: ["activation", "tailnet-access", "hosted-connection", "connection", "settings", "launch", "chat", "diff", "questions", "project-creation", "diff-comparisons", "session-signals", "diagnostics", "git-refresh", "question-details", "layout"]
---

Find the symptom you recognize and work through its checks in order. Keep the exact error text so you can report what failed.

## Firehose shows Activate Firehose

A new installation shows **Activate Firehose** until you activate it with a subscription. Nothing else works until then. Follow [Activate Firehose](/getting-started/activate/).

| What you see | What to do |
| --- | --- |
| The code email does not arrive | Check your spam folder, then select **Resend code**. Check the address shown after **We sent a code to**. |
| **That code has expired.** or **Too many wrong codes.** | Codes last 10 minutes and allow five tries. Select **Resend code** for a new one. |
| **The activation timed out before payment finished.** | Enter your email address again and pay within an hour of verifying the code. |
| **Activate this server** instead of an email field | Your Firehose is older than 1.1.0. Run `firehose update`, then reload the dashboard. |
| **Reactivate Firehose** | The license could not be renewed. Read the reason shown, then enter your email address to activate again. |
| **License agreement** | Read the agreement and select **I accept**. |

## I can’t connect to my server

On the Firehose computer:

1. Run `firehose status` to check that Firehose is running.
2. Open `http://localhost:4801`, or the port you chose with `--port`.
3. If it does not load, check the logs in `~/.firehose/logs`.

From your phone or another computer:

1. Check that the Firehose computer is awake and connected to Tailscale.
2. Open Tailscale on your device and check that you are signed in to the same Tailscale account that owns the Firehose computer.
3. Run `firehose tailnet status` on the Firehose computer. It shows `On:` with the address to open, or explains what is missing.
4. Open that exact address, including `https://` and the port.

| What you see | What to do |
| --- | --- |
| `This Firehose only answers its owner over the tailnet.` | You are signed in to Tailscale with a different account than the computer's owner. Sign in with the owner's account. Other people cannot connect to your Firehose. |
| **Enter the server address without a port. Port 4801 is added automatically.** | Remove the port from the hosted app's form. If you installed on another port, open the address shown under **Open from your other devices** in **Settings** directly instead of using agents.okthink.ai. |
| **Enter the full Tailscale MagicDNS hostname ending in .ts.net** | Use your computer's full Tailscale name, such as `your-computer.your-tailnet.ts.net`. Short names and IP addresses do not work in the hosted app. |
| `Tailscale only lets its operator publish services on this machine.` when running `firehose tailnet on` | Run `sudo tailscale set --operator=$USER` once, as the message says, then run `firehose tailnet on` again. |
| `HTTPS and Serve must be turned on for your tailnet first` | Follow the link in the message, or turn them on in the Tailscale admin console. Then run `firehose tailnet on` again. |
| **Restart Firehose to apply this.** in Settings | Select **Restart now**. |

If a version warning says the server is outdated, run `firehose update` on the Firehose computer. If it says the client is outdated, reload the app. These warnings are advisory; the warning alone does not refuse a connection.

Return to [Connect to Firehose](/getting-started/connect/) once the check passes.

## My project isn’t listed

1. Check that the repository exists on the server, not only on your browser device.
2. Open **Settings** (the gear icon at the bottom of the icon rail on the far left) and find **Project directories**. The parent directory containing the repository should be in the comma-separated list.
3. Preserve other entries, add the missing parent if needed, and select **Save**. Look for **Saved**.
4. Select **New session** (the **+** at the top of the **Sessions** sidebar) again and find the project at **Pick a project**.

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

For a new worktree, select **New worktree** at **Choose a workspace** and enter a **Task or branch name**. If the branch already exists, use **Existing branch** or choose a different name for new work.

After **Start session**, read the launch error. If it concerns installation, authentication, or model access, give the provider, model, and error text to the server operator. Ask the operator to confirm a successful launch with that provider/model on the server, then retry **Start session**. Success means the session opens in the intended workspace. If it still fails, include the new error and the operator’s last successful check in your report.

## My message didn’t reach the agent

1. Read the delivery notice and confirm the selected session.
2. Check the conversation for your message before resending.
3. If you chose **Queue after current turn**, wait for that turn to finish.
4. If delivery failed because an attachment is unavailable, [attach the file again](/tools/attachments/) before resending.

**Delivery could not be confirmed** means Firehose cannot establish whether the message arrived. Follow the notice’s terminal-opening control and check whether the message is still in the input box or already in the conversation. If you cannot check, ask the operator rather than repeatedly sending a potentially duplicated request.

If the notice reports that the agent exited or restarted, check whether the selected session still accepts input. If not, open a new session in the intended workspace and explain the unfinished task there. If it reports rejected or partial input, use the terminal-opening control to inspect that input before retrying. A network reconnection does not prove an earlier message was delivered.

### Example: delivery could not be confirmed

Suppose you sent “Run the greeting tests,” then saw **Delivery could not be confirmed**. This is an illustrative incident, not a guarantee of a particular provider response.

1. Look for that request and a response in the selected conversation. If a test result is already present, do not send the request again.
2. For a Claude session, select **Open Claude Code** when offered. If the request remains unsent in its input box, complete or correct that existing input there; do not also send a second copy from Firehose.
3. If the message is absent and you can establish it was not sent, resend it once. If you cannot determine the outcome, ask the operator to inspect it, including the notice text and task name.
4. Check the actual test output after delivery. A disappeared notice alone is not evidence that tests ran.

## The agent looks inactive

Read the latest response alongside the [session signals](/tools/chat/#read-the-session-signals). **Idle** is not proof the task succeeded. Answer an ordinary question in the message box, or use the **Ask me** tab for a questionnaire.

For **Stopping...**, check whether it changes to **Idle** and whether the latest response acknowledges interruption. If it remains unchanged and you cannot read progress, report that state instead of sending repeated interrupts. For **Transcript unavailable**, check the server connection and share the status with the operator if it persists. Repeated interruption does not repair unavailable conversation data.

## Questions are still waiting or won’t submit

A clarification request waits for the current turn to finish before delivery. Once questions appear, the set can still be generating. Look for **Your turn**, then complete the required answers before selecting **Submit to** the provider, such as **Submit to Codex**. **Queued** and the generation message describe earlier stages; see [Questions](/tools/questions/#3-answer-when-it-is-your-turn).

Only one unfinished questionnaire is allowed per worktree. Check the **Ask me** tab in the existing session before requesting another. If answer delivery fails, confirm the selected session accepts input and follow the delivery checks above before retrying the submit button. A failed delivery leaves the set available.

## I don’t see the expected file changes

1. Check the selected session’s project and branch.
2. Select the **Diff** tab, then **Changes**, then **Diff filters** (the **⋮** next to the search icon). Under **Compare**, select **All changes** for the broad comparison, **Working changes** for uncommitted edits, or **Branch changes** for branch commits.
3. Clear search, status, and annotation filters that could exclude the file. A new file may still be untracked.
4. Click or tap the branch name on the prompt bar to refresh Git status. Check for **Refreshing…**, then the updated list. If **Retry** appears after a loading error, select it once and read the resulting list or error.

A committed change no longer appears in Working changes unless it has further edits. If a file shows a size or format limitation, read that message; a missing text preview does not establish that the file is unchanged.

## The agent changed the wrong thing

Use [Recover from an unwanted change](/guides/recover-changes/) to stop additional edits, distinguish them from existing work, and request a targeted correction. If the changes belong to a session you left earlier, [check the saved workspace and latest result](/guides/return-to-work/) before restarting the task.

## I need to report a problem

Record the steps, expected result, actual result, exact error, browser, and whether you used desktop or mobile web. Remove credentials and private paths before sharing.

For server version information, open `http://localhost:4801/api/status` on the Firehose computer, using your port if you changed it. The JSON response includes `serverVersion` and `protocolVersion`; copy only those fields into the report. If this request fails, report that failure rather than guessing a version. This is the Firehose server address, not this documentation site or the hosted app’s address.

Send the report through your existing support channel. For a confusing instruction, see [documentation feedback](/feedback/).
