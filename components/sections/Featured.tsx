"use client";
import { useEffect, useRef } from "react";
import { SectionHead } from "../ui/Section";
import { ArrowIcon } from "../ui/icons";

export function Featured() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isDown = false,
      startX = 0,
      scrollLeft = 0;
    const onDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("dragging");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onLeave = () => {
      isDown = false;
      el.classList.remove("dragging");
    };
    const onUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };
    // Kill native image ghost-drag so dragging always scrolls the carousel.
    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("dragstart", onDragStart);
    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return (
    <section className="section" aria-label="Featured engagements">
      <SectionHead title="Featured engagements" action={<a href="#work" className="btn btn--ghost">View all <ArrowIcon /></a>} />
      <div className="carousel" id="featuredCarousel" ref={ref} aria-label="Featured engagements carousel">
        {[
          ["Private practice", "By referral or direct enquiry, limited at a time. We partner closely with founders and teams to shape focused, durable outcomes."],
          ["Limited engagements", "Scope defined before a proposal is issued. Fewer concurrent engagements ensures depth, continuity, and senior attention throughout."],
          ["By referral", "Select work available on request, spare by design. Provenance is shown through the work itself, not volume or publicity."],
          ["Senior attention", "Direct access to principals from inquiry to delivery, with clear scope and deliberate pace from start to finish."],
          ["Continuity", "Relationships over transactions. We stay close beyond launch to refine, compound value, and keep the brand unmistakable."],
        ].map(([t, d]) => (
          <div key={t} className="card" tabIndex={0} role="button" aria-label={`${t} — Read more`}>
            <div
              style={{
                aspectRatio: 1.36 as any,
                background: "transparent",
                border: "1px solid var(--arc-mist)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5a5870",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {t}
            </div>
            <div className="card-body">
              <span className="eyebrow">Engagement</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
