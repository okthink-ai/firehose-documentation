---
title: "Choose a provider and check usage"
description: "Confirm a usable provider, understand differing controls, and distinguish usage indicators from billing."
verified: "2026-09-13"
evidence: ["launch", "permissions", "provider-usage"]
---

Choose an agent setup that can perform your task and identify where to check availability and usage.

## Start with a working account

Have the operator confirm which provider is installed and authenticated on the server, which account it uses, and which models that account can access. Choosing a name in **New session → Choose an agent** does not complete those steps.

Choose an available model, check [permissions](/reference/agent-permissions/), and try a small request whose result you can inspect. If startup fails, report the provider, model, exact error, and last successful step. Authentication and account-access problems need the operator's provider setup checked; an unavailable model needs a supported selection.

## Understand the differences that affect a task

| Choice | Practical consequence |
| --- | --- |
| Provider | Changes the agent integration, permission controls, and available capabilities |
| Model | Selects the AI system used within that provider; available choices depend on the installation and account |
| Reasoning effort, when offered | A provider/model setting, separate from permission to edit or run commands |
| Interview depth in Questions | Requests a number of questions; it is separate from model reasoning effort |

For Claude, the guides cover the live terminal and its permission cards. Codex exposes **Full Auto** and provider-supported reasoning choices. Antigravity separates editing mode and tool approval. See the permission reference for exact consequences.

Attachment handling also differs: an agent may receive native content or a staged file reference. Confirm it can use the material rather than assuming every provider accepts every format. These guides do not establish a quality or speed ranking among models; compare a small representative task using your own acceptance checks.

## Read usage without guessing a bill

When provider limit data is available, the footer monitor shows provider entries with reported window labels and percentages. Claude, Codex, and Antigravity have detail menus; select the provider entry to inspect the available information. Not every provider or account supplies the same data. Missing or unknown usage is not zero usage.

The session's context indicator describes how much information occupies the model's context window. Its **Context window** details, where available, are separate from account limits and financial charges.

For actual charges, subscription terms, and account spending controls, use the account's billing information with its owner. This guide does not verify a universal Firehose budget cap or automatic stop at a chosen cost. If your task requires a spending boundary, have the account owner confirm where it is enforced before running the task.

If a request reports a limit, save the message, identify the provider/account with the operator, and check any reported reset or remaining allowance. Repeatedly starting sessions does not establish that an account limit has changed.
