---
title: "Ask for a code walkthrough"
description: "Get a focused explanation of unfamiliar code with file references and verifiable examples."
verified: "2026-09-13"
evidence: ["chat", "example"]
---

Understand a small part of a project before changing it. Ask a focused question and check the answer against the code.

## Before you begin

Open a session in the repository you want to understand. This example uses `greeting.mjs` from [your first session](/getting-started/first-session/); replace the filename when using another project.

## Ask a specific question

Send:

```text
Explain greet in greeting.mjs for someone new to this project.
Describe its input and return value. Trace what happens for " Ada ".
Identify one edge case and point to the relevant code.
Do not change files.
```

The scope is small enough to check. For a larger project, begin with one user action, such as “trace what happens when a person submits the sign-in form,” and ask for the few files involved.

## Verify the explanation

Compare the cited file with the answer. In the sample, `trim()` removes surrounding whitespace and the template string adds the greeting prefix and an exclamation mark.

Run the example check from the quickstart if you want to confirm the output. If the answer names a file that does not exist, ask the agent to recheck the repository and give the actual location.

## Ask the next useful question

Try:

```text
What happens for a string containing only spaces?
Explain the current result and suggest a small improvement.
Wait for my next request before editing.
```

The current function produces `Hello, !` for spaces alone. That gives you a concrete behavior to discuss. When you’re ready, [make and review the improvement](/guides/make-a-change/).
