---
title: "Ask clarifying questions"
description: "Have an agent inspect your project, ask about key decisions, and use your answers to continue."
verified: "2026-09-13"
evidence: ["questions"]
---

Clarify an ambiguous task before implementation. Firehose can ask the agent to inspect your project and prepare questions for you to answer.

## Request a questionnaire

1. Select a controllable session in the intended project and worktree.
2. Select **ask me questions** in the prompt bar.
3. In **Ask me clarifying questions**, enter the topic you want to explore.
4. Choose an **Interview depth**.
5. Select **Ask questions**.

For the sample project, try:

```text
Improve greeting.mjs so it handles missing or blank names.
Ask about the intended inputs, fallback text, and checks before changing code.
```

If the agent is working, the request waits for the current turn to finish. It does not interrupt the turn to ask questions.

## Answer and submit

Open **Questions**. Read each question, choose the applicable answer, and add context where a text field is offered. Answer required questions before submitting.

Questions can appear while the agent is still generating the questionnaire. Submission becomes available when the questionnaire is ready.

Before selecting **Submit to Agent**, check which session you’re viewing. The completed answers go to that selected session in the same worktree. Sessions sharing that worktree see the same unfinished questionnaire; only one can be unfinished there at a time.

The answer message includes the original topic and context. After confirmed delivery, the questionnaire is removed. Look in the receiving conversation for the answer message and the agent’s continuation.

## Recover from a problem

If answer delivery fails, the questionnaire stays available so you can retry **Submit to Agent**. Read the error and check the selected session before retrying.

Cancelled or failed questionnaires remain visible until you choose **Remove**. Removing a questionnaire deletes its questions and saved answers. Keep any information you still need before removing it.

For a small clarification that doesn’t need a questionnaire, simply [send a chat message](/tools/chat/).
