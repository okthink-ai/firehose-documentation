---
title: "Give an agent a file or screenshot"
description: "Attach relevant evidence, confirm upload and delivery, and understand the copy stored in the project."
verified: "2026-09-29"
evidence: ["attachments", "chat", "closing", "layout"]
---

Add a screenshot or file to a request so the agent can use concrete evidence when investigating a task.

## Before you begin

Select the intended session and check its workspace. Use material appropriate for that project's agent and provider. A screenshot should show the relevant state clearly; remove unrelated private information before uploading.

Attaching a file copies it to the server workspace. It does not replace an application file with the same name. To install the tutorial's source file, follow [file placement](/getting-started/files-and-terminal/) instead.

## Attach and explain the evidence

1. Select **Add attachment**, the **+** button at the left of the message box's lower row.
2. Choose **Photos** or **Files** when that menu is offered. Some configurations open the file picker directly.
3. Select the file. Check its preview or filename and upload status. If it shows progress, let that finish before sending. For an error, read the message and use **Retry** when offered.
4. Add a request that explains what to inspect, then press Enter or select the round arrow button to send.

For example:

```text
This screenshot shows the greeting form after submitting three spaces.
The result is "Hello, !"; I expect "Hello, guest!".
Find the code responsible and explain the smallest correction before editing.
Treat the screenshot as evidence of the visible result, not proof of its cause.
```

**Expected result:** the attachment uploads and the message reaches the selected session. Read the response to confirm the agent could use it. Provider handling varies: some accept native image/text input, while others receive a reference to the staged file. An uploaded preview alone does not establish that the agent understood the contents.

## Understand the staging notice

**Prompt attachments are staged in this project** explains the `.agent-manager-attachments` directory created inside the workspace. **Got it** acknowledges the notice. **Add to .gitignore** changes the project's `.gitignore` so Git ignores that directory; review that edit before committing.

This staging directory holds prompt material. Keep it out of application commits unless you deliberately intend to include that material. Ignoring it in Git does not delete it or prevent an agent from reading it.

Removing an attachment from the composer requests removal of its staged copy, but the server can retain a copy needed by a queued or active delivery. Closing a session while retaining the checkout also retains staged attachments. Deleting the worktree removes that directory with the checkout. See [data and access](/reference/data-and-access/) for the limits of these actions.

## If the file cannot be used

Read any size, upload, or format error and choose a smaller relevant file if necessary. If delivery says the attachment is unavailable, attach it again, then follow [delivery troubleshooting](/troubleshooting/common-problems/#my-message-didnt-reach-the-agent) before resending the request.

If the agent cannot read the format, provide an appropriate text excerpt or a clearer screenshot and ask it to identify what remains unreadable. Do not treat an invented description as successful attachment use.
