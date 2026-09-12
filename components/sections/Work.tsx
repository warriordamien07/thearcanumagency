import { SectionHead } from "../ui/Section";
import { Ph } from "../ui/Ph";

export function Work() {
  return (
    <section id="work" className="section">
      <SectionHead title="Select work" action={<a href="#work" className="btn btn--ghost">View all work →</a>} />
      <div className="grid">
        {[
          { p: "Scope defined before proposal. Private, by referral.", img: "/assets/img/work-1.jpg", alt: "Retail store interior" },
          { p: "Arcanum Sans + Ink/Paper/Plum system, 1px Mist.", img: "/assets/img/work-2.jpg", alt: "Product photography, wristwatch" },
          { p: "Vite + VBG, 1200px, Geist, spare, not showy.", img: "/assets/img/work-3.jpg", alt: "Brand identity design work" },
          { p: "If capacity is full, we will say so plainly.", img: "/assets/img/work-4.jpg", alt: "Analytics dashboard on a laptop" },
        ].map((w) => (
          <a key={w.p} href="mailto:hello@thearcanum.agency?subject=Work%20enquiry" className="card">
            <div style={{ aspectRatio: 1.36 as any, background: "var(--arc-mist)", border: "1px solid var(--arc-mist)", overflow: "hidden" }}>
              <Ph src={w.img} alt={w.alt} sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <h3>Select work, on request</h3>
                <span className="card-arrow">→</span>
              </div>
              <p>{w.p}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
