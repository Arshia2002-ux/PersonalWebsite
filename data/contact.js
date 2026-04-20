/* ═══════════════════════════════════════════
   data/contact.js
   ─────────────────────────────────────────
   EDIT YOUR CONTACT LINKS HERE.
   Each entry has:
     label — display text
     href  — URL or "mailto:..." link
     icon  — one of: email | scholar | linkedin | github | twitter | orcid
   ═══════════════════════════════════════════ */

const CONTACT_LINKS = [
  {
    label: "yourname@university.edu",
    href:  "mailto:yourname@university.edu",
    icon:  "email"
  },
  {
    label: "Google Scholar",
    href:  "https://scholar.google.com",
    icon:  "scholar"
  },
  {
    label: "LinkedIn",
    href:  "https://linkedin.com",
    icon:  "linkedin"
  },
  {
    label: "GitHub",
    href:  "https://github.com",
    icon:  "github"
  },
  /* ── Add more links:
  {
    label: "Twitter / X",
    href:  "https://x.com/yourhandle",
    icon:  "twitter"
  },
  */
];

/* ─── SVG icons ───────────────────────────── */
const ICONS = {
  email: `<svg viewBox="0 0 16 16"><rect x="2" y="4" width="12" height="9" rx="1"/><path d="M2 5l6 5 6-5"/></svg>`,
  scholar: `<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/><path d="M5 6h6M5 8h6M5 10h4"/></svg>`,
  linkedin: `<svg viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="2"/><path d="M5 8v3M5 5.5v.5M8 8v3M8 6.5a1.5 1.5 0 013 0V11"/></svg>`,
  github: `<svg viewBox="0 0 16 16"><path d="M8 2C4.69 2 2 4.69 2 8c0 2.65 1.72 4.9 4.1 5.7.3.05.41-.13.41-.29v-1.02c-1.67.36-2.02-.8-2.02-.8-.27-.7-.67-.88-.67-.88-.55-.37.04-.36.04-.36.61.04.93.62.93.62.54.93 1.41.66 1.76.5.05-.39.21-.66.38-.81-1.34-.15-2.74-.67-2.74-2.97 0-.66.23-1.19.62-1.61-.06-.15-.27-.76.06-1.59 0 0 .51-.16 1.66.62A5.78 5.78 0 018 5.35c.51 0 1.03.07 1.51.2 1.15-.78 1.66-.62 1.66-.62.33.83.12 1.44.06 1.59.39.42.62.95.62 1.61 0 2.31-1.41 2.82-2.75 2.97.22.19.41.56.41 1.13v1.67c0 .16.11.35.41.29C12.28 12.9 14 10.65 14 8c0-3.31-2.69-6-6-6z"/></svg>`,
  twitter: `<svg viewBox="0 0 16 16"><path d="M13 3s-1 .5-2 .5c-.9-1-2.5-1-3.5 0C6.5 4.5 6 6 6.5 7.5 4.5 7.5 3 6.5 2 5c-.5 2 0 3.5 1.5 4.5-.5 0-1 0-1.5-.5 0 1.5 1 2.5 2.5 3-.5.5-1.5.5-2 .5C4 14 6 14.5 7 14.5c4 0 7-3.5 7-7v-.5c.5-.5 1-1 1-1.5-.5.5-1 .5-2 .5z"/></svg>`,
  orcid: `<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6"/><text x="6.5" y="11" font-size="8" font-weight="bold" fill="#fff" font-family="sans-serif">iD</text></svg>`
};

/* ─── Render links ────────────────────────── */
(function renderContact() {
  const container = document.getElementById("contactLinks");
  if (!container) return;

  CONTACT_LINKS.forEach(c => {
    const a = document.createElement("a");
    a.className = "contact-link";
    a.href = c.href;
    if (!c.href.startsWith("mailto")) a.target = "_blank";
    a.innerHTML = `
      <div class="contact-icon">${ICONS[c.icon] || ICONS.email}</div>
      <span>${c.label}</span>
    `;
    container.appendChild(a);
  });
})();
