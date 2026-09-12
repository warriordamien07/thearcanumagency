# The Arcanum Agency — Next.js site

Private-practice studio site — Next.js 14 + React 18. Deploys on Vercel.

## Install & Run
```
npm install
npm run dev   # http://localhost:3000
npm run build
```

## Component Library — for consistent new pages

All UI uses same tokens (`--arc-ink #222026`, `--arc-paper #F9F9FA`, `--arc-plum #403C59`, `--arc-mist #E5E5EA`, `Arcanum Sans` + `Geist`).

### Layout (wrap every page)
```tsx
// app/layout.tsx already does this
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="wrap">
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

### UI primitives
- `components/ui/Button.tsx` — `<Button href="mailto:..." variant="plum|ghost|paper">Start a conversation →</Button>`
- `components/ui/Card.tsx` — `<Card title="Select work, on request" desc="..." href="mailto:..." />` + `CarouselCard`
- `components/ui/Section.tsx` — `<Section id="work"><SectionHead title="Select work" action={<Button.../>} /></Section>`

### Sections (compose pages)
- `components/sections/Hero.tsx`
- `components/sections/Intro.tsx`
- `components/sections/Featured.tsx` — carousel with drag
- `components/sections/Spotlight.tsx` — full-screen invert on scroll
- `components/sections/Work.tsx` — 1-col list with `card-arrow →`
- `components/sections/Services.tsx` — sticky 4 pillars, `service-active` body toggle
- `components/sections/Journal.tsx`
- `components/sections/FAQ.tsx` — 11 items, `+`/`−` with smooth `.45s var(--arc-ease-smooth)`

### Creating a new page (example)
```tsx
// app/work/page.tsx
import { Section, SectionHead } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function WorkPage() {
  return (
    <Section id="work">
      <SectionHead title="Work" action={<Button href="/" variant="ghost">Back →</Button>} />
      <div className="grid">
        <Card title="Patagonia-style case" desc="Challenge/Approach/Results" href="/work/patagonia" />
      </div>
    </Section>
  );
}
```

Styles live in `app/globals.css` (tokens, `1px Mist` rules, `clamp()` scales, `var(--arc-ease)`). No new CSS needed for consistency.

## Structure
```
app/
  layout.tsx  → Header + Footer + wrap
  page.tsx    → Hero + Intro + Featured + Spotlight + Work + Services + Journal + FAQ
  globals.css → tokens & all section styles
components/
  Header.tsx / Footer.tsx
  ui/Button.tsx, Card.tsx, Section.tsx
  sections/*.tsx
public/assets/ → logos, grain tile, photography
```
