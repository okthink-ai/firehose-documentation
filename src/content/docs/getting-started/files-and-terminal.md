---
title: "Put files in the right workspace"
description: "Save the practice file on your Firehose server and verify your terminal is in the intended project."
verified: "2026-09-13"
evidence: ["project-creation", "launch", "file-access", "example", "terminal", "attachments"]
---

Put `greeting.mjs` in the project your agent will use, then open a terminal in that same directory. Choose the route that matches where you are sitting.

## Before you begin

You need the project directory on the Firehose server. For the practice route, first create `hello-firehose` through **New git project**. Its path combines the **Location** you selected and the project name.

Ask your operator for the full path if you do not know it. Do this before copying a file. The examples below use `~/projects/hello-firehose`; replace it with your actual path.

| Your situation | Use this route |
| --- | --- |
| You can open a terminal on the server computer | [Work on that computer](#work-on-the-server-computer) |
| You use another computer and already have SSH access | [Copy over SSH](#copy-from-another-computer-with-ssh) |
| You are on a phone or do not have terminal access | [Ask your operator](#ask-your-operator-to-place-the-file) |

If your Firehose installation offers the in-app terminal, you can [open a server shell there](/tools/terminal/) for these location and command checks. Attaching a file to Chat stages prompt material; it does not place `greeting.mjs` at the project root for this tutorial.

SSH is a separate way to sign in to the server from a terminal. Access to the Firehose app or its Tailscale network does not by itself establish an SSH login. The shell examples here use a macOS or Linux terminal with Git and Node.js available on the server.

## Work on the server computer

1. Open your computer’s terminal application.
2. Change into the project directory:

   ```sh
   cd ~/projects/hello-firehose
   pwd
   git rev-parse --show-toplevel
   ```

   Both printed paths should identify `hello-firehose` on the server. If `cd` fails, stop and confirm the path; do not continue in the terminal’s previous directory.

3. Open a text editor, paste the [quickstart’s greeting code](/getting-started/first-session/#add-the-example-file), and save it in that directory as `greeting.mjs`, without an extra `.txt` extension. Alternatively, save the [downloadable file](/examples/hello-firehose/greeting.mjs) there.
4. Continue with [Check the file](#check-the-file).

## Copy from another computer with SSH

Have your operator confirm your SSH username, server hostname, login method, and destination directory first. `YOUR_USER` and `YOUR_SERVER` below are placeholders. Use the operator’s SSH address, not a documentation URL or the hosted app URL.

1. Download [greeting.mjs](/examples/hello-firehose/greeting.mjs) to your computer. Open a terminal in the folder where you saved it.
2. Sign in to check the destination:

   ```sh
   ssh YOUR_USER@YOUR_SERVER
   ```

   On the server, run:

   ```sh
   cd ~/projects/hello-firehose
   pwd
   git rev-parse --show-toplevel
   exit
   ```

   For a first SSH connection, verify the host identity with your operator before accepting it. If login fails, send the error to the operator; Firehose’s Connect button cannot repair SSH access.

3. Back in your computer’s terminal, copy the file:

   ```sh
   scp ./greeting.mjs YOUR_USER@YOUR_SERVER:projects/hello-firehose/greeting.mjs
   ```

   The destination after `:` is relative to that SSH account’s home directory. Replace it if your operator supplied a different path. This command replaces a file with the same name, so use it only for the intended practice file.

4. Sign in again with `ssh YOUR_USER@YOUR_SERVER`, change into the same project directory, and check the file below.

## Ask your operator to place the file

Send the operator the sample download and your project name through your usual support channel. Ask them to save it in the server’s project directory and run the checks below. Ask for the full path and printed greeting in their reply.

Once they confirm that result, continue in Firehose from your phone or browser. You do not need to set up SSH on your phone just to read an agent’s explanation.

## Check the file

In the server terminal, inside the intended project, run:

```sh
pwd
ls -l greeting.mjs
node --input-type=module -e "import { greet } from './greeting.mjs'; console.log(greet(' Ada '));"
```

**Expected result:** the path is your project, the file is present, and the last command prints `Hello, Ada!`.

If the file is missing, check the save location and extension. If `node` is unavailable, ask the operator to supply Node.js before proceeding. If the greeting differs, compare the file with the original sample before asking an agent to explain it.

Return to [Add the example file](/getting-started/first-session/#add-the-example-file) to commit the baseline, then start the session. For a new worktree later, repeat the location check using that worktree’s path; its files live in a different directory.
