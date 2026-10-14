/* =========================================================
   Jana AL-Damanhouri – Portfolio  |  script.js
   Vanilla JavaScript (ES6+), no libraries.

   Event lifecycle used everywhere in this file:
     User action  ->  Event fires  ->  JS callback runs
                  ->  DOM / CSS mutation  ->  user sees the change
   ========================================================= */

"use strict";

/* ---------------------------------------------------------
   1. Translation dictionary (Bounce 02)
   Keys match the data-i18n attributes in index.html.
   --------------------------------------------------------- */
const translations = {
  en: {
    pageTitle: "Jana AL-Damanhouri | Portfolio",
    skip: "Skip to content",
    navAbout: "About", navSkills: "Skills", navProjects: "Projects",
    navTraining: "Training", navCerts: "Certifications",
    navHobbies: "Hobbies", navContact: "Contact",
    themeLabel: "Switch theme", menuLabel: "Menu", topLabel: "Back to top",
    langButton: "العربية", langLabel: "Switch to Arabic",

    eyebrow: "Open to Cybersecurity · GRC · Cloud roles",
    name: "Jana Zeyad AL-Damanhouri",
    role: "Fresh Cyber Security Graduate",
    location: "Amman, Jordan",
    summary:
      "Cybersecurity graduate with hands-on training in cybersecurity, networking, Linux administration, GRC, and cloud fundamentals. Familiar with ISO 27001 methodology, Linux and Windows environments, networking, AWS, and Azure. Analytical, detail-oriented, and eager to learn and contribute in Cybersecurity, GRC, IT Operations, or Cloud roles.",
    btnCv: "View my CV (PDF)", btnContact: "Get in touch",
    stat1: "Cyber Shield – ranked 1st", stat2: "Hands-on training", stat3: "Cloud certifications",
    photoGroup: "Profile photo style", photoCasual: "Casual", photoPro: "Professional",
    altCasual: "Casual profile photo of Jana",
    altPro: "Professional profile photo of Jana",

    skillsTitle: "Skills",
    skillSec: "Cybersecurity & GRC", skillNet: "Networking",
    skillOs: "Operating Systems", skillCloud: "Cloud",
    skillWeb: "Web Development", skillGit: "Version Control",

    projectsTitle: "Projects",
    p0Title: "Project 00 – Linux & GitHub",
    p0Desc: "Practiced Linux command-line operations, file management, and GitHub repository workflows.",
    p1Title: "Project 01 – HTML Fundamentals",
    p1Desc: "Built web pages using HTML structure, semantic elements, lists, tables, forms, and accessible markup.",
    p2Title: "Project 02 – CSS & Visual Presentation",
    p2Desc: "Practiced CSS styling, Flexbox layouts, positioning, shapes, colors, and the box model.",
    p3Title: "Project 03 – JavaScript Fundamentals",
    p3Desc: "Practiced JavaScript variables, functions, conditions, DOM manipulation, event handling, and interactive applications.",
    p4Title: "Project 04 – Portfolio Website",
    p4Desc: "Developed a personal portfolio using HTML, CSS, and JavaScript to present my skills, training, and projects.",
    p5Title: "Graduation Project: Risk Assessment Tool",
    p5Desc: "Web-based risk evaluation platform. I analyzed user and system requirements, helped define features based on risk management and GRC principles, structured the assessment workflow, and documented the system.",
    p6Title: "ISO 27001 GRC Capstone (FinTech)",
    p6Desc: "Capstone project from SMT Group training covering ISMS scope, asset inventory, risk register and treatment plan, security policy, and an implementation roadmap.",
    tagGrad: "Graduation", tagGrc: "GRC",
    btnGithub: "View on GitHub", btnDrive: "View on Google Drive",

    trainingTitle: "Training",
    t1Title: "Advanced Digital Skills: Web & Cybersecurity – Amman42",
    t1Desc: "Advanced training program in web development and cybersecurity.",
    t2Title: "Path2Cyber Program – GRC Trainee, SMT Group",
    t2Desc: "Practical training in GRC, ISO 27001, risk assessment and treatment, asset inventory, policy development, networking, Linux, and Windows Server.",
    t3Title: "Cybersecurity Upskilling Program – Cyber Shield (JODB)",
    t3Desc: "Completed 120 hours of training in networking, Linux, ethical hacking, and digital forensics. Ranked first in the cohort with 98% — Highest Honors.",

    certsTitle: "Certifications and Courses",
    c1: "AWS Certified Cloud Practitioner",
    c2: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    c3: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    c4: "Red Hat System Administration I (RH124) – Course",
    c5: "ISO/IEC 27001:2022 Lead Implementer – Udemy Course",
    verify: "Verify on Credly", inProgress: "In progress", course: "Course",

    hobbiesTitle: "Hobbies",
    hobby1: "Practicing security labs", hobby2: "Reading about cybersecurity",
    hobby3: "Building small web projects", hobby4: "Exploring cloud platforms",

    contactTitle: "Contact",
    contactEmail: "Email", contactPhone: "Phone",
    labelName: "Your name", labelEmail: "Your email", labelMessage: "Message",
    send: "Send message",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    errMessage: "Please write a message.",
    formOk: "Opening your email app to send the message…",

    footerText: "© {year} Jana Zeyad AL-Damanhouri",
    footerNote: "Built by hand with HTML, CSS & JavaScript.",
    themeToLight: "Switch to light theme", themeToDark: "Switch to dark theme"
  },

  ar: {
    pageTitle: "جنى الدمنهوري | معرض الأعمال",
    skip: "تخطَّ إلى المحتوى",
    navAbout: "نبذة", navSkills: "المهارات", navProjects: "المشاريع",
    navTraining: "التدريب", navCerts: "الشهادات",
    navHobbies: "الهوايات", navContact: "تواصل",
    themeLabel: "تبديل المظهر", menuLabel: "القائمة", topLabel: "العودة للأعلى",
    langButton: "English", langLabel: "التبديل إلى الإنجليزية",

    eyebrow: "متاحة لوظائف الأمن السيبراني · الحوكمة والمخاطر والامتثال · السحابة",
    name: "جنى زياد الدمنهوري",
    role: "خريجة حديثة في الأمن السيبراني",
    location: "عمّان، الأردن",
    summary:
      "خريجة أمن سيبراني لديها تدريب عملي في الأمن السيبراني والشبكات وإدارة أنظمة لينكس والحوكمة والمخاطر والامتثال (GRC) وأساسيات الحوسبة السحابية. ملمّة بمنهجية ISO 27001 وبيئات لينكس وويندوز والشبكات وAWS وAzure. تحليلية ودقيقة وشغوفة بالتعلّم والمساهمة في وظائف الأمن السيبراني والـ GRC وعمليات تقنية المعلومات والسحابة.",
    btnCv: "عرض سيرتي الذاتية (PDF)", btnContact: "تواصل معي",
    stat1: "Cyber Shield – المركز الأول", stat2: "تدريب عملي", stat3: "شهادات سحابية",
    photoGroup: "نمط الصورة الشخصية", photoCasual: "عادية", photoPro: "رسمية",
    altCasual: "صورة شخصية عادية لجنى",
    altPro: "صورة شخصية رسمية لجنى",

    skillsTitle: "المهارات",
    skillSec: "الأمن السيبراني والـ GRC", skillNet: "الشبكات",
    skillOs: "أنظمة التشغيل", skillCloud: "الحوسبة السحابية",
    skillWeb: "تطوير الويب", skillGit: "التحكم بالإصدارات",

    projectsTitle: "المشاريع",
    p0Title: "المشروع 00 – لينكس وGitHub",
    p0Desc: "تدرّبت على أوامر لينكس وإدارة الملفات وآلية العمل مع مستودعات GitHub.",
    p1Title: "المشروع 01 – أساسيات HTML",
    p1Desc: "بنيت صفحات ويب باستخدام بنية HTML والعناصر الدلالية والقوائم والجداول والنماذج وترميز سهل الوصول.",
    p2Title: "المشروع 02 – CSS والعرض البصري",
    p2Desc: "تدرّبت على تنسيق CSS وتخطيطات Flexbox والتموضع والأشكال والألوان ونموذج الصندوق.",
    p3Title: "المشروع 03 – أساسيات JavaScript",
    p3Desc: "تدرّبت على المتغيرات والدوال والشروط والتعامل مع DOM ومعالجة الأحداث وبناء تطبيقات تفاعلية.",
    p4Title: "المشروع 04 – موقع المعرض الشخصي",
    p4Desc: "طوّرت معرضًا شخصيًا باستخدام HTML وCSS وJavaScript لعرض مهاراتي وتدريبي ومشاريعي.",
    p5Title: "مشروع التخرج: أداة تقييم المخاطر",
    p5Desc: "منصة ويب لتقييم المخاطر. حلّلت متطلبات المستخدم والنظام، وساهمت في تحديد المزايا وفق مبادئ إدارة المخاطر والـ GRC، ونظّمت مسار التقييم، ووثّقت النظام.",
    p6Title: "مشروع ISO 27001 الختامي (التقنية المالية)",
    p6Desc: "مشروع ختامي من تدريب SMT Group يشمل نطاق نظام إدارة أمن المعلومات (ISMS)، وجرد الأصول، وسجل المخاطر وخطة المعالجة، وسياسة الأمن، وخارطة طريق التنفيذ.",
    tagGrad: "التخرج", tagGrc: "GRC",
    btnGithub: "عرض على GitHub", btnDrive: "عرض على Google Drive",

    trainingTitle: "التدريب",
    t1Title: "المهارات الرقمية المتقدمة: الويب والأمن السيبراني – Amman42",
    t1Desc: "برنامج تدريبي متقدم في تطوير الويب والأمن السيبراني.",
    t2Title: "برنامج Path2Cyber – متدرّبة GRC، SMT Group",
    t2Desc: "تدريب عملي في الـ GRC وISO 27001 وتقييم المخاطر ومعالجتها وجرد الأصول وصياغة السياسات والشبكات ولينكس وويندوز سيرفر.",
    t3Title: "برنامج رفع المهارات في الأمن السيبراني – Cyber Shield (JODB)",
    t3Desc: "أنهيت 120 ساعة تدريبية في الشبكات ولينكس والاختراق الأخلاقي والتحقيق الرقمي. حصلت على المركز الأول في الدفعة بنسبة 98% — مرتبة الشرف العليا.",

    certsTitle: "الشهادات والدورات",
    c1: "AWS Certified Cloud Practitioner",
    c2: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    c3: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    c4: "Red Hat System Administration I (RH124) – دورة",
    c5: "ISO/IEC 27001:2022 Lead Implementer – دورة Udemy",
    verify: "تحقق عبر Credly", inProgress: "قيد الدراسة", course: "دورة",

    hobbiesTitle: "الهوايات",
    hobby1: "التدرّب على مختبرات الأمن", hobby2: "القراءة عن الأمن السيبراني",
    hobby3: "بناء مشاريع ويب صغيرة", hobby4: "استكشاف المنصات السحابية",

    contactTitle: "تواصل معي",
    contactEmail: "البريد الإلكتروني", contactPhone: "الهاتف",
    labelName: "اسمك", labelEmail: "بريدك الإلكتروني", labelMessage: "الرسالة",
    send: "إرسال الرسالة",
    errName: "يرجى إدخال اسمك.",
    errEmail: "يرجى إدخال بريد إلكتروني صحيح.",
    errMessage: "يرجى كتابة رسالة.",
    formOk: "جارٍ فتح تطبيق البريد لإرسال الرسالة…",

    footerText: "© {year} جنى زياد الدمنهوري",
    footerNote: "صُنع يدويًا باستخدام HTML وCSS وJavaScript.",
    themeToLight: "التبديل إلى المظهر الفاتح", themeToDark: "التبديل إلى المظهر الداكن"
  }
};

/* ---------------------------------------------------------
   2. Small helpers
   --------------------------------------------------------- */
const root = document.documentElement;
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

// localStorage can throw (private mode, blocked storage) -> always guard it.
const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* ignore */ } }
};

const state = {
  lang: "en",
  theme: "dark",
  photo: "professional"
};

const t = (key) => translations[state.lang][key] ?? translations.en[key] ?? key;

/* ---------------------------------------------------------
   3. Theme switcher (Exercise 00 – mandatory feature)
   Lifecycle:
     click on #theme-toggle  -> "click" event fires
     -> toggleTheme() callback runs
     -> data-theme attribute on <html> changes
     -> CSS variables for that theme take over, page re-colors.
   --------------------------------------------------------- */
const themeBtn = $("#theme-toggle");
const themeIcon = $("#theme-icon");

function applyTheme(theme) {
  state.theme = theme;
  root.setAttribute("data-theme", theme);                 // DOM mutation -> CSS variables swap
  themeIcon.textContent = theme === "dark" ? "☀️" : "🌙"; // icon shows the theme you can switch TO
  themeBtn.setAttribute("title", theme === "dark" ? t("themeToLight") : t("themeToDark"));
  store.set("theme", theme);
}

function toggleTheme() {
  applyTheme(state.theme === "dark" ? "light" : "dark");
}

themeBtn.addEventListener("click", toggleTheme);

/* ---------------------------------------------------------
   4. Profile photo switcher (Bounce 01)
   Lifecycle:
     click on a .chip -> event fires -> setPhoto() runs
     -> fade out (class .fading) -> swap .src and .alt
     -> fade in (class removed). Page never reloads.
   --------------------------------------------------------- */
const photo = $("#profile-photo");
const chips = $$(".chip");

const photoSources = {
  casual: { src: "assets/photo-casual.jpg", altKey: "altCasual" },
  professional: { src: "assets/photo-professional.jpg", altKey: "altPro" }
};

const FALLBACK_PHOTO = "assets/avatar-fallback.svg";
const FADE_MS = 250; // must match the CSS transition duration

// If a photo file is missing, show a neutral avatar instead of a broken icon.
photo.addEventListener("error", () => {
  if (!photo.src.endsWith("avatar-fallback.svg")) photo.src = FALLBACK_PHOTO;
});

function updateChips() {
  chips.forEach((chip) => {
    const active = chip.dataset.photo === state.photo;
    chip.classList.toggle("active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
}

function setPhoto(kind) {
  if (!photoSources[kind] || kind === state.photo) return;
  state.photo = kind;
  updateChips();

  photo.classList.add("fading");
  setTimeout(() => {
    photo.src = photoSources[kind].src;       // DOM mutation: src
    photo.alt = t(photoSources[kind].altKey); // DOM mutation: alt
    photo.classList.remove("fading");
  }, FADE_MS);

  store.set("photo", kind);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => setPhoto(chip.dataset.photo));
});

/* ---------------------------------------------------------
   5. Language switcher (Bounce 02)
   Lifecycle:
     click on #lang-toggle -> event fires -> toggleLanguage()
     -> set lang + dir on <html> -> rewrite every [data-i18n]
     element's textContent from the dictionary.
   --------------------------------------------------------- */
const langBtn = $("#lang-toggle");

function applyLanguage(lang) {
  state.lang = lang;
  const isArabic = lang === "ar";

  root.setAttribute("lang", lang);
  root.setAttribute("dir", isArabic ? "rtl" : "ltr");

  // Text content
  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });

  // aria-label attributes
  $$("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  // Elements that are not plain text
  document.title = t("pageTitle");
  langBtn.textContent = t("langButton");
  langBtn.setAttribute("aria-label", t("langLabel"));
  photo.alt = t(photoSources[state.photo].altKey);
  $("#footer-text").textContent = t("footerText").replace("{year}", new Date().getFullYear());
  themeBtn.setAttribute("title", state.theme === "dark" ? t("themeToLight") : t("themeToDark"));

  // Clear stale form messages (they would be in the old language)
  clearFormStatus();

  store.set("lang", lang);
}

function toggleLanguage() {
  applyLanguage(state.lang === "en" ? "ar" : "en");
}

langBtn.addEventListener("click", toggleLanguage);

/* ---------------------------------------------------------
   6. Mobile menu
   --------------------------------------------------------- */
const menuBtn = $("#menu-toggle");
const navLinks = $("#nav-links");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
}

menuBtn.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

/* ---------------------------------------------------------
   7. Active nav link while scrolling + back-to-top button
   --------------------------------------------------------- */
const sections = $$("main section[id]");
const linkFor = (id) => $(`.nav-links a[href="#${id}"]`);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $$(".nav-links a").forEach((a) => a.classList.remove("active"));
        linkFor(entry.target.id)?.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => observer.observe(s));
}

const topBtn = $("#back-to-top");
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
}, { passive: true });
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------------------------------------------------------
   8. Contact form (client-side validation, opens mail client)
   There is no backend, so a valid form builds a mailto: link.
   --------------------------------------------------------- */
const form = $("#contact-form");
const statusEl = $("#form-status");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TO_EMAIL = "jana.cyber.tech@gmail.com";

function clearFormStatus() {
  statusEl.textContent = "";
  statusEl.className = "form-status";
  $$(".field.invalid", form).forEach((f) => f.classList.remove("invalid"));
}

function showError(input, key) {
  input.closest(".field").classList.add("invalid");
  statusEl.className = "form-status err";
  statusEl.textContent = t(key);
  input.focus();
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the browser's default submit / page reload
  clearFormStatus();

  const name = form.elements.name;
  const email = form.elements.email;
  const message = form.elements.message;

  if (!name.value.trim()) return showError(name, "errName");
  if (!EMAIL_RE.test(email.value.trim())) return showError(email, "errEmail");
  if (!message.value.trim()) return showError(message, "errMessage");

  const subject = encodeURIComponent(`Portfolio message from ${name.value.trim()}`);
  const body = encodeURIComponent(`${message.value.trim()}\n\n— ${name.value.trim()} (${email.value.trim()})`);

  statusEl.className = "form-status ok";
  statusEl.textContent = t("formOk");
  window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
  form.reset();
});

/* ---------------------------------------------------------
   9. Init: restore saved preferences (or sensible defaults)
   --------------------------------------------------------- */
(function init() {
  const savedTheme = store.get("theme");
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
  const theme = savedTheme || (prefersLight ? "light" : "dark");

  const savedLang = store.get("lang");
  const lang = savedLang === "ar" || savedLang === "en" ? savedLang : "en";

  const savedPhoto = store.get("photo");
  if (photoSources[savedPhoto]) {
    state.photo = savedPhoto;
    photo.src = photoSources[savedPhoto].src;
    updateChips();
  }

  applyLanguage(lang);
  applyTheme(theme);
})();
