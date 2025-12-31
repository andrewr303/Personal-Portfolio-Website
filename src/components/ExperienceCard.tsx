import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  link?: string;
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  highlights,
  link,
}: ExperienceCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" />
      
      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="text-primary font-medium">{company}</p>
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {period}
          </span>
        </div>

        <p className="text-muted-foreground mb-4">{description}</p>

        <ul className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {link && (
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
