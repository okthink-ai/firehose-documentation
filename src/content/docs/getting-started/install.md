---
title: "Install Firehose"
description: "Install Firehose on your Mac or Linux computer with the one-line installer and open the dashboard."
verified: "2026-10-06"
evidence: ["install", "tailscale-setup", "layout"]
---

Install Firehose on the computer where your repositories live. When you finish, Firehose is running on that computer and its dashboard is open in your browser, ready to [activate](/getting-started/activate/).

This page describes Firehose 1.2.2.

## Before you begin

You need:

- A computer you control running macOS or Linux, on an x64 or arm64 processor. Linux needs a glibc-based distribution; Alpine and other musl-based systems are not supported.
- `curl` and `tar`, which the installer uses to download and unpack Firehose.
- `tmux`, which Firehose needs to launch agent sessions, and `git` for workspace features.
- At least one agent command-line tool installed and signed in: Claude Code (`claude`), Codex (`codex`), or Antigravity (`agy`). Firehose does not install or sign in to these for you.
- Agreement to the [Firehose end-user license agreement](https://github.com/okthink-ai/firehose-releases/releases/latest/download/EULA.md). You can read it before you install; the installer asks you to accept it.
- An email address you can read. [Activation](/getting-started/activate/) emails you a code, and the subscription belongs to that address. If it does not have one yet, you subscribe during activation.
- [Tailscale](https://tailscale.com/download), only if you want to open Firehose from your phone or another computer. Install it before running the installer and the installer offers to set up access for you. You can also add it later; see [Set up Tailscale](/getting-started/connect/#set-up-tailscale).

If `tmux` is missing, the installer offers to install it for you; see [Install tmux if asked](#install-tmux-if-asked). It warns rather than stops if `git` or an agent tool is missing. Install them before you start a session.

## 1. Run the installer

Open a terminal on the computer and run:

```sh
curl -fsSL https://okthink.ai/install.sh | bash
```

This address points to the installer published with the latest Firehose release on GitHub. On a system without bash, such as Alpine Linux, replace `bash` with `sh`.

The installer downloads the latest release for your computer, checks its checksum, and unpacks it into `~/.firehose`. The release includes its own Node.js runtime, so nothing is built on your computer.

### Install tmux if asked

Firehose runs every agent session inside tmux. If tmux is not installed, the installer offers to install it with your computer's package manager, for example:

```text
Firehose needs tmux to start agent sessions, and it is not installed.
Install it now with: sudo apt-get update && sudo apt-get install -y tmux ? [Y/n]
```

Press Enter to install it, or type `n` to skip. The command depends on your computer: Homebrew (`brew install tmux`) on a Mac, and `apt-get`, `dnf`, `yum`, `pacman`, or `zypper` on Linux. On Linux it uses `sudo` unless you run the installer as root, and `sudo` may ask for your password.

If you skip it or the tmux installation fails, the installer prints a warning with the command to run and carries on. If it finds no package manager it knows, it warns you to install tmux with your package manager. On a Mac without Homebrew, it points you to [brew.sh](https://brew.sh); install Homebrew, then run `brew install tmux`. Install tmux before you start a session.

## 2. Accept the license agreement

Firehose is licensed software. You can read the [end-user license agreement](https://github.com/okthink-ai/firehose-releases/releases/latest/download/EULA.md) before you start; it is the same text the installer saves on your computer. The installer shows where it saved the agreement and asks:

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

The installer registers Firehose to start when you log in and starts it. While Firehose starts, the installer shows `==> Waiting for Firehose to start` and adds a dot every few seconds; the first start can take up to a minute. When Firehose answers, the installer opens `http://localhost:4801` in your browser and finishes with a message like this:

```text
==> Firehose 1.2.2 installed

  Firehose is running at http://localhost:4801.
  It starts by itself when you log in.
  Activate it in the browser window that just opened.
```

On a computer without a desktop, such as one you reach over SSH, no browser opens. The message tells you to open `http://localhost:4801` in a browser instead.

The dashboard shows **Activate Firehose**, with a field for your email address, until you activate it. Continue to [Activate Firehose](/getting-started/activate/).

If the installer could not register a login service, it starts Firehose for this session only and says so. Run `firehose service install` later to start it at login.

If Firehose does not start, see [If Firehose does not start](#if-firehose-does-not-start).

## Use installer options

To pass an option through the one-line command, add `bash -s --` and the options:

```sh
curl -fsSL https://okthink.ai/install.sh | bash -s -- --port 4900
```

| Option | Use it to |
| --- | --- |
| `--port <port>` | Serve the dashboard on a port other than 4801, between 1024 and 65535 |
| `--tailnet` | Allow your other devices on Tailscale without being asked |
| `--accept-eula` | Accept the license agreement without a prompt, after reading it |
| `--no-browser` | Skip opening the dashboard when the installer finishes |
| `--no-start` | Install without starting Firehose or registering it to start at login. Run `firehose service install` when you want to start it. |
| `--release <version>` | Install a specific version instead of the latest |
| `--dir <path>` | Install somewhere other than `~/.firehose` |

Changing the port has a cost: the hosted app at agents.okthink.ai always connects on port 4801. On another port, open **Settings** (the gear icon at the bottom of the icon rail on the far left) and copy the address under **Open from your other devices** to use on your other devices instead.

## Manage Firehose from the terminal

The installer adds a `firehose` command. Open a new terminal window if the command is not found yet.

| Command | What it does |
| --- | --- |
| `firehose status` | Show a quick status in the terminal |
| `firehose update` | Upgrade to the latest release |
| `firehose tailnet on` | Open Firehose from your other devices on Tailscale |
| `firehose service install` | Start Firehose in the background now, and whenever you log in |
| `firehose service uninstall` | Stop Firehose and stop starting it at login |
| `firehose uninstall` | Remove Firehose from this computer |

Running the installer again also upgrades Firehose. It keeps the port you chose before.

## If the installation stops

The installer prints `ERROR:` followed by the reason. Common ones:

| Message | What to do |
| --- | --- |
| `unsupported operating system` or `unsupported architecture` | Firehose runs on macOS and Linux, on x64 and arm64. Use a supported computer. |
| `musl-based Linux (Alpine and similar) is not supported` | Use a glibc-based Linux distribution. |
| `the license agreement must be accepted to install` | Run the command again and type `y`, or add `--accept-eula` after reading the agreement. |
| `no terminal to confirm the license agreement` | The installer could not ask you. Read the agreement at the path shown, then run it with `--accept-eula`. |
| `conflicting command(s) already on PATH` | Another program named `firehose` exists. Check what it is before re-running with `--force`. |

## If Firehose does not start

If Firehose is installed but does not answer within about a minute, the installer prints:

```text
WARNING: Firehose did not answer on port 4801
```

It then shows the last lines of Firehose's log in `~/.firehose/logs`, usually `service.log`, which often say why. On Linux, it may tell you to read the log with `journalctl --user -u firehose` instead.

Fix the cause the log names, then run `firehose service install` to start Firehose again. Check the result with `firehose status`, then open `http://localhost:4801`.
