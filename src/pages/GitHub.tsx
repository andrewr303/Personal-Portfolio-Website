import { useEffect, useMemo, useState } from "react";
import {
  Archive,
  Calendar,
  Code2,
  ExternalLink,
  Filter,
  GitFork,
  Github,
  Layers,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { githubRepoContent, repoCategories, type GitHubRepoContent } from "@/data/githubRepos";

type GitHubApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  archived: boolean;
};

type HydratedRepo = GitHubRepoContent & {
  api?: GitHubApiRepo;
};

const formatUpdated = (value?: string) => {
  if (!value) return "Updated recently";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
};

export default function GitHub() {
  const [apiRepos, setApiRepos] = useState<GitHubApiRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof repoCategories)[number]>("All");

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      try {
        const response = await fetch("https://api.github.com/users/andrewr303/repos?per_page=100&sort=updated");
        if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
        const data = (await response.json()) as GitHubApiRepo[];
        if (!cancelled) setApiRepos(data);
      } catch (error) {
        console.warn("Falling back to static GitHub portfolio data", error);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  const repos = useMemo<HydratedRepo[]>(() => {
    return githubRepoContent
      .map((repo) => ({
        ...repo,
        api: apiRepos.find((apiRepo) => apiRepo.name === repo.name),
      }))
      .sort((a, b) => a.priority - b.priority);
  }, [apiRepos]);

  const filteredRepos = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return repos.filter((repo) => {
      const matchesCategory = activeCategory === "All" || repo.category === activeCategory;
      const searchableText = [
        repo.name,
        repo.displayName,
        repo.oneLiner,
        repo.deepDescription,
        repo.category,
        repo.stack.join(" "),
        repo.features.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedSearch || searchableText.includes(normalizedSearch));
    });
  }, [activeCategory, repos, search]);

  const totalStars = apiRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = apiRepos.reduce((sum, repo) => sum + repo.forks_count, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 mb-12">
          <div className="relative overflow-hidden rounded-3xl border bg-card p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative max-w-4xl">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="gap-2">
                  <Github className="h-3.5 w-3.5" />
                  github.com/andrewr303
                </Badge>
                <Badge variant="outline" className="gap-2">
                  <Archive className="h-3.5 w-3.5" />
                  {githubRepoContent.length} public portfolio repos
                </Badge>
                {isLoading ? null : (
                  <Badge variant="outline" className="gap-2">
                    <Star className="h-3.5 w-3.5" />
                    {totalStars} stars · {totalForks} forks
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
                Public GitHub work
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                A deeper look at the products, AI systems, finance tools, and agent workflows I have built publicly.
                These repos show the operating pattern behind my work: find a narrow workflow, design the system,
                wire the product, and turn AI from a chat box into usable software.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a href="https://github.com/andrewr303" target="_blank" rel="noreferrer">
                    View GitHub Profile
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/projects">View Project Work</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-10">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">{githubRepoContent.length}</div>
                <p className="text-sm text-muted-foreground">Public repos mapped</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">5</div>
                <p className="text-sm text-muted-foreground">AI/product systems</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">4</div>
                <p className="text-sm text-muted-foreground">Finance/founder tools</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold">1</div>
                <p className="text-sm text-muted-foreground">Agent operating standard</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <SectionHeader
                title="Repository library"
                subtitle="Every public repo, enriched with product context, architecture notes, stack details, and the portfolio story behind it."
              />
            </div>

            <div className="flex w-full flex-col gap-3 lg:w-auto lg:min-w-[420px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search repos, stack, features..."
                  className="h-11 w-full rounded-md border bg-background pl-10 pr-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {repoCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="shrink-0 gap-2"
                onClick={() => setActiveCategory(category)}
              >
                <Filter className="h-3.5 w-3.5" />
                {category}
              </Button>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid gap-6">
            {filteredRepos.map((repo) => (
              <Card key={repo.name} className="overflow-hidden">
                <CardHeader className="border-b bg-muted/30">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <Badge>{repo.category}</Badge>
                        <Badge variant="outline">{repo.status}</Badge>
                        {repo.api?.language ? <Badge variant="secondary">{repo.api.language}</Badge> : null}
                        {repo.api?.archived ? <Badge variant="destructive">Archived</Badge> : null}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{repo.displayName}</h2>
                      <p className="mt-2 text-sm text-muted-foreground">{repo.name}</p>
                      <p className="mt-4 max-w-3xl text-base text-muted-foreground leading-relaxed">
                        {repo.oneLiner}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <Button asChild>
                        <a href={repo.repoUrl} target="_blank" rel="noreferrer">
                          Repository
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      {repo.liveUrl ? (
                        <Button variant="outline" asChild>
                          <a href={repo.liveUrl} target="_blank" rel="noreferrer">
                            Live App
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {formatUpdated(repo.api?.updated_at)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="h-4 w-4" />
                      {repo.api?.stargazers_count ?? 0} stars
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GitFork className="h-4 w-4" />
                      {repo.api?.forks_count ?? 0} forks
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
                          <Sparkles className="h-5 w-5 text-primary" />
                          Product summary
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{repo.deepDescription}</p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border p-4">
                          <h4 className="mb-2 font-semibold">Problem</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{repo.problem}</p>
                        </div>
                        <div className="rounded-xl border p-4">
                          <h4 className="mb-2 font-semibold">Product</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{repo.product}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                          <Layers className="h-5 w-5 text-primary" />
                          Key features
                        </h3>
                        <div className="grid gap-2 md:grid-cols-2">
                          {repo.features.map((feature) => (
                            <div key={feature} className="rounded-lg bg-muted/40 px-3 py-2 text-sm">
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <aside className="space-y-6">
                      <div>
                        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                          <Code2 className="h-5 w-5 text-primary" />
                          Architecture
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {repo.architecture.map((item) => (
                            <li key={item} className="rounded-lg border px-3 py-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-3 text-lg font-semibold">Stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {repo.stack.map((item) => (
                            <Badge key={item} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl border bg-primary/5 p-4">
                        <h3 className="mb-2 text-lg font-semibold">Why it matters</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{repo.portfolioAngle}</p>
                      </div>
                    </aside>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
