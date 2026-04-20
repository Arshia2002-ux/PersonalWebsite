/* ═══════════════════════════════════════════
   data/interests.js
   ─────────────────────────────────────────
   LIST YOUR RESEARCH INTERESTS HERE.
   Just add or remove strings from the array.
   ═══════════════════════════════════════════ */

const INTERESTS = [
  "Machine Learning",
  "Natural Language Processing",
  "Computational Social Science",
  "Human-Computer Interaction",
  "Data Science",
  /* ── Add more: "Your Interest", */
];

/* ─── Render tags ─────────────────────────── */
(function renderInterests() {
  const container = document.getElementById("interestTags");
  if (!container) return;
  INTERESTS.forEach(i => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = i;
    container.appendChild(tag);
  });
})();
