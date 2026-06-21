/**
 * ============================================================
 *  EDIT EVERYTHING HERE — single source of truth for the site
 * ============================================================
 */

export const profile = {
  name: "Prabhanjan Sharma",
  roles: ["Full Stack Developer", "Product Engineer"],
  tagline:
    "I design and ship end-to-end web products — scalable backends, polished frontends, shipped fast.",
  location: "Bangalore, India",
  email: "mprabhanjan18@gmail.com",
  phone: "+91 9172528695",
  avatar: "/images/face.jpg",
  photo: "/images/hero-portrait.jpg",
  socials: {
    github: "https://github.com/prab002",
    linkedin: "https://www.linkedin.com/in/prabhanjan-sharma-38a48a221/",
  },
};

export const about = {
  paragraphs: [
    "I'm a full-stack product engineer. I take products from zero to production — architecting Node.js backends, building fast React & Next.js frontends, and shipping the details that make software feel like a product.",
    "Over the last 3+ years I've led teams, wired up dozens of third-party integrations, built authentication flows, and owned the full SDLC from planning to deploy.",
    "I care about performance, clarity, and the small interactions users never have to think about.",
  ],
  stats: [
    { value: "~70%", label: "Faster APIs" },
    { value: "700%", label: "Retention via SSR" },
    { value: "3+", label: "Years shipping" },
    { value: "12+", label: "Production builds" },
  ],
};

export type Capability = {
  title: string;
  desc: string;
  icon: string; // lucide-react icon name
};

export const capabilities: Capability[] = [
  {
    title: "Full-stack engineering",
    desc: "End-to-end modules — React/Next.js frontends on Node.js & Express backends.",
    icon: "Layers",
  },
  {
    title: "System architecture",
    desc: "Scalable, maintainable systems and the right tech stack for the job.",
    icon: "Network",
  },
  {
    title: "Integrations & APIs",
    desc: "SendGrid, Zoho, Mapbox, Firebase, payment & CRM integrations.",
    icon: "Plug",
  },
  {
    title: "Auth & security",
    desc: "JWT, Magic Link, social login and custom verification flows.",
    icon: "ShieldCheck",
  },
  {
    title: "DevOps & CI/CD",
    desc: "GitHub Actions pipelines, Vercel & AWS deploys, near-zero downtime.",
    icon: "Rocket",
  },
  {
    title: "Technical leadership",
    desc: "Mentoring teams, code review, and shipping on deadline.",
    icon: "Users",
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Webknot",
    role: "Senior Software Developer",
    location: "Bangalore, Karnataka",
    period: "Oct 2025 — Present",
    bullets: [
      "Designed and optimized scalable backend architecture, improving API performance by ~70% with high availability and near-zero downtime.",
      "Collaborated with cross-functional AI/ML teams to integrate AI-driven features into backend systems.",
      "Enhanced application UI/UX, achieving an 80–90% improvement in usability and overall experience.",
      "Mentored and guided junior developers, ran code reviews, and enforced coding standards and technical documentation.",
      "Worked directly with clients and stakeholders to gather requirements and translate them into technical solutions, delivering on schedule with agile.",
    ],
    stack: ["Node.js", "Go", "React", "AI Integration", "System Design"],
  },
  {
    company: "Invennico TechnoLabs",
    role: "Software Developer — Team Lead",
    location: "Vadodara, Gujarat",
    period: "Apr 2025 — Sep 2025",
    bullets: [
      "Architected and implemented scalable, high-performance system architectures, owning the full SDLC from planning to deployment and post-launch support.",
      "Led CI/CD pipelines, automated deployments and code-review processes, promoting clean, efficient and maintainable code.",
      "Collaborated with clients to gather requirements, propose technical solutions and provide transparent progress updates.",
      "Facilitated daily stand-ups, sprint planning and retrospectives — driving agile delivery and improving team velocity.",
    ],
    stack: ["Architecture", "CI/CD", "DevOps", "Leadership", "Agile"],
  },
  {
    company: "Invennico TechnoLabs",
    role: "Junior Software Developer — MERN Stack",
    location: "Vadodara, Gujarat",
    period: "Jun 2024 — May 2025",
    bullets: [
      "Led full-stack development of a responsive web application on Next.js and the MERN stack, delivering a seamless user experience.",
      "Engineered server-side rendering (SSR) with Next.js to boost performance and SEO — a 700% increase in user retention.",
      "Developed scalable RESTful APIs and high-performance backends with Node.js, Express.js, MongoDB and React.",
      "Collaborated with UI/UX designers and product teams to align technical solutions with business goals.",
      "Ran thorough code reviews and enforced best practices for clean, scalable codebases.",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Redux", "Vercel"],
  },
  {
    company: "Adrixus Tech Studio",
    role: "Software Developer Intern — MERN Stack",
    location: "Vadodara, Gujarat",
    period: "Dec 2023 — Jun 2024",
    bullets: [
      "Built reusable, scalable React components with Styled Components, ensuring responsive, cross-device UI.",
      "Implemented dynamic, data-driven frontend features in collaboration with backend teams.",
      "Contributed to Node.js / Express / MongoDB backends — RESTful APIs and database operations.",
      "Enhanced UI consistency and documentation with Storybook to streamline collaborative workflows.",
      "Participated in code reviews, Git version control and agile sprints to maintain code quality.",
    ],
    stack: ["React", "Styled Components", "Node.js", "Express", "Storybook", "Git"],
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Styled Components",
    "Redux",
    "Zustand",
    "Storybook",
  ],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Firebase"],
  data: ["MongoDB", "SQL", "Firestore"],
  cloud: ["AWS S3", "Vercel", "GitHub Actions", "CI/CD", "Git"],
};

// Marquee — clean wordmarks (no third-party logos to avoid incorrect brand art).
export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "AWS",
  "Firebase",
  "Vercel",
  "Git",
];

// Integrations bento card — name + lucide icon
export const integrations: { name: string; icon: string }[] = [
  { name: "SendGrid", icon: "Mail" },
  { name: "Zoho CRM", icon: "Briefcase" },
  { name: "Firebase", icon: "Flame" },
  { name: "Mapbox", icon: "Map" },
  { name: "Stripe", icon: "CreditCard" },
  { name: "JWT", icon: "KeyRound" },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
  image: string; // cover image (placeholder Unsplash for now)
  featured?: boolean;
  status?: "wip"; // currently building — shown as an upcoming/in-progress card
};

// Placeholder Unsplash stock helper (used by blog posts).
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&auto=format&fit=crop&q=60`;

export const projects: Project[] = [
  {
    name: "Real Estate Platform",
    blurb:
      "Currently building — a modern real-estate platform for property listings, map-based search and bookings, with saved properties and an agent dashboard.",
    tags: ["Next.js", "Node.js", "Maps"],
    image: "/images/realestate-cover.svg",
    status: "wip",
    featured: true,
  },
  {
    name: "Disk Analyzer for Mac",
    blurb:
      "Native macOS disk-usage visualizer — scans any folder and renders it as an interactive d3 treemap. Parallel Rust filesystem scanning, drill-down zoom, and reveal-in-Finder / move-to-Trash actions.",
    tags: ["Tauri", "Rust", "React"],
    repo: "https://github.com/prab002/disk-analyzer-mac",
    image:
      "https://raw.githubusercontent.com/prab002/disk-analyzer-mac/main/docs/screenshot.png",
    featured: true,
  },
  {
    name: "LaunchVerse",
    blurb:
      "India's talent & opportunities platform for students (Grades 8–12) — a national innovation hunt where students surface real problems, build prototypes and pitch to mentors, with AI-powered profiles that grow their portfolio.",
    tags: ["Next.js", "Node.js", "AI"],
    href: "https://launchverse.org/",
    image: "/images/launchverse-cover.svg",
    featured: true,
  },
  {
    name: "OpenClaw",
    blurb:
      "A macOS menu-bar app for Claude — chat from anywhere with ⌘⇧O, switch between Sonnet & Opus, drag-and-drop files, and keep history. Built on Electron over a local gateway.",
    tags: ["Electron", "macOS", "AI"],
    repo: "https://github.com/prab002/openclaw-header",
    image: "/images/openclaw.gif",
    featured: true,
  },
  {
    name: "Royalties LLC",
    blurb:
      "A published mobile app for Royalties LLC, shipped and live on the Google Play Store.",
    tags: ["Mobile App", "Android"],
    href: "https://play.google.com/store/apps/details?id=com.royalty_app.royalty_app",
    image: "/images/royalty-cover.svg",
    featured: true,
  },
  {
    name: "Snag-Zilla",
    blurb:
      "An on-demand rental marketplace — rent products & service pros, delivered and picked up at your door, with scheduled bookings and Stripe payments.",
    tags: ["iOS", "Marketplace", "Stripe"],
    href: "https://apps.apple.com/in/app/snag-zilla-rent-stuff-pros/id6751220203",
    image: "/images/snagzilla-cover.svg",
    featured: true,
  },
  {
    name: "Sahaj Darshan",
    blurb:
      "A platform for planning temple pilgrimages across India — authentic darshan info, trusted travel & stay options, and experienced purohits to make every journey easy and fulfilling.",
    tags: ["Next.js", "WordPress", "Travel"],
    href: "https://sahajdarshan.com/",
    image: "/images/sahajdarshan.png",
    featured: true,
  },
  {
    name: "Power Club",
    blurb:
      "Power Club for Schools — a research-backed curriculum for Career Design & College Readiness, helping students plan their path with expert-led programs.",
    tags: ["Next.js", "EdTech"],
    href: "https://www.power.club/",
    image: "/images/powerclub.jpg",
    featured: true,
  },
  {
    name: "ArtByRaff",
    blurb:
      "Storefront & portfolio for a Vienna-based pop-art & mixed-media artist — gallery, shop and commissions.",
    tags: ["React", "Styled Components"],
    href: "https://www.artbyraff.com/",
    image: "/images/artbyraff.jpg",
  },
];

export type BlogPost = {
  title: string;
  description: string;
  image: string;
  content: { heading?: string; body: string }[];
};

// Placeholder posts — swap copy/images with your real articles.
export const posts: BlogPost[] = [
  {
    title: "700% retention with SSR",
    description: "Performance",
    image: u("1498050108023-c5249f4df085"),
    content: [
      {
        heading: "Why SSR moved the needle",
        body: "Switching a Next.js app to server-side rendering cut time-to-first-byte dramatically and let search engines actually index our content. The result was a 700% jump in user retention — users landed on fast, complete pages instead of a spinner.",
      },
      {
        heading: "What I'd do again",
        body: "Stream what you can, cache aggressively at the edge, and treat the first paint as a product feature. Measure with real-user metrics, not just lab scores.",
      },
    ],
  },
  {
    title: "Magic Link auth, done right",
    description: "Security",
    image: u("1518770660439-4636190af475"),
    content: [
      {
        heading: "Passwordless without the footguns",
        body: "Magic Link auth removes passwords entirely, but the details matter: short-lived signed tokens, single-use links, device binding, and a graceful fallback. Pair it with JWT sessions and social login for flexibility.",
      },
      {
        heading: "Integrations that helped",
        body: "SendGrid for reliable delivery, Firebase for identity, and a thin verification layer of our own. The UX win is huge — sign-in becomes a single tap.",
      },
    ],
  },
  {
    title: "Scaling Node APIs ~70%",
    description: "Backend",
    image: u("1461749280684-dccba630e2f6"),
    content: [
      {
        heading: "Find the real bottleneck",
        body: "Most API slowness isn't CPU — it's N+1 queries, missing indexes, and chatty third-party calls. Profiling first turned a guess into a ~70% latency improvement with near-zero downtime.",
      },
      {
        heading: "The toolkit",
        body: "Connection pooling, response caching, background jobs for heavy work, and good observability so regressions never ship twice.",
      },
    ],
  },
];

export const achievements = [
  "1st Place — Codeathon Programming Competition",
  "1st Place — Science Exhibition (Junior Level)",
  "B.Tech, Computer Science (AI) — ITM SLS Baroda University",
];

export const nav = [
  { label: "craft", href: "#craft" },
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "stack", href: "#stack" },
  { label: "writing", href: "#blog" },
  { label: "contact", href: "#contact" },
];
