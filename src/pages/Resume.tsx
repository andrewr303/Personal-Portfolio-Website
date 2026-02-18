import { Building2, TrendingUp, Users, Database, Megaphone, Award, GraduationCap, BookOpen, Trophy, Calendar, Briefcase, Code, BarChart3, Shield, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

// Education Components
interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
  highlights?: string[];
}

function TimelineItem({ year, title, institution, description, icon, highlights }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors">
        {icon}
      </div>
      <div className="ml-6">
        <span className="text-sm text-primary font-medium">{year}</span>
        <h3 className="font-display text-xl font-bold mt-1">{title}</h3>
        <p className="text-muted-foreground">{institution}</p>
        <p className="mt-2 text-foreground/80">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="mt-3 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

function CertificationCard({ title, issuer, year, description }: CertificationCardProps) {
  return (
    <div className="glass rounded-xl p-6 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-lg bg-primary/20">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
        <span className="text-sm text-muted-foreground">{year}</span>
      </div>
      <h3 className="font-display font-semibold mt-4">{title}</h3>
      <p className="text-sm text-muted-foreground">{issuer}</p>
      {description && (
        <p className="text-sm text-foreground/70 mt-2">{description}</p>
      )}
    </div>
  );
}

// Skills data
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

// Experience data
const farmInsightsDetails = [
  {
    icon: TrendingUp,
    title: "Strategic Growth & Fundraising",
    items: [
      "Architected $1M Pre-Seed Fundraising Strategy with custom investor database replicating enterprise platform capabilities at zero cost",
      "Led AgLaunch365 accelerator application, securing top-20 finalist position from hundreds of global applicants",
      "Traveled to Memphis, TN for finals, actively participating in event programming and preparing CEO for pitch presentation",
      "Produced monthly investor updates highlighting product milestones, partnerships, and competitive positioning",
      "Created 15-slide investor pitch deck with continuous improvement process and documented enhancements",
    ],
  },
  {
    icon: Database,
    title: "Financial Modeling",
    items: [
      "Developed comprehensive 5-year pro forma model: P&L, Balance Sheet, Cash Flow, Statement of Retained Earnings",
      "Modeled 18-month runway on $1M pre-seed with NOL carryforward tax optimization ($6.4M)",
      "Projected path to profitability by Year 5: 7% net margin, $8.7M net income",
      "Designed 60-month revenue model tracking customer acquisition, churn (0.9% Chat, 0.7% Pro), and tier conversions",
      "Engineered detailed API cost model across six providers with tiered pricing and optimization strategies",
    ],
  },
  {
    icon: Users,
    title: "Market Intelligence & GTM",
    items: [
      "Built proprietary market intelligence engine covering 450+ U.S. farming counties",
      "Developed custom 'Opportunity Score' algorithm identifying top-10 entry markets",
      "Created cold-outreach pipeline of 2,400+ qualified farm prospects",
      "Developed customer segmentation strategy to refine Ideal Customer Profile (ICP)",
    ],
  },
  {
    icon: Megaphone,
    title: "AI-Powered Marketing",
    items: [
      "Established end-to-end social media operations across LinkedIn, Facebook, and TikTok",
      "Designed AI-assisted content generation workflow for high-volume, platform-specific content",
      "Aligned content with PhD-validated brand voice for increased engagement with minimal manual effort",
    ],
  },
];

const otherRoles = [
  {
    title: "Founder",
    company: "Dirty Politix LLC",
    period: "June 2023 - May 2025",
    location: "Denver, CO",
    description: "Launched a digital political news platform and managed all operational facets from concept to 120,000+ monthly visitors.",
    highlights: [
      "Scaled audience from 30,000 to 120,000+ monthly visitors in 4 months",
      "Orchestrated targeted ad campaigns generating 16,000+ interactions and 4,000+ comments",
      "Leveraged AI to optimize social media posts, resulting in 35% boost in website traffic",
    ],
  },
  {
    title: "Volunteer Tax Preparer",
    company: "Tax Help Colorado",
    period: "October 2013 - May 2014",
    description: "Provided financial advisory services to low-income families, maximizing refunds while ensuring compliance.",
    highlights: [
      "Optimized tax strategies to maximize refunds by an average of 45%",
      "Maintained 100% regulatory compliance across all returns",
      "Received gubernatorial recognition from Governor John Hickenlooper",
    ],
  },
  {
    title: "Co-Founder",
    company: "BloodySox",
    period: "April 2011 - June 2014",
    location: "Louisville, CO",
    description: "Founded athletic apparel company as a high school sophomore, gaining early entrepreneurial experience.",
    highlights: [
      "Developed product line and brand strategy from scratch",
      "Managed operations, marketing, and customer relations",
      "Gained foundational business skills at early age",
    ],
  },
];

const education = [
  {
    year: "2022 - 2024",
    title: "Bachelor of Science in Business Administration",
    institution: "University of Colorado Boulder - Leeds School of Business",
    description: "Concentration in Finance with focus on financial modeling, investment analysis, and entrepreneurial finance.",
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
    highlights: [
      "Finance concentration with emphasis on startup valuation",
      "Developed comprehensive business plans and financial models",
      "Completed coursework in corporate finance, investments, and accounting",
    ],
  },
  {
    year: "2018 - 2022",
    title: "High School Diploma",
    institution: "Monarch High School",
    description: "Business-focused curriculum with emphasis on entrepreneurship and financial literacy.",
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
    highlights: [
      "Business concentration coursework",
      "DECA and FBLA State Finalist",
      "National recognition in business examinations",
    ],
  },
];

const certifications = [
  {
    title: "Tax Preparation Certification",
    issuer: "Tax Help Colorado / VITA",
    year: "2014",
    description: "IRS-certified volunteer tax preparer specializing in low-income tax assistance.",
  },
  {
    title: "Successful Networking",
    issuer: "LinkedIn Learning",
    year: "2023",
    description: "Professional networking strategies for career advancement and business development.",
  },
  {
    title: "Financial Modeling Fundamentals",
    issuer: "Leeds School of Business",
    year: "2024",
    description: "Advanced Excel-based financial modeling for valuations and projections.",
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

export default function Resume() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Farm Insights - Featured Role */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
              <div>
                <Badge className="mb-4">Current Role</Badge>
                <h2 className="font-display text-3xl font-bold">Financial Analyst</h2>
                <p className="text-xl text-primary font-medium">Farm Insights</p>
                <p className="text-muted-foreground">June 2025 - Present</p>
              </div>
              <div className="p-6 rounded-2xl glass">
                <p className="text-sm text-muted-foreground mb-2">AI-Powered AgTech Startup</p>
                <p className="text-muted-foreground">
                  Revolutionizing agriculture through real-time plant and soil health insights for farmers worldwide.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {farmInsightsDetails.map((section, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Roles */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader title="Previous Experience" subtitle="A foundation of entrepreneurship, service, and early business ventures" />

            <div className="space-y-8">
              {otherRoles.map((role, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{role.title}</h3>
                      <p className="text-primary font-medium">{role.company}</p>
                      {role.location && <p className="text-sm text-muted-foreground">{role.location}</p>}
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{role.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{role.description}</p>
                  <ul className="space-y-2">
                    {role.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader title="Education" subtitle="Academic foundation in finance and business" />

            <div className="max-w-3xl mx-auto mt-12">
              {education.map((edu, index) => (
                <TimelineItem key={index} {...edu} />
              ))}
            </div>
          </div>
        </section>

        {/* School Projects */}
        <section className="py-24">
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

        {/* Skills */}
        <section className="py-24 bg-secondary/30">
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

        {/* Certifications */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader title="Recognition & Awards" centered />

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">AgLaunch365 Finalist</h3>
                <p className="text-sm text-muted-foreground">Top 20 from hundreds of global applicants</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Gubernatorial Recognition</h3>
                <p className="text-sm text-muted-foreground">Colorado Governor John Hickenlooper</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border text-center">
                <Award className="h-8 w-8 text-chart-4 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">DECA/FBLA State Finalist</h3>
                <p className="text-sm text-muted-foreground">Marketing and Business competitions</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
