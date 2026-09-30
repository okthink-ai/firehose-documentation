---
title: "Connect to Firehose"
description: "Open Firehose on your computer or from your other devices, and check that your agent is ready."
verified: "2026-09-29"
evidence: ["hosted-connection", "tailnet-access", "connection", "settings", "launch"]
---

Open Firehose on the computer where you installed it, or from your phone or another computer. Then check that your agent can start a session.

This page describes Firehose 1.0.1.

## Before you begin

You need a Firehose installation that you have [installed](/getting-started/install/) and [activated](/getting-started/activate/). Firehose runs on your own computer: your repositories and agents stay there, and your browser is how you work with them.

You also need an agent command-line tool, such as Claude Code or Codex, installed and signed in on that computer.

## Open Firehose on your computer

Open `http://localhost:4801` in a browser on the computer running Firehose. If you installed with `--port`, use that port instead.

Your projects and sessions appear once the page loads. If you see **Activate Firehose**, finish [activation](/getting-started/activate/) first.

This address works only on that computer. Another device on your home or office network cannot open it, even with the computer's IP address.

## Open Firehose from your other devices

To use Firehose from your phone or another computer, turn on tailnet access. It uses [Tailscale](https://tailscale.com/download), a private network between your own devices, and serves Firehose over HTTPS with a certificate from Tailscale.

**Only you can connect this way.** Firehose answers only the Tailscale account that owns the computer. Anyone else who opens the address sees `This Firehose only answers its owner over the tailnet.`

### Turn on tailnet access

Install Tailscale on the Firehose computer and sign in. Then use one of these:

- **During installation:** answer `y` when the installer asks to open Firehose from your other devices, or install with `--tailnet`.
- **In the terminal:** run `firehose tailnet on`.
- **In the dashboard:** open **Settings**, find **Open from your other devices**, and turn on **Allow my other devices**. If Settings says **Restart Firehose to apply this.**, select **Restart now**.

When it is on, Firehose shows the address to use. It looks like `https://your-computer.your-tailnet.ts.net:4801`, where `your-computer.your-tailnet.ts.net` is a placeholder for your computer's full Tailscale name. In **Settings**, select **Copy** to copy it.

If Settings says **Install Tailscale and sign in to use this.** or **Turn on MagicDNS for your tailnet in the Tailscale admin console.**, fix that in Tailscale first. MagicDNS gives your computer the `.ts.net` name the address uses.

### Connect from the other device

1. Install Tailscale on the other device and sign in with the same Tailscale account.
2. Open the address Firehose showed you.
3. Check that your projects and sessions appear.

You can also open **agents.okthink.ai**, the hosted Firehose app, and enter your computer's full Tailscale name:

1. Enter the name, such as `your-computer.your-tailnet.ts.net`, without `https://` or a port.
2. Select **Connect**.

The hosted app always connects on port 4801. If you installed Firehose on another port, open the address from **Settings** directly instead.

A short computer name or a Tailscale IP address does not work in the hosted app. Use the full name ending in `.ts.net` so it matches the HTTPS certificate.

To turn tailnet access off, run `firehose tailnet off` or turn off **Allow my other devices**.

## Check that your provider is ready

In **New session**, confirm that your project appears, choose its workspace, and select the provider you installed. Its model choices should load. After you choose an available model and check permissions, **Start session** should open a session in that workspace.

These are three separate checks: project discovery, model discovery, and session startup. A model list alone does not prove the provider can handle your account’s requests. Complete the [small explanation task](/getting-started/first-session/#3-give-it-a-clear-request) to check an actual response.

If a check fails, note the project name, provider, selected model, exact error, and the last step that worked. See [startup troubleshooting](/troubleshooting/common-problems/#start-session-is-unavailable-or-fails).

## Use more than one server

In the hosted app, each browser tab chooses its own server. Reloading a tab keeps its selected address. You can connect another tab to a different server.

Switch servers through **Settings → Server connection**. Switching preserves the previous server’s stored workspace for when you return.

**Forget this server** clears that server’s stored workspace, including drafts, annotations, open files, and project ordering. Use switching when you intend to return; read the confirmation before forgetting a server.

## If you can’t connect

On the Firehose computer, run `firehose status` to check that Firehose is running. From another device, check that the Firehose computer is awake and that both devices are signed in to the same Tailscale account. Follow [connection troubleshooting](/troubleshooting/common-problems/#i-cant-connect-to-my-server) for the next checks.

Once connected, [start your first session](/getting-started/first-session/).
