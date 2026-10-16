---
layout: doc
title: ReCall · Privacy Policy
permalink: /apps/recall/privacy/
app: ReCall
app_slug: recall
doc: privacy
effective: 2026-07-16
updated: 2026-10-15
applies_to: ReCall for Android
package: io.github.omniverse_lab.recall
publisher: OmniVerse Labs
contact: visualtales8@gmail.com
facts_scope: ReCall 1.2.0 and later
facts:
  - label: Caller names
    value: Off unless you turn it on
    note: Optional. List your own number with a name you choose, and see the names other ReCall users listed.
  - label: Data sent to OmniVerse Labs
    value: Only with Caller names on
    note: Your number, the name you choose, and the numbers of unknown callers to look up. Never your contacts or call history.
  - label: Access to your calls and contacts
    value: Only as your default phone app
    note: Android grants it when you choose ReCall. Switch apps and ReCall deletes what it stored from your calls and contacts.
  - label: Internet access
    value: Only for Caller names
    note: Until you turn Caller names on, ReCall does not connect to the internet.
  - label: Ads, analytics, crash reporting
    value: None
    note: No SDK for any of them, and no advertising ID.
  - label: Where your data is kept
    value: On your phone
    note: Your call log and contacts stay there. A Caller names listing is stored in Mumbai; sign-in runs in the US.
  - label: Deleting your data
    value: Any time
    note: Turn Caller names off, use Delete all ReCall data, or ask on the web. Choosing another phone app deletes what ReCall stored from your calls.
---

> **The short version:** ReCall is a phone app. It places and
> answers your calls, and shows your recent calls, your contacts
> and summaries of your own calls. As your default phone app,
> Android gives ReCall access to your call log, contacts and
> phone. ReCall keeps them on this device and never uploads your
> contacts or your call history. If you switch to another phone
> app, ReCall stops reading your calls and deletes everything it
> stored from them, including your notes and favorites.
>
> ReCall has no ads, no analytics SDK and no export. Nothing
> leaves your phone unless you choose: a single number you hand
> to another app, your weekly recap image, or what Caller names
> sends once you turn it on.
>
> **Caller names** is optional and off until you turn it on. It
> lists your own phone number with a name you choose, and shows
> you the names other ReCall users listed for their own numbers.
> Turning it off deletes your listing and your account.

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
- **Internet** (`INTERNET`) — only for Caller names, after you
  turn it on. Until then ReCall does not connect to the internet.

ReCall does not record calls and cannot listen to them: it has no
microphone permission.

---

## On this phone

ReCall reads, stores and summarizes your call log and contacts on
your phone, and never uploads your contacts or your call history.
It contains no advertising, analytics or crash-reporting SDK, and
it does not use an advertising ID. There is no export.

ReCall requests Android's `INTERNET` permission for Caller names
only. Until you turn Caller names on, ReCall does not connect to
the internet at all: it creates no account and does not start
Firebase, the Google service Caller names runs on.

ReCall's typefaces come from the font service of Google Play
services on your phone. ReCall asks it for a font by name and
tells it nothing about you.

---

## Caller names (optional)

Caller names is off until you turn it on in **Settings → Caller
names**. Before anything is sent, ReCall shows what it does:

- When Caller names is on, ReCall sends your phone number and the
  name you choose to Omniverse Labs' server on Google Firebase.
- To name callers who are not in your contacts, it also sends
  their numbers. The server does not keep the numbers it looks up.
- Other ReCall users who turned on Caller names see your name when
  you call them or appear in their Recents.
- ReCall never sends your contacts or your call history.
- Turning Caller names off deletes your listing and your account.

You then tick "I agree" and "I am 18 or older". Leaving the screen
is never consent, and nothing is sent until you tap **Send code**.
If you leave the setup after that and before you finish, ReCall
deletes what it sent: at once, or, if ReCall was closed in the
middle, the first time it starts a day or more later.

### What Caller names sends, where, and what is kept

- **Your phone number** goes to Firebase Authentication, which
  texts you a code to prove the number is yours and creates your
  account. Firebase Authentication runs in Google's data centres
  in the United States. It keeps your number and your account ID
  until you turn Caller names off.
- **The name you choose** goes to ReCall's server: Cloud Functions
  and Cloud Firestore in Mumbai, India (Google Cloud region
  asia-south1). It keeps your listing: the name, your account ID,
  the version of these terms you agreed to, when you listed it and
  last changed it, and a code made from your number with a secret
  key (it is still personal data), until you turn Caller names
  off.
- **The numbers of callers who are not in your contacts** go to
  ReCall's server, to look up the names their owners listed.
  ReCall asks when such a number calls you or appears in your
  Recents, for at most 300 numbers a day and 30 a minute. The
  server does not keep the numbers it looks up. It counts how many
  numbers you looked up each day, to enforce the limit, and
  usually deletes that count within two days.
- **A report**, when you tap **Report name**, goes to ReCall's
  server, which keeps that you reported that listing, and when,
  until you or its owner turn Caller names off.

Each request carries a Firebase App Check token from Google Play
Integrity, which confirms it comes from a genuine copy of ReCall.
Google Cloud keeps standard request logs (time, IP address and user
agent) for up to 30 days. ReCall's own server logs record counts
only, never numbers or names. Google processes all of this for
OmniVerse Labs.

**Who sees your name.** Only other ReCall users who turned Caller
names on and listed themselves. They see it when you call them or
appear in their Recents, labelled "Suggested name · set by its
owner", and only for a number they have not saved as a contact: a
saved contact name always wins, and ReCall never writes a
suggestion into anyone's contacts. Anyone who sees your name can
report it; reports from three different people hide it until we
review it.

**On your phone.** ReCall keeps a name it looked up for 7 days,
and the fact that a number has no listing for 1 day, in its
private database. It keeps when you agreed and your listed number
and name in a settings file of its own, and Firebase keeps your
sign-in.

**If ReCall stops being your phone app.** ReCall deletes the names
it looked up and stops looking up numbers, but your listing stays
until you turn Caller names off, so others can still see your
name. Turn Caller names off first if you want it gone.

### Turning Caller names off and deleting your data

- **In ReCall:** **Settings → Caller names → Turn off and
  delete.** ReCall clears the names it saved at once, then deletes
  your listing, your account, your reports and your lookup counts
  from the server, and signs you out. Without a connection it
  shows "Deleting… we will finish when you are online" and
  finishes the next time it starts with a connection.
- **Delete all ReCall data**, in **Settings → Data & privacy**,
  turns Caller names off the same way.
- **Without the app**, for example after uninstalling it: see
  [Delete your Caller names data](../delete/), or email
  [visualtales8@gmail.com](mailto:visualtales8@gmail.com) with the
  phone number you listed. We confirm the number is yours and
  delete the listing, the account, your reports and your lookup
  counts within 30 days.

Uninstalling ReCall does not delete your listing by itself.

---

## When something leaves your phone by your choice

Apart from Caller names, only when you choose to, and only to the
app you pick:

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
- **Caller names**, if you turned it on: when you agreed, your
  listed number and name, your Firebase sign-in, and the names it
  looked up (above).

---

## How long ReCall keeps it

Everything ReCall stored from your call log and contacts (the
copies, the activity journal, your notes, labels and favorites,
the names Caller names looked up, and any recap image) is deleted:

- when ReCall stops being your default phone app, or when you
  turn off its Call logs or Contacts permission. If ReCall is not
  running at that moment, it deletes the data the next time it
  starts.
- when you tap **Delete all ReCall data** in **Settings → Data &
  privacy**, which also resets your settings and profile and turns
  Caller names off. While ReCall is still your phone app, it then
  reads your call log again to show your recents.
- when you uninstall ReCall, because Android deletes its storage.

After deleting, ReCall compacts its database, so deleted entries
do not linger in the file.

**Clear call history**, in **Settings → Data & privacy**, deletes
every call from your phone's call log, for every app, not only
from ReCall's copy.

---

## Backups

ReCall's database, its settings, its Caller names file and your
Firebase sign-in are excluded from Android's cloud backup and from
device-to-device transfer, and your profile photo is kept where
Android never backs it up. Restoring a backup or moving to a new
phone does not bring ReCall's data back. Once ReCall is your phone
app there, it reads that phone's call log.

---

## Children

ReCall is not directed at children. Caller names is only for
people 18 or older, who confirm it before turning it on. Without
Caller names, ReCall collects no data from anyone.

---

## Your choices and rights

Without Caller names, ReCall processes everything on your phone
and sends nothing to us, so OmniVerse Labs holds no personal data
about you. With Caller names on, we hold your listing, your
account, your reports and your lookup counts, as described above.
You can see your listing in **Settings → Caller names**, correct
your name with **Edit name**, and delete everything with **Turn
off and delete** or by email. You control the rest of ReCall's
data on your phone: delete it with **Delete all ReCall data**, by
choosing another phone app, or by uninstalling ReCall.

---

## Earlier versions

This policy describes ReCall 1.1.0 and later; Caller names exists
from 1.2.0. Versions before 1.1.0 were a call-statistics app, not
a phone app: with your permission they read your call log and
contacts and showed statistics about your calls. They worked the
same way on privacy, entirely on your phone, with no internet
permission, no account and no advertising or analytics SDK. They
also let you export your calls as a CSV file, or share an image
of one contact's call statistics with that contact's name and
photo, only when you chose to; 1.1.0 removed both. The weekly
recap image, which earlier versions also offered, is now the only
image ReCall shares. The first time 1.1.0 starts, it deletes what
earlier versions stored from your calls, including notes,
favorites and any export or image files left in ReCall's storage,
because ReCall now keeps nothing from your calls unless it is your
phone app.

---

## Changes

We publish changes to this policy in the app and at the same web
address, and update the "Last updated" date above. If we change
what Caller names does with your data, ReCall asks you to agree
again before it looks up any more names.

---

## Contact

Questions about this policy or your data:
[visualtales8@gmail.com](mailto:visualtales8@gmail.com)
