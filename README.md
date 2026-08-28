# RapidyCore public website

Static public website for **RapidyCore**, the organization behind its software products and supporting systems.

## Structure

- `index.html` — RapidyCore home, organization overview, product hierarchy, support and future-account placeholder
- `solvar.html` — dedicated Solvar product presentation under RapidyCore → Roblox → Blade Ball
- `privacy.html` / `terms.html` — legal pages with the shared RapidyCore layout
- `styles.css` — responsive visual system, motion preferences, and mobile navigation styles
- `app.js` — mobile navigation, restrained section reveals, sticky-header state, and footer year
- `assets/` — existing Solvar logo, product visual, and Blade Ball guide images

The site is static: it has no authentication, account storage, API calls, or backend configuration.

## Local preview

    python -m http.server 4173 --bind 127.0.0.1

Open `http://127.0.0.1:4173`.
