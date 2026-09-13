---
title: "Choose agent permissions"
description: "Understand the launch controls for Claude, Codex, and Antigravity before starting a session."
verified: "2026-09-13"
evidence: ["permissions", "launch"]
---

Decide what a new agent session may do before you start it. Permissions affect file changes and commands; they are separate from which model you choose.

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
| Enabled | No approval requests and full access outside the workspace sandbox |
| Disabled | Workspace write restrictions and approvals requested when the provider needs them; turn-level network access is disabled |

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

## Check your choice

Before **Start session**, confirm the project, workspace, provider, model, and permission controls. Start with a small task whose results you can inspect. Use a disposable practice project when learning unfamiliar provider settings.

If the provider asks for approval during work, read the requested action and its scope before answering. For questions about the task itself, respond in [Chat](/tools/chat/) or [Questions](/tools/questions/).
