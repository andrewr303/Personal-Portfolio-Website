import { useState } from "react";
import { Sparkles, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import PromptCard from "@/components/PromptCard";
import { Button } from "@/components/ui/button";
import { categories, prompts } from "@/data/prompts";

export default function Prompts() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPrompts =
    activeCategory === "all"
      ? prompts
      : prompts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-6 animate-slide-up">
              <div className="p-3 rounded-xl bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                AI Prompts & <span className="gradient-text-red">Code</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl animate-slide-up">
              Welcome to my AI prompt laboratory. A curated collection of prompts
              I've crafted through tireless experimentation and fine-tuning — each one
              a powerful tool for extracting peak performance from language models.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="shrink-0"
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Prompts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Prompt Library"
              subtitle={`${filteredPrompts.length} prompts available`}
            />

            <div className="grid gap-8 mt-12">
              {filteredPrompts.map((prompt, index) => (
                <div
                  key={prompt.title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PromptCard
                    title={prompt.title}
                    description={prompt.description}
                    prompt={prompt.prompt}
                    category={prompt.category}
                    tags={prompt.tags}
                    output={prompt.output}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Want Custom Prompts?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I create custom AI workflows and prompts for finance teams and startups.
              Let's discuss how AI can streamline your operations.
            </p>
            <Button asChild size="lg" className="glow">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
