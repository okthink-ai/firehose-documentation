# Maintain verified product coverage

Use this inventory to decide what can become a user guide. The initial evidence
comes from the Firehose source revision recorded in [evidence.json](evidence.json),
inspected on September 13, 2026. This is source verification, not a live product
walkthrough or a declaration of general availability in every release.

| Capability | Verified scope | Coverage |
| --- | --- | --- |
| New session | Pick a project, choose workspace, choose agent, load models, start | Quickstart and workspace guide |
| Project creation | Configured roots, new repository and README, initial commit and recovery | Quickstart |
| Closing sessions | Retain versus delete worktree, blocked deletion and cleanup notices | Finish-task guide; destructive outcome walkthrough pending |
| Server diagnostics | GET /api/status version fields | Troubleshooting; read-only endpoint observed |
| Workspaces | Current checkout, new worktree, existing branch search | Workspace guide |
| Chat | Send, queue after current turn, interrupt, delivery notices | Chat guide |
| Diff | Changes, Commits, comparison scopes, Code and bounded previews | Diff and change-review guides |
| Clarifying questions | Launch, depth, queueing, answers, submit target, deletion | Questions guide |
| Smart Review | Start, focus, findings, notes, triage, Act, context choice, status checks | Smart Review guide |
| Project directories | Comma-separated server paths, tilde support, Save | Settings and quickstart |
| Hosted connection | Full Tailscale hostname, HTTPS, tab scope, switching and forgetting | Connection and mobile guides |
| Mobile web | Scrollable workspace tabs and header interrupt | Mobile guide; product device walkthrough pending |
| Provider options | Launch defaults, Claude bypass flag, Codex sandbox/approval mapping, Antigravity controls | Permission reference; installation/authentication and approval walkthroughs pending |
| Agent Team Chat, X-Ray, Timeline | Tab entry points found in current UI | Full workflows pending verification |
| Terminal, voice, attachments, issue workflows | Internal documents or components exist | Full workflows pending verification |
| Installation and upgrades | Source README still includes private package prerequisites | Public installation route pending verification |

Do not carry historical limitations from `docs/worktrees.md` in the source repo
into these guides: the current wizard includes existing branch selection. Likewise,
provider names in old integration documents do not establish that those providers
are launchable in the current UI.

For a new capability, verify its prerequisites, entry point, input, result, limits,
and recovery path. Add it to the user tool overview only when those facts are clear.
Record a shipping/version caveat if source and released builds differ.
