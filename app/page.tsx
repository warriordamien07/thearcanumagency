"use client";
import { useEffect } from "react";
import { Hero } from "../components/sections/Hero";
import { Intro } from "../components/sections/Intro";
import { Featured } from "../components/sections/Featured";
import { Spotlight } from "../components/sections/Spotlight";
import { Work } from "../components/sections/Work";
import { Services } from "../components/sections/Services";
import { Journal } from "../components/sections/Journal";
import { FAQ } from "../components/sections/FAQ";

export default function Page() {
  // Reveal + Lenis — same behavior as HTML version
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Reveal
    const els = document.querySelectorAll<HTMLElement>(".hero, .intro-grid, .section-head, #work .card, #journal .card, .service-sticky, #about, .spotlight");
    els.forEach((el, i) => {
      el.classList.add("reveal");
      if (i % 3 === 1) el.classList.add("reveal-delay-1");
      if (i % 3 === 2) el.classList.add("reveal-delay-2");
    });
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => ro.observe(el));
    const hero = document.querySelector(".hero");
    if (hero) hero.classList.add("is-visible");

    // Drag tooltip is owned by <DragCursor/> in the root layout.

    // Lenis init (same config as HTML) — guarded against double-init
    // (load listener + timeout can both fire, plus StrictMode remount).
    // Bundled via npm + dynamically imported so it stays out of the
    // critical bundle and off any third-party origin.
    async function initLenis() {
      // @ts-ignore
      if ((window as any).__lenis || (initLenis as any)._done) return;
      (initLenis as any)._done = true;
      try {
        const { default: Lenis } = await import("lenis");
        // @ts-ignore
        if ((window as any).__lenis) return;
        const lenis = new Lenis({
          duration: 1.75,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          wheelMultiplier: 1.0,
          touchMultiplier: 1.35,
          smoothWheel: true,
          gestureOrientation: "vertical",
        });
        // @ts-ignore
        (window as any).__lenis = lenis;
        let lastY = window.scrollY;
        function raf(t: number) {
          lenis.raf(t);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        lenis.on("scroll", ({ scroll }: any) => {
          const hdr = document.querySelector(".header") as HTMLElement | null;
          if (hdr) {
            hdr.classList.toggle("is-hidden", scroll > lastY && scroll > 100);
            lastY = scroll;
          }
        });
        // anchor links via Lenis for super smooth (offset for sticky header)
        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
          a.addEventListener(
            "click",
            (e) => {
              const href = a.getAttribute("href");
              if (href && href.length > 1) {
                const t = document.querySelector(href);
                if (t) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  lenis.scrollTo(t as HTMLElement, {
                    offset: -80,
                    duration: 1.5,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                  });
                  history.pushState(null, "", href);
                }
              }
            },
            { capture: true }
          );
        });
      } catch {
        // Chunk failed (e.g. offline): let a later trigger retry.
        (initLenis as any)._done = false;
      }
    }
    if (document.readyState === "complete") initLenis();
    else window.addEventListener("load", initLenis);
    setTimeout(initLenis, 600);

    // Smooth scroll for anchors (fallback)
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        // @ts-ignore
        if ((window as any).__lenis) return;
        const href = a.getAttribute("href");
        if (href && href.length > 1) {
          const t = document.querySelector(href);
          if (t) {
            e.preventDefault();
            const top = (t as HTMLElement).getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: "smooth" });
            history.pushState(null, "", href);
          }
        }
      });
    });

    return () => {
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <Intro />
      <Featured />
      <Spotlight />
      <Work />
      <Services />
      <Journal />
      <FAQ />
    </>
  );
}
