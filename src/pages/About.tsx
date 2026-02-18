import { Briefcase, GraduationCap, Code, TrendingUp, BarChart3, Shield, Lightbulb, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import headshotImg from "@/assets/andrew-headshot.jpg";

const skillCategories = [
  {
    title: "Financial Analysis",
    icon: BarChart3,
    skills: ["Valuation", "Capital Structure Optimization", "Cash Flow Projections", "Financial Statement Analysis", "Budgeting", "Scenario Modeling"],
  },
  {
    title: "Investment Management",
    icon: TrendingUp,
    skills: ["Asset Allocation", "Risk Mitigation", "Hedging Strategies", "Equity Research", "Market Research", "Portfolio Management", "Financial Derivatives"],
  },
  {
    title: "Entrepreneurial Acumen",
    icon: Lightbulb,
    skills: ["Business Plan Development", "Financial Forecasting", "Strategic Planning", "Competitive Analysis", "Performance Metrics", "Operational Efficiency"],
  },
  {
    title: "Technical Skills",
    icon: Code,
    skills: ["Microsoft Excel", "VBA", "Bloomberg Terminal", "AI Automation", "AI Prompt Engineering", "Office 365"],
  },
];

const experiences = [
  {
    period: "June 2023 - Present",
    company: "Dirty Politix LLC",
    role: "Owner",
    bullets: [
      "Launched a political news venture, attracting 30,000+ visitors in the first 90 days.",
      "Implemented AI-driven marketing strategy, increasing website traffic by 85% and optimizing marketing ROI.",
      "Executed social media campaigns generating 16,000+ interactions and 4,000+ comments in the first month.",
    ],
  },
  {
    period: "Oct 2013 - May 2014",
    company: "Tax Help Colorado",
    role: "Volunteer Tax Preparer",
    bullets: [
      "Provided 80 hours of tax preparation services for low income families, earning recognition from Governor Hickenlooper.",
      "Leveraged financial acumen to analyze complex tax scenarios, resulting in a 45% increase in client refunds while maintaining a 100% compliance rate.",
    ],
  },
  {
    period: "April 2011 - June 2014",
    company: "BloodySox",
    role: "Co-Founder",
    bullets: [
      "Co-founded BloodySox, a popular baseball blog.",
      "Recruited and oversaw a team of talented writers, executing a planned content strategy.",
      "Spearheaded comprehensive digital marketing initiatives, including targeted social media campaigns.",
    ],
  },
];

const schoolProjects = [
  {
    period: "Mar 2023 - May 2023",
    title: "Strategic Corporate Analysis & Stock Buyback Recommendation",
    course: "Senior Seminar in Finance",
    bullets: [
      "Performed a comprehensive financial analysis of American Greetings, including ratio analysis and cash flow evaluation, to uncover operational inefficiencies and propose solutions to enhance capital management.",
      "Built a sophisticated discounted cash flow model, forecasting free cash flows and calculating weighted average cost of capital, resulting in precise enterprise and equity valuations.",
      "Identified a 29-52% stock undervaluation and recommended a $75M stock repurchase program, leveraging data visualization techniques to effectively communicate findings to stakeholders.",
    ],
  },
  {
    period: "Jan 2023 - May 2023",
    title: "New Venture Concept & Business Plan Development",
    course: "New Venture Creation",
    bullets: [
      "Led a four-person team in developing a comprehensive business plan for a probiotic energy drink concept, uncovering a $70 million untapped market opportunity.",
      "Conducted rigorous market analysis using extensive primary and secondary research, devising targeted operational strategies to align with specific customer segments and maximize potential market penetration.",
      "Engineered a sophisticated bottom-up financial model, leveraging advanced forecasting techniques and incorporating iterative feedback to enhance valuation accuracy.",
    ],
  },
  {
    period: "Jan 2023 - Mar 2023",
    title: "Mars-Wrigley Merger Analysis",
    course: "Senior Seminar in Finance",
    bullets: [
      "Created robust risk management frameworks addressing cultural, financial, and regulatory challenges, essential for a seamless merger integration.",
      "Devised a comprehensive valuation model projecting Wrigley's stand-alone valuation range and a synergy-adjusted price up to $105.03 per share.",
      "Analyzed negotiation dynamics, pinpointing a negotiation range with premiums of 22% to 45%, ensuring a fair acquisition price for Wrigley.",
    ],
  },
  {
    period: "Sept 2021 - Dec 2021",
    title: "Buff Fund Venture Capital Pitch & Valuation",
    course: "Entrepreneurial Finance",
    bullets: [
      "Originated a novel blockchain payment platform concept, conducting comprehensive DCF analysis and comparable company benchmarking to derive a $7 million pre-money valuation.",
      "Crafted compelling investor materials, including detailed financial models and pro forma projections, showcasing the startup's growth potential and market opportunity.",
      "Delivered persuasive investor presentations, demonstrating expertise in venture capital assessment, public speaking, and investment memorandum creation.",
    ],
  },
  {
    period: "Sept 2021 - Dec 2021",
    title: "Strategic International Growth Opportunity Assessment for La Perla",
    course: "International Financial Management",
    bullets: [
      "Directed an in-depth financial analysis of global expansion opportunities for the luxury brand La Perla, collaborating with a team to use financial statements, direct interviews, and industry reports.",
      "Maximized risk mitigation in operations by conducting a comprehensive assessment of legal, political, economic, and cultural risks in prospective international markets.",
      "Improved financial valuation precision by performing scenario-based modeling and liquidation analysis, leading to more accurate company valuation forecasts.",
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Hero / Intro */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  About <span className="gradient-text">Andrew</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm Andrew Rodriguez, a visionary finance professional with a passion for entrepreneurship and innovation. Armed with a BSBA in Finance from the University of Colorado Boulder, I'm on a mission to revolutionize how businesses leverage financial insights and cutting-edge tech.
                </p>
                <p className="text-muted-foreground">
                  Whether I'm turning complex data into actionable strategies or implementing AI-driven financial solutions, I'm driven by the potential to create value and impact. If you're looking for someone who can speak the language of finance fluently while thinking outside the spreadsheet, you've come to the right place!
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

        {/* Skills */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader title="Skills & Expertise" subtitle="A comprehensive toolkit spanning finance, technology, and leadership" centered />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg group">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <cat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-4">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader title="Education" centered />

            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-primary font-medium">2023</span>
                    <h3 className="font-display text-xl font-semibold mt-1">Bachelor of Science in Business Administration</h3>
                    <p className="text-muted-foreground font-medium">University of Colorado Boulder</p>
                    <p className="text-sm text-muted-foreground">Leeds School of Business</p>
                    <p className="text-sm text-muted-foreground">Major: Finance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader title="Experience" subtitle="Professional roles and entrepreneurial ventures" centered />

            <div className="max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mt-1">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* School Projects */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader title="School Projects" subtitle="Academic work demonstrating analytical and financial modeling expertise" centered />

            <div className="max-w-3xl mx-auto space-y-6">
              {schoolProjects.map((proj, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="font-display text-lg font-semibold">{proj.title}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{proj.period}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-3">{proj.course}</p>
                  <ul className="space-y-2">
                    {proj.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
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
