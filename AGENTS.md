# Working on the Firehose documentation

Use this repository to create and maintain open-source documentation that helps people use Firehose successfully. Publish the documentation as a static website, and keep its source readable by people and agents. See [PLAN.md](PLAN.md) for the delivery plan.

## Audience and scope

Write for users who want to start agents, follow their work, answer questions, review changes, and complete tasks. Do not assume readers know how Firehose is implemented. When technical detail is necessary, connect it directly to a user action or troubleshooting step.

Cover verified product capabilities, available tools, practical workflows, and troubleshooting. Clearly distinguish existing behavior from planned features.

## Writing style

- Start each page with what the reader will accomplish.
- Use a friendly, plainspoken tone. Address the reader as “you,” explain unfamiliar terms, and keep paragraphs short.
- Use the product's current labels and controls.
- Keep steps direct and testable.
- Provide realistic examples with prerequisites, sample input, expected results, and a recovery step when useful. Use fictional data and clearly marked placeholders for secrets.
- Use screenshots only when they clarify navigation or state.
- Do not invent behavior. Verify uncertain claims against Firehose or its source repository.
- Keep this site focused on product use; link to developer documentation when internal architecture is relevant.

## Site development

Prefer a small, conventional documentation stack with few dependencies. Keep navigation and content structure easy to change as the documentation grows. Before publishing, verify links, responsive web behavior, and the production build.

Keep core instructions in version-controlled Markdown and generated HTML so they are readable without client-side JavaScript. Use descriptive headings, stable URLs, accessible navigation, and meaningful alternative text for useful images.

Document local preview, build, contribution, and publishing procedures when they exist. Never claim a feature, deployment, license, or public repository setting is in place without verifying it.

`AGENTS.md` is the canonical contributor instruction file. Keep `CLAUDE.md` as a relative symlink to `AGENTS.md` rather than maintaining duplicate instructions.

## Local workflow

Whenever you make changes, run the applicable checks and create a local Git commit before finishing the task. Use a clear commit message describing the completed change. Commit all files intentionally changed for the requested work, and preserve unrelated changes. Do not push commits unless the user explicitly requests it.

User pages live in `src/content/docs/`; contributor evidence and coverage live in `maintainers/`. Follow [CONTRIBUTING.md](CONTRIBUTING.md) for page metadata and review guidance. Use `npm ci --include=dev`, `npm run dev`, and `npm run check`. Run `npm run test:browser` after layout, navigation, or search changes, and `npm run check:example` after example changes.

The site is hosted on Firebase at `https://firehose-docs.web.app` (see the README's publishing section). Deploy only with `firebase deploy --only hosting:docs`, and only when the user asks; never deploy to the project's default site, which serves the Firehose app. Public repository visibility and license selection are deferred until the user requests them.

Keep development and preview on port `48731` with network host mode (`server.host: true`) in `astro.config.mjs`. Use the npm scripts without localhost overrides. The dev server must fail on a port conflict rather than silently choose another port. Browser tests use their own loopback preview on port `4322`.
