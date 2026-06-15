# Andrew V. Rodriguez — Personal Portfolio Website

A production-ready personal portfolio website built with React, TypeScript, and Tailwind CSS to showcase my work in **finance, entrepreneurship, AI workflows, and product execution**.

🌐 **Live Portfolio:** [andrewvrodriguez.com](https://andrewvrodriguez.com)

This repository is public both as a showcase of my development skills and as a reusable starting point for anyone who wants to launch a high-quality portfolio quickly.

---

## Table of Contents

- [Overview](#overview)
- [Portfolio Sections](#portfolio-sections)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Using This Repo as a Template](#using-this-repo-as-a-template)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
- [Build & Deployment](#build--deployment)
- [Scripts](#scripts)
- [Contact](#contact)

---

## Overview

This portfolio is designed to do two things well:

1. **Tell a clear professional story** through structured sections (experience, ventures, projects, tools, prompts, and contact).
2. **Serve as a reusable template** for other developers, founders, students, and professionals who want a modern personal site.

The UI emphasizes strong typography, responsive layout, reusable components, and fast page performance via Vite.

---

## Portfolio Sections

The site currently includes the following major sections/pages:

### 1) Home (`/`)
- Hero section and primary introduction
- HypeStake feature narrative (founder, CEO & sole engineer)
- Skills & expertise overview (finance, AI/ML, software engineering, leadership)
- Professional experience preview
- Education preview and CTA navigation

### 2) Resume / Experience (`/resume`, `/experience`, `/about`)
- Full professional timeline
- Detailed role breakdowns (including measurable impact)
- Skills by category
- Education and certifications

### 3) Ventures (`/ventures`)
- Startup and venture initiatives
- Company concepts, traction, and strategic vision
- External link support for live ventures

### 4) Projects (`/projects`)
- Highlighted strategic/finance project work
- Project cards and supporting resources (PDFs, docs, files)

### 5) Tools & Systems (`/tools`)
- Custom systems and internal workflows
- Applied AI, analytics, and operational tooling examples
- Impact-driven tool summaries

### 6) AI Prompts (`/prompts`)
- Curated prompt library
- Category filtering
- Prompt descriptions, tags, and use-case outputs

### 7) Contact (`/contact`)
- Direct email and LinkedIn links
- Contact form UI
- Resume download CTA

### 8) Utility Routes
- PDF viewer (`/view-pdf`)
- 404 route (`*`)

---

## Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router
- **State/Data Utilities:** TanStack Query (React Query)
- **Icons:** Lucide React

---

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm (or Bun, if preferred)

### Installation

```bash
# 1) Clone the repository
git clone https://github.com/<your-username>/Personal-Portfolio-Website.git

# 2) Enter the project directory
cd Personal-Portfolio-Website

# 3) Install dependencies
npm install

# 4) Start the local development server
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

---

## Using This Repo as a Template

If you want to reuse this codebase for your own portfolio:

### Option A — GitHub “Use this template” (recommended)
1. Click **Use this template** on the repository page.
2. Create a new repository under your account.
3. Clone your new repo:
   ```bash
   git clone https://github.com/<your-username>/<your-new-repo>.git
   cd <your-new-repo>
   npm install
   npm run dev
   ```

### Option B — Fork + customize
1. Fork this repository.
2. Clone your fork and install dependencies.
3. Replace branding, content, and links with your own.

### What you should change first
- Your name and headline text
- Domain + social links
- Resume PDF in `public/`
- Project/venture data and descriptions
- Contact details and email endpoints
- SEO metadata and favicon assets

---

## Project Structure

```text
.
├── public/                 # Static files (resume, favicon, project attachments, robots)
├── src/
│   ├── components/         # Reusable UI and layout components
│   ├── pages/              # Route-level pages (Home, Resume, Ventures, etc.)
│   ├── data/               # Prompt/content data sources
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility helpers
│   └── integrations/       # External integration clients/types
├── index.html
├── package.json
└── vite.config.ts
```

---

## Customization Guide

To adapt this as your own portfolio template:

1. **Update route content** in `src/pages/*`.
2. **Swap images/assets** in `src/assets/` and `public/`.
3. **Adjust navigation** in `src/components/Navbar.tsx`.
4. **Update prompt/project datasets** in `src/data/` and project page content.
5. **Refine design tokens** via Tailwind config and global CSS.

Tip: keep components generic and content-specific data in page/data files to make future updates easier.

---

## Build & Deployment

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

Deploy the `dist/` output to your hosting provider of choice (e.g., Vercel, Netlify, Cloudflare Pages, static hosting, etc.).

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## Contact

If you want to connect about startup finance, AI workflows, portfolio engineering, or collaboration:

- **Website:** [andrewvrodriguez.com](https://andrewvrodriguez.com)
- **LinkedIn:** [linkedin.com/in/andrewvrodriguez](https://linkedin.com/in/andrewvrodriguez)

---

If you reuse this project as a template, feel free to star the repo and tag your version—I’d love to see what you build.
