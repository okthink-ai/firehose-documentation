---
title: "Install Firehose"
description: "Install Firehose on your Mac or Linux computer with the one-line installer and open the dashboard."
verified: "2026-09-29"
evidence: ["install", "tailscale-setup"]
---

Install Firehose on the computer where your repositories live. When you finish, Firehose is running on that computer and its dashboard is open in your browser, ready to [activate](/getting-started/activate/).

This page describes Firehose 1.0.1.

## Before you begin

You need:

- A computer you control running macOS or Linux, on an x64 or arm64 processor. Linux needs a glibc-based distribution; Alpine and other musl-based systems are not supported.
- `curl` and `tar`, which the installer uses to download and unpack Firehose.
- `tmux`, which Firehose needs to launch agent sessions, and `git` for workspace features.
- At least one agent command-line tool installed and signed in: Claude Code (`claude`), Codex (`codex`), or Antigravity (`agy`). Firehose does not install or sign in to these for you.
- A paid Firehose subscription, or the email address you will use to buy one during [activation](/getting-started/activate/).
- [Tailscale](https://tailscale.com/download), only if you want to open Firehose from your phone or another computer. Install it before running the installer and the installer offers to set up access for you. You can also add it later; see [Set up Tailscale](/getting-started/connect/#set-up-tailscale).

The installer warns rather than stops if `tmux`, `git`, or an agent tool is missing. Install them before you start a session.

## 1. Run the installer

Open a terminal on the computer and run:

```sh
curl -fsSL https://github.com/okthink-ai/firehose-releases/releases/latest/download/install.sh | sh
```

The installer downloads the latest release for your computer, checks its checksum, and unpacks it into `~/.firehose`. The release includes its own Node.js runtime, so nothing is built on your computer.

## 2. Accept the license agreement

The installer shows where the agreement is saved and asks:

```text
Do you accept the end-user license agreement? [y/N]
```

Read the agreement, then type `y` to continue. Any other answer stops the installation without changing anything.

## 3. Choose whether to allow your other devices

If the computer is connected to Tailscale, the installer asks:

```text
This machine is on Tailscale. Also open Firehose from your other devices
on your tailnet (only you, over HTTPS)? [y/N]
```

Type `y` to use Firehose from your phone or another computer, or press Enter to skip it. You can turn it on later; see [Connect to Firehose](/getting-started/connect/#open-firehose-from-your-other-devices). Without Tailscale, the installer does not ask.

## 4. Check the result

The installer registers Firehose to start when you log in, starts it, and opens `http://localhost:4801` in your browser. It finishes with a message like this:

```text
==> Firehose 1.0.1 installed

  Firehose is running at http://localhost:4801.
  It starts by itself when you log in.
  Activate it in the browser window that just opened.
```

On a computer without a desktop, such as one you reach over SSH, no browser opens. The message tells you to open `http://localhost:4801` in a browser instead.

The dashboard shows **Activate Firehose** until you activate it. Continue to [Activate Firehose](/getting-started/activate/).

If the installer could not register a login service, it starts Firehose for this session only and says so. Run `firehose service install` later to start it at login.

## Use installer options

To pass an option through the one-line command, add `sh -s --` and the options:

```sh
curl -fsSL https://github.com/okthink-ai/firehose-releases/releases/latest/download/install.sh | sh -s -- --port 4900
```

| Option | Use it to |
| --- | --- |
| `--port <port>` | Serve the dashboard on a port other than 4801, between 1024 and 65535 |
| `--tailnet` | Allow your other devices on Tailscale without being asked |
| `--accept-eula` | Accept the license agreement without a prompt, after reading it |
| `--no-browser` | Skip opening the dashboard when the installer finishes |
| `--no-start` | Install without starting Firehose or registering it to start at login |
| `--release <version>` | Install a specific version instead of the latest |
| `--dir <path>` | Install somewhere other than `~/.firehose` |

Changing the port has a cost: the hosted app at agents.okthink.ai always connects on port 4801. On another port, use the tailnet address from **Settings** on your other devices instead.

## Manage Firehose from the terminal

The installer adds a `firehose` command. Open a new terminal window if the command is not found yet.

| Command | What it does |
| --- | --- |
| `firehose status` | Show a quick status in the terminal |
| `firehose update` | Upgrade to the latest release |
| `firehose tailnet on` | Open Firehose from your other devices on Tailscale |
| `firehose service uninstall` | Stop starting Firehose at login |
| `firehose uninstall` | Remove Firehose from this computer |

Running the installer again also upgrades Firehose. It keeps the port you chose before.

## If the installation stops

The installer prints `ERROR:` followed by the reason. Common ones:

| Message | What to do |
| --- | --- |
| `unsupported operating system` or `unsupported architecture` | Firehose 1.0.1 runs on macOS and Linux, on x64 and arm64. Use a supported computer. |
| `musl-based Linux (Alpine and similar) is not supported` | Use a glibc-based Linux distribution. |
| `the license agreement must be accepted to install` | Run the command again and type `y`, or add `--accept-eula` after reading the agreement. |
| `no terminal to confirm the license agreement` | The installer could not ask you. Read the agreement at the path shown, then run it with `--accept-eula`. |
| `conflicting command(s) already on PATH` | Another program named `firehose` exists. Check what it is before re-running with `--force`. |
| `Firehose did not answer on port 4801` | Check the logs in `~/.firehose/logs`, then run `firehose status`. |
