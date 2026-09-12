import { SectionHead } from "../ui/Section";
import { Ph } from "../ui/Ph";
import { ArrowIcon } from "../ui/icons";

export function Work() {
  return (
    <section id="work" className="section">
      <SectionHead
        title="Select work"
        action={<a href="#work" className="btn btn--ghost">View all work <ArrowIcon /></a>}
      />
      <div className="grid">
        {[
          {
            title: "Fintech Identity System",
            summary: "Complete brand identity and marketing site for a Series B payments platform. New visual language, motion system, and CMS architecture that scales across 12 markets.",
            img: "/assets/img/work-1.jpg",
            alt: "Fintech brand identity and website",
          },
          {
            title: "Luxury E-commerce Platform",
            summary: "Headless commerce build for a heritage watchmaker. Custom product configurator, international checkout, and editorial storytelling — 40% conversion lift post-launch.",
            img: "/assets/img/work-2.jpg",
            alt: "Luxury watch e-commerce experience",
          },
          {
            title: "Cultural Institution Digital Presence",
            summary: "Website redesign for a major museum. Accessible design system, multilingual CMS, and integration with ticketing and collection APIs. WCAG 2.1 AA certified.",
            img: "/assets/img/work-3.jpg",
            alt: "Museum website and digital strategy",
          },
          {
            title: "SaaS Dashboard & Marketing Site",
            summary: "Product dashboard and marketing site for a B2B analytics platform. Design system, onboarding flows, and SEO-first content architecture. Reduced time-to-value by 60%.",
            img: "/assets/img/work-4.jpg",
            alt: "SaaS analytics dashboard and marketing",
          },
        ].map((w) => (
          <a key={w.title} href="mailto:hello@thearcanum.agency?subject=Work%20enquiry" className="card">
            <div style={{ aspectRatio: 1.36 as any, background: "var(--color-border)", border: "1px solid var(--color-border)", overflow: "hidden" }}>
              <Ph src={w.img} alt={w.alt} sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <h3>{w.title}</h3>
                <span className="card-arrow"><ArrowIcon /></span>
              </div>
              <p>{w.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}