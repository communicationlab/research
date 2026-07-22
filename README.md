# Communication Research Lab — Website

A fast, animated, multi-page static site for the Communication Research Lab
(Department of EEE, BSRM School of Engineering, BRAC University). No build step,
no framework — just HTML, CSS, and vanilla JS, so it runs directly on **GitHub Pages**.

---

## Structure

```
communication-lab/
├── index.html          Home (merges highlights from every section)
├── about.html          About the lab
├── research.html       Research thrusts
├── people.html         Faculty dossiers
├── publications.html   Filterable publication list
├── projects.html       Projects & grants
├── contact.html        Contact + map
├── css/style.css       All styling (the "signal-domain" theme)
└── js/
    ├── data.js         ← ALL CONTENT LIVES HERE (edit this to add things)
    ├── components.js   Shared header/footer + renderers
    └── main.js         Animations & interactions
```

The pages are separate files but share one header, footer, and stylesheet, and the
home page pulls highlights from each section — so the site stays consistent while
each page is easy to grow.

---

## How to add content (the only file you touch: `js/data.js`)

Everything shown on the site is generated from arrays in **`js/data.js`**. You never
edit HTML to add content.

**Add a publication** — add an object to the top of `PUBLICATIONS`:
```js
{ year: 2026, type: "journal", faculty: "saha",
  authors: "R. K. Saha", title: "Your paper title",
  venue: "IEEE Journal, vol. X, pp. 1–10", url: "https://doi.org/…",
  award: "Best Paper Award"   /* optional */ }
```
`type` is `"journal"`, `"conference"`, or `"patent"`. `faculty` is `"saha"` or `"islam"`.

**Add a project** — add an object to `PROJECTS` (fields: `title, role, faculty, org, period, tags, desc`).

**Add a research thrust** — add an object to `RESEARCH` (fields: `id, title, band, icon, lead, points`).
Available `icon` values: `share, wave, signal, camera, brain, bolt, car, grid, orbit`.

**Add a person** — add an object to `PEOPLE` (copy an existing one and edit).

**Rename the lab, change email/phone/address** — edit the `SITE` object at the top.

Save the file and refresh — the pages update automatically.

---

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `communication-lab`).
2. Put these files in the repository root and push:
   ```bash
   git init
   git add .
   git commit -m "Communication Research Lab website"
   git branch -M main
   git remote add origin https://github.com/<you>/communication-lab.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   choose **main / (root)**, and Save.
4. Your site goes live at `https://<you>.github.io/communication-lab/` within a minute or two.

Prefer a project subfolder? Keep everything inside `/docs` and choose **main / /docs** in step 3.

---

## Local preview

Because the pages load `data.js` via `<script>`, just open `index.html` in a browser,
or run a tiny server for clean routing:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Notes

- Faculty photos are pulled from the official BRAC profiles; if one fails to load, a
  monogram placeholder shows automatically. To self-host, drop images in `assets/` and
  point each person's `photo` field at e.g. `assets/saha.jpg`.
- Update the lab email in `SITE.email` (currently a placeholder) before going public.
- Respects `prefers-reduced-motion`, is keyboard-accessible, and works down to mobile.

---


