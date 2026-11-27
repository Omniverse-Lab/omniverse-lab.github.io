---
layout: doc
title: MathDeck · Privacy Policy
permalink: /apps/mathdeck/privacy/
app: MathDeck
app_slug: mathdeck
doc: privacy
summary: MathDeck keeps your calculations and tasks on your phone. There is no account, no advertising and no tracking, and the app goes online only to fetch currency exchange rates.
effective: 2026-04-16
updated: 2026-11-26
applies_to: MathDeck for Android
package: io.github.omniverse_lab.mathdeck
publisher: OmniVerse Labs
contact: visualtales8@gmail.com
facts:
  - label: Data sent to OmniVerse Labs
    value: None
    note: No sign-up, no profile and no account.
  - label: Internet access
    value: Currency rates only
    note: A request for exchange rates, with nothing about you in it, when you open Unit Conversion and the saved rates are over 12 hours old, or when you tap Refresh.
  - label: Backups
    value: Your own Android backup, if it is on
    note: Your history, favorites, tasks and settings go into your phone's backup and to your next phone. Never to us.
  - label: Ads, analytics, crash reports
    value: None
    note: No advertising, analytics or tracking tools.
  - label: Deleting your data
    value: Any time
    note: Clear your history and tasks, clear the app's storage, or uninstall MathDeck.
revisions:
  - date: 2026-11-26
    summary: Described how Android backup and moving to a new phone include MathDeck's data, named the exchange-rate service, corrected when MathDeck fetches rates, and added sections on who is responsible, security and your rights.
  - date: 2026-06-12
    summary: Added the home-screen widgets and the vibration permission.
  - date: 2026-06-03
    summary: Added the Tasks to-do list (MathDeck 3.0.0).
  - date: 2026-04-16
    summary: First published.
retention:
  - data: Calculation history
    where: Your phone, in MathDeck's private storage
    leaves: Only in your own Android backup, if it is on
    until: MathDeck keeps your latest 50 calculations. You can clear them sooner, clear MathDeck's storage, or uninstall it
  - data: Favorites, and pinned and recent calculators
    where: Your phone, in MathDeck's private storage
    leaves: Only in your own Android backup, if it is on
    until: You change them, clear MathDeck's storage, or uninstall it
  - data: Tasks, with each task's stopwatch time
    where: Your phone, in MathDeck's private storage
    leaves: Only in your own Android backup, if it is on
    until: You delete them. A deleted task waits in **Recently deleted** for 30 days, then is removed for good
  - data: Settings (theme, sound, haptics, profile) and each calculator widget's chosen screen
    where: Your phone, in MathDeck's private storage
    leaves: Only in your own Android backup, if it is on
    until: You clear MathDeck's storage, or uninstall it
  - data: Saved exchange rates
    where: Your phone, in MathDeck's private storage
    leaves: Never. They are left out of backups
    until: Newer rates replace them
  - data: The request for exchange rates
    where: Sent to ExchangeRate-API (open.er-api.com)
    leaves: Yes, with your network's IP address, as every internet request has
    until: Up to the rates service, under its own privacy policy
providers:
  - name: ExchangeRate-API
    service: Public exchange-rate service at open.er-api.com
    use: Sends MathDeck the latest exchange rates. It receives the request and your IP address, and nothing else about you
  - name: Your phone's backup service (Google, on most Android phones)
    service: Android backup and device-to-device transfer, if you turn them on
    use: Keeps MathDeck's history, favorites, tasks and settings in your own backup, and moves them to a new phone. OmniVerse Labs never receives it
---

> **In plain English:** MathDeck is a calculator and a simple
> to-do list. It does not collect, upload, or sell your personal
> data. Your tasks and history stay on your phone, and in your own
> Android backup if you use one. There are no accounts, no ads,
> and no tracking. The only time MathDeck goes online is to fetch
> currency exchange rates for its Currency converter.

---

## Who is responsible

OmniVerse Labs publishes MathDeck and is responsible for this
policy. MathDeck sends us no personal data, so we hold none about
you. For any question, email
[visualtales8@gmail.com](mailto:visualtales8@gmail.com).

---

## What information we collect

**None that we can see.**

MathDeck does not collect your name, email, phone number,
address, contacts, photos, location, or any other personal
information. There is no sign-up, no profile, and no account.

The only data the app uses is the data you create while using
it: your recent calculations (the latest 50), your favorite,
pinned and recent calculators, your to-do tasks (including each
task's stopwatch time), your settings (theme, sound, haptics,
profile), each calculator widget's chosen screen, and saved
currency rates. All of this stays on your phone, and in your own
Android backup if you use one. We never receive it, see it, or
store it anywhere else.

If you add MathDeck's optional home-screen widgets (calculator
shortcuts, or the today's-tasks widget with quick-add), they
display that same on-device data directly on your home screen.
Widgets do not send anything anywhere. They are simply another
window into the data already on your phone.

You can remove this information at any time by clearing your
history and tasks in the app, clearing the app's storage from
your phone's settings, or uninstalling MathDeck.

---

## Information we do not collect

We do not collect, receive, or share:

- Your name, email, phone number, or address
- Your contacts, calendar, messages, or call history
- Your photos, videos, or any media
- Your location
- Your microphone or camera input
- Device identifiers or advertising IDs
- Account passwords or credentials
- Any health or body measurements entered into the Health
  calculator. Those are calculated on your phone and stay there
- Any financial inputs (EMI, interest, ROI). Those stay on
  your phone too
- Any to-do tasks you create. Those are stored on your phone
  and stay there
- Any usage analytics, telemetry, or crash reports

There are no advertising, analytics, or tracking tools built
into MathDeck.

---

## When MathDeck uses the internet

MathDeck asks for internet access for one reason only: to fetch
currency exchange rates from ExchangeRate-API, a public rates
service at `open.er-api.com`. It does so:

- when you open **Unit Conversion** (Currency is its first tab)
  and the rates it saved are missing or more than 12 hours old, and
- when you tap **Refresh** on the Currency tab.

The request asks for the latest rates against the US dollar and
carries nothing about you: no account, no identifiers, no
settings, nothing you typed. Like every internet request, it
reaches the rates service from your network's IP address, and
ExchangeRate-API's own privacy policy covers what that service
does with it.

If you never open Unit Conversion, MathDeck makes no network
requests at all. Without a connection, it keeps using the last
rates it saved, or a built-in table if it has none.

---

## Backups and moving to a new phone

If your phone's Android backup is on, Android includes MathDeck's
history, favorites, pinned and recent calculators, tasks, settings
and each widget's chosen screen in that backup, and moves them to
a new phone when you transfer your data. The saved exchange rates
are left out.

The backup belongs to you. Your phone's backup service (Google, on
most Android phones) keeps it under your own account and that
service's privacy policy, and OmniVerse Labs never receives it. To
stop it, turn off backup in your phone's settings.

---

## Permissions

MathDeck asks for two permissions, neither of which involves
your personal data:

- **Internet**, so the Currency converter can update exchange
  rates. Used for nothing else.
- **Vibration**, so buttons can give a small haptic "click"
  when you tap them. This happens entirely on your device and
  involves no data at all. You can turn haptics off in the
  app's settings.

MathDeck does not ask for access to your location, camera,
microphone, contacts, storage, or any other sensitive
permission.

---

## Everything MathDeck handles, in one table

What MathDeck keeps, where, whether it ever leaves your phone, and
how long it stays.

{% include legal/table.html rows=page.retention cols="data:Data|where:Where it is kept|leaves:Leaves your phone|until:Kept until" caption="Data MathDeck handles and how long it is kept" %}

---

## Other services MathDeck works with

{% include legal/table.html rows=page.providers cols="name:Service|service:What it is|use:What it does for MathDeck" caption="Services that MathDeck's data can reach" %}

We do not sell your personal data, share it for advertising, or
give it to anyone else.

---

## Legal bases and international transfers

OmniVerse Labs receives no personal data from MathDeck, so we rely
on no legal basis to process it and transfer nothing between
countries. The rates service and your backup service handle what
reaches them under their own terms.

---

## How MathDeck protects your data

Everything MathDeck keeps stays in its private app storage, which
other apps cannot read. The request for exchange rates travels over
an encrypted (HTTPS) connection. MathDeck has no account to break
into and sends us nothing, so there is nothing about you on any
server of ours.

If you find a security problem, please email
[visualtales8@gmail.com](mailto:visualtales8@gmail.com) before
telling anyone else, as the
[support page](../support/#reporting-a-security-issue) explains.

---

## Children's privacy

MathDeck is suitable for users of all ages, including children
under 13. Because we do not collect personal information from
anyone, we do not knowingly collect personal information from
children. If you believe a child has somehow provided us with
personal information, please contact us and we will confirm
that none exists.

---

## Your choices and rights

Because MathDeck does not collect personal data, there is no
profile to access, correct, or delete on our side. Everything
the app remembers is on your phone, and you are in control of
it through the app's own controls and your phone's settings.

If you live in a region with privacy laws such as the GDPR and UK
GDPR, India's Digital Personal Data Protection Act, 2023, or the
privacy laws of California and other US states, those rights still
apply. Since we hold no personal data about you, there is nothing
to access, correct or delete on our side, but we will confirm that
in writing within 30 days of your email. We do not sell or share
personal data, and MathDeck makes no automated decisions about
you.

---

## This website

This website, where our policies live, is hosted on GitHub Pages.
It sets no cookies, runs no analytics and loads nothing from other
websites. GitHub, which hosts it, logs visitors' IP addresses to
keep its service secure, as the
[GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
describes.

---

## Changes to this policy

If we ever change how the app handles information, we will
update this policy and update the app version. The "Last
updated" date above always reflects the most recent revision,
and each change is listed under Revision history below.

---

## Contact

Questions? Email
[visualtales8@gmail.com](mailto:visualtales8@gmail.com).
