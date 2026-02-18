import { Link } from "react-router-dom";
import { Linkedin, Mail, Github, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold">
              <span className="gradient-text">Andrew Rodriguez</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Financial Analyst & Startup Strategist specializing in AgTech,
              AI-powered tools, and data-driven growth strategies.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com/in/andrewvrodriguez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:andrew@andrewvrodriguez.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/andrewr303"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/prompts" className="hover:text-primary transition-colors">
                  AI Prompts
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://andrewvrodriguez.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  Website <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/andrewvrodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  LinkedIn <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="tel:7204097992"
                  className="hover:text-primary transition-colors"
                >
                  (720) 409-7992
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Andrew Rodriguez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
