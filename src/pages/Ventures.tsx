import { ExternalLink, Rocket, TrendingUp, Shield, BarChart3, Vote, Bot, Megaphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ventures = [
  {
    name: "HypeStake",
    tagline: "Creator Equity for the $250B Creator Economy",
    url: "https://hypestake.ai",
    description:
      "The creator economy has exploded to $250 billion, yet 95% of creator compensation remains transactional cash—leaving creators without upside when the brands they champion succeed. HypeStake is solving this fundamental misalignment by creating a new financial instrument: Creator Equity (CE).",
    details:
      "We're building the AI-powered SaaS platform that enables creators to earn real ownership stakes in the brands they promote. Our proprietary technology replaces what investment bankers charge $50K for with intelligent automation.",
    features: [
      {
        icon: Rocket,
        title: "Dynamic Deal Architect",
        description:
          "Patent-pending Creator Genome algorithm calculates risk-adjusted equity offers in real-time, factoring in startup stage, audience LTV, engagement quality, and cultural relevance.",
      },
      {
        icon: Shield,
        title: "Smart Vesting Protocol",
        description:
          "Ties equity to performance—creators vest through deliverables, KPIs, and measurable outcomes while brands get clawback protection and aligned incentives.",
      },
      {
        icon: BarChart3,
        title: "Shadow Cap Table",
        description:
          "Robinhood-style portfolio view of equity holdings, liquidity timelines, and sector diversification for creators.",
      },
    ],
    tags: ["AI/ML", "FinTech", "Creator Economy", "SaaS"],
    embed: true,
  },
  {
    name: "ElectionAI",
    tagline: "Changing How Elections Are Won with AI",
    url: "https://electionai.io",
    description:
      "ElectionAI is revolutionizing the political landscape by harnessing the power of artificial intelligence to transform how campaigns are run. From voter outreach to data-driven strategy, we're building the tools that give campaigns an unprecedented edge.",
    details:
      "By integrating AI across every facet of campaign operations, ElectionAI empowers political teams to make smarter decisions, reach the right voters, and maximize impact—all at a fraction of the traditional cost.",
    features: [
      {
        icon: Bot,
        title: "AI-Powered Campaign Strategy",
        description:
          "Leverage machine learning to analyze voter sentiment, predict turnout, and optimize messaging across demographics.",
      },
      {
        icon: Megaphone,
        title: "Smart Voter Outreach",
        description:
          "Automated, personalized voter engagement at scale—reaching the right people with the right message at the right time.",
      },
      {
        icon: Vote,
        title: "Data-Driven Insights",
        description:
          "Real-time analytics dashboards that turn complex election data into actionable campaign intelligence.",
      },
    ],
    tags: ["AI/ML", "Political Tech", "Data Analytics", "SaaS"],
    embed: true,
  },
];

export default function Ventures() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              My <span className="gradient-text">Ventures</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl animate-slide-up">
              Building products at the intersection of finance, AI, and
              technology. These are the companies and platforms I'm creating to
              solve real problems.
            </p>
          </div>
        </section>

        {/* Ventures */}
        {ventures.map((venture) => (
          <section key={venture.name} className="py-24">
            <div className="container mx-auto px-4">
              {/* Venture header */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-display text-3xl md:text-4xl font-bold">
                        {venture.name}
                      </h2>
                      <Badge className="text-xs">Live</Badge>
                    </div>
                    <p className="text-lg text-primary font-medium">
                      {venture.tagline}
                    </p>
                  </div>
                  <Button asChild>
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground mb-4">
                  {venture.description}
                </p>
                <p className="text-muted-foreground">{venture.details}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {venture.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {venture.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <feat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Embedded site */}
              {venture.embed && (
                <div className="max-w-5xl mx-auto">
                  <div className="rounded-2xl border border-border overflow-hidden shadow-lg bg-card">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-destructive/60" />
                        <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                        <div className="w-3 h-3 rounded-full bg-chart-3/60" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground font-mono text-center">
                          {venture.url}
                        </div>
                      </div>
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <iframe
                      src={venture.url}
                      title={venture.name}
                      className="w-full h-[600px]"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

      </main>

      <Footer />
    </div>
  );
}
