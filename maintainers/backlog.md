# Track the remaining documentation work

Use this list to complete product validation and prepare a future public release.
The local site, core guides, text exports, contributor tooling, and validation
workflow are implemented. The site is hosted at <https://firehose-docs.web.app>; no repository visibility changes have been made.

Owners below are responsibility roles, not assignments to named people. The project
maintainer can assign people when scheduling the work.

| Priority | Work | Owner role | Done when |
| --- | --- | --- | --- |
| Next | Walk through core guides in the current Firehose release | Product maintainer | Exact controls, outcomes, and recovery steps have been exercised; evidence records the release |
| Next | Test the quickstart with a new reader | Documentation maintainer | Reader finishes without coaching; hesitations lead to concrete edits |
| Next | Verify public installation and upgrade route | Product maintainer | Access, supported platforms, provider setup, and upgrade steps work from a clean environment |
| Next | Finish tool inventory | Product maintainer | Team Chat, X-Ray, Timeline, voice, and issue workflows have verified task paths; terminal and attachment guides have live validation |
| Later | Add focused guides for remaining tools | Documentation maintainer | Each has prerequisites, an example, expected output, limits, and recovery |
| Later | Test the Firehose mobile workflow on a real device | Product maintainer | Connection, session switching, input, questions, and diff review work on the target release |
| Next | Run the 1.2.2 install, activation and tailnet pages on a clean Mac and Linux machine | Product maintainer | A new reader installs (including the tmux offer and the first-start wait), activates with an emailed code, subscribes through Checkout, signs in to the account page with an emailed code, connects from a phone and starts a session using only the guides; exact messages match |
| Next | Re-verify the remaining guides against Firehose 1.2.2 | Documentation maintainer | Pages that still say 1.0.1 are checked against the current release. Known changes since 1.0.1: GitHub repositories you can access appear in Pick a project and are cloned on selection, the project picker asks for a code directory when it has none, the message box has a fullscreen compose mode, Settings has API keys, and the Shaders panel is gone. In 1.2.2 (firehose PR #734), a terminal that fails to open shows the reason above it, typing into it names the recovery control (Retry or Reopen in a panel, a new tab in the drawer), and the server allows up to 24 open terminals |
| Next | Decide whether one machine can be shared with other people | Product owner | Owner-only tailnet access is confirmed as intended, or a supported way for a teammate to connect is documented; operator wording on deeper guides (files and terminal, first session, providers, terminal) is updated to match |
| Next | Decide how the guides describe pricing and trials | Product owner | Pages either name the price and trial policy or keep pointing to the plans shown at checkout |
| Next | Decide whether the hosted app or the tailnet address is the primary remote route | Product owner | Connect leads with the chosen route |
| Next | Decide whether the hosted app should accept a port | Product owner | Installs using `--port` can use agents.okthink.ai, or the current workaround stays documented |
| Next | Decide where accounts that skip checkout learn about it | Product owner | Activation explains it without naming who qualifies |
| Next | Confirm whether Windows or WSL is in scope | Product owner | Install states the supported platforms beyond the installer's macOS and Linux check |
| Deferred | Decide repository licensing | Project owner | User chooses terms for docs, code examples, and assets; applicable license files are added |
| Deferred | Confirm public repository visibility and contribution URLs | Project owner | Explicit publication request is received and destinations are verified |
| Later | Add redirects for moved URLs and decide on a custom domain | Project owner | Firebase redirects cover moved pages; any custom domain is connected and `site` is updated |

## Follow up on the critique

The [project workflow implementation](workflow-implementation.md) covers the latest critique and defines the remaining tool, persistence, account, and reader checks.

The [first implementation record](critique-implementation.md) covers the earlier critique. The [clarity implementation](clarity-implementation.md) maps the current critique, and the [reader-check worksheet](reader-check.md) defines the remaining observation tasks. The permission control capture and server diagnostic endpoint were observed on the running installation; full task outcomes still need the release walkthrough.

| Priority | Work | Owner role | Done when |
| --- | --- | --- | --- |
| Next | Observe short and long questionnaires | Product maintainer | Quick and Thorough examples record actual questions, submission message, continuation, and failure recovery on a disposable task |
| Next | Verify remote file placement | Product maintainer | An operator-provided SSH account copies the sample into the correct workspace and the local/remote/phone handoff routes complete |
| Next | Exercise provider approvals | Product maintainer | Each documented provider is installed/authenticated and enabled/disabled behavior is observed on a disposable task |
| Next | Capture review dispatch and Diff comparisons | Documentation maintainer | A fictional sample has committed and working edits plus an actual review finding; desktop/mobile captures show the verified decisions without private data |
| Next | Exercise close and lifecycle outcomes | Product maintainer | Retain/delete worktree, interrupted turn, reload, browser close, server sleep, and session restoration have recorded outcomes |
| Next | Test task-based navigation with newcomers | Documentation maintainer | Readers attempt connection, launch, Questions submission and review dispatch without coaching; observations drive revisions |

## Maintain the content

Review relevant pages with each product change. Use repeated support questions and
reader reports to choose the next examples. Recheck the inventory and runnable
examples monthly; assign page ownership when contributors join.

For a moved public page, add and verify a redirect before removing the old URL.
For each release, record the source revision, product walkthrough results, website
checks, and any remaining limitations. Do not mark work complete based only on an
updated verification date.
