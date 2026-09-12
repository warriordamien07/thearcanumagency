"use client";
import { useEffect, useState } from "react";
import { Ph } from "../ui/Ph";
import { ArrowIcon } from "../ui/icons";

const DEFINITIONS: Record<string, string> = {
  "Fully Bespoke Builds": "Built from first principles — no templates. Every layout, interaction, and system is crafted to your brand's logic and commercial intent.",
  "WordPress & Custom CMS": "WordPress for editorial velocity, or a fully custom stack when you need granular control. We choose the system that matches content, scale, and governance.",
  "Motion & Interaction Design": "Subtle motion that signals hierarchy and continuity — never decoration. Timed at 150–400ms with easing that respects reduced-motion.",
  "Considered User Experience": "Research-led journeys that reduce friction and respect attention. Clear hierarchy, generous whitespace, measurable outcomes.",
  "Logo & Mark Design": "A mark distilled to its essence — memorable at 16px and durable across decades. Tested in monochrome before color.",
  "Visual Identity Systems": "Typography, palette, and components that carry consistently from site to deck to storefront. Documented for autonomous use.",
  "Brand Guidelines": "A practical rulebook, not a trophy PDF. Usage, exclusions, and examples so the brand stays unmistakable in others' hands.",
  "Brand Voice & Messaging": "Positioning and voice that turn cultural value into company value. Concise, precise, and ownable.",
  "Technical & On-Page SEO": "Foundations baked into architecture — crawl, index, and core vitals. No bolt-on audits after launch.",
  "Content Structure & Search Health": "Information architecture and schema that help humans and search engines understand what to cite next.",
  "GEO (Generative Engine Optimization)": "Structuring content so AI search and answer engines can read, understand, and cite you. Alongside traditional SEO, not instead of it.",
  "AI Search & Answer-Engine Visibility": "Visibility where decisions are now made — AI overviews, chat answers, and generative feeds. Measured by citations, not just rank.",
  "Ecommerce Storefronts & Checkout": "Storefronts built to convert: fast loads, clear hierarchy, and checkout with minimal friction and maximal trust.",
  "Managed Hosting & Maintenance": "Hosting, updates, and 24-hour support turnaround. We stay close beyond launch to compound value.",
  "Website Review & Consultation": "A candid audit of what helps and what hinders — structure, performance, and perception — with prioritised next steps.",
};

function ServiceBullet({ label, id }: { label: string; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li
        id={id}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`${id}-def`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <span className="svc-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M8 3.5V12.5M3.5 8H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
        <span>{label}</span>
      </li>
      <div id={`${id}-def`} className="svc-definition" role="region" aria-labelledby={id}>
        {DEFINITIONS[label] ?? ""}
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
            bullets: ["Fully Bespoke Builds", "WordPress & Custom CMS", "Motion & Interaction Design", "Considered User Experience"],
          },
          {
            title: "Branding & Identity",
            desc: "Logo, visual identity, and brand guidelines that carry a consistent presence across the site and everywhere else the business shows up.",
            img: "/assets/img/branding.jpg",
            alt: "Brand identity system",
            bullets: ["Logo & Mark Design", "Visual Identity Systems", "Brand Guidelines", "Brand Voice & Messaging"],
          },
          {
            title: "SEO & AI Optimization",
            desc: "Search-ready foundations built into the site itself, then tuned for how both traditional and generative engines find and cite it.",
            img: "/assets/img/seo.jpg",
            alt: "Search analytics",
            bullets: ["Technical & On-Page SEO", "Content Structure & Search Health", "GEO (Generative Engine Optimization)", "AI Search & Answer-Engine Visibility"],
          },
          {
            title: "Ecommerce & Website Care",
            desc: "Storefronts built to convert, plus the hosting, maintenance, and reviews that keep a site running and improving after launch.",
            img: "/assets/img/ecommerce.jpg",
            alt: "Checkout and payment",
            bullets: ["Ecommerce Storefronts & Checkout", "Managed Hosting & Maintenance", "Website Review & Consultation"],
          },
        ].map((s) => (
          <div key={s.title} className="service-sticky">
            <div className="service-sticky-inner">
              <div className="service-sticky-title">
                <h3>{s.title}</h3>
                <a href={`mailto:hello@thearcanum.agency?subject=Enquiry%20-%20${encodeURIComponent(s.title)}`} className="btn btn--ghost" style={{ marginTop: 16 }}>
                  Let&apos;s go <ArrowIcon />
                </a>
              </div>
              <div className="service-sticky-visual">
                <div className="img">
                  <Ph src={s.img} alt={s.alt} sizes="(max-width: 900px) 100vw, 480px" />
                </div>
                <p>{s.desc}</p>
                <ul>
                  {s.bullets.map((b, idx) => (
                    <ServiceBullet key={b} label={b} id={`svc-${s.title.replace(/\s+/g, "-").toLowerCase()}-${idx}`} />
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
