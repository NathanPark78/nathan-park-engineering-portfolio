import { site } from "../../data/site.js";
import { projects } from "../../data/projects.js";
import { escapeHtml, mountChrome, projectCard } from "./shared.js";

mountChrome("home");

const intro = document.querySelector("[data-home-intro]");
if (intro) {
  intro.innerHTML = `
    <p class="eyebrow">${escapeHtml(site.education)}</p>
    <h1>${escapeHtml(site.thesis)}</h1>
    <p class="lede">${escapeHtml(site.introduction)}</p>
    <div class="button-row">
      <a class="button primary" href="projects.html">View selected work</a>
      <a class="button secondary" href="experience.html">Experience</a>
    </div>`;
}

const capabilities = document.querySelector("[data-capabilities]");
if (capabilities) {
  capabilities.innerHTML = site.capabilities.map((item) => `
    <article class="capability-card"><span>${item.number}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("");
}

const featured = document.querySelector("[data-featured-projects]");
if (featured) featured.innerHTML = projects.filter((project) => project.featured).map(projectCard).join("");

const loop = document.querySelector("[data-build-loop]");
if (loop) {
  loop.innerHTML = site.buildLoop.map(([title, body], index) => `
    <article class="loop-step"><span>${String(index + 1).padStart(2, "0")}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join("");
}

const workModes = document.querySelector("[data-work-modes]");
if (workModes) {
  workModes.innerHTML = site.workModes.map((item) => `
    <article class="work-mode-card">
      <div class="work-mode-kicker"><span>${escapeHtml(item.number)}</span><em>${escapeHtml(item.principle)}</em></div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.body)}</p>
    </article>`).join("");
}
