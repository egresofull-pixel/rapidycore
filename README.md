# Solvar website

Official static website for **Solvar**, created by Rapidy and presented as a RapidyCore product.

## Structure

- `index.html` — public product website, interactive visual preview, and future-ready auth dialogs
- `styles.css` — responsive visual system
- `app.js` — preview navigation, theme switching, and dialog behavior
- `privacy.html` / `terms.html` — current legal pages
- `assets/Загрузка.mp4` — Solvar loading animation used on entry
- `assets/Цикл.mp4` — retained Solvar visual-cycle asset

The preview is presentation-only: it does not provide desktop automation, Windows integration, executable communication, or account storage. The only applied preview control is its visual theme.

## Local preview

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`.
