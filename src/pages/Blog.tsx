import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Finance", "AI", "Startups", "Career"];

const articles = [
  {
    title: "The Future of AI in Financial Services: What Leaders Need to Know",
    excerpt:
      "Artificial intelligence is reshaping how financial institutions operate, from risk assessment to customer service. Here's what executives should be preparing for in the next 5 years.",
    category: "AI",
    date: "Dec 28, 2024",
    readTime: "8 min read",
    slug: "future-of-ai-financial-services",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Building a Startup in 2024: Lessons from the Trenches",
    excerpt:
      "After helping launch multiple startups, I've learned what separates successful ventures from those that struggle. These are the key principles every founder should embrace.",
    category: "Startups",
    date: "Dec 20, 2024",
    readTime: "12 min read",
    slug: "building-startup-2024",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Prompt Engineering: The Skill That Will Define the Next Decade",
    excerpt:
      "As AI becomes ubiquitous, the ability to effectively communicate with these systems becomes invaluable. Here's how to master the art of prompt engineering.",
    category: "AI",
    date: "Dec 15, 2024",
    readTime: "6 min read",
    slug: "prompt-engineering-skill",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "From Analyst to Executive: Navigating Your Finance Career",
    excerpt:
      "The path from entry-level analyst to C-suite isn't linear. Drawing from my experience, here are strategic moves that can accelerate your career in finance.",
    category: "Career",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    slug: "analyst-to-executive",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Why Every CFO Should Understand Machine Learning",
    excerpt:
      "Machine learning isn't just for data scientists. CFOs who understand these tools are better positioned to lead their organizations through digital transformation.",
    category: "Finance",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    slug: "cfo-machine-learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "The VC Landscape in 2025: Trends and Predictions",
    excerpt:
      "Venture capital is evolving rapidly. From AI-first investing to climate tech, here are the trends shaping where smart money is flowing.",
    category: "Startups",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    slug: "vc-landscape-2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) =>
            article.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Blog & Insights"
            subtitle="Thoughts on finance, AI, startups, and navigating modern careers"
            centered
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          {activeCategory === "All" && articles.length > 0 && (
            <div className="mb-12">
              <div className="relative group overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={articles[0].image}
                      alt={articles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-primary text-sm font-medium mb-2">
                      Featured Article
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {articles[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {articles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{articles[0].date}</span>
                      <span>•</span>
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Article Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All"
              ? filteredArticles.slice(1)
              : filteredArticles
            ).map((article, index) => (
              <BlogCard key={index} {...article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
