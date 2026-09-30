---
title: "Chat and follow-ups"
description: "Send useful requests, follow an agent\u2019s work, and decide when to send another message."
verified: "2026-09-29"
evidence: ["chat", "session-signals", "layout"]
---

Give your agent a clear task, follow its response, and keep the conversation moving when more information is needed.

## Send a request

1. Select the intended session in the **Sessions** sidebar.
2. Check its project and branch on the prompt bar above the message box.
3. Type your request in the message box at the bottom of the session, which shows `Type / for commands...` when empty.
4. Press Enter, or select the round arrow button at the right of the message box.
5. Follow the response and activity in the conversation. On a phone, it is in the **Chat** tab.

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

## Read the session signals

| What you see | What to check next |
| --- | --- |
| Animated activity and the current action | Follow the work in Chat; a long command may need time |
| **Idle** | Read the latest response: the turn may be finished or the agent may need information |
| **Stopping...** | Firehose has received your stop action; wait for the state to settle before sending another interruption |
| **Closing...** | A session close is in progress; follow the close or cleanup notice |
| **Transcript unavailable** | Firehose cannot read the conversation reliably; do not infer that the agent has finished |

Queueing and connection problems are separate from these activity signals. Read delivery notices and check connectivity if updates stop. An idle indicator does not verify that tests passed or the task is complete.

## Send a follow-up

When the agent has finished, send the next request in the same chat. Refer to the specific result you want to refine:

```text
Explain why the spaces-only check passes.
Point to the line that chooses the fallback name.
```

During an active turn, **Queue after current turn**, the list icon to the left of the send button, lets you hold a follow-up until that turn ends. Use it for work that should come afterward. Read any delivery notice before retrying a message.

## Change direction

If the task needs to stop, select the red stop button, **Stop (interrupt)**, beside the activity indicator above the message box. On mobile, **Interrupt** is in the session header’s **⋮** menu. Look for **Stopping...**, then check the latest response when the session settles. Explain what should happen next once it is ready for input.

Interruption does not undo file changes or commands that already ran. Use [targeted recovery](/guides/recover-changes/) if edits need correction. [Review the diff](/tools/diff/) before asking the agent to continue with a different approach.

## Handle a question or delivery problem

To provide concrete evidence, [attach a screenshot or file](/tools/attachments/) and explain what it shows. For an independent command check, use [a separate terminal shell](/tools/terminal/).

Answer ordinary questions in chat. For a structured clarification request, use the [**Ask me** tab](/tools/questions/).

If a send fails, read the delivery notice and check whether the message already appears in the conversation before sending it again. See [message troubleshooting](/troubleshooting/common-problems/#my-message-didnt-reach-the-agent).
