---
title: "Projects, agents, and settings"
description: "Find project discovery and server settings, and choose agent options when starting a session."
verified: "2026-09-29"
evidence: ["settings", "launch", "connection", "permissions", "tailnet-access"]
---

Find the settings that control which projects you see and where a new session runs.

## Project directories

Open **Settings → Project directories**. Enter a comma-separated list of directories to scan, such as:

```text
~/dev, ~/projects
```

These paths refer to the machine running Firehose. `~` is supported. Keep existing entries you still need, then select **Save** and look for **Saved**.

If a project is missing, check its location on the server and the configured parent directory before trying [project troubleshooting](/troubleshooting/common-problems/#my-project-isnt-listed).

## Agent and model

The **Choose an agent** step in **New session** lets you select the agent, model, and autonomy for that session.

Use [provider and usage guidance](/reference/providers-and-usage/) to confirm account readiness and interpret usage indicators. Use the models listed by your installation. The selected provider’s models may need time to load, and a model marked unavailable can prevent the session from starting. Read its explanation and select an available option.

The wizard initializes autonomy as enabled. Read [Choose agent permissions](/reference/agent-permissions/) for the meanings of Claude’s **--dangerously-skip-permissions**, Codex’s **Full Auto**, and Antigravity’s separate editing and terminal controls. Check the displayed value before starting.

## Server connection

For the hosted app, use **Settings → Server connection** to manage the selected server. Switching lets you return to a previous server’s stored workspace. **Forget this server** deletes that server’s stored workspace after confirmation.

See [Connect to Firehose](/getting-started/connect/) for address requirements and tab behavior.

## Open from your other devices

**Settings → Open from your other devices** turns tailnet access on and off with **Allow my other devices**. When it is on, it shows the address to open from your phone or another computer, with a **Copy** button. Only the Tailscale account that owns this computer can connect. If it says **Restart Firehose to apply this.**, select **Restart now**. See [Connect to Firehose](/getting-started/connect/#open-firehose-from-your-other-devices).

## Tailscale HTTPS

**Settings → Tailscale HTTPS** shows the status of the HTTPS certificate used for remote access. Use it to investigate a missing, expired, or mismatched certificate. Restart Firehose after certificate installation or renewal.

You don’t need to change these settings to complete the everyday session guides on the Firehose computer itself.
