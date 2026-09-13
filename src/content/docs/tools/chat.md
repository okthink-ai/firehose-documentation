---
title: "Chat and follow-ups"
description: "Send useful requests, follow an agent\u2019s work, and decide when to send another message."
verified: "2026-09-13"
evidence: ["chat"]
---

Give your agent a clear task, follow its response, and keep the conversation moving when more information is needed.

## Send a request

1. Select the intended session in the sidebar.
2. Check its project and branch.
3. Enter your request in the chat input.
4. Select **Send message**.
5. Follow the response and activity in **Chat**.

A useful request names the result, relevant files, constraints, and how the agent should check its work. For example:

```text
In greeting.mjs, make greet return "Hello, guest!" for blank names.
Keep trimming whitespace around nonblank names.
Add checks for an empty string and spaces only.
Run the checks and tell me what changed. Do not commit or push.
```

## Follow the work

The conversation shows responses and tool activity as the agent works. Read the latest messages before intervening: it may be running a command, asking a question, or explaining why it could not continue.

A session that stops showing activity may have finished its turn or need help. Read the response to tell which. A turn ending does not mean every part of your task succeeded.

## Send a follow-up

When the agent has finished, send the next request in the same chat. Refer to the specific result you want to refine:

```text
Explain why the spaces-only check passes.
Point to the line that chooses the fallback name.
```

When available during an active turn, **Queue after current turn** lets you hold a follow-up until that turn ends. Use it for work that should come afterward. Read any delivery notice before retrying a message.

## Change direction

If the task needs to stop, use the session’s interrupt control. On mobile, **Interrupt** is available in the session header’s menu. Wait for the interrupted state, then explain what should happen next.

Interruption does not undo file changes or commands that already ran. [Review the diff](/tools/diff/) before asking the agent to continue with a different approach.

## Handle a question or delivery problem

Answer ordinary questions in chat. For a structured clarification request, use the [Questions panel](/tools/questions/).

If a send fails, read the delivery notice and check whether the message already appears in the conversation before sending it again. See [message troubleshooting](/troubleshooting/common-problems/#my-message-didnt-reach-the-agent).
