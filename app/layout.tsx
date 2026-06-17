import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "./globals.css";

import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://andrewvrodriguez.com";

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-neutral="gray"
      data-brand="violet"
      data-accent="violet"
      data-solid="contrast"
      data-solid-style="flat"
      data-border="rounded"
      data-surface="translucent"
      data-transition="all"
      data-scaling="100"
      suppressHydrationWarning
      className={cn(geist.variable, jetbrainsMono.variable, "font-sans")}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
