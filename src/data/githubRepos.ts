export type RepoCategory =
  | "AI Finance"
  | "Founder Tools"
  | "Agent Tooling"
  | "Portfolio"
  | "Market Intelligence"
  | "Personal Finance";

export interface GitHubRepoContent {
  name: string;
  displayName: string;
  category: RepoCategory;
  status: "Public" | "Portfolio-grade" | "Active system" | "Template";
  priority: number;
  repoUrl: string;
  liveUrl?: string;
  oneLiner: string;
  deepDescription: string;
  problem: string;
  product: string;
  architecture: string[];
  features: string[];
  stack: string[];
  proofPoints: string[];
  portfolioAngle: string;
  suggestedCaseStudySlug: string;
}

export const githubRepoContent: GitHubRepoContent[] = [
  {
    name: "Claude-Fable-Mode",
    displayName: "Fable Mode",
    category: "Agent Tooling",
    status: "Active system",
    priority: 1,
    repoUrl: "https://github.com/andrewr303/Claude-Fable-Mode",
    oneLiner:
      "A drop-in operating standard for AI coding agents that forces inspect-first work, staged execution, verification, and honest handoffs.",
    deepDescription:
      "Fable Mode packages a disciplined agent workflow into reusable repo-level instructions, Claude Code assets, and a Codex plugin package. The goal is to make coding agents behave less like autocomplete and more like careful operators: inspect the real system, decompose only where it helps, verify with checks that can fail, and separate confirmed facts from assumptions before handoff.",
    problem:
      "AI coding agents often guess paths, skip tests, trust generated text, and call shallow checks 'done.' That creates fragile code and misleading handoffs.",
    product:
      "A reusable operating layer for Claude Code, Codex, Cursor, and other agents. It includes AGENTS.md, CLAUDE.md, drop-in templates, Claude assets, and Codex plugin packaging.",
    architecture: [
      "Repo-level AGENTS.md and CLAUDE.md standards",
      "Claude Code agents, commands, and skills",
      "Codex plugin package with installable skill assets",
      "Validation and packaging helpers",
      "Installation, customization, and verification docs",
    ],
    features: [
      "Stage-map-first workflow for complex repo tasks",
      "Verification discipline using typechecks, tests, runtime checks, and rendered artifact inspection",
      "Explicit confirmed-vs-unverified final handoff format",
      "Delegation contracts for independent agent work",
      "Drop-in templates for new projects",
    ],
    stack: ["JavaScript", "Shell", "Claude Code", "Codex plugins", "Agent instructions", "Markdown"],
    proofPoints: [
      "Public repo with reusable install assets",
      "Includes Claude and Codex paths rather than a single-tool prompt",
      "Designed as product-neutral infrastructure, not just a HypeStake-specific helper",
    ],
    portfolioAngle:
      "This should be framed as your strongest public AI tooling artifact: a practical reliability system for agentic development, not a prompt collection.",
    suggestedCaseStudySlug: "fable-mode-agent-operating-standard",
  },
  {
    name: "AI-FPA-Assistant",
    displayName: "AI FP&A Expert",
    category: "AI Finance",
    status: "Portfolio-grade",
    priority: 2,
    repoUrl: "https://github.com/andrewr303/AI-FPA-Assistant",
    liveUrl: "https://fpa.andrewvrodriguez.com",
    oneLiner:
      "An AI-native FP&A workspace for KPI dashboards, margin simulation, variance narration, and board-ready finance analysis.",
    deepDescription:
      "AI FP&A Expert demonstrates the intersection of Andrew's finance background and full-stack AI product execution. It gives finance users a dashboard for executive KPIs, pricing and margin tradeoff analysis, variance explanations, AI cost and quality review, and contextual copilot responses using customizable company context.",
    problem:
      "Finance teams need fast board-ready narratives, but the work usually lives across spreadsheets, dashboards, and manual commentary.",
    product:
      "A production-style FP&A cockpit with realistic mock data, customizable company context, scenario modules, and an AI copilot layer.",
    architecture: [
      "React + TypeScript + Vite frontend",
      "TanStack Router application structure",
      "Supabase Edge Function option for AI proxying",
      "PHP fallback proxy path",
      "Custom company context and user-provided data JSON sent into copilot workflows",
    ],
    features: [
      "Executive KPI dashboard with trend signals",
      "Pricing and margin simulators",
      "Variance narration for board-ready commentary",
      "Vendor/model portfolio analysis for AI cost and quality decisions",
      "Context-aware FP&A copilot",
      "Bring-your-own API key and data context support",
    ],
    stack: ["React", "TypeScript", "Vite", "TanStack Router", "Tailwind CSS", "Supabase Edge Functions", "PHP proxy"],
    proofPoints: [
      "Public repo",
      "Live subdomain listed in README",
      "Demonstrates finance domain UX plus AI integration patterns",
    ],
    portfolioAngle:
      "Use this as proof you can turn finance workflows into usable AI software, not just build generic dashboards.",
    suggestedCaseStudySlug: "ai-fpa-expert-finance-copilot",
  },
  {
    name: "VC-meeting-prep-assistant",
    displayName: "FounderPilot VC Meeting Prep Assistant",
    category: "Founder Tools",
    status: "Portfolio-grade",
    priority: 3,
    repoUrl: "https://github.com/andrewr303/VC-meeting-prep-assistant",
    liveUrl: "https://founderpilot.ai",
    oneLiner:
      "A founder-facing AI assistant that turns messy meeting notes into investor-ready VC prep briefs and fundraising strategy reports.",
    deepDescription:
      "FounderPilot takes unstructured meeting context such as calendar notes, email snippets, call notes, or freeform text and converts it into a structured prep package for venture meetings. It reflects a practical founder pain point Andrew has lived directly: preparing for investor conversations with better narrative, better questions, and sharper follow-up.",
    problem:
      "Founders waste time preparing for VC meetings from scattered notes and often walk in without a tight firm/partner strategy.",
    product:
      "A web app that accepts meeting context and returns VC intelligence, strategic talking points, expected questions, objection prep, and before/during/after action checklists.",
    architecture: [
      "React + TypeScript + Vite frontend",
      "Supabase Edge Functions for AI orchestration",
      "Controlled JSON output format",
      "Prompt/model admin route for iteration",
      "Input validation and malformed-output safeguards",
    ],
    features: [
      "Meeting notes to strategy playbook workflow",
      "Structured VC research report workflow",
      "Firm, partner, startup stage, sector, and meeting-date inputs",
      "Admin UI for prompt, model, temperature, max tokens, and active state",
      "Required field checks, length caps, date validation, sanitization, and response parsing safeguards",
    ],
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Radix", "TanStack Query", "React Router", "Supabase Edge Functions", "Supabase Postgres"],
    proofPoints: [
      "Public repo",
      "Live website listed in README",
      "Good founder-market fit because it mirrors fundraising workflow pain",
    ],
    portfolioAngle:
      "Use this to show you build tools from lived founder problems, with admin prompt operations and validation instead of one-off AI calls.",
    suggestedCaseStudySlug: "founderpilot-vc-meeting-prep",
  },
  {
    name: "Ticket-Reselling-Tool",
    displayName: "Ticket Trading Intelligence Platform",
    category: "Market Intelligence",
    status: "Portfolio-grade",
    priority: 4,
    repoUrl: "https://github.com/andrewr303/Ticket-Reselling-Tool",
    oneLiner:
      "A seven-tool AI intelligence platform for live event ticket brokers, combining event data, web research, LLM analysis, and portfolio risk scoring.",
    deepDescription:
      "The Ticket Trading Intelligence Platform is a domain-specific research and decision system for ticket resale workflows. It combines live event data, real-time web context, AI prompts, Supabase Auth, RLS-backed user data, and multiple analysis tools that map to an actual trader's workflow from morning brief to post-trade coaching.",
    problem:
      "Ticket brokers make fast decisions from fragmented data: inventory, demand signals, social buzz, comparable events, and risk exposure.",
    product:
      "A workflow suite with Open Bell, Edge Calculator, TradeBot, War Room, Comps Engine, Radar, and Playbook modules for research, ROI, risk, comps, watchlists, and coaching.",
    architecture: [
      "React + Vite browser app",
      "Supabase Auth with RLS-enforced sessions",
      "Supabase Postgres tables for positions, trades, watchlist, briefs, and research cache",
      "Supabase Edge Functions for LLM proxying, deep research, and event search",
      "Ticketmaster Discovery API, You.com Search/Research, and OpenRouter model routing",
    ],
    features: [
      "AI morning brief for priority events and risk alerts",
      "ROI verdicts from Strong Buy to Strong Pass",
      "Slack-style natural language TradeBot",
      "Inventory risk heatmap and AI portfolio coaching",
      "Comparable event finder with pricing guidance",
      "Demand signal watchlist",
      "Trade journal with P&L, win rate, ROI distribution, and AI coaching",
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase Auth", "Supabase Postgres", "Supabase Edge Functions", "Deno", "Ticketmaster API", "You.com API", "OpenRouter"],
    proofPoints: [
      "Public repo",
      "Seven-module product surface",
      "Uses search, structured prompts, model routing, caching, and RLS-backed state",
    ],
    portfolioAngle:
      "This is a strong example of vertical AI software: narrow user, specific workflow, custom scoring, and live-data augmentation.",
    suggestedCaseStudySlug: "ticket-trading-intelligence-platform",
  },
  {
    name: "PitchCoach-AI",
    displayName: "PitchCoach AI",
    category: "Founder Tools",
    status: "Portfolio-grade",
    priority: 5,
    repoUrl: "https://github.com/andrewr303/PitchCoach-AI",
    oneLiner:
      "A deck-to-speaker-guide app that turns PDF/PPTX slides into slide-by-slide presentation coaching with structured AI output.",
    deepDescription:
      "PitchCoach AI helps founders and executives convert raw slide decks into presentation guidance. Users upload a PDF or PPTX, the app extracts slide content, sends it through a Supabase Edge Function to Claude, and returns a keyboard-navigable presenter experience with talking points, transitions, core messages, timing, energy cues, and statistics extracted from the deck.",
    problem:
      "Founders can have strong decks but weak delivery. Preparing speaker notes manually takes time and often misses transitions, timing, and emphasis.",
    product:
      "A presenter-prep app that analyzes actual deck content and produces structured slide-by-slide coaching in seconds.",
    architecture: [
      "Browser-side PDF/PPTX upload and slide parsing",
      "pdfjs-dist for text and image extraction",
      "Supabase Auth and PostgreSQL",
      "Supabase Edge Function called generate-guide",
      "Anthropic Claude API returning a strict JSON guide array",
      "Keyboard-driven speaker guide UI",
    ],
    features: [
      "Upload PDF or PPTX up to 30 MB and 100 slides",
      "Exactly three talking points per slide",
      "Transition statements and core message per slide",
      "Keyword tags, visual cues, stats extraction, timing, and energy levels",
      "Built-in presentation timer and keyboard navigation",
      "Deck history dashboard",
    ],
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Radix", "TanStack Query", "React Hook Form", "Zod", "pdfjs-dist", "Supabase", "Anthropic Claude"],
    proofPoints: [
      "Public repo",
      "Deck processing + structured AI output",
      "Combines product UX with AI orchestration and file handling",
    ],
    portfolioAngle:
      "Use this to show multimodal/document-adjacent AI product thinking, founder workflow awareness, and schema-controlled LLM output.",
    suggestedCaseStudySlug: "pitchcoach-ai-deck-speaking-guide",
  },
  {
    name: "Simple-Finance-Tracker",
    displayName: "Simple Finance Tracker",
    category: "Personal Finance",
    status: "Public",
    priority: 6,
    repoUrl: "https://github.com/andrewr303/Simple-Finance-Tracker",
    oneLiner:
      "A secure personal finance dashboard for monitoring credit cards, bank accounts, available credit, and account health.",
    deepDescription:
      "Simple Finance Tracker consolidates credit cards and bank accounts into one authenticated dashboard. It gives users aggregate totals, account-level CRUD, spend power overrides, notes, over-limit detection, health indicators, responsive layout, and Supabase RLS so each user can only access their own account records.",
    problem:
      "Personal liquidity and credit exposure are often scattered across multiple bank and card portals, making it hard to see available credit and account risk quickly.",
    product:
      "A clean personal finance dashboard with account creation, editing, deletion, health indicators, and aggregate summary cards.",
    architecture: [
      "React Router protected app routes",
      "Supabase email/password auth",
      "AppProvider with Context + useReducer state flow",
      "Supabase accounts table with row-level security",
      "Validated add/edit forms using React Hook Form and Zod",
      "Vitest and Testing Library tests for core finance logic",
    ],
    features: [
      "Unified limit, balance, and available-credit summary cards",
      "Credit card and bank account handling",
      "Spend power override",
      "Green/yellow/red health indicators",
      "Over-limit warnings",
      "Per-account notes",
      "Full CRUD with optimistic UI and toast feedback",
    ],
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod", "Supabase Auth", "Supabase Postgres", "Vitest"],
    proofPoints: [
      "Public repo",
      "Authenticated CRUD app with RLS",
      "Tests for calculation and reducer logic",
    ],
    portfolioAngle:
      "Use this as the clean app architecture example: auth, CRUD, RLS, responsive UI, reducer state, and tests.",
    suggestedCaseStudySlug: "simple-finance-tracker",
  },
  {
    name: "Personal-Portfolio-Website",
    displayName: "Personal Portfolio Website",
    category: "Portfolio",
    status: "Template",
    priority: 7,
    repoUrl: "https://github.com/andrewr303/Personal-Portfolio-Website",
    liveUrl: "https://andrewvrodriguez.com",
    oneLiner:
      "The portfolio itself: a React, TypeScript, and Tailwind site for finance, entrepreneurship, AI workflows, projects, tools, prompts, and contact.",
    deepDescription:
      "This repo is both the live personal site and a reusable template. The current structure already supports home, resume, ventures, projects, tools, prompts, blog, contact, PDF viewer, and 404 routes. The new GitHub tab should become the strongest proof layer by pulling public repos into a deep project library.",
    problem:
      "The portfolio needs to show the full depth of Andrew's recent AI/product work rather than only finance and older venture artifacts.",
    product:
      "A production-ready personal website and reusable portfolio template with structured sections and fast Vite performance.",
    architecture: [
      "React + TypeScript app",
      "Vite build pipeline",
      "React Router page structure",
      "Tailwind CSS and shadcn/ui components",
      "TanStack Query dependency available for data utilities",
      "PDF viewer and reusable cards/section components",
    ],
    features: [
      "Home, resume, ventures, projects, tools, prompts, blog, and contact sections",
      "Reusable UI components",
      "Prompt library data file",
      "Project cards and PDF project support",
      "Responsive layout and downloadable resume CTA",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Router", "TanStack Query", "Lucide React"],
    proofPoints: [
      "Public repo",
      "Live portfolio listed in README",
      "Already structured for a new GitHub route and stronger data-driven project pages",
    ],
    portfolioAngle:
      "Treat the site as a product, not a resume. The GitHub tab should turn it into a technical credibility layer for investors, employers, collaborators, and customers.",
    suggestedCaseStudySlug: "personal-portfolio-website",
  },
];

export const repoCategories: Array<"All" | RepoCategory> = [
  "All",
  "Agent Tooling",
  "AI Finance",
  "Founder Tools",
  "Market Intelligence",
  "Personal Finance",
  "Portfolio",
];
