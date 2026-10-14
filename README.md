# Personal Portfolio – Jana Zeyad AL-Damanhouri

A responsive, bilingual (English / Arabic) personal portfolio built from scratch with
**HTML5, CSS3 and vanilla JavaScript (ES6+)**. No frameworks, templates, or UI libraries.

Covers: **Ex00** (Personal Portfolio) + **Bounce 01** (Profile Photo Switcher) + **Bounce 02** (Language Switcher).

## Files

```
index.html   – page structure (semantic HTML)
style.css    – styling: CSS variables, Flexbox, media queries, RTL support
script.js    – theme switcher, photo switcher, language switcher, form, menu
assets/      – photo-professional.jpg, photo-casual.jpg, avatar-fallback.svg
README.md    – this file
```

> Put your two photos in `assets/` with these exact names:
> `photo-professional.jpg` and `photo-casual.jpg`.
> If one is missing, `avatar-fallback.svg` is shown instead.

## Sections

Header/Navbar · About Me (with photo) · Skills grid · Projects (00–04, graduation, capstone) ·
Training · Certifications · Hobbies · Contact form · Footer.

## Features

| Feature | Where |
|---|---|
| Dark / light theme switcher (mandatory) | `applyTheme()` / `toggleTheme()` |
| Profile photo switcher with fade transition | `setPhoto()` |
| English ⇄ Arabic with `dir="rtl"` / `lang="ar"` | `translations` object + `applyLanguage()` |
| Mobile menu, active-link highlighting, back-to-top | sections 6–7 of `script.js` |
| Contact form validation (opens the mail app via `mailto:`) | section 8 of `script.js` |
| Saved preferences (theme, language, photo) | `localStorage` (guarded with try/catch) |

## Event lifecycle (how the theme switcher works)

1. **User action** – the visitor clicks the 🌙/☀️ button (`#theme-toggle`).
2. **Event firing** – the browser fires a `click` event on that button; the listener registered with
   `addEventListener("click", toggleTheme)` is notified.
3. **JavaScript callback** – `toggleTheme()` runs, reads the current theme from `state.theme`
   and calls `applyTheme()` with the opposite value.
4. **DOM / CSS mutation** – `applyTheme()` sets `data-theme="light|dark"` on `<html>`.
   CSS rules `:root[data-theme="..."]` redefine the colour variables (`--bg`, `--text`, `--accent`…),
   so every element re-colours instantly (with a short CSS transition). The icon and `localStorage`
   are updated too.

The photo and language switchers follow the same chain:
click → listener → `setPhoto()` / `toggleLanguage()` → change `src`/`alt` or `textContent`, `lang`, `dir`.

## RTL strategy

- JS sets `lang` and `dir` on `<html>`.
- CSS uses **logical properties** (`padding-inline-start`, `inset-inline-end`, `margin-inline`)
  and Flexbox, so the layout mirrors automatically without a separate Arabic stylesheet.
- Emails, phone numbers and URLs keep `dir="ltr"` so they never get scrambled.

## Responsive design

Flexbox with `flex-wrap` for all grids; media queries at `1020px`, `900px` (hamburger menu,
stacked hero) and `560px` (single column, full-width buttons). `prefers-reduced-motion` is respected.

## Run it

Open `index.html` in any browser. No build step.
