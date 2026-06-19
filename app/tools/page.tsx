import type { Metadata } from "next";
import { TopNav } from "@/components/chrome/TopNav";
import { SkillsLibrary } from "@/components/tools/SkillsLibrary";
import { tools } from "@/content/tools";
import { InlineIcon, ToolsIcon, ClaudeMark, CheckIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Tools & Systems",
  description:
    "Custom-built tools and Claude skills that create enterprise-level capability without enterprise-level cost.",
};

export default function ToolsPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      <TopNav active="tools" />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1120,
          margin: "0 auto",
          padding: "128px 26px calc(120px + env(safe-area-inset-bottom))",
        }}
      >
        <header style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#5b8def",
              marginBottom: 14,
            }}
          >
            <ToolsIcon size={14} />
            Build System
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px,6vw,64px)",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--t1,#fff)",
            }}
          >
            Tools &amp; Systems
          </h1>
          <p style={{ margin: "18px 0 0", fontSize: 17, lineHeight: 1.65, color: "var(--t2,#d4d4d8)", maxWidth: 620 }}>
            Custom-built tools and Claude skills that create enterprise-level capability without
            enterprise-level cost.
          </p>
        </header>

        <section style={{ padding: "4px 0 8px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: 16 }}>
            {tools.map((t) => (
              <div
                key={t.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 16,
                  padding: 22,
                  background: "var(--surface,#0f0f16)",
                  border: "1px solid var(--line,rgba(255,255,255,0.08))",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span
                    style={{
                      flex: "0 0 auto",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      background: t.tintBg,
                      color: t.tint,
                    }}
                  >
                    <InlineIcon inner={t.icon} size={20} />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--t1,#fff)", letterSpacing: "-0.01em" }}>
                      {t.title}
                    </div>
                    <div style={{ fontSize: 12.5, fontWeight: 600, color: t.tint, marginTop: 2 }}>{t.subtitle}</div>
                  </div>
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--t2,#d4d4d8)", marginTop: 13, flex: 1 }}>
                  {t.desc}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 15,
                    paddingTop: 14,
                    borderTop: "1px solid var(--line,rgba(255,255,255,0.07))",
                  }}
                >
                  <span style={{ display: "inline-flex", color: "#10de7f" }}>
                    <CheckIcon size={15} />
                  </span>
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--t2,#d4d4d8)" }}>{t.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "56px 0 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: 13,
                background: "#1a1208",
                border: "1px solid rgba(217,119,87,0.3)",
                boxShadow: "0 0 24px rgba(217,119,87,0.18)",
              }}
            >
              <ClaudeMark size={26} />
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(28px,3.6vw,40px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "var(--t1,#fff)",
              }}
            >
              Claude Skills
            </h2>
          </div>
          <p style={{ margin: "0 0 30px", fontSize: 16.5, lineHeight: 1.65, color: "var(--t2,#d4d4d8)", maxWidth: 680 }}>
            A library of production Claude skills I engineered, spanning fundraising, finance, growth,
            engineering, and career workflows. Each is a self-contained system prompt. Read the full
            text inline, or download the{" "}
            <strong style={{ color: "var(--t1,#fff)", fontWeight: 600 }}>.skill</strong> to drop straight
            into Claude.
          </p>
          <SkillsLibrary />
        </section>
      </main>
    </div>
  );
}
