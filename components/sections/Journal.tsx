import { SectionHead } from "../ui/Section";
import { Ph } from "../ui/Ph";
import { ArrowIcon } from "../ui/icons";

export function Journal() {
  const posts = [
    { title: "Quiet journal, not blog farm", desc: "5–10 posts max, 60ch, spare. First essays on request — deliberately slow, not algorithmic.", img: "/assets/img/journal-1.jpg", alt: "Design process sketch on paper" },
    { title: "Select writing available", desc: "No archive of 170 like BASIC, spare by design. Provenance through depth, not volume.", img: "/assets/img/journal-2.jpg", alt: "Studio notes and editorial planning" },
  ];
  const isEmpty = posts.length === 0;
  return (
    <section id="journal" className="section" aria-labelledby="journal-heading">
      <SectionHead title="Journal" action={<a href="#journal" className="btn btn--ghost">View all <ArrowIcon /></a>} />
      {isEmpty ? (
        <div className="journal-empty" role="status" aria-live="polite">
          <h3>Quiet journal, not blog farm</h3>
          <p>We publish 5–10 essays a year, each 60ch and spare. First notes are available on request — no feed, no haste.</p>
          <a href="mailto:hello@thearcanum.agency?subject=Request%20Journal%20Access" className="btn btn--ghost" style={{ marginTop: 16 }}>
            Request access <ArrowIcon />
          </a>
        </div>
      ) : (
        <div className="grid">
          {posts.map((j) => (
            <a key={j.title} href="#journal" className="card" aria-label={`${j.title} — Read more`}>
              <div style={{ aspectRatio: 1.36 as any, background: "var(--arc-mist)", border: "1px solid var(--color-border)", overflow: "hidden" }}>
                <Ph src={j.img} alt={j.alt} sizes="(max-width: 800px) 100vw, 340px" />
              </div>
              <div className="card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <h3>{j.title}</h3>
                  <span className="card-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>
                <p>{j.desc}</p>
                <span style={{ fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                  Read more <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
