/* ═══════════════════════════════════════════
   js/project.js — renders individual project pages
   ═══════════════════════════════════════════ */

(function renderProjectPage() {
  const main = document.getElementById("projectMain");
  if (!main) return;

  const id   = new URLSearchParams(window.location.search).get("id");
  const proj = (typeof PROJECTS !== "undefined") && PROJECTS.find(p => p.id === id);

  if (!proj || !proj.page) {
    main.innerHTML = `
      <div style="max-width:560px;margin:100px auto;padding:0 40px;text-align:center;">
        <p style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;">404</p>
        <h1 style="font-family:var(--font-display);font-size:36px;margin-bottom:16px;color:var(--maroon);">Project not found</h1>
        <p style="color:var(--text-2);margin-bottom:28px;">The project does not exist or the URL is incorrect.</p>
        <a href="index.html#projects" class="btn btn-primary">Back to projects</a>
      </div>`;
    return;
  }

  document.title = `${proj.title} — Your Name`;
  const d = proj.page;

  const ICONS = {
    paper:  `<svg viewBox="0 0 16 16"><path d="M4 2h6l4 4v8H4V2z"/><path d="M10 2v4h4"/><path d="M6 9h4M6 11h3"/></svg>`,
    github: `<svg viewBox="0 0 16 16"><path d="M8 2C4.69 2 2 4.69 2 8c0 2.65 1.72 4.9 4.1 5.7.3.05.41-.13.41-.29v-1.02c-1.67.36-2.02-.8-2.02-.8-.27-.7-.67-.88-.67-.88-.55-.37.04-.36.04-.36.61.04.93.62.93.62.54.93 1.41.66 1.76.5.05-.39.21-.66.38-.81-1.34-.15-2.74-.67-2.74-2.97 0-.66.23-1.19.62-1.61-.06-.15-.27-.76.06-1.59 0 0 .51-.16 1.66.62A5.78 5.78 0 018 5.35c.51 0 1.03.07 1.51.2 1.15-.78 1.66-.62 1.66-.62.33.83.12 1.44.06 1.59.39.42.62.95.62 1.61 0 2.31-1.41 2.82-2.75 2.97.22.19.41.56.41 1.13v1.67c0 .16.11.35.41.29C12.28 12.9 14 10.65 14 8c0-3.31-2.69-6-6-6z"/></svg>`,
    data:   `<svg viewBox="0 0 16 16"><ellipse cx="8" cy="5" rx="5" ry="2"/><path d="M3 5v3c0 1.1 2.24 2 5 2s5-.9 5-2V5M3 8v3c0 1.1 2.24 2 5 2s5-.9 5-2V8"/></svg>`,
    slides: `<svg viewBox="0 0 16 16"><rect x="2" y="3" width="12" height="9" rx="1"/><path d="M6 12v2M10 12v2M5 14h6"/></svg>`,
    link:   `<svg viewBox="0 0 16 16"><path d="M7 9a3 3 0 004 0l2-2a3 3 0 00-4-4L8 4M9 7a3 3 0 00-4 0L3 9a3 3 0 004 4l1-1"/></svg>`
  };

  let h = "";

  h += `<div class="pj-hero"><div class="pj-hero-inner fade-up">
    <div class="pj-breadcrumb">
      <a href="index.html">Home</a>
      <span class="pj-breadcrumb-sep">›</span>
      <a href="index.html#projects">Projects</a>
      <span class="pj-breadcrumb-sep">›</span>
      <span class="pj-breadcrumb-cur">${proj.title}</span>
    </div>
    <span class="pj-status">${proj.status}</span>
    <h1 class="pj-hero-title">${proj.title}</h1>
    <p class="pj-hero-subtitle">${d.subtitle || ""}</p>
    <div class="pj-hero-tags">
      ${proj.tags.map(t => `<span class="pj-hero-tag">${t}</span>`).join("")}
    </div>
  </div></div>`;

  if (d.stats && d.stats.length) {
    h += `<div class="pj-stats-bar"><div class="pj-stats-inner">
      ${d.stats.map(s => `<div class="pj-stat"><span class="pj-stat-val">${s.value}</span><span class="pj-stat-label">${s.label}</span></div>`).join("")}
    </div></div>`;
  }

  if (d.coverImage && d.coverImage.src) {
    h += `<div class="pj-cover fade-up">
      <img src="${d.coverImage.src}" alt="Cover" onerror="this.closest('.pj-cover').style.display='none'"/>
      ${d.coverImage.caption ? `<p class="pj-cover-caption">${d.coverImage.caption}</p>` : ""}
    </div>`;
  }

  h += `<div class="pj-body"><div class="pj-content">`;

  (d.sections || []).forEach(sec => {
    h += `<h2 class="fade-up">${sec.heading}</h2>`;
    if (sec.highlight) h += `<div class="pj-highlight fade-up"><p>${sec.highlight}</p></div>`;
    if (sec.text)      h += `<div class="fade-up">${sec.text}</div>`;
  });

  if (d.images && d.images.length) {
    h += `<h2 class="fade-up">Gallery</h2><div class="pj-gallery-grid">
      ${d.images.map(img => `
        <div class="pj-img-wrap fade-up" onclick="openLightbox('${img.src}')">
          <img src="${img.src}" alt="${img.caption||''}" onerror="this.closest('.pj-img-wrap').style.display='none'"/>
          ${img.caption ? `<p class="pj-img-caption">${img.caption}</p>` : ""}
        </div>`).join("")}
    </div>`;
  }

  if (d.video) {
    const vEl = d.video.type === "local"
      ? `<video controls src="${d.video.src}"></video>`
      : `<iframe src="${d.video.src}" allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope"></iframe>`;
    h += `<div class="pj-video fade-up">
      <p class="pj-video-label">Video</p>
      <div class="pj-video-wrap">${vEl}</div>
      ${d.video.caption ? `<p class="pj-video-caption">${d.video.caption}</p>` : ""}
    </div>`;
  }

  h += `</div><aside class="pj-sidebar">`;

  if (d.meta && d.meta.length) {
    h += `<div class="pj-sidebar-card fade-up">
      <div class="pj-sidebar-head">Project info</div>
      <div class="pj-sidebar-body">
        ${d.meta.map(m => `<div class="pj-meta-row"><span class="pj-meta-label">${m.label}</span><span class="pj-meta-val">${m.value}</span></div>`).join("")}
      </div>
    </div>`;
  }

  const aLinks = (d.links || []).filter(l => l.href);
  if (aLinks.length) {
    h += `<div class="pj-sidebar-card fade-up">
      <div class="pj-sidebar-head">Resources</div>
      <div class="pj-links">
        ${aLinks.map((l, i) => `<a href="${l.href}" target="_blank" class="pj-link ${i > 0 ? 'pj-link-ghost' : ''}">${ICONS[l.icon]||ICONS.link} ${l.label}</a>`).join("")}
      </div>
    </div>`;
  }

  h += `</aside></div>`;
  h += `<div class="pj-back fade-up"><a href="index.html#projects">← Back to all projects</a></div>`;

  main.innerHTML = h;

  setTimeout(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
  }, 60);
})();

function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  if (lb && img) { img.src = src; lb.classList.add("open"); }
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (lb) lb.classList.remove("open");
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
