import { useState } from "react";
import { Sparkles, Code, FileText, TrendingUp, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import PromptCard from "@/components/PromptCard";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Prompts", icon: Sparkles },
  { id: "analysis", name: "Analysis", icon: TrendingUp },
  { id: "automation", name: "Automation", icon: Code },
  { id: "writing", name: "Writing", icon: FileText },
];

const prompts = [
  {
    title: "Financial Model Generator",
    description: "Generate comprehensive DCF models with customizable assumptions",
    category: "analysis",
    tags: ["Finance", "Excel", "Modeling"],
    prompt: `You are a financial modeling expert. Create a detailed DCF (Discounted Cash Flow) model for [COMPANY NAME] with the following structure:

1. Revenue Projections (5 years)
   - Break down by product/service lines
   - Include growth rate assumptions
   
2. Operating Expenses
   - COGS as % of revenue
   - SG&A projections
   - R&D if applicable

3. Capital Expenditure Schedule
4. Working Capital Analysis
5. WACC Calculation
6. Terminal Value (using perpetuity growth method)
7. Sensitivity Analysis Matrix

Format the output as structured data that can be imported into Excel.`,
    output: `## DCF Model Structure for [Company]

### Revenue Projections (in millions)
| Year | Product A | Product B | Services | Total | YoY Growth |
|------|-----------|-----------|----------|-------|------------|
| 2024 | $45.2     | $23.1     | $12.5    | $80.8 | -          |
| 2025 | $52.0     | $27.7     | $15.0    | $94.7 | 17.2%      |
...

### Key Assumptions
- Revenue CAGR: 15.2%
- Terminal Growth Rate: 3.0%
- WACC: 10.5%

### Valuation Summary
- Enterprise Value: $892M
- Equity Value: $845M
- Implied Share Price: $42.25`,
  },
  {
    title: "Market Research Synthesizer",
    description: "Transform raw market data into actionable insights",
    category: "analysis",
    tags: ["Research", "Strategy", "Data"],
    prompt: `Analyze the following market research data and provide:

1. EXECUTIVE SUMMARY (3-4 sentences max)
2. KEY MARKET TRENDS
   - List top 5 trends with impact assessment (High/Medium/Low)
3. COMPETITIVE LANDSCAPE
   - Map competitors on a 2x2 matrix (Price vs Quality)
4. OPPORTUNITIES & THREATS
5. STRATEGIC RECOMMENDATIONS
   - Prioritized action items with timeline

Data to analyze:
[PASTE YOUR MARKET DATA HERE]

Keep insights actionable and quantified where possible.`,
    output: `## Market Analysis: AgTech SaaS Sector

### Executive Summary
The AgTech SaaS market is projected to reach $4.2B by 2027, growing at 14.3% CAGR. Key drivers include precision agriculture adoption and sustainability mandates.

### Key Trends
1. **AI/ML Integration** - HIGH IMPACT
2. **Sustainability Reporting** - HIGH IMPACT
3. **Mobile-First Solutions** - MEDIUM IMPACT
...`,
  },
  {
    title: "Investor Update Email",
    description: "Professional investor communication template",
    category: "writing",
    tags: ["Investor Relations", "Communication"],
    prompt: `Write a monthly investor update email for a [STAGE] startup with:

METRICS TO INCLUDE:
- MRR: [CURRENT] (vs [PREVIOUS])
- Burn Rate: [AMOUNT]
- Runway: [MONTHS]
- Key Win: [ACHIEVEMENT]
- Challenge: [OBSTACLE]

TONE: Professional but warm, transparent about challenges
LENGTH: 400-500 words
STRUCTURE: 
1. Opening hook (1 sentence)
2. Metrics dashboard
3. Highlights section
4. Challenges & learnings
5. Ask/how investors can help
6. Personal note

Avoid: Jargon, defensive language, burying bad news`,
    output: `Subject: Farm Insights November Update: 40% MRR Growth 🌱

Hi [Investor Name],

Quick hook: We just closed our largest enterprise deal to date—more on that below.

### 📊 November Metrics
| Metric | November | October | Change |
|--------|----------|---------|--------|
| MRR | $127K | $91K | +40% |
| Customers | 45 | 38 | +18% |
...`,
  },
  {
    title: "Code Documentation Generator",
    description: "Auto-generate comprehensive code documentation",
    category: "automation",
    tags: ["Development", "Documentation"],
    prompt: `Generate documentation for the following code:

[PASTE CODE HERE]

Include:
1. OVERVIEW - What does this code do? (2-3 sentences)
2. PARAMETERS - Table with name, type, description, default value
3. RETURN VALUE - Type and description
4. USAGE EXAMPLES - 2-3 practical examples
5. EDGE CASES - Known limitations or gotchas
6. DEPENDENCIES - External libraries or functions used

Format as Markdown. Use JSDoc-style annotations where applicable.`,
    output: `## \`calculateRunway\`

### Overview
Calculates the estimated runway in months based on current cash position and burn rate. Accounts for seasonal variations and planned fundraising.

### Parameters
| Name | Type | Description | Default |
|------|------|-------------|---------|
| cashBalance | number | Current cash in bank | required |
| monthlyBurn | number | Average monthly expenses | required |
| growthRate | number | MoM burn increase | 0.05 |
...`,
  },
  {
    title: "Meeting Notes Summarizer",
    description: "Transform meeting transcripts into structured action items",
    category: "automation",
    tags: ["Productivity", "Meetings"],
    prompt: `Summarize this meeting transcript into:

## MEETING SUMMARY
- Date: [AUTO-DETECT]
- Attendees: [LIST]
- Duration: [ESTIMATE]

## KEY DECISIONS
[Numbered list of decisions made]

## ACTION ITEMS
| Owner | Task | Deadline | Priority |
Format as table

## OPEN QUESTIONS
[Items needing follow-up]

## NEXT MEETING
- Suggested agenda items

TRANSCRIPT:
[PASTE TRANSCRIPT]

Keep summary under 300 words. Prioritize actionable outcomes.`,
  },
  {
    title: "Pitch Deck Narrative Builder",
    description: "Create compelling pitch deck storylines",
    category: "writing",
    tags: ["Fundraising", "Pitch", "Storytelling"],
    prompt: `Create a pitch deck narrative structure for a [STAGE] [INDUSTRY] startup:

COMPANY INFO:
- Problem: [PROBLEM]
- Solution: [SOLUTION]  
- Traction: [KEY METRICS]
- Ask: [FUNDING AMOUNT]

Generate for each slide:
1. HEADLINE (7 words max, no buzzwords)
2. KEY MESSAGE (1 sentence)
3. SUPPORTING POINTS (3 bullets)
4. VISUAL SUGGESTION

Slides needed:
1. Title/Hook
2. Problem
3. Solution
4. Market Size
5. Business Model
6. Traction
7. Team
8. Competition
9. Financials
10. Ask

Make it memorable. Avoid clichés like "disrupting" or "revolutionary."`,
  },
];

export default function Prompts() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPrompts =
    activeCategory === "all"
      ? prompts
      : prompts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6 animate-slide-up">
              <div className="p-3 rounded-xl bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                AI Prompts & <span className="gradient-text-red">Code</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl animate-slide-up">
              A curated collection of prompts I use daily for financial analysis,
              automation, and content creation. Copy, customize, and make them your own.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="shrink-0"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Prompts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Prompt Library"
              subtitle={`${filteredPrompts.length} prompts available`}
            />

            <div className="grid gap-8 mt-12">
              {filteredPrompts.map((prompt, index) => (
                <div
                  key={prompt.title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PromptCard
                    title={prompt.title}
                    description={prompt.description}
                    prompt={prompt.prompt}
                    category={prompt.category}
                    tags={prompt.tags}
                    output={prompt.output}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Want Custom Prompts?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I create custom AI workflows and prompts for finance teams and startups.
              Let's discuss how AI can streamline your operations.
            </p>
            <Button asChild size="lg" className="glow">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
