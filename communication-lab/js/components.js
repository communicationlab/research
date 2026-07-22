/* ============================================================================
   components.js  —  shared chrome + renderers
   Injects the nav + footer on every page (one place to edit them) and turns
   the arrays in data.js into HTML. Pages only contain empty mount points.
   ========================================================================== */

/* ---- small helpers -------------------------------------------------------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const facultyName = id => (PEOPLE.find(p => p.id === id) || {}).name || "";

/* Highlight lab-member author names (bold + colored). Filter-aware: pass the
   active faculty ("all" | "saha" | "islam"); on "all" both names light up. */
const MEMBER_NAMES = { saha: "R. K. Saha", islam: "A. Islam" };
function hlAuthors(str, faculty) {
  const names = (!faculty || faculty === "all")
    ? Object.values(MEMBER_NAMES)
    : [MEMBER_NAMES[faculty]].filter(Boolean);
  let out = str;
  names.forEach(n => { out = out.split(n).join(`<span class="member">${n}</span>`); });
  return out;
}
window.hlAuthors = hlAuthors;

/* inline SVG icon set for research cards */
const ICONS = {
  share:  '<path d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .17 4l-6.34 3.66M6 12a3 3 0 1 0 0 .01M18 16a3 3 0 1 0 .01 0l-6.34-3.66"/>',
  wave:   '<path d="M2 12c2 0 2-6 4-6s2 12 4 12 2-12 4-12 2 6 4 6"/>',
  signal: '<path d="M4 20V10M9 20V4M14 20v-8M19 20V7"/>',
  camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>',
  brain:  '<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5 3 3 0 0 0 5 1V4a3 3 0 0 0-.34-1M15 3a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5 3 3 0 0 1-5 1"/>',
  bolt:   '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  car:    '<path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13m-14 0h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1M5 13v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1"/><circle cx="7.5" cy="16" r="0"/>',
  grid:   '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  orbit:  '<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.signal}</svg>`;

/* ---- shared HEADER -------------------------------------------------------- */
function mountHeader() {
  const mount = $("#site-header");
  if (!mount) return;
  const page = document.body.dataset.page || "";
  const nav = [
    ["index", "index.html", "Home"],
    ["about", "about.html", "About"],
    ["research", "research.html", "Research"],
    ["people", "people.html", "People"],
    ["publications", "publications.html", "Publications"],
    ["projects", "projects.html", "Projects"],
    ["contact", "contact.html", "Contact"]
  ];
  mount.innerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="nav" id="nav">
      <div class="wrap nav__inner">
        <a class="brand" href="index.html" aria-label="${SITE.labName} home">
          <span class="brand__mark" aria-hidden="true"><span></span><span></span><span></span></span>
          <span class="brand__text"><b>${SITE.labShort}</b><i>${SITE.labName}</i></span>
        </a>
        <button class="nav__toggle" id="navToggle" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav__links" id="navLinks" aria-label="Primary">
          ${nav.map(([id, href, label]) =>
            `<a href="${href}" class="${id === page ? "is-active" : ""}">${label}</a>`).join("")}
        </nav>
      </div>
    </header>`;
}

/* ---- shared FOOTER -------------------------------------------------------- */
function mountFooter() {
  const mount = $("#site-footer");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="foot">
      <span class="spectrum-bar" aria-hidden="true"></span>
      <div class="wrap foot__grid">
        <div class="foot__brand">
          <div class="brand brand--foot">
            <span class="brand__mark" aria-hidden="true"><span></span><span></span><span></span></span>
            <span class="brand__text"><b>${SITE.labShort}</b><i>${SITE.labName}</i></span>
          </div>
          <p>${SITE.subtitle}</p>
          <p class="foot__inst">${SITE.department}<br>${SITE.school}</p>
        </div>
        <div class="foot__col">
          <h4>Explore</h4>
          <a href="research.html">Research</a>
          <a href="publications.html">Publications</a>
          <a href="projects.html">Projects</a>
          <a href="people.html">People</a>
        </div>
        <div class="foot__col">
          <h4>Contact</h4>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
          <a href="tel:${SITE.phone.replace(/\s/g,'')}">${SITE.phone}</a>
          <span class="foot__addr">${SITE.address}</span>
        </div>
      </div>
      <div class="wrap foot__base">
        <span>© ${new Date().getFullYear()} ${SITE.labName}, BRAC University.</span>
        <span>Wireless · Optical · Intelligent Communication</span>
      </div>
    </footer>`;
}

/* ---- renderers ------------------------------------------------------------ */

function renderStats(mountSel, stats) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = stats.map(s => `
    <div class="stat reveal">
      <div class="stat__num" data-count="${s.value}" data-suffix="${s.suffix || ''}">0</div>
      <div class="stat__label">${s.label}</div>
    </div>`).join("");
}

function researchCard(r, i) {
  return `
    <article class="rcard reveal" style="--i:${i}">
      <span class="rcard__band">${r.band}</span>
      <div class="rcard__icon">${icon(r.icon)}</div>
      <h3>${r.title}</h3>
      <p>${r.lead}</p>
      <ul class="rcard__pts">${r.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </article>`;
}
function renderResearch(mountSel, limit) {
  const m = $(mountSel); if (!m) return;
  const list = limit ? RESEARCH.slice(0, limit) : RESEARCH;
  m.innerHTML = list.map(researchCard).join("");
}

function personCard(p) {
  const mono = p.name.split(" ").filter(w => /^[A-Z]/.test(w)).slice(-2).map(w => w[0]).join("");
  return `
    <article class="person reveal">
      <div class="person__photo">
        <img src="${p.photo}" alt="${p.name}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
        <span class="person__mono" style="display:none">${mono}</span>
      </div>
      <div class="person__body">
        <h3>${p.name}</h3>
        <p class="person__role">${p.role}</p>
        <p class="person__short">${p.short}</p>
        <div class="chips">${p.tags.map(t => `<span class="chip">${t}</span>`).join("")}</div>
        <div class="person__links">
          ${p.links.profile ? `<a href="${p.links.profile}" target="_blank" rel="noopener">Profile ↗</a>` : ""}
          ${p.links.website ? `<a href="${p.links.website}" target="_blank" rel="noopener">Website ↗</a>` : ""}
          ${p.links.linkedin ? `<a href="${p.links.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ""}
        </div>
      </div>
    </article>`;
}
function renderPeopleBrief(mountSel) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = PEOPLE.map(personCard).join("");
}

/* full people page (detailed dossiers) */
function renderPeopleFull(mountSel) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = PEOPLE.map(p => {
    const mono = p.name.split(" ").filter(w => /^[A-Z]/.test(w)).slice(-2).map(w => w[0]).join("");
    return `
    <article class="dossier reveal" id="${p.id}">
      <aside class="dossier__side">
        <div class="dossier__photo">
          <img src="${p.photo}" alt="${p.name}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
          <span class="person__mono" style="display:none">${mono}</span>
        </div>
        <dl class="dossier__meta">
          <div><dt>Room</dt><dd>${p.room}</dd></div>
          <div><dt>Ext</dt><dd>${p.ext}</dd></div>
        </dl>
        <div class="dossier__links">
          ${p.links.profile ? `<a href="${p.links.profile}" target="_blank" rel="noopener">BRAC Profile ↗</a>` : ""}
          ${p.links.website ? `<a href="${p.links.website}" target="_blank" rel="noopener">Website ↗</a>` : ""}
          ${p.links.linkedin ? `<a href="${p.links.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ""}
        </div>
        <div class="dossier__stats">
          ${p.stats.map(s => `<div><b>${s.value}</b><span>${s.label}</span></div>`).join("")}
        </div>
      </aside>
      <div class="dossier__main">
        <p class="eyebrow">${p.role}</p>
        <h2>${p.name}</h2>
        ${p.bio.map(par => `<p>${par}</p>`).join("")}

        <h4 class="dossier__h">Education</h4>
        <ul class="timeline">
          ${p.education.map(e => `<li><span class="timeline__year">${e.year}</span><div><b>${e.deg}</b><em>${e.org}</em></div></li>`).join("")}
        </ul>

        <h4 class="dossier__h">Research Interests</h4>
        <ul class="tick">${p.interests.map(x => `<li>${x}</li>`).join("")}</ul>

        <a class="text-link" href="publications.html#${p.id}">See publications by ${p.name.split(' ').slice(-1)} →</a>
      </div>
    </article>`;
  }).join("");
}

function pubRow(p) {
  const badge = p.type === "patent" ? "Patent" : p.type === "journal" ? "Journal" : "Conference";
  return `
    <li class="pub reveal" data-type="${p.type}" data-faculty="${p.faculty}" data-year="${p.year}">
      <span class="pub__year">${p.year}</span>
      <div class="pub__body">
        <div class="pub__tags">
          <span class="pub__badge pub__badge--${p.type}">${badge}</span>
          <span class="pub__who">${facultyName(p.faculty)}</span>
          ${p.award ? `<span class="pub__award">★ ${p.award}</span>` : ""}
        </div>
        <p class="pub__title">${p.url ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</p>
        <p class="pub__meta"><span class="pub__authors" data-authors="${p.authors.replace(/"/g,'&quot;')}">${hlAuthors(p.authors, "all")}</span> · <em>${p.venue}</em></p>
      </div>
    </li>`;
}
function renderPublications(mountSel, opts = {}) {
  const m = $(mountSel); if (!m) return;
  let list = [...PUBLICATIONS].sort((a, b) => b.year - a.year);
  if (opts.limit) list = list.slice(0, opts.limit);
  m.innerHTML = list.map(pubRow).join("");
}

function projectCard(p, i) {
  return `
    <article class="proj reveal" style="--i:${i}">
      <div class="proj__top">
        <span class="proj__role">${p.role}</span>
        <span class="proj__period">${p.period}</span>
      </div>
      <h3>${p.title}</h3>
      <p class="proj__org">${p.org}</p>
      <p class="proj__desc">${p.desc}</p>
      <div class="chips">${p.tags.map(t => `<span class="chip">${t}</span>`).join("")}</div>
      <p class="proj__pi"><span class="member">${facultyName(p.faculty)}</span></p>
    </article>`;
}
function renderProjects(mountSel, limit) {
  const m = $(mountSel); if (!m) return;
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  m.innerHTML = list.map(projectCard).join("");
}

/* ---- research assistants & collaborators (placeholders) ------------------ */
function teamCard(t) {
  const initials = t.name === "Open position" || t.name === "Collaborator"
    ? "+"
    : (t.name.split(" ").filter(w => /^[A-Za-z]/.test(w)).slice(0, 2).map(w => w[0]).join("") || "+");
  return `
    <article class="tcard reveal">
      <span class="tcard__avatar">${initials}</span>
      <div class="tcard__body">
        <div class="tcard__top"><h4>${t.name}</h4><span class="tcard__tag">${t.tag || "RA"}</span></div>
        <p class="tcard__role">${t.role}</p>
        <p class="tcard__area">${t.area}</p>
        ${t.link ? `<a class="tcard__link" href="${t.link}">Get in touch →</a>` : ""}
      </div>
    </article>`;
}
function renderTeam(mountSel) {
  const m = $(mountSel); if (!m || typeof TEAM === "undefined") return;
  m.innerHTML = TEAM.map(teamCard).join("");
}

/* ---- shared pagination control ------------------------------------------- */
function buildPager(container, current, total, onGo) {
  if (!container) return;
  if (total <= 1) { container.innerHTML = ""; return; }
  const b = (label, page, o = {}) =>
    `<button class="pagebtn${o.active ? " is-active" : ""}" ${o.disabled ? "disabled" : ""} data-page="${page}"${o.aria ? ` aria-label="${o.aria}"` : ""}>${label}</button>`;
  let html = b("‹", current - 1, { disabled: current === 1, aria: "Previous page" });
  const nums = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - current) <= 1) nums.push(p);
    else if (nums[nums.length - 1] !== "…") nums.push("…");
  }
  nums.forEach(p => { html += p === "…" ? `<span class="pagegap">…</span>` : b(p, p, { active: p === current }); });
  html += b("›", current + 1, { disabled: current === total, aria: "Next page" });
  container.innerHTML = html;
  container.querySelectorAll(".pagebtn").forEach(btn => {
    if (!btn.disabled) btn.addEventListener("click", () => onGo(parseInt(btn.dataset.page, 10)));
  });
}
window.buildPager = buildPager;

/* ---- paginated projects (projects page) ---------------------------------- */
function renderProjectsPaged(mountSel, pagerSel, size = 6) {
  const m = $(mountSel); if (!m) return;
  const pager = $(pagerSel);
  const pages = Math.max(1, Math.ceil(PROJECTS.length / size));
  let page = 1;
  const draw = () => {
    const start = (page - 1) * size;
    m.innerHTML = PROJECTS.slice(start, start + size).map(projectCard).join("");
    m.querySelectorAll(".reveal").forEach(x => x.classList.add("is-in"));
    buildPager(pager, page, pages, p => {
      page = p; draw();
      const sec = m.closest(".section");
      if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  draw();
}

/* ---- boot ----------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  mountHeader();
  mountFooter();

  // page-specific renders (guarded by mount-point existence)
  renderStats("#homeStats", SITE.stats);
  renderResearch("#homeResearch", 6);
  renderResearch("#allResearch");
  renderPeopleBrief("#homePeople");
  renderPeopleFull("#peopleFull");
  renderTeam("#teamGrid");
  renderPublications("#homePubs", { limit: 6 });
  renderPublications("#allPubs");
  renderProjects("#homeProjects", 3);
  if ($("#projPager")) renderProjectsPaged("#allProjects", "#projPager", 4);
  else renderProjects("#allProjects");

  // hand off to interactions (defined in main.js)
  if (window.CRL && window.CRL.init) window.CRL.init();
});
