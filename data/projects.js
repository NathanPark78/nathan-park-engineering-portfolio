export const projects = [
  {
    slug: "niddk-wearable",
    featured: true,
    title: "MyoWeave",
    eyebrow: "Senior design · wearable systems",
    year: "2025–2026",
    status: "Final capstone prototype",
    visibility: "public",
    domain: "Smart textiles, embedded sensing, and physiological data tooling",
    role: "Wearable-systems contributor and data-tooling lead",
    mentor: "Dr. Kong Y. Chen, NIDDK / National Institutes of Health",
    summary: "A seven-sensor smart-textile prototype exploring how a compression garment can combine movement, light, temperature, and heart-rate sensing for circadian research.",
    lead: "MyoWeave explored whether a comfortable textile platform could collect physiological and environmental signals across the body. Five design-build-test cycles took the project from placement studies to an integrated garment, balancing sensor contact, movement, protected routing, and interpretable data.",
    tags: ["Smart textiles", "Wearables", "Physiological sensing", "Verification"],
    tools: ["Embedded sensing", "Python", "PPG", "Motion sensing", "Textile integration", "Rapid prototyping"],
    problem: [
      "The design challenge was to integrate seven distributed sensing channels in a compression garment that supports movement, comfortable contact, protected connections, and useful data capture."
    ],
    requirements: [],
    ownership: [
      "Contributed to research, device design and assembly, coding and analysis, design-build-test work, and final reporting.",
      "Supported sensor integration and garment assembly, and built the Python logging and live-analysis workflow."
    ],
    process: [
      ["Explore", "Use early sleeve and wrist concepts to learn how placement and fit affect the wearable system."],
      ["Integrate", "Iterate garment layout, sensor mounts, and flexible routing as the sensing system expanded."],
      ["Evaluate", "Combine data logging and reference comparisons to review prototype behavior and define the limits of the early model."
      ]
    ],
    build: [
      "A compression garment integrated seven sensors for movement, ambient light, skin temperature, and PPG heart rate.",
      "Flexible routing, dedicated mounts, embedded acquisition, and Python analysis supported wearable trials and live data review."
    ],
    verification: [
      "Stationary and activity trials compared heart-rate output with an ActiGraph reference and an Apple Watch. In one treadmill trial, high-confidence PPG samples had a reported Pearson correlation of 0.963 with ActiGraph; no separate Apple Watch agreement statistic is reported.",
      "The Activation-Recovery Score is an exploratory, subject-specific measure. These early trials do not establish clinical performance or circadian-phase accuracy."
    ],
    metrics: [
      { value: "7", label: "Integrated sensors", note: "Movement, light, temperature, and heart-rate sensing in one garment." },
      { value: "5", label: "Design-build-test cycles", note: "From early placement concepts to an integrated prototype." }
    ],
    decisions: [],
    nextSteps: [],
    proofPoints: [],
    outcome: "Five design-build-test cycles produced an integrated seven-sensor garment and an early analysis workflow, with initial reference-device comparison to guide future validation.",
    limitations: "Results are preliminary. Repeatability, multi-participant performance, Apple Watch agreement, and the activation-recovery model remain unvalidated.",
    links: [],
    media: [
      { src: "assets/media/niddk-wearable/poster-presentation.jpg", alt: "MyoWeave team presenting the project poster", caption: "MyoWeave poster presentation day." },
      { src: "assets/media/niddk-wearable/garment-prototype.jpeg", alt: "MyoWeave compression garment with distributed sensors and routed wiring", caption: "Integrated compression-garment prototype with distributed sensing." },
      { src: "assets/media/niddk-wearable/trial-wearer.png", alt: "Participant wearing the MyoWeave prototype during a trial", caption: "Wearer trial used to review placement, mobility, and body-interface behavior." }
    ],
    links: [
      { label: "Watch the full trial run", href: "https://drive.google.com/file/d/1RqsKu3y-0-iBXbhmKVSwm5bMYaM9kYpD/view?usp=sharing", primary: true }
    ],
    sources: [
      ["Dr. Kong Y. Chen — NIDDK staff biography", "https://www.niddk.nih.gov/about-niddk/staff-directory/biography/chen-kong"]
    ],
    related: ["astro-flexion", "pulseox-enclosure"]
  },
  {
    slug: "astro-flexion",
    featured: true,
    title: "Astro Flexion",
    eyebrow: "Founder-led R&D · wearable sensing",
    year: "2024–2026 · historical project",
    status: "Historical founder-led R&D",
    visibility: "public",
    domain: "Wearable sensing and early product development",
    role: "Founder / Technical Lead",
    summary: "Founder-led exploration of a wearable muscle-sensing concept, combining user discovery, early prototyping, and a structured data-capture workflow.",
    lead: "Astro Flexion asked whether muscle activity could be measured in a more accessible wearable. I approached it as both a user problem and an engineering question: understand the workflow, build a way to capture repeatable data, then use early experiments to identify what needed to be proven next.",
    tags: ["Wearable sensing", "Product discovery", "Prototyping", "Data analysis"],
    tools: ["Wearable prototyping", "Embedded data capture", "Python analysis", "User discovery"],
    problem: [
      "A wearable measurement is only useful if its placement, comfort, and workflow fit the needs of the person using it.",
      "Early experiments had to distinguish a functioning data-capture workflow from evidence that the wearable measurement itself was reliable."
    ],
    requirements: [],
    ownership: [
      "Founded the concept and led user discovery, product framing, and MVP planning.",
      "Built an early multi-channel data-capture and review workflow to support prototype experiments.",
      "Used experiment results to identify signal-quality and repeatability questions for future development."
    ],
    process: [
      ["Understand", "Explore user workflows and the context in which a wearable measurement might be useful."],
      ["Prototype", "Build an early sensing and data-capture workflow to learn what the system could record."],
      ["Decide", "Review experiment quality and use remaining questions to shape future validation." ]
    ],
    build: [
      "Created an early multi-channel acquisition workflow with organized run records and basic signal review.",
      "Used exploratory processing to inspect captured data and identify where better test controls and repeatability were needed."
    ],
    verification: [
      "Early trials included sensor-data capture and review. A locked validation protocol, reference-device agreement, placement repeatability, and clinical evaluation were not established."
    ],
    decisions: [],
    nextSteps: [],
    proofPoints: [],
    outcome: "Astro Flexion combined user discovery with early wearable-sensing experiments and a data-review workflow, identifying the questions a future prototype would need to answer.",
    limitations: "Early development evidence only; wearable signal performance and repeatability have not been established.",
    media: [
      { src: "assets/media/astro-flexion/astro-flexion-logo.webp", fit: "contain", alt: "Astro Flexion project mark", caption: "Astro Flexion identity used during the founder-led exploration of accessible muscle-sensing workflows." },
      { src: "assets/media/astro-flexion/evidence-pipeline.png", fit: "contain", alt: "Astro Flexion development process from user question through next experiment", caption: "High-level development loop connecting user needs, prototype learning, and the next validation question." }
    ],
    sources: [
      ["Mechanomyography literature review: sensor characteristics and applications", "https://pubmed.ncbi.nlm.nih.gov/24856875/"]
    ],
    related: ["niddk-wearable", "pulseox-enclosure"]
  },
  {
    slug: "lilly-validation",
    featured: true,
    title: "Eli Lilly | Validation Workflow and Readiness",
    eyebrow: "Industry internship · regulated manufacturing",
    year: "2025",
    status: "Internship case study",
    visibility: "public",
    domain: "GMP validation, equipment readiness, and technical workflow improvement",
    role: "TS/MS Validation Intern",
    summary: "Workflow mapping and lightweight digital tools to clarify equipment readiness and manufacturing handoffs.",
    lead: "During an Eli Lilly internship, I worked across validation and manufacturing-readiness workflows where status, ownership, and dependencies had to be clear enough to support the next action. The engineering challenge was not simply to build a tracker; it was to understand how people used the information, find where handoffs became ambiguous, and shape a practical tool with the right partners.",
    tags: ["GMP", "Validation", "NPI", "Workflow", "Documentation"],
    tools: ["Excel", "Power Apps", "Power Automate", "Smartsheet"],
    problem: [
      "Readiness work crossed people, equipment, documentation, and schedules. A status without an owner or next step was difficult to use.",
    ],
    ownership: [
      "Mapped user workflows and surfaced handoffs, blockers, and information needs.",
      "Contributed to digital workflow and decision-support tools using Excel, Power Apps, Power Automate, and Smartsheet.",
      "Worked with validation, quality, process/equipment owners, operations, and digital partners to review and refine solutions."
    ],
    process: [
      ["Observe", "Follow the work and ask where status or handoffs stop being actionable."],
      ["Model", "Translate the workflow into requirements, ownership, dependencies, and clear states."],
      ["Prototype", "Build a lightweight digital view or automation around the actual decision need."],
      ["Review", "Bring the people who execute and govern the process into feedback and iteration."]
    ],
    build: ["Contributed to equipment-readiness and qualification visibility, inspection and procedure decision support, integrated schedule tracking, and workflow automation."],
    verification: ["The work included workflow mapping and iterative tool development. Quantified adoption, time savings, schedule impact, and productivity outcomes were not assessed for this case study."],
    decisions: [
      ["Start with people and handoffs", "Understand who creates, reviews, and acts on information before choosing a tool."],
      ["Make state actionable", "Pair readiness status with ownership, dependencies, and a next step."],
      ["Design with partners", "Use feedback from process owners and digital collaborators to test clarity and fit."],
      ["Design with partners", "Use feedback from process owners and digital collaborators to test clarity and fit."]
    ],
    outcome: "A cross-functional, workflow-first approach to improving visibility and supporting decisions across validation and manufacturing-readiness work.",
    limitations: "This case study describes workflow and tool contributions; it does not claim quantified business or validation outcomes.",
    sources: [["FDA, Process Validation: General Principles and Practices", "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/process-validation-general-principles-and-practices"]],
    media: [
      { src: "assets/media/lilly-validation/eli-lilly-site.jpg", alt: "Eli Lilly Concord facility building", caption: "Eli Lilly Concord site. Photo credit: Charlotte Business Journal." },
      { src: "assets/media/lilly-validation/workflow.png", alt: "Workflow showing observe, model, prototype, and review stages", caption: "Workflow-first problem solving: understand the work, model the need, prototype, and review." }
    ],
    related: ["niddk-wearable", "phoenix-research"]
  },
  {
    slug: "phoenix-research",
    featured: false,
    title: "PHOENIX | Passive Thermal Research",
    eyebrow: "IoMT Lab · publication in preparation",
    year: "2026–2027 planned submission milestone",
    status: "Research in progress",
    visibility: "teaser",
    domain: "Passive thermal research for austere-care constraints",
    role: "Research and prototype-integration contributor",
    summary: "A publication-pending research effort exploring passive thermal support under austere-care constraints.",
    lead: "PHOENIX addresses a challenging care context where environmental constraints can complicate temperature management. My contribution included prototype-integration support, instrumented bench testing, analysis, and technical documentation. Because the work is being prepared for publication, this page communicates the research context and work sequence without exposing the device architecture, unpublished results, or experimental specifics.",
    tags: ["Thermal systems", "Benchtop testing", "Medical devices", "Research"],
    tools: ["Thermal instrumentation", "Data analysis", "Prototype testing"],
    problem: [
      "Show why the research context matters and what work stages I supported while protecting unpublished architecture, figures, and results."
    ],
    ownership: [
      "Supported prototype integration and instrumented benchtop testing.",
      "Contributed to analysis and technical documentation."
    ],
    process: [
      ["Frame", "Relate the research question to austere-care constraints."],
      ["Integrate", "Support prototype integration and instrumented bench work."],
      ["Analyze", "Review evidence and document work with the research team."],
      ["Prepare", "Hold detailed public claims until manuscript submission and release review."]
    ],
    build: ["A research prototype and benchtop workflow were used to investigate the concept. Construction details, component arrangement, experimental protocol, and performance values are intentionally not described here."],
    verification: ["Instrumented bench testing and analysis were part of the research work. No specific performance result or medical-device safety/effectiveness claim is made on this page."],
    decisions: [
      ["Protect unpublished work", "No architecture, dimensions, materials, protocol, figure, or result is disclosed."],
      ["Keep the story useful", "Show the problem context, work sequence, and my contribution at a non-enabling level."],
      ["Release in stages", "A fuller account can follow submission and appropriate project/IP review."]
    ],
    nextSteps: ["Planned full-paper submission milestone: January 24, 2027 (IEEE EMBC; subject to project readiness and author decisions). Public details remain withheld until the work is submitted and cleared."],
    outcome: "A high-level research teaser that preserves the significance and timeline of the work without preempting publication.",
    limitations: "Architecture, figures, protocols, and performance results intentionally withheld pending submission and release review. Submission is planned, not represented as completed or accepted.",
    sources: [["IEEE EMBC 2027 paper information", "https://embc.embs.org/2027/papers/"]],
    media: [{ src: "assets/media/phoenix-research/teaser.png", alt: "Abstract, non-enabling illustration for a publication-pending thermal research project", caption: "High-level project visual; technical design and results are intentionally omitted." }],
    related: ["lilly-validation", "niddk-wearable"]
  },
  {
    slug: "pulseox-enclosure",
    featured: false,
    title: "IoMT ICU Patch | Pulse-Oximeter Enclosure",
    eyebrow: "IoMT Lab · human-centered mechanical design",
    year: "2025–2026",
    status: "Selected hybrid concept",
    visibility: "public",
    domain: "Wearable enclosure design and rapid prototyping",
    role: "Mechanical design and prototyping contributor",
    summary: "An ICU pulse-oximeter enclosure evolved from printed material experiments to a selected two-part PLA/TPU concept.",
    lead: "The ICU patch project translated a wearable monitoring concept into a package shaped by intended clinical workflow and feedback from VUMC clinicians in the VISE space. I treated comfort, retention, usability, and design for manufacture as connected engineering questions, using successive CAD and printed iterations to compare what each material and interface could contribute.",
    tags: ["Human factors", "DFMA", "SolidWorks", "PLA / TPU", "Rapid prototyping"],
    tools: ["SolidWorks", "PLA and TPU 3D printing", "Design iteration", "Human-factors reasoning"],
    problem: ["A rigid enclosure can protect and locate components but may be uncomfortable at the body interface; a fully compliant concept introduces different fit, retention, and fabrication tradeoffs."],
    ownership: ["Translated concept sketches into CAD and enclosure iterations.", "Compared PLA, TPU, and hybrid constructions through prototype exploration.", "Used feedback from VUMC clinicians in the VISE space to inform workflow considerations, alongside patient comfort, usability, cause analysis, and fabrication constraints."],
    process: [
      ["Frame needs", "Translate device packaging and user/workflow considerations into mechanical design questions."],
      ["Explore", "Move from PLA concepts to TPU experiments, then assess a two-part hybrid approach."],
      ["Prototype", "Use printed versions to review geometry, assembly, retention, and interface tradeoffs."],
      ["Select", "Carry the rigid-plus-compliant concept forward as the selected design direction."]
    ],
    build: ["The selected concept combines a rigid PLA enclosure with a compliant TPU body-contact/retention element. Earlier explorations included all-PLA and all-TPU directions and variations in the two materials and their interfaces."],
    verification: ["Iterative CAD and prototype exploration incorporated clinician feedback as design input; this was not a formal usability study. Cleaning, optical signal quality, and clinical performance were not evaluated."],
    decisions: [["Use a hybrid", "Separate structural enclosure needs from the compliant body interface rather than forcing one material to serve both."], ["Design around workflow", "Consider how the device is placed, secured, accessed, and removed in a clinical setting."], ["Keep claims mechanical", "The enclosure work does not establish pulse-oximeter accuracy or clinical performance."]],
    outcome: "A selected two-part hybrid concept emerged from PLA-to-TPU-to-hybrid iteration, with human factors and manufacturability guiding the design direction.",
    limitations: "Selected mechanical concept only; comfort, cleaning, sensing, and clinical performance have not been validated.",
    sources: [["FDA, Applying Human Factors and Usability Engineering to Medical Devices", "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/applying-human-factors-and-usability-engineering-medical-devices"]],
    media: [
      { src: "assets/media/pulseox-enclosure/selected-hybrid-cad.png", alt: "CAD rendering of the selected hybrid pulse-oximeter enclosure concept", caption: "Selected hybrid concept rendering: a rigid enclosure with a compliant interface element." },
      { src: "assets/media/pulseox-enclosure/concept-sketch.jpg", alt: "Concept sketch for the wearable pulse-oximeter casing", caption: "Early sketch translated into successive CAD and printed iterations." },
      { src: "assets/media/pulseox-enclosure/printed-iterations.jpg", alt: "Printed enclosure prototypes from successive design iterations", caption: "Prototype iterations used to consider geometry, fit, retention, and material tradeoffs." }
    ],
    related: ["niddk-wearable", "mecha-gauntlet"]
  },
  {
    slug: "dong-lab",
    featured: false,
    category: "research",
    title: "Dong Lab | Magnetic Actuation Research",
    eyebrow: "Biomedical engineering research · published",
    year: "2023–2024",
    status: "Published research contribution",
    visibility: "public",
    domain: "Magnetic actuation for airway-stent delivery research",
    role: "Research contributor; author contribution listed as performed research",
    summary: "Prototype fixtures and magnetic-actuation experiments supporting published research on airway-stent delivery.",
    lead: "In the Dong Lab, I contributed to hardware and experimental work supporting research into magnetic actuation for airway-stent delivery. My project records include endoscope demonstration fixtures, a chest-mounted prototype, and benchtop characterization. The published paper provides the broader research context; this case study keeps my contribution distinct from the work of the full author team.",
    tags: ["Biomedical research", "Magnetic actuation", "Prototyping", "Experimental characterization"],
    tools: ["CAD and fixture design", "Benchtop prototyping", "Magnetic-field measurement", "Experimental documentation"],
    problem: ["A translational delivery concept required physical fixtures and experiments to make prototype behavior observable and support research-team evaluation."],
    ownership: ["Built demonstration fixtures for trachea/endoscope work and contributed to a chest-mounted magnetic-actuation prototype.", "Iterated track translation, rotation, straps, and chest-model integration.", "Contributed to field/distance and actuation-frequency/voltage characterization and airway-stent preparation."],
    process: [["Prototype", "Build fixtures and physical arrangements that let the team inspect device integration."], ["Characterize", "Vary distance, field, and drive conditions to understand benchtop behavior."], ["Iterate", "Refine translation, rotation, retention, and model interfaces based on observed handling and test needs."], ["Document", "Place individual experiments in the context of the collaborative published study."]],
    build: ["The project included endoscope demonstration fixtures and a chest-mounted magnetic-actuation prototype. A separate cycloid-inspired electromagnetic energy-harvester workstream explored printed geometry and hand-wound coils."],
    verification: ["The published PNAS article reports the team's research. N.P. is credited in the article's author-contribution statement with performing research. An exploratory energy-harvester iteration recorded 5 mV after 25 seconds in project notes; this is an isolated prototype observation, not a published result or performance claim."],
    decisions: [["Separate contribution from paper claims", "Use the paper for shared research context while attributing only documented individual work."], ["Treat prototypes as experimental tools", "Use fixtures and characterization to answer integration and behavior questions."], ["Keep side work distinct", "The energy-harvester exploration is a separate iteration and is not part of the airway-stent paper's results."]],
    outcome: "Contributed prototype and characterization work to a collaborative, peer-reviewed research program, alongside a separate exploratory energy-harvester iteration.",
    limitations: "This is not a claim of sole project ownership or authorship of every experiment/result. The 5 mV energy-harvester observation is preliminary and separate from the publication.",
    sources: [["Published PNAS article (full text)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC11573673/"]],
    media: [
      { src: "assets/media/dong-lab/actuation-prototype.png", alt: "Chest-mounted magnetic actuation prototype on a torso model", caption: "Physical integration prototype used in the research workflow." },
      { src: "assets/media/dong-lab/actuation-cad.png", alt: "CAD assembly for the magnetic actuation prototype", caption: "CAD assembly supporting integration and fixture iteration." },
      { src: "assets/media/dong-lab/field-characterization.png", alt: "Magnetic field characterization plot", caption: "Example of benchtop characterization included in project records." },
      { src: "assets/media/dong-lab/energy-harvester.png", alt: "Cycloid-inspired electromagnetic energy harvester prototype", caption: "Separate exploratory energy-harvester iteration; not part of the published airway-stent result." }
    ],
    related: ["phoenix-research", "syringe-pump"]
  },
  {
    slug: "syringe-pump",
    featured: false,
    title: "Rapid Prototyping Flow | Syringe Pump",
    eyebrow: "Mechatronics · rapid prototyping",
    year: "Course project",
    status: "Functional prototype",
    visibility: "public",
    domain: "Embedded controls and benchtop fluid delivery",
    role: "Electrical engineering and controls; CAD mentor and system programmer",
    summary: "An Arduino-controlled syringe-pump prototype integrating a lead-screw carriage, stepper motor, and run-state feedback.",
    lead: "The Rapid Prototyping Flow project converted a desired delivery rate into motor motion and a buildable benchtop system. My role centered on electrical engineering and control code; I also mentored teammates on CAD as the mechanical assembly and electronics came together.",
    tags: ["Arduino", "Electrical engineering", "CAD mentoring", "Rapid prototyping"],
    tools: ["Arduino Uno", "Stepper-motor control", "Electronics integration", "CAD collaboration", "3D printing"],
    problem: ["The team needed a compact mechanism to advance common syringe sizes at a controllable rate, while making run, pause, and empty states understandable."],
    ownership: ["Led electrical/control-system contributions and wrote the system code.", "Mentored teammates on CAD and coordinated mechanical needs with the control implementation.", "Integrated motor, sensing, and user-feedback elements into a working prototype."],
    process: [["Translate", "Connect the target flow rate to syringe geometry and carriage motion."], ["Integrate", "Coordinate a lead-screw carriage, stepper drive, sensing, and user feedback."], ["Program", "Implement operating states and motor behavior on the Arduino platform."], ["Refine", "Use team build feedback to resolve mechanical/electrical integration needs."]],
    build: ["The prototype used an Arduino Uno, NEMA 17 stepper motor, lead-screw carriage, custom printed parts, and a syringe mount supporting 10 mL and 20 mL syringes. Limit sensing and RGB feedback indicated operating state."],
    verification: ["The course report documents functional system integration and a theoretical flow-rate conversion. This prototype has not been medically validated or evaluated for clinical use; measured flow accuracy, repeatability, and back-pressure performance were not established."],
    decisions: [["Treat flow as a system problem", "Relate software commands to syringe dimensions and mechanical travel."], ["Pair motion with feedback", "Make the operating state visible rather than relying on motor motion alone."], ["Coordinate across disciplines", "Use CAD mentoring and interface discussion to keep mechanical design aligned with controls."]],
    outcome: "A functional rapid-prototyping system demonstrated coordinated mechanical, electrical, and software integration for syringe delivery.",
    limitations: "Course demonstrator only; it does not establish clinical suitability, safety, or delivery performance.",
    sources: [],
    media: [
      { src: "assets/media/syringe-pump/assembly.jpg", alt: "Assembled syringe pump with syringe carriage and lead screw", caption: "Integrated benchtop prototype." },
      { src: "assets/media/syringe-pump/cad.jpg", alt: "CAD view of the syringe pump assembly", caption: "Mechanical assembly developed with the team." },
      { src: "assets/media/syringe-pump/electronics.jpg", alt: "Electronics and wiring for the syringe pump", caption: "Electrical integration supporting motor control and system feedback." }
    ],
    related: ["mecha-gauntlet", "dong-lab"]
  },
  {
    slug: "mecha-gauntlet",
    featured: false,
    title: "Mechatronics Hand | Cable-Driven Gauntlet",
    eyebrow: "Mechatronics · human-centered actuation",
    year: "2025",
    status: "Demonstration prototype",
    visibility: "public",
    domain: "Cable-driven hand mechanism and embedded control",
    role: "Student designer, builder, and programmer",
    summary: "A five-finger cable-driven hand translating finger-level control inputs into coordinated flexion and spring-assisted return.",
    lead: "The mechatronics hand was designed as a usable demonstration system, not simply a set of moving fingers. I considered how a person would intentionally command the mechanism, how cable routing and tension shape the response, and how to make actuation feel controlled rather than abrupt. Those choices informed the mechanical layout, input mapping, and motion profile.",
    tags: ["Mechatronics", "Cable drive", "Human factors", "Embedded control"],
    tools: ["CAD", "Arduino", "Servo control", "Cable transmission", "3D printing"],
    problem: ["A five-finger mechanism needed to translate intuitive input into repeatable flexion while managing cable routing, tension, return motion, fit, and pinch/abrupt-motion considerations."],
    ownership: ["Designed and built the demonstration hand and its cable-driven finger mechanism.", "Programmed the input-to-actuation mapping and motion behavior.", "Considered usability, intentional control, routing, adjustability, and user-facing interaction throughout the design."],
    process: [["Map intent", "Use one potentiometer input per finger so control remains direct and understandable."], ["Transmit motion", "Use servo-driven spools and routed cables to pull each finger into flexion."], ["Return compliantly", "Use extension springs to restore the fingers without requiring a second powered cable path."], ["Tune behavior", "Ramp PWM commands to reduce abrupt motion and improve perceived controllability."]],
    build: ["Custom phalanx sections, servo-driven cable spools, five potentiometer inputs, and spring-assisted extension formed the prototype. Cable path and tension were treated as part of the user experience, not just packaging details."],
    verification: ["The course report documents a working demonstration prototype; grasp force, range of motion, latency, durability, and fit were not quantitatively evaluated."],
    decisions: [["Prioritize user intent", "Keep finger controls legible and one-to-one rather than hiding the command mapping."], ["Design around cable behavior", "Account for routing, tension, friction, and adjustment when placing mechanical elements."], ["Shape the motion", "Use ramped actuation and compliant return to avoid an unnecessarily abrupt interaction."], ["Bound the claim", "Present as a mechatronics demonstration, not a prosthetic or assistive device."]],
    outcome: "A five-finger cable-driven demonstration hand connected human input, mechanical transmission, and controlled actuation in a single prototype.",
    limitations: "Demonstration prototype only; it is not a validated prosthetic or assistive device.",
    sources: [],
    media: [
      { src: "assets/media/mecha-gauntlet/prototype.jpeg", alt: "Five-finger cable-driven hand demonstration prototype", caption: "Physical prototype showing the hand, cable actuation, servos, and user controls." },
      { src: "assets/media/mecha-gauntlet/finger-cad.png", alt: "CAD model of the hand and finger mechanism", caption: "Finger and phalanx geometry developed for the cable-driven mechanism." },
      { src: "assets/media/mecha-gauntlet/motion-prototype.jpeg", alt: "Mechatronics hand prototype during integration", caption: "Integration evidence from the course prototype build." }
    ],
    related: ["pulseox-enclosure", "syringe-pump"]
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
