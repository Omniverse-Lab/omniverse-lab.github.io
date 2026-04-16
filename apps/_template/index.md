---
layout: page
title: TEMPLATE_APP_NAME
permalink: /apps/TEMPLATE_APP_SLUG/
---

<!-- The layout already renders the title above; do not add a body H1. -->

<!--
================================================================
App template
----------------------------------------------------------------
Duplicate this folder to apps/<your-app-slug>/ and search-replace:

  TEMPLATE_APP_NAME      -> "MyApp"
  TEMPLATE_APP_SLUG      -> "myapp"  (URL segment, lowercase)
  TEMPLATE_PACKAGE       -> "com.omiverselabs.myapp"
  TEMPLATE_PLATFORM      -> "Android" or "iOS" or "Web"
  TEMPLATE_MIN_VERSION   -> "Android 8.0+"
  TEMPLATE_SUMMARY       -> one-sentence description

Then update the permalink in every file's front-matter to match
the new slug. The _config.yml already uses `permalink: pretty`,
so the URLs resolve to /apps/<slug>/privacy/ etc. automatically.
================================================================
-->

TEMPLATE_SUMMARY

- **Platform:** TEMPLATE_PLATFORM
- **Minimum version:** TEMPLATE_MIN_VERSION
- **Package / Bundle ID:** `TEMPLATE_PACKAGE`
- **Publisher:** Omiverse Labs

## Useful links

- [Privacy policy](privacy/)
- [Terms of use](terms/)
- [Support](support/)
- Store listing: _add link after publish_

## What TEMPLATE_APP_NAME does

_Replace this section with 3-6 bullets describing key features._

All data stays on your device. No sign-up, no ads, no tracking
(unless your app says otherwise -- see the Privacy Policy).
