---
title: "Activate Firehose"
description: "Activate a new Firehose installation with a code emailed to you, and subscribe if you need to, so you can start sessions."
verified: "2026-10-06"
evidence: ["activation", "layout"]
---

Activate Firehose on your computer so it can start agent sessions. Until you do, the dashboard shows an activation screen and nothing else works.

This page describes Firehose 1.2.2. Activation by emailed code started in Firehose 1.1.0; if your dashboard shows **Activate this server** instead of an email field, [update Firehose](/getting-started/install/#manage-firehose-from-the-terminal) with `firehose update`.

## Before you begin

You need:

- A Firehose installation from [Install Firehose](/getting-started/install/).
- An email address you can read. Firehose sends a 6-digit code there. You can read the email on any device, such as your phone.

Activation needs a paid subscription, which belongs to that email address. If the address does not have one yet, you subscribe during activation. Billing starts the day you subscribe.

Everything happens on the dashboard at `http://localhost:4801`, except paying, which opens a checkout page in your browser.

## 1. Enter your email address

1. Open your dashboard. After a fresh install, it is already open and shows **Activate Firehose**.
2. Type your email address under **Email**.
3. Select **Send code**.

<figure class="product-capture">
  <img src="/images/ui/activation-start.png" width="540" height="445" loading="lazy" alt="The Activate Firehose screen. It reads: This installation has not been activated yet. Enter your email address and we'll send you a 6-digit code. Below are an Email field showing you@example.com as a hint and the Send code button.">
  <figcaption>The dashboard before activation.</figcaption>
</figure>

## 2. Enter the code from the email

Firehose sends an email from `Firehose <noreply@okthink.ai>` with the subject **Your Firehose code:** followed by six digits. The dashboard says **We sent a code to** your address, and that it expires in 10 minutes.

1. Type the six digits under **Code**.
2. Select **Verify**.

<figure class="product-capture">
  <img src="/images/ui/activation-code.png" width="540" height="519" loading="lazy" alt="The Activate Firehose screen reading: We sent a code to you@example.com. It expires in 10 minutes. The Code field holds 482915, followed by the Verify button and the Resend code and Use a different email links.">
  <figcaption>Entering the emailed code. The email address and code are examples; yours will differ.</figcaption>
</figure>

If the email does not arrive, check your spam folder, then select **Resend code**. If you typed the wrong address, select **Use a different email**.

What happens next depends on your subscription.

### If you already subscribe

Firehose unlocks right away. Continue to [Check the result](#4-check-the-result).

### If you do not subscribe yet

The dashboard says your address **is verified** and that activating Firehose needs a subscription; your card is charged today. Continue to the next step.

## 3. Subscribe

1. Under **Plan**, choose **Individual, billed monthly** or **Individual, billed yearly**. The checkout page shows the price.
2. Select **Subscribe**.

<figure class="product-capture">
  <img src="/images/ui/activation-subscribe.png" width="540" height="559" loading="lazy" alt="The Activate Firehose screen reading: you@example.com is verified. Activating Firehose needs a subscription; your card is charged today. Two plan choices, Individual, billed monthly (selected) and Individual, billed yearly, appear above the Subscribe button and a Use a different email link.">
  <figcaption>Choosing a plan. The email address is an example.</figcaption>
</figure>

A checkout page opens in a new browser tab. The dashboard says **Waiting for payment…**. Pay on the checkout page; you have up to an hour.

<figure class="product-capture">
  <img src="/images/ui/activation-payment.png" width="540" height="385" loading="lazy" alt="The Activate Firehose screen reading: Checkout is open in your browser for you@example.com. Waiting for payment. Finish paying there; Firehose unlocks as soon as it goes through. Below are the Open checkout again and Choose a different plan links.">
  <figcaption>The dashboard while you pay. The email address is an example.</figcaption>
</figure>

If you closed the checkout tab, select **Open checkout again**. To change plans, select **Choose a different plan**.

When the payment goes through, the checkout tab shows **Payment received**. You can close it and go back to the dashboard.

<figure class="product-capture">
  <img src="/images/ui/activate-checkout-complete.png" width="540" height="282" loading="lazy" alt="A page titled Payment received that reads: Go back to Firehose; it unlocks in a few seconds. You can close this page.">
  <figcaption>The page you see after paying.</figcaption>
</figure>

### If your subscription needs attention

If your address already has a subscription with a problem, usually a payment that did not go through, selecting **Subscribe** shows a message saying so. Select **Manage billing**, fix the payment, then select **Subscribe** again.

<figure class="product-capture">
  <img src="/images/ui/activation-billing.png" width="540" height="673" loading="lazy" alt="The plan screen with a red message: This account already has a subscription that needs attention, usually a payment that did not go through. Fix it in billing, then try again. Below it are a Manage billing link and the Subscribe button.">
  <figcaption>A subscription with a failed payment. The email address is an example.</figcaption>
</figure>

## 4. Check the result

Within a few seconds, the activation screen closes and Firehose opens with the **Sessions** sidebar. You do not need to reload. See [Find your way around Firehose](/getting-started/find-your-way/) for what you are looking at.

Next, [connect to Firehose](/getting-started/connect/) and check that your agent is ready.

## Manage your subscription

To change your card, see invoices, switch plans, or cancel, open `agents.okthink.ai/account`. From the dashboard, you can also open **Settings** and select **Manage subscription** under **License**.

Sign in with the email address you used to activate Firehose. Either:

- Select **Continue with Google** and choose the Google account with that address. The page shows **Signed in as** your address. Select **Manage billing**.
- Or type the address under **or use your email** and select **Email me a code**. Firehose emails you a 6-digit code with the subject **Your Firehose sign-in code**. Type the code and select **Open billing**.

<figure class="product-capture">
  <img src="/images/ui/account-signin.png" width="540" height="544" loading="lazy" alt="The account page titled Your Firehose account. It reads: Sign in with the email address you used to activate Firehose to change your card, see invoices, switch plans, or cancel. Below are a Continue with Google button, the divider or use your email, an email field holding you@example.com, and the Email me a code button.">
  <figcaption>Signing in to the account page. The email address is an example.</figcaption>
</figure>

<figure class="product-capture">
  <img src="/images/ui/account-code.png" width="540" height="651" loading="lazy" alt="The account page reading: We emailed a 6-digit code to you@example.com. It expires in 10 minutes. The code field holds 275481, followed by the Open billing button and the Send a new code and Use a different email links.">
  <figcaption>Entering the emailed code. The email address and code are examples; yours will differ.</figcaption>
</figure>

Either way, the billing portal opens, where you manage your subscription.

<figure class="product-capture">
  <img src="/images/ui/account.png" width="540" height="498" loading="lazy" alt="The account page titled Your Firehose account, showing Signed in as you@example.com, a note about the billing portal, a Manage billing button, and a Sign out link.">
  <figcaption>The account page after signing in with Google. The email address is an example.</figcaption>
</figure>

| What you see | What to do |
| --- | --- |
| The code email does not arrive | Check your spam folder, then select **Send a new code**. If the address is wrong, select **Use a different email**. |
| **That code isn’t right.** and the tries left | Check the digits in the newest email and try again. Each code allows five tries. |
| **That code expired.** or **Too many wrong codes.** | Select **Send a new code**. Codes last 10 minutes. |
| **Too many codes requested.** | Wait and try again later. The account page sends at most five codes an hour, and ten a day, to one address. |
| **This account has no billing yet.** | That address has never subscribed. Check that you used the address you activated Firehose with. |

## If Firehose asks you to reactivate

You do not need to reactivate after time away. Firehose renews its license on its own, including right after the computer starts.

The dashboard shows **Reactivate Firehose** only when a renewal fails:

- **Your subscription stopped,** for example it was canceled or a payment failed. The screen names the reason. Fix it at `agents.okthink.ai/account`, and Firehose unlocks on its own at its next check, within about an hour.
- **Firehose could not reach the license service for 14 days** while it kept running. Reconnect the computer to the internet, and Firehose unlocks at its next check.

To unlock right away instead of waiting, enter your email address on the **Reactivate Firehose** screen and repeat the steps above.

<figure class="product-capture">
  <img src="/images/ui/activation-locked.png" width="540" height="445" loading="lazy" alt="The Reactivate Firehose screen reading: This installation is locked: subscription is canceled. Enter your email address and we'll send you a 6-digit code. Below are the Email field and the Send code button.">
  <figcaption>A locked installation, with the reason the license service gave.</figcaption>
</figure>

## If activation does not finish

| What you see | What to do |
| --- | --- |
| The email does not arrive | Check your spam folder, then select **Resend code**. Check that the address shown after **We sent a code to** is right; if not, select **Use a different email**. |
| **That code isn’t right.** and the attempts left | Check the digits in the newest email and try again. Each code allows five tries. |
| **That code has expired.** or **Too many wrong codes.** | Select **Resend code** for a new code. Codes last 10 minutes. |
| **Too many codes were requested.** | Wait a few minutes, then try again. Firehose sends at most five codes an hour to one address. |
| **The activation timed out before payment finished.** | More than an hour passed before payment went through. Enter your email address again; you get a new code. |
| **Firehose could not reach its license service.** | Check that the computer is online, then try again. |
| The dashboard keeps waiting after the checkout page said **Payment received** | Check that the computer is online, then wait a minute. Firehose checks for the payment every few seconds. |
| **License agreement** instead of **Activate Firehose** | Read the agreement, also available as the [published end-user license agreement](https://github.com/okthink-ai/firehose-releases/releases/latest/download/EULA.md), and select **I accept**. This appears if the agreement was not accepted during installation. |

<figure class="product-capture">
  <img src="/images/ui/license-agreement.png" width="540" height="466" loading="lazy" alt="The License agreement screen reading Read and accept the agreement to use Firehose on this machine, with the agreement in a scrolling box and an I accept button.">
  <figcaption>The license agreement screen. The agreement text is shortened here; read the full agreement on the screen or at the link above.</figcaption>
</figure>
