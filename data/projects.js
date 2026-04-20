/* ═══════════════════════════════════════════
   data/projects.js
   ─────────────────────────────────────────
   Each project has TWO parts:
   1. Card info  — shown on the homepage grid
   2. Page info  — shown on the project's own page

   HOW TO ADD A NEW PROJECT:
   1. Copy one of the blocks below
   2. Give it a unique "id" (no spaces, use dashes)
   3. Fill in all fields
   4. The project page URL will be: project.html?id=YOUR_ID
   ═══════════════════════════════════════════ */

const PROJECTS = [

  /* ══════════════════════════════════════
     PROJECT 1
  ══════════════════════════════════════ */
  {
    /* ── Card (homepage) ── */
    id:       "project-one",
    title:    "Project Title One",
    status:   "Published · 2024",
    desc:     "A short description of this research project — what question it addresses and what you found.",
    tags:     ["Python", "NLP", "Machine Learning"],
    link:     "project.html?id=project-one",
    linkText: "View project",

    /* ── Page (project.html) ── */
    page: {
      subtitle: "Full subtitle or tagline for this project goes here — one sentence that captures the essence.",

      /* Meta info shown in the sidebar */
      meta: [
        { label: "Status",        value: "Published" },
        { label: "Year",          value: "2024" },
        { label: "Venue",         value: "Journal / Conference Name" },
        { label: "Collaborators", value: "Prof. Name, Dr. Name" },
        { label: "Funding",       value: "Grant / Institution" },
      ],

      /* Buttons in the sidebar */
      links: [
        { label: "Read paper",  href: "https://arxiv.org",  icon: "paper"  },
        { label: "GitHub repo", href: "https://github.com", icon: "github" },
        { label: "Dataset",     href: "",                   icon: "data"   },
      ],

      /* Key numbers shown as stat cards */
      stats: [
        { value: "10K",  label: "Data points" },
        { value: "94%",  label: "Accuracy"    },
        { value: "3",    label: "Publications" },
        { value: "2yrs", label: "Duration"    },
      ],

      /* Cover image at the top of the page */
      coverImage: {
        src:     "assets/projects/project-one/cover.jpg",
        caption: "Figure 1: Overview of the research pipeline."
      },

      /* Main written sections */
      sections: [
        {
          heading: "Overview",
          text: `
            <p>Write a full overview of your project here. You can use HTML tags like
            &lt;strong&gt;, &lt;em&gt;, and &lt;a&gt; inside the text.</p>
            <p>This is a good place to explain the motivation, context, and goals of
            the research in 2-3 paragraphs.</p>
          `
        },
        {
          heading: "Methodology",
          text: `
            <p>Describe your methods here. You can include lists:</p>
            <ul>
              <li>Step one of your methodology</li>
              <li>Step two of your methodology</li>
              <li>Step three of your methodology</li>
            </ul>
          `
        },
        {
          heading: "Key findings",
          highlight: "Summarize your most important finding in one bold sentence here.",
          text: `
            <p>Then elaborate on the findings in detail.</p>
          `
        },
        {
          heading: "Conclusion",
          text: `
            <p>Wrap up the project. What are the implications? What future work does this open up?</p>
          `
        }
      ],

      /* Gallery images */
      images: [
        { src: "assets/projects/project-one/image1.jpg", caption: "Caption for image 1" },
        { src: "assets/projects/project-one/image2.jpg", caption: "Caption for image 2" },
        { src: "assets/projects/project-one/image3.jpg", caption: "Caption for image 3" },
      ],

      /* Video — type: "youtube" | "vimeo" | "local" | set to null to hide */
      video: {
        type:    "youtube",
        src:     "https://www.youtube.com/embed/YOUR_VIDEO_ID",
        caption: "Demo video: walkthrough of the project."
      }
    }
  },

  /* ══════════════════════════════════════
     PROJECT 2
  ══════════════════════════════════════ */
  {
    id:       "project-two",
    title:    "Project Title Two",
    status:   "In progress · 2025",
    desc:     "A short description of this ongoing project — what you are building or investigating right now.",
    tags:     ["R", "Statistics", "Survey Data"],
    link:     "project.html?id=project-two",
    linkText: "View project",

    page: {
      subtitle: "Subtitle or tagline for this project.",
      meta: [
        { label: "Status", value: "In progress" },
        { label: "Year",   value: "2025" },
        { label: "Venue",  value: "TBD" },
      ],
      links: [
        { label: "GitHub repo", href: "https://github.com", icon: "github" },
      ],
      stats: [
        { value: "500", label: "Participants" },
        { value: "12",  label: "Variables"   },
      ],
      coverImage: {
        src:     "assets/projects/project-two/cover.jpg",
        caption: "Project overview image."
      },
      sections: [
        { heading: "Overview",          text: `<p>Describe this project here.</p>` },
        { heading: "Current progress",  text: `<p>What have you done so far and what is next?</p>` }
      ],
      images: [
        { src: "assets/projects/project-two/image1.jpg", caption: "Caption" },
      ],
      video: null
    }
  },

  /* ══════════════════════════════════════
     PROJECT 3
  ══════════════════════════════════════ */
  {
    id:       "project-three",
    title:    "Project Title Three",
    status:   "Conference · 2023",
    desc:     "A conference paper — brief summary of methodology and contribution.",
    tags:     ["Deep Learning", "PyTorch", "Datasets"],
    link:     "project.html?id=project-three",
    linkText: "View project",

    page: {
      subtitle: "Subtitle for this conference paper.",
      meta: [
        { label: "Status", value: "Published" },
        { label: "Year",   value: "2023" },
        { label: "Venue",  value: "CONF'23 (acceptance rate 18%)" },
      ],
      links: [
        { label: "Read paper",  href: "https://arxiv.org",  icon: "paper"  },
        { label: "Slides",      href: "",                   icon: "slides" },
        { label: "GitHub repo", href: "https://github.com", icon: "github" },
      ],
      stats: [
        { value: "18%",  label: "Acceptance rate" },
        { value: "+12%", label: "Improvement"     },
      ],
      coverImage: {
        src:     "assets/projects/project-three/cover.jpg",
        caption: "Model architecture diagram."
      },
      sections: [
        { heading: "Abstract", text: `<p>Paste or rewrite your abstract here.</p>` },
        { heading: "Method",   text: `<p>Describe your method.</p>` },
        {
          heading:   "Results",
          highlight: "Our model achieves state-of-the-art results on three benchmarks.",
          text:      `<p>Describe your results here.</p>`
        }
      ],
      images: [],
      video:  null
    }
  },

  /* ══════════════════════════════════════
     ADD A NEW PROJECT — copy this template
  ══════════════════════════════════════

  {
    id:       "my-new-project",
    title:    "My New Project",
    status:   "Published · 2026",
    desc:     "Short homepage description.",
    tags:     ["Tag1", "Tag2"],
    link:     "project.html?id=my-new-project",
    linkText: "View project",

    page: {
      subtitle: "Full subtitle.",
      meta: [
        { label: "Status", value: "Published" },
        { label: "Year",   value: "2026" },
        { label: "Venue",  value: "Venue Name" },
      ],
      links: [
        { label: "Read paper", href: "https://...", icon: "paper" },
      ],
      stats: [
        { value: "100", label: "Samples" },
      ],
      coverImage: {
        src:     "assets/projects/my-new-project/cover.jpg",
        caption: "Caption."
      },
      sections: [
        { heading: "Overview",     text: "<p>Write here.</p>" },
        { heading: "Key findings", highlight: "Main finding.", text: "<p>More detail.</p>" },
      ],
      images: [
        { src: "assets/projects/my-new-project/image1.jpg", caption: "Caption" },
      ],
      video: {
        type:    "youtube",
        src:     "https://www.youtube.com/embed/YOUR_ID",
        caption: "Demo video."
      }
    }
  },

  */

];

/* ─── Render homepage project cards ─────────── */
(function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  PROJECTS.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card fade-in";
    const tagsHTML = p.tags.map(t => `<span class="proj-tech">${t}</span>`).join("");
    const linkHTML = p.link ? `<a href="${p.link}" class="proj-link">View project →</a>` : "";
    card.innerHTML = `
      <p class="proj-meta">${p.status}</p>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-footer">${tagsHTML}${linkHTML}</div>
    `;
    grid.appendChild(card);
  });
})();
