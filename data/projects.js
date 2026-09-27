export const projects = [
  {
    slug: "niddk-wearable",
    featured: true,
    title: "Multimodal Wearable Sensing",
    eyebrow: "Wearable systems",
    year: "Year pending",
    status: "Public-safe case study in development",
    visibility: "public",
    domain: "Wearable sensing and system integration",
    summary: "A multimodal wearable platform connecting physiological and environmental sensing to a synchronized data pipeline.",
    tags: ["Wearables", "Sensors", "ESP32", "Python", "Verification"],
    tools: ["ESP32", "Python", "IMU", "PPG", "Temperature", "Light sensing"],
    problem: [
      "Explain the sensing problem and intended use without overstating clinical performance.",
      "Show how physical placement, sensor behavior, timing, and data integrity shaped the system."
    ],
    ownership: [
      "Sensor research and body-site reasoning",
      "Firmware and serial data-pipeline support",
      "System documentation and verification planning"
    ],
    process: [
      ["Define sensing context", "Document intended signals, placement constraints, and use environment."],
      ["Integrate streams", "Coordinate IMU, light, temperature, and PPG-related acquisition."],
      ["Build data tooling", "Log synchronized data and prepare reviewable visualizations."],
      ["Verify behavior", "Check status, stream integrity, placement repeatability, and agreement definitions."]
    ],
    decisions: [
      ["Placement is an interface", "Treat repeatable body placement as part of the mechanical and measurement system."],
      ["Status before interpretation", "Expose sensor confidence and acquisition state before presenting derived signals."],
      ["Claims follow evidence", "Use cross-device agreement language only after its method and result are documented."]
    ],
    outcome: "This page will demonstrate wearable systems thinking and synchronized sensing without claiming clinical accuracy.",
    limitations: "Approved prototype media and the exact agreement definition are still required before public launch.",
    media: [],
    related: ["astro-flexion", "pulseox-enclosure"]
  },
  {
    slug: "astro-flexion",
    featured: true,
    title: "Astro Flexion",
    eyebrow: "Wearable R&D",
    year: "Historical project — ended Sep 2026",
    status: "Public-safe historical case study",
    visibility: "public",
    domain: "User discovery, sensing, and prototype planning",
    summary: "Founder-led wearable R&D connecting user learning, mechanical muscle sensing, acquisition tooling, and prototype iteration.",
    tags: ["MMG", "Wearables", "Data acquisition", "Product discovery"],
    tools: ["Python", "Arduino", "Teensy", "Signal features", "CSV pipelines"],
    problem: [
      "Explore how mechanical muscle activity could be captured in a wearable form outside specialized laboratory workflows.",
      "Keep the public story focused on instrumentation and learning—not diagnostic or clinical claims."
    ],
    ownership: [
      "Customer discovery and product direction",
      "Prototype and MVP planning",
      "Acquisition pipeline and signal-feature exploration"
    ],
    process: [
      ["Learn", "Collect user and workflow input to identify the real measurement constraints."],
      ["Translate", "Turn recurring needs into placement, comfort, and acquisition requirements."],
      ["Instrument", "Create repeatable raw and processed logging outputs."],
      ["Review", "Use per-sensor plots and feature outputs to define the next experiment."]
    ],
    decisions: [
      ["Historical framing", "Describe the project accurately as prior founder-led R&D rather than an active venture."],
      ["Repeatable records", "Use timestamped run folders and consistent output schemas to support iteration."],
      ["Public-safe scope", "Keep proprietary architecture and unsupported performance metrics out of the public site."]
    ],
    outcome: "The finished case study will show a credible user-to-requirement-to-signal learning loop.",
    limitations: "No diagnostic, clinical-validation, or unverified improvement claim will be published.",
    media: [],
    related: ["niddk-wearable", "pulseox-enclosure"]
  },
  {
    slug: "lilly-validation",
    featured: true,
    title: "Validation Workflow and Manufacturing Readiness",
    eyebrow: "Regulated execution",
    year: "Date pending",
    status: "Sanitized case study",
    visibility: "public",
    domain: "GMP validation and technical workflow improvement",
    summary: "A public-safe account of translating fragmented equipment-readiness information into clearer workflow state and technical action.",
    tags: ["GMP", "Validation", "NPI", "Workflow", "Documentation"],
    tools: ["Excel", "Power Apps", "Power Automate", "Smartsheet"],
    problem: [
      "Teams needed clearer visibility into readiness, ownership, dependencies, and next actions.",
      "The portfolio must communicate the engineering consequence without exposing proprietary systems or documentation."
    ],
    ownership: [
      "Stakeholder workflow mapping",
      "Digital tool and decision-logic development",
      "Qualification visibility and technical coordination"
    ],
    process: [
      ["Observe", "Identify where readiness information became fragmented or difficult to act on."],
      ["Map", "Convert workflows into requirements, states, ownership, and dependencies."],
      ["Build", "Create generic tool logic and reviewable workflow representations."],
      ["Review", "Use stakeholder feedback to improve clarity and operating usefulness."]
    ],
    decisions: [
      ["Sanitize the visual", "Rebuild generic process diagrams instead of publishing internal screenshots."],
      ["Show consequence", "Connect workflow clarity to validation and manufacturing-readiness decisions."],
      ["Protect context", "Exclude system names, SOP content, equipment identifiers, and plant-sensitive detail."]
    ],
    outcome: "The page will show validation discipline and manufacturing consequence through a generic, newly drawn workflow.",
    limitations: "Any user counts, schedule effects, or efficiency metrics require explicit public-use confirmation.",
    media: [],
    related: ["niddk-wearable", "phoenix-research"]
  },
  {
    slug: "phoenix-research",
    featured: false,
    title: "Passive Thermal Medical-Device Research",
    eyebrow: "Publication pending",
    year: "Submission planned Dec 2026",
    status: "Non-enabling public teaser",
    visibility: "teaser",
    domain: "Thermal hardware and benchtop research",
    summary: "Design, testing, analysis, and documentation for a passive thermal medical-device concept in austere-care contexts.",
    tags: ["Thermal systems", "Benchtop testing", "Medical devices", "Research"],
    tools: ["Thermal instrumentation", "Data analysis", "Prototype testing"],
    problem: [
      "Communicate the engineering context and personal contribution while protecting unpublished architecture and results."
    ],
    ownership: [
      "Prototype integration support",
      "Instrumented benchtop testing",
      "Analysis and technical documentation"
    ],
    process: [
      ["Frame constraints", "Define the use environment and test questions at a non-enabling level."],
      ["Build and test", "Conduct prototype and benchtop work without publishing the physical stack."],
      ["Analyze", "Review performance evidence within the research team."],
      ["Publish responsibly", "Release architecture and results only after written clearance."]
    ],
    decisions: [
      ["Withhold the stack", "No layer sequence, labeled photograph, material combination, or dimensions appear publicly."],
      ["Withhold results", "No unpublished figure, curve, metric, or manuscript language appears publicly."],
      ["Retain engineering signal", "The page still communicates testing, analysis, documentation, and constraint-driven design."]
    ],
    outcome: "A safe research teaser that can later become a full case study after submission and clearance.",
    limitations: "Architecture, figures, and performance results intentionally withheld pending publication and IP review.",
    media: [],
    related: ["lilly-validation", "niddk-wearable"]
  },
  {
    slug: "pulseox-enclosure",
    featured: false,
    title: "IoMT Enclosure Iteration",
    eyebrow: "Mechanical prototyping",
    year: "Date pending",
    status: "Supporting project",
    visibility: "public",
    domain: "CAD-to-print medical-device packaging",
    summary: "Sketch-to-CAD-to-print enclosure and flange iteration for an IoMT monitoring concept.",
    tags: ["SolidWorks", "3D printing", "Packaging", "Iteration"],
    tools: ["SolidWorks", "Additive manufacturing", "Prototype review"],
    problem: ["Translate a device concept into reviewable enclosure and attachment geometry."],
    ownership: ["Concept sketch translation", "CAD development", "Printed iteration and review"],
    process: [
      ["Sketch", "Capture casing and attachment intent."],
      ["Model", "Develop enclosure, flange, insert, and interface geometry."],
      ["Print", "Create physical prototypes for fit and clearance review."],
      ["Iterate", "Use fabrication feedback to revise the geometry."]
    ],
    decisions: [["Mechanical evidence only", "Do not imply clinical validation or sensing performance from enclosure work."]],
    outcome: "A compact supporting page centered on mechanical iteration and physical evidence.",
    limitations: "Final public-safe images and exact contribution wording still require review.",
    media: [],
    related: ["niddk-wearable", "astro-flexion"]
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

