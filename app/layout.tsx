import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "./globals.css";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import { BottomDock } from "@/components/chrome/BottomDock";
import { cn } from "@/lib/utils";

// Self-hosted Geist (variable weight) — the universal UI typeface.
const geist = localFont({
  src: [
    { path: "./fonts/Geist-VariableFont_wght.ttf", weight: "100 900", style: "normal" },
    { path: "./fonts/Geist-Italic-VariableFont_wght.ttf", weight: "100 900", style: "italic" },
  ],
  variable: "--font-geist",
  display: "swap",
});

const SITE_URL = "https://andrewvrodriguez.com";

const criticalFallbackCss = `
  :root{--bg:#0a0a0f;--t1:#fff;--t2:#d4d4d8;--t3:#9f9fa9;--t4:#71717b;--line:rgba(255,255,255,.09);--line-2:rgba(255,255,255,.14);--surface:#0e0e14;--surface-2:#16161f;--dot:rgba(255,255,255,.05);--font-sans:var(--font-geist),system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
  html{background:#0a0a0f;color:#fff;overflow-x:hidden;-webkit-text-size-adjust:100%;text-size-adjust:100%}
  body{margin:0;background:#0a0a0f;color:#fff;font-family:var(--font-sans);-webkit-font-smoothing:antialiased}
  img,svg{max-width:100%;height:auto}a{color:inherit}
  [class*="TopNav_wrap"]{position:fixed;top:calc(env(safe-area-inset-top,0px) + 18px);left:0;right:0;z-index:90;display:flex;justify-content:center;pointer-events:none;padding:0 16px}
  [class*="TopNav_nav"]{pointer-events:auto;display:flex;align-items:center;gap:4px;padding:7px 9px;border-radius:999px;background:rgba(13,13,19,.72);border:1px solid rgba(255,255,255,.1);box-shadow:0 14px 40px rgba(0,0,0,.5);backdrop-filter:blur(18px) saturate(160%);-webkit-backdrop-filter:blur(18px) saturate(160%)}
  [class*="TopNav_iconBtn"],[class*="TopNav_link"]{display:flex;align-items:center;justify-content:center;border-radius:999px;color:#fff!important;text-decoration:none;background:transparent;border:0;white-space:nowrap}
  [class*="TopNav_iconBtn"]{width:38px;height:38px}[class*="TopNav_link"]{gap:7px;padding:9px 15px;font-size:14.5px;font-weight:600}[class*="TopNav_divider"]{width:1px;height:22px;background:rgba(255,255,255,.12);margin:0 3px}
  [class*="Hero_hero"]{padding:150px 0 40px;position:relative}[class*="Hero_row"]{position:relative;display:flex;gap:48px;align-items:flex-start;flex-wrap:wrap-reverse;justify-content:space-between}[class*="Hero_copy"]{flex:1;min-width:320px;max-width:660px}
  [class*="Hero_badge"]{display:inline-flex;align-items:center;gap:9px;padding:7px 14px;border-radius:999px;background:#16161f;border:1px solid rgba(255,255,255,.09);font-size:14px;font-weight:600;color:#5285dd;margin-bottom:26px;max-width:100%}
  [class*="Hero_h1"]{margin:0;font-size:clamp(44px,7vw,95px);line-height:.94;font-weight:800;letter-spacing:-.035em;color:#fff}[class*="Hero_lead"]{margin:16px 0 0;font-size:clamp(18px,2.2vw,24px);font-weight:600;color:#d4d4d8}
  [class*="Hero_body"]{margin:22px 0 0;font-size:17.5px;line-height:1.65;color:#d4d4d8;max-width:560px}[class*="Hero_body"] strong{color:#fff}[class*="Hero_ctas"]{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}
  [class*="Hero_btnPrimary"],[class*="Hero_btnLight"]{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:14px 26px;border-radius:14px;font-size:15px;font-weight:600;text-decoration:none}[class*="Hero_btnPrimary"]{color:#fff!important;background:linear-gradient(180deg,#3b76d4,#1f4aa0);border:1px solid rgba(255,255,255,.14)}[class*="Hero_btnLight"]{color:#14141c!important;background:#fff}
  [class*="Hero_portrait"]{flex:0 0 auto;width:344px;height:344px;border-radius:999px;object-fit:cover;object-position:50% 18%;display:block;background:#16161f}
  @media (max-width:768px){[class*="TopNav_navtxt"]{display:none}[class*="TopNav_link"]{padding:10px}[class*="Hero_hero"]{padding-top:104px;padding-bottom:24px}[class*="Hero_row"]{flex-direction:column;flex-wrap:nowrap;align-items:stretch;gap:0}[class*="Hero_copy"]{display:contents}[class*="Hero_badge"]{order:1;align-self:center;justify-content:center;text-align:center;font-size:16px}[class*="Hero_portrait"]{order:2;width:188px;height:188px;margin:8px auto 20px}[class*="Hero_h1"]{order:3}[class*="Hero_lead"]{order:4}[class*="Hero_body"]{order:5}[class*="Hero_ctas"]{order:6;flex-direction:column;flex-wrap:nowrap;align-items:stretch}}
`;

// Runs before paint: applies the stored theme, defaulting to dark on first
// visit (seeds localStorage so the OS preference is never followed). Prevents
// a light flash and keeps Once UI's ThemeProvider in sync.
const themeInitScript = `(function(){try{var t=localStorage.getItem('data-theme');if(t!=='light'&&t!=='dark'){t='dark';localStorage.setItem('data-theme','dark');}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Andrew Rodriguez — Finance analyst turned AI builder",
    template: "%s · Andrew Rodriguez",
  },
  description:
    "Founder and finance operator building AI-native products. Building HypeStake, an AI-powered creator-brand equity marketplace — taken from concept to a shipped product.",
  keywords: [
    "Andrew Rodriguez",
    "HypeStake",
    "AI engineer",
    "financial analyst",
    "founder",
    "full-stack",
    "financial modeling",
    "LLM orchestration",
  ],
  authors: [{ name: "Andrew Rodriguez", url: SITE_URL }],
  creator: "Andrew Rodriguez",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Andrew Rodriguez",
    title: "Andrew Rodriguez — Finance analyst turned AI builder",
    description:
      "Founder and finance operator building AI-native products. Building HypeStake, an AI-powered creator-brand equity marketplace.",
    images: [{ url: "/assets/andrew-portrait.jpg", width: 1200, height: 1200, alt: "Andrew Rodriguez" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Rodriguez — Finance analyst turned AI builder",
    description:
      "Founder and finance operator building AI-native products, including HypeStake.",
    images: ["/assets/andrew-portrait.jpg"],
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  // Enables env(safe-area-inset-*) so the fixed nav + dock respect the
  // notch / home indicator on modern phones.
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-neutral="gray"
      data-brand="blue"
      data-accent="blue"
      data-solid="contrast"
      data-solid-style="flat"
      data-border="rounded"
      data-surface="translucent"
      data-transition="all"
      data-scaling="100"
      suppressHydrationWarning
      className={cn(geist.variable, "font-sans")}
    >
      <body style={{ margin: 0, background: "#0a0a0f", color: "#fff" }}>
        <style dangerouslySetInnerHTML={{ __html: criticalFallbackCss }} />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Providers>
          {children}
          <BottomDock />
        </Providers>
      </body>
    </html>
  );
}
