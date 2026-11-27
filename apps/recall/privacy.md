---
layout: doc
title: ReCall · Privacy Policy
permalink: /apps/recall/privacy/
app: ReCall
app_slug: recall
doc: privacy
summary: ReCall keeps your calls and contacts on your phone. Caller names, which stays off until you turn it on, is the only part of ReCall that sends anything to us.
effective: 2026-07-16
updated: 2026-11-26
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
revisions:
  - date: 2026-11-26
    summary: Added Caller names, an optional feature from ReCall 1.2.0, and new sections on who is responsible, the service providers we use, legal bases, international transfers, security, and your rights where you live.
  - date: 2026-10-07
    summary: Rewritten for ReCall 1.1.0, which became a phone app. What earlier versions did is described under Earlier versions.
  - date: 2026-07-16
    summary: First published, for the call-statistics version of ReCall.
retention:
  - data: Copy of your call log, and of your contacts' names and numbers
    where: Your phone, in ReCall's private storage
    leaves: Never
    until: ReCall stops being your phone app, you turn off its Call logs or Contacts permission, you use **Delete all ReCall data**, or you uninstall ReCall
  - data: Your notes, labels and favorites
    where: Your phone, in ReCall's private storage
    leaves: Never
    until: The same as the copy of your call log
  - data: Activity journal (up to 500 recent actions, with no names or numbers)
    where: Your phone, in ReCall's private storage
    leaves: Never
    until: The same as the copy of your call log
  - data: Settings, and the profile name, date of birth and photo you add
    where: Your phone, in ReCall's private storage
    leaves: Only the profile name and photo, inside a weekly recap image you choose to share
    until: You use **Delete all ReCall data**, or you uninstall ReCall
  - data: Your latest weekly recap image
    where: Your phone, in ReCall's cache
    leaves: Only to the app you pick when you share it
    until: Your next share replaces it, and it goes with the copy of your call log
  - data: Names Caller names looked up
    where: Your phone, in ReCall's private storage
    leaves: Never
    until: 7 days for a name and 1 day for a number with no listing, or at once when you turn Caller names off or ReCall stops being your phone app
  - data: Caller names settings (when you agreed, your listed number and name, and your Firebase sign-in)
    where: Your phone, in ReCall's private storage, left out of backups
    leaves: Never. This is ReCall's own copy
    until: You turn Caller names off (Delete all ReCall data does too), or you uninstall ReCall
  - data: Your phone number and account ID
    where: Firebase Authentication, United States
    leaves: Yes, once you turn Caller names on
    until: You turn Caller names off, or we act on your emailed request (within 30 days)
  - data: Your listing (your name, account ID, the terms version you agreed to, dates, and a code made from your number)
    where: ReCall's server, Mumbai, India
    leaves: Yes, once you turn Caller names on
    until: You turn Caller names off, or we act on your emailed request (within 30 days)
  - data: Numbers of callers not in your contacts
    where: Sent to ReCall's server for a lookup
    leaves: Yes, while Caller names is on
    until: Not kept. The server uses each number for the lookup only
  - data: Your daily lookup count
    where: ReCall's server, Mumbai, India
    leaves: Counted on the server
    until: Usually deleted within two days, and at once when you turn Caller names off
  - data: Reports you make with **Report name**
    where: ReCall's server, Mumbai, India
    leaves: Yes, when you report a name
    until: You or the listing's owner turn Caller names off
  - data: Request logs (time, IP address and user agent)
    where: Google Cloud
    leaves: Yes, with each Caller names request
    until: Up to 30 days
providers:
  - name: Google
    service: Firebase Authentication
    use: Texts you a sign-in code and keeps your phone number and account
    where: United States
  - name: Google
    service: Cloud Functions and Cloud Firestore
    use: Stores Caller names listings and reports, and answers lookups
    where: Mumbai, India (Google Cloud region asia-south1)
  - name: Google
    service: Firebase App Check, with Google Play Integrity
    use: Confirms that each Caller names request comes from a genuine copy of ReCall
    where: Google Play services on your phone, and Google's servers
  - name: Google
    service: Google Cloud logging
    use: Keeps standard request logs for up to 30 days
    where: Google Cloud
  - name: Google
    service: Font provider in Google Play services
    use: Supplies ReCall's typefaces. ReCall asks for a font by name and sends nothing about you
    where: On your phone
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

## Who is responsible

OmniVerse Labs publishes ReCall and decides how the personal data
described in this policy is used, so we are responsible for it
(the "controller" under laws such as the GDPR). For any question
or request about your data, email
[visualtales8@gmail.com](mailto:visualtales8@gmail.com).

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

You then tick "I agree to the Caller names terms and the privacy
policy" and "I am 18 or older". Leaving the screen is never
consent, and nothing is sent until you tap **Send code**.
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
  ReCall asks when you get or place a call with such a number,
  and when it appears in your Recents or in call details, for at
  most 300 numbers a day and 30 a minute. The
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
names on and listed themselves. They see it on the call screen
when you call them or they call you, and in their Recents and call
details, labelled "Suggested name · set by its owner", and only
for a number they have not saved as a contact: a saved contact
name always wins, and ReCall never writes a suggestion into
anyone's contacts. Anyone who sees your name can report it with
**Report name**, which ReCall offers in Recents, in call details
and on a call's ended screen, but not while a call is ringing or
live. Reports from three different people hide it until we review
it.

**On your phone.** In its private database ReCall keeps each
number it looked up, the name found and when it asked: a name for
7 days, and the fact that a number has no listing for 1 day. It
keeps when you agreed and your listed number and name in a
settings file of its own, and Firebase keeps your sign-in.

**If ReCall stops being your phone app.** ReCall deletes the names
it looked up and stops looking up numbers, but your listing stays
until you turn Caller names off, so others can still see your
name. Turn Caller names off first if you want it gone.

### Turning Caller names off and deleting your data

- **In ReCall:** **Settings → Caller names → Turn off and
  delete.** ReCall clears the names it saved at once, then deletes
  your listing, your account, your reports and your lookup counts
  from the server, and signs you out. Without a connection it
  shows "Deleting… we will finish when you are online" and tries
  again each time ReCall starts, until the server confirms.
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
  listed number and name, your Firebase sign-in, and the numbers
  and names it looked up (above).

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

## Everything ReCall handles, in one table

What ReCall keeps, where, whether it ever leaves your phone, and
how long it stays.

{% include legal/table.html rows=page.retention cols="data:Data|where:Where it is kept|leaves:Leaves your phone|until:Kept until" caption="Data ReCall handles and how long it is kept" %}

---

## Backups

ReCall's database, its settings, its Caller names file and your
Firebase sign-in are excluded from Android's cloud backup and from
device-to-device transfer, and your profile photo is kept where
Android never backs it up. Restoring a backup or moving to a new
phone does not bring ReCall's data back. Once ReCall is your phone
app there, it reads that phone's call log.

---

## Service providers

Caller names runs on Google services, which process its data for
OmniVerse Labs under Google's data processing terms for Firebase
and Google Cloud. Without Caller names, only the font service on
your phone is involved, and it receives nothing about you.

{% include legal/table.html rows=page.providers cols="name:Provider|service:Service|use:What it does for ReCall|where:Where" caption="Services that handle data for ReCall" %}

We do not sell your personal data, share it for advertising, or
give it to anyone else, unless the law requires us to.

---

## Legal bases

Where the law asks us for a reason (a "legal basis") to use your
personal data, as the GDPR does in the European Economic Area and
the UK, these are ours:

- **Your listing, your account, and lookups for you:** your
  consent, which you give when you turn Caller names on, and our
  agreement with you in the
  [Caller names terms](../terms/#caller-names). You can withdraw
  your consent at any time by turning Caller names off.
- **The numbers of callers looked up for you:** our legitimate
  interest, and yours, in showing who is calling. The server uses
  each number for that lookup only and does not keep it.
- **Security and preventing abuse** (App Check, the daily limits,
  reports and request logs): our legitimate interest in keeping
  Caller names safe and working.

Everything else ReCall does happens on your phone, and OmniVerse
Labs never receives it.

---

## International transfers

Caller names keeps your listing in India and your sign-in in the
United States. If you live somewhere else, your Caller names data
is transferred to those countries, whose data protection laws may
differ from yours. Google processes it for us under its Firebase
and Google Cloud data processing terms, which include the European
Commission's Standard Contractual Clauses for data from the
European Economic Area, the UK and Switzerland.

---

## How we protect your data

- **On your phone.** ReCall keeps its data in private app storage
  that other apps cannot read, keeps it out of backups, and
  compacts its database after deleting, so deleted entries do not
  linger.
- **On the way.** Caller names talks to Google's services only
  over encrypted (HTTPS) connections.
- **On the server.** Your listing is found by a code made from
  your number with a secret key. The server does not keep the
  numbers it looks up, and its own logs record counts, never
  numbers or names. App Check turns away requests that do not come
  from a genuine copy of ReCall, and daily limits stop anyone from
  looking up numbers in bulk.

No system is perfectly secure. If you find a security problem,
please email [visualtales8@gmail.com](mailto:visualtales8@gmail.com)
before telling anyone else, as the
[support page](../support/#reporting-a-security-issue) explains.

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

### Wherever you live

You can ask us what Caller names data we hold about you, ask us to
correct or delete it, and withdraw your consent by turning Caller
names off. Email
[visualtales8@gmail.com](mailto:visualtales8@gmail.com) with the
phone number you listed. We confirm that the number is yours before
we act, and reply within 30 days.

### European Economic Area, United Kingdom and Switzerland

You also have the right to restrict or object to how we use your
data, and to receive your listing in a portable format. You can
complain to your data protection authority, though we would like
the chance to put things right first.

### India

Under the Digital Personal Data Protection Act, 2023, you can ask
for a summary of your data and how it is used, have it corrected or
erased, nominate someone to act for you, and raise a grievance with
us by email. If we do not resolve it, you can complain to the Data
Protection Board of India.

### United States

If you live in California or another state with a consumer privacy
law, you can ask to know, correct and delete your personal data. We
do not sell your personal data or share it for targeted
advertising, and we treat you the same whether or not you use these
rights.

### Automated decisions

ReCall makes no decision about you that has legal or similarly
significant effects by automated means alone. The one automatic
step: a name that three different people report is hidden until we
review it.

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

## This website

This website, where our policies live, is hosted on GitHub Pages.
It sets no cookies, runs no analytics and loads nothing from other
websites. GitHub, which hosts it, logs visitors' IP addresses to
keep its service secure, as the
[GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
describes.

---

## Changes

We publish changes to this policy in the app and at the same web
address, update the "Last updated" date above, and list each change
under Revision history below. If we change what Caller names does
with your data, ReCall asks you to agree again before it looks up
any more names.

---

## Contact

Questions about this policy or your data:
[visualtales8@gmail.com](mailto:visualtales8@gmail.com)
