---
title: "What you can do"
description: "Choose a practical Firehose workflow for understanding code, making changes, or reviewing work."
verified: "2026-09-29"
evidence: ["launch", "chat", "diff", "questions", "review", "connection", "tailnet-access", "layout"]
---

Choose a workflow that matches the result you want, then use the linked guide to complete it.

## Understand a project

Ask an agent to explain a function, trace a user action through the code, or identify the files involved in a feature. Give it a specific question and request file references so you can check the answer.

Try: “Find where the greeting text is created. Explain how whitespace is handled and show the relevant file.” Follow the [code walkthrough guide](/guides/explain-code/).

## Make a focused change

Start a session in the intended directory, describe the expected behavior, and ask for relevant checks. Use a new worktree when you want a separate directory and branch for the task: in **New session**, choose **New worktree** at the **Choose a workspace** step. See [Choose a workspace](/guides/workspaces/).

Try: “Make blank names display Hello, guest! Keep the existing behavior for nonblank names.” Follow [make and review a change](/guides/make-a-change/).

## Work in an application

[Prepare the project](/guides/prepare-project/) by checking setup and existing failures. Then [complete a browser task](/guides/project-workflow/) from reproducing a visible problem through inspecting a local commit. Adapt the same sequence to your app's commands and acceptance checks.

## Clarify a task before starting

Select **tools** on the prompt bar above the message box, then **Ask me questions**, to have an agent inspect the project and prepare a questionnaire. Answer it in the **Ask me** tab at the top of the session, then send the answers to the session that should do the work. See [clarifying questions](/tools/questions/).

## Follow several sessions

Use the sidebar to move between projects and sessions. Read each conversation’s latest response and activity before deciding whether to answer, redirect, or review. [Coordinate several sessions](/guides/parallel-sessions/) explains how to divide work, respond to the right agent, and combine results.

## Review the result

Use the **Diff** tab at the top of a session to inspect changed files and commits. Use the **Smart Review** tab for agent-generated findings, then investigate the findings and verify any fixes. A completed response alone does not establish that the code is correct.

## Check in from another device

Turn on tailnet access to open Firehose from your phone or another computer over Tailscale. Only you can connect. Read progress and answer the agent from your phone using the [mobile web guide](/guides/mobile/).

Available models and provider options depend on your server’s configuration. Start with [the tools overview](/tools/overview/) to find the controls for each workflow.
