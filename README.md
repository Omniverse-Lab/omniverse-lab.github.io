# OmniVerse Labs -- Public Docs Site

Public GitHub Pages site for OmniVerse Labs. It hosts the
company homepage, app catalog, privacy policies, terms of use,
and support pages for every OmniVerse Labs app. This repository
is **public** on purpose so the URLs can be linked from Google
Play Console, the App Store, and app listings.

> Source code for each app lives in its own **private** repo
> (e.g. `MathDeck-Android`). Only the public-facing policy and
> support pages live here.

Deployed URL (once GitHub Pages is enabled):
`https://<github-username-or-org>.github.io/<repo-name>/`

Recommended naming:
- Repo: `<username>.github.io` (e.g. `omniverse-lab.github.io`)
  so the site is served from a clean apex URL.
- Pages source: **Deploy from a branch** -> `main` / root.

---

## Structure

```
.
|-- README.md              # this file
|-- _config.yml            # Jekyll config (no theme)
|-- _data/apps.yml         # every app: name, summary, store link, documents
|-- index.html             # company homepage
|-- apps.html              # app catalog
|-- about.html             # about OmniVerse Labs
|-- contact.html           # contact info
|-- 404.html               # custom 404
|
|-- apps/
|   |-- _template/         # copy this directory for each new app
|   |   |-- index.md       # overview
|   |   |-- privacy.md
|   |   |-- terms.md
|   |   `-- support.md
|   |
|   |-- mathdeck/          # overview, privacy, terms, support
|   `-- recall/            # the same, plus delete.md (Caller names data)
|
|-- _layouts/site.html     # company pages (home, apps, about, contact, 404)
|-- _layouts/doc.html      # each app's overview, privacy, terms, support, delete
|-- _includes/site/        # head, top bar, footer, app icon, app card, table
|-- _sass/site/            # styles, compiled by assets/site.scss
|-- assets/                # site.scss, docs.js, fonts, hero photographs, icons
`-- .github/
    `-- workflows/
        `-- pages.yml      # optional: build & deploy via Actions
```

---

## Adding a new app

1. Duplicate `apps/_template/` to `apps/<new-app-slug>/`.
2. Edit the four Markdown files, replacing the placeholders
   (search for `TEMPLATE_`). All four use `_layouts/doc.html`: their
   front matter carries the dates, package name and contact shown in
   the page header, and the privacy page's `facts` list fills the
   "Privacy at a glance" label, which the overview page shows too.
   Keep every `facts` row true to the policy text below it, and add
   a `revisions` entry whenever the policy or terms change.
3. Add the app to `_data/apps.yml`. The top bar, footer, home page
   and Apps page list it from there. Add its icon to
   `_includes/site/app-icon.html`, and its favicon and hero
   photographs to `assets/img/legal/`. On the home page, also add a
   column to the "What each app sends us" table in `index.html`.
4. Commit & push. GitHub Pages rebuilds automatically on push
   to `main`.

---

## URLs you will reference from Play Console / App Store

Once deployed, each app gets a predictable URL pattern:

| Asset | URL |
|---|---|
| Landing | `/<base>/apps/mathdeck/` |
| Privacy policy | `/<base>/apps/mathdeck/privacy` |
| Terms of use | `/<base>/apps/mathdeck/terms` |
| Support | `/<base>/apps/mathdeck/support` |

`<base>` is empty if the repo is `<user>.github.io`, otherwise
it is `/<repo-name>`.

---

## Why a separate public repo?

| Concern | Answer |
|---|---|
| **Code privacy** | The Android app source lives in a private repo; only the policy Markdown lives in this public one. |
| **Durable URLs** | A dedicated docs repo means policy URLs survive code repo renames, archives, or open-sourcing changes. |
| **Multi-app reuse** | A single Pages site hosts every app's docs under predictable paths. |
| **SEO / trust** | Google Play crawls the privacy URL; a stable, well-branded site looks professional and avoids "URL not reachable" rejections. |

---

## Setup in under 5 minutes

See [`SETUP.md`](SETUP.md) for the one-time setup: create the
public repo, copy these files over, enable Pages, and verify
the privacy URL resolves before pasting it into Play Console.
