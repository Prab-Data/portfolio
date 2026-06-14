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
    company: "Invennico TechnoLabs",
    role: "Software Development Tech Lead",
    location: "Vadodara, Gujarat",
    period: "Jun 2025 — Present",
    bullets: [
      "Architected scalable systems and selected optimal tech stacks aligned with client and business objectives.",
      "Led end-to-end delivery — onboarding, task allocation and timely shipping within deadlines.",
      "Optimized CI/CD pipelines and established robust code-review processes for production-ready software.",
      "Primary technical liaison for clients; mentored the team and drove agile best practices.",
    ],
    stack: ["Architecture", "CI/CD", "Leadership", "Client Relations"],
  },
  {
    company: "Invennico TechnoLabs",
    role: "Software Engineer — MERN Stack",
    location: "Vadodara, Gujarat",
    period: "Jun 2024 — Jun 2025",
    bullets: [
      "Built and deployed complete full-stack modules for live production environments.",
      "Integrated SendGrid, Mailjet, Zoho CRM, Firebase and Mapbox to extend product functionality.",
      "Implemented JWT, Magic Link and social-login authentication and custom verification systems.",
      "Shipped continuously to production while keeping performance high and downtime minimal.",
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "AWS S3", "JWT"],
  },
  {
    company: "Adrixus Tech Studio",
    role: "MERN Stack Developer — Intern",
    location: "Vadodara, Gujarat",
    period: "Dec 2023 — Jun 2024",
    bullets: [
      "Contributed to live client products including Volker Munko, Chainpals and ArtByRaff.",
      "Built reusable, responsive React components with Styled Components.",
      "Worked on Spotto — sports collection features and scheduling with the backend team.",
      "Documented UI with Storybook to streamline collaboration.",
    ],
    stack: ["React", "Styled Components", "Node.js", "Storybook"],
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
};

// NOTE: images are placeholder Unsplash stock — swap with real project shots.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&auto=format&fit=crop&q=60`;

export const projects: Project[] = [
  {
    name: "LaunchVerse CMS",
    blurb:
      "A content & launch platform for managing and shipping pages — headless content, fast Next.js delivery.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: u("1498050108023-c5249f4df085"),
    featured: true,
  },
  {
    name: "Companion API",
    blurb:
      "Realtime AI companion backend — websocket sessions, prompt orchestration and streaming responses.",
    tags: ["Node.js", "Socket.IO", "AI"],
    image: u("1620712943543-bcc4688e7485"),
    featured: true,
  },
  {
    name: "Delta Island",
    blurb:
      "iOS Dynamic Island / Live Activity extension — live, glanceable updates on the lock screen.",
    tags: ["iOS", "Live Activity", "Swift"],
    image: u("1531297484001-80022131f5a1"),
  },
  {
    name: "Spotto",
    blurb:
      "Sports collection & scheduling features built with the backend team for a live product.",
    tags: ["React", "Node.js"],
    image: u("1551434678-e076c223a692"),
  },
  {
    name: "ArtByRaff",
    blurb:
      "Artist storefront & portfolio — reusable UI components and responsive interfaces.",
    tags: ["React", "Styled Components"],
    image: u("1487058792275-0ad4aaf24ca7"),
  },
  {
    name: "Volker Munko",
    blurb:
      "Component development for a live client web app — responsive, accessible UI.",
    tags: ["React", "CSS"],
    image: u("1461749280684-dccba630e2f6"),
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
