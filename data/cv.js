/* ═══════════════════════════════════════════
   data/cv.js
   ─────────────────────────────────────────
   EDIT YOUR CV CONTENT HERE.
   Three sections: education, publications, awards.
   Add entries by copying the pattern shown.
   ═══════════════════════════════════════════ */

const CV = {

  education: [
    {
      year: "2021 –",
      title: "PhD in [Your Field]",
      institution: "University Name, Department · Supervisor: Prof. Name"
    },
    {
      year: "2019 – 21",
      title: "MSc in [Your Field]",
      institution: "University Name"
    },
    {
      year: "2016 – 19",
      title: "BSc in [Your Field]",
      institution: "University Name"
    },
    /* ── Add more degrees:
    {
      year: "20XX – XX",
      title: "Degree Name",
      institution: "University Name"
    },
    */
  ],

  publications: [
    {
      year: "2024",
      title: "Paper Title Here",
      institution: "Journal Name · Vol. X, pp. 000–000"
    },
    {
      year: "2023",
      title: "Conference Paper Title",
      institution: "Conference Name (CONF'23) · Acceptance rate 18%"
    },
    /* ── Add more publications:
    {
      year: "20XX",
      title: "Your Paper Title",
      institution: "Venue Name"
    },
    */
  ],

  awards: [
    {
      year: "2024",
      title: "Fellowship / Award Name",
      institution: "Awarding Institution"
    },
    /* ── Add more awards:
    {
      year: "20XX",
      title: "Award Name",
      institution: "Institution"
    },
    */
  ]

};

/* ─── Render CV ───────────────────────────── */
(function renderCV() {

  function buildBlock(containerId, heading, entries) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const title = document.createElement("h3");
    title.className = "cv-block-title";
    title.textContent = heading;
    el.appendChild(title);

    entries.forEach(e => {
      const entry = document.createElement("div");
      entry.className = "cv-entry fade-in";
      entry.innerHTML = `
        <span class="cv-year">${e.year}</span>
        <div>
          <p class="cv-title">${e.title}</p>
          <p class="cv-inst">${e.institution}</p>
        </div>
      `;
      el.appendChild(entry);
    });
  }

  buildBlock("cvEducation",    "Education",             CV.education);
  buildBlock("cvPublications", "Selected publications", CV.publications);
  buildBlock("cvAwards",       "Awards & grants",       CV.awards);

})();
