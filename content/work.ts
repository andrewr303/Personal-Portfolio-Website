/** Work & Education page data — the fuller variant from the design's Work page. */

export type Job = {
  company: string;
  role: string;
  date: string;
  loc: string;
  logo: string;
  logoFit?: "cover" | "contain";
  logoPad?: string;
  logoBg: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type EducationEntry = {
  school: string;
  detail: string;
  date: string;
  logo: string;
  logoPad?: string;
  bg: string;
};

export type InvolvementEntry = {
  org: string;
  detail: string;
  date: string;
  logo: string;
  logoPad?: string;
  bg: string;
};

export const work: Job[] = [
  {
    company: "HypeStake",
    role: "Founder & CEO",
    date: "Feb 2026 — Present",
    loc: "Denver, CO",
    logo: "/assets/logo-hypestake.jpg",
    logoFit: "cover",
    logoBg: "#0d0d16",
    summary: "AI-Powered Creator-Brand Equity Marketplace.",
    bullets: [
      "Developed and shipped a full platform, taking an AI-powered creator-brand equity marketplace from concept to working product as founder, CEO, and only engineer, owning architecture, code, finance, and go-to-market.",
      "Engineered an AI-powered financial modeling engine that converts company data, market research, internal context, and Python calculations into structured valuation outputs and qualitative analyses, significantly reducing model-building time and improving forecast accuracy.",
      "Constructed a 5-year pro forma financial model with revenue projections, unit economics, burn-rate analysis, and multi-scenario forecasting, supporting fundraising and long-term strategic planning.",
      "Integrated multi-provider AI/research infrastructure across Anthropic, OpenAI, Google/Gemini, AWS Bedrock, Perplexity, Cohere, Exa, You.com, and internal knowledge systems, drastically increasing the accuracy and quality of AI outputs.",
      "Built full-stack AI-powered workflows using React, TypeScript, Supabase, Edge Functions, Trigger.dev, and Python services with AI provider integrations, powering complex multi-layer product features.",
      "Developed an AI-assisted valuation stack that pairs LLM research with deterministic Python math, keeping every financial figure reproducible and auditable rather than model-generated.",
    ],
    tags: ["React", "TypeScript", "Supabase", "Edge Functions", "Trigger.dev", "Python", "LLM Orchestration", "Financial Modeling"],
  },
  {
    company: "Farm Insights",
    role: "Financial Analyst",
    date: "Jun 2025 — Feb 2026",
    loc: "Remote",
    logo: "/assets/logo-farm-insights.png",
    logoPad: "5px",
    logoBg: "#ffffff",
    summary: "Early-Stage AI-Powered AgTech Startup.",
    bullets: [
      "Drove financial planning for an early-stage AgTech company by building investor-ready pro forma statements, revenue forecasts, unit economics, and runway scenarios in Excel, translating product-engineering assumptions into fundable financial projections.",
      "Designed a 60-month revenue model tracking customer acquisition, churn rates (0.9% and 0.7% across tiers), upgrade flows, and evolving revenue mix to give leadership monthly visibility into growth trajectories.",
      "Created the pitch deck in PowerPoint, wrote presentation scripts, conducted slide-by-slide reviews with the CEO, and coached founders before investor meetings, resulting in more compelling pitches that generated investor interest.",
      "Developed PitchCoach, an AI-powered platform that automates pitch rehearsal by integrating the pitch-deck workflow with CRM administration and workflow-automation tools, enabling founders to practice independently and improve presentation consistency.",
      "Applied the same automation lens to fundraising operations, building a zero-cost investor CRM with personalized outreach that lifted response rates 40%.",
      "Secured a top-20 finalist position in the AgLaunch365 accelerator from hundreds of global applicants, traveling to Memphis to prepare co-founders for pitch events and participate in investor meetings.",
    ],
    tags: ["Excel", "Financial Modeling", "Revenue Forecasting", "Pitch Deck", "Investor CRM", "AI Automation"],
  },
  {
    company: "Dirty Politix LLC",
    role: "Founder",
    date: "Jun 2023 — May 2025",
    loc: "Denver, CO",
    logo: "/assets/logo-dirty-politix.png",
    logoPad: "8px",
    logoBg: "#ffffff",
    summary: "Digital Political News Platform.",
    bullets: [
      "Launched and scaled a digital news platform from 30,000 to 120,000 monthly visitors within three months, owning content strategy, infrastructure, advertising, and editorial operations.",
      "Executed targeted advertising campaigns on Facebook and Twitter generating 16,000 interactions and 4,000 comments in the first month, driving a 35% increase in website traffic.",
      "Managed full P&L, including budgeting and ad-spend allocation, and optimized revenue through strategic partnerships, improving profitability and reducing operating costs.",
      "Administered WordPress-based infrastructure, content management workflows, and an editorial calendar to maintain consistent publishing and audience engagement.",
    ],
    tags: ["Growth Strategy", "P&L Management", "Digital Advertising", "WordPress", "Content Strategy", "Editorial Ops"],
  },
];

export const education: EducationEntry[] = [
  {
    school: "University of Colorado Boulder",
    detail: "B.S. Business Administration · Entrepreneurial Finance",
    date: "2019 — 2023",
    logo: "/assets/logo-cu-boulder.png",
    logoPad: "5px",
    bg: "#ffffff",
  },
  {
    school: "Monarch High School",
    detail: "Business concentration · DECA & FBLA State Finalist",
    date: "2015 — 2019",
    logo: "/assets/logo-monarch.png",
    logoPad: "4px",
    bg: "#ffffff",
  },
];

export const involvement: InvolvementEntry[] = [
  {
    org: "Tax Help Colorado",
    detail: "Volunteer Tax Preparer · gubernatorial recognition",
    date: "2014",
    logo: "/assets/logo-tax-help.jpg",
    logoPad: "4px",
    bg: "#ffffff",
  },
];

export const certs: string[] = [
  "Tax Preparation — VITA, 2014",
  "Successful Networking — LinkedIn, 2023",
  "Financial Modeling — Leeds, 2024",
];
