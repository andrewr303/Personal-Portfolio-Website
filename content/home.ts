/** Home-page data: HypeStake highlights, skill cards, and the product flipbook. */

export type Highlight = { title: string; body: string; icon: string };
export type SkillCard = {
  title: string;
  tint: string;
  tintBg: string;
  icon: string;
  body: string;
  proof: string;
};
export type GalleryItem = { src: string; title: string; tag: string; blurb: string };

export const highlights: Highlight[] = [
  {
    title: "AI Valuation Engine",
    body: "LLM research grounded by deterministic Python math, so every figure is reproducible and auditable.",
    icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2"/>',
  },
  {
    title: "Multi-Provider AI",
    body: "Anthropic, OpenAI, Gemini, Bedrock, Perplexity, Cohere, Exa, and You.com orchestrated for quality.",
    icon: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M11 13l-4 4M13 13l4 4"/>',
  },
  {
    title: "Full-Stack AI Product",
    body: "React, TypeScript, Supabase, Edge Functions, Trigger.dev, and Python services, built solo.",
    icon: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
  },
  {
    title: "Finance + Fundraising",
    body: "5-year pro forma with unit economics, burn-rate analysis, and multi-scenario forecasting.",
    icon: '<path d="M3 3v18h18"/><path d="m7 14 3-4 3 2 5-7"/>',
  },
];

export const skillCards: SkillCard[] = [
  {
    title: "Strategic Finance",
    tint: "#34d399",
    tintBg: "rgba(52,211,153,0.14)",
    icon: '<path d="M3 3v18h18"/><path d="m7 14 3-4 3 2 5-7"/>',
    body: "5-year pro formas, unit economics, revenue forecasting, burn and runway, DCF, and scenario modeling.",
    proof: "Built the 5-year pro forma and 60-month revenue model behind Farm Insights’ funding strategy.",
  },
  {
    title: "AI Systems",
    tint: "#c084fc",
    tintBg: "rgba(192,132,252,0.16)",
    icon: '<path d="M12 3a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.6A3 3 0 0 0 9 17a3 3 0 0 0 6 0 3 3 0 0 0 1.5-5.4A3 3 0 0 0 15 6a3 3 0 0 0-3-3Z"/>',
    body: "LLM orchestration, prompt routing, RAG, evaluation, multi-provider integrations, and observability.",
    proof:
      "Orchestrated 8 providers (Anthropic, OpenAI, Gemini, Bedrock, Perplexity, Cohere, Exa, You.com) into one valuation stack.",
  },
  {
    title: "Full-Stack Product",
    tint: "#818cf8",
    tintBg: "rgba(129,140,248,0.16)",
    icon: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
    body: "React, TypeScript, Supabase, Edge Functions, Trigger.dev, and Python services, built and shipped end to end.",
    proof: "Shipped HypeStake solo, from architecture and code to infrastructure and deploy.",
  },
  {
    title: "Founder / GTM Operations",
    tint: "#f5b73c",
    tintBg: "rgba(245,183,60,0.16)",
    icon: '<path d="m12 2 2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5Z"/>',
    body: "Fundraising strategy, investor CRM, market intelligence, pipeline building, and pitch materials.",
    proof: "Stood up a zero-cost investor CRM that lifted response rates 40% and a 2,400-prospect pipeline.",
  },
];

export const gallery: GalleryItem[] = [
  { src: "/assets/shot-portfolio.jpg", title: "Creator Portfolio", tag: "Creator Hub", blurb: "Equity stakes, vesting, and scenario-weighted portfolio value in one view." },
  { src: "/assets/shot-genome-music.png", title: "Music Creator Genome", tag: "Creator Genome", blurb: "AI-scored creator profile with CERS rating, reach, and revenue potential." },
  { src: "/assets/shot-genome-streamer.png", title: "Streamer Viewership Vitality", tag: "Creator Genome", blurb: "Live audience heatmap, concurrents, and streaming cadence." },
  { src: "/assets/shot-genome-athlete.png", title: "Athlete Activation Calendar", tag: "Creator Genome", blurb: "Season phases and tournament windows mapped to brand activation moments." },
  { src: "/assets/shot-deal.png", title: "Deal Architect", tag: "Deal Engine", blurb: "Equity, cash, and rev-share structured with AI deal-health scoring." },
  { src: "/assets/shot-stake-rating.png", title: "AI Stake Rating", tag: "Valuation Engine", blurb: "Cost basis, IRR, and a 0-100 stake rating with outlook scenarios." },
  { src: "/assets/shot-trajectory.png", title: "Exit Scenarios", tag: "Valuation Engine", blurb: "Entry-to-exit trajectory across floor, downside, base, and best case." },
  { src: "/assets/shot-composition.png", title: "Portfolio Intelligence", tag: "Analytics", blurb: "Industry mix, diversification, and the holdings dragging the score." },
  { src: "/assets/shot-scorepath.png", title: "Score Path", tag: "Analytics", blurb: "Transparent waterfall of every factor moving the final stake score." },
  { src: "/assets/shot-finance-studio.jpg", title: "Brand Finance Studio", tag: "Brand Hub", blurb: "Planning-grade valuation and creator-equity cost, before a single match." },
];
