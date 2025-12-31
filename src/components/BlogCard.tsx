import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  slug,
}: BlogCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "finance":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "ai":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "startups":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "career":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline" className={getCategoryColor(category)}>
            {category}
          </Badge>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>

        <button className="inline-flex items-center gap-2 text-primary font-medium group/btn">
          Read Article
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </CardContent>
    </Card>
  );
}
