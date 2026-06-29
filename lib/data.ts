export const PROJECTS = [
  {
    id: "referup",
    name: "ReferUp",
    role: "Co-Founder · Product Strategy & Growth Design",
    description:
      "A performance-based referral marketing platform for Indian Shopify merchants. Led go-to-market positioning, modeled a tiered success-fee pricing structure, designed dashboard features, and built interactive HTML/CSS UI mockups.",
    tags: ["Co-Founder", "Product Strategy", "Growth Design", "UI Mockups"],
    image: "/images/referup.png",
    color: "#0a1d1a",
    iconColor: "#c9a96e",
    icon: "briefcase",
    demoUrl: "https://www.referup.xyz/",
  },
  {
    id: "noscroll",
    name: "NoScroll",
    role: "Chrome Extension · Vanilla JavaScript",
    description:
      "Detects passive scrolling on Instagram Reels and YouTube Shorts and nudges the user to stop. Built with zero dependencies — pure JS, DOM observation, and a lightweight popup UI. Shipped solo, end to end.",
    tags: ["Zero frameworks", "Browser APIs", "Solo build"],
    gitUrl: "https://github.com/vivekr43/NoScroll-",
    image: "/images/noscroll.png",
    color: "#0d1f18",
    iconColor: "#3ecf8e",
    icon: "pause",
  },
  {
    id: "memorybot",
    name: "MemoryBot",
    role: "AI Chatbot · HTML / CSS / JS",
    description:
      "A conversational AI interface with memory-based context handling — built entirely on the frontend with no backend dependency. Focused on structuring stateful chat logic and dynamic rendering without a framework.",
    tags: ["AI-assisted", "Stateful UI", "No backend"],
    gitUrl: "https://github.com/vivekr43/MemoryBot",
    image: "/images/memorybot.png",
    color: "#130d1f",
    iconColor: "#a78bfa",
    icon: "brain",
  },
  {
    id: "jobportal",
    name: "Dummy Job Portal",
    role: "Full-Stack Project · GitHub",
    description:
      "A responsive job-listings web app with filtering and interactive UI states. Built to practice clean component architecture and responsive layout patterns across devices.",
    tags: ["Full stack", "Responsive design", "Clean architecture"],
    image: "/images/jobportal.png",
    color: "#0d1520",
    iconColor: "#60a5fa",
    icon: "briefcase",
  },
] as const;

export const CASE_STUDIES = [
  {
    id: "referup",
    number: "01",
    title: "ReferUp: Product Strategy & Growth Design for Shopify SaaS",
    year: "2025 — 2026",
    summary:
      "Co-founded and led product strategy for a performance-based Shopify referral platform. Modeled usage-based pricing structures, designed trigger-based campaign UIs, drafted technical handoff specs, and authored B2B pitches for major Indian D2C brands like boAt.",
    tags: ["Product Strategy", "Growth Design", "Pricing Modeling", "Co-Founder"],
  },
  {
    id: "01",
    number: "02",
    title: "Building a doomscroll detector from scratch",
    year: "2025",
    summary:
      "Lightweight Chrome extension that detects passive scrolling sessions on Instagram Reels and YouTube Shorts and nudges the user back to intent. Built with zero frameworks — vanilla JS, DOM observation, and a clean modular popup UI. Shipped end-to-end, solo, from idea to working install.",
    tags: ["JavaScript", "Browser Extension", "UX", "Solo Project"],
  },
  {
    id: "02",
    number: "03",
    title: "MemoryBot: conversational AI with memory-based UI",
    year: "2026",
    summary:
      "A frontend-only AI chatbot exploring how to structure stateful conversation logic without a backend. Built the entire memory and context-handling layer in vanilla JS, with dynamic DOM rendering driving the conversational UI.",
    tags: ["AI-Assisted", "Frontend Architecture", "Chatbot UI", "No Framework"],
  },
  {
    id: "03",
    number: "04",
    title: "Chadha's Restaurant: a full production website, deployed",
    year: "2026",
    summary:
      "Designed and built a complete static website for a real North Indian restaurant client in Mumbai — 188 menu items across 12 categorized sections, smooth scroll animations, a tap-to-call header for mobile users, and integrated WhatsApp/social links in the footer. Built the content structure so a non-technical owner can update menu items without touching code. Deployed and live.",
    tags: ["HTML/CSS/JS", "Client Project", "Deployed", "Responsive Design"],
  },
] as const;

export const EVENTS = [
  {
    id: "codex",
    text: "Codex Community Meetup #2 (ATLAS SkillTech, BKC) — AI coding agents and how they're reshaping the SDLC.",
  },
  {
    id: "quantiphi",
    text: "Quantiphi — Mumbai Tech Week — Enterprise AI in production, beyond proof-of-concept demos.",
  },
  {
    id: "gdg",
    text: "GDG MAD x Swift Mumbai — Android/iOS dev recap of Google I/O and WWDC, with a focus on on-device AI.",
  },
] as const;

export const SKILLS = [
  "Product Strategy",
  "Growth Design",
  "Financial Modeling",
  "HTML / CSS / JavaScript",
  "Python",
  "SQL",
  "Cursor",
  "Claude",
  "Groq API",
  "Git / GitHub",
  "Vercel",
  "Canva",
  "CapCut",
] as const;

export const SOCIAL_LINKS = {
  email: "vivekribadiya99@gmail.com",
  linkedin: "https://www.linkedin.com/in/vivek-ribadiya-738035306/",
  github: "https://github.com/vivekr43",
  resume: "/resume.pdf",
} as const;
