/** Projects page data — shipped products, founder tools, and finance docs. */

export type Project = {
  name: string;
  cat: string;
  mono: string;
  grad: string;
  date: string;
  desc: string;
  tags: string[];
  live?: string;
  liveLabel?: string;
  source?: string;
  primary: string;
};

export const projectFilters = [
  "All",
  "AI & Finance",
  "Founder Tools",
  "Agent Tooling",
  "Finance Docs",
] as const;

export const projects: Project[] = [
  {
    name: "Fable Mode",
    cat: "Agent Tooling",
    mono: "FM",
    grad: "linear-gradient(135deg,#10b981,#064e3b)",
    date: "Active system",
    desc: "A drop-in operating standard for AI coding agents: inspect-first work, staged execution, failable verification, and honest handoffs.",
    tags: ["Claude Code", "Codex", "JavaScript", "Agents"],
    source: "https://github.com/andrewr303/Claude-Fable-Mode",
    primary: "https://github.com/andrewr303/Claude-Fable-Mode",
  },
  {
    name: "AI FP&A Expert",
    cat: "AI & Finance",
    mono: "FP",
    grad: "linear-gradient(135deg,#06b6d4,#3730a3)",
    date: "Portfolio-grade",
    desc: "An AI-native FP&A workspace for KPI dashboards, margin simulation, variance narration, and board-ready finance analysis.",
    tags: ["React", "TypeScript", "Supabase", "TanStack"],
    live: "https://fpa.andrewvrodriguez.com",
    liveLabel: "Website",
    source: "https://github.com/andrewr303/AI-FPA-Assistant",
    primary: "https://fpa.andrewvrodriguez.com",
  },
  {
    name: "FounderPilot",
    cat: "Founder Tools",
    mono: "FP",
    grad: "linear-gradient(135deg,#6366f1,#1b3f87)",
    date: "Portfolio-grade",
    desc: "A founder-facing AI assistant turning messy meeting notes into investor-ready VC prep briefs and fundraising strategy.",
    tags: ["React 18", "TypeScript", "shadcn/ui", "Supabase"],
    live: "https://founderpilot.ai",
    liveLabel: "Website",
    source: "https://github.com/andrewr303/VC-meeting-prep-assistant",
    primary: "https://founderpilot.ai",
  },
  {
    name: "PitchCoach AI",
    cat: "Founder Tools",
    mono: "PC",
    grad: "linear-gradient(135deg,#f59e0b,#b91c1c)",
    date: "Portfolio-grade",
    desc: "Turns PDF/PPTX slides into slide-by-slide presentation coaching with structured, schema-controlled AI output.",
    tags: ["React", "pdfjs", "Supabase", "Claude"],
    source: "https://github.com/andrewr303/PitchCoach-AI",
    primary: "https://github.com/andrewr303/PitchCoach-AI",
  },
  {
    name: "Ticket Trading Intel",
    cat: "AI & Finance",
    mono: "TT",
    grad: "linear-gradient(135deg,#3b76d4,#0891b2)",
    date: "Portfolio-grade",
    desc: "A seven-tool AI intelligence platform for live-event ticket brokers: event data, web research, LLM analysis, and risk scoring.",
    tags: ["React", "Supabase", "OpenRouter", "You.com"],
    source: "https://github.com/andrewr303/Ticket-Reselling-Tool",
    primary: "https://github.com/andrewr303/Ticket-Reselling-Tool",
  },
  {
    name: "Simple Finance Tracker",
    cat: "AI & Finance",
    mono: "SF",
    grad: "linear-gradient(135deg,#0ea5e9,#1e3a8a)",
    date: "Public",
    desc: "A secure personal finance dashboard for monitoring credit cards, bank accounts, available credit, and account health.",
    tags: ["React 18", "TypeScript", "Supabase", "Vitest"],
    source: "https://github.com/andrewr303/Simple-Finance-Tracker",
    primary: "https://github.com/andrewr303/Simple-Finance-Tracker",
  },
  {
    name: "ElectionAI",
    cat: "AI & Finance",
    mono: "EA",
    grad: "linear-gradient(135deg,#2563eb,#1e1b4b)",
    date: "Live",
    desc: "Uses AI to transform how campaigns are run, from voter sentiment analysis and turnout prediction to optimized messaging at scale.",
    tags: ["AI/ML", "Data Analytics", "SaaS"],
    live: "https://electionai.io",
    liveLabel: "Website",
    primary: "https://electionai.io",
  },
  {
    name: "American Greetings Analysis",
    cat: "Finance Docs",
    mono: "AG",
    grad: "linear-gradient(135deg,#475569,#0f172a)",
    date: "Senior Seminar",
    desc: "DCF modeling and ratio analysis identifying 29–52% undervaluation, with a $75M stock repurchase recommendation.",
    tags: ["DCF Valuation", "Ratio Analysis", "Capital Allocation"],
    live: "/projects/American-Greetings-Stock-Repurchase-Report.pdf",
    liveLabel: "View",
    primary: "/projects/American-Greetings-Stock-Repurchase-Report.pdf",
  },
  {
    name: "Mars-Wrigley Merger",
    cat: "Finance Docs",
    mono: "MW",
    grad: "linear-gradient(135deg,#334155,#020617)",
    date: "Senior Seminar",
    desc: "Valuation model projecting Wrigley's synergy-adjusted price up to $105.03/share across a 22–45% premium range.",
    tags: ["M&A", "Valuation", "Risk Management"],
    live: "/projects/Mars-Wrigley-Merger-Analysis-1.pdf",
    liveLabel: "View",
    primary: "/projects/Mars-Wrigley-Merger-Analysis-1.pdf",
  },
];
