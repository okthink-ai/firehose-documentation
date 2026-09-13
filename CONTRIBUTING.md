# Improve a Firehose guide

Help a reader finish a task by correcting an instruction, adding a useful example,
or explaining a missing step. Read [AGENTS.md](AGENTS.md) before making changes.

## Choose a small contribution

Find a page in the [content map](maintainers/content-map.md), or pick a verified
coverage gap from the [backlog](maintainers/backlog.md). Describe the user outcome
before writing. Keep developer architecture out of user guides unless it directly
helps with a task or a troubleshooting step.

## Verify product behavior

Check the current Firehose UI or the relevant source code. Internal documentation
can lag behind the product, so compare labels with the implementation. Record the
source revision, paths, date, and limits in [the evidence record](maintainers/evidence.json).
Do not copy private repository material into public pages.

Every page has `title`, `description`, `verified`, and `evidence` frontmatter.
Evidence IDs refer to entries in the record. The initial batch shares one source
revision and date; update the record and affected pages together when re-verifying.
If future batches use multiple revisions, extend the record to support per-entry
dates before mixing them. Never update a date just to make a page appear current.

Source inspection supports a draft; it does not establish that a release installer
works or that a new reader can follow the UI without help. Record those checks
separately. Keep uncertain instructions in the backlog until verified.

## Write the page

Copy [the guide template](templates/guide.md) into `src/content/docs/`. Use a short,
descriptive filename; it becomes the page URL. Add the page to `astro.config.mjs`
and the content map. Keep headings descriptive and URLs stable.

Write in plain English and address the reader as “you.” Start with the outcome,
list prerequisites, then give numbered steps using exact control labels. Explain
new terms briefly. Include sample input, expected results, and a way to recover.

Use root-relative links such as `/tools/diff/` for website pages and ordinary
relative links for contributor files. Keep core instructions in Markdown. Use
screenshots only when they clarify a control or state; include useful alternative
text and review screenshots for private information.

Use fictional data and mark placeholders. Never present an illustrative agent
response as guaranteed wording. Prefer examples that readers can run in a small
sample repository without private dependencies.

## Review in three passes

Use the [reader-check worksheet](maintainers/reader-check.md) to record each pass.
First, a writer checks prerequisites, undefined terms, example starting states,
and hidden transitions. Second, a product reviewer checks labels and consequences
against a recorded revision; keep source inspection separate from live observations.
Third, a new reader attempts the four core tasks without coaching. Record help
requests and wrong turns, then turn each observed obstacle into an actionable
issue with a page, proposed change, and acceptance check. Keep unrun passes pending.

## Review checklist

- The first paragraph says what the reader will accomplish.
- Prerequisites and exact controls match the verified product.
- Each step has a clear action; the procedure has an observable outcome.
- Examples are complete, scoped, and checked in the documented environment.
- Links work, terms are explained, and paragraphs are easy to scan.
- Screenshots add useful information and have text alternatives.
- Product facts have current evidence; unknowns are tracked rather than invented.
- Changes remain within the requested task and do not introduce publishing steps.

## Run the checks

Follow the [README commands](README.md) to install, preview, and run `npm run check`.
Run the sample checks after editing examples. Run browser checks after changes to
navigation, styling, templates, or search. Check external references separately
with `npm run check:external`.

Review at narrow and wide widths, in both themes, with keyboard navigation. Confirm
that long code blocks scroll without widening the page and essential content is
readable without JavaScript. CI performs validation only.

## Prepare a review

Describe the reader’s problem, what your change lets them do, the source checked,
and validation performed. Use the local issue and pull request templates as a guide.
Public contribution links and a license will be added after those release decisions
are made. Do not imply that this repository already grants an open-source license.
