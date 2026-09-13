---
title: "Connect to Firehose"
description: "Open Firehose and connect to the machine that runs your projects and agents."
verified: "2026-09-13"
evidence: ["connection", "settings"]
---

Connect to the machine running Firehose so you can see your projects and start an agent.

## Before you begin

You need a running Firehose server and an agent provider configured on that machine. The server is where your repositories and agent processes live; your browser is how you interact with them.

These guides begin with an existing Firehose setup. If you haven’t been given access yet, ask the person managing your setup for the app address and server connection details. A public installation walkthrough is still being verified.

## Check your access

| What you need | Where to get it |
| --- | --- |
| The app or direct-server address | The person managing your Firehose setup |
| A running server with a usable agent provider | Your server operator; you may be that person |
| Your Git repository on that server | Copy or clone it there using your project’s normal process, or create a [practice project](/getting-started/first-session/#1-prepare-a-practice-project) |
| For the hosted app: the server’s full Tailscale name and access to its network | Your server operator or network administrator |

If you only have the documentation URL, you still need product access. A public installation walkthrough is not available in these guides yet.

## Open your existing setup

If you were given a direct Firehose server URL, open that address. A browser served by the server itself uses that server automatically.

If you use the hosted Firehose app, follow the connection steps below. This connects the app to your existing machine; opening the app does not create a server.

## Connect through the hosted app

You’ll need both devices connected to the same Tailscale network. The Firehose server must have Tailscale HTTPS configured and allow access from the hosted app. Ask your server operator to confirm those prerequisites if you don’t manage the machine.

1. Open the Firehose app address supplied with your setup.
2. Enter your server’s full Tailscale machine name, such as `workstation.example-tailnet.ts.net`. This is an example; use your own machine name.
3. Leave out the scheme and port. The hosted connection form adds HTTPS and port 4801.
4. Select **Connect**.
5. Check that your expected projects or sessions appear.

A short machine name or a Tailscale IP address will not work in this form. Use the full name ending in `.ts.net` so it matches the server’s HTTPS certificate.

## Use more than one server

Each hosted browser tab chooses its own server. Reloading a tab keeps its selected address. You can connect another tab to a different server.

Switch servers through **Settings → Server connection**. Switching preserves the previous server’s stored workspace for when you return.

**Forget this server** clears that server’s stored workspace, including drafts, annotations, open files, and project ordering. Use switching when you intend to return; read the confirmation before forgetting a server.

## If you can’t connect

Check that the server machine is awake, both devices are on the same Tailscale network, and the full machine name is correct. Follow [connection troubleshooting](/troubleshooting/common-problems/#i-cant-connect-to-my-server) for the next checks.

Once connected, [start your first session](/getting-started/first-session/).
