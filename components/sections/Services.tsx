"use client";
import { useEffect, useRef, useState, type MouseEvent, type KeyboardEvent } from "react";
import { Ph } from "../ui/Ph";
import { ArrowIcon, ChevronDownIcon } from "../ui/icons";

const SERVICE_DEFINITIONS: Record<string, string> = {
  "Fully Bespoke Builds": "Custom architecture, design systems, and development tailored to unique business requirements — no templates, no compromises.",
  "WordPress & Custom CMS": "Content management built for editors, not developers. Block-based editing, headless options, and seamless migrations.",
  "Motion & Interaction Design": "Purposeful animation that guides users, communicates state, and reinforces brand — performant and accessible by default.",
  "Considered User Experience": "Research-informed journeys, accessible patterns, and measurable outcomes. We design for clarity, not novelty.",
  "Logo & Mark Design": "Distinctive marks grounded in strategy. Scalable, ownable, and designed to work across every touchpoint.",
  "Visual Identity Systems": "Color, type, imagery, and grid systems that scale. Documentation that ensures consistency across teams and vendors.",
  "Brand Guidelines": "Practical, living guidelines — digital-first, version-controlled, and built for real-world application.",
  "Brand Voice & Messaging": "Verbal identity that matches the visual. Frameworks for tone, naming, and content strategy.",
  "Technical & On-Page SEO": "Clean architecture, semantic markup, Core Web Vitals, and structured data. Foundations that scale.",
  "Content Structure & Search Health": "Information architecture, topic clusters, and editorial workflows that earn visibility over time.",
  "GEO (Generative Engine Optimization)": "Schema, citations, and content patterns that help AI search tools understand and cite your site.",
  "AI Search & Answer-Engine Visibility": "Optimization for Perplexity, ChatGPT, Gemini, and emerging answer engines — not just traditional SERPs.",
  "Ecommerce Storefronts & Checkout": "Conversion-focused shops on WooCommerce or custom stacks. Fast, secure, and built for growth.",
  "Managed Hosting & Maintenance": "Infrastructure, updates, monitoring, and 24-hour support SLAs. We run it so you don't have to.",
  "Website Review & Consultation": "Expert audit of performance, accessibility, SEO, and UX. Actionable roadmap, not a PDF.",
};

function ServiceBullet({ bullet, definition }: { bullet: string; definition: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const bulletRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = `service-def-${bullet.replace(/\s+/g, "-").toLowerCase()}`;

  const toggle = () => setIsOpen((prev) => !prev);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
    if (e.key === "Escape") {
      setIsOpen(false);
      bulletRef.current?.blur();
    }
  };

  return (
    <>
      <button
        ref={bulletRef}
        className="service-bullet"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <span className="service-bullet-text">{bullet}</span>
        <ChevronDownIcon className={`service-bullet-chevron ${isOpen ? "is-open" : ""}`} aria-hidden="true" />
      </button>
      <div
        id={panelId}
        ref={panelRef}
        className="service-definition"
        role="region"
        aria-labelledby={`${panelId}-trigger`}
        hidden={!isOpen}
      >
        <p>{definition}</p>
      </div>
    </>
  );
}

export function Services() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".service-sticky");
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting && e.intersectionRatio > 0.15);
        const stillVisible = [...els].some((el) => {
          const r = el.getBoundingClientRect();
          return r.top < window.innerHeight * 0.7 && r.bottom > window.innerHeight * 0.3;
        });
        document.body.classList.toggle("service-active", anyVisible || stillVisible);
      },
      { threshold: [0, 0.15, 0.5], rootMargin: "-10% 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="section services">
      <div className="section-head">
        <h2>Services</h2>
      </div>
      <div className="services-sticky">
        {[
          {
            title: "Web Design & Development",
            desc: "Bespoke builds from architecture through launch, on WordPress or a custom stack depending on what the project calls for.",
            img: "/assets/img/web-dev.jpg",
            alt: "Website design and build",
            bullets: [
              "Fully Bespoke Builds",
              "WordPress & Custom CMS",
              "Motion & Interaction Design",
              "Considered User Experience",
            ],
          },
          {
            title: "Branding & Identity",
            desc: "Logo, visual identity, and brand guidelines that carry a consistent presence across the site and everywhere else the business shows up.",
            img: "/assets/img/branding.jpg",
            alt: "Brand identity system",
            bullets: [
              "Logo & Mark Design",
              "Visual Identity Systems",
              "Brand Guidelines",
              "Brand Voice & Messaging",
            ],
          },
          {
            title: "SEO & AI Optimization",
            desc: "Search-ready foundations built into the site itself, then tuned for how both traditional and generative engines find and cite it.",
            img: "/assets/img/seo.jpg",
            alt: "Search analytics",
            bullets: [
              "Technical & On-Page SEO",
              "Content Structure & Search Health",
              "GEO (Generative Engine Optimization)",
              "AI Search & Answer-Engine Visibility",
            ],
          },
          {
            title: "Ecommerce & Website Care",
            desc: "Storefronts built to convert, plus the hosting, maintenance, and reviews that keep a site running and improving after launch.",
            img: "/assets/img/ecommerce.jpg",
            alt: "Checkout and payment",
            bullets: [
              "Ecommerce Storefronts & Checkout",
              "Managed Hosting & Maintenance",
              "Website Review & Consultation",
            ],
          },
        ].map((s) => (
          <div key={s.title} className="service-sticky">
            <div className="service-sticky-inner">
              <div className="service-sticky-title">
                <h3>{s.title}</h3>
                <a
                  href={`mailto:hello@thearcanum.agency?subject=Enquiry%20-%20${encodeURIComponent(s.title)}`}
                  className="btn btn--ghost"
                  style={{ marginTop: 16 }}
                >
                  Let's go <ArrowIcon />
                </a>
              </div>
              <div className="service-sticky-visual">
                <div className="img">
                  <Ph src={s.img} alt={s.alt} sizes="(max-width: 900px) 100vw, 480px" />
                </div>
                <p>{s.desc}</p>
                <ul className="service-bullets">
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <ServiceBullet bullet={b} definition={SERVICE_DEFINITIONS[b] || "Definition coming soon."} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}