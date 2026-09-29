---
title: "Ask for a code walkthrough"
description: "Get a focused explanation of unfamiliar code with file references and verifiable examples."
verified: "2026-09-13"
evidence: ["chat", "example"]
---

Understand a small part of a project before changing it. Ask a focused question and check the answer against the code.

## Before you begin

Open a session in the repository you want to understand. This example uses `greeting.mjs` from [your first session](/getting-started/first-session/); replace the filename when using another project.

**Starting state:** use the committed original `greeting.mjs`, before adding the fallback. Inputs are strings; blank strings produce `Hello, !`. This guide asks for an explanation without edits. If you already completed the change guide, the blank-string result is now `Hello, guest!`; do not reset useful work just to match this example.

## Use your own project

Choose one small function and an existing test that calls it. For example, in a fictional shop project you might choose `formatPrice` and a test for a zero price. Replace these names with files that actually exist:

```text
Find the function that formats a price and one existing test for it.
Name the exact files before explaining anything.
Explain its inputs and output using the zero-price case in that test.
State whether you read the expected value or actually ran the test.
Do not change files. Do not invent a test if none exists.
```

Compare the cited input and expected output with the test file. If there is no relevant test, ask for the evidence the agent used and mark the explanation as untested. For a test command, use the project README or its configured test script; ask before running a command that needs services or credentials.

If the answer claims “this returns $0.00” but the cited test expects “Free,” respond:

```text
The cited test expects "Free" for zero. Your answer says "$0.00".
Recheck the function and test. Explain the discrepancy with file references.
Do not edit either file to make your explanation appear correct.
```

**Expected result:** you can trace one concrete input through real code and distinguish a source-based explanation from a passing test run.

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
