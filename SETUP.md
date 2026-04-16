# SETUP -- Deploying the Public Docs Site

One-time setup to turn this folder into a live GitHub Pages
site that hosts privacy policies and support pages for every
Omiverse Labs app.

---

## 1. Pick the repo name and URL

Two options, pick one:

| Option | Repo name | URL you get |
|---|---|---|
| **A. User/Org site** (cleanest) | `omniverse-lab.github.io` | `https://omniverse-lab.github.io/` |
| **B. Project site** | any other name, e.g. `docs` | `https://omniverse-lab.github.io/docs/` |

Option A looks better in Play Console and is what this repo
already uses. Option B works fine too; just uncomment `baseurl`
in `_config.yml` to match the project repo name.

---

## 2. Create the public repo

```bash
# From this folder
cd public-docs-site

# Start a fresh git repo (do NOT push the parent MathDeck repo)
git init
git add .
git commit -m "Initial public docs site"

# Create the repo on GitHub (public) and push.
# Replace <name> with the repo name chosen in step 1.
git branch -M main
git remote add origin git@github.com:<github-user-or-org>/<name>.git
git push -u origin main
```

Using the GitHub CLI:

```bash
gh repo create <github-user-or-org>/<name> --public --source=. --push
```

---

## 3. Enable GitHub Pages

1. Go to the new repo on GitHub.
2. **Settings > Pages**.
3. **Source:** `Deploy from a branch`.
4. **Branch:** `main`, **Folder:** `/` (root).
5. Save.

GitHub builds and deploys automatically; the Pages URL appears
at the top of that Settings page within 1-3 minutes.

> Alternative: to use the Actions-based workflow in
> `.github/workflows/pages.yml` (for newer Jekyll features),
> set **Source: GitHub Actions**. Nothing else needed -- the
> workflow is already committed.

---

## 4. Verify the URLs resolve

Open these in an Incognito window (important -- Play Console
checks from an anonymous crawler, not your logged-in browser):

- `<base-url>/` -- landing page with app list
- `<base-url>/apps/mathdeck/` -- MathDeck landing
- `<base-url>/apps/mathdeck/privacy/` -- privacy policy
- `<base-url>/apps/mathdeck/terms/` -- terms
- `<base-url>/apps/mathdeck/support/` -- support

All must return HTTP 200 with readable Markdown content before
you paste any URL into Play Console.

---

## 5. Paste the URL into Play Console

- Play Console > **App content > Privacy policy** >
  `<base-url>/apps/mathdeck/privacy/`
- Play Console > **Store settings > Contact details** -- the
  email is already set, but you can add `<base-url>/apps/mathdeck/`
  as the app's website.

---

## 6. Adding a new app later

```bash
cd public-docs-site
cp -R apps/_template apps/<new-app-slug>
cd apps/<new-app-slug>

# Search-replace the placeholders in index.md, privacy.md,
# terms.md, support.md. Bulk replace with sed / your editor:
sed -i '' \
  -e 's/TEMPLATE_APP_NAME/My App/g' \
  -e 's/TEMPLATE_APP_SLUG/myapp/g' \
  -e 's/TEMPLATE_PLATFORM/Android/g' \
  -e 's/TEMPLATE_SUMMARY/A short one-sentence description./g' \
  *.md

# Fix permalinks in every front-matter (they now point to
# /apps/myapp/... automatically because we replaced the slug)

# Add a row to the top-level apps table
$EDITOR ../../index.md

# Commit + push; Pages rebuilds
git add .
git commit -m "Add docs for <new-app-slug>"
git push
```

---

## 7. Optional: custom domain

If you own a domain (e.g. `example.com`):

1. DNS: add a CNAME record (or four A records for apex) per
   [GitHub Pages docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
2. Repo: create a file called `CNAME` at the root containing
   just your domain (one line, no protocol).
3. **Settings > Pages > Custom domain**: enter the same domain,
   enable **Enforce HTTPS** once the cert provisions.
4. Update `_config.yml` `url:` to the custom domain and push.
5. Re-paste the updated privacy URL into Play Console.

---

## 8. Maintenance checklist

- [ ] Privacy URL resolves (200) in Incognito
- [ ] `<base-url>` matches `_config.yml > url` (+`baseurl` if project site)
- [ ] Every app folder has `index.md`, `privacy.md`, `terms.md`, `support.md`
- [ ] `index.md` at the root lists every app
- [ ] When adding an SDK / analytics / ads to any app,
      update that app's `privacy.md` BEFORE releasing the build
      and re-submit the Data Safety form

---

## Troubleshooting

### "Your site is having problems building"
Usually a bad front-matter or a plugin not allowed by Pages.
Check the Actions tab (if using the workflow) or the Pages
section under Settings for the error.

### Links work locally but 404 on the deployed site
Most likely a `permalink` mismatch or missing trailing slash.
The `_config.yml` uses `permalink: pretty`, which serves
folder-style URLs (`/foo/` instead of `/foo.html`). Make sure
internal links end with `/`.

### `baseurl` issues on a project site
If the repo name is **not** `<user>.github.io`, uncomment
`baseurl: "/<repo-name>"` in `_config.yml`. Internal links
should use the Jekyll `relative_url` filter or relative paths
(which this template already does via `../privacy/` etc.).

### Pages still shows the old README
GitHub Pages caches aggressively. Hard-refresh with
Cmd-Shift-R, or wait 1-2 minutes after push.
