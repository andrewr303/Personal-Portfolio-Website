import { ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label={`View ${title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
