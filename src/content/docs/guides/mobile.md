---
title: "Use Firehose on mobile web"
description: "Connect from your phone, read an agent\u2019s progress, and answer in the correct session."
verified: "2026-09-13"
evidence: ["connection", "mobile", "chat"]
---

Check an agent’s progress and respond from your phone while its work stays on your Firehose server.

## Connect your phone

Use a running server already configured for the hosted Firehose app. Connect the phone to the same Tailscale network as the server and open your Firehose app address in the browser.

Enter the full `.ts.net` machine name in the connection form and select **Connect**. Follow [Connect to Firehose](/getting-started/connect/) if this is your first connection.

`localhost` on a phone refers to the phone itself. It will not reach Firehose running on your computer.

## Find and read a session

Use the session list to open the task you want to follow. Check the project and branch in the session header before sending anything.

Read the latest response and visible activity. The workspace tabs can scroll on a narrow screen, so move along the tab row to find views such as **Diff** and **Questions**.

## Respond or redirect

Use the chat input for a follow-up, or open **Questions** to answer a structured questionnaire. Check the selected session before submitting answers.

If you need to stop the current turn, open the session header’s menu and select **Interrupt**. Read the interrupted result before sending the replacement instruction.

## Return later

Keep the server machine awake and connected while its agents work. Reloading a hosted browser tab retains that tab’s server address. Another tab can choose its own server.

If progress does not resume after reconnecting, read any connection or delivery notice and check the server’s reachability. Use [troubleshooting](/troubleshooting/common-problems/) to separate a connection problem from an agent waiting for input.
