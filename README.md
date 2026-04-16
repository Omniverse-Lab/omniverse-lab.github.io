# Omiverse Labs -- Public Docs Site

Public GitHub Pages site that hosts the privacy policies, terms
of use, and support pages for every Omiverse Labs app. This
repository is **public** on purpose so the URLs can be linked
from Google Play Console, the App Store, and app listings.

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
|-- _config.yml            # Jekyll config (theme, nav)
|-- index.md               # landing page, lists all apps
|-- about.md               # about Omiverse Labs
|-- contact.md             # contact info
|-- 404.md                 # custom 404
|
|-- apps/
|   |-- _template/         # copy this directory for each new app
|   |   |-- index.md
|   |   |-- privacy.md
|   |   |-- terms.md
|   |   `-- support.md
|   |
|   `-- mathdeck/          # the first app
|       |-- index.md
|       |-- privacy.md
|       |-- terms.md
|       `-- support.md
|
|-- assets/                # logos, favicons, og images
`-- .github/
    `-- workflows/
        `-- pages.yml      # optional: build & deploy via Actions
```

---

## Adding a new app

1. Duplicate `apps/_template/` to `apps/<new-app-slug>/`.
2. Edit the four Markdown files, replacing the placeholders
   (search for `TEMPLATE_`).
3. Add a link to the new app in `index.md`.
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
