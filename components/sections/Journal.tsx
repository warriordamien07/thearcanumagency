import { SectionHead } from "../ui/Section";
import { Ph } from "../ui/Ph";
import { ArrowIcon } from "../ui/icons";

export function Journal() {
  return (
    <section id="journal" className="section">
      <SectionHead title="Blog & News" action={<a href="#" className="btn btn--ghost">View all →</a>} />
      <div className="grid">
        {[
          { title: "Quiet journal, not blog farm", desc: "5–10 posts max, 60ch, spare. First essays on request.", img: "/assets/img/journal-1.jpg", alt: "Design process" },
          { title: "Select writing available", desc: "No archive of 170 like BASIC, spare by design.", img: "/assets/img/journal-2.jpg", alt: "Studio notes" },
        ].map((j) => (
          <a key={j.title} href="#" className="card">
            <div style={{ aspectRatio: 1.36 as any, background: "var(--arc-mist)", border: "1px solid var(--arc-mist)", overflow: "hidden" }}>
              <Ph src={j.img} alt={j.alt} sizes="(max-width: 800px) 100vw, 340px" />
            </div>
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <h3>{j.title}</h3>
                <span className="card-arrow"><ArrowIcon /></span>
              </div>
              <p>{j.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
