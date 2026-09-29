# Extend the guides to ongoing project work

This batch implements the follow-up critique of the documentation at `b7ba86a`.
It keeps the earlier critique and implementation records as history. Source claims
were inspected at Firehose revision `c57391d84f8d5bd198354fecf9c93c7e85418ec3`;
paths and scope are recorded in [evidence.json](evidence.json).

## Changes mapped to the critique

| Gap | Delivered improvement | Acceptance check |
| --- | --- | --- |
| Reviewed changes did not reach a concrete finish | Browser task continues through an explicitly scoped local commit, independent inspection, and a deliberate next-step decision | Reference form behavior is browser-tested; actual agent commit and hosted review remain unexercised |
| Real-project setup was implicit | Preparation guide covers existing edits, project instructions, dependencies, configuration, services, and baseline failures | Every setup stage has evidence to record; no generic auto-provisioning claim |
| Multiple sessions lacked coordination guidance | Parallel task guide names responsibilities, workspaces, shared resources, attention checks, and integration order | Fictional two-task example; shared-file consequences supported by source |
| Everyday tools lacked procedures | Terminal and attachment guides cover inputs, results, errors, and storage or termination effects | Exact controls source-inspected; full live walkthroughs pending |
| Recovery focused only on failed operations | Targeted correction guide preserves pre-existing edits and distinguishes Git changes from external effects | Includes a bounded correction prompt and success check |
| Returning to work was fragmented | Lifecycle table separates browser, server, agent, terminal, and retained checkout | Managed restoration and detached-terminal cleanup source-inspected; restart outcomes remain qualified |
| Provider choices and usage were unexplained | Provider guide distinguishes setup, model, effort, permissions, footer limits, and context usage | No invented prices, universal spending cap, or model ranking |
| Data boundaries were incomplete | Data guide explains workspace files, attachment staging, provider input, saved history, and cleanup scope | Explicitly excludes a full retention/security audit or claims about external provider records |
| Summary pages had drifted | Overview prerequisites and homepage/task links now point to the expanded sequence | Check navigation, anchors, and exports in the site validation |

The second example is a standalone browser form with original and completed
fixtures. It makes a visible behavior and keyboard submission testable without
adding dependencies or a second development server. It is still intentionally
small; the preparation guide explains how to apply the sequence to an application
with its own services and tests.

## Validation

`npm run check` passed with zero Astro diagnostics or Markdown lint issues.
The build produced 29 guide pages plus the error page; link validation inspected
32 HTML files including the two standalone examples, with 2,323 links/assets and
contributor links checked. `npm run check:example` passed all six function tests.
`npm run test:browser` passed 26 desktop/mobile tests, including navigation, search,
all-guide accessibility in both themes, JavaScript-disabled reading, and both form
fixtures. The form checks cover four inputs, Enter submission, and literal text
rendering. They exercise the checked-in examples, not a live agent's output.

Source review also corrected the terminal entry instructions: Claude's prompt-bar
terminal action opens its agent tab, while other providers open a workspace shell.
The guide distinguishes the drawer keyboard route and phone fallback.
The source checkout was read only; no active product service, production database,
provider account, or external repository was modified.

## Remaining work with concrete completion criteria

- Product reviewer: exercise terminal creation, directory selection, command output,
  drawer hiding, tab termination, and reconnect on a disposable installation.
- Product reviewer: attach a fictional image and file, observe delivery, inspect
  staging and `.gitignore`, and verify removal versus queued-copy retention.
- Product reviewer: record actual browser-close, server-restart, and provider-exit
  results separately; a restoration code path alone does not close this task.
- Account owner: verify provider authentication instructions, the source of usage
  values, financial controls, and applicable data retention terms.
- Documentation maintainer: extend the [reader exercise](reader-check.md) through
  project preparation, a visible browser check, recovery, and commit inspection.
  Observe independent readers; do not mark an automated browser test as a reader study.
- Product reviewer: finish Team Chat, X-Ray, Timeline, voice, and issue workflows
  before adding their full procedures. Public installation remains unverified.

Hosting, publishing, license selection, and inline Firehose components remain
deferred. All repository changes in this batch are local.
