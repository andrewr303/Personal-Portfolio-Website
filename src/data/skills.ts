import { FileText, Image, Mail, Users, Presentation } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// SKILL.md contents imported as raw text so the full skill is rendered verbatim.
import prdContent from "./skills/prd.md?raw";
import imageContent from "./skills/image.md?raw";
import emailContent from "./skills/email.md?raw";
import meetingPrepContent from "./skills/meeting-prep.md?raw";
import pitchDeckContent from "./skills/pitch-deck.md?raw";

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
];
