---
layout: page
title: ReCall
permalink: /apps/recall/
---

<section class="page-intro app-intro" aria-labelledby="recall-title">
	<p class="eyebrow">Android phone app</p>
	<h2 id="recall-title">ReCall</h2>
	<p>A private phone app for your calls and contacts. Make ReCall your default phone app and it places and answers your calls, including on the lock screen, shows every call in Recents as soon as it ends, and keeps your contacts and favorites close. It also shows summaries of your own calls, worked out on your phone. ReCall has no internet access.</p>
</section>

- Platform: Android 10 or later, on a phone that can make calls
- Version: 1.1.0
- Store listing: _coming soon_

## Links

- [Privacy policy](privacy/)
- [Terms of use](terms/)
- [Support](support/)

## Your phone app

- **Dialing** — a keypad with as-you-type formatting, key tones, suggestions from your contacts and recents, and paste. Long-press 0 for `+` and 1 for voicemail. On a dual-SIM phone, choose the SIM for each call. A phone number tapped in another app opens the keypad with the number filled in; ReCall never calls until you press Call.
- **Answering** — incoming calls fill the screen, on the lock screen too, or show as a notification while you are using your phone. Answer or decline from either.
- **In a call** — mute, speaker, the keypad for phone menus, hold, and your choice of audio: the earpiece, the speaker, a wired headset or Bluetooth. The screen turns off when you hold the phone to your ear.
- **Call waiting** — answer a second call while the first waits on hold, or end the first and answer. Swap between two calls, or add a call.
- **Real-time Recents** — every call appears as soon as it ends, with back-to-back calls from the same caller grouped, an All / Missed filter, your favorites, a summary of today, and a banner while a call is in progress.
- **Contacts and favorites** — your A–Z address book with search, and a card for each contact with a star for favorites. Save a new number with **Create new contact** or **Add to existing contact**, which open your contacts app.
- **Missed calls** — ReCall's own missed-call notifications, with **Call back** and **Message**.
- **Blocking** — block or unblock a number from Recents or from its call details. ReCall uses Android's own blocked-numbers list.
- **Deleting history** — delete a row in Recents, every call with one number, or your whole call history.

## Summaries of your own calls

Alongside the phone, ReCall turns your own call history into summaries, all worked out on your phone:

- **Overview** — your totals at a glance: calls, talk time, average call length, your mix of incoming, outgoing, missed and rejected calls, the hours you call most and your top contacts, plus a weekly recap you can share as an image.
- **Insights** — records such as your longest call and busiest day, call streaks, this week compared with last, your weekly rhythm, and automatic highlights.
- **Timeline** — search by name or number, call volume over time, your busiest days, how long your calls usually last, and a day-by-hour heatmap.
- **Top people** — in the Contacts tab, the people you call, ranked by number of calls, talk time or most recent call.
- **Call details** — for any number: its calls, talk time, a 30-day trend and a private note.

The weekly recap image holds only your own totals and, if you set one, your own profile name and photo. It never shows a contact's name, number or photo. ReCall shows only this phone's calls; it is not a tool for monitoring anyone.

## Becoming your phone app

ReCall works only as your default phone app. The first time you open it, ReCall explains what that means; tap **Set as default phone app** and choose ReCall in Android's own dialog. Android then gives ReCall access to your call log, contacts and phone. ReCall never asks for any of them before that, and it shows no calls until it is your phone app.

You can switch back at any time in your phone's settings (**Settings → Apps → Default apps → Phone app** on most phones). When you do, ReCall stops reading your calls and deletes everything it stored from them, including your notes and favorites. Your call log and contacts stay in Android, where your other phone app can use them.

**Requirements:** Android 10 or later, on a phone that can make calls.

**No internet:** ReCall does not request Android's internet permission, so it cannot send anything over the internet. No account, no ads, no analytics, no tracking. Nothing leaves your phone unless you choose to share it; the [privacy policy](privacy/) has the details.

## Permissions

Android grants the call log, contacts, phone and notification permissions when you make ReCall your default phone app. It allows full-screen calls for calling apps unless you turn them off. The last two below are granted when you install ReCall.

- **Call log** (`READ_CALL_LOG`, `WRITE_CALL_LOG`) — to show Recents, call details, missed calls and the summaries of your own calls; to mark missed calls as seen; and to delete calls when you ask.
- **Contacts** (`READ_CONTACTS`) — to show callers' names and photos, your contacts list and search, and your favorites. ReCall never changes your contacts.
- **Phone** (`CALL_PHONE`, `READ_PHONE_STATE`) — to place calls, choose a SIM, and learn when a call was missed.
- **Notifications** (`POST_NOTIFICATIONS`) — to show incoming calls, the call in progress and missed calls.
- **Full-screen calls** (`USE_FULL_SCREEN_INTENT`) — to show an incoming call over the lock screen. If you turn this off, incoming calls show as a notification.
- **Phone-call service** (`FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_PHONE_CALL`) — to keep the call notification and controls while a call is ringing, active or on hold.
- **Keep awake** (`WAKE_LOCK`) — to turn the screen off while you hold the phone to your ear.

ReCall does not ask for internet access, your microphone, camera or location, SMS, nearby devices, drawing over other apps, or permission to change your contacts. Call audio, including Bluetooth, is switched through Android's calling service, and blocking uses Android's own blocked-numbers list, which the default phone app may edit; neither needs another permission.
