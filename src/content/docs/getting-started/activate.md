---
title: "Activate Firehose"
description: "Activate a new Firehose installation with your subscription so you can start sessions."
verified: "2026-09-29"
evidence: ["activation", "layout"]
---

Activate Firehose on your computer so it can start agent sessions. Until you do, the dashboard shows an activation screen and nothing else works.

This page describes Firehose 1.0.1. You need a Firehose installation from [Install Firehose](/getting-started/install/) and an email address you can open on this device.

## Before you begin

Activation needs a paid subscription. If your account does not have one yet, you subscribe during activation. Billing starts the day you subscribe.

Activation happens in two browser tabs:

- **Your dashboard** at `http://localhost:4801` shows a code and waits.
- **The activation page** at `agents.okthink.ai/activate` is where you sign in, subscribe if needed, and approve the code.

## 1. Get an activation code

1. Open your dashboard. After a fresh install, it is already open and shows **Activate Firehose**.
2. Select **Activate this server**.

<figure class="product-capture">
  <img src="/images/ui/activation-start.png" width="800" height="400" loading="lazy" alt="The Activate Firehose screen on the dashboard. It reads: This installation has not been activated yet. Sign in on the Firehose site to subscribe or use your existing subscription. Below is the Activate this server button.">
  <figcaption>The dashboard before activation.</figcaption>
</figure>

Firehose shows a code under **Enter this code on the activation page** and opens the activation page in a new tab. The dashboard says **Waiting for approval in the tab that opened…**. Leave it open. The code works for one hour. If no tab opened, select the link under the code.

<figure class="product-capture">
  <img src="/images/ui/activation-code.png" width="800" height="400" loading="lazy" alt="The Activate Firehose screen showing the code K7QF-3MXP under Enter this code on the activation page, a link to agents.okthink.ai/activate, and the text Waiting for approval in the tab that opened.">
  <figcaption>The dashboard while it waits for approval. The code is an example; yours will differ.</figcaption>
</figure>

## 2. Sign in with your email

The activation page opens with your code already filled in. Type it in if the field is empty.

Enter your email address and select **Email me a sign-in link**.

<figure class="product-capture">
  <img src="/images/ui/activate-signin.png" width="560" height="351" loading="lazy" alt="The activation page titled Activate Firehose. The code K7QF-3MXP is in the code field, followed by an empty email field showing you@example.com as a hint, and the Email me a sign-in link button.">
  <figcaption>The activation page before you sign in. The code and email address are examples.</figcaption>
</figure>

The page then says **Check your inbox and open the link on this device; it verifies your address and brings you back here.** Open the email on this same device and select its link.

<figure class="product-capture">
  <img src="/images/ui/activate-link-sent.png" width="560" height="405" loading="lazy" alt="The activation page after sending the link. The email field shows you@example.com, the button now reads Send the link again, and a note says to check your inbox and open the link on this device.">
  <figcaption>After you ask for the link. The code and email address are examples.</figcaption>
</figure>

## 3. Approve the code

Back on the activation page, it shows **Verified as** and your address. Your subscription belongs to this address. To use another one, select **Use a different email**.

Select **Approve this code**.

<figure class="product-capture">
  <img src="/images/ui/activate-approve.png" width="560" height="408" loading="lazy" alt="The activation page signed in. Under the code it reads Verified as you@example.com, with a Use a different email link, the Approve this code button, and a Manage billing link.">
  <figcaption>Signed in and ready to approve. The code and email address are examples.</figcaption>
</figure>

What happens next depends on your subscription.

### If you already subscribe

The page says **Approved. Firehose will finish activating on its own; you can close this page.**

<figure class="product-capture">
  <img src="/images/ui/activate-approved.png" width="560" height="410" loading="lazy" alt="The activation page after approval, showing in green: Approved. Firehose will finish activating on its own; you can close this page.">
  <figcaption>The code is approved. The code and email address are examples.</figcaption>
</figure>

### If you do not subscribe yet

The page says **This account has no active subscription. Subscribe to activate; your card is charged today.**

1. Choose **Individual, billed monthly** or **Individual, billed yearly**. The checkout page shows the price.
2. Select **Subscribe** and pay on the checkout page.
3. When you return to the activation page, select **Approve this code** again.

<figure class="product-capture">
  <img src="/images/ui/activate-subscribe.png" width="560" height="562" loading="lazy" alt="The activation page asking you to subscribe. Two plan choices, Individual, billed monthly (selected) and Individual, billed yearly, appear above the Subscribe button.">
  <figcaption>Choosing a plan. The code and email address are examples.</figcaption>
</figure>

### If your subscription needs attention

The page says the subscription needs attention, usually because a payment did not go through. Select **Open billing**, fix the payment, then select **Approve this code** again.

<figure class="product-capture">
  <img src="/images/ui/activate-billing.png" width="560" height="426" loading="lazy" alt="The activation page saying: This account already has a subscription that needs attention, usually a payment that did not go through. Fix it in billing, then approve the code again. Below is the Open billing button.">
  <figcaption>A subscription with a failed payment. The code and email address are examples.</figcaption>
</figure>

## 4. Check the result

Return to your dashboard tab. Within a few seconds, the activation screen closes and Firehose opens with the **Sessions** sidebar. You do not need to reload. See [Find your way around Firehose](/getting-started/find-your-way/) for what you are looking at.

Next, [connect to Firehose](/getting-started/connect/) and check that your agent is ready.

## Manage your subscription

Open `agents.okthink.ai/account` and sign in with an email link. Select **Manage billing** to open your billing details. The activation page also has a **Manage billing** link once you are signed in.

<figure class="product-capture">
  <img src="/images/ui/account.png" width="355" height="229" loading="lazy" alt="The account page titled Your Firehose account, showing Signed in as you@example.com, a Manage billing button, and a Sign out link.">
  <figcaption>The account page. The email address is an example.</figcaption>
</figure>

## If Firehose asks you to reactivate

You do not need to reactivate after time away. Firehose renews its license on its own, including right after the computer starts.

The dashboard shows **Reactivate Firehose** only when a renewal fails:

- **Your subscription stopped,** for example it was canceled or a payment failed. The screen names the reason. Fix it at `agents.okthink.ai/account`, and Firehose unlocks on its own at its next check, within about an hour.
- **Firehose could not reach the license service for 14 days** while it kept running. Reconnect the computer to the internet, and Firehose unlocks at its next check.

To unlock right away instead of waiting, select **Activate this server** and repeat the steps above.

<figure class="product-capture">
  <img src="/images/ui/activation-locked.png" width="800" height="400" loading="lazy" alt="The Reactivate Firehose screen reading: This installation is locked: subscription is canceled. Sign in to reactivate it. Below is the Activate this server button.">
  <figcaption>A locked installation, with the reason the license service gave.</figcaption>
</figure>

## If activation does not finish

| What you see | What to do |
| --- | --- |
| **The code expired before it was approved.** | More than an hour passed. Select **Try again** for a new code. |
| **The activation was not approved.** | Select **Try again**. If it happens again, check your subscription at `agents.okthink.ai/account`. |
| The dashboard keeps waiting after the page said the code was approved | Check that the computer is online, then wait a minute. Firehose checks for approval every few seconds. |
| The sign-in email does not arrive | Check your spam folder, then select **Send the link again**. |
| **License agreement** instead of **Activate Firehose** | Read the agreement, also available as the [published end-user license agreement](https://github.com/okthink-ai/firehose-releases/releases/latest/download/EULA.md), and select **I accept**. This appears if the agreement was not accepted during installation. |

<figure class="product-capture">
  <img src="/images/ui/activation-expired.png" width="800" height="400" loading="lazy" alt="The Activate Firehose screen with a Try again button and the note: The code expired before it was approved.">
  <figcaption>An expired code.</figcaption>
</figure>

<figure class="product-capture">
  <img src="/images/ui/license-agreement.png" width="800" height="660" loading="lazy" alt="The License agreement screen reading Read and accept the agreement to use Firehose on this machine, with the agreement in a scrolling box and an I accept button.">
  <figcaption>The license agreement screen. The agreement text is shortened here; read the full agreement on the screen or at the link above.</figcaption>
</figure>
