# Personal Portfolio – Jana Zeyad AL-Damanhouri

A responsive personal portfolio built with plain HTML5, CSS3 and JavaScript (ES6+). No frameworks, templates or UI libraries.

## Files

- `index.html` – page structure (semantic HTML)
- `style.css` – styling, theme variables, Flexbox layout, media queries, RTL support
- `script.js` – theme switcher, photo switcher, EN/AR language switcher, contact form, back-to-top
- `assets/` – profile photos (`photo-casual.svg`, `photo-professional.svg`)

## Sections

Navbar, About Me (with photo), Skills, Projects (Projects 00–03 + graduation and ISO 27001 projects), Training, Certifications, Hobbies, Contact (details + form), Footer.

## Features

### 1. Theme switcher (mandatory)
The 🌙 / ☀️ button toggles `data-theme="light|dark"` on `<html>`. All colors in `style.css` are CSS variables, so changing the attribute changes the whole page. The choice is saved in `localStorage`.

**Event lifecycle:**
1. **User action** – the user clicks the theme button.
2. **Event firing** – the browser fires a `click` event on `#theme-toggle`.
3. **JavaScript callback** – the listener registered with `addEventListener("click", toggleTheme)` runs `toggleTheme()`.
4. **DOM/CSS mutation** – the callback changes `root.dataset.theme`; the CSS selector `:root[data-theme="dark"]` now matches, the variables are recalculated, and the browser repaints with a smooth transition.

### 2. Profile photo switcher (Bounce 01)
Two buttons switch between a casual and a professional photo. The image fades out (`.fading` class → opacity 0), then JS updates `img.src` and `img.alt`, and the image fades back in once it has loaded. The page never reloads.

### 3. Language switcher EN / AR (Bounce 02)
- All texts live in a `translations` object (`en` and `ar`).
- Elements carry `data-i18n="key"`; JS loops over them and sets `textContent`.
- JS sets `lang` and `dir` on `<html>` (`ar`/`rtl` or `en`/`ltr`).
- CSS uses logical properties (`inset-inline-start`, `padding-inline-start`, `inset-inline-end`) so the layout mirrors correctly in RTL, and the Cairo font is used for Arabic.

### 4. Contact form
Validates the fields with `checkValidity()`, shows a translated status message, then opens the user's email app with a pre-filled message (`mailto:`).

## Responsive design
Flexbox is used for the navbar, hero, skills, project cards, certifications, hobbies and contact layout. Media queries at 900px and 600px adapt the layout for tablets and phones.
