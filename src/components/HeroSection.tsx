import { ArrowDown, Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import headshotImg from "@/assets/andrew-headshot.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Financial Analyst at Farm Insights</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text-red">Andrew</span>
              <br />
              <span className="gradient-text-red glow-text">Rodriguez</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Analytical finance professional with proven expertise in{" "}
              <span className="text-primary">financial modeling</span>,{" "}
              <span className="text-accent">fundraising strategy</span>, and
              AI-powered growth at cutting-edge AgTech startups.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="glow">
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Connect With Me</Link>
              </Button>
            </div>


            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com/in/andrewvrodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:andrew@andrewvrodriguez.com"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/andrewr303"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary rounded-full opacity-20 blur-3xl animate-pulse-glow" />
              <img
                src={headshotImg}
                alt="Andrew Rodriguez"
                className="relative w-80 h-80 object-cover object-top rounded-full border-4 border-primary/30 glow"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about-preview" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
