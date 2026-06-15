import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, GraduationCap, Lightbulb, Code, Sparkles, Cpu, Network, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBadge from "@/components/SkillBadge";

const skills = {
  finance: [
    "Financial Modeling",
    "Pro Forma Statements",
    "Unit Economics",
    "DCF Valuation",
    "Scenario Analysis",
    "Burn Rate Modeling",
    "FP&A",
    "VC Fundraising",
  ],
  ai: [
    "AI-Native Product Design",
    "LLM Orchestration",
    "AI Agents",
    "Retrieval Augmented Generation",
    "Multi-Provider LLM Integration",
    "Prompt Engineering",
    "AI Evaluation & Observability",
  ],
  tech: [
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Supabase",
    "Edge Functions",
    "Trigger.dev",
    "Full-Stack Engineering",
  ],
  leadership: [
    "Founder / CEO",
    "Product Strategy",
    "Go-to-Market Planning",
    "Investor Relations",
    "Fundraising Strategy",
    "Cross-functional Leadership",
  ],
};

const hypestakeBuilds = [
  {
    icon: Calculator,
    title: "AI-Powered Valuation Engine",
    accent: true,
    description:
      "Built an AI-powered financial modeling engine that converts company data, market research, and internal context into structured valuation outputs and qualitative analysis—pairing LLM research with deterministic Python math so every figure stays reproducible and auditable rather than model-generated.",
  },
  {
    icon: Network,
    title: "Multi-Provider AI Infrastructure",
    accent: false,
    description:
      "Integrated multi-provider AI and research infrastructure across Anthropic, OpenAI, Google/Gemini, AWS Bedrock, Perplexity, Cohere, Exa, and You.com—plus internal knowledge systems—to dramatically increase the accuracy and quality of AI outputs.",
  },
  {
    icon: Cpu,
    title: "Full-Stack AI Product",
    accent: false,
    description:
      "Architected and shipped the entire platform as the only engineer: full-stack AI-powered workflows built with React, TypeScript, Supabase, Edge Functions, Trigger.dev, and Python services, powering complex multi-layer product features end to end.",
  },
  {
    icon: Briefcase,
    title: "Finance + Fundraising",
    accent: false,
    description:
      "Constructed a 5-year pro forma model with revenue projections, unit economics, burn-rate analysis, and multi-scenario forecasting to support fundraising and long-term strategy—owning architecture, code, finance, and go-to-market simultaneously.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />

        {/* HypeStake Section */}
        <section id="hypestake" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-16 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                <Sparkles className="h-4 w-4" />
                Currently building — Founder &amp; CEO
              </div>
              <SectionHeader
                title="Building HypeStake from Zero to Product"
                subtitle="An AI-powered creator-brand equity marketplace—taken from concept to a working, shipped product as founder, CEO, and the only engineer."
              />
              <p className="text-muted-foreground mb-4">
                At HypeStake I wear every hat: I own the architecture, write all the code, build the
                financial models, and drive go-to-market. The product introduces a new financial
                instrument—Creator Equity—that lets creators earn real ownership in the brands they
                champion, replacing what investment bankers charge tens of thousands for with intelligent
                automation.
              </p>
              <p className="text-muted-foreground mb-6">
                What makes it unusual is the blend: a finance-native founder who can also ship a
                full-stack, multi-provider AI platform. The result is an AI-assisted valuation stack
                where LLM-driven research is grounded by deterministic Python math, so every number is
                reproducible and auditable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/ventures">
                    Explore HypeStake <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://hypestake.ai" target="_blank" rel="noopener noreferrer">
                    Visit hypestake.ai
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {hypestakeBuilds.map((build) => (
                <div
                  key={build.title}
                  className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${build.accent ? "bg-primary/10" : "bg-muted"}`}>
                      <build.icon className={`h-6 w-6 ${build.accent ? "text-primary" : "text-foreground"}`} />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{build.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{build.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Skills & Expertise"
              subtitle="A rare full-stack toolkit spanning strategic finance, AI engineering, software development, and founder-level leadership."
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">Strategic Finance</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.finance.map((skill) => (
                    <SkillBadge key={skill} name={skill} category="finance" />
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-chart-3/10">
                    <Sparkles className="h-6 w-6 text-chart-3" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">AI &amp; Machine Learning</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.ai.map((skill) => (
                    <SkillBadge key={skill} name={skill} category="ai" />
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-muted">
                    <Code className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">Software Engineering</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tech.map((skill) => (
                    <SkillBadge key={skill} name={skill} category="tech" />
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-chart-4/10">
                    <Lightbulb className="h-6 w-6 text-chart-4" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">Leadership</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.leadership.map((skill) => (
                    <SkillBadge key={skill} name={skill} category="leadership" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Preview */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Professional Experience"
              subtitle="Building impact at the intersection of finance, technology, and entrepreneurship."
              centered
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ExperienceCard
                title="Founder & CEO"
                company="HypeStake"
                period="Feb 2026 - Present"
                description="Took an AI-powered creator-brand equity marketplace from concept to working product as founder, CEO, and the only engineer."
                highlights={[
                  "Shipped a full-stack AI platform: React, TypeScript, Supabase, Edge Functions, Trigger.dev, Python",
                  "Built an AI-powered valuation engine grounded by deterministic Python math",
                  "Integrated 8+ AI/research providers (Anthropic, OpenAI, Gemini, AWS Bedrock, and more)",
                ]}
                link="/experience"
              />
              <ExperienceCard
                title="Financial Analyst"
                company="Farm Insights"
                period="Jun 2025 - Feb 2026"
                description="Drove financial planning and fundraising for an early-stage AgTech company, building investor-ready models and AI-powered tools."
                highlights={[
                  "Built investor-ready 60-month pro forma and runway scenarios",
                  "Developed PitchCoach, an AI-powered pitch-rehearsal platform",
                  "Secured a top-20 finalist spot in the AgLaunch365 accelerator",
                ]}
                link="/experience"
              />
            </div>

            <div className="text-center">
              <Button asChild variant="outline">
                <Link to="/experience">
                  View Full Experience <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Education Preview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="Education & Credentials"
                  subtitle="A strong foundation in finance from one of the nation's top business schools."
                />
                
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          Bachelor of Science in Business Administration
                        </h3>
                        <p className="text-primary font-medium">
                          University of Colorado Boulder
                        </p>
                        <p className="text-muted-foreground">
                          Leeds School of Business • Entrepreneurial Finance • May 2023
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <h4 className="font-semibold mb-3">Certifications & Recognition</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Tax Preparation Certification
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Gubernatorial Recognition - Tax Help Colorado
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        DECA & FBLA State Finalist
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
                <blockquote className="text-xl font-display italic mb-4 text-foreground">
                  "Committed to delivering measurable impact and supporting strategic 
                  growth in fast-paced, innovative organizations."
                </blockquote>
                <p className="text-muted-foreground">— Professional Philosophy</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Whether you're looking for a strategic financial partner, need help 
              with fundraising, or want to discuss AI-powered growth strategies, 
              I'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="/Andrew-Rodriguez-Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
