---
name: Jhojan Jimenez Portfolio
description: High-craft, dark luxury technical portfolio for a Backend & Cloud Architect
colors:
  background: "#120524"
  canvas-deep: "#0e041d"
  surface-card: "#13091f"
  surface-card-border: "rgba(168, 85, 247, 0.15)"
  primary: "#fafafa"
  primary-foreground: "#150628"
  accent-purple: "#9333ea"
  accent-purple-glow: "#a855f7"
  accent-purple-dark: "#581c87"
  text-primary: "#f5f5f5"
  text-muted: "rgba(245, 245, 245, 0.65)"
  border-subtle: "rgba(255, 255, 255, 0.08)"
typography:
  display:
    fontFamily: "var(--font-sans), Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  editorial:
    fontFamily: "var(--font-serif), Newsreader, Georgia, serif"
    fontStyle: "italic"
    fontWeight: 400
  body:
    fontFamily: "var(--font-sans), Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
  badge:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
rounded:
  sm: "6px"
  md: "10px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.full}"
    padding: "10px 22px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "10px 22px"
---

## Overview
A technical, high-polish portfolio designed with an obsidian-and-deep-purple aesthetic. It balances the rigor of distributed backend infrastructure with editorial elegance, contrasting modern sans-serif tech typography with selective serif italics.

## Colors
- **Canvas / Background**: Layered obsidian and midnight purple (`#120524` with multi-stop radial purple glows).
- **Surfaces & Cards**: Deep glassmorphic containers (`rgba(19, 9, 31, 0.7)`) with subtle hairline purple/white borders (`rgba(168, 85, 247, 0.15)`).
- **Accents**: Vibrant electric purple (`#9333ea`, `#a855f7`) for interactive highlights, active badges, and focus rings.
- **Text & Contrast**: High-contrast white (`#fafafa`) for primary headlines, with high-legibility muted white (`rgba(245, 245, 245, 0.65)`) for descriptions and metadata.

## Typography
- **Primary Typeface**: Inter (`--font-sans`) providing clean, authoritative, machine-precision readability.
- **Editorial Contrast**: Newsreader italic (`--font-serif`) for signature emphasis and humanized technical storytelling.
- **Monospace Accents**: Monospace tags for architecture metrics, latency stats, API endpoints, and command badges.

## Layout
- **Page Rhythm**: Single-Page Application with generous breathing room (`padding: 5rem 1.5rem` on major sections).
- **Grid Systems**: Bento-grid style compositions for cards, projects, and architecture achievements.
- **Max Width**: Centered layout bounded at `max-w-6xl` or `max-w-5xl` for optimal reading scan lines.

## Elevation & Depth
- **Depth Layers**: Depth is achieved through radial backlights, subtle dark borders (`border-white/10`), and soft backdrop blurs (`backdrop-blur-md`) rather than heavy drop shadows.
- **Lighting**: Ambient purple highlights positioned behind key cards and hero elements to create dimensionality.

## Shapes
- **Corner Radii**: Consistent 12px (`rounded-xl` / `rounded-lg`) on cards, 9999px (`rounded-full`) on pills, badges, and CTAs.
- **Borders**: 1px crisp borders using semi-transparent white or purple (`border-purple-500/20`).

## Components
- **Navbar**: Floating pill header with glass blur and section anchors.
- **Hero**: Confident title with gradient text, architectural role pills, social links, and primary action buttons.
- **Project Cards**: Bento cards highlighting live demos, GitHub source links, architecture diagrams/screenshots, and key backend performance metrics.
- **Metric Badges**: Compact monospace chips displaying latency, throughput, scale, and hackathon awards.

## Do's and Don'ts
- **Do**: Maintain strictly dark mode aesthetics with deep purple atmosphere.
- **Do**: Highlight backend metrics (RPS, ms latency, data scale, concurrency).
- **Do**: Keep copy crisp, technical, and in English.
- **Don't**: Introduce flat gray or white backgrounds.
- **Don't**: Use generic emoji bullet points or corporate stock clichés.
- **Don't**: Overcrowd cards with irrelevant frontend frameworks when showcasing backend projects.
