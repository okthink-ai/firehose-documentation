---
title: "Chat and follow-ups"
description: "Send useful requests, follow an agent\u2019s work, and decide when to send another message."
verified: "2026-10-21"
evidence: ["chat", "session-signals", "layout", "annotation", "chat-rendering-1-3-0", "settings-workspace"]
---

Give your agent a clear task, follow its response, and keep the conversation moving when more information is needed.

## Send a request

1. Select the intended session in the **Sessions** sidebar.
2. Check its project and branch on the prompt bar above the message box.
3. Type your request in the message box at the bottom of the session, which shows `Type / for commands...` when empty.
4. Press Enter, or select the round arrow button at the right of the message box.
5. Follow the response and activity in the conversation. On a phone, it is in the **Chat** tab.

In a desktop browser, the message box keeps focus after you click send, **Queue after current turn**, or **Retry**, so you can type or dictate the next message straight away. Dictation tools that type into the focused field keep working between messages. On a phone or tablet the box doesn't refocus, so the on-screen keyboard stays closed after you send.

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

### Read tables and file links in replies

When an agent answers with a Markdown table, Firehose shows it as a table with aligned columns and formatted cell text, such as bold, links, and code. Scroll a wide table sideways to see its far columns. A table written with incorrect Markdown stays as plain text with its `|` characters.

A file path the agent links in its reply opens in the file viewer when you select it. This includes file names with spaces, which agents write as `[plan](<plans/greet blank names.md>)`; before Firehose 1.3.0, these links failed with a **Could not open** message.

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

If the task needs to stop, press Escape in the message box, or select the red stop button, **Stop (interrupt)**, beside the activity indicator above the message box. On mobile, **Interrupt** is in the session header’s **⋮** menu. Look for **Stopping...**, then check the latest response when the session settles. Explain what should happen next once it is ready for input.

Interruption does not undo file changes or commands that already ran. Use [targeted recovery](/guides/recover-changes/) if edits need correction. [Review the diff](/tools/diff/) before asking the agent to continue with a different approach.

## Annotate text

Annotate a passage when you want to comment on its exact wording, such as one step in a plan or one claim in a reply. An annotation pairs the text you selected with your comment, and it reaches the agent with your next message.

You can annotate text in a chat message or in a file open in the file viewer.

1. Select the text with your mouse, or long-press it on a touch screen.
2. Select the **Annotate** button that appears near your selection. On a computer, you can press **X** instead.
3. In the window that opens, check the quoted text, then type your comment in **What's your feedback?**
4. Select **Add**, or press Enter in a browser. Press Shift+Enter for a new line. **Cancel** discards the comment.
5. Add more annotations the same way if you need them. A chip above the message box counts them, such as **2 annotations**.
6. Send your next message. You can also send with an empty message box to deliver only the annotations.

**Expected result:** your message reaches the agent followed by each annotation: where it is (a file and line range, or a message), the selected text, and your comment. The chip disappears after you send.

To review the annotations before sending, select the chip. The list shows each quote and comment; select **Remove** beside one to drop it. The **×** on the chip clears all of them. Nothing goes to the agent until you send.

### Sentence annotation (beta)

Sentence annotation lets you annotate a Markdown file one sentence at a time, without carefully selecting text by hand. It's a beta feature, so it may change or go away. It's off by default.

**Before you begin:** open **Settings**, select **Beta features**, and under **Sentence annotation** turn on **Keyboard and touch annotation mode**. The setting applies only to the device you turn it on from. Sentence annotation works in a web browser, not the native apps, and only for Markdown files (`.md` or `.mdx`) in the file viewer's **Code** or **Rendered** view.

#### With a keyboard

1. Open the Markdown file in the file viewer.
2. Press **Alt+Shift+X**, or select the keyboard button labeled **Annotation mode** in the file viewer header. A sentence near the middle of the view is highlighted. If the last sentence you annotated is still visible, the highlight starts there instead.
3. Read the hint in the corner: `Annotation mode · J/K move · Shift+J/K extend · X annotate · Esc exit`.
4. Press **J** or the down arrow to move to the next sentence, and **K** or the up arrow to move to the previous one. Hold **Shift** with these keys to extend the highlight over several sentences.
5. Press **X** to open the comment window. Add or cancel the comment, and you're back in the mode at the same place.
6. Press **Esc**, or select the **Annotation mode** button again, to leave.

In this mode, **Esc** only leaves the mode. It doesn't stop the agent, as it does in the message box.

The mode also ends when you click in the file or select text yourself; your selection stays, ready for the usual **Annotate** button. It ends, too, when you click in a text field, when the file changes, or when a theme or text size change reloads the **Rendered** view. If the mode ends unexpectedly, press **Alt+Shift+X** to start again.

#### On a phone or tablet

On a device whose main input is touch, the file viewer header shows an **Annotate** button instead of the keyboard button.

1. Select **Annotate** in the file viewer header. The sentence about a quarter of the way down the view is highlighted, and the highlight follows as you scroll.
2. Read the hint: `Annotation mode · Scroll to move · Tap to select · Drag to extend`.
3. Tap a sentence to select it. Tap it again to clear the selection.
4. To select more, keep your finger on the screen after the tap and drag to scroll. The selection grows by each sentence the highlight passes.
5. When scrolling stops, select the **Annotate** button near the selection and add your comment.
6. Select **Annotate** in the header again to leave the mode.

#### Example: comment on a plan

**Starting state:** the `hello-firehose` project is on the `greet-blank-names` branch, and the agent has written `plans/greet-blank-names.md`. Sentence annotation is on, and you're using a computer.

1. Open `plans/greet-blank-names.md` from the agent's reply and select **Rendered**.
2. Press **Alt+Shift+X**, then press **J** until the highlight reaches a step such as "Add a new helper to trim names."
3. Press **X**, type `Use the existing formatName helper instead of adding a new one.`, and press Enter.
4. Press **Esc**. The chip above the message box reads **1 annotation**.
5. In the message box, type `Update the plan for my annotation. Do not change any code yet.` and send it.

**Expected result:** your message reaches the agent with the annotation after it, naming the plan file, the quoted step, and your comment. The agent's update to the plan is not guaranteed wording; read the file again before you continue. If the chip doesn't appear, check that you selected **Add** or pressed Enter in the comment window.

## Handle a question or delivery problem

To provide concrete evidence, [attach a screenshot or file](/tools/attachments/) and explain what it shows. For an independent command check, use [a separate terminal shell](/tools/terminal/).

Answer ordinary questions in chat. For a structured clarification request, use the [**Ask me** tab](/tools/questions/).

If a send fails, read the delivery notice and check whether the message already appears in the conversation before sending it again. See [message troubleshooting](/troubleshooting/common-problems/#my-message-didnt-reach-the-agent).
