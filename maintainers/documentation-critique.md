# Firehose documentation: missing context and clearer instructions

The guides explain individual controls more clearly than they explain a complete working session. Readers can find permission settings, compare changes, and dispatch review actions, yet still need outside knowledge to connect those steps. This critique reviews the documentation at commit `8a2a337`, including implemented improvements. It replaces the previous assessment. The findings below come from reading the guides, not observing new readers or revalidating Firehose behavior. Prioritize the missing connections before expanding the catalog of features.

## Make the starting conditions observable

“Have an available agent provider” is a prerequisite readers cannot independently evaluate from the [quickstart](../src/content/docs/getting-started/first-session.md). The connection guide already lists access requirements and their owners. Extend that checklist with a provider readiness check and the information to send when it fails. In the quickstart, explain the visible evidence of readiness: the project appears, the selected provider’s models load, and a session can start. Give the operator a matching handoff checklist. Completion means a reader can identify which prerequisite is missing and whom to contact.

The practice route says to save a file on the server and open a terminal there, but never teaches those transitions. Someone using a phone or a remote machine may understand the location distinction and still be unable to proceed. Add a verified companion procedure for transferring the sample and reaching its directory, with separate local and remote cases. Include a location check before commands. If a route requires operator help, state that before the reader begins creating the project.

## Give each example a defined starting state

The examples need a consistent contract. The change guide limits greeting inputs to strings, while [Questions](../src/content/docs/tools/questions.md) proposes handling “missing or blank names.” Missing values introduce a different decision that the current example does not explain. Either keep that questionnaire within the string contract or explicitly introduce it as a scope expansion. Add a small starting-state note to every linked tutorial: files required, current behavior, and whether changes should already be committed. Review the sequence by following every link in order.

Readers who choose their own repository also need help adapting the example. “Replace the filename” does not explain how to choose a manageable target or verify an unfamiliar answer. Add one adaptation: select a small function, ask for its inputs and outputs, request one existing test, and compare the explanation with that test. Include an example of rejecting an unsupported claim. The reader should leave knowing how to evaluate an answer beyond recognizing the supplied greeting output.

## Explain decisions in everyday language

The permission reference exposes meaningful differences, but terms such as “workspace sandbox,” “on-request,” and “turn-level network access” still require translation. Explain each through a user consequence, then retain the exact technical label for recognition. For example, explain what a blocked download would look like only after observing that provider behavior. Add a verified approval walkthrough showing the request, available responses, and result. Keep provider-specific unknowns explicit; do not turn incomplete evidence into a universal recommendation about which checkbox to choose.

The [glossary](../src/content/docs/reference/glossary.md) has definitions that circle back to the word being defined: a model is described as a “model option,” and a session includes an unexplained “runtime.” Replace these with explanations based on the reader’s choices. Define provider, model, session, task, and turn together, then show how one task can require several turns in one session. Add “context” because Smart Review asks readers whether to clear it. A reader should be able to explain that choice without opening developer documentation.

## Show what happens between controls

Questions begins with “Select a controllable session” and “Choose an Interview depth,” but neither phrase tells newcomers how to decide. Verify what makes a session controllable and describe the visible prerequisite. Explain what the depth control changes using one observed short questionnaire and one longer example. Show a completed answer, the submission target, and the resulting conversation message. Preserve the existing deletion explanation. Completion means readers understand why a questionnaire disappeared and can find the answers that were delivered.

Smart Review now correctly separates choosing an action from using Act. The remaining uncertainty is operational: when should someone choose Explain, Refine, or Rewrite, and what does clearing context remove from the next request? Add a decision example for each using the same finding. Follow one finding through selection, dispatch, response, and independent verification. Verify the context behavior before describing what survives. Show an empty or unsuccessful review too; the current expected-result language risks implying that every review produces findings.

## Teach recovery and handoff with evidence

The finish-task guide asks readers to inspect changes and run relevant checks, but a newcomer may not know what counts as enough evidence. Add a sample handoff containing the requested behavior, changed files, exact check commands, outcomes, and unresolved concerns. Demonstrate one failure and the follow-up it requires. Explain how to locate retained work after closing, once verified. Keep interruption, closing, worktree deletion, and branch deletion distinct. Each action needs an observable outcome and a clear account of what remains.

Troubleshooting has improved, but “wait,” “refresh,” and “resolve the stated cause” still appear without enough guidance. Audit every occurrence and specify the available control, expected observation, and escalation information. Where there is no reliable timeout, say which signs distinguish ongoing work from unavailable information instead of inventing a duration. Add one complete failed-delivery example, including how to avoid sending a duplicate. Review mobile instructions separately: a desktop control name alone does not establish that someone can locate it on a phone.

## Make clarity a repeatable review process

Use three editing passes. First, a writer marks every prerequisite, undefined term, hidden transition, and unsupported outcome. Second, a product reviewer checks labels and consequences against the intended version, recording source evidence separately from live observations. Third, a new reader completes connection, first session, Questions, and review dispatch without coaching. Record hesitation, wrong turns, and requests for help. Turn each observed failure into a small issue naming the page, proposed change, and acceptance check. Keep the inline-component idea deferred; clearer explanations and verified examples come first.

Start with file transfer and example continuity because they block completion. Then address permissions, context, and review outcomes. Treat new pages as complete only when their prerequisites, actions, results, and recovery steps have survived the same review.
