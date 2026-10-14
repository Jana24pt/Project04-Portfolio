/* =========================================================
   Jana AL-Damanhouri – Portfolio
   Hand-written CSS3: custom properties, Flexbox, media queries.
   Logical properties (inline-start / inline-end) are used so the
   layout flips cleanly between LTR (English) and RTL (Arabic).
   ========================================================= */

/* ---------- Theme tokens ---------- */
:root {
  --radius: 16px;
  --radius-sm: 10px;
  --max-w: 1120px;
  --header-h: 68px;
  --ease: 0.3s ease;
  --font: "Segoe UI", "Noto Sans Arabic", Tahoma, system-ui, -apple-system, Arial, sans-serif;
  --mono: ui-monospace, "SFMono-Regular", Consolas, "Courier New", monospace;
}

:root[data-theme="dark"] {
  --bg: #0b1220;
  --bg-alt: #0f1a2e;
  --surface: #131f36;
  --surface-hover: #182744;
  --border: #22314f;
  --text: #e8eefc;
  --muted: #9fb0d0;
  --accent: #2dd4bf;
  --accent-ink: #04201c;
  --accent-soft: rgba(45, 212, 191, 0.12);
  --warn: #fbbf24;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

:root[data-theme="light"] {
  --bg: #f7f8fb;
  --bg-alt: #eef1f7;
  --surface: #ffffff;
  --surface-hover: #f3f6fb;
  --border: #dbe1ee;
  --text: #11192b;
  --muted: #55627e;
  --accent: #0f766e;
  --accent-ink: #ffffff;
  --accent-soft: rgba(15, 118, 110, 0.1);
  --warn: #b45309;
  --shadow: 0 10px 30px rgba(17, 25, 43, 0.1);
}

/* ---------- Reset / base ---------- */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; scroll-padding-top: calc(var(--header-h) + 12px); }

body {
  margin: 0;
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  transition: background-color var(--ease), color var(--ease);
}

img { max-width: 100%; display: block; }
ul, ol { list-style: none; margin: 0; padding: 0; }
h1, h2, h3, p { margin: 0; }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 3px;
  border-radius: 6px;
}

.container { width: 100%; max-width: var(--max-w); margin-inline: auto; padding-inline: 24px; }

.skip-link {
  position: absolute;
  inset-inline-start: 12px;
  top: -60px;
  background: var(--accent);
  color: var(--accent-ink);
  padding: 8px 14px;
  border-radius: 8px;
  z-index: 200;
  transition: top 0.2s;
}
.skip-link:focus { top: 10px; text-decoration: none; }

/* ---------- Header / Navbar ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-h);
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: background-color var(--ease), border-color var(--ease);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  max-width: var(--max-w);
  margin-inline: auto;
  padding-inline: 24px;
}

.logo { display: flex; align-items: center; gap: 10px; color: var(--text); font-weight: 700; font-size: 1.15rem; }
.logo:hover { text-decoration: none; }
.logo-mark {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 10px;
  background: var(--accent); color: var(--accent-ink);
  font-family: var(--mono); font-weight: 800;
}
.logo-dot { color: var(--accent); }

.nav-links { display: flex; align-items: center; gap: 4px; }
.nav-links a {
  display: block; padding: 8px 12px; border-radius: 8px;
  color: var(--muted); font-size: 0.93rem; font-weight: 500;
  transition: color var(--ease), background-color var(--ease);
}
.nav-links a:hover { color: var(--text); background: var(--accent-soft); text-decoration: none; }
.nav-links a.active { color: var(--accent); background: var(--accent-soft); }

.controls { display: flex; align-items: center; gap: 8px; }
.icon-btn {
  display: inline-flex; align-items: center; justify-content: center;
  min-width: 40px; height: 40px; padding: 0 10px;
  background: var(--surface); color: var(--text);
  border: 1px solid var(--border); border-radius: 10px;
  font: inherit; font-size: 1.05rem; cursor: pointer;
  transition: background-color var(--ease), transform 0.15s, border-color var(--ease);
}
.icon-btn:hover { background: var(--surface-hover); border-color: var(--accent); }
.icon-btn:active { transform: scale(0.94); }
.lang-btn { font-size: 0.9rem; font-weight: 600; }

.menu-btn { display: none; }
.bars, .bars::before, .bars::after {
  display: block; width: 18px; height: 2px; background: var(--text);
  border-radius: 2px; transition: transform 0.25s, opacity 0.25s;
}
.bars { position: relative; }
.bars::before, .bars::after { content: ""; position: absolute; inset-inline-start: 0; }
.bars::before { top: -6px; }
.bars::after { top: 6px; }
.menu-btn[aria-expanded="true"] .bars { background: transparent; }
.menu-btn[aria-expanded="true"] .bars::before { transform: translateY(6px) rotate(45deg); }
.menu-btn[aria-expanded="true"] .bars::after { transform: translateY(-6px) rotate(-45deg); }

/* ---------- Sections ---------- */
.section { padding-block: 84px; }
.section:nth-of-type(even) { background: var(--bg-alt); }

.section-title {
  position: relative;
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  margin-bottom: 40px;
  padding-inline-start: 18px;
}
.section-title::before {
  content: "";
  position: absolute; inset-inline-start: 0; top: 0.2em; bottom: 0.2em;
  width: 5px; border-radius: 4px; background: var(--accent);
}

/* ---------- Hero / About ---------- */
.hero { padding-block: 72px 90px; background: var(--bg) !important; }
.hero-inner { display: flex; align-items: center; justify-content: space-between; gap: 56px; }
.hero-text { flex: 1 1 0; min-width: 0; }

.eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 6px 14px; margin-bottom: 18px;
  background: var(--accent-soft); color: var(--accent);
  border: 1px solid var(--border); border-radius: 999px;
  font-size: 0.85rem; font-weight: 600;
}
.pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); animation: pulse 1.8s infinite; }
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 var(--accent); }
  70% { box-shadow: 0 0 0 9px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

.name { font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.15; letter-spacing: -0.5px; }
.role { margin-top: 10px; font-size: clamp(1.1rem, 2.2vw, 1.4rem); color: var(--accent); font-weight: 600; }
.location { margin-top: 6px; color: var(--muted); }
.summary { margin-top: 20px; max-width: 62ch; color: var(--muted); font-size: 1.04rem; }

.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

.btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 24px; border-radius: 12px; border: 1px solid transparent;
  font: inherit; font-weight: 600; cursor: pointer;
  transition: transform 0.15s, background-color var(--ease), box-shadow var(--ease);
}
.btn:hover { text-decoration: none; transform: translateY(-2px); }
.btn-primary { background: var(--accent); color: var(--accent-ink); box-shadow: 0 6px 18px var(--accent-soft); }
.btn-primary:hover { box-shadow: 0 10px 24px var(--accent-soft); }
.btn-ghost { background: transparent; color: var(--text); border-color: var(--border); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

.stats { display: flex; flex-wrap: wrap; gap: 28px; margin-top: 36px; padding-top: 26px; border-top: 1px solid var(--border); }
.stat { display: flex; flex-direction: column; }
.stat strong { font-family: var(--mono); font-size: 1.7rem; color: var(--accent); line-height: 1.2; }
.stat span { font-size: 0.85rem; color: var(--muted); }

/* Photo + switcher (Bounce 01) */
.photo-box { display: flex; flex-direction: column; align-items: center; gap: 20px; flex: 0 0 auto; }
.photo-frame {
  padding: 8px; border-radius: 50%;
  background: conic-gradient(from 180deg, var(--accent), transparent 60%, var(--accent));
  box-shadow: var(--shadow);
}
.profile-photo {
  width: clamp(220px, 28vw, 320px); aspect-ratio: 1; object-fit: cover;
  border-radius: 50%; border: 6px solid var(--bg); background: var(--surface);
  /* smooth transition when the src/alt changes */
  transition: opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease;
}
.profile-photo.fading { opacity: 0; transform: scale(0.95); filter: blur(4px); }

.photo-buttons { display: flex; gap: 8px; padding: 5px; background: var(--surface); border: 1px solid var(--border); border-radius: 999px; }
.chip {
  padding: 8px 20px; border: 0; border-radius: 999px; background: transparent;
  color: var(--muted); font: inherit; font-size: 0.9rem; font-weight: 600; cursor: pointer;
  transition: background-color var(--ease), color var(--ease);
}
.chip:hover { color: var(--text); }
.chip.active { background: var(--accent); color: var(--accent-ink); }

/* ---------- Skills ---------- */
.skills-grid { display: flex; flex-wrap: wrap; gap: 20px; }
.skill-card {
  flex: 1 1 300px;
  display: flex; flex-direction: column; gap: 6px;
  padding: 26px; background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius);
  transition: transform var(--ease), border-color var(--ease), background-color var(--ease);
}
.skill-card:hover { transform: translateY(-5px); border-color: var(--accent); background: var(--surface-hover); }
.skill-icon { font-size: 1.8rem; line-height: 1; margin-bottom: 6px; }
.skill-card h3 { font-size: 1.12rem; }
.skill-card p { color: var(--muted); font-family: var(--mono); font-size: 0.88rem; }

/* ---------- Projects ---------- */
.card-container { display: flex; flex-wrap: wrap; gap: 22px; }
.card {
  flex: 1 1 320px;
  display: flex; flex-direction: column; align-items: flex-start; gap: 12px;
  padding: 26px; background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius);
  transition: transform var(--ease), border-color var(--ease), box-shadow var(--ease);
}
.card:hover { transform: translateY(-5px); border-color: var(--accent); box-shadow: var(--shadow); }
.card-featured { flex-basis: 480px; background: linear-gradient(160deg, var(--surface), var(--accent-soft)); }
.card-tag {
  padding: 2px 12px; border-radius: 999px;
  background: var(--accent-soft); color: var(--accent);
  font-family: var(--mono); font-size: 0.8rem; font-weight: 700;
}
.card h3 { font-size: 1.15rem; line-height: 1.4; }
.card p { color: var(--muted); font-size: 0.97rem; flex: 1; }
.card-link {
  margin-top: 4px; padding: 8px 16px; border: 1px solid var(--border);
  border-radius: 10px; font-weight: 600; font-size: 0.9rem; color: var(--text);
  transition: background-color var(--ease), color var(--ease), border-color var(--ease);
}
.card-link:hover { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); text-decoration: none; }

/* ---------- Training timeline ---------- */
.timeline { position: relative; display: flex; flex-direction: column; gap: 28px; padding-inline-start: 34px; }
.timeline::before {
  content: ""; position: absolute; top: 6px; bottom: 6px; inset-inline-start: 7px;
  width: 2px; background: var(--border);
}
.timeline-item {
  position: relative; padding: 22px 24px;
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
}
.timeline-item::before {
  content: ""; position: absolute; top: 28px; inset-inline-start: -34px;
  width: 16px; height: 16px; border-radius: 50%;
  background: var(--accent); border: 4px solid var(--bg-alt); box-sizing: content-box;
  transform: translateX(-4px);
}
[dir="rtl"] .timeline-item::before { transform: translateX(4px); }
.timeline-item h3 { font-size: 1.1rem; margin-block: 4px 6px; }
.timeline-item p { color: var(--muted); }
.timeline-item .date { color: var(--accent); font-family: var(--mono); font-size: 0.85rem; font-weight: 600; }

/* ---------- Certifications ---------- */
.cert-list { display: flex; flex-direction: column; gap: 12px; }
.cert-item {
  display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  padding: 18px 22px; background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  transition: border-color var(--ease);
}
.cert-item:hover { border-color: var(--accent); }
.cert-name { font-weight: 600; }
.cert-link { font-size: 0.9rem; font-weight: 600; }
.status {
  padding: 3px 14px; border-radius: 999px; font-size: 0.8rem; font-weight: 700;
  color: var(--warn); background: color-mix(in srgb, var(--warn) 14%, transparent);
}
.status-done { color: var(--muted); background: var(--accent-soft); }

/* ---------- Hobbies ---------- */
.hobbies-list { display: flex; flex-wrap: wrap; gap: 14px; }
.hobby {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 14px 24px; background: var(--surface);
  border: 1px solid var(--border); border-radius: 999px; font-weight: 500;
  transition: transform var(--ease), border-color var(--ease);
}
.hobby:hover { transform: translateY(-3px); border-color: var(--accent); }

/* ---------- Contact ---------- */
.contact-wrap { display: flex; flex-wrap: wrap; gap: 32px; align-items: flex-start; }
.contact-list { flex: 1 1 320px; display: flex; flex-direction: column; gap: 14px; }
.contact-row {
  display: flex; flex-direction: column; gap: 2px;
  padding: 16px 20px; background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius-sm);
}
.contact-label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--muted); }
.contact-row a { font-weight: 600; word-break: break-all; }

.contact-form {
  flex: 1 1 380px; display: flex; flex-direction: column; gap: 18px;
  padding: 28px; background: var(--surface);
  border: 1px solid var(--border); border-radius: var(--radius);
}
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-weight: 600; font-size: 0.92rem; }
.field input, .field textarea {
  width: 100%; padding: 12px 14px; font: inherit; color: var(--text);
  background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-sm);
  transition: border-color var(--ease), box-shadow var(--ease);
}
.field textarea { resize: vertical; min-height: 120px; }
.field input:focus, .field textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.field.invalid input, .field.invalid textarea { border-color: #ef4444; }
.form-status { min-height: 1.5em; font-weight: 600; font-size: 0.93rem; }
.form-status.ok { color: var(--accent); }
.form-status.err { color: #ef4444; }
.contact-form .btn { align-self: flex-start; }

/* ---------- Footer ---------- */
.site-footer { padding-block: 30px; border-top: 1px solid var(--border); background: var(--bg); color: var(--muted); font-size: 0.9rem; }
.footer-inner { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; }

/* ---------- Back to top ---------- */
.back-to-top {
  position: fixed; bottom: 24px; inset-inline-end: 24px;
  width: 46px; height: 46px; border: 0; border-radius: 50%;
  background: var(--accent); color: var(--accent-ink);
  font-size: 1.3rem; font-weight: 700; cursor: pointer; box-shadow: var(--shadow);
  opacity: 0; visibility: hidden; transform: translateY(12px);
  transition: opacity var(--ease), transform var(--ease), visibility var(--ease);
}
.back-to-top.show { opacity: 1; visibility: visible; transform: none; }

/* ---------- RTL tweaks ---------- */
[dir="rtl"] .logo-text { letter-spacing: 0; }
[dir="rtl"] .name { letter-spacing: 0; }
[dir="rtl"] .contact-label { letter-spacing: 0; }

/* ---------- Responsive ---------- */
@media (max-width: 1020px) {
  .nav-links a { padding: 8px 9px; font-size: 0.88rem; }
}

@media (max-width: 900px) {
  .menu-btn { display: inline-flex; }

  .nav-links {
    position: absolute; top: var(--header-h); inset-inline: 0;
    flex-direction: column; align-items: stretch; gap: 2px;
    padding: 12px 24px 18px;
    background: var(--bg); border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
    display: none;
  }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 12px 14px; font-size: 1rem; }

  .hero-inner { flex-direction: column-reverse; text-align: center; gap: 36px; }
  .summary { margin-inline: auto; }
  .hero-actions, .stats { justify-content: center; }
  .stat { align-items: center; }
  .section { padding-block: 60px; }
}

@media (max-width: 560px) {
  .container, .nav { padding-inline: 16px; }
  .card, .skill-card, .card-featured { flex-basis: 100%; }
  .contact-form { padding: 20px; }
  .contact-form .btn, .hero-actions .btn { width: 100%; }
  .timeline { padding-inline-start: 28px; }
  .timeline-item::before { inset-inline-start: -28px; }
  .footer-inner { flex-direction: column; text-align: center; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
