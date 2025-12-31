import { Calendar, Award, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import SkillBadge from "@/components/SkillBadge";
import headshotImg from "@/assets/andrew-headshot.jpg";

const allSkills = [
  { name: "Financial Statement Analysis", category: "finance" as const },
  { name: "DCF Valuation", category: "finance" as const },
  { name: "Comparable Company Analysis", category: "finance" as const },
  { name: "Revenue Modeling", category: "finance" as const },
  { name: "VC Fundraising Strategy", category: "finance" as const },
  { name: "Pitch Deck Development", category: "finance" as const },
  { name: "Due Diligence Support", category: "finance" as const },
  { name: "Budgeting & Forecasting", category: "finance" as const },
  { name: "Microsoft Excel", category: "tech" as const },
  { name: "Python & VBA", category: "tech" as const },
  { name: "Bloomberg Terminal", category: "tech" as const },
  { name: "AI Automation", category: "tech" as const },
  { name: "Prompt Engineering", category: "tech" as const },
  { name: "Notion", category: "tech" as const },
  { name: "Data Analysis", category: "tech" as const },
  { name: "Strategic Planning", category: "leadership" as const },
  { name: "Investor Relations", category: "leadership" as const },
  { name: "Project Management", category: "leadership" as const },
  { name: "Cross-functional Leadership", category: "leadership" as const },
  { name: "Business Development", category: "leadership" as const },
];

const timeline = [
  {
    year: "2025",
    title: "Financial Analyst at Farm Insights",
    description: "Leading fundraising strategy and financial modeling for AI-powered AgTech startup",
  },
  {
    year: "2023",
    title: "Founded Dirty Politix LLC",
    description: "Launched and scaled digital news platform to 120,000+ monthly visitors",
  },
  {
    year: "2023",
    title: "BSBA in Finance",
    description: "Graduated from University of Colorado Boulder, Leeds School of Business",
  },
  {
    year: "2014",
    title: "Tax Help Colorado Recognition",
    description: "Received gubernatorial recognition for volunteer tax preparation services",
  },
];

export default function About() {
  return (
    <div className="min-h-screen dark">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">

                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  About <span className="gradient-text-red">Andrew</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  I'm an analytical finance professional with proven expertise in 
                  financial modeling, fundraising, and growth strategy. My work 
                  at the intersection of finance and technology drives measurable 
                  impact for innovative organizations.
                </p>

                <p className="text-muted-foreground mb-6">
                  Currently, I'm the Financial Analyst at Farm Insights, where I've 
                  architected a $1M pre-seed fundraising strategy, built comprehensive 
                  financial models, and developed AI-powered marketing systems. 
                  Previously, I founded Dirty Politix, scaling it from concept to 
                  120,000+ monthly visitors through data-driven digital strategies.
                </p>

                <p className="text-muted-foreground">
                  I'm a recent graduate from the University of Colorado Boulder's 
                  Leeds School of Business, where I earned my BSBA in Finance. 
                  My academic foundation, combined with hands-on startup experience, 
                  enables me to bridge strategic thinking with execution.
                </p>
              </div>

              <div className="relative flex justify-center animate-fade-in">
                <div className="relative">
                  <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-3xl" />
                  <img
                    src={headshotImg}
                    alt="Andrew Rodriguez"
                    className="relative w-full max-w-md rounded-3xl border-2 border-primary/30 glow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="What Drives Me"
              subtitle="Core values that guide my professional approach"
              centered
            />

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Data-Driven Decisions
                </h3>
                <p className="text-muted-foreground">
                  I believe in letting data guide strategy. From building market 
                  intelligence databases to financial modeling, I ensure every 
                  decision is backed by rigorous analysis.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Measurable Impact
                </h3>
                <p className="text-muted-foreground">
                  I focus on delivering tangible results—whether it's a $1M 
                  fundraising strategy, 120K+ monthly visitors, or 45% increased 
                  tax refunds for low-income families.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="inline-flex p-4 rounded-2xl bg-chart-4/10 mb-4">
                  <Calendar className="h-8 w-8 text-chart-4" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  Continuous Growth
                </h3>
                <p className="text-muted-foreground">
                  I'm constantly learning—from AI automation to prompt engineering—
                  staying ahead of the curve to bring innovative solutions to 
                  every challenge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Skills & Expertise"
              subtitle="A comprehensive toolkit spanning finance, technology, and leadership"
              centered
            />

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {allSkills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  category={skill.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="My Journey"
              subtitle="Key milestones in my professional development"
              centered
            />

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 last:pb-0">
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-[11px] top-6 w-0.5 h-full bg-border" />
                  )}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border ml-4">
                    <span className="text-sm text-primary font-medium">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
