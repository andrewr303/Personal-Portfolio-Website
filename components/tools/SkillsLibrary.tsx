"use client";

import { useState } from "react";
import styles from "./SkillsLibrary.module.css";
import { skills } from "@/content/tools";
import { ClaudeMark, EyeIcon, DownloadIcon } from "@/lib/icons";

const fmtBytes = (n: number) => (n < 1024 ? `${n} B` : `${(n / 1024).toFixed(1)} KB`);

type SkillsLibraryProps = {
  initialTexts: Record<string, string>;
};

export function SkillsLibrary({ initialTexts }: SkillsLibraryProps) {
  const texts = initialTexts;
  const [openName, setOpenName] = useState<string | null>(null);

  return (
    <div className={styles.grid}>
      {skills.map((k) => {
        const open = openName === k.name;
        const text = texts[k.name];
        const file = `${k.name}.skill`;
        return (
          <div key={k.name} className={styles.card}>
            <div style={{ padding: "20px 20px 18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <span
                  style={{
                    flex: "0 0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(217,119,87,0.12)",
                    border: "1px solid rgba(217,119,87,0.22)",
                  }}
                >
                  <ClaudeMark size={18} />
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: 16.5,
                      fontWeight: 700,
                      color: "var(--t1,#fff)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {k.title}
                  </span>
                  <span style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: "#d97757", marginTop: 1 }}>
                    {k.cat}
                  </span>
                </span>
                <code className={styles.code}>{file}</code>
              </div>
              <p style={{ margin: "13px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--t2,#d4d4d8)" }}>{k.desc}</p>
              <div style={{ display: "flex", gap: 9, marginTop: 16 }}>
                <button className={styles.viewBtn} onClick={() => setOpenName(open ? null : k.name)}>
                  <span style={{ display: "inline-flex", opacity: open ? 1 : 0.85 }}>
                    <EyeIcon size={15} />
                  </span>
                  {open ? "Hide" : "View skill"}
                </button>
                <a href={`/skills/${file}`} download={file} className={styles.downloadBtn}>
                  <DownloadIcon size={15} />
                  Download
                </a>
              </div>
            </div>

            {open && (
              <div style={{ borderTop: "1px solid var(--line,rgba(255,255,255,0.08))", background: "var(--bg-deep,#08080c)" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 16px",
                    borderBottom: "1px solid var(--line,rgba(255,255,255,0.06))",
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--t4,#71717b)" }}>
                    SKILL.md
                  </span>
                  <span style={{ fontSize: 11, color: "var(--t4,#71717b)", fontFamily: "var(--font-mono)" }}>
                    {text ? fmtBytes(text.length) : ""}
                  </span>
                </div>
                <pre className={styles.pre}>{text || "Loading skill text..."}</pre>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
