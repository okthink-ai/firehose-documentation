---
title: "Get unstuck"
description: "Troubleshoot server connections, missing projects, session startup, messages, and missing changes."
verified: "2026-09-13"
evidence: ["connection", "settings", "launch", "chat", "diff", "questions"]
---

Find the symptom you recognize and work through the checks in order. Keep the exact error message; it is often the fastest route to a useful fix.

## I can’t connect to my server

1. Confirm that the Firehose server machine is awake and Firehose is running.
2. For the hosted app, confirm that the browser device and server are on the same Tailscale network.
3. Enter the full machine name ending in `.ts.net`, without a scheme or port. Do not use an IP address or a short name in the hosted connection form.
4. Ask the server operator to check Tailscale HTTPS, remote connectivity, and permission for the hosted app’s origin.

If you see a version warning, follow its direction: update the server for a server-outdated warning, or reload the app for a client-outdated warning. Version warnings are advisory; they do not themselves refuse the connection.

Return to [connection setup](/getting-started/connect/) once the server is reachable.

## My project isn’t listed

Check that the repository exists on the server machine, not only on the computer or phone displaying Firehose. Open **Settings → Project directories** and confirm the directory containing the project is included.

Select **Save**, then reopen **New session** and search again. If project refresh reports an error, keep the error text and check your server connection.

## Start session is unavailable or fails

Wait if the button says **Loading models**. Confirm that you chose a project, completed the workspace choice, and selected an available model.

For a new worktree, supply a task or branch name. If the error says the branch already exists, choose **Existing branch** to continue that work or use a different name for a new task.

Read any provider error. The provider must be usable on the server; choosing its name in Firehose does not install or authenticate it.

## My message didn’t reach the agent

Read the delivery notice, then check the conversation for the message before retrying. Confirm that the selected session is still available.

If you used **Queue after current turn**, the message is intended to wait until the current turn ends. For a failed send, address the reported cause rather than repeatedly sending the same request.

## The agent looks inactive

Read its latest response. It may have finished a turn, asked for information, or reported a command failure. Answer an ordinary question in chat, or use **Questions** for a questionnaire.

If the conversation itself will not update, check server connectivity. Interrupting a session does not restore a broken network connection or undo previous edits.

## Questions are still waiting or won’t submit

A clarification request waits for the current turn to finish before it is sent. Once questions appear, they can still be generating; submit when the set is ready and required answers are complete.

Only one unfinished questionnaire is allowed per worktree. Check **Questions** in the existing session before creating another request. If answer delivery fails, correct the reported issue and retry **Submit to Agent**.

## I don’t see the expected file changes

Check the session’s branch, the comparison in **Diff → Changes**, and active filters. A committed change may not appear under uncommitted changes. A new file may be untracked.

If the repository changed while the diff was loading, refresh the comparison. If a file is too large or not a text file, read the displayed limitation instead of treating the absence of a text diff as no change.

## I need to report a problem

Record what you tried, what you expected, what happened, the visible error, and whether you were using desktop or mobile web. Include the app and server versions if available. Replace private paths, names, and credentials before sharing.

For a problem with these instructions, see [documentation feedback](/feedback/).
