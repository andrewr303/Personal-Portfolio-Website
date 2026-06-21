import { skillCards } from "@/content/home";
import { InlineIcon, CheckIcon } from "@/lib/icons";

export function Skills() {
  return (
    <section id="skills" style={{ padding: "64px 0 40px" }}>
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(28px,3.6vw,40px)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          color: "var(--t1,#fff)",
        }}
      >
        Skills &amp; Expertise
      </h2>
      <p
        style={{
          margin: "14px 0 32px",
          fontSize: 16.5,
          lineHeight: 1.65,
          color: "var(--t2,#d4d4d8)",
          maxWidth: 640,
        }}
      >
        Four disciplines, one operator. Each is backed by something I actually shipped, not a list of
        buzzwords.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: 18,
        }}
      >
        {skillCards.map((c) => (
          <div
            key={c.title}
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 18,
              padding: 26,
              background: "var(--surface,#0f0f16)",
              border: "1px solid var(--line,rgba(255,255,255,0.08))",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 15 }}>
              <span
                style={{
                  flex: "0 0 auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: c.tintBg,
                  color: c.tint,
                }}
              >
                <InlineIcon inner={c.icon} size={17} />
              </span>
              <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.015em", color: "var(--t1,#fff)" }}>
                {c.title}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.62, color: "var(--t2,#d4d4d8)" }}>{c.body}</p>
            <div
              style={{
                display: "flex",
                gap: 11,
                marginTop: 18,
                paddingTop: 18,
                borderTop: "1px solid var(--line,rgba(255,255,255,0.08))",
              }}
            >
              <span
                style={{
                  flex: "0 0 auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 22,
                  height: 22,
                  borderRadius: 7,
                  background: c.tintBg,
                  color: c.tint,
                  marginTop: 1,
                }}
              >
                <CheckIcon size={14} strokeWidth={2.4} />
              </span>
              <span style={{ fontSize: 14, lineHeight: 1.55, color: "var(--t3,#9f9fa9)" }}>
                <strong style={{ color: "var(--t1,#fff)", fontWeight: 700 }}>Proof.</strong> {c.proof}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
