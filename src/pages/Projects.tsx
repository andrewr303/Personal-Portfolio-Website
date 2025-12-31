import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Finance", "AI & Automation", "Business", "School"];

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
    title: "Yin Probiotic Energy Drink",
    description:
      "Comprehensive business plan for a probiotic-infused energy drink targeting the female demographic, including financial projections and market analysis.",
    tags: ["Business Plan", "Market Analysis", "Financial Projections"],
    category: "School",
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
    <div className="min-h-screen dark">
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

        {/* School Project Highlight */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Featured School Project"
              subtitle="Yin Probiotic Energy Drink Business Plan"
              centered
            />

            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-4">
                      Executive Summary
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Yin is designed to disrupt the $74 billion U.S. energy drinks 
                      market with a groundbreaking probiotic-infused formula, 
                      specifically targeting the underserved female demographic.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        Target market projected to reach $104B by 2030 (5.83% CAGR)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        83% of women ages 18-34 consume energy drinks
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        Product line: Original, Pre-Workout, Focus, Relax
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold mb-4">
                      Key Components
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <h4 className="font-semibold mb-1">Market Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive industry research and competitive positioning
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <h4 className="font-semibold mb-1">Financial Projections</h4>
                        <p className="text-sm text-muted-foreground">
                          5-year pro forma with detailed revenue and cost modeling
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <h4 className="font-semibold mb-1">Marketing Strategy</h4>
                        <p className="text-sm text-muted-foreground">
                          Influencer partnerships and digital-first approach
                        </p>
                      </div>
                    </div>
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
