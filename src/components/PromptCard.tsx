import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CodeBlock from "./CodeBlock";

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
  category: string;
  tags?: string[];
  output?: string;
}

export default function PromptCard({
  title,
  description,
  prompt,
  category,
  tags = [],
  output,
}: PromptCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="glass border-border/50 hover:border-primary/30 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {category}
          </Badge>
        </div>
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
        <CodeBlock code={prompt} language="prompt" title="Prompt" />
        
        {output && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Hide example output
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show example output
                </>
              )}
            </button>
            {expanded && (
              <CodeBlock code={output} language="output" title="Example Output" />
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
