# DAVID Product Page (GitHub Pages)

Static site for the DAVID prototype, intended to be published via GitHub Pages.

## Structure

- `index.html` – one‑page product overview
- `assets/styles.css` – minimal responsive CSS with light/dark theme
- `assets/script.js` – dark‑mode toggle + footer year
- `assets/favicon.svg` – simple favicon

## Local Preview

Open `index.html` in a browser or serve the folder with any static server, e.g.:

```bash
cd Site/penny-pinchers.github.io
python3 -m http.server 8080
# open http://localhost:8080
```

## Publishing Options

1) User/Org site (recommended)
- Create a repo named `penny-pinchers.github.io` under your GitHub org or user.
- Copy the contents of this folder to the root of that repo.
- Enable Pages: Settings → Pages → Source: `Deploy from a branch`, Branch: `main` → `/ (root)`.
- Your site will be served at `https://penny-pinchers.github.io/`.

2) Project site inside an existing repo
- Create a `gh-pages` branch (or use `/docs` folder) and point Pages to it.
- If served at a subpath (e.g., `/DECO3500/`), keep all links relative.

## Customizing

- Replace the hero Open Graph image reference in `index.html` with a real asset (place under `assets/`).
- Update GitHub links if your repo URL differs.
- Edit sections (`Features`, `How It Works`, `Values`, `Demo`, `Team`) to match your iteration.

## Accessibility

- Semantic HTML, skip link, high‑contrast defaults, and reduced motion friendliness.
- Please run a quick pass with Lighthouse/axe after adding images (ensure alt text).

