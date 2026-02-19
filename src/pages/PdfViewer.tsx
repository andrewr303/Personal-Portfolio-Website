import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PdfViewer() {
  const [searchParams] = useSearchParams();
  const file = searchParams.get("file") || "";
  const title = searchParams.get("title") || "Document";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
          </Button>
          <span className="font-display font-semibold text-sm truncate max-w-md">
            {title}
          </span>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={file} download>
            <Download className="h-4 w-4 mr-1" />
            Download
          </a>
        </Button>
      </div>

      {/* PDF embed */}
      <div className="flex-1">
        <object
          data={file}
          type="application/pdf"
          className="w-full h-full min-h-[calc(100vh-57px)]"
          title={title}
        >
          <div className="flex flex-col items-center justify-center h-full min-h-[calc(100vh-57px)] gap-4">
            <p className="text-muted-foreground text-center max-w-md">
              Your browser is unable to display this PDF inline. Click below to download or open it directly.
            </p>
            <Button asChild>
              <a href={file} target="_blank" rel="noopener noreferrer">
                Open PDF
              </a>
            </Button>
          </div>
        </object>
      </div>
    </div>
  );
}
