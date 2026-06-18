import styles from "./HypeStakeFeature.module.css";
import { highlights } from "@/content/home";
import { profile } from "@/content/site";
import {
  InlineIcon,
  ArrowUpRightIcon,
  SparkleIcon,
  LockIcon,
  ExternalLinkIcon,
  InfoIcon,
} from "@/lib/icons";

const PAD = "clamp(28px,4vw,52px)";

export function HypeStakeFeature() {
  return (
    <section id="building" style={{ padding: "64px 0 40px" }}>
      <div
        style={{
          position: "relative",
          borderRadius: 28,
          overflow: "hidden",
          border: "1px solid var(--line,rgba(255,255,255,0.09))",
          background:
            "linear-gradient(160deg,rgba(47,99,201,0.10),rgba(10,10,15,0)),var(--surface,#0e0e14)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            background: "radial-gradient(50% 50% at 50% 50%,rgba(47,99,201,0.10),transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* intro + monogram */}
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            alignItems: "flex-start",
            padding: PAD,
          }}
        >
          <div className={styles.shrink}>
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
                marginBottom: 18,
              }}
            >
              <span style={{ filter: "drop-shadow(0 0 4px rgba(47,143,255,0.5))", color: "#2f8fff" }}>
                <SparkleIcon size={15} />
              </span>
              Currently building — Founder &amp; CEO
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(28px,3.6vw,42px)",
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "var(--t1,#fff)",
              }}
            >
              Building HypeStake from zero to product
            </h2>
            <p style={{ margin: "18px 0 0", fontSize: 16.5, lineHeight: 1.65, color: "var(--t2,#d4d4d8)" }}>
              At HypeStake I own architecture, code, financial models, and go-to-market. The product
              introduces{" "}
              <strong style={{ color: "var(--t2,#d4d4d8)", fontWeight: 600 }}>Creator Equity</strong>, a
              financial instrument that lets creators earn real ownership in the brands they champion.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: 16.5, lineHeight: 1.65, color: "var(--t2,#d4d4d8)" }}>
              The platform combines finance expertise with full-stack AI engineering. The AI-assisted
              valuation stack pairs LLM-driven research with deterministic Python math, so every number
              stays reproducible and auditable.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 26 }}>
              <a href={profile.hypestake} target="_blank" rel="noopener" className={styles.visitBtn}>
                Visit hypestake.ai
                <ArrowUpRightIcon size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div className={styles.monoWrap}>
            <div
              style={{
                position: "relative",
                width: 200,
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(50% 50% at 50% 50%,rgba(47,143,255,0.16),transparent 68%)",
                  filter: "blur(14px)",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/hs-monogram.png"
                alt="HypeStake 3D monogram"
                style={{
                  position: "relative",
                  width: 170,
                  height: 170,
                  objectFit: "contain",
                  animation: "hsFloat 7s ease-in-out infinite",
                  filter: "drop-shadow(0 0 12px rgba(47,143,255,0.22))",
                }}
              />
            </div>
          </div>
        </div>

        {/* highlights */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,232px),1fr))",
            gap: 14,
            padding: `0 ${PAD} ${PAD}`,
          }}
        >
          {highlights.map((h) => (
            <div
              key={h.title}
              style={{
                borderRadius: 14,
                padding: 18,
                background: "var(--surface-2,#14141c)",
                border: "1px solid var(--line,rgba(255,255,255,0.08))",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ flex: "0 0 auto", display: "inline-flex", color: "#6f9be8" }}>
                  <InlineIcon inner={h.icon} size={19} />
                </span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--t1,#fff)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {h.title}
                </span>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--t3,#9f9fa9)", marginTop: 9 }}>
                {h.body}
              </div>
            </div>
          ))}
        </div>

        {/* live-product preview — the real hypestake.ai embedded in a browser-chrome frame.
            The iframe scrolls internally, so the full site can be explored without leaving
            the page. hypestake.ai sends no X-Frame-Options / frame-ancestors, so framing
            is permitted. */}
        <div style={{ position: "relative", padding: `0 ${PAD} ${PAD}` }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 14,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 8,
                  height: 8,
                  borderRadius: 99,
                  background: "#10de7f",
                  boxShadow: "0 0 10px rgba(16,222,127,0.7)",
                  animation: "hsPulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#6f9be8",
                }}
              >
                Live Product · hypestake.ai
              </span>
            </div>
            <a href={profile.hypestake} target="_blank" rel="noopener" className={styles.openLink}>
              Open full site
              <ArrowUpRightIcon size={14} />
            </a>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(47,99,201,0.22)",
              background: "#07070d",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.03),0 0 60px rgba(47,99,201,0.12)",
            }}
          >
            {/* browser chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "13px 16px",
                background: "linear-gradient(180deg,rgba(22,18,34,0.95),rgba(13,11,22,0.95))",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", gap: 7, flex: "0 0 auto" }}>
                <span style={{ width: 11, height: 11, borderRadius: 99, background: "#ff5f57", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.15)" }} />
                <span style={{ width: 11, height: 11, borderRadius: 99, background: "#febc2e", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.15)" }} />
                <span style={{ width: 11, height: 11, borderRadius: 99, background: "#28c840", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.15)" }} />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  height: 34,
                  borderRadius: 9,
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  maxWidth: 520,
                  margin: "0 auto",
                }}
              >
                <span style={{ display: "inline-flex", color: "#10de7f" }}>
                  <LockIcon size={13} />
                </span>
                <span style={{ fontSize: 13, fontFamily: "var(--font-mono)", color: "#d4d4d8", letterSpacing: "-0.01em" }}>
                  https://hypestake.ai
                </span>
              </div>
              <a
                href={profile.hypestake}
                target="_blank"
                rel="noopener"
                aria-label="Open hypestake.ai in a new tab"
                className={styles.addressLink}
              >
                <ExternalLinkIcon size={16} />
              </a>
            </div>

            {/* Live, scrollable embed of hypestake.ai */}
            <div
              style={{
                position: "relative",
                height: "clamp(460px,72vh,760px)",
                background:
                  "radial-gradient(120% 90% at 50% -10%,rgba(47,99,201,0.16),transparent 60%),#07070d",
              }}
            >
              <iframe
                src={profile.hypestake}
                title="HypeStake — live site (hypestake.ai)"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 12,
              fontSize: 12,
              color: "var(--t4,#71717b)",
            }}
          >
            <InfoIcon size={13} />
            Live embed of hypestake.ai — scroll inside the frame to explore, or open the full site.
          </div>
        </div>
      </div>
    </section>
  );
}
