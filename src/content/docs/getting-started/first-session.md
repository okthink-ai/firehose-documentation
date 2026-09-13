---
title: "Start your first session"
description: "Use a tiny example project to start an agent session and check its first answer."
verified: "2026-09-13"
evidence: ["launch", "settings", "chat", "diff", "example"]
---

Start an agent in a small project and ask it to explain a function. You’ll finish with a concrete answer you can check against the code.

## Before you begin

Have Firehose connected to your server, an available agent provider, and a Git repository on that server. For the example below, you also need Node.js and Git on the server machine.

If you already have a repository, you can use it and adapt the request to a real file. Otherwise, set up this tiny example.

## 1. Prepare the example project

On the machine running Firehose, create a new, empty folder named `hello-firehose` inside your usual projects directory. Save this as `greeting.mjs`:

```js
export function greet(name) {
  return `Hello, ${name.trim()}!`;
}
```

In a terminal inside that folder, run:

```sh
git init
git add greeting.mjs
git commit -m "Add greeting example"
node --input-type=module -e "import { greet } from './greeting.mjs'; console.log(greet(' Ada '));"
```

The last command should print `Hello, Ada!`. If Git asks for your identity, configure your usual Git name and email before committing. A [copy of the example](/examples/hello-firehose/greeting.mjs) is available to save locally.

In Firehose, open **Settings → Project directories**. Make sure the parent directory containing `hello-firehose` is in the comma-separated list, then select **Save**. Preserve other directories you already use.

## 2. Choose where the agent works

1. Select **New session** in the sidebar header.
2. At **Pick a project**, choose `hello-firehose`.
3. Select **Next: Choose a workspace**.
4. Choose **Current checkout** to use the directory you just prepared.
5. At **Choose an agent**, select a provider and an available model. Review the session’s autonomy settings.
6. Select **Start session**.

The session should open. If you see **Loading models**, wait for the selected provider’s model list. If the project is missing or starting fails, use the [troubleshooting guide](/troubleshooting/common-problems/).

## 3. Give it a clear request

Send this in the session’s chat input:

```text
Read greeting.mjs and explain what greet does.
Show the result for " Ada " and for an empty string.
Do not change files or run installation commands.
Point to the code that explains each result.
```

Follow the response in **Chat**. If the agent asks for information, answer in the same session.

## 4. Check the answer

The function trims spaces from the name and adds a greeting. For `" Ada "`, the result is `"Hello, Ada!"`. For an empty string, it is `"Hello, !"`.

The agent may phrase its answer differently. Check these results and its explanation against `greeting.mjs`. Open **Diff → Changes** to check that the task left no file changes.

You’ve now started a session, sent a request, and checked the result. Next, [ask for a small improvement](/guides/make-a-change/) using the same project.
