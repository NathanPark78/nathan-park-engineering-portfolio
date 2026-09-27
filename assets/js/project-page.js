import { getProject, projects } from "../../data/projects.js";
import { escapeHtml, mountChrome, pathFromRoot, projectCard, renderProjectMedia } from "./shared.js";

mountChrome("projects");

const project = getProject(document.body.dataset.project);
const root = document.querySelector("[data-project-root]");

function paragraphs(items = []) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function list(items = []) {
  return `<ul class="ownership-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function pairGrid(items = [], className = "decision-grid") {
  return `<div class="${className}">${items.map(([title, body], index) => `
    <article><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}</div>`;
}

function section(number, title, body) {
  return `<section class="case-section"><div class="case-section-label"><span>${number}</span><h2>${title}</h2></div><div class="case-section-body">${body}</div></section>`;
}

function mediaGrid(activeProject) {
  if (!activeProject.media?.length) {
    return `<div class="evidence-empty"><strong>Approved evidence pending</strong><p>Add public-safe photos, CAD, plots, or short videos through the project record after review.</p></div>`;
  }
  return `<div class="evidence-grid">${activeProject.media.map((item, index) => `
    <figure><div class="evidence-media">${renderProjectMedia(activeProject, item)}</div><figcaption><span>Fig. ${String(index + 1).padStart(2, "0")}</span>${escapeHtml(item.caption || "Selected project evidence")}</figcaption></figure>`).join("")}</div>`;
}

if (!project || !root) {
  if (root) root.innerHTML = `<section class="shell page-intro"><h1>Project not found</h1><a href="${pathFromRoot("projects.html")}">Return to projects</a></section>`;
} else {
  const disclosure = project.visibility === "teaser"
    ? `<div class="disclosure-banner"><strong>Publication-pending research</strong><span>This page intentionally excludes enabling architecture, unpublished figures, and performance results.</span></div>`
    : "";
  const related = projects.filter((candidate) => project.related.includes(candidate.slug)).slice(0, 2);

  root.innerHTML = `
    <section class="shell project-hero">
      <a class="breadcrumb" href="${pathFromRoot("projects.html")}">← Back to projects</a>
      <div class="project-hero-grid">
        <div>
          <p class="eyebrow">${escapeHtml(project.eyebrow)}</p>
          <h1>${escapeHtml(project.title)}</h1>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <ul class="tag-list large">${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
          ${disclosure}
        </div>
        <div>
          <div class="hero-media">${renderProjectMedia(project, project.media?.[0], { eager: true })}</div>
          <dl class="project-facts">
            <div><dt>Year</dt><dd>${escapeHtml(project.year)}</dd></div>
            <div><dt>Status</dt><dd>${escapeHtml(project.status)}</dd></div>
            <div><dt>Domain</dt><dd>${escapeHtml(project.domain)}</dd></div>
          </dl>
        </div>
      </div>
    </section>
    <div class="shell case-layout">
      <main class="case-content">
        ${section("01", "Problem and constraints", paragraphs(project.problem))}
        ${section("02", "My ownership", list(project.ownership))}
        ${section("03", "Development process", pairGrid(project.process, "process-grid"))}
        ${section("04", "Key engineering decisions", pairGrid(project.decisions))}
        ${section("05", "Selected evidence", mediaGrid(project))}
        ${section("06", "Outcome and limitations", `<div class="outcome-grid"><article><h3>Outcome</h3><p>${escapeHtml(project.outcome)}</p></article><article><h3>Current boundary</h3><p>${escapeHtml(project.limitations)}</p></article></div>`)}
      </main>
      <aside class="case-sidebar">
        <div><p class="eyebrow">Tools</p><ul>${project.tools.map((tool) => `<li>${escapeHtml(tool)}</li>`).join("")}</ul></div>
        <div><p class="eyebrow">Disclosure</p><p>${project.visibility === "teaser" ? "Non-enabling research teaser" : "Public-safe case study"}</p></div>
      </aside>
    </div>
    ${related.length ? `<section class="shell related"><div class="section-heading"><p class="eyebrow">Continue exploring</p><h2>Related projects</h2></div><div class="project-grid compact">${related.map(projectCard).join("")}</div></section>` : ""}`;
}

