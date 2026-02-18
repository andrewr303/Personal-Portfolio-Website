import { useState } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Finance", "AI & Automation", "Business", "School"];

const pdfProjects = [
  {
    title: "Strategic Corporate Analysis & Stock Buyback Recommendation",
    subtitle: "American Greetings — Senior Seminar in Finance",
    description:
      "Comprehensive financial analysis including ratio analysis, DCF modeling, and a $75M stock repurchase recommendation based on 29-52% undervaluation.",
    tags: ["DCF Valuation", "Ratio Analysis", "Capital Allocation"],
    file: "/projects/American-Greetings-Stock-Repurchase-Report.pdf",
  },
  {
    title: "Yin Probiotic Energy Drink Business Plan",
    subtitle: "New Venture Creation",
    description:
      "Full business plan for a probiotic energy drink targeting a $70M untapped market opportunity, with bottom-up financial modeling and go-to-market strategy.",
    tags: ["Business Plan", "Market Analysis", "Financial Modeling"],
    file: "/projects/Yin-Business-Plan.pdf",
  },
  {
    title: "Mars-Wrigley Merger Analysis",
    subtitle: "Senior Seminar in Finance",
    description:
      "Valuation model projecting Wrigley's stand-alone value and synergy-adjusted price up to $105.03/share, with negotiation range analysis at 22-45% premium.",
    tags: ["M&A", "Valuation", "Risk Management"],
    file: "/projects/Mars-Wrigley-Merger-Analysis-1.pdf",
  },
];

const projects = [
  {
    title: "Investor CRM System",
    description:
      "Built a zero-cost custom investor CRM in Notion with AI-powered email personalization that replicates enterprise platform capabilities for Farm Insights fundraising.",
    tags: ["Notion", "AI Automation", "CRM", "Fundraising"],
    category: "AI & Automation",
    featured: true,
  },
  {
    title: "5-Year Financial Model",
    description:
      "Comprehensive pro forma including P&L, Balance Sheet, Cash Flow with 18-month runway modeling, NOL optimization ($6.4M), and path to profitability projections.",
    tags: ["Excel", "Financial Modeling", "Forecasting", "VBA"],
    category: "Finance",
    featured: true,
  },
  {
    title: "Market Intelligence Engine",
    description:
      "Proprietary database covering 450+ U.S. farming counties with custom 'Opportunity Score' algorithm for data-driven geographic targeting.",
    tags: ["Data Analysis", "Market Research", "Algorithm Design"],
    category: "AI & Automation",
  },
  {
    title: "AI Marketing Workflow",
    description:
      "End-to-end social media content generation system using AI to produce high-volume, platform-specific content aligned with brand voice.",
    tags: ["AI", "Content Marketing", "Automation", "Hootsuite"],
    category: "AI & Automation",
  },
  {
    title: "Dirty Politix Platform",
    description:
      "Digital political news platform scaled from concept to 120,000+ monthly visitors through targeted growth strategies and AI-optimized content.",
    tags: ["Digital Media", "Growth Strategy", "SEO", "Content"],
    category: "Business",
  },
  {
    title: "Revenue & COGS Model",
    description:
      "Detailed 60-month revenue model tracking customer acquisition, churn rates, tier conversions, and API cost optimization across six providers.",
    tags: ["Revenue Modeling", "Unit Economics", "SaaS Metrics"],
    category: "Finance",
  },
  {
    title: "Investor Pitch Deck",
    description:
      "15-slide investor presentation with documented improvement process, sync meetings, and tracked enhancements for Farm Insights seed round.",
    tags: ["Pitch Deck", "Storytelling", "Investor Relations"],
    category: "Finance",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Projects & <span className="gradient-text">Work Samples</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl animate-slide-up">
              A collection of financial models, AI automation tools, business
              ventures, and strategic projects that demonstrate my analytical
              and entrepreneurial capabilities.
            </p>
          </div>
        </section>

        {/* Featured PDF Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Featured Reports"
              subtitle="Click to view or download full academic reports and analyses"
              centered
            />

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pdfProjects.map((proj) => (
                <a
                  key={proj.title}
                  href={proj.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer block"
                >
                  {/* Icon header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <span className="p-2 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-primary/70 font-medium mb-3">{proj.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4">{proj.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <FileText className="h-4 w-4" />
                    View Full Report
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  featured={project.featured}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
