import {
  FileText,
  Image,
  Mail,
  Users,
  Presentation,
  Search,
  ShieldCheck,
  LineChart,
  Wand2,
  FileSignature,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// SKILL.md contents imported as raw text so the full skill is rendered verbatim.
import prdContent from "./skills/prd.md?raw";
import imageContent from "./skills/image.md?raw";
import emailContent from "./skills/email.md?raw";
import meetingPrepContent from "./skills/meeting-prep.md?raw";
import pitchDeckContent from "./skills/pitch-deck.md?raw";
import hypestakeSeoContent from "./skills/hypestake-seo.md?raw";
import financeAuditContent from "./skills/finance-audit.md?raw";
import investorUpdateContent from "./skills/investor-update.md?raw";
import promptEngineerContent from "./skills/prompt-engineer.md?raw";
import coverLetterProContent from "./skills/cover-letter-pro.md?raw";

export interface SkillData {
  /** Display name of the skill. */
  name: string;
  /** Short, human-readable label. */
  title: string;
  /** 2-3 sentence summary of what the skill is for. */
  description: string;
  icon: LucideIcon;
  tags: string[];
  /** Full SKILL.md text, shown verbatim. */
  content: string;
  /** Path (relative to public/) of the downloadable .skill package. */
  download: string;
  /** Suggested filename when downloading. */
  downloadName: string;
}

export const skills: SkillData[] = [
  {
    name: "prd",
    title: "PRD Generator",
    description:
      "A structured product-requirements engine that turns a raw idea into agent-ready PRDs. It runs a discovery pass, asks clarifying questions, and only writes the spec once scope is locked. The output drops straight into coding agents like Claude Code, Cursor, or Windsurf as epic-level briefs and REQ-level requirements.",
    icon: FileText,
    tags: ["Product", "Specs", "Coding Agents", "PromptPro"],
    content: prdContent,
    download: "/skills/prd.skill",
    downloadName: "prd.skill",
  },
  {
    name: "image",
    title: "Image Prompt Engineer",
    description:
      "An image-prompt engineer that writes copy-paste-ready prompts for GPT Image 2 and Nano Banana Pro. It bakes in brand context, palette, and surfaces so renders stay on-brand, and treats each iteration as a diff from what actually rendered. It produces the prompt to paste into the engine rather than generating images itself.",
    icon: Image,
    tags: ["Creative", "Image Gen", "Branding", "Prompting"],
    content: imageContent,
    download: "/skills/image.skill",
    downloadName: "image.skill",
  },
  {
    name: "email",
    title: "Email Strategist",
    description:
      "A founder-side email strategist that crafts outreach and replies that sound human, not like AI or generic startup sludge. It writes with founder conviction and product-aware language to make people want to take the company seriously. Use it for cold outreach, investor notes, and high-stakes replies.",
    icon: Mail,
    tags: ["Writing", "Outreach", "Founder", "Sales"],
    content: emailContent,
    download: "/skills/email.skill",
    downloadName: "email.skill",
  },
  {
    name: "meeting-prep",
    title: "Investor Meeting Prep",
    description:
      "A fundraising research and meeting-prep analyst that operates in two strict modes: research-only dossiers and full prep guides. It gathers evidence on investors, firms, and theses, then builds talking points, 100x-return logic, and answers to tough questions. It keeps research and strategy cleanly separated until you ask to build the guide.",
    icon: Users,
    tags: ["Fundraising", "Research", "Investors", "Strategy"],
    content: meetingPrepContent,
    download: "/skills/meeting-prep.skill",
    downloadName: "meeting-prep.skill",
  },
  {
    name: "pitch-deck",
    title: "Pitch Deck Builder",
    description:
      "A pitch-deck advisor built on the principle that the best seed decks take 30 seconds to read. It pushes for ruthless brevity — a few sentences per slide, high-level overview only — because verbosity signals lack of focus. Use it to draft, tighten, and pressure-test investor decks.",
    icon: Presentation,
    tags: ["Fundraising", "Pitch", "Storytelling", "Decks"],
    content: pitchDeckContent,
    download: "/skills/pitch-deck.skill",
    downloadName: "pitch-deck.skill",
  },
  {
    name: "hypestake-seo",
    title: "HypeStake SEO",
    description:
      "A full-stack SEO operating system tuned for HypeStake — technical audits, content briefs, pillar/cluster strategy, and JSON-LD schema. It optimizes for both classical Google ranking and AI-search citation (AI Overviews, ChatGPT, Perplexity, Gemini, Claude). Use it for competitor teardowns, programmatic SEO, link building, and category positioning.",
    icon: Search,
    tags: ["SEO", "AI Search", "Content", "Growth"],
    content: hypestakeSeoContent,
    download: "/skills/hypestake-seo.skill",
    downloadName: "hypestake-seo.skill",
  },
  {
    name: "finance-audit",
    title: "Financial AI Output Auditor",
    description:
      "A ruthless forensic auditor that tears apart financial outputs from AI agents before they reach a creator, brand, or admin. It applies short-seller skepticism with ReAct, Reflexion, and chain-of-thought to catch errors, bad assumptions, and hallucinated numbers. Use it as a quality gate on any AI-generated financial analysis.",
    icon: ShieldCheck,
    tags: ["Finance", "Audit", "Quality Gate", "Analysis"],
    content: financeAuditContent,
    download: "/skills/finance-audit.skill",
    downloadName: "finance-audit.skill",
  },
  {
    name: "investor-update",
    title: "Investor Update Writer",
    description:
      "An investor-relations strategist that turns raw founder notes into sharp monthly updates for investors you've already met. It surfaces concrete progress over adjectives, handles misses honestly, and keeps warm relationships alive without sounding like a generic newsletter. It will also flag when an update is too weak to send broadly.",
    icon: LineChart,
    tags: ["Fundraising", "Investor Relations", "Writing", "Founder"],
    content: investorUpdateContent,
    download: "/skills/investor-update.skill",
    downloadName: "investor-update.skill",
  },
  {
    name: "prompt-engineer",
    title: "Prompt Architect",
    description:
      "A senior prompt engineer that builds production-ready prompts for Claude's current model family. It runs an explicit pipeline — decode, classify, decide, draft, self-critique, deliver — and ships copy-paste-ready artifacts with no bare placeholders. Crucially, it produces the prompt that produces the answer, never the answer itself.",
    icon: Wand2,
    tags: ["Prompting", "Claude", "Meta", "Engineering"],
    content: promptEngineerContent,
    download: "/skills/prompt-engineer.skill",
    downloadName: "prompt-engineer.skill",
  },
  {
    name: "cover-letter-pro",
    title: "Cover Letter Pro",
    description:
      "A cover-letter strategist that writes one complete, ready-to-send letter per request — and outputs only the letter. It maps every claim one-to-one to the resume so nothing is fabricated, bridging gaps with honest framing instead. It writes for a recruiter's eight-second scan and a hiring manager's can-they-do-the-job test.",
    icon: FileSignature,
    tags: ["Writing", "Careers", "Job Search", "Founder"],
    content: coverLetterProContent,
    download: "/skills/cover-letter-pro.skill",
    downloadName: "cover-letter-pro.skill",
  },
];
