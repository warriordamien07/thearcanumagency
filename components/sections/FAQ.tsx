"use client";
import { useRef, type MouseEvent as ReactMouseEvent } from "react";

const ITEMS: Array<[string, string]> = [
  [
    "What do you do?",
    "We design and build the full digital presence for a business: the website, the brand identity behind it, and the search and AI systems that make it findable.",
  ],
  [
    "Are you taking on new clients?",
    "The Arcanum Agency works with a small, chosen client list at any time. Reach out and we will tell you if there is room.",
  ],
  [
    "What is the process like?",
    "A short discovery conversation, then a proposal. Once a project starts, you hear from us at defined milestones rather than daily check-ins.",
  ],
  [
    "How long does a project take?",
    "It depends on scope. We will give you a real timeline once we understand what you need built.",
  ],
  [
    "What platforms do you build on?",
    "WordPress for content-driven sites, a fully custom stack when a project calls for more control. We choose based on what the site needs to do.",
  ],
  [
    "Do you offer branding without a website, or the reverse?",
    "Either. Most clients come to us for both, since brand and site work best designed together, but we take standalone engagements too.",
  ],
  [
    "What is GEO and AI optimization?",
    "Generative Engine Optimization: structuring and writing a site so AI search tools and answer engines can read, understand, and cite it. It sits alongside traditional SEO rather than replacing it.",
  ],
  [
    "Do you build ecommerce sites?",
    "Yes, primarily on WooCommerce and custom stacks, depending on what the store needs to do.",
  ],
  [
    "Do you offer support after launch?",
    "Yes. Managed hosting and maintenance, with a 24-hour turnaround on support requests.",
  ],
  [
    "Do you work with clients outside Nigeria?",
    "Yes. Most communication happens over email and WhatsApp, so location is not a constraint.",
  ],
  [
    "How much does a project cost?",
    "Pricing depends on scope. Reach out and we will walk you through it.",
  ],
];

const EASE_SMOOTH = "cubic-bezier(0.16,1,0.3,1)";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLSummaryElement>(null);
  const busyRef = useRef(false);

  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  const onSummaryClick = (e: ReactMouseEvent<HTMLElement>) => {
    const details = detailsRef.current;
    const body = bodyRef.current;
    if (!details || !body || busyRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.preventDefault();
    const p = body.firstElementChild as HTMLElement | null;
    busyRef.current = true;
    if (details.open) {
      body.style.height = `${body.offsetHeight}px`;
      void body.offsetHeight;
      const shrink = body.animate([{ height: body.style.height }, { height: "0px" }], {
        duration: 450,
        easing: EASE_SMOOTH,
      });
      const fade = p?.animate([{ opacity: "1" }, { opacity: "0" }], {
        duration: 300,
        easing: "ease-out",
        fill: "forwards",
      });
      shrink.onfinish = () => {
        details.open = false;
        body.style.height = "";
        fade?.cancel();
        busyRef.current = false;
      };
    } else {
      details.open = true;
      body.style.height = "0px";
      void body.offsetHeight;
      const target = body.scrollHeight;
      const grow = body.animate([{ height: "0px" }, { height: `${target}px` }], {
        duration: 550,
        easing: EASE_SMOOTH,
      });
      const fade = p?.animate([{ opacity: "0" }, { opacity: "1" }], {
        duration: 350,
        easing: "ease-out",
        fill: "forwards",
      });
      grow.onfinish = () => {
        body.style.height = "";
        fade?.cancel();
        busyRef.current = false;
      };
    }
  };

  const onKeyDown = (e: ReactMouseEvent<HTMLSummaryElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      // Let the native details handling work
    }
  };

  return (
    <details ref={detailsRef} className="faq-item" id={`faq-item-${index}`}>
      <summary
        ref={summaryRef}
        id={triggerId}
        aria-controls={panelId}
        aria-expanded={detailsRef.current?.open || false}
        onClick={onSummaryClick}
        onKeyDown={onKeyDown}
      >
        {q}
        <span className="faq-icon" aria-hidden="true" />
      </summary>
      <div
        ref={bodyRef}
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="faq-a"
      >
        <p>{a}</p>
      </div>
    </details>
  );
}

export function FAQ() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
      <div className="section-head">
        <h2>FAQ</h2>
      </div>
      <div className="faq-list">
        {ITEMS.map(([q, a], index) => (
          <FaqItem key={q} q={q} a={a} index={index} />
        ))}
      </div>
    </section>
  );
}