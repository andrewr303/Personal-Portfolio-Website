import type { Metadata } from "next";
import { TopNav } from "@/components/chrome/TopNav";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Shipped AI products, founder tools, and finance models — from public GitHub repos to investor-grade analysis.",
};

export default function ProjectsPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      <TopNav active="projects" />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1120,
          margin: "0 auto",
          padding: "128px 26px 120px",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: 8 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: 999,
              background: "var(--surface,#0f0f16)",
              border: "1px solid var(--line-2,rgba(255,255,255,0.14))",
              fontSize: 13,
              fontWeight: 700,
              color: "var(--t1,#fff)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
            }}
          >
            My Projects
          </div>
          <h1
            style={{
              margin: "18px 0 0",
              fontSize: "clamp(34px,5vw,56px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--t1,#fff)",
              lineHeight: 1.02,
            }}
          >
            Check out my latest work
          </h1>
          <p
            style={{
              margin: "16px auto 0",
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--t2,#d4d4d8)",
              maxWidth: 580,
            }}
          >
            Shipped AI products, founder tools, and finance models. From public GitHub repos to
            investor-grade analysis.
          </p>
        </header>

        <ProjectsGrid />
      </main>
    </div>
  );
}
