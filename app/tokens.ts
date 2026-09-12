// Design Tokens — The Arcanum Agency
// Single source of truth, mirrored in app/globals.css :root
// Usage: import { tokens } from "@/app/tokens"

export const tokens = {
  color: {
    bg: "var(--color-bg)", // #F9F9FA — WCAG 15.3:1 vs ink
    surface: "var(--color-surface)", // #fff
    text: "var(--color-text)", // #222026
    textMuted: "var(--color-text-muted)", // #3f3c59 — 9.97:1 vs paper (AA 4.5:1)
    textMutedOnDark: "var(--color-text-muted-on-dark)", // rgba(249,249,250,0.75)
    border: "var(--color-border)", // #E5E5EA — 1px separators
    action: "var(--color-action)", // #403C59 — plum CTA
    danger: "var(--color-danger)", // #9e2b25
    success: "var(--color-success)", // #1a7a4a
    focus: "var(--color-focus)", // #403C59 — 2px outline, offset 3px
  },
  space: {
    1: "var(--space-1)", // 4px
    2: "var(--space-2)", // 8px
    3: "var(--space-3)", // 16px
    4: "var(--space-4)", // 24px
    5: "var(--space-5)", // 32px
    6: "var(--space-6)", // 48px
    7: "var(--space-7)", // 64px
    8: "var(--space-8)", // 80px
    9: "var(--space-9)", // 96px
    10: "var(--space-10)", // 112px
    11: "var(--space-11)", // 128px
    12: "var(--space-12)", // 160px
    section: "var(--arc-section)", // clamp(56px,7vw,112px) — vertical rhythm
    pad: "var(--arc-pad)", // clamp(24px,6vw,80px) — horizontal container
  },
  typography: {
    display: "var(--arc-display)", // Arcanum Sans — uppercase headings
    body: "var(--arc-body)", // Hanken Grotesk — reading
    mono: "var(--arc-mono)", // Geist Mono — captions/nums
    scale: {
      xs: "var(--text-xs)", // 11px — eyebrow
      sm: "var(--text-sm)", // 13px — caption
      base: "var(--text-base)", // 16px — body
      md: "var(--text-md)", // 18px — lede
      lg: "var(--text-lg)", // 20px — FAQ question
      xl: "var(--text-xl)", // 24px — card title
      "2xl": "var(--text-2xl)", // 30px
      "3xl": "var(--text-3xl)", // 38px — intro
      "4xl": "var(--text-4xl)", // 48px — section
      "5xl": "var(--text-5xl)", // 60px — spotlight/hero
    },
    lineHeight: {
      tight: "var(--leading-tight)", // 1.1 — display
      snug: "var(--leading-snug)", // 1.2 — headings
      normal: "var(--leading-normal)", // 1.5 — body
      relaxed: "var(--leading-relaxed)", // 1.65 — FAQ answer
    },
    tracking: {
      tight: "var(--tracking-tight)", // -0.04em — display
      normal: "var(--tracking-normal)",
      wide: "var(--tracking-wide)", // 0.08em
      wider: "var(--tracking-wider)", // 0.12em — kicker
    },
  },
  motion: {
    duration: {
      fast: "var(--duration-fast)", // 150ms — micro (hover)
      base: "var(--duration-base)", // 250ms — default
      slow: "var(--duration-slow)", // 400ms — panel reveal, arrow loop
      slower: "var(--duration-slower)", // 600ms — page reveal
    },
    easing: {
      out: "var(--ease-out)", // cubic-bezier(0.16,1,0.3,1) — decelerate
      inOut: "var(--ease-in-out)", // cubic-bezier(0.65,0,0.35,1) — smooth
      dark: "var(--arc-ease-dark)", // 1.1s invert transitions
      smooth: "var(--arc-ease-smooth)",
    },
  },
  breakpoint: {
    mobile: 640,
    tablet: 1024,
    desktop: 1280,
  },
  componentStates: {
    // Every interactive element implements: default, hover, focus-visible, active, disabled, loading, error, empty, success
    // Nav: hover color shift + underline scaleX, focus ring 2px, active font-weight 600
    // FAQ: hover subtle bg shift + padding, focus ring, open icon rotate 45deg, answer muted token 9.97:1
    // Services: plus icon always visible, rotate 45deg when expanded, definition max-height 120px reveal
    // Arrow: @keyframes arc-arrow-loop 400ms — 10px right fade out, -10px reset, back to 0
    // DragCursor: mix-blend-mode difference + invert, only @media (hover:hover)
  },
} as const;

// Validation notes:
// - Contrast: muted #3f3c59 on #F9F9FA = 9.97:1 (normal 4.5:1, large 3:1) — passes AA
// - Touch: 44x44px minimum on faq summary, service li, nav-toggle, carousel cards (mobile)
// - Reduced motion: all keyframes/transitions disabled via @media (prefers-reduced-motion:reduce)
// - CLS: next/image with explicit width/height in Ph.tsx DIMS, aspect-ratio fixed
// - LCP: hero text (no image), below-fold photos lazy via next/image, grain is 1KB inline SVG
