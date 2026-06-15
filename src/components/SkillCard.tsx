import { useState } from "react";
import { ChevronDown, ChevronUp, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CodeBlock from "./CodeBlock";

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  content: string;
  download: string;
  downloadName: string;
}

export default function SkillCard({
  title,
  description,
  icon: Icon,
  tags = [],
  content,
  download,
  downloadName,
}: SkillCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="glass border-border/50 hover:border-primary/30 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
            </div>
          </div>
          <Badge variant="secondary" className="shrink-0">
            Claude Skill
          </Badge>
        </div>

        {/* 2-3 sentence description of what the skill is for */}
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant={expanded ? "secondary" : "outline"}
            size="sm"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Hide skill
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                View skill
              </>
            )}
          </Button>

          <Button asChild variant="default" size="sm" className="glow">
            <a href={download} download={downloadName}>
              <Download className="h-4 w-4 mr-2" />
              Download .skill
            </a>
          </Button>
        </div>

        {expanded && (
          <CodeBlock code={content} language="markdown" title="SKILL.md" />
        )}
      </CardContent>
    </Card>
  );
}
