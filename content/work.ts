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

export type Skill = { name: string; icon: string };
export type SkillGroup = {
  label: string;
  tint: string;
  tintBg: string;
  /** Category icon — raw inner SVG markup. */
  icon: string;
  iconVariant?: "stroke" | "fill";
  iconViewBox?: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Strategic Finance",
    tint: "#34d399",
    tintBg: "rgba(52,211,153,0.14)",
    icon: '<path d="M3 3v18h18"/><path d="m7 14 3-4 3 2 5-7"/>',
    skills: [
      { name: "Financial Modeling", icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>' },
      { name: "Pro Forma Statements", icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/>' },
      { name: "Unit Economics", icon: '<circle cx="12" cy="12" r="9"/><path d="M12 6.5v11M14.6 9.2a3 2.2 0 0 0-2.6-1.4c-1.7 0-2.7.9-2.7 2s1 1.6 2.7 2 2.7.9 2.7 2-1 2-2.7 2a3 2.2 0 0 1-2.6-1.4"/>' },
      { name: "DCF Valuation", icon: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>' },
      { name: "Scenario Analysis", icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
      { name: "Burn Rate Modeling", icon: '<path d="M12 2.5c3 3.5 6 6.5 6 10.5a6 6 0 0 1-12 0c0-4 3-7 6-10.5z"/>' },
      { name: "FP&A", icon: '<path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8"/><rect x="12" y="6" width="3" height="12"/><rect x="17" y="13" width="3" height="5"/>' },
      { name: "Revenue Forecasting", icon: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>' },
      { name: "Corporate Finance", icon: '<path d="M3 10l9-6 9 6M5 10v8M19 10v8M9 10v8M15 10v8M3 21h18"/>' },
    ],
  },
  {
    label: "AI & Machine Learning",
    tint: "#a855f7",
    tintBg: "rgba(168,85,247,0.16)",
    iconVariant: "fill",
    iconViewBox: "0 0 50 50",
    icon: '<path d="M22.462 11.035l2.88 7.097c1.204 2.968 3.558 5.322 6.526 6.526l7.097 2.88c1.312.533 1.312 2.391 0 2.923l-7.097 2.88c-2.968 1.204-5.322 3.558-6.526 6.526l-2.88 7.097c-.533 1.312-2.391 1.312-2.923 0l-2.88-7.097c-1.204-2.968-3.558-5.322-6.526-6.526l-7.097-2.88c-1.312-.533-1.312-2.391 0-2.923l7.097-2.88c2.968-1.204 5.322-3.558 6.526-6.526l2.88-7.097C20.071 9.723 21.929 9.723 22.462 11.035zM39.945 2.701l.842 2.428c.664 1.915 2.169 3.42 4.084 4.084l2.428.842c.896.311.896 1.578 0 1.889l-2.428.842c-1.915.664-3.42 2.169-4.084 4.084l-.842 2.428c-.311.896-1.578.896-1.889 0l-.842-2.428c-.664-1.915-2.169-3.42-4.084-4.084l-2.428-.842c-.896-.311-.896-1.578 0-1.889l2.428-.842c1.915-.664 3.42-2.169 4.084-4.084l.842-2.428C38.366 1.805 39.634 1.805 39.945 2.701z"/>',
    skills: [
      { name: "AI-Native Product Design", icon: '<path d="M12 2l2.6 7.4H22l-6 4.5 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.5h7.4z"/>' },
      { name: "LLM Orchestration", icon: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>' },
      { name: "AI Agents", icon: '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><path d="M8 16h.01M16 16h.01"/>' },
      { name: "Retrieval-Augmented Generation", icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>' },
      { name: "Prompt Engineering", icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/>' },
      { name: "Multi-Provider LLM Integration", icon: '<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4"/>' },
      { name: "AI Evaluation & Observability", icon: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>' },
    ],
  },
  {
    label: "Software Engineering",
    tint: "#6f9be8",
    tintBg: "rgba(111,155,232,0.16)",
    icon: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
    skills: [
      { name: "TypeScript", icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 13h4M9.5 13v4.5M13 17c.5.4 1.2.6 2 .4.7-.2 1.1-.7 1.1-1.3 0-1.4-2.6-1-2.6-2.4 0-.6.5-1 1.3-1 .6 0 1.1.2 1.5.6"/>' },
      { name: "React", icon: '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>' },
      { name: "Node.js", icon: '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M9 15c0 1 .8 1.6 2 1.6 1.3 0 2.2-.6 2.2-1.7 0-2.4-4-1.2-4-3.2 0-.9.8-1.4 1.9-1.4 1 0 1.7.4 1.9 1.2"/>' },
      { name: "Python", icon: '<path d="M12 2c-2.5 0-4 1-4 3v2h4.5M8 7H6c-2 0-3 1.3-3 4s1 4 3 4h2v-2.5c0-1.4 1.1-2.5 2.5-2.5h3c1.4 0 2.5-1.1 2.5-2.5V5c0-2-1.5-3-4-3z"/><path d="M12 22c2.5 0 4-1 4-3v-2h-4.5M16 17h2c2 0 3-1.3 3-4"/>' },
      { name: "Supabase", icon: '<path d="M13 2L4 13h7v9l9-11h-7z"/>' },
      { name: "Edge Functions", icon: '<path d="M13 2L3 14h7v8l10-12h-7z"/>' },
      { name: "Trigger.dev", icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>' },
      { name: "Full-Stack Engineering", icon: '<rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01M7 17h.01"/>' },
    ],
  },
  {
    label: "Leadership & GTM",
    tint: "#f5b73c",
    tintBg: "rgba(245,183,60,0.16)",
    icon: '<path d="m12 2 2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5Z"/>',
    skills: [
      { name: "Founder / CEO", icon: '<path d="M2 7l5 5 5-8 5 8 5-5v12H2z"/>' },
      { name: "Product Strategy", icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>' },
      { name: "Go-to-Market", icon: '<path d="M5 13l-2 6 6-2M9.5 11.5a8 8 0 0 1 7.5-8.5C18 3 21 3 21 3s0 3-.1 4a8 8 0 0 1-8.5 7.5l-2.9-3z"/><circle cx="14.5" cy="9.5" r="1.2"/>' },
      { name: "Investor Relations", icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>' },
      { name: "Fundraising Strategy", icon: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M16 14h2"/>' },
      { name: "Cross-functional Leadership", icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>' },
    ],
  },
];
