import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = "text", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-border bg-secondary/50">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-secondary border-b border-border">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase">{language}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-8 w-8 p-0"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      )}
      {!title && (
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 w-8 p-0"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-foreground font-mono whitespace-pre-wrap">{code}</code>
      </pre>
    </div>
  );
}
