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
  /** Optional screenshot shown in the card header; falls back to the monogram. */
  image?: string;
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
    image: "/assets/shot-fpa-expert.png",
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
    image: "/assets/shot-founderpilot.png",
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
    image: "/assets/shot-pitchcoach.png",
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
    image: "/assets/shot-credit-tracker.png",
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
    image: "/assets/shot-electionai.png",
  },
  {
    name: "American Greetings Repurchase Proposal",
    cat: "Finance Docs",
    mono: "AG",
    grad: "linear-gradient(135deg,#475569,#0f172a)",
    date: "Senior Seminar",
    desc: "DCF modeling and ratio analysis identifying 29–52% undervaluation, with a $75M stock repurchase recommendation.",
    tags: ["DCF Valuation", "Ratio Analysis", "Capital Allocation"],
    live: "/projects/AG%20Stock%20Repurchase%20Proposal.pdf",
    liveLabel: "View",
    primary: "/projects/AG%20Stock%20Repurchase%20Proposal.pdf",
    image: "/assets/shot-ag-stock-repurchase.svg",
  },
  {
    name: "Mars Wrigley M&A Analysis",
    cat: "Finance Docs",
    mono: "MW",
    grad: "linear-gradient(135deg,#334155,#020617)",
    date: "Senior Seminar",
    desc: "Valuation model projecting Wrigley's synergy-adjusted price up to $105.03/share across a 22–45% premium range.",
    tags: ["M&A", "Valuation", "Risk Management"],
    live: "/projects/Mars%20Wrigley%20M%26A%20Analysis.pdf",
    liveLabel: "View",
    primary: "/projects/Mars%20Wrigley%20M%26A%20Analysis.pdf",
    image: "/assets/shot-mars-wrigley-ma.svg",
  },
  {
    name: "Yin Business Plan",
    cat: "Finance Docs",
    mono: "YB",
    grad: "linear-gradient(135deg,#ec4899,#312e81)",
    date: "2025 market thesis",
    desc: "A full business plan for Yin, a functional energy drink for health-minded women, a segment two billion-dollar 2025 exits (Alani Nu, Poppi) just proved is real.",
    tags: ["Business Plan", "Consumer Brands", "Market Strategy"],
    live: "/projects/Yin%20Business%20Plan.pdf",
    liveLabel: "View",
    primary: "/projects/Yin%20Business%20Plan.pdf",
    image: "/assets/shot-yin-business-plan.svg",
  },
  {
    name: "HypeStake Pitch Deck",
    cat: "Founder Tools",
    mono: "HS",
    grad: "linear-gradient(135deg,#f97316,#111827)",
    date: "V5 pitch deck",
    desc: "An investor-ready pitch deck for HypeStake that frames the product vision, market opportunity, betting intelligence workflow, and go-to-market story for a social sports-prediction platform.",
    tags: ["Pitch Deck", "Sports Tech", "Fundraising"],
    live: "/projects/Work%20Example%20HypeStake%20pitch%20deck%20V5.pdf",
    liveLabel: "View",
    primary: "/projects/Work%20Example%20HypeStake%20pitch%20deck%20V5.pdf",
    image: "/assets/shot-hypestake-deck.svg",
  },
];
