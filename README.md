# Andrew Rodriguez — Portfolio

Personal portfolio for Andrew Rodriguez (finance analyst turned AI builder), implemented from a
Claude Design handoff. Built from scratch with **Next.js (App Router) + React + TypeScript** and
**[Once UI](https://docs.once-ui.com/once-ui/quick-start)** for the provider/theme foundation.

## Stack

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript**
- **@once-ui-system/core** — `ThemeProvider` (persisted dark/light), layout + toast providers
- Fonts: **DM Sans** + **JetBrains Mono** via `next/font/google`
- Styling: CSS custom-property design tokens (`app/globals.css`) + CSS Modules per component
- No backend — content is static and typed under `content/`

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Structure

```text
app/
  layout.tsx        Root layout: Once UI CSS, fonts, metadata, theme attributes
  providers.tsx     Once UI ThemeProvider / LayoutProvider / ToastProvider (dark default)
  globals.css       Design tokens (dark baseline + light overrides), keyframes, base styles
  page.tsx          Home (/)
  work/  projects/  tools/   Sub-pages
components/
  chrome/           TopNav, BottomDock, ThemeToggle (shared)
  sections/         Home sections: Hero, HypeStakeFeature, ProductFlipbook, Skills, Contact
  work/  projects/  tools/   Page-specific interactive pieces
content/            Typed data: site, home, work, projects, tools
lib/icons.tsx       Inline SVG icon set (exact paths from the design)
public/
  assets/           Portrait, logos, product screenshots
  skills/           Claude skill .md (inline view) + .skill (download) files
  projects/         Finance-doc PDFs / model linked from the Projects page
  Andrew-Rodriguez-Resume.pdf
```

## Theming

Dark is the default and lives in per-element token fallbacks (`var(--surface, #0f0f16)` etc.).
Light is a uniform override applied on `:root[data-theme="light"]` in `app/globals.css`. The toggle
in the nav/dock flips Once UI's theme (persisted to `localStorage`, no flash on reload).

## Notes for deployment

- **HypeStake site preview** (home, feature section) is an intentional **static mock** of
  hypestake.ai, faithful to the design. To embed the live site, swap the `.embedScreen` block in
  `components/sections/HypeStakeFeature.tsx` for an `<iframe src="https://hypestake.ai">` — requires
  hypestake.ai to allow framing.
- **Contact form** mirrors the design: it shows a simulated "Message Sent!" state and does not yet
  deliver. Wire the `submit` handler in `components/sections/Contact.tsx` to an email service
  (Resend/Formspree) to send for real. The email + LinkedIn links are the live channels meanwhile.
- The bottom-dock **X (Twitter)** link is a placeholder (`https://twitter.com`) carried over from the
  design — set a real handle in `content/site.ts`.
- `metadataBase` in `app/layout.tsx` is set to `https://andrewvrodriguez.com`; update if the domain
  changes.
