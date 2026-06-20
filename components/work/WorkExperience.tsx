"use client";

import { useState } from "react";
import styles from "./WorkExperience.module.css";
import { work } from "@/content/work";
import { ChevronDownIcon } from "@/lib/icons";

export function WorkExperience() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{ padding: "8px 0 12px" }}>
      <div className={styles.list}>
        {work.map((job, i) => {
          const isOpen = open === i;
          return (
            <div key={job.company} className={styles.card}>
              <span className={styles.bar} aria-hidden />
              <button
                className={styles.toggle}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className={styles.logo} style={{ background: job.logoBg }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={job.logo}
                    alt=""
                    aria-hidden
                    style={{ objectFit: job.logoFit ?? "contain", padding: job.logoPad ?? 0 }}
                  />
                </span>
                <span className={styles.head}>
                  <span className={styles.info}>
                    <span
                      style={{
                        display: "block",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--t1,#fff)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {job.company}
                    </span>
                    <span style={{ display: "block", fontSize: 16, color: "var(--t2,#d4d4d8)", marginTop: 2 }}>
                      {job.role}
                    </span>
                  </span>
                  <span className={styles.meta}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--t3,#9f9fa9)", fontFamily: "var(--font-mono)" }}>
                      {job.date}
                    </span>
                    <span style={{ fontSize: 12.5, color: "var(--t4,#71717b)" }}>{job.loc}</span>
                  </span>
                </span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                  <ChevronDownIcon size={18} />
                </span>
              </button>

              {isOpen && (
                <div className={styles.detail}>
                  <div style={{ height: 1, background: "var(--line,rgba(255,255,255,0.08))", margin: "0 0 16px" }} />
                  <div style={{ fontSize: 16, fontWeight: 600, color: "var(--t1,#fff)", marginBottom: 14 }}>
                    {job.summary}
                  </div>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 11,
                    }}
                  >
                    {job.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{ display: "flex", gap: 11, fontSize: 15.5, lineHeight: 1.6, color: "var(--t2,#d4d4d8)" }}
                      >
                        <span
                          style={{
                            flex: "0 0 auto",
                            marginTop: 8,
                            width: 5,
                            height: 5,
                            borderRadius: 99,
                            background: "#2f63c9",
                          }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 18 }}>
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "var(--t3,#9f9fa9)",
                          padding: "5px 11px",
                          borderRadius: 8,
                          background: "var(--surface-2,#16161f)",
                          border: "1px solid var(--line,rgba(255,255,255,0.08))",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
