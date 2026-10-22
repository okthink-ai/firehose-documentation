---
title: "Projects, agents, and settings"
description: "Open Settings, find each section, and choose agent options when starting a session."
verified: "2026-10-21"
evidence: ["settings-workspace", "firehose-agent-skill", "workflows-beta", "annotation", "release-1-3-0", "settings", "review-prompts", "launch", "connection", "permissions", "tailnet-access", "layout"]
---

Find the settings that control which projects you see, how other devices reach Firehose, and where a new session runs.

## Open and close Settings

To open Settings, select the gear icon labeled **Settings** at the bottom of the icon rail on the far left.

Settings opens as a full page in place of the session area. The **Sessions** sidebar is hidden while it is open. A column on the left, titled **Settings**, lists the sections. Select a section to scroll the page to it. As you scroll, the list highlights the section you are reading.

To leave Settings, do any of these:

- Select the **Settings** gear again.
- Select the **Sessions** icon at the top of the icon rail.
- Press Escape. If you are typing in a field, Escape stays with that field, so select outside it first.

Leaving Settings returns you to the session you had open, including any message you had typed but not sent. While Settings is open, Escape leaves Settings; it does not stop that session's agent.

### On a phone

Go back to the session list first; the icon rail is not shown while a session is open. Select **Settings**. Settings opens at a list of its sections, each with a short description. Select a section to open its page.

To return to the list, select the back arrow (**Back to Settings sections**) or use Back on your phone or browser. To leave Settings, select **Sessions** on the icon rail, which appears again on the section list.

## Settings sections

Settings has seven sections, in this order:

| Section | What you find there |
| --- | --- |
| **General** | **Workspace layout** and **Project directories**. On the Android app, **Android app updates**. |
| **Account** | Team chat sign-in (**Account**) and, on an installed release, **License** with **Manage subscription**. |
| **Connection** | **Server connection** (hosted app only), **Open from your other devices**, and **Tailscale HTTPS**. |
| **Agents** | **Conversation names**, **Smart Review prompts**, and **Firehose Agent skill**. |
| **Voice & sounds** | **API keys**, **Read aloud** voices, **Voice vocabulary**, and **Notification sounds**. |
| **Beta features** | **Workflows**, **Sentence annotation**, **GPT-Live voice**, and **iOS Simulator**. |
| **Debugging** | Tools for diagnosing Firehose itself, such as **Network statistics**. |

Some groups appear only where they apply. For example, **Tailscale HTTPS** appears once Firehose knows the certificate's status. Settings moved to this full page in Firehose 1.3.0. Before that, it opened in the sidebar.

## Project directories

Open **Settings** and select **General**. **Project directories** follows **Workspace layout**. Enter a comma-separated list of directories to scan, such as:

```text
~/dev, ~/projects
```

These paths refer to the machine running Firehose. `~` is supported. Keep existing entries you still need, then select **Save** and look for **Saved**.

If a project is missing, check its location on the server and the configured parent directory before trying [project troubleshooting](/troubleshooting/common-problems/#my-project-isnt-listed).

## Smart Review prompts

**Settings → Agents → Smart Review prompts**, after **Conversation names**, holds the prompts offered in [Smart Review’s **Areas of Focus**](/tools/smart-review/#reuse-a-saved-prompt). Each prompt has a name, shown on its button, and the text the reviewer receives.

- Edit a name or its text in place.
- Select **Add prompt** for a new one, or **Remove** to delete one.
- Select **Save** and look for **Saved**. Changes are not kept until you save.

Firehose stores the prompts on the Firehose computer, so everyone who uses it sees the same list. It starts with **Redux** and **Clean up architecture**, which you can edit or remove like any other. You can keep up to 30 prompts, with names up to 60 characters and text up to 4,000 characters. This section was added in Firehose 1.2.3.

## Firehose Agent skill

**Settings → Agents → Firehose Agent skill** lets your agents operate Firehose for you. With the skill installed, a Claude Code or Codex session can use Firehose's local API to list and start sessions, send follow-ups, and run Smart Review.

Claude Code and Codex each have their own row, showing whether the skill is installed. Select **Install** to add the skill to that agent's global skills folder on the Firehose computer. New sessions of that agent can use it. When a row offers them, select **Update** to install this Firehose's version, or **Remove** to take it out.

Firehose never installs the skill unless you select **Install**. Once it has installed a copy, it keeps that copy up to date when it starts. If you edit the installed skill, Firehose stops updating or removing it, and the row says so.

**Before you install it:** an agent with this skill acts with your full authority over Firehose on that computer. There is no separate permission scope for it. It can start sessions, send messages, and run reviews just as you can from the dashboard. Install it only for agents you would trust with those actions.

`firehose uninstall` removes the copies Firehose installed. It leaves any copy you edited in place and says so.

## Beta features

**Settings → Beta features** holds features that are still being built. They may change or go away. Each is off until you turn it on.

- **Workflows**: Turn on **Show Workflows** to show the **Workflows** panel on the icon rail, and **Run workflow** in session menus and on GitHub issues. Runs already started keep going if you turn it off. See [Workflows](/tools/workflows/).
- **Sentence annotation**: Turn on **Keyboard and touch annotation mode** to add an **Annotate** control to Markdown files, so you can select sentences with the keyboard or by touch. See [Annotate text](/tools/chat/#annotate-text).
- **GPT-Live voice**: Turn on **GPT-Live voice companion** to add a **Talk** button to the selected session on this device. Calls use the OpenAI API key from **Settings → Voice & sounds → API keys** and are billed to that account. During a call, requests you direct at the agent are sent without a confirmation step.
- **iOS Simulator**: Turn on **Show Simulator tab** to show the **Simulator** tab in worktree sessions on the web. A stream starts only when you choose **Connect stream**.

## Agent and model

The **Choose an agent** step, the last step after you select **New session** (the **+** at the top of the **Sessions** sidebar), lets you select the agent, model, and autonomy for that session.

Use [provider and usage guidance](/reference/providers-and-usage/) to confirm account readiness and interpret usage indicators. Use the models listed by your installation. The selected provider’s models may need time to load, and a model marked unavailable can prevent the session from starting. Read its explanation and select an available option.

The wizard initializes autonomy as enabled. Read [Choose agent permissions](/reference/agent-permissions/) for the meanings of Claude’s **--dangerously-skip-permissions**, Codex’s **Full Auto**, and Antigravity’s separate editing and terminal controls. Check the displayed value before starting.

## Server connection

For the hosted app, use **Settings → Connection → Server connection** to manage the selected server. Switching lets you return to a previous server’s stored workspace. **Forget this server** deletes that server’s stored workspace after confirmation. If you switch servers, Settings stays open at **Connection**.

See [Connect to Firehose](/getting-started/connect/) for address requirements and tab behavior.

## Open from your other devices

**Settings → Connection → Open from your other devices** turns tailnet access on and off with **Allow my other devices**. When it is on, it shows the address to open from your phone or another computer, with a **Copy** button. Only the Tailscale account that owns this computer can connect. If it says **Restart Firehose to apply this.**, select **Restart now**. See [Connect to Firehose](/getting-started/connect/#open-firehose-from-your-other-devices).

## Tailscale HTTPS

**Settings → Connection → Tailscale HTTPS** shows the status of the HTTPS certificate used for remote access. Use it to investigate a missing, expired, or mismatched certificate. Restart Firehose after certificate installation or renewal.

You don’t need to change these settings to complete the everyday session guides on the Firehose computer itself.
