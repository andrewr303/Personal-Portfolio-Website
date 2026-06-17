/** Tools & Systems page data — custom-built tools and the Claude skills library. */

export type Tool = {
  title: string;
  subtitle: string;
  tint: string;
  tintBg: string;
  icon: string;
  desc: string;
  impact: string;
};

export type SkillMeta = {
  name: string;
  title: string;
  cat: string;
  desc: string;
};

export const tools: Tool[] = [
  {
    title: "Investor CRM in Notion",
    subtitle: "Zero-Cost Enterprise Alternative",
    tint: "#818cf8",
    tintBg: "rgba(129,140,248,0.16)",
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v16"/>',
    desc: "Investor outreach and relationship management replicating enterprise fundraising platforms, with AI-powered email personalization.",
    impact: "Enabled $1M pre-seed strategy at zero software cost",
  },
  {
    title: "Opportunity Score Algorithm",
    subtitle: "Market Intelligence Engine",
    tint: "#34d399",
    tintBg: "rgba(52,211,153,0.14)",
    icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/>',
    desc: "Proprietary scoring analyzing 450+ U.S. farming counties on farm density, economic pressure, and crop complexity.",
    impact: "Identified top 10 entry markets from 450+ counties",
  },
  {
    title: "AI Content Generation Engine",
    subtitle: "Social Media Automation",
    tint: "#c084fc",
    tintBg: "rgba(192,132,252,0.16)",
    icon: '<path d="M3 11l18-8-8 18-2.5-7.5L3 11Z"/>',
    desc: "High-volume, platform-specific content aligned with brand voice across LinkedIn, Facebook, and TikTok, scheduled via Hootsuite.",
    impact: "Increased engagement with minimal manual effort",
  },
  {
    title: "Financial Modeling Suite",
    subtitle: "Comprehensive Startup Financials",
    tint: "#22d3ee",
    tintBg: "rgba(34,211,238,0.14)",
    icon: '<path d="M3 3v18h18"/><path d="M7 15l3-4 3 2 5-7"/>',
    desc: "5-year pro forma with income statement, balance sheet, cash flow, 60-month revenue, and $6.4M NOL optimization.",
    impact: "Path to profitability: 7% net margin, $8.7M Y5 income",
  },
  {
    title: "Prospect Pipeline Builder",
    subtitle: "Lead Generation System",
    tint: "#f5b73c",
    tintBg: "rgba(245,183,60,0.16)",
    icon: '<path d="M22 3H2l8 9.5V20l4 1v-8.5L22 3Z"/>',
    desc: "Process for building and qualifying customer pipeline: prospect enrichment, ICP refinement, segmentation, and conversion tracking.",
    impact: "Built pipeline of 2,400+ qualified farm prospects",
  },
  {
    title: "Document Intelligence Processor",
    subtitle: "Retrieval-Ready Document AI",
    tint: "#fb7185",
    tintBg: "rgba(251,113,133,0.16)",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 13h6M9 17h4"/>',
    desc: "Turns messy PDFs and filings into atomic chunks, parent summaries, embeddings-ready metadata, and chunk-quality audits for RAG.",
    impact: "Built for SEC/Form D and filing workflows",
  },
];

export const skills: SkillMeta[] = [
  { name: "meeting-prep", title: "InvestorPrep", cat: "Fundraising", desc: "A fundraising research and meeting-prep analyst with strict Research and Prep modes. It turns scattered context into investor intelligence, talking points, expected questions, and objection handling, so you walk into a VC meeting fully loaded." },
  { name: "pitch-deck", title: "Pitch Deck Architect", cat: "Fundraising", desc: "Distills seed decks down to the high-level story the top 1% of investors read in 30 seconds. It pushes founders away from overcomplicated decks toward a crisp narrative and a tight slide-by-slide structure." },
  { name: "investor-update", title: "Investor Update Writer", cat: "Fundraising", desc: "Writes monthly updates to prospective investors you've already met. It strikes an honest, momentum-forward tone that keeps investors warm and engaged between rounds." },
  { name: "financeaudit", title: "Financial AI Output Auditor", cat: "Finance", desc: "Audits AI-generated financial outputs for accuracy, consistency, and reproducibility using a ReAct + Reflexion loop. It catches hallucinated figures and unsupported math before any number reaches an investor or a model." },
  { name: "prd", title: "PRD Generator", cat: "Product", desc: "Generates scoped product requirements for HypeStake features: epics, requirements, acceptance criteria, and coding-agent prompts. Built on a CO-STAR+ framework with a Refine, Specify, Build workflow that turns a rough idea into a build-ready spec." },
  { name: "promptengineer", title: "Prompt Architect", cat: "AI Systems", desc: "A senior prompt engineer that builds production prompts for Claude's current model family. It knows how each model behaves and outputs structured, technique-driven prompts that are ready to ship." },
  { name: "engineer", title: "Full-Stack Engineer", cat: "Engineering", desc: "A full-stack coding expert tuned for hard builds, debugging, and AI features across Claude's model family. It pairs production engineering practices with technique-driven problem solving for real shipping work." },
  { name: "hypestake-seo", title: "SEO Operating System", cat: "Growth", desc: "A full-stack SEO system for HypeStake covering technical audits, content briefs, pillar and cluster strategy, JSON-LD schema, and competitor teardowns. It also handles AI-search optimization (GEO/AEO) for ChatGPT, Perplexity, Gemini, and Claude, with reference libraries and publish-gate checklists." },
  { name: "email", title: "Founder Email Strategist", cat: "Growth", desc: "Crafts founder-side outreach and reply emails on behalf of Andrew. It handles cold outreach and investor or partner replies, tuned to HypeStake's voice and conversion goals." },
  { name: "image", title: "Image Prompt Architect", cat: "Creative", desc: "Writes copy-paste-ready prompts for GPT Image and Nano Banana Pro. Engineered for HypeStake's brand visuals, it specifies composition, lighting, and style so generations stay on-brand and consistent." },
  { name: "video", title: "Video Prompt Architect", cat: "Creative", desc: "A video-prompt architect spanning cinematography, shot design, and motion. It produces detailed, engine-ready prompts for HypeStake's creative team across narrative and product-marketing video." },
  { name: "resume-expert", title: "ResumeRewrite Strategist", cat: "Career", desc: "A resume strategist and ATS/AI-screening specialist. It rewrites resumes for finance and tech roles so they survive automated screening and still land hard with a human reviewer." },
  { name: "cover-letter-pro", title: "CoverPro", cat: "Career", desc: "A cover-letter strategist that combines a recruiter's eight-second scan with a hiring manager's instincts. It turns applications into interviews with tight, targeted letters that avoid the usual filler." },
  { name: "interview-prep", title: "InterviewCoach Pro", cat: "Career", desc: "Builds a full interview-prep guide: role research, likely questions, STAR-structured answers, and company-specific angles. It scales from a single section to a complete playbook depending on how much time you have." },
  { name: "jobfinder", title: "Daily JobMatch Agent", cat: "Career", desc: "A skeptical, high-agency career research partner that finds genuinely strong job matches, verifies each posting is real, and filters out the noise so you only review roles worth your time." },
];
