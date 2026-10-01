import { getProject, projects } from "../../data/projects.js";
import { escapeHtml, mountChrome, pathFromRoot, projectCard, renderProjectMedia } from "./shared.js";

mountChrome("projects");

const project = getProject(document.body.dataset.project);
const root = document.querySelector("[data-project-root]");

function paragraphs(items = []) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function list(items = [], className = "ownership-list") {
  if (!items.length) return "";
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function pairGrid(items = [], className = "decision-grid") {
  if (!items.length) return "";
  return `<div class="${className}">${items.map(([title, body], index) => `
    <article><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("")}</div>`;
}

function section(number, title, body, id = "") {
  return `<section${id ? ` id="${id}"` : ""} class="case-section"><div class="case-section-label"><span>${number}</span><h2>${escapeHtml(title)}</h2></div><div class="case-section-body">${body}</div></section>`;
}

function roleGrid(activeProject) {
  const items = [
    ["Sponsor / mentor", activeProject.mentor]
  ].filter(([, value]) => value);

  if (!items.length) return "";
  return `<div class="role-grid">${items.map(([label, value]) => `
    <article><span>${escapeHtml(label)}</span><p>${escapeHtml(value)}</p></article>`).join("")}</div>`;
}

function metricGrid(items = []) {
  if (!items.length) return "";
  return `<div class="metric-grid">${items.map((item) => `
    <article>
      <strong>${escapeHtml(item.value)}</strong>
      <span>${escapeHtml(item.label)}</span>
      <p>${escapeHtml(item.note)}</p>
    </article>`).join("")}</div>`;
}

function resourceLinks(items = [], className = "resource-links") {
  if (!items.length) return "";
  return `<div class="${className}">${items.map((item) => {
    const href = pathFromRoot(item.href);
    const external = /^(https?:|mailto:)/.test(href);
    return `<a class="button ${item.primary ? "primary" : "secondary"}" href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noreferrer"' : ""}>${escapeHtml(item.label)} <span aria-hidden="true">↗</span></a>`;
  }).join("")}</div>`;
}

function sourceList(items = []) {
  if (!items.length) return "";
  return `<ol class="source-list">${items.map((item) => {
    if (Array.isArray(item)) {
      return `<li><a href="${escapeHtml(item[1])}" target="_blank" rel="noreferrer">${escapeHtml(item[0])}</a></li>`;
    }
    return `<li>${escapeHtml(item)}</li>`;
  }).join("")}</ol>`;
}

function milestoneTimeline(items = []) {
  if (!items.length) return "";
  return `<ol class="milestone-timeline">${items.map((item) => {
    const externalHref = /^https?:\/\//.test(item.href || "") ? item.href : "";
    const link = externalHref
      ? ` <a href="${escapeHtml(externalHref)}" target="_blank" rel="noreferrer">${escapeHtml(item.linkLabel || "Learn more")} <span aria-hidden="true">↗</span></a>`
      : "";
    return `<li><span>${escapeHtml(item.when)}</span><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}${link}</p></div></li>`;
  }).join("")}</ol>`;
}

function mediaGrid(activeProject) {
  if (!activeProject.media?.length) {
    return `<div class="evidence-empty"><strong>Approved evidence pending</strong><p>Add public-safe photos, CAD, plots, or short videos through the project record after review.</p></div>`;
  }

  const evidenceItems = activeProject.media.length > 1 ? activeProject.media.slice(1) : activeProject.media;
  return `<div class="evidence-grid">${evidenceItems.map((item, index) => `
    <figure>
      <div class="evidence-media">${renderProjectMedia(activeProject, item)}</div>
      <figcaption><span>Fig. ${String(index + 1).padStart(2, "0")}</span>${escapeHtml(item.caption || "Selected project evidence")}</figcaption>
    </figure>`).join("")}</div>`;
}

if (!project || !root) {
  if (root) root.innerHTML = `<section class="shell page-intro"><h1>Project not found</h1><a href="${pathFromRoot("projects.html")}">Return to projects</a></section>`;
} else {
  document.title = `${project.title} | Nathan Park`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", project.summary);

  const disclosure = project.visibility === "teaser"
    ? `<div class="disclosure-banner"><strong>Research in progress</strong><span>Additional project details will be shared as the work is published.</span></div>`
    : "";
  const related = projects.filter((candidate) => project.related.includes(candidate.slug)).slice(0, 2);
  const sections = [];
  const addSection = (title, body, id = "") => {
    if (!body?.trim()) return;
    sections.push(section(String(sections.length + 1).padStart(2, "0"), title, body, id));
  };

  addSection("Context and problem", `${project.lead ? `<p class="case-lead">${escapeHtml(project.lead)}</p>` : ""}${paragraphs(project.problem)}`, "context");
  addSection("Role and ownership", `${roleGrid(project)}${list(project.ownership)}`, "ownership");
  if (project.timeline?.length) addSection("Program timeline", milestoneTimeline(project.timeline), "program-timeline");

  if (project.requirements?.length) {
    addSection("Engineering requirements", list(project.requirements, "requirement-list"), "requirements");
  }

  addSection("Build and iterate", `${pairGrid(project.process, "process-grid")}${project.build?.length ? `<h3 class="micro-heading">Integrated build</h3>${list(project.build, "build-list")}` : ""}`, "build");
  addSection("Verification and evidence", `${paragraphs(project.verification)}${metricGrid(project.metrics)}`, "verification");
  addSection("Decisions and next steps", `${pairGrid(project.decisions)}${project.nextSteps?.length ? `<h3 class="micro-heading">Next engineering moves</h3>${list(project.nextSteps, "next-step-list")}` : ""}`, "decisions");
  addSection("Selected evidence", `${mediaGrid(project)}${resourceLinks(project.links)}`, "evidence");

  const outcomeBody = `${project.proofPoints?.length ? `<h3 class="micro-heading">What the evidence supports</h3>${list(project.proofPoints, "proof-list")}` : ""}
    <div class="outcome-grid"><article><h3>Outcome</h3><p>${escapeHtml(project.outcome)}</p></article><article><h3>Current boundary</h3><p>${escapeHtml(project.limitations)}</p></article></div>`;
  addSection("Outcome and evidence", outcomeBody.replace("Current boundary", "Evidence scope"), "outcome");

  const publicSources = (project.sources || []).filter((item) => Array.isArray(item) && /^(https?:|mailto:)/.test(item[1]));
  if (publicSources.length) addSection("References", sourceList(publicSources), "sources");

  root.innerHTML = `
    <section class="shell project-hero">
      <a class="breadcrumb" href="${pathFromRoot("projects.html")}">← Back to projects</a>
      <div class="project-hero-grid">
        <div>
          <p class="eyebrow">${escapeHtml(project.eyebrow)}</p>
          <h1>${escapeHtml(project.title)}</h1>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <ul class="tag-list large">${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
          ${resourceLinks(project.links, "button-row")}
          ${disclosure}
        </div>
        <div>
          <div class="hero-media${project.slug === "astro-flexion" ? " astro-logo-frame" : ""}">${renderProjectMedia(project, project.media?.[0], { eager: true })}</div>
          <dl class="project-facts">
            <div><dt>Period</dt><dd>${escapeHtml(project.year)}</dd></div>
            <div><dt>Status</dt><dd>${escapeHtml(project.status)}</dd></div>
            <div><dt>Domain</dt><dd>${escapeHtml(project.domain)}</dd></div>
          </dl>
        </div>
      </div>
    </section>
    <div class="shell case-layout">
      <main class="case-content">${sections.join("")}</main>
      <aside class="case-sidebar">
        <div><p class="eyebrow">Tools</p><ul>${project.tools.map((tool) => `<li>${escapeHtml(tool)}</li>`).join("")}</ul></div>
      </aside>
    </div>
    ${related.length ? `<section class="shell related"><div class="section-heading"><p class="eyebrow">Continue exploring</p><h2>Related projects</h2></div><div class="project-grid compact">${related.map(projectCard).join("")}</div></section>` : ""}`;
}
