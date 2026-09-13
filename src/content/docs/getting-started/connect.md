---
title: "Connect to Firehose"
description: "Open Firehose and connect to the machine that runs your projects and agents."
verified: "2026-09-13"
evidence: ["connection", "settings", "launch"]
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

## Operator handoff checklist

If you manage someone’s setup, supply:

- The app address and, for the hosted route, the full server name and network access.
- The project’s full server path and configured parent directory.
- A provider/model combination you have used successfully on that server.
- How the reader can place files and open a terminal, or who will do those steps for them.
- The support contact and the result of a small session launch and response check.

Have the reader repeat the readiness checks using their own access. Do not send provider credentials in the handoff.

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

## Check that your provider is ready

In **New session**, confirm that your project appears, choose its workspace, and select the provider your operator configured. Its model choices should load. After you choose an available model and check permissions, **Start session** should open a session in that workspace.

These are three separate checks: project discovery, model discovery, and session startup. A model list alone does not prove the provider can handle your account’s requests. Complete the [small explanation task](/getting-started/first-session/#3-give-it-a-clear-request) to check an actual response.

If a check fails, give the operator the project name, provider, selected model, exact error, and the last step that worked. See [startup troubleshooting](/troubleshooting/common-problems/#start-session-is-unavailable-or-fails).

## Use more than one server

Each hosted browser tab chooses its own server. Reloading a tab keeps its selected address. You can connect another tab to a different server.

Switch servers through **Settings → Server connection**. Switching preserves the previous server’s stored workspace for when you return.

**Forget this server** clears that server’s stored workspace, including drafts, annotations, open files, and project ordering. Use switching when you intend to return; read the confirmation before forgetting a server.

## If you can’t connect

Check that the server machine is awake, both devices are on the same Tailscale network, and the full machine name is correct. Follow [connection troubleshooting](/troubleshooting/common-problems/#i-cant-connect-to-my-server) for the next checks.

Once connected, [start your first session](/getting-started/first-session/).
