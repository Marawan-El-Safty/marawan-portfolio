/** Public site URL — override via NEXT_PUBLIC_SITE_URL after deploy. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marawan-portfolio.vercel.app";

export const PROFILE = {
  name: "Marawan Elsafty",
  role: "Full-Stack Web Developer",
  tagline: "I design & build premium web apps that feel fast, smooth, and expensive.",
  location: "Egypt — working worldwide (remote)",
  email: "marawan.elsafty@ejust.edu.eg",
  github: "https://github.com/Marawan-El-Safty",
  available: true,
};

export const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Framer Motion",
  "Vercel",
];

export const SERVICES = [
  {
    no: "01",
    title: "Web Apps & SaaS",
    body: "Full-stack products with auth, dashboards, and databases — built to scale and easy to extend.",
  },
  {
    no: "02",
    title: "Landing & Marketing Sites",
    body: "High-conversion, animated sites that load instantly and turn visitors into customers.",
  },
  {
    no: "03",
    title: "AI-Powered Features",
    body: "Smart, AI-assisted tools and integrations woven cleanly into modern product experiences.",
  },
  {
    no: "04",
    title: "UI/UX Engineering",
    body: "Pixel-perfect, accessible interfaces with thoughtful motion and a consistent design system.",
  },
];

export interface Project {
  title: string;
  category: string;
  year: string;
  blurb: string;
  tags: string[];
  live?: string;
  code?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Pulse Analytics",
    category: "Dashboard",
    year: "2026",
    blurb:
      "An analytics dashboard for an online store with charts I coded by hand instead of using a chart library — date filters, sortable tables, an activity feed, and dark mode.",
    tags: ["Next.js", "TypeScript", "Tailwind", "SVG Charts"],
    live: "https://pulse-analytics-nine-silk.vercel.app",
    code: "https://github.com/Marawan-El-Safty/pulse-analytics",
  },
  {
    title: "AI Content Studio",
    category: "AI SaaS",
    year: "2026",
    blurb:
      "A premium AI copywriting tool that generates ads, emails, landing pages and social posts in seconds — tone & format aware, dark mode, runs 100% free.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    live: "https://ai-content-studio-navy-one.vercel.app",
    code: "https://github.com/Marawan-El-Safty/ai-content-studio",
  },
  {
    title: "FreightDesk CRM",
    category: "Full-Stack CRM",
    year: "2026",
    blurb:
      "A logistics CRM for managing clients, shipments and operations — auth, role-based access, dashboards, and a clean REST API backend. Used in production by Safty Group.",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    code: "https://github.com/Marawan-El-Safty/FreightDesk-CRM",
  },
  {
    title: "Safty Group Website",
    category: "Business Site",
    year: "2025",
    blurb:
      "A production marketing site for a logistics company — fast, responsive, and conversion-focused, live in production.",
    tags: ["Next.js", "Tailwind", "SEO", "Vercel"],
    live: "https://saftygroup.com",
  },
];

export const PROCESS = [
  {
    no: "01",
    title: "Understand",
    body: "I learn your goals, users, and constraints before writing a line of code.",
  },
  {
    no: "02",
    title: "Design",
    body: "Clean, premium UI with a clear hierarchy and a consistent design system.",
  },
  {
    no: "03",
    title: "Build",
    body: "Production-ready, type-safe, scalable code — shipped fast without cutting corners.",
  },
  {
    no: "04",
    title: "Launch & Iterate",
    body: "Deploy, measure, refine. I stay involved to make sure it actually performs.",
  },
];

export const STATS = [
  { value: "100%", label: "Job success focus" },
  { value: "24h", label: "Avg. reply time" },
  { value: "∞", label: "Attention to detail" },
];
