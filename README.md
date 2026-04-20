# Personal Academic Website

Chicago Maroon (#630031) · Elegant & Minimal

---

## File structure

```
website/
├── index.html          ← Main page (structure)
├── css/
│   └── style.css       ← All styles & colors
├── js/
│   └── main.js         ← Interactions (nav, animations, form)
├── data/
│   ├── projects.js     ← ★ ADD YOUR PROJECTS HERE
│   ├── cv.js           ← ★ ADD YOUR CV ENTRIES HERE
│   ├── interests.js    ← ★ ADD YOUR RESEARCH INTERESTS HERE
│   └── contact.js      ← ★ ADD YOUR CONTACT LINKS HERE
└── assets/
    └── cv.pdf          ← Place your CV PDF here
```

---

## How to add a project

Open `data/projects.js` and add a new object inside the `PROJECTS` array:

```js
{
  title: "My New Paper",
  status: "Published · 2026",
  desc: "One or two sentences describing the project.",
  tags: ["Python", "NLP"],
  link: "https://arxiv.org/your-paper",
  linkText: "Read paper"
},
```

Leave `link: ""` and `linkText: ""` if there is no URL yet.

---

## How to update your CV

Open `data/cv.js`. Each section (education, publications, awards) is a list. Add entries like:

```js
{
  year: "2026",
  title: "New Paper Title",
  institution: "Nature · Vol. 1"
},
```

---

## How to change your name / bio

Open `index.html` and find:
- `Dr. Your Name` in the `<nav>` — change the nav logo
- `Your Name` in the hero section — change the displayed name
- `YN` in the hero avatar — change to your initials
- The bio paragraph under `.hero-bio` — update with your real bio

---

## How to replace colors

Open `css/style.css` and change the variables at the top:

```css
--maroon:       #630031;   /* main color */
--maroon-hover: #7a003c;   /* button hover */
--maroon-pale:  #f9f0f4;   /* tag backgrounds */
```

---

## How to push to GitHub (step by step)

This folder is already a Git repository with your first commit ready.
Follow these steps to publish it on GitHub:

### Step 1 — Create a new GitHub repository
1. Go to https://github.com/new
2. Name it `personal-website` (or anything you like)
3. Set it to **Public**
4. **Do NOT** tick "Add a README" or "Add .gitignore" — the files are already here
5. Click **Create repository**

### Step 2 — Connect and push from your terminal
Open a terminal, go into the `website/` folder, then run:

```bash
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repo name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

You will be asked for your GitHub username and password.
> **Note:** GitHub no longer accepts your account password here.
> Use a **Personal Access Token** instead.
> Get one at: https://github.com/settings/tokens → "Generate new token (classic)" → tick `repo` scope.

### Step 3 — Enable GitHub Pages (free live website!)
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## How to update your site after changes

Whenever you edit any file, run these three commands in the `website/` folder:

```bash
git add .
git commit -m "Update projects / CV / bio"
git push
```

GitHub Pages will automatically rebuild your site within a minute.

---

## Add your real CV PDF

Place your PDF at `assets/cv.pdf`.
The "Download CV" button already links there.
Then run:
```bash
git add assets/cv.pdf
git commit -m "Add CV PDF"
git push
```
