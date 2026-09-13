# Firehose documentation

Build and improve practical guides for people who use Firehose. The site covers
starting agents, following conversations, answering questions, choosing workspaces,
and reviewing changes. Markdown is the source of truth for both the website and
its plain-text exports.

This is a local implementation. Hosting, public repository visibility, and licensing
are pending; no deployment workflow or hosting account is configured.

## Preview locally

Use Node.js 24 LTS (`.nvmrc`) and npm. The supported minimum is Node.js 22.12.

```sh
npm ci --include=dev
npm run dev
```

Open `http://localhost:48731`, or use the network URL printed by Astro from another
device. `astro.config.mjs` fixes the port at **48731** and enables network host mode
(`host: true`) for both development and preview. No extra flags are needed.
The dev server fails if the port is occupied rather than silently selecting another.
The development server updates as you edit pages. Search uses a generated index,
so test search against the production build:

```sh
npm run build
npm run preview
```

Development and preview share port 48731; stop one before starting the other.
If Astro started it in the background, use `npx astro dev stop` or
`npx astro preview stop`, respectively. Otherwise use Ctrl+C in its terminal.

The build clears Astro’s content cache so Markdown plugin changes are applied.
It then produces `dist/`. It contains complete HTML, assets, search data,
`markdown/` copies of the guides, `llms.txt`, `llms-full.txt`, and the sample project.
These exports and sample downloads also work in the development server.
Reading the guides and following ordinary links does not require JavaScript.
Search uses JavaScript. The mobile menu uses the browser’s native popover control;
the home page and documentation index also provide ordinary navigation links.

## Check a change

```sh
npm run check
node --test examples/hello-firehose/greeting.test.mjs
npx playwright install chromium
npm run test:browser
```

`check` validates Astro types and page metadata, lints Markdown, builds the site,
and checks generated page links, anchors, assets, and contributor links.
Browser checks cover desktop and mobile reading, navigation, search, accessibility,
theme contrast, and a page load with JavaScript disabled. Playwright starts its own
local preview on port 4322; build first when running browser checks by themselves.

Run `npm run check:external` after a build when changing external references.
External checks are separate because other sites can be temporarily unavailable.
The checked-in CI files run validation only; they do not publish anything.

## Find the source

| Location | Purpose |
| --- | --- |
| [User guides](src/content/docs/index.md) | Markdown pages rendered by Starlight |
| [Content map](maintainers/content-map.md) | Every guide and its purpose |
| [Contribution guide](CONTRIBUTING.md) | Writing, review, and local validation |
| [Evidence record](maintainers/evidence.json) | Source revision and verification scope |
| [Product inventory](maintainers/product-inventory.md) | Coverage and unresolved product questions |
| [Maintenance backlog](maintainers/backlog.md) | Remaining review and release work |
| [Validation record](maintainers/validation.md) | Completed checks and practical limits |
| [Critique implementation](maintainers/critique-implementation.md) | Completed improvements, validation, and remaining product walkthroughs |
| [Documentation critique](maintainers/documentation-critique.md) | User context gaps, design references, and actionable improvements |
| [Page template](templates/guide.md) | Starting point for a task guide |
| [Example project](examples/hello-firehose/README.md) | Runnable quickstart fixture |
| [Original plan](PLAN.md) | Documentation goals and delivery approach |
| [Agent instructions](AGENTS.md) | Canonical guidance; `CLAUDE.md` is a symlink |

## Stack and scope

[Astro](https://docs.astro.build/) and [Starlight](https://starlight.astro.build/)
provide static rendering, navigation, search, syntax highlighting, and the
responsive documentation layout. Styling uses system fonts and local assets.
No analytics, remote font service, application backend, or paid service is needed.

A public site URL, sitemap, redirects for released URLs, public correction links,
and deployment setup can be added when publishing is requested. The package is
`private` to prevent accidental npm publication; that flag does not set GitHub
repository visibility. No repository license has been selected yet.

The scoped `smol-toml` override uses 1.8.0 to avoid the malformed-input denial of
service advisory affecting the version pinned by the Markdown linter. Revisit the
override when updating the linter.

## Future idea: inline Firehose components

Explore exporting UI components from the Firehose project and embedding them
inline in documentation pages. Readers could see and try the actual product
controls beside the instructions, helping examples stay aligned with Firehose.
This is an idea for later, not an implementation task. No component integration
is planned for the current work.
