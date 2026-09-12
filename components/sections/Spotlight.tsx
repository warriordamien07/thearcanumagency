"use client";
import { useEffect, useRef } from "react";
import { Ph } from "../ui/Ph";

export function Spotlight() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const spot = ref.current;
    if (!spot) return;
    if (typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => document.body.classList.toggle("spotlight-active", e.isIntersecting));
        },
        { threshold: 0, rootMargin: "-15% 0px -15% 0px" }
      );
      io.observe(spot);
      return () => io.disconnect();
    } else {
      const onScroll = () => {
        const r = spot.getBoundingClientRect();
        const inView = r.top < window.innerHeight * 0.85 && r.bottom > window.innerHeight * 0.15;
        document.body.classList.toggle("spotlight-active", inView);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <section className="spotlight" id="spotlight" ref={ref}>
      <div className="spotlight-copy">
        <h2>The Arcanum Agency helps brands connect with culture</h2>
        <div style={{ marginTop: 8, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "flex-start" }}>
          <a href="#about" className="btn btn--ghost">
            See how →
          </a>
        </div>
      </div>
      <div className="spotlight-media" aria-label="Studio work">
        <Ph src="/assets/img/spotlight.jpg" alt="Minimal white architecture viewed from below" sizes="(max-width: 900px) 100vw, 480px" style={{ aspectRatio: "4/5" }} />
      </div>
    </section>
  );
}
