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

export type Skill = { name: string; icon: string; iconSrc?: string };
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
      { name: "TypeScript", iconSrc: "/assets/icons8-typescript-480.png", icon: '<path fill="currentColor" stroke="none" d="M1.408 0A1.41 1.41 0 0 0 0 1.408v21.184A1.41 1.41 0 0 0 1.408 24h21.184A1.41 1.41 0 0 0 24 22.592V1.408A1.41 1.41 0 0 0 22.592 0zM12.91 14.856c-.033 1.01-.035 1.085-.102 1.238a1.055 1.055 0 0 1-.588.578c-.193.099-.446.11-2.468.12-1.199.007-2.802-.002-2.924-.009a.833.833 0 0 1-.64-.275 1.037 1.037 0 0 1-.367-.517l-.068-.159-.01-2.114c-.005-1.294.004-2.176.022-2.307.054-.396.183-.672.43-.936.258-.275.49-.419.852-.525.162-.054.207-.055 2.214-.072 1.128-.01 2.106-.02 2.178-.028l.132-.02v-1.41h-2.213C9.07 8.528 8.075 8.518 8.075 8.5v-1.412h4.45V10.1h-4.45V10.224c-.01 1.188-.008 1.1-.04 1.18-.039.098-.107.184-.193.241a.886.886 0 0 1-.236.112c-.087.029-.118.039-1.721.047-1.503.009-1.678.013-1.795.038-.315.071-.647.329-.823.65-.1.181-.128.236-.185.354l-.045.093v1.092c0 1.188.01 1.276.103 1.496.361.422.673.578 1.356.668.355.048 1.884.093 2.49.063 1.398-.068 1.774-.188 2.119-.563a2.473 2.473 0 0 0 .251-.354c.102-.238.112-.414.112-1.638zm6.541-1.282c-.185.055-.377.086-1.357.225-.879.128-1.239.245-1.443.457-.134.136-.207.324-.234.581-.015.146-.015.4 0 .492a1.047 1.047 0 0 0 .232.559c.345.408.747.503 1.915.438 1.176-.066 1.6-.2 1.83-.574.131-.221.179-.427.187-.804l.002-.299h-1.958l-.093-.015c-.136-.022-.235-.07-.307-.143-.068-.069-.086-.123-.085-.221a.333.333 0 0 1 .046-.168c.04-.06.077-.095.17-.15.263-.157.594-.212 1.548-.242.544-.018.635-.026.909-.098.424-.117.777-.27 1.007-.44a1.65 1.65 0 0 0 .61-.855c.056-.199.064-.302.064-.833 0-.574-.008-.628-.081-.918-.133-.521-.35-.852-.734-1.177-.29-.245-.612-.405-1.067-.523-.376-.097-.699-.141-1.034-.143-.703-.057-1.282.013-1.685.213-.505.247-.691.585-.713 1.299l-.008.262h1.825c.34 0 .524.017.534.046.119.034.233.111.272.181.026.048.032.152.015.216-.02.081-.148.163-.356.224zm-1.092-.821c.143-.003.344.066.429.139.049.042.097.152.11.233l.011.07h-1.678l-.008-.066c-.012-.109.028-.214.105-.27.116-.082.303-.126.573-.144zm1.529 3.316c-.101.011-.121.013-.263.053-.203.057-.3.129-.3.231 0 .173.267.268.729.253.234-.008.43-.054.527-.121a.217.217 0 0 0 .087-.184c0-.075-.028-.126-.098-.183-.106-.09-.362-.143-.682-.149z"/>' },
      { name: "React", icon: '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>' },
      { name: "Node.js", iconSrc: "/assets/node.png", icon: '<path fill="currentColor" stroke="none" d="M11.57.26c.582-.345 1.28-.348 1.863 0l9.052 5.374c.596.355.957 1.025.949 1.754v9.215c.003.722-.361 1.393-.949 1.745l-9.052 5.378a1.726 1.726 0 0 1-1.875-.003L2.56 18.35c-.581-.35-.942-1.02-.94-1.74V7.397c-.002-.723.36-1.392.94-1.747zm.96 1.021a.63.63 0 0 0-.663 0L3.008 6.649a.625.625 0 0 0-.312.538v9.222a.62.62 0 0 0 .312.535l8.857 5.371a.632.632 0 0 0 .655 0l8.86-5.371a.62.62 0 0 0 .312-.534v-9.22a.627.627 0 0 0-.312-.54zm.98 2.628l6.736 3.788a.385.385 0 1 1-.382.667l-6.736-3.785a.385.385 0 0 1 .382-.67zm.699 9.47c1.027 0 1.662.348 1.949 1.088.149.361.133.807-.048 1.172-.17.341-.474.567-.888.655-.345.073-.846.099-1.652.099-.806 0-1.308-.025-1.653-.099a1.251 1.251 0 0 1-.888-.655c-.18-.365-.196-.811-.047-1.172.287-.74.921-1.088 1.948-1.088h1.228zm-.615.646c-.825 0-.982.23-1.051.398a.43.43 0 0 0 .018.37c.042.085.128.212.424.274.248.053.686.078 1.41.078.724 0 1.161-.025 1.36-.074.157-.037.267-.112.34-.274a.43.43 0 0 0 .019-.369c-.07-.168-.227-.398-1.052-.398zm-.052-5.646c.21 0 .381.17.381.38v4.62c0 .21-.17.381-.38.381a.38.38 0 0 1-.382-.38v-4.62c0-.21.17-.381.382-.381zm4.638 2.422c.76 0 1.494.322 1.845.978.215.397.22.914.01 1.309-.174.316-.466.534-.746.585.268.124.42.418.462.667l.007.041c.009.134.06.89.335 1.207.057.065.052.133.052.134-.008.181-.177.263-.343.263-.1 0-.176-.03-.247-.113-.086-.104-.158-.293-.223-.541-.074-.278-.13-.717-.149-.821-.055-.193-.191-.262-.482-.262h-.352v1.554a.38.38 0 0 1-.757 0v-4.658c.002-.21.172-.38.383-.38zm-.376 2.493h.394c.199 0 .333-.014.426-.036.102-.023.17-.064.217-.15.098-.177.085-.474-.033-.685-.15-.26-.508-.375-.879-.375h-.125zm-7.3-2.493a.38.38 0 0 1 .38.38v3.176c0 .293.024.369.072.414.066.062.18.087.262.087.26 0 .674-.075.927-.588a.38.38 0 1 1 .678.352c-.451.867-1.229 1.069-1.651 1.069-.308 0-.523-.068-.685-.212-.147-.134-.225-.362-.225-.666v-3.632a.38.38 0 0 1 .38-.38z"/>' },
      { name: "Python", iconSrc: "/assets/python.png", icon: '<path fill="currentColor" stroke="none" d="M11.916 0c-1.621.006-3.168.148-4.536.401-4.019.724-4.747 2.241-4.747 5.043v2.321h9.492v1.043H1.548C.694 8.808 0 9.505 0 10.37v4.13c0 .857.7 1.53 1.557 1.53H3.59v-2.292c0-2.071 1.807-3.89 3.882-3.89h6.495c1.727 0 3.073-1.42 3.073-3.149V5.446c0-2.228-1.844-3.612-4.739-3.915a35.253 36.253 0 0 0-2.498-.177a35.253 36.253 0 0 0-.886.046zm-3.218 1.403c.669 0 1.21.552 1.21 1.23a1.22 1.22 0 0 1-1.21 1.225c-.669 0-1.21-.548-1.21-1.226c0-.677.541-1.229 1.21-1.229zm9.474 5.574v2.111c0 1.743-1.492 3.207-3.251 3.207H8.275c-2.354 0-4.29 1.95-4.29 4.325v5.127c0 2.665 2.252 3.94 4.547 4.324c1.907.307 3.729.361 5.98 0c3.007-.445 4.548-1.36 4.548-4.324v-2.32H9.568v-1.037h9.491c.856 0 1.559-.694 1.559-1.559v-4.13c0-.857-.703-1.538-1.559-1.538h-2.036v2.29c0 2.072-1.805 3.896-3.88 3.896H6.65c-1.727 0-3.075 1.411-3.075 3.15v2.163c0 2.228 1.848 3.61 4.742 3.912c2.007.196 3.495.166 4.536.09c3.432-.203 4.736-1.162 4.736-3.916V7.957c0-2.23-1.848-3.61-4.742-3.913a35.253 36.253 0 0 0-2.496-.177zm-3.256 11.2c.67 0 1.21.552 1.21 1.227c0 .675-.54 1.225-1.21 1.225c-.668 0-1.21-.55-1.21-1.225c0-.675.542-1.227 1.21-1.227z"/>' },
      { name: "Supabase", iconSrc: "/assets/icons8-supabase-240.png", icon: '<path fill="currentColor" stroke="none" d="M17.419 3.814c.285-.428.947-.164.85.344l-2.689 14.613a1 1 0 0 0 1.116 1.172l3.112-.25c.585-.047.896.653.463 1.017l-3.292 2.718a2 2 0 0 1-3.235-1.057L8.808 6.748a1 1 0 0 0-1.949-.021l-2.39 7.118c-.187.558-.995.529-1.132-.04L2.027 8.072a2 2 0 0 1 1.933-2.489h11.112a2 2 0 0 1 1.494.655ZM12.799 19.636A1 1 0 0 1 10.74 19.71l-3.735-6.49c-.276-.48.31-1.004.79-.716l6.567 3.985c.47.285.404 1.016-.104 1.184l-2.718.889Z"/>' },
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
