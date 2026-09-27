import { projects } from "../../data/projects.js";
import { escapeHtml, mountChrome, projectCard } from "./shared.js";

mountChrome("projects");

const featuredRoot = document.querySelector("[data-project-list='featured']");
const researchRoot = document.querySelector("[data-project-list='research']");
const supportingRoot = document.querySelector("[data-project-list='supporting']");

if (featuredRoot) featuredRoot.innerHTML = projects.filter((project) => project.featured).map(projectCard).join("");
if (researchRoot) researchRoot.innerHTML = projects.filter((project) => project.visibility === "teaser").map(projectCard).join("");
if (supportingRoot) {
  supportingRoot.innerHTML = projects
    .filter((project) => !project.featured && project.visibility !== "teaser")
    .map((project) => `
      <a class="archive-row" href="projects/${project.slug}.html">
        <span>${escapeHtml(project.eyebrow)}</span>
        <strong>${escapeHtml(project.title)}</strong>
        <em>${escapeHtml(project.domain)}</em>
        <b>→</b>
      </a>`).join("");
}

