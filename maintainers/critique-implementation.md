# Implement the documentation critique

Use this record to review the changes delivered from the [critique](documentation-critique.md) and schedule the remaining product walkthroughs. Implementation date: September 13, 2026. Work remains local.

## Delivered changes

| Reader problem | Change | Review evidence |
| --- | --- | --- |
| Unclear starting boundary | Homepage puts the existing-server prerequisite beside the primary action; connection guide identifies prerequisites and their owners | Homepage and connection source; no-JavaScript and navigation checks |
| Unclear machine context | Browser/server/workspace explanation on the homepage; server-side save and terminal steps in the quickstart | Connection and project-creation evidence |
| Too much preparation before first use | Explicit existing-project jump; New git project route with initial-commit recovery; retained sample download | Project UI and creation handler; sample commands exercised in a temporary repository |
| Unexplained permission choice | New permission reference and an explanation next to the launch step; actual desktop/mobile Codex control captures | Provider adapters and launch controls; separate live observation in evidence.json |
| Confused activity states | Actual sidebar signals in Chat and symptom-specific troubleshooting | Session signal types and rendering |
| A review choice looks like dispatched work | Smart Review now teaches evaluate, choose, Act, and verify; explains Issue and context clearing | Triage handler, Act handler and review prompt definitions |
| Unclear diff comparison | Exact Compare labels, common-ancestor illustration and committed/working example | Diff UI and Git comparison implementation; disposable Git example check |
| No task handoff or cleanup explanation | New finish-task guide distinguishes verification, handoff, closing and opt-in worktree deletion | Close controls and default request parameters |
| Generic troubleshooting | Separate loading/unavailable-model/launch errors, concrete delivery checks, and server status instructions | Startup, delivery failure and status source; read-only status request |
| Homepage reads like an ordinary article | Distinct heading, starting action, compact task cards and browser/server/workspace sequence; no homepage contents column | Desktop/mobile visual inspection and browser checks |
| Overlapping navigation categories | Start, Work with agents, Review results, Reference and help; existing page URLs retained | Navigation, active-page, search and link checks |
| Inconsistent density and text discovery | Tighter type/spacing, two-column reference tables or short sections, article Markdown link | Both themes, narrow/enlarged text and export checks |

Core instructions remain in Markdown. The homepage cards are styled ordinary Markdown links and lists. The provider figure uses a responsive picture with complete alternative text and a caption. No JavaScript is required to read the instructions or exports; no dependency was added.

## Product evidence and capture limits

The implementation uses the source revision recorded in [evidence.json](evidence.json), with additional paths from the [source audit](critique-source-audit.md). Source inspection supports the documented controls and request semantics; it does not establish every provider's runtime behavior.

The running Firehose server reported revision `fafd783ee5e0`, distinct from the audited source. In an isolated browser context, mutating API requests were blocked. The read-only walkthrough selected this documentation project, Current checkout, and Codex. Full Auto was checked and Start session was available. No session was launched and no provider action was approved. Captures contain only the actual provider panel; surrounding projects and conversations are excluded. Asset hashes, viewports, and source version are recorded in evidence.json.

The server's `/api/status` endpoint was also read successfully. Only its version fields were retained. This resolves the critique's open question about a diagnostic path without inventing a Settings version field.

## Remaining bounded tasks

These tasks need observations beyond a documentation build. They are not marked complete by the browser tests.

1. **Provider approval walkthrough.** A product maintainer should exercise enabled and disabled permissions on a disposable task for each documented provider, record the supported installation/authentication steps, and confirm actual approval prompts. Update the permission reference only with those results.
2. **Project and review outcomes.** Use a fictional sample to exercise project creation, initial-commit failure, one actual finding, triage, Act, context clearing, delivery failure, and Check status. Capture review dispatch and Diff comparisons at desktop/mobile widths. Do not use private findings or substitute an invented interface.
3. **Lifecycle and cleanup.** In disposable worktrees, record interruption, close while retaining files, explicit deletion, blocked deletion, browser closure, server sleep, and restored sessions. Update the close and Chat guides with outcomes; do not infer persistence from the turn-state type.
4. **New-reader navigation study.** Give readers the normal prerequisites, then ask them to connect, start a session, submit Questions, and dispatch a review choice. Record time, wrong turns, requests for help, and whether they can explain what happened. Use those observations before claiming the new grouping improves task completion.
5. **Clean installation.** Verify an operator's repository/package access and installation from a clean environment. Keep an unrestricted public installer out of the guides until that route exists and has been exercised.

Owners are responsibility roles, not assignments or requests sent to other people. These tasks also appear in the [maintenance backlog](backlog.md). Hosting, public visibility, and licensing remain deferred.

## Validation

See the [validation record](validation.md) for commands, results, and practical limits. The production build and local browser tests cover the documentation site, not Firehose's agent execution or release installer.
