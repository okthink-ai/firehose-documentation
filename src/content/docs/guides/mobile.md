---
title: "Use Firehose on mobile web"
description: "Connect from your phone, read an agent\u2019s progress, and answer in the correct session."
verified: "2026-09-29"
evidence: ["tailnet-access", "tailscale-setup", "connection", "mobile", "chat", "git-refresh", "file-access", "layout"]
---

Check an agent’s progress and respond from your phone while its work stays on your Firehose server.

## Connect your phone

[Set up Tailscale](/getting-started/connect/#set-up-tailscale) and turn on [tailnet access](/getting-started/connect/#turn-on-tailnet-access) on your Firehose computer first. Then install the Tailscale app on your phone and sign in with the same account that owns the computer, and open the address Firehose showed you, such as `https://your-computer.your-tailnet.ts.net:4801`.

You can also open agents.okthink.ai, enter the full `.ts.net` name in **Server address**, and select **Save and connect**. Only the computer's owner can connect either way.

`localhost` on a phone refers to the phone itself. It will not reach Firehose running on your computer.

## Find and read a session

Use the session list, the first screen on a phone, to open the task you want to follow. To go back to the list, select the back arrow in the session header. Check the project and branch in the session header before sending anything.

Read the latest response and visible activity. The workspace tabs can scroll on a narrow screen, so move along the tab row to find views such as **Diff** and **Ask me**.

## Find a control on a narrow screen

- Swipe horizontally along the workspace tab row to reach **Ask me** or **Diff**.
- In **Diff**, select **Changes**, then the **⋮** button labeled **Diff filters** next to the search icon to reach **Compare**. A narrower layout may show one pane at a time; select **Back to file list** to return.
- Tap the branch name in the prompt bar to refresh Git status. On desktop, hovering over it shows “Click to refresh Git status”; phones do not require hovering.
- Use the session header’s three-dot menu for **Interrupt**. Do not confuse it with the documentation site’s navigation menu.

For the practice file, use the [operator-assisted file route](/getting-started/files-and-terminal/#ask-your-operator-to-place-the-file) if you do not have a terminal connection to the server.

## Respond or redirect

Use the message box for a follow-up, or open the **Ask me** tab to answer a structured questionnaire. Check the selected session before submitting answers.

If you need to stop the current turn, open the session header’s menu and select **Interrupt**. Look for **Stopping...** on the session's row in the session list, then check the last response when the session settles. If the state does not change and progress is unreadable, report it rather than repeatedly interrupting.

## Return later

Keep the server machine awake and connected while its agents work. Reloading a hosted browser tab retains that tab’s server address. Another tab can choose its own server.

For a saved stopping point and the differences between a browser disconnect, server restart, and closed session, see [Leave and return to work](/guides/return-to-work/).

If progress does not resume after reconnecting, read any connection or delivery notice and check the server’s reachability. Use [troubleshooting](/troubleshooting/common-problems/) to separate a connection problem from an agent waiting for input.
