---
layout: page
title: ReCall · Privacy Policy
permalink: /apps/recall/privacy/
---

**Effective date:** 2026-07-16
**Last updated:** 2026-10-07
**Applies to:** ReCall for Android (`io.github.omniverse_lab.recall`)
**Publisher:** OmniVerse Labs
**Contact:** [visualtales8@gmail.com](mailto:visualtales8@gmail.com)

> **The short version:** ReCall is a phone app. It places and
> answers your calls, and shows your recent calls, your contacts
> and summaries of your own calls. As your default phone app,
> Android gives ReCall access to your call log, contacts and
> phone. Everything stays on this device. ReCall has no internet
> access. If you switch to another phone app, ReCall stops
> reading your calls and deletes everything it stored from them,
> including your notes and favorites.
>
> ReCall has no account, no ads, no analytics SDK and no export.
> Nothing leaves your phone unless you choose to share it: a
> single number you hand to another app, or your weekly recap
> image.

---

## What ReCall accesses, and why

Android grants the call log, contacts, phone and notification
permissions when you make ReCall your default phone app, and it
allows full-screen calls for calling apps unless you turn them
off. ReCall never asks for any of them before that. If you turn
one off in Android's settings while ReCall is still your phone
app, ReCall asks for it again. When you choose another phone app,
ReCall stops using all of them at once, even any that Android
leaves granted.

- **Call log** (`READ_CALL_LOG`) — to show your recent calls,
  call details, missed calls and the summaries of your own calls
  (Overview, Insights and Timeline).
- **Changes to the call log** (`WRITE_CALL_LOG`) — to mark missed
  calls as seen once you have looked at them, so the missed-call
  alert clears, and to delete calls when you ask: a row in
  Recents, a number's history, or your whole call history.
- **Contacts** (`READ_CONTACTS`) — to show callers' names and
  photos, your contacts list and search, and your favorites.
  ReCall never changes your contacts.
- **Phone** (`CALL_PHONE`, `READ_PHONE_STATE`) — to place calls,
  choose a SIM, and learn when a call was missed.
- **Your calls while they happen** — to show who is calling and
  let you answer, hold, mute and end calls. Android connects only
  the default phone app to your calls.
- **Notifications and full-screen calls** (`POST_NOTIFICATIONS`,
  `USE_FULL_SCREEN_INTENT`) — to show incoming calls (on the lock
  screen too), the call in progress and missed calls. On a lock
  screen that hides sensitive notification content, a missed-call
  alert shows only how many calls you missed.
- **Android's blocked numbers** — to block and unblock a number
  when you ask. The list belongs to Android, not to ReCall.

ReCall does not record calls and cannot listen to them: it has no
microphone permission.

---

## On this phone only

ReCall reads, stores and summarizes everything on your phone. It
has no server and no account. It does not request Android's
`INTERNET` permission, so it cannot send anything over the
internet. It contains no advertising, analytics or
crash-reporting SDK, and it does not use an advertising ID.
OmniVerse Labs never receives any of your data. There is no
export.

ReCall's typefaces come from the font service of Google Play
services on your phone. ReCall asks it for a font by name and
tells it nothing about you.

---

## When something leaves your phone

Only when you choose to, and only to the app you pick:

- **Copy number** (in Recents) puts one phone number on
  Android's clipboard, where the app you paste it into can read
  it.
- **Message** (on a missed-call alert) opens your messaging app
  with that number filled in.
- **Call back** (on a missed-call alert) calls that number
  through Android's phone service, like any call you place.
- **Create new contact** and **Add to existing contact** open
  your contacts app with that number filled in. You decide there
  whether to save it.
- **Share weekly recap** turns your own weekly totals into an
  image: your weekly score and its change, your calls this week
  and your talk time, with the profile name and photo you gave
  ReCall, if any. It never shows a contact's name, number or
  photo. ReCall makes the image only when you tap Share weekly
  recap, and hands it only to the app you pick in Android's share
  sheet. Apart from the single-number actions above, it is the
  only thing ReCall shares.

Once you hand something to another app, that app's own privacy
policy applies.

---

## What ReCall stores on your phone

All of it stays in ReCall's private app storage, which other
apps cannot read:

- **A copy of your call log** and of your contacts' names and
  numbers, so your recents and summaries open quickly. ReCall
  rebuilds it from your phone whenever it needs to.
- **Your notes, labels and favorites**, kept by phone number. The
  numbers come from your call log and your contacts.
- **An activity journal** of up to 500 of your recent actions in
  ReCall, such as opening the app or changing a setting. It holds
  no names and no phone numbers.
- **Your settings**: the theme, display preferences, and the
  profile name, date of birth and photo you choose to add. ReCall
  keeps its own copy of the photo.
- **Your latest weekly recap image**, in ReCall's cache, once you
  have shared it. Your next share replaces it.

---

## How long ReCall keeps it

Everything ReCall stored from your call log and contacts (the
copies, the activity journal, your notes, labels and favorites,
and any recap image) is deleted:

- when ReCall stops being your default phone app, or when you
  turn off its Call logs or Contacts permission. If ReCall is not
  running at that moment, it deletes the data the next time it
  starts.
- when you tap **Delete all ReCall data** in **Settings → Data &
  privacy**, which also resets your settings and profile. While
  ReCall is still your phone app, it then reads your call log
  again to show your recents.
- when you uninstall ReCall, because Android deletes its storage.

After deleting, ReCall compacts its database, so deleted entries
do not linger in the file.

**Clear call history**, in **Settings → Data & privacy**, deletes
every call from your phone's call log, for every app, not only
from ReCall's copy.

---

## Backups

ReCall's database and settings are excluded from Android's cloud
backup and from device-to-device transfer, and your profile photo
is kept where Android never backs it up. Restoring a backup or
moving to a new phone does not bring ReCall's data back. Once
ReCall is your phone app there, it reads that phone's call log.

---

## Children

ReCall is not directed at children. It collects no data from
anyone.

---

## Your choices and rights

ReCall processes everything on your phone and sends nothing to
us, so OmniVerse Labs holds no personal data about you to
disclose, correct or delete. You control ReCall's data on your
phone: delete it with **Delete all ReCall data**, by choosing
another phone app, or by uninstalling ReCall.

---

## Earlier versions

This policy describes ReCall 1.1.0 and later. Versions before
1.1.0 were a call-statistics app, not a phone app: with your
permission they read your call log and contacts and showed
statistics about your calls. They worked the same way on privacy,
entirely on your phone, with no internet permission, no account
and no advertising or analytics SDK. They also let you export
your calls as a CSV file or share a statistics image, only when
you chose to; 1.1.0 removed both. The first time 1.1.0 starts, it
deletes what earlier versions stored from your calls, including
notes, favorites and any export or image files left in ReCall's
storage, because ReCall now keeps nothing from your calls unless
it is your phone app.

---

## Changes

We publish changes to this policy in the app and at the same web
address, and update the "Last updated" date above.

---

## Contact

Questions about this policy:
[visualtales8@gmail.com](mailto:visualtales8@gmail.com)
