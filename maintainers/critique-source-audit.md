# Source audit for the documentation critique

Use this record to distinguish confirmed implementation from recommendations that still need a product walkthrough. Read the [revised critique](documentation-critique.md) for priorities and design changes.

Checked on 2026-09-13 against `~/code/okthink/firehose-worktrees/main`, revision `c57391d84f8d5bd198354fecf9c93c7e85418ec3`. Source paths below are relative to that checkout, not this documentation repository. Symbols identify implementation without depending on local absolute links. Feature worktrees were not treated as released behavior. The source checkout was inspected without modification; its installer, agents, and tests were not run.

## Access and onboarding

- **Evidence:** `install.sh`, usage and prerequisites, explicitly requires `GITHUB_TOKEN` with repository and package read access. `docs/hosted-web.md` and `apps/expo/src/components/SettingsPanel/ServerSettingsSection.tsx` distinguish hosted connection prerequisites and operator configuration. The documentation already separates direct-server and hosted-app access in [connect.md](../src/content/docs/getting-started/connect.md).
- **Correction:** Missing public installation instructions do not imply an unrestricted installation path exists. Two equally supported onboarding routes would overstate what has been verified.
- **Action:** Surface the existing-setup boundary on the homepage; provide a prerequisite/owner checklist. Require a clean operator installation before drafting a supported installation guide. Do not equate open documentation with unrestricted access to product packages.

## Project creation and examples

- **Evidence:** `apps/expo/src/components/Sidebar/NewSessionMenu/ProjectStep.tsx`, `handleCreateProject`, renders New git project, Location, and Create. `apps/expo/src/store/newSessionSlice.ts`, `createLaunchProject`, posts to the project endpoint and displays the no-initial-commit hint. `server/lib/project-creation.ts`, `createGitProject`, creates a directory under a configured root, initializes main, writes README.md, and attempts a commit. `resolveProjectRoot` rejects unconfigured roots. Existing tests in `server/lib/project-creation.test.ts` cover root selection and existing-directory conflicts; these were inspected, not executed.
- **Correction:** The [first-session guide](../src/content/docs/getting-started/first-session.md) already permits an existing repository and links the downloadable greeting file. The missing work is making the shortcut prominent and documenting existing project creation.
- **Action:** Walk through successful creation, a conflicting name, and a missing Git identity. Explain that creation does not install the sample file. Retain a server-side save step and Git troubleshooting.

## Permissions and model availability

- **Evidence:** `apps/expo/src/store/newSessionSlice.ts`, `initialState` and `startSession`, initializes `yolo: true` and sends `permissionsMode` based on that checkbox. `providerSettings/ClaudeProviderSettings.tsx`, `CodexProviderSettings.tsx`, and `AntigravityProviderSettings.tsx` under NewSessionMenu define different controls. `server/lib/codex-adapter.ts`, `codexTurnPermissions` and thread launch parameters, maps enabled autonomy to `never` approval and full access, and disabled autonomy to `on-request` with workspace restrictions. `server/daemon/agent-daemon.ts` also sets those Codex launch defaults. `server/lib/claude-tmux.ts` adds `--dangerously-skip-permissions` when requested.
- **Evidence:** `apps/expo/src/components/Sidebar/NewSessionMenu/WizardFooter.tsx` disables Start for selected-provider model loading, an unavailable selected model, or other launch prerequisites. Its selected-provider selector prevents an unrelated slow provider from holding Start back.
- **Correction:** “Review autonomy settings” omits a consequential enabled initial value. A single permission explanation or a promise that disabling autonomy requires approval for every command would be misleading. Initial state is not proof of every later session's settings.
- **Action:** Add provider-specific control/effect guidance and separate Loading models, unavailable-model, and launch-error troubleshooting. Validate approval UI and provider authentication on the intended product version before recommending presets.

## Session signals and persistence

- **Evidence:** `lib/types/turn-state.ts` defines `idle`, `working`, and `stopping`. `apps/expo/src/components/SessionItem/SessionItemBody.tsx` renders Closing..., Stopping..., unavailable-transcript information, working activity, and Idle with explicit precedence. Delivery information is rendered separately.
- **Correction:** The earlier list mixed turn state, connectivity, message queueing, and task completion. It should not become a single illustrated product state machine. The existing chat guide already warns that a turn ending does not establish success.
- **Action:** Document visible indicators and separate queue/connection guidance. Replace “interrupted state” after checking the visible stop sequence. Test browser reload/closure, server sleep, and provider restoration separately; type definitions do not establish their outcomes.

## Smart Review decisions and dispatch

- **Evidence:** `apps/expo/src/components/ReviewPanel/reviewPanelTypes.ts`, `TRIAGE_ACTIONS`, lists Fix, Explain, Refine, Rewrite, Issue, and Won't fix. `ReviewItemDetail.tsx`, `setAction`, toggles the choice; `apps/expo/src/store/reviewApi.ts`, `triageItem`, PATCHes it. `server/routes/reviews.ts`, the item PATCH handler, updates and broadcasts the item without sending a prompt.
- **Evidence:** `ReviewProgressHeader.tsx` renders Act; `reviewProgressUtils.ts`, `buildReviewMenuItems`, distinguishes Act on items and Clear context and act. Both files are under ReviewPanel. The server's `/reviews/:id/act` handler selects eligible items, closes pending Won't fix items without agent dispatch, and arranges delivery for actionable items. Selecting Issue is distinct from the separate issue-creation endpoint; do not promise selection itself creates an issue.
- **Correction:** The guide omits an implemented choose-then-dispatch workflow. A selected Fix action is not evidence a fix has started or completed.
- **Action:** Document choice, target session, dispatch, progress, and verification in order. Validate normal Act, context clearing, and dispatch failure before describing their complete interaction sequences.

## Diff comparison semantics

- **Evidence:** `apps/expo/src/components/DiffWorkspace/changes/DiffFiltersSheet.tsx`, `FilterContent`, labels comparisons All changes, Working changes, and Branch changes. `server/lib/git-comparison.ts`, `resolveBase`, uses an explicit configured base or tries origin's default branch, then origin/main, origin/master, main, and master. It computes a merge base when HEAD exists. An unavailable explicitly configured base raises `BASE_UNAVAILABLE`; when no fallback base exists, it compares from the empty tree. The comparison arguments use this merge base for cumulative comparisons.
- **Correction:** Internal “cumulative” terminology alone does not help readers recognize controls. Branch comparison is not necessarily against the current tip of main. Server base resolution does not prove there is a user-facing base picker.
- **Action:** Use current Compare labels first, explain the common ancestor with a small example, and demonstrate committed plus working changes. Verify the path into Compare at desktop/mobile widths before adding navigation steps or captures.

## Closing and diagnostics

- **Evidence:** `apps/expo/src/store/closeSession/thunks.ts`, `closeSessionFromUi`, defaults `force` and `deleteWorktree` to false. `apps/expo/src/components/CloseSessionModal/CloseSessionDialog.tsx` initializes deletion unchecked and uses server information to determine whether it is available. `apps/expo/src/store/closeSession/thunks.test.ts` covers those defaults and explicit deletion forwarding; tests were inspected only.
- **Action:** Explain interruption, closing, and optional worktree deletion separately. Verify file retention and deletion in disposable workspaces, including blocked deletion. Do not extrapolate from this dialog to every restoration or cleanup case.
- **Evidence limit:** `apps/expo/src/components/SettingsPanel/ServerSettingsSection.tsx` establishes connection controls and warnings, not a general version field. `apps/expo/src/components/NetworkMonitor/networkCopy.ts` formats a server-version marker, but that alone does not establish a complete diagnostic procedure.
- **Action:** Walk through a supported diagnostic path before telling users where to collect versions. Keep that task unresolved rather than inventing a Settings label.

## Design recommendations and acceptance

The earlier visual review of Stripe, Linear, Tailwind, and Vercel remains the design basis; source inspection does not validate aesthetic preferences. The [current stylesheet](../src/styles/custom.css) already sets approximately 17-pixel body text, 1.8 line height, and 48rem content width. Proposed density changes therefore need a comparison against the actual baseline.

Prioritize captures of permissions, review dispatch, and comparison controls because this audit demonstrates the decisions they explain. Validate homepage cards, Markdown discovery, and spacing with responsive and accessibility checks. Validate navigation through observed newcomer tasks. Retain stable URLs unless evidence supports changing them. This audit recommends documentation work; it does not implement the site redesign or authorize hosting, publication, or a license choice.
