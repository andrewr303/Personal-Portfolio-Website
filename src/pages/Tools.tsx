import { Database, Bot, LineChart, Users, Zap, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

const tools = [
  {
    icon: Users,
    title: "Investor CRM in Notion",
    subtitle: "Zero-Cost Enterprise Alternative",
    description:
      "Built a comprehensive investor outreach and relationship management system in Notion that replicates the capabilities of expensive enterprise fundraising platforms.",
    features: [
      "Centralized investor database with qualification criteria",
      "Automated outreach tracking and follow-up reminders",
      "AI-powered email personalization templates",
      "Pipeline visualization and conversion tracking",
      "Integration with communication workflows",
    ],
    impact: "Enabled $1M pre-seed fundraising strategy at zero software cost",
  },
  {
    icon: Target,
    title: "Opportunity Score Algorithm",
    subtitle: "Market Intelligence Engine",
    description:
      "Developed a proprietary scoring algorithm that analyzes 450+ U.S. farming counties to identify the highest-potential markets for customer acquisition.",
    features: [
      "Multi-factor analysis: farm density, economic pressure, crop complexity",
      "Custom weighting system optimized for AgTech",
      "Top-10 market identification for go-to-market strategy",
      "Geographic visualization and heat mapping",
      "Regular score updates as data refreshes",
    ],
    impact: "Identified top 10 entry markets from 450+ county database",
  },
  {
    icon: Bot,
    title: "AI Content Generation Engine",
    subtitle: "Social Media Automation",
    description:
      "End-to-end social media operations system that produces high-volume, platform-specific content aligned with brand voice using AI assistance.",
    features: [
      "Multi-platform content adaptation (LinkedIn, Facebook, TikTok)",
      "PhD-validated brand voice consistency",
      "Hootsuite integration for scheduling",
      "Performance analytics and optimization",
      "Rapid content iteration workflow",
    ],
    impact: "Significantly increased engagement with minimal manual effort",
  },
  {
    icon: LineChart,
    title: "Financial Modeling Suite",
    subtitle: "Comprehensive Startup Financials",
    description:
      "Built a complete financial modeling framework including 5-year pro forma, revenue projections, unit economics, and runway analysis.",
    features: [
      "Income Statement, Balance Sheet, Cash Flow Statement",
      "60-month revenue projections with churn modeling",
      "API cost optimization across 6 providers",
      "NOL carryforward tax optimization ($6.4M)",
      "Scenario analysis for capital requirements",
    ],
    impact: "Modeled path to profitability: 7% net margin, $8.7M Year 5 income",
  },
  {
    icon: Database,
    title: "Prospect Pipeline Builder",
    subtitle: "Lead Generation System",
    description:
      "Created a systematic approach to building and qualifying a pipeline of potential customers for cold outreach campaigns.",
    features: [
      "Prospect identification and data enrichment",
      "ICP (Ideal Customer Profile) refinement",
      "Segmentation by farm type and size",
      "Outreach sequence optimization",
      "Conversion tracking and analysis",
    ],
    impact: "Built pipeline of 2,400+ qualified farm prospects",
  },
  {
    icon: Zap,
    title: "Pitch Deck Improvement Tracker",
    subtitle: "Continuous Refinement System",
    description:
      "Established a documented process for iterative pitch deck improvement with tracked enhancements and stakeholder feedback integration.",
    features: [
      "Slide-by-slide review documentation",
      "Sync meeting notes and action items",
      "Version control and change tracking",
      "Investor feedback integration",
      "A/B testing of messaging",
    ],
    impact: "Created 15-slide deck through documented improvement process",
  },
];

export default function Tools() {
  return (
    <div className="min-h-screen dark">
      <Navbar />

      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Tools & <span className="gradient-text">Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl animate-slide-up">
              Custom-built tools and workflows that drive efficiency, enable 
              data-driven decisions, and create enterprise-level capabilities 
              without enterprise-level costs.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <tool.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {tool.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{tool.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Badge variant="secondary" className="text-xs">
                      Impact
                    </Badge>
                    <p className="text-sm text-primary font-medium mt-2">
                      {tool.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Prompts Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="AI & Prompt Engineering"
              subtitle="Leveraging AI to automate workflows and enhance productivity"
              centered
            />

            <div className="max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display text-xl font-semibold mb-4">
                  Sample AI Applications
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <h4 className="font-semibold mb-2">Email Personalization</h4>
                    <p className="text-sm text-muted-foreground font-mono bg-background/50 p-3 rounded-lg">
                      AI prompts that analyze investor profiles and generate personalized 
                      outreach emails maintaining brand voice while addressing specific 
                      investment theses and portfolio company patterns.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-secondary/50">
                    <h4 className="font-semibold mb-2">Content Generation</h4>
                    <p className="text-sm text-muted-foreground font-mono bg-background/50 p-3 rounded-lg">
                      Multi-platform content adaptation prompts that transform core 
                      messaging into LinkedIn thought leadership, Facebook engagement 
                      posts, and TikTok scripts while maintaining consistency.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-secondary/50">
                    <h4 className="font-semibold mb-2">Data Analysis</h4>
                    <p className="text-sm text-muted-foreground font-mono bg-background/50 p-3 rounded-lg">
                      Prompts for synthesizing market research, competitive analysis, 
                      and customer feedback into actionable insights and strategic 
                      recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
