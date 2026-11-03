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

// Light-only critical CSS: paints the page background and text colors before
// the stylesheets load. Component styles live in their CSS modules; matching
// module class names with attribute selectors here collided with sibling
// classes (e.g. `__nav` also matched `__navtxt`) and overrode hover/active states.
const criticalFallbackCss = `
  :root{--bg:#f4f5f9;--t1:#12121a;--t2:#3a3a47;--t3:#62626f;--t4:#8a8a96;--line:rgba(17,17,28,.1);--line-2:rgba(17,17,28,.16);--surface:#fff;--surface-2:#f4f5f9;--dot:rgba(17,17,28,.07);--font-sans:var(--font-geist),system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
  html{background:#f4f5f9;color:#12121a;overflow-x:hidden;-webkit-text-size-adjust:100%;text-size-adjust:100%}
  body{margin:0;background:#f4f5f9;color:#12121a;font-family:var(--font-sans);-webkit-font-smoothing:antialiased}
  img,svg{max-width:100%;height:auto}a{color:inherit}
`;

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
  themeColor: "#f4f5f9",
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
      data-theme="light"
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
      <body style={{ margin: 0, background: "#f4f5f9", color: "#12121a" }}>
        <style dangerouslySetInnerHTML={{ __html: criticalFallbackCss }} />
        <Providers>
          {children}
          <BottomDock />
        </Providers>
      </body>
    </html>
  );
}
