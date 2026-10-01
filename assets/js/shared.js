import { site } from "../../data/site.js";

const depth = document.body.dataset.depth === "project" ? "../" : "";

export function pathFromRoot(path) {
  if (!path || /^(https?:|mailto:)/.test(path)) return path;
  return `${depth}${path}`;
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderMediaPlaceholder(project, label = "Approved project media pending") {
  return `
    <div class="media-placeholder" role="img" aria-label="${escapeHtml(label)}">
      <span>${escapeHtml(project.eyebrow)}</span>
      <strong>${escapeHtml(label)}</strong>
    </div>`;
}

export function renderProjectMedia(project, item, options = {}) {
  const { eager = false } = options;
  if (!item?.src) return renderMediaPlaceholder(project);

  const src = pathFromRoot(item.src);
  const mediaClass = item.fit === "contain" ? ' class="media-contain"' : "";
  if (item.type === "video") {
    const poster = item.poster ? ` poster="${pathFromRoot(item.poster)}"` : "";
    return `<video${mediaClass} controls muted playsinline preload="metadata"${poster}><source src="${src}"></video>`;
  }

  return `<img${mediaClass} src="${src}" alt="${escapeHtml(item.alt || item.caption || project.title)}" loading="${eager ? "eager" : "lazy"}">`;
}

function linkMarkup(label, href) {
  if (!href) return "";
  const resolved = pathFromRoot(href);
  const external = /^(https?:|mailto:)/.test(resolved);
  return `<a href="${resolved}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${label}</a>`;
}

export function mountChrome(active = "") {
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  const navItems = [
    ["Home", "index.html", "home"],
    ["Projects", "projects.html", "projects"],
    ["Experience", "experience.html", "experience"],
    ["Contact", "contact.html", "contact"]
  ];

  if (header) {
    header.innerHTML = `
      <div class="shell nav-shell">
        <a class="brand" href="${pathFromRoot("index.html")}">
          <span class="brand-mark">${site.initials}</span>
          <span><strong>${site.name}</strong><small>${site.role}</small></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
        <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
          ${navItems.map(([label, href, key]) => `<a ${active === key ? 'aria-current="page"' : ""} href="${pathFromRoot(href)}">${label}</a>`).join("")}
        </nav>
      </div>`;

    const toggle = header.querySelector(".nav-toggle");
    const nav = header.querySelector(".site-nav");
    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav?.classList.toggle("open", !open);
    });
  }

  if (footer) {
    footer.innerHTML = `
      <div class="shell footer-grid">
        <div><strong>${site.name}</strong><p>${site.education}</p></div>
        <div class="footer-links">
          ${linkMarkup("Projects", "projects.html")}
          ${linkMarkup("Experience", "experience.html")}
          ${linkMarkup("Contact", "contact.html")}
          ${linkMarkup("LinkedIn", site.links.linkedin)}
          ${linkMarkup("GitHub", site.links.github)}
        </div>
      </div>
      <div class="shell footer-meta"><span>Static portfolio for GitHub Pages</span><span>© ${new Date().getFullYear()} ${site.name}</span></div>`;
  }
}

export function projectCard(project) {
  const badge = project.visibility === "teaser" ? "Research teaser" : project.status;
  return `
    <a class="project-card" href="${pathFromRoot(`projects/${project.slug}.html`)}">
      <div class="project-card-media">${renderProjectMedia(project, project.media?.[0])}</div>
      <div class="project-card-copy">
        <div class="card-kicker"><span>${escapeHtml(project.eyebrow)}</span><span>${escapeHtml(badge)}</span></div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <ul class="tag-list">${project.tags.slice(0, 4).map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
        <span class="open-link">Open case study <b>→</b></span>
      </div>
    </a>`;
}
