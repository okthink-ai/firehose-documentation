# Implement the missing-context critique

This record maps the [current critique](documentation-critique.md) to local
documentation changes. The critique assessed commit `8a2a337`; implementation
started from `ab2d899`. Product claims were checked against source revision
`c57391d84f8d5bd198354fecf9c93c7e85418ec3`. See [evidence.json](evidence.json)
for paths, source tests, and the separately recorded earlier runtime observations.

## Delivered changes

| Critique concern | Implementation | Acceptance evidence or remaining limit |
| --- | --- | --- |
| Observable readiness | Connection checks now cover projects, models, launch, and an actual small response; operator handoff lists access and support details | Source confirms controls; full live launch remains pending |
| File and terminal transitions | New local, SSH, and operator-assisted companion; path checks and explicit copy destination; linked before practice setup | Local shell recipe checked; real SSH login and phone/operator exchange remain pending |
| Example continuity | Original versus completed state, string inputs, commit state, and optional Questions path are explicit | Both reference fixtures have runnable tests |
| Own-repository adaptation | Choose a small function, request a test and file references, compare evidence, and challenge an unsupported answer | Fictional pricing example is labeled; no claim that it exists in Firehose |
| Permission decisions | Plain-language consequences and Codex/Claude request handling, submission result, and recovery | Source and Codex tests; no live approval claimed |
| Vocabulary | Provider, model, session, task, turn, and context explained together | Writer pass completed; independent comprehension check pending |
| Questions transitions | Depth counts, visible states, sample answer, continuation instruction, Chat marker, disappearance and failures | Prompt/count tests passed; short/long generated examples remain illustrative |
| Review choices and context | One finding distinguishes Explain, Refine, Rewrite; clear consequences, dispatch, verification, filters, and empty results | Source and context tests; full live review walkthrough pending |
| Handoff and recovery | Exact four-case check, failed-test follow-up, handoff example, saved path/branch and retained-work navigation | Example outputs checked; lifecycle exercise pending |
| Vague waiting and mobile controls | Concrete loading/ready states, branch refresh and Retry, delivery inspection before resending, and narrow-screen control locations | Source labels checked; website browser validation recorded below |
| Repeatable clarity review | Three passes, uncoached task worksheet, obstacle-to-issue format, and contributor/template updates | Writer/source passes performed; actual independent reader participation pending |

## A correction found while implementing

The change tutorial leaves edits uncommitted, but Smart Review's prompt starts from
`git diff <base>...HEAD`. Its default base is `origin/main`, with an `origin/master`
fallback when available. This differs from the broader comparison fallback in
Diff. A new standalone sample has no remote references, so automatically directing
that reader into Smart Review would create another unexplained failure.

The tutorial now finishes with working-change inspection, tests, and handoff.
Smart Review is an optional next task for a branch with committed changes and a
usable base. Its finding examples state their assumptions. No remote or publishing
step was added to the practice exercise.

## Validation and limits

The targeted source test run passed 25 tests across approval mapping, question
prompts, managed context actions, and interview counts, using the product checkout's
isolated temporary-database setup. The optional Claude interaction-card suite could
not start because its happy-dom/Vite setup externalized Node built-ins. A retry
using the runner config loader failed at `__dirname` in the existing configuration.
This was investigated without changing product files; the Claude walkthrough
therefore remains supported by source inspection only.

The site check passed with zero Astro diagnostics or Markdown issues: 21 HTML
pages built and 1,446 links/assets plus contributor links checked. All 22 desktop
and mobile browser checks passed, covering all guides in both themes, accessibility,
search, navigation, and JavaScript-disabled reading. Both example fixtures passed
all six tests. The completed reference covers four inputs; an intentionally broken
pre-trim fallback failed the spaces-only test as documented. The local file-placement
and terminal recipe printed the expected project path and `Hello, Ada!`. CI now
runs both fixtures through `npm run check:example`.

An actual
new-reader study, real SSH transfer, live provider approvals, generated questionnaire
captures, and a complete live review/close sequence are still unrun. Use the
[reader-check worksheet](reader-check.md) and [backlog](backlog.md) to finish those
checks without presenting illustrative examples as observations.

The deferred inline-component idea remains in the README. Hosting, publication,
and license selection remain deferred.
