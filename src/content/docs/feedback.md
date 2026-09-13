---
title: "Help improve these guides"
description: "Prepare a useful documentation correction or a request for a missing example."
verified: "2026-09-13"
evidence: ["editorial"]
---

Help the next reader by describing a confusing instruction, a broken example, or a missing topic.

## Prepare a correction

Record the page title and the step you were following. Describe the result you expected and what actually happened. If a control has a different label, include the label you see and the Firehose version, if available.

A useful report looks like this:

```text
Page: Start your first session
Step: Choose where the agent works, step 4
Expected: Find Current checkout
Observed: [the label or error I actually see]
Environment: [desktop or mobile web, browser, Firehose version if known]
Suggested correction: [the wording or extra step that would help]
```

If you need server version information, follow the [diagnostic steps](/troubleshooting/common-problems/#i-need-to-report-a-problem). If a version is unavailable, say so; the exact control label and error still help.

Remove credentials, private repository content, and personal machine names from examples before sharing them.

## Request a missing topic

Describe the task you want to finish and where you got stuck. “How do I continue an existing branch?” is easier to turn into a useful guide than “Add more advanced docs.”

Share your report through the channel where you received these docs, or give it to the person maintaining your Firehose setup. A public issue destination will be linked when this documentation repository is ready for release.

## Read with an agent

Use the [documentation index](/llms.txt) to find plain Markdown pages, or [read all guides as text](/llms-full.txt). These are generated from the same source as the website.

Readers and agents should treat sample prompts as examples to adapt. Follow your own task’s constraints and check results against the relevant project.
