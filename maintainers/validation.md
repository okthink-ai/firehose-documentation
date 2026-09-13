# Review the local implementation

Use this record to understand the checks completed on September 13, 2026 and the
remaining product validation. See the [critique implementation](critique-implementation.md)
for the changes and their acceptance criteria.

## Documentation checks

- `npm run check`: Astro diagnostics, Markdown lint, clean content rebuild,
  static output, evidence references, and generated links passed.
- 20 HTML pages were generated: 19 documentation pages and a custom 404 page.
- 1,239 generated links and assets, plus contributor file links, passed validation.
- `npm run test:browser`: 22 Playwright checks passed across desktop Chromium
  and Chromium with a mobile viewport and touch emulation. This is not a real
  iPhone or Safari test.
- Browser checks cover every guide’s rendering and width, navigation, active-page
  indication, search, keyboard skip links, focus restoration, 404 recovery,
  enlarged text, and reading without JavaScript. The new checks exercise the
  homepage review-to-handoff path, article Markdown export, and the correct
  desktop/mobile provider image loading.
- Axe checks passed across all 19 guides in light and dark themes on both browser
  configurations. These do not establish complete accessibility conformance or
  replace assistive-technology testing.
- Desktop and mobile homepage captures, the dark homepage, and a mobile review
  article were inspected. The homepage has task cards and no article contents
  column; normal articles retain their contents navigation. Text and code remain
  readable at narrow widths.
- `npm run check:example`: both baseline greeting checks passed.
- The revised quickstart’s Git and Node commands produced `Hello, Ada!` in a
  disposable repository with an initial README commit. A separate task branch,
  committed fix, and working test edit confirmed the documented distinction
  between branch and working comparisons using Git.
- `CLAUDE.md` still resolves to `AGENTS.md`; whitespace validation passed.

Checks ran with Node.js 25.8.2 and npm 11.11.1 on macOS. The repository recommends
Node.js 24 LTS and CI selects it; CI has not been run remotely. External design
references were retained from the earlier critique and not rechecked in this pass.
No dependencies changed.

## Product evidence

Product instructions were checked against source revision
`c57391d84f8d5bd198354fecf9c93c7e85418ec3`. Additional implementation paths cover
project creation, provider permission mapping, review dispatch, Diff comparisons,
close/cleanup behavior, activity indicators, and diagnostics. All recorded source
and local evidence paths were checked for existence.

A separate read-only observation of the running server, version `fafd783ee5e0`,
confirmed `/api/status` fields and the launch controls. In an isolated browser,
New session → documentation project → Current checkout → Codex reached an enabled
Start session control with Full Auto checked. The actual provider panel was
captured at desktop and mobile widths and inspected before inclusion. Capture
hashes and viewports are in [evidence.json](evidence.json). Mutating API requests
were blocked; no session was launched and no live project was created or deleted.

The live version differs from the source baseline. This observation does not
verify provider approval behavior, agent task outcomes, or the full release.
Installation, review execution, lifecycle/cleanup outcomes, real-device checks,
and independent new-reader usability sessions remain in the [backlog](backlog.md).

## Local operation

Development and preview remain configured for network host mode on port 48731,
with strict development-port behavior. Browser tests use their separate loopback
preview on 4322. The running development server remains available locally.

The build has no public site URL, so sitemap generation is skipped. The forced
content-cache reset also logs a warning; it ensures Markdown plugin changes appear
in the build. Hosting, publishing, public visibility, and licensing remain deferred.
