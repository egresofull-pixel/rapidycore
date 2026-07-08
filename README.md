# RapidyCore Website

Official RapidyCore static website for the current Blade Ball setup, prepared for GitHub Pages.

## Public Repository

- Repository: https://github.com/egresofull-pixel/rapidycore
- Expected GitHub Pages URL: https://egresofull-pixel.github.io/rapidycore/

Current public positioning:

- RapidyCore is a Windows utility with a Blade Ball external color trigger setup.
- The current setup guide targets Blade Ball.
- The workflow uses external screen-based detection and normal Windows input.
- RapidyCore remains free to use.
- Optional project support link: https://ko-fi.com/rapidy
- Donations are voluntary and do not unlock extra features.

## GitHub Pages Setup

1. Push the contents of this `website/` folder to the repository root.
2. Open the repository on GitHub.
3. Go to `Settings -> Pages`.
4. Set `Source` to `Deploy from branch`.
5. Choose `main` and `/root`.
6. Save and wait for GitHub Pages to publish the site.

No backend, database, CMS, auth system, paid API, or build step is required.

## Local Preview

Open `index.html` in a browser, or serve the folder with any static file server.

Example:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## Files

- `index.html` - main website structure and sections.
- `privacy.html` - privacy policy page.
- `terms.html` - terms of use page.
- `styles.css` - responsive visual design.
- `app.js` - main page language switching, inertial scrolling, and translations.
- `legal.js` - Privacy/Terms language switching and content.
- `content-needed.md` - remaining content and release asset checklist.

## Translations

The site supports EN, RU, and UK language switching.

- Main page translations are stored in the `translations` object inside `app.js`.
- Privacy/Terms translations are stored in `legalTranslations` inside `legal.js`.
- The selected language is stored in `localStorage` under `rapidycore-language`.

## Assets

Assets and screenshots are stored in `assets/`.

Current interface preview filenames:

- `preview-main-panel.png`
- `preview-trigger-settings.png`
- `preview-diagnostics-panel.png`

Current guide image filenames:

- `guide-game-settings.png`
- `guide-highlight-setting.png`
- `guide-color-picker.png`
- `guide-rapidycore-trigger.png`
- `guide-inactive-example.png`
- `guide-active-example.png`

Logo/favicon files:

- `logo.png`
- `logo-web.png`
- `rapidycore.ico`

## Download Area

The public installer lives in `downloads/`.

Current public installer filename:

- `downloads/RapidyCoreInstall-1.1-Beta.exe`

Large installer files should be updated intentionally and only when a new approved release is ready.

If download distribution grows beyond keeping the installer in the Pages repository, the next step is moving release binaries to GitHub Releases and linking the website download button there.

## Setup Guide And Scrolling

The Setup Guide targets Blade Ball and explains how to match Blade Ball's visible highlight color with RapidyCore's external color trigger. It also includes a warning that Trigger Bot can react to any matching or similar color in the scanned area.

The site keeps CSS smooth scrolling as a no-JS fallback and enables a lightweight desktop inertial wheel controller when JavaScript is available. The tuning constants are in `app.js` under `ICE_SCROLL`.

## Before Public Release

- Review all EN/RU/UK copy before publishing.
- Confirm Privacy and Terms wording with the project owner.
- Test desktop and mobile layouts for horizontal overflow.
- Run `node --check app.js` and `node --check legal.js`.
- Check browser console output for errors.
