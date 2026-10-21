---
title: "Projects, agents, and settings"
description: "Find project discovery and server settings, and choose agent options when starting a session."
verified: "2026-10-21"
evidence: ["settings", "review-prompts", "launch", "connection", "permissions", "tailnet-access", "layout", "settings-workspace", "firehose-agent-skill", "team-chat-sign-in", "symlinked-project-dirs", "workflows"]
---

Find the settings that control which projects you see and where a new session runs.

To open Settings, select the gear icon labeled **Settings** at the bottom of the icon rail on the far left. On a phone, go back to the session list first; the icon rail appears only there.

## Find a section

Settings opens as a full page in place of the session area. On a computer, an index on the left lists its seven sections: **General**, **Account**, **Connection**, **Agents**, **Voice & sounds**, **Beta features**, and **Debugging**. Select a section to jump to it. As you scroll, the index marks the section you are reading.

On a phone, Settings opens at the list of sections. Choose one to open it, and select the back arrow, **Back to Settings sections**, to return to the list.

To leave Settings, select **Settings** on the icon rail again, press Escape, or open a session. Escape inside a text field stays with the field, so an unsaved entry is not lost. Leaving brings back the session you had selected, with any message you had not sent yet.

## Project directories

Open **Settings → General** and find **Project directories**. Enter a comma-separated list of directories to scan, such as:

```text
~/dev, ~/projects
```

These paths refer to the machine running Firehose. `~` is supported. Keep existing entries you still need, then select **Save** and look for **Saved**.

A directory can be a symbolic link, such as `~/code` pointing to a folder on an external drive. Firehose lists the projects inside it and groups each one with its worktrees. A project's sessions appear as one group in the sidebar, with their reviews and questionnaires, whichever path you reached the project by. A project that is itself a symbolic link inside a project directory is not listed.

If a project is missing, check its location on the server and the configured parent directory before trying [project troubleshooting](/troubleshooting/common-problems/#my-project-isnt-listed).

## Smart Review prompts

**Settings → Agents → Smart Review prompts** holds the prompts offered in [Smart Review’s **Areas of Focus**](/tools/smart-review/#reuse-a-saved-prompt). Each prompt has a name, shown on its button, and the text the reviewer receives.

- Edit a name or its text in place.
- Select **Add prompt** for a new one, or **Remove** to delete one.
- Select **Save** and look for **Saved**. Changes are not kept until you save.

Firehose stores the prompts on the Firehose computer, so everyone who uses it sees the same list. It starts with **Redux** and **Clean up architecture**, which you can edit or remove like any other. You can keep up to 30 prompts, with names up to 60 characters and text up to 4,000 characters. This section was added in Firehose 1.2.3.

## Firehose Agent skill

**Settings → Agents → Firehose Agent skill** lets your agent sessions operate Firehose for you: list and start sessions, send follow-ups, and run Smart Review. A skill is a set of instructions an agent loads when a task needs it. Firehose never installs it on its own.

It lists **Claude Code** and **Codex** separately, each with its status:

- Select **Install** to add the skill to that agent's skills folder on the Firehose computer, such as `~/.claude/skills/firehose-agent` for Claude Code. New sessions of that agent can use it.
- **Update** appears when the installed copy is out of date. **Remove** takes it out again.
- If you edited the installed copy, or a skill Firehose didn't install is already at that path, Firehose leaves it alone and offers no button.

The Firehose that installed the skill keeps it up to date when it starts. `firehose uninstall` removes copies this Firehose installed, unless you edited them.

## Agent and model

The **Choose an agent** step, the last step after you select **New session** (the **+** at the top of the **Sessions** sidebar), lets you select the agent, model, and autonomy for that session.

Use [provider and usage guidance](/reference/providers-and-usage/) to confirm account readiness and interpret usage indicators. Use the models listed by your installation. The selected provider’s models may need time to load, and a model marked unavailable can prevent the session from starting. Read its explanation and select an available option.

The wizard initializes autonomy as enabled. Read [Choose agent permissions](/reference/agent-permissions/) for the meanings of Claude’s **--dangerously-skip-permissions**, Codex’s **Full Auto**, and Antigravity’s separate editing and terminal controls. Check the displayed value before starting.

## Server connection

For the hosted app, use **Settings → Connection → Server connection** to manage the selected server. Switching lets you return to a previous server’s stored workspace. **Forget this server** deletes that server’s stored workspace after confirmation.

See [Connect to Firehose](/getting-started/connect/) for address requirements and tab behavior.

## Open from your other devices

**Settings → Connection → Open from your other devices** turns tailnet access on and off with **Allow my other devices**. When it is on, it shows the address to open from your phone or another computer, with a **Copy** button. Only the Tailscale account that owns this computer can connect. If it says **Restart Firehose to apply this.**, select **Restart now**. See [Connect to Firehose](/getting-started/connect/#open-firehose-from-your-other-devices).

## Tailscale HTTPS

**Settings → Connection → Tailscale HTTPS** shows the status of the HTTPS certificate used for remote access. Use it to investigate a missing, expired, or mismatched certificate. Restart Firehose after certificate installation or renewal.

## Account

**Settings → Account** has two parts. **Account** signs you in to Team Chat: enter your email address, select **Send code**, then enter the six-digit code from the email and select **Verify code**. A code expires after 10 minutes; **Resend code** sends a new one and **Change email** starts over. Only an existing Team Chat account that has been given access can sign in this way. **License** shows this server's license; see [Activate Firehose](/getting-started/activate/).

## Beta features

**Settings → Beta features** holds features that are still being built. They may change or go away.

- **Sentence annotation:** **Keyboard and touch annotation mode** adds an **Annotate** control to the header of Markdown files in the file viewer, on web. With a keyboard, press Alt+Shift+X to start, J or K (or the arrow keys) to move one sentence, Shift to extend the selection, and X to comment on it. Escape leaves the mode. On a touch screen, tap a sentence to select it and scroll to extend the selection. It is off by default.
- **Workflows:** **Show Workflows** adds a **Workflows** panel to the icon rail and **Run workflow…** to the prompt bar, session menus, and GitHub issues. It is off by default and applies to the device where you switch it on. See [Run a workflow (beta)](/tools/workflows/).
- **GPT-Live voice:** an experimental voice companion that adds a **Talk** button to the selected session. It uses the OpenAI API key under **Voice & sounds → API keys**.

You don’t need to change these settings to complete the everyday session guides on the Firehose computer itself.
