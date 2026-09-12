"use client";
import { useRef, type MouseEvent as ReactMouseEvent } from "react";

const ITEMS: Array<[string, string]> = [
  ["WHAT DO YOU DO?", "We design and build the full digital presence for a business: the website, the brand identity behind it, and the search and AI systems that make it findable."],
  ["ARE YOU TAKING ON NEW CLIENTS?", "The Arcanum Agency works with a small, chosen client list at any time. Reach out and we will tell you if there is room."],
  ["WHAT IS THE PROCESS LIKE?", "A short discovery conversation, then a proposal. Once a project starts, you hear from us at defined milestones rather than daily check ins."],
  ["HOW LONG DOES A PROJECT TAKE?", "It depends on scope. We will give you a real timeline once we understand what you need built."],
  ["WHAT PLATFORMS DO YOU BUILD ON?", "WordPress for content driven sites, a fully custom stack when a project calls for more control. We choose based on what the site needs to do."],
  ["DO YOU OFFER BRANDING WITHOUT A WEBSITE, OR THE REVERSE?", "Either. Most clients come to us for both, since brand and site work best designed together, but we take standalone engagements too."],
  ["WHAT IS GEO AND AI OPTIMIZATION?", "Generative Engine Optimization: structuring and writing a site so AI search tools and answer engines can read, understand, and cite it. It sits alongside traditional SEO rather than replacing it."],
  ["DO YOU BUILD ECOMMERCE SITES?", "Yes, primarily on WooCommerce and custom stacks, depending on what the store needs to do."],
  ["DO YOU OFFER SUPPORT AFTER LAUNCH?", "Yes. Managed hosting and maintenance, with a 24 hour turnaround on support requests."],
  ["DO YOU WORK WITH CLIENTS OUTSIDE NIGERIA?", "Yes. Most communication happens over email and WhatsApp, so location is not a constraint."],
  ["HOW MUCH DOES A PROJECT COST?", "Pricing depends on scope. Reach out and we will walk you through it."],
];

const EASE_SMOOTH = "cubic-bezier(0.16,1,0.3,1)";

function FaqItem({ q, a }: { q: string; a: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);

  const onSummaryClick = (e: ReactMouseEvent<HTMLElement>) => {
    const details = detailsRef.current;
    const body = bodyRef.current;
    if (!details || !body || busyRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // native instant toggle
    e.preventDefault();
    const p = body.firstElementChild as HTMLElement | null;
    busyRef.current = true;
    if (details.open) {
      // Animated close: shrink while still open, then close natively.
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
      // Animated open: open natively, then grow from zero.
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

  return (
    <details ref={detailsRef} className="faq-item">
      <summary onClick={onSummaryClick}>{q}</summary>
      <div ref={bodyRef} className="faq-a">
        <p>{a}</p>
      </div>
    </details>
  );
}

export function FAQ() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--arc-mist)" }}>
      <div className="section-head">
        <h2>FAQ</h2>
      </div>
      <div className="faq-list">
        {ITEMS.map(([q, a]) => (
          <FaqItem key={q} q={q} a={a} />
        ))}
      </div>
    </section>
  );
}
