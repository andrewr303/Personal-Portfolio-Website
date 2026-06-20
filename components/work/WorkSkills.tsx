import { skillGroups } from "@/content/work";
import { InlineIcon } from "@/lib/icons";

/** Skills & Expertise — categorized skill pills, shown after Involvement. */
export function WorkSkills() {
  return (
    <section id="skills" style={{ padding: "48px 0 0" }}>
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
          margin: "14px 0 0",
          fontSize: 16.5,
          lineHeight: 1.65,
          color: "var(--t2,#d4d4d8)",
          maxWidth: 640,
        }}
      >
        A rare full-stack toolkit spanning strategic finance, AI engineering, software development,
        and founder-level leadership.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 32 }}>
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span
                style={{
                  flex: "0 0 auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: group.tintBg,
                  color: group.tint,
                }}
              >
                <InlineIcon
                  inner={group.icon}
                  variant={group.iconVariant ?? "stroke"}
                  viewBox={group.iconViewBox}
                  size={16}
                />
              </span>
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--t3,#9f9fa9)",
                }}
              >
                {group.label}
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "10px 15px",
                    borderRadius: 12,
                    fontSize: 14.5,
                    fontWeight: 600,
                    color: "var(--t1,#fff)",
                    background: "var(--surface,#0f0f16)",
                    border: "1px solid var(--line,rgba(255,255,255,0.08))",
                  }}
                >
                  <span style={{ flex: "0 0 auto", display: "inline-flex", color: group.tint }}>
                    <InlineIcon inner={skill.icon} size={16} />
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
