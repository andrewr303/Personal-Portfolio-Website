import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, GraduationCap, Lightbulb, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import StatsCard from "@/components/StatsCard";
import SkillBadge from "@/components/SkillBadge";

const skills = {
  finance: [
    "Financial Statement Analysis",
    "DCF Valuation",
    "Revenue Modeling",
    "VC Fundraising",
    "Pitch Deck Development",
    "Due Diligence",
  ],
  tech: [
    "Excel & VBA",
    "AI Automation",
    "Prompt Engineering",
    "Notion",
    "Bloomberg Terminal",
    "Data Analysis",
  ],
  leadership: [
    "Strategic Planning",
    "Investor Relations",
    "Project Management",
    "Cross-functional Leadership",
  ],
};

export default function Index() {
  return (
    <div className="min-h-screen dark">
      <Navbar />
      
      <main>
        <HeroSection />

        {/* Farm Insights Section */}
        <section id="farm-insights" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <SectionHeader
                  title="Building the Future of Agriculture at Farm Insights"
                  subtitle="Applying my entrepreneurial finance education from CU Boulder's Leeds School of Business to help revolutionize how farmers make decisions."
                />
                <p className="text-muted-foreground mb-4">
                  As Financial Analyst at Farm Insights, I'm at the forefront of an AI-powered AgTech 
                  startup transforming agricultural decision-making. From architecting fundraising 
                  strategies to building market intelligence systems, I help drive the strategic 
                  and financial foundation that enables our technology to reach farmers nationwide.
                </p>
                <p className="text-muted-foreground mb-6">
                  My work spans financial modeling, investor relations, go-to-market strategy, 
                  and building AI-powered content systems—all aimed at helping Farm Insights 
                  deliver actionable intelligence to the agricultural community.
                </p>
                <Button asChild>
                  <Link to="/about">
                    Learn More About My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-display text-lg font-semibold mb-4 text-primary">Strategic Growth & Fundraising</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      Designed comprehensive investor outreach campaign targeting AgTech and AI-focused VCs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      Secured Top 20 finalist position at AgLaunch365 accelerator from hundreds of global applicants
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      Created investor pitch deck with continuous improvement process and documented enhancements
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-display text-lg font-semibold mb-4 text-accent">Market Intelligence & Operations</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      Built proprietary market intelligence engine covering 450+ U.S. farming counties
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      Developed custom "Opportunity Score" algorithm to identify optimal market entry points
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      Established AI-assisted content workflow aligned with brand voice guidelines
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Skills & Expertise"
              subtitle="A versatile toolkit spanning financial analysis, technical implementation, and strategic leadership."
              centered
            />

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Financial Analysis</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.finance.map((skill) => (
                    <SkillBadge key={skill} name={skill} category="finance" />
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tech.map((skill) => (
                    <SkillBadge key={skill} name={skill} category="tech" />
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-chart-4/10">
                    <Lightbulb className="h-6 w-6 text-chart-4" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">Leadership</h3>
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
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Professional Experience"
              subtitle="Building impact at the intersection of finance, technology, and entrepreneurship."
              centered
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ExperienceCard
                title="Financial Analyst"
                company="Farm Insights"
                period="June 2025 - Present"
                description="Leading financial strategy and fundraising efforts at an AI-powered AgTech startup revolutionizing agriculture."
                highlights={[
                  "Architected $1M pre-seed fundraising strategy",
                  "Built 5-year pro forma financial model",
                  "Developed market intelligence database covering 450+ U.S. counties",
                ]}
                link="/experience"
              />
              <ExperienceCard
                title="Founder"
                company="Dirty Politix LLC"
                period="June 2023 - May 2025"
                description="Built and scaled a digital political news platform from concept to 120,000+ monthly visitors."
                highlights={[
                  "Scaled audience 4x through digital growth strategies",
                  "Leveraged AI for content optimization",
                  "Managed all operational facets end-to-end",
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
                  <div className="p-6 rounded-2xl bg-card border border-border">
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
                          Leeds School of Business • Finance • May 2023
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-card border border-border">
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

              <div className="p-8 rounded-2xl glass glow">
                <blockquote className="text-xl font-display italic mb-4">
                  "Committed to delivering measurable impact and supporting strategic 
                  growth in fast-paced, innovative organizations."
                </blockquote>
                <p className="text-muted-foreground">— Professional Philosophy</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking for a strategic financial partner, need help 
              with fundraising, or want to discuss AI-powered growth strategies, 
              I'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="glow">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
