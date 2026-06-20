"use client";

import { useState } from "react";
import styles from "./ProjectsGrid.module.css";
import { projects, projectFilters } from "@/content/projects";
import { GlobeIcon, GithubMark, ArrowUpRightIcon } from "@/lib/icons";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const visible = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      <div className={styles.filters}>
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`${styles.filterPill} ${filter === f ? styles.filterActive : styles.filterIdle}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((p) => {
          const isOpen = !!expanded[p.name];
          return (
            <div key={p.name} className={styles.card}>
              <div
                style={{
                  position: "relative",
                  height: 210,
                  background: p.grad,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {p.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    loading="lazy"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      position: "absolute",
                      fontSize: 118,
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "rgba(255,255,255,0.14)",
                      userSelect: "none",
                    }}
                  >
                    {p.mono}
                  </span>
                )}
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 11px",
                    borderRadius: 999,
                    background: "rgba(0,0,0,0.35)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {p.cat}
                </span>
                <span style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 7 }}>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener" className={styles.badge}>
                      <GlobeIcon size={13} />
                      {p.liveLabel}
                    </a>
                  )}
                  {p.source && (
                    <a href={p.source} target="_blank" rel="noopener" className={styles.badge}>
                      <GithubMark size={13} />
                      Source
                    </a>
                  )}
                </span>
              </div>

              <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "var(--t1,#fff)", letterSpacing: "-0.015em" }}>
                    {p.name}
                  </span>
                  <a
                    href={p.primary}
                    target="_blank"
                    rel="noopener"
                    aria-label="Open project link"
                    className={styles.primaryLink}
                  >
                    <ArrowUpRightIcon size={18} />
                  </a>
                </div>
                <div style={{ fontSize: 13, color: "var(--t4,#71717b)", marginTop: 4, fontFamily: "var(--font-mono)" }}>
                  {p.date}
                </div>
                <div
                  className={isOpen ? undefined : styles.clamp}
                  style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--t2,#d4d4d8)", marginTop: 11 }}
                >
                  {p.desc}
                </div>
                <button
                  className={styles.more}
                  onClick={() => setExpanded((s) => ({ ...s, [p.name]: !s[p.name] }))}
                >
                  {isOpen ? "Show less" : "Read more"}
                </button>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: "var(--t3,#9f9fa9)",
                        padding: "4px 10px",
                        borderRadius: 7,
                        background: "var(--surface-2,#16161f)",
                        border: "1px solid var(--line,rgba(255,255,255,0.08))",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
