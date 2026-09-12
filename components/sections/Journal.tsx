import { SectionHead } from "../ui/Section";
import { Ph } from "../ui/Ph";
import { ArrowIcon } from "../ui/icons";

export function Journal() {
  return (
    <section id="journal" className="section">
      <SectionHead title="Blog & News" action={<a href="#" className="btn btn--ghost">View all <ArrowIcon /></a>} />
      <div className="grid">
        {[
          {
            title: "Designing for Generative Search",
            desc: "How GEO differs from traditional SEO, and why your content structure matters more than keywords in the age of AI answer engines.",
            img: "/assets/img/journal-1.jpg",
            alt: "AI search optimization article",
          },
          {
            title: "The Case for Bespoke CMS",
            desc: "When WordPress isn't enough: evaluating custom content architectures for complex editorial workflows and multi-market sites.",
            img: "/assets/img/journal-2.jpg",
            alt: "Custom CMS architecture article",
          },
        ].map((j) => (
          <a key={j.title} href="#" className="card">
            <div style={{ aspectRatio: 1.36 as any, background: "var(--color-border)", border: "1px solid var(--color-border)", overflow: "hidden" }}>
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