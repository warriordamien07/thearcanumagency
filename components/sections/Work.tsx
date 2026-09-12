import { SectionHead } from "../ui/Section";
import { Ph } from "../ui/Ph";
import { ArrowIcon } from "../ui/icons";

export function Work() {
  return (
    <section id="work" className="section">
      <SectionHead title="Select work" action={<a href="#work" className="btn btn--ghost">View all work <ArrowIcon /></a>} />
      <div className="grid">
        {[
          {
            title: "Fintech Identity System",
            desc: "Unified identity for a regulated fintech consolidating three products into one trust mark. 32% faster KYC completion, zero brand debt at scale. — NDA-protected.",
            cta: "Request Case Study",
            img: "/assets/img/work-1.jpg",
            alt: "Fintech product interface with identity system",
          },
          {
            title: "Luxury E-commerce Platform",
            desc: "Editorial commerce for a private luxury retailer. Bespoke checkout and asset pipeline lifted conversion 18% while preserving editorial pacing.",
            cta: "Request Case Study",
            img: "/assets/img/work-2.jpg",
            alt: "Luxury e-commerce product photography on display",
          },
          {
            title: "Cultural Archive & Discovery",
            desc: "Search-native archive for a cultural institution — 4,000+ works, structured for AI citation and traditional search. Discovery time halved.",
            cta: "Request Case Study",
            img: "/assets/img/work-3.jpg",
            alt: "Cultural archive and brand identity design work",
          },
          {
            title: "AI-Native SaaS Platform",
            desc: "Product site for an AI-native SaaS turning complex provenance into clear hierarchy. Generative-engine visibility from day one; cited in answer engines.",
            cta: "Request Case Study",
            img: "/assets/img/work-4.jpg",
            alt: "SaaS analytics dashboard on a laptop",
          },
        ].map((w) => (
          <a key={w.title} href="mailto:hello@thearcanum.agency?subject=Case%20Study%20Request%20-%20Enquiry" className="card" aria-label={`${w.title} — ${w.cta}`}>
            <div style={{ aspectRatio: 1.36 as any, background: "var(--arc-mist)", border: "1px solid var(--color-border)", overflow: "hidden" }}>
              <Ph src={w.img} alt={w.alt} sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <h3>{w.title}</h3>
                <span className="card-arrow" aria-hidden="true"><ArrowIcon /></span>
              </div>
              <p>{w.desc}</p>
              <span style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                {w.cta} <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
