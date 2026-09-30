---
title: "Activate Firehose"
description: "Activate a new Firehose installation with your subscription so you can start sessions."
verified: "2026-09-29"
evidence: ["activation"]
---

Activate Firehose on your computer so it can start agent sessions. Until you do, the dashboard shows an activation screen and nothing else works.

This page describes Firehose 1.0.1. You need a Firehose installation from [Install Firehose](/getting-started/install/) and an email address you can open on this device.

## Before you begin

Activation needs a paid subscription. If your account does not have one yet, you subscribe during activation. Billing starts the day you subscribe.

Activation happens in two browser tabs:

- **Your dashboard** at `http://localhost:4801` shows a code and waits.
- **The activation page** at `agents.okthink.ai/activate` is where you sign in, subscribe if needed, and approve the code.

## 1. Get an activation code

1. Open your dashboard. After a fresh install, it is already open.
2. On **Activate Firehose**, select **Activate this server**.
3. Firehose shows a code under **Enter this code on the activation page** and opens the activation page in a new tab.

The dashboard now says **Waiting for approval in the tab that opened…**. Leave it open. The code works for one hour.

If no tab opened, select the link under the code.

## 2. Sign in with your email

On the activation page:

1. Check that the code field shows the code from your dashboard. Type it in if it is empty.
2. Enter your email address and select **Email me a sign-in link**.
3. Open the email on this same device and select its link. It verifies your address and brings you back to the activation page.

The page now shows **Verified as** and your address. To use another address, select **Use a different email**. Your subscription belongs to the address you verify, so use the one you want to be billed under.

## 3. Approve the code

Select **Approve this code**.

- **If you already subscribe,** the page says the code was approved and that Firehose will finish activating on its own. You can close the page.
- **If you do not subscribe yet,** the page says **This account has no active subscription. Subscribe to activate; your card is charged today.** Choose a plan if several are shown, select **Subscribe**, and pay on the checkout page. When you return to the activation page, select **Approve this code** again.
- **If your subscription needs attention,** usually because a payment failed, select **Open billing** and fix it. Then select **Approve this code** again.

## 4. Check the result

Return to your dashboard tab. Within a few seconds, the activation screen closes and Firehose opens. You do not need to reload.

Next, [connect to Firehose](/getting-started/connect/) and check that your agent is ready.

## Manage your subscription

Open `agents.okthink.ai/account`, sign in with the same email link, and select **Manage billing**. The activation page also has a **Manage billing** link once you are signed in.

## Stay activated

Firehose renews its license automatically while the computer is online. If it cannot reach the license service, it keeps working for up to 14 days. After that, or if the renewal is refused, for example because the subscription ended, the dashboard shows **Reactivate Firehose** with the reason. Select **Activate this server** and repeat the steps above.

## If activation does not finish

| What you see | What to do |
| --- | --- |
| **The code expired before it was approved.** | More than an hour passed. Select **Try again** for a new code. |
| **The activation was not approved.** | Select **Try again**. If it happens again, check your subscription at `agents.okthink.ai/account`. |
| The dashboard keeps waiting after the page said the code was approved | Check that the computer is online, then wait a minute. Firehose checks for approval every few seconds. |
| The sign-in email does not arrive | Check your spam folder, then select **Send the link again**. |
| **License agreement** instead of **Activate Firehose** | Read the agreement and select **I accept**. This appears if the agreement was not accepted during installation. |
