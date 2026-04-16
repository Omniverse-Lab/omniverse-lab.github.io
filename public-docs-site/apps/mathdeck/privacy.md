---
layout: page
title: MathDeck · Privacy Policy
permalink: /apps/mathdeck/privacy/
---

**App name:** MathDeck
**Package name:** `com.procalc.app`
**Publisher:** Omiverse Labs
**Contact:** [support@omiverselabs.com](mailto:support@omiverselabs.com)
**Effective date:** 2026-04-16
**Last updated:** 2026-04-16

This Privacy Policy describes how the MathDeck Android application
("MathDeck", "the app", "we", "us", "our") handles information on
your device. By using MathDeck you agree to the practices described
here.

> **Plain-English summary:** MathDeck is a calculator. It does not
> collect, upload, or sell your personal data. The only network
> request it makes is to a public currency exchange-rate service,
> and only if you open the Currency Converter screen.

---

## 1. Information We Collect

MathDeck does **not** collect, transmit, or store any personally
identifiable information (PII) on any server controlled by us.
MathDeck does **not** create user accounts, profiles, or log-ins.

The only data the app handles is created by you, stays on your
device, and is used purely to deliver in-app functionality:

| Category | What | Where it lives | Why |
|---|---|---|---|
| Calculation history | Your past calculations (inputs, results, calculator mode, timestamp) | Local Room database | Lets you view, filter, and delete prior calculations in the History screen |
| App preferences | Theme (light/dark), haptic & sound toggles, selected profile (Pro / Simple / Custom), visible calculator modes | Local DataStore / SharedPreferences | Remembers your settings between launches |
| Cached currency rates | USD-base exchange rates from the last successful fetch and the fetch timestamp | Local SharedPreferences | Lets Currency Converter work offline after one successful refresh |

You can remove all of this data at any time by:

- Deleting individual entries from the in-app **History** screen, or
- Using Android's **Settings > Apps > MathDeck > Storage > Clear storage / Clear data**, or
- Uninstalling the app.

---

## 2. Information We Do **Not** Collect

We do not collect, and the app does not send, any of the following:

- Name, email address, phone number, postal address
- Contacts, calendar, call logs, SMS
- Photos, videos, or any media from your device
- Precise or approximate location
- Microphone or camera input
- Device identifiers (Advertising ID, IMEI, MAC address, serial)
- Account credentials or passwords
- Biometrics, health measurements, or fitness data entered into the
  Health calculator (BMI, body metrics, etc. are computed locally
  and are **not** transmitted)
- Financial inputs (EMI, interest, ROI calculations stay on-device)
- Any form of analytics, telemetry, or crash-report payload

There are no third-party SDKs for analytics, advertising,
attribution, or crash reporting bundled into MathDeck.

---

## 3. Network Access

MathDeck requests the Android `INTERNET` permission for **one
purpose only**: fetching public currency exchange rates.

| Aspect | Detail |
|---|---|
| Endpoint | `https://open.er-api.com/v6/latest/USD` |
| Provider | Open Exchange Rates Open API (`er-api.com`) -- free, unauthenticated public endpoint |
| When the call happens | Only when you open the Currency Converter screen and trigger a refresh |
| What is sent | Nothing from you. No query parameters, cookies, headers, or identifiers are attached. Standard HTTPS TLS connection only. |
| What is received | A JSON object of USD-based exchange rates |
| Logging on our side | None -- we operate no backend |

If you never open the Currency Converter, MathDeck makes **zero
outbound network requests**.

No request from MathDeck contains any user-generated content
(calculator inputs, history entries, settings, etc.).

---

## 4. Permissions

| Permission | Why we request it |
|---|---|
| `android.permission.INTERNET` | To fetch public currency exchange rates for the Currency Converter screen |

MathDeck does **not** request any of the runtime "dangerous"
permissions (location, camera, microphone, contacts, storage
scoped outside its sandbox, SMS, phone, calendar, etc.).

---

## 5. Children's Privacy

MathDeck is suitable for general audiences, including users
under 13. Because the app does not collect personal information
from any user, it also does not knowingly collect personal
information from children. We comply with the U.S. Children's
Online Privacy Protection Act (COPPA) and Google Play's
Families policy.

If a parent or guardian believes their child has somehow
provided us with personal information, please contact us and
we will delete any records (noting that, by design, we do not
hold any).

---

## 6. Data Security

Because MathDeck stores all user data locally on the device, its
security is governed by Android's application sandbox:

- Per-app private storage is isolated from other apps.
- Network traffic for the one external endpoint is sent over
  HTTPS (TLS 1.2+).
- Release builds are compiled with R8 code shrinking and
  obfuscation and signed with a production keystore.
- Release builds have debug logging stripped; no verbose log
  lines survive into production.

We do not hold any personal data on a server, and therefore
there is no server-side breach risk attributable to us.

---

## 7. Third-Party Services

| Service | Role | Data shared |
|---|---|---|
| `open.er-api.com` (Open Exchange Rates Open API) | Returns public USD-based exchange rates | None from the user. Only a standard anonymous HTTPS GET. |

We do **not** integrate with advertising networks, analytics
providers, crash reporters, A/B testing services, attribution
SDKs, social-login providers, or any similar third-party
services.

---

## 8. Data Retention and Deletion

- On-device data (history, settings, cached rates) persists
  until you delete it via the in-app controls, clear the app's
  storage from Android Settings, or uninstall the app.
- Uninstalling MathDeck removes all data the app has stored.
- Because we do not operate a backend, there is no server-side
  retention or deletion request to make.

---

## 9. Your Rights

Because MathDeck does not collect personal data, GDPR / CCPA /
other privacy-law "data subject" rights (access, rectification,
erasure, portability) apply only to on-device data, which is
already under your direct control through the Android operating
system and the in-app **History** and **Settings** screens.

If you have any questions or concerns about your rights, email
us at [support@omiverselabs.com](mailto:support@omiverselabs.com).

---

## 10. Changes to This Policy

We may update this policy from time to time. The "Last updated"
date at the top of this document reflects the most recent
revision. If we make material changes (for example, adding a
new network service or analytics SDK), we will update the
policy and bump the app's version. Continued use of MathDeck
after an update means you accept the revised policy.

---

## 11. Contact

For any questions or concerns about this policy:

- **Email:** [support@omiverselabs.com](mailto:support@omiverselabs.com)
- **Publisher:** Omiverse Labs
- **App listing:** [Google Play](https://play.google.com/store/apps/details?id=com.procalc.app)

---

## Appendix: Google Play Data Safety Summary

This app's Data Safety declaration on Google Play is:

- **Does this app collect or share any of the required user data types?** **No**
- **Is all user data encrypted in transit?** **Yes** (the only network request is HTTPS-only)
- **Do you provide a way for users to request that their data be deleted?** **Yes** -- users can clear history in-app or uninstall to remove all data; no server-side data exists
