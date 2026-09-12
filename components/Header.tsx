"use client";
import { useEffect, useState } from "react";
import { ArrowIcon, DotsIcon } from "./ui/icons";
import { Ph } from "./ui/Ph";

export function Header() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-overlay-open", overlayOpen);
    const closeBtn = document.getElementById("overlayClose");
    if (closeBtn) closeBtn.classList.toggle("is-visible", overlayOpen);
    // Lenis handling
    // @ts-ignore
    if (overlayOpen && (window as any).__lenis) (window as any).__lenis.stop();
    // @ts-ignore
    if (!overlayOpen && (window as any).__lenis) (window as any).__lenis.start();
  }, [overlayOpen]);

  // Accessibility: Escape closes, focus trap, return focus
  useEffect(() => {
    if (!overlayOpen) return;
    const overlay = document.getElementById("navOverlay");
    const focusable = overlay?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex="0"]'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    // focus first element when opened
    setTimeout(() => (first as HTMLElement)?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOverlayOpen(false);
        document.getElementById("navToggle")?.focus();
      }
      if (e.key === "Tab" && focusable && focusable.length > 1) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement)?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement)?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [overlayOpen]);

  // overlay services carousel: drag (same feel as featured)
  useEffect(() => {
    if (!overlayOpen) return;
    const el = document.getElementById("overlayCarousel");
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
    const onUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };
    // Kill native image ghost-drag so dragging always scrolls the carousel.
    const onDragStart = (e: DragEvent) => {
      e.preventDefault();
    };
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("dragstart", onDragStart);
    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("dragstart", onDragStart);
    };
  }, [overlayOpen]);
  // header hide on scroll
  useEffect(() => {
    const hdr = document.querySelector(".header") as HTMLElement;
    let lastY = window.scrollY;
    let ticking = false;
    function onScrollY(y: number) {
      if (!ticking) {
        requestAnimationFrame(() => {
          const down = y > lastY && y > 100;
          if (hdr) hdr.classList.toggle("is-hidden", down);
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    }
    const handler = () => onScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    // also listen to Lenis scroll if present
    // @ts-ignore
    const lenis = (window as any).__lenis;
    if (lenis) lenis.on("scroll", ({ scroll }: any) => onScrollY(scroll));
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header className="header">
        <div className="wrap header-inner">
          <a href="/" className="brand" aria-label="The Arcanum Agency">
            <img className="brand-logo-desktop" src="/assets/logo_desktop.svg" alt="The Arcanum Agency" width={512} height={225} />
            <img className="brand-logo-mobile" src="/assets/logo_mobile.svg" alt="The Arcanum Agency" width={200} height={225} />
          </a>
          <nav className="nav" aria-label="Primary" id="primaryNav">
            <a href="#work" className="active" aria-current="page">Work</a>
            <a href="#about">About</a>
            <a href="#journal">News</a>
            <a href="#services">Services</a>
            <a href="#journal">Portfolio</a>
            <a href="mailto:hello@thearcanum.agency?subject=Request%20a%20consultation%20-%20The%20Arcanum%20Agency" aria-label="Request a consultation via email">Reach out</a>
          </nav>
          <button
            id="navToggle"
            className="nav-toggle"
            aria-label={overlayOpen ? "Close menu" : "Open menu"}
            aria-expanded={overlayOpen}
            aria-controls="navOverlay"
            onClick={() => setOverlayOpen((v) => !v)}
          >
            <span className="dots-desktop" aria-hidden="true"><DotsIcon /></span>
            <span className="dots-mobile">MENU</span>
          </button>
        </div>
      </header>

      <button
        id="overlayClose"
        className={`nav-overlay-close ${overlayOpen ? "is-visible" : ""}`}
        aria-label="Close menu"
        onClick={() => setOverlayOpen(false)}
      >
        ✕
      </button>

      <div
        id="navOverlay"
        className={`nav-overlay ${overlayOpen ? "is-open" : ""}`}
        aria-hidden={!overlayOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOverlayOpen(false);
        }}
      >
        <div className="nav-overlay-inner">
          <nav className="overlay-nav" aria-label="Primary overlay">
            <span className="overlay-label">Navigate</span>
            <a href="#work" onClick={() => setOverlayOpen(false)}>Work</a>
            <a href="#about" onClick={() => setOverlayOpen(false)}>About</a>
            <a href="#journal" onClick={() => setOverlayOpen(false)}>News</a>
            <a href="#services" onClick={() => setOverlayOpen(false)}>Services</a>
            <a href="#journal" onClick={() => setOverlayOpen(false)}>Portfolio</a>
            <a href="mailto:hello@thearcanum.agency?subject=Request%20a%20consultation%20-%20The%20Arcanum%20Agency" className="muted" onClick={() => setOverlayOpen(false)}>
              hello@thearcanum.agency — Request a consultation <ArrowIcon />
            </a>
          </nav>
          <div className="overlay-services">
            <div className="section-head">
              <h2>Services</h2>
              <a href="#services" className="btn btn--ghost" onClick={() => setOverlayOpen(false)}>
                View all <ArrowIcon />
              </a>
            </div>
            <div className="carousel overlay-carousel" id="overlayCarousel" aria-label="Services carousel">
              {[
                { t: "Web Design & Development", d: "Bespoke builds from architecture through launch, on WordPress or a custom stack.", img: "/assets/img/web-dev.jpg", alt: "Website design and build" },
                { t: "Branding & Identity", d: "Logo, visual identity, and guidelines that carry consistently everywhere.", img: "/assets/img/branding.jpg", alt: "Brand identity system" },
                { t: "SEO & AI Optimization", d: "Search-ready foundations tuned for traditional and generative engines.", img: "/assets/img/seo.jpg", alt: "Search analytics" },
                { t: "Ecommerce & Website Care", d: "Storefronts built to convert, plus hosting and care after launch.", img: "/assets/img/ecommerce.jpg", alt: "Checkout and payment" },
              ].map((s) => (
                <div key={s.t} className="card">
                  <div style={{ aspectRatio: 1.36 as any, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(229,229,234,0.14)", overflow: "hidden" }}>
                    <Ph src={s.img} alt={s.alt} sizes="(max-width: 860px) 82vw, 360px" />
                  </div>
                  <div className="card-body">
                    <span className="eyebrow">Service</span>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                    <a href="#services" className="arrow-circle" aria-label={`Explore ${s.t}`}>
                      <span aria-hidden="true"><ArrowIcon /></span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
