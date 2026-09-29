# Plan for the Firehose documentation

## 1. Define success around user outcomes

Help someone understand what Firehose does, complete a useful first task, and recover when something goes wrong. The documentation should feel like a patient colleague: welcoming, specific, and respectful of the reader’s time. Publish it as an open-source repository and a fast static website. Both should contain the same authoritative content, so people and agents can learn from it. Measure success through completed tasks, useful feedback, and fewer repeated questions. A large page count is not a success criterion; trustworthy explanations and working examples are.

## 2. Establish the facts before writing

Begin with a product walkthrough and an inventory of available tools, controls, workflows, and prerequisites. Verify each proposed topic against the current application or its source repository. Record evidence and verification dates in contributor metadata, keeping internal details out of user instructions. Identify which capabilities are generally available, optional, or experimental. Treat the existing topic list as provisional until checked. Where behavior is uncertain, investigate before publishing. Never fill gaps with plausible instructions. Maintain a small backlog of unanswered questions, with an owner and a clear condition for resolving each.

## 3. Organize around questions and tasks

Create navigation with Getting started, What you can do, Tools, Guides, Reference, and Troubleshooting. Getting started provides the shortest verified route to a useful result. What you can do explains supported outcomes with examples. Tools describes each available tool’s purpose, requirements, inputs, outputs, and limits. Guides connect capabilities into practical workflows. Reference collects settings, terminology, and exact options. Troubleshooting starts from symptoms readers recognize. Keep navigation shallow, use descriptive page titles, and connect related pages at the point of need. Add sections only when verified content justifies them.

## 4. Build one excellent first experience

Write a quickstart around a small, reversible task in a sample repository, such as asking an agent to explain a function. Confirm that the chosen workflow is supported before presenting it. Include prerequisites, setup, a copyable request, recognizable progress, and an observable completion condition. Explain when the reader needs to respond and how to review the result. Provide recovery links beside likely failure points. Ask someone unfamiliar with Firehose to follow the guide without coaching. Revise every place they hesitate, misunderstand a label, or cannot tell whether a step worked.

## 5. Make every page easy to read

Start with what the reader will accomplish, then list prerequisites and direct steps. Use “you,” active verbs, familiar words, and short paragraphs. Explain unfamiliar terms when they first appear. Match interface labels exactly. Put optional detail after the main procedure, and keep warnings beside the action they affect. Be friendly without jokes that obscure meaning or enthusiasm that exaggerates capabilities. End procedures with expected results and a relevant next action. Use screenshots only when they clarify navigation or state; provide useful alternative text and accompanying written instructions.

## 6. Teach through realistic examples

Develop a small set of consistent examples that readers can follow across pages. Use fictional repositories and harmless sample data. Each example should state the situation, show the exact request or action, describe the expected result, and explain how to check it. Distinguish illustrative agent responses from guaranteed product behavior. Include common mistakes and recovery steps where they add value. Cover everyday tasks before unusual combinations. Clearly mark placeholders, and never include credentials or private customer information. Verify commands and links in the documented environment before publishing an example.

## 7. Build a maintainable static site

Choose a small, established static documentation generator after checking its current maintenance, accessibility, Markdown support, and hosting requirements. Prefer built-in navigation, search, code formatting, and responsive layouts over custom components. Store content in Markdown and generate complete HTML that remains readable without client-side JavaScript. Establish stable URLs, page titles, descriptions, a sitemap, and helpful error pages. Keep assets lightweight. Document exact installation, preview, and production build commands. Configure automated deployment for the chosen host after the build works locally. Keep preview deployments separate from the production publishing path.

## 8. Make openness useful to contributors and agents

Keep the public repository navigable with a README, contribution guide, content map, and clear links to the published site. Select an explicit open-source license before public release, checking coverage for documentation, code examples, and included assets. Maintain AGENTS.md as the canonical contributor guidance, with CLAUDE.md linked to it. Preserve meaningful filenames, semantic headings, ordinary links, and readable source files. Give agents the same complete instructions readers receive. Ensure essential guidance is available without login or interaction. Provide issue templates for corrections and missing topics, including space for reproduction details.

## 9. Check quality before every release

Automate production builds, internal link checks, and basic Markdown validation in continuous integration. Check external links on a schedule to avoid blocking contributions on temporary outages. Review pages for factual accuracy, readability, accessibility, and successful task completion. Test navigation and search on narrow and wide screens, with keyboard navigation and readable zoom levels. Check heading order, contrast, and screenshot alternatives. Run documented examples when their underlying behavior changes. Require review of product claims and remove stale screenshots promptly. Keep checks proportionate so contributors can make small corrections without unnecessary process.

## 10. Deliver incrementally and maintain ownership

Deliver an initial milestone containing the verified product inventory, navigation outline, quickstart, and reusable page pattern. Follow with the static site, contribution instructions, core tool pages, and several complete workflows. Before launch, confirm repository visibility, licensing, deployment, links, mobile usability, and production output. Publish only reviewed pages; track unfinished work in issues. Assign ownership for important topics and review documentation alongside product changes. Invite feedback through visible correction links. Use recurring support questions and usability sessions to prioritize improvements. Schedule periodic checks for outdated behavior, broken examples, and confusing terminology.

Keep an editorial checklist beside contribution instructions so reviewers apply the same standards. Revisit the navigation as coverage grows, and redirect moved pages so existing bookmarks, shared links, and agent references continue to reach useful guidance.
