import type { Metadata } from "next";
import { TopNav } from "@/components/chrome/TopNav";
import { WorkExperience } from "@/components/work/WorkExperience";
import { education, involvement, type EducationEntry, type InvolvementEntry } from "@/content/work";
import { WorkIcon } from "@/lib/icons";
import { WorkSkills } from "@/components/work/WorkSkills";

export const metadata: Metadata = {
  title: "Work & Education",
  description:
    "Finance roles, a founder exit, and the build of HypeStake — Andrew Rodriguez's work experience and education.",
};

function Roster({ entries }: { entries: (EducationEntry | InvolvementEntry)[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {entries.map((e) => {
        const title = "school" in e ? e.school : e.org;
        return (
          <div
            key={title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
              padding: "16px 0",
              borderBottom: "1px solid var(--line,rgba(255,255,255,0.07))",
            }}
          >
            <span
              style={{
                flex: "0 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 999,
                background: e.bg,
                border: "1px solid var(--line-2,rgba(255,255,255,0.12))",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={e.logo}
                alt=""
                aria-hidden
                style={{ width: "100%", height: "100%", objectFit: "contain", padding: e.logoPad ?? 0, display: "block" }}
              />
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: "block", fontSize: 17, fontWeight: 700, color: "var(--t1,#fff)", letterSpacing: "-0.01em" }}>
                {title}
              </span>
              <span style={{ display: "block", fontSize: 14.5, color: "var(--t2,#d4d4d8)", marginTop: 3 }}>
                {e.detail}
              </span>
            </span>
            <span style={{ flex: "0 0 auto", fontSize: 12.5, color: "var(--t4,#71717b)", fontFamily: "var(--font-mono)" }}>
              {e.date}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function WorkPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      <TopNav active="work" />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1000,
          margin: "0 auto",
          padding: "128px 26px calc(120px + env(safe-area-inset-bottom))",
        }}
      >
        <header style={{ marginBottom: 36 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6f9be8",
              marginBottom: 14,
            }}
          >
            <WorkIcon size={14} />
            Experience
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
            Work &amp; Education
          </h1>
          <p style={{ margin: "18px 0 0", fontSize: 17, lineHeight: 1.65, color: "var(--t2,#d4d4d8)", maxWidth: 600 }}>
            Finance roles, a founder exit, and the build of HypeStake. Click any role to expand the
            detail.
          </p>
        </header>

        <WorkExperience />

        <section style={{ padding: "40px 0 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: 40 }}>
            <div>
              <h2
                style={{
                  margin: "0 0 16px",
                  fontSize: "clamp(24px,3vw,30px)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "var(--t1,#fff)",
                }}
              >
                Education
              </h2>
              <Roster entries={education} />
            </div>
            <div>
              <h2
                style={{
                  margin: "0 0 16px",
                  fontSize: "clamp(24px,3vw,30px)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  color: "var(--t1,#fff)",
                }}
              >
                Involvement
              </h2>
              <Roster entries={involvement} />
            </div>
          </div>
        </section>

        <WorkSkills />
      </main>
    </div>
  );
}
