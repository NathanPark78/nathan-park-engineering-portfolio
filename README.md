# Nathan Park Engineering Portfolio

Private, structure-first prototype for a static engineering portfolio intended for GitHub Pages.

## Purpose

The site demonstrates a recruiter-facing information architecture for wearable hardware, medical-device development, validation, and mechanical engineering work. Content is intentionally incomplete while claims, media, publication status, and confidentiality boundaries are reviewed.

## Structure

- `index.html` — focused homepage and featured work
- `projects.html` — complete public-safe project index
- `experience.html` — compact experience and education framework
- `contact.html` — contact and resume placeholders
- `projects/*.html` — stable project routes
- `data/site.js` — profile, navigation, capabilities, and contact data
- `data/projects.js` — all project content and disclosure states
- `assets/js/project-page.js` — reusable case-study renderer
- `assets/css/styles.css` — shared responsive visual system
- `assets/media/` — approved images and videos, grouped by project slug

## Project content model

Each project record supports:

- title, summary, status, year, domain, and tags
- public disclosure state
- problem and constraints
- personal ownership
- process and key decisions
- outcome and limitations
- image/video evidence with captions
- related projects

## Local preview

Serve the repository with any static HTTP server. ES modules will not work reliably when pages are opened directly with `file://`.

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publication safety

- Do not publish unpublished manuscript figures, enabling architecture, confidential industry material, personal health data, or unsupported metrics.
- Keep `visibility: "teaser"` projects non-enabling until written clearance is recorded.
- Replace all placeholder contact links before launch.
- Enabling GitHub Pages can make the website public even when repository visibility is private. Confirm the desired exposure before enabling hosting.

## License

Copyright © Nathan Park. All rights reserved. No license is granted for reuse.

