# Check whether a new reader can finish

Use this worksheet before calling a guide reader-validated. Automated website
checks and source inspection support this exercise; they do not replace it.
The current independent reader pass is **pending**.

## Prepare the exercise

Record the documentation commit, product version, date, device, browser, provider,
and reviewer roles. Use fictional data and a disposable project. The operator
must supply the connection details, a working provider, and an agreed file-access
route. For Smart Review, supply a task branch with committed changes and an
available review base. Keep the standalone greeting practice separate if it lacks
that base.

Do not put tokens, private paths, or conversation history into public notes.
Obtain the participant's agreement before recording their screen.

## Pass one: writer

Follow every link in the tutorial sequence. Mark each unexplained term, prerequisite
without a check, and transition between browser, local computer, and server.
Compare the original greeting state with the completed reference. Inputs must stay
limited to strings, and each page must say whether the change is committed.

For each instruction, identify the action, observable result, and next step if that
result does not appear. Replace a vague wait with a visible state or a support
handoff; do not invent a timeout. Read the page aloud to catch long sentences and
words that require implementation knowledge.

## Pass two: product reviewer

Check exact labels and consequences against the intended version. Record source
paths in `evidence.json` and live observations separately. Exercise a permission
request, Questions submission, and review dispatch in the disposable project.
Record the state before selection, the response, and independent evidence of the
result. Include one failure or empty result. If access is unavailable, record the
specific unrun step and keep that portion pending.

Compare Quick and Thorough questionnaires on appropriately scoped topics. Preserve
the actual generated questions and answer-delivery message after removing private
data. An illustrative questionnaire cannot satisfy this observation.

## Pass three: new reader

Give the reader the site and these goals. Let them choose links and interpret
instructions without coaching. Ask them to say what they expect before an action.
If they need help, record where and why before helping; that step did not pass
independently. Do not introduce an artificial speed target.

| Task | Completion evidence |
| --- | --- |
| Connect | Reader identifies the server and confirms project/provider readiness, or identifies the missing prerequisite and its owner |
| Start a session | Reader places the original file in the server workspace, launches the intended session, and checks its explanation against the two baseline outputs |
| Answer Questions | Reader chooses a depth, completes answers, predicts that submission permits continuation, and locates the delivered answers in Chat |
| Dispatch a review | Reader uses the configured branch, explains a finding, distinguishes selection from Act, chooses context handling, and verifies the resulting change independently |

Include a narrow-screen attempt to locate tabs, Diff comparison controls, and
refresh. If that device is unavailable, mark the mobile observation pending.

## Extend the exercise to an ongoing project

After the four core tasks, use the browser form or an approved disposable app.
Ask the reader to identify setup requirements and existing edits, reproduce the
visible bug, check all four form inputs and Enter submission, request a scoped
local commit, and inspect its files. Introduce a known unrelated edit and check
that the recovery request preserves it. Keep publication outside this exercise.

Record a separate attempt at opening a terminal in the correct workspace and
attaching a fictional screenshot. Have the reader predict where the attachment
is stored and what closing or forgetting removes. A failed prediction becomes a
specific documentation issue. These additional reader observations are pending.

## Record obstacles and turn them into changes

Copy a row for each hesitation, wrong turn, missing explanation, or help request.
Distinguish an observed failure from a proposed improvement based on judgment.

| Page and step | Starting state | Expected result | Observed action/result | Help needed | Proposed edit | Acceptance check |
| --- | --- | --- | --- | --- | --- | --- |
| To complete | To complete | To complete | To complete | To complete | To complete | To complete |

Example issue: “On the file-access page, the reader copied the file to their laptop
instead of the server. Add a location check before copying. Acceptance: a new
reader identifies both machines and prints the intended server path without help.”
This is an example of an issue format, not an observation from a completed study.

Give each issue an owner role and priority. Retest the changed step with a reader
who has not memorized the correction. Close it only when the acceptance check
passes; record remaining obstacles in the backlog. A successful site build alone
does not close a comprehension issue.
