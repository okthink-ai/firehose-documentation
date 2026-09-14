---
title: "Choose agent permissions"
description: "Understand the launch controls for Claude, Codex, and Antigravity before starting a session."
verified: "2026-09-13"
evidence: ["permissions", "launch", "approval-flow"]
---

Decide what a new agent session may do before you start it. Permissions affect file changes and commands; they are separate from which model you choose. See [data and access](/reference/data-and-access/) for where task material is used and what cleanup actions affect.

## Before you begin

At **New session → Choose an agent**, select your provider and model. The wizard initializes autonomy as enabled. Check its current value each time you launch.

Your provider must already be usable on the server. Seeing its name in Firehose does not install it, authenticate your account, or grant model access.

## Claude

**--dangerously-skip-permissions** passes Claude’s permission-bypass option when enabled. Turning it off launches without that option and leaves approval behavior to Claude’s normal configuration.

Do not assume turning it off makes every operation require approval. The provider’s configuration also matters.

## Codex

<figure class="product-capture">
  <picture>
    <source media="(max-width: 40rem)" srcset="/images/codex-launch-mobile.png" width="324" height="359">
    <img src="/images/codex-launch-desktop.png" width="646" height="238" loading="lazy" alt="Codex selected in the launch panel. Model and reasoning effort choices appear above the checked Full Auto checkbox.">
  </picture>
  <figcaption>Check Full Auto at the bottom of the provider controls before starting. This capture shows it enabled. Model choices vary by installation.</figcaption>
</figure>

| Full Auto | What Firehose requests |
| --- | --- |
| Enabled | Commands can run without approval requests and without the provider’s workspace restrictions. The agent may access files beyond the selected project, subject to the server account’s permissions. |
| Disabled | The provider limits file writes to its allowed workspace area. Its **on-request** policy lets it ask for permission when needed; this is not a prompt before every command. Firehose also requests network access to be disabled for the turn. |

The **workspace sandbox** is the provider’s set of restrictions on where commands can write and what they can access. Network restrictions can matter for tasks such as downloading dependencies; read the actual provider message rather than assuming every failure is a permission problem.

These controls change the provider’s permissions, not the operating system permissions of the account running it. A prompt asking for a read-only explanation does not itself switch the sandbox or approval policy.

## Antigravity

Antigravity separates editing mode from tool approval:

- **Default** uses the provider’s default mode.
- **Accept edits** applies file changes automatically, while **Full Auto** separately controls tool approvals.
- **Plan only** prevents edits.
- **Sandbox terminal commands** adds terminal restrictions; it does not grant automatic approval.

Review both the mode and **Full Auto**. Choosing an editing mode is not a substitute for checking command permissions.

## Other providers

Grok, Kimi, and Pi display **Full Auto**. Their provider-specific approval behavior is not covered by this guide yet. Ask the person configuring that provider to confirm its behavior before using it for a task that depends on approval boundaries.

## Respond to an approval request

Approval is a separate decision from answering a question about what to build. In **Chat**, read the requested action, target files or directory, reason, and the scope of each offered response before selecting it.

### Codex example

A command approval card can be titled **Approve command execution**. It can show **Command**, **Directory**, and **Reason**. For a provider request offering these choices:

| Response | Meaning |
| --- | --- |
| **Accept** | Allow this request once |
| **Accept For Session** | Allow matching requests for the rest of this session |
| **Decline** | Reject this request |

These options come from the provider; not every request offers all three. A generic approval card can instead offer **Approve** and **Deny**. Read the actual option descriptions.

Suppose a request asks to run a command in a directory outside your intended project. Choose the rejection option if that scope is wrong, then explain the correct directory in Chat. If the command and scope match your task and you want to allow only this request, choose the one-time option when offered. Selecting a button sends the decision immediately.

After a successful submission, the pending card is removed. Check the next response or command result: accepting a request permits an attempt; it does not establish that the command succeeded. If **Failed to submit approval decision** appears, the submission failed and the card remains available. Check the connection and the current request before trying again.

This example explains the implemented card and request contract; it is not a recorded live command execution.

### Claude example

A **Permission requested** card shows Claude’s actual parsed options. Selecting an available option submits it immediately; a **Persists this session** badge identifies wording about a lasting choice. If an explanation field is available, type your response there and select **Submit**.

If the card says the permission can only be answered in the terminal, select **Open Claude Code** and answer the current prompt there. Do not look for an invented universal Allow button. Check the response afterward before repeating your decision.

## Check your choice

Before **Start session**, confirm the project, workspace, provider, model, and permission controls. Start with a small task whose results you can inspect. Use a disposable practice project when learning unfamiliar provider settings.

If the provider asks for approval during work, read the requested action and its scope before answering. For questions about the task itself, respond in [Chat](/tools/chat/) or [Questions](/tools/questions/).
