"use client";

import { useState } from "react";
import styles from "./ProductFlipbook.module.css";
import { gallery } from "@/content/home";
import { MonitorIcon, ChevronLeftIcon, ChevronRightIcon } from "@/lib/icons";

export function ProductFlipbook() {
  const [index, setIndex] = useState(0);
  const count = gallery.length;
  const current = gallery[index];
  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const num = String(index + 1).padStart(2, "0");

  return (
    <section id="product-tour" className={styles.section} style={{ padding: "18px 0 44px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 14,
          marginBottom: 20,
        }}
      >
        <div>
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
              marginBottom: 12,
            }}
          >
            <MonitorIcon size={14} />
            Inside the Product
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(26px,3.4vw,38px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "var(--t1,#fff)",
            }}
          >
            A flip through HypeStake
          </h2>
          <p style={{ margin: "12px 0 0", fontSize: 16, lineHeight: 1.62, color: "var(--t2,#d4d4d8)", maxWidth: 560 }}>
            Real screens from the live product. Creator Genome, the Deal Engine, the Valuation stack,
            and portfolio analytics, all built solo.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: "0 0 auto" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--t4,#71717b)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.02em",
            }}
          >
            {num} / {count}
          </span>
          <button onClick={prev} aria-label="Previous screen" className={`${styles.headerBtn} ${styles.prevBtn}`}>
            <ChevronLeftIcon size={19} strokeWidth={2.2} />
          </button>
          <button onClick={next} aria-label="Next screen" className={`${styles.headerBtn} ${styles.nextBtn}`}>
            <ChevronRightIcon size={19} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid rgba(47,99,201,0.2)",
          background: "#07070d",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.03),0 0 60px rgba(47,99,201,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 16px",
            background: "linear-gradient(180deg,rgba(22,18,34,0.95),rgba(13,11,22,0.95))",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex", gap: 7, flex: "0 0 auto" }}>
            <span style={{ width: 11, height: 11, borderRadius: 99, background: "#ff5f57" }} />
            <span style={{ width: 11, height: 11, borderRadius: 99, background: "#febc2e" }} />
            <span style={{ width: 11, height: 11, borderRadius: 99, background: "#28c840" }} />
          </div>
          <div
            style={{
              flex: "0 0 auto",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 30,
              padding: "0 14px",
              borderRadius: 8,
              background: "rgba(47,99,201,0.12)",
              border: "1px solid rgba(47,99,201,0.25)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 99, background: "#6f9be8", boxShadow: "0 0 8px rgba(111,155,232,0.8)" }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", color: "#d7e6ff" }}>
              {current.tag}
            </span>
          </div>
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 12.5, fontFamily: "var(--font-mono)", color: "var(--t4,#71717b)" }}>
            hypestake.ai
          </span>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            background: "radial-gradient(120% 90% at 50% -10%,rgba(47,99,201,0.1),transparent 60%),#07070d",
          }}
        >
          {gallery.map((g, i) => {
            const active = i === index;
            return (
              <div
                key={g.src}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 8,
                  transition: "opacity .5s ease, transform .6s ease",
                  opacity: active ? 1 : 0,
                  transform: active ? "scale(1)" : "scale(1.03)",
                  zIndex: active ? 2 : 1,
                  pointerEvents: active ? "auto" : "none",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.title}
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: 10,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                />
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
            padding: "18px 20px",
            background: "linear-gradient(180deg,rgba(13,11,22,0),rgba(13,11,22,0.5))",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ minWidth: 240, flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.015em", color: "var(--t1,#fff)" }}>
              {current.title}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--t3,#9f9fa9)", marginTop: 5, maxWidth: 560 }}>
              {current.blurb}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 16,
          overflowX: "auto",
          padding: "4px 2px 8px",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {gallery.map((g, i) => {
          const active = i === index;
          return (
            <button
              key={g.src}
              onClick={() => setIndex(i)}
              aria-label={`View ${g.title}`}
              className={styles.thumb}
              style={{
                border: `1.5px solid ${active ? "rgba(111,155,232,0.9)" : "rgba(255,255,255,0.08)"}`,
                opacity: active ? 1 : 0.5,
                boxShadow: active ? "0 0 0 3px rgba(47,99,201,0.18)" : "none",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} alt="" loading="lazy" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
