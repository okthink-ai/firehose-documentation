---
title: "Understand data and access"
description: "Know where task material is used and what closing, clearing, and forgetting actually affect."
verified: "2026-09-13"
evidence: ["connection", "attachments", "context-actions", "closing", "persistence", "terminal", "provider-usage"]
---

Decide what material to give an agent by understanding the browser, server workspace, and provider involved in your task.

## Where your task material goes

| Material | Relevant location or use |
| --- | --- |
| Requests and agent responses | Sent through your Firehose server to the selected agent integration and displayed in Chat |
| Project files and command results | Read or produced in the server workspace; relevant contents can become input to the selected provider |
| Attachments | Copied into `.agent-manager-attachments` in the workspace; delivered as native input or a file reference depending on the provider |
| Conversation history | Firehose restoration uses saved session information, history, and provider transcript sources; storage details vary by provider |
| Browser workspace state | Includes saved interface state such as drafts and open files, scoped to the connected server |

The server location of your repository does not establish that its contents stay only on that machine. Confirm the selected provider's data handling and your organization's rules with the account owner before supplying restricted material. This page describes Firehose's source-verified data paths; it does not certify provider retention terms or a complete inventory of logs and backups.

## Who can act on the workspace

Confirm with the operator who can access your server and connected application. Do not assume a separate conversation or worktree creates a separate user-access boundary. Sessions sharing a directory can affect the same files.

Agent permissions control the provider's allowed actions. The in-app terminal is a server shell with the rights of the server account. Review its access warning before enabling it. Keep credentials out of prompts, attachments, screenshots, and public diagnostic reports; use the project's established configuration process instead.

## What each cleanup action means

| Action | What it affects |
| --- | --- |
| Clear context | Requests a conversation reset for subsequent work; it does not undo files or establish erasure of provider records |
| Close a session, retaining the checkout | Stops that session while preserving the checkout, including staged attachment files |
| Delete the worktree | Removes that checkout and its local attachment directory; it does not establish deletion of copies elsewhere |
| Forget this server | Clears that server's saved client workspace state; it is not a request to delete the server repository or provider account data |
| Add attachment staging to `.gitignore` | Changes Git's ignore rules; it neither deletes the files nor makes them inaccessible to the agent |

For a deletion or retention requirement, ask the operator and provider account owner to identify the relevant server storage, provider records, and backups. Use their verified procedure. A disappearing panel or empty chat is not evidence of complete data erasure.
