"use client";
import { useEffect } from "react";
import { Ph } from "../ui/Ph";

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
                  Let&apos;s go →
                </a>
              </div>
              <div className="service-sticky-visual">
                <div className="img">
                  <Ph src={s.img} alt={s.alt} sizes="(max-width: 900px) 100vw, 480px" />
                </div>
                <p>{s.desc}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
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
