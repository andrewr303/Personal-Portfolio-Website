import { useEffect, useMemo, useState } from "react";
import { ExternalLink, GitFork, Github, Loader2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const GITHUB_USERNAME = "andrewr303";

type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  homepage: string | null;
  fork: boolean;
  archived: boolean;
};

type RepoReadme = {
  name: string;
  summary: string;
};

const formatRepoName = (name: string) =>
  name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const decodeBase64 = (content: string) => {
  const normalized = content.replace(/\n/g, "");
  const binary = atob(normalized);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
};

const summarizeReadme = (markdown: string) => {
  const cleaned = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]*\)/g, (match) => match.replace(/\[|\]\([^)]*\)/g, ""))
    .replace(/[#>*_`|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const sentences = cleaned.match(/[^.!?]+[.!?]+/g) ?? [cleaned];
  return sentences.slice(0, 3).join(" ").slice(0, 520).trim();
};

const buildDeepDescription = (repo: GitHubRepo, readme?: RepoReadme) => {
  const purpose = repo.description || readme?.summary || `${formatRepoName(repo.name)} is a public GitHub repository from Andrew Rodriguez.`;
  const topics = repo.topics.length ? ` It is tagged around ${repo.topics.join(", ")}, which signals the main product and technical themes.` : "";
  const stack = repo.language ? ` The primary language is ${repo.language}, giving the project a clear implementation footprint for visitors reviewing Andrew's technical work.` : "";
  const activity = ` The repository was created on ${formatDate(repo.created_at)} and was most recently updated on ${formatDate(repo.updated_at)}, helping visitors understand both project maturity and recent maintenance.`;
  const readmeContext = readme?.summary && readme.summary !== repo.description ? ` README context: ${readme.summary}` : "";

  return `${purpose}${topics}${stack}${activity}${readmeContext}`;
};

export default function GitHubPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [readmes, setReadmes] = useState<Record<string, RepoReadme>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGitHub = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        if (!response.ok) throw new Error("GitHub repositories could not be loaded right now.");
        const repoData = (await response.json()) as GitHubRepo[];
        const publicRepos = repoData.filter((repo) => !repo.fork).sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setRepos(publicRepos);

        const readmeEntries = await Promise.all(
          publicRepos.map(async (repo) => {
            try {
              const readmeResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`);
              if (!readmeResponse.ok) return null;
              const readmeData = await readmeResponse.json();
              const markdown = decodeBase64(readmeData.content || "");
              return [repo.name, { name: readmeData.name, summary: summarizeReadme(markdown) }] as const;
            } catch {
              return null;
            }
          })
        );

        setReadmes(Object.fromEntries(readmeEntries.filter(Boolean) as Array<readonly [string, RepoReadme]>));
      } catch (err) {
        setError(err instanceof Error ? err.message : "GitHub repositories could not be loaded right now.");
      } finally {
        setLoading(false);
      }
    };

    loadGitHub();
  }, []);

  const repoStats = useMemo(
    () => ({
      total: repos.length,
      languages: new Set(repos.map((repo) => repo.language).filter(Boolean)).size,
      stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    }),
    [repos]
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Github className="h-4 w-4" /> GitHub Portfolio
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
                Code Repositories & <span className="gradient-text">Build History</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl animate-slide-up">
                A live view of Andrew's public GitHub repositories, enriched with README context, project metadata, languages, topics, and direct links for deeper review.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 border-b border-border">
          <div className="container mx-auto px-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6"><p className="text-3xl font-bold text-primary">{repoStats.total}</p><p className="text-sm text-muted-foreground">Public source repositories</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><p className="text-3xl font-bold text-primary">{repoStats.languages}</p><p className="text-sm text-muted-foreground">Primary languages represented</p></div>
            <div className="rounded-2xl border border-border bg-card p-6"><p className="text-3xl font-bold text-primary">{repoStats.stars}</p><p className="text-sm text-muted-foreground">Combined GitHub stars</p></div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader title="Repository Explorer" subtitle="Every card is pulled from GitHub and expanded into a portfolio-friendly project narrative." centered />

            {loading && <div className="flex items-center justify-center gap-3 py-20 text-muted-foreground"><Loader2 className="h-5 w-5 animate-spin" /> Loading GitHub repositories...</div>}
            {error && <div className="mx-auto max-w-2xl rounded-2xl border border-destructive/30 bg-destructive/10 p-6 text-center text-destructive">{error}</div>}

            {!loading && !error && (
              <div className="grid gap-6 lg:grid-cols-2">
                {repos.map((repo) => (
                  <article key={repo.id} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-display text-2xl font-semibold group-hover:text-primary transition-colors">{formatRepoName(repo.name)}</h2>
                        <p className="mt-1 text-sm text-muted-foreground">Updated {formatDate(repo.updated_at)}</p>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a href={repo.html_url} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-4 w-4" /> View</a>
                      </Button>
                    </div>

                    <p className="mb-5 leading-relaxed text-muted-foreground">{buildDeepDescription(repo, readmes[repo.name])}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {repo.language && <Badge>{repo.language}</Badge>}
                      {repo.archived && <Badge variant="secondary">Archived</Badge>}
                      {repo.topics.map((topic) => <Badge key={topic} variant="secondary">{topic}</Badge>)}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Star className="h-4 w-4" /> {repo.stargazers_count} stars</span>
                      <span className="inline-flex items-center gap-1"><GitFork className="h-4 w-4" /> {repo.forks_count} forks</span>
                      {repo.homepage && <a className="inline-flex items-center gap-1 text-primary hover:underline" href={repo.homepage} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Live demo</a>}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
