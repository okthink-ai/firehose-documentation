---
title: "Projects, agents, and settings"
description: "Find project discovery and server settings, and choose agent options when starting a session."
verified: "2026-09-13"
evidence: ["settings", "launch", "connection", "permissions"]
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

Use the models listed by your installation. The selected provider’s models may need time to load, and a model marked unavailable can prevent the session from starting. Read its explanation and select an available option.

The wizard initializes autonomy as enabled. Read [Choose agent permissions](/reference/agent-permissions/) for the meanings of Claude’s **--dangerously-skip-permissions**, Codex’s **Full Auto**, and Antigravity’s separate editing and terminal controls. Check the displayed value before starting.

## Server connection

For the hosted app, use **Settings → Server connection** to manage the selected server. Switching lets you return to a previous server’s stored workspace. **Forget this server** deletes that server’s stored workspace after confirmation.

See [Connect to Firehose](/getting-started/connect/) for address requirements and tab behavior.

## Tailscale HTTPS

**Settings → Tailscale HTTPS** shows certificate setup and status for remote access. If you manage the server, use it to investigate a missing, expired, or mismatched certificate. Restart Firehose after certificate installation or renewal.

If someone else manages the server, share the status message with them. You don’t need to change server configuration to complete the everyday session guides.
