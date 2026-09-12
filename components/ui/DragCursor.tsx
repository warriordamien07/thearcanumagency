"use client";
import { useEffect } from "react";

// Floating "DRAG" bubble that follows the pointer over carousels.
// Rendered once in the root layout so it works for every carousel
// (featured + overlay) independent of page remounts or reduced-motion guards.
export function DragCursor() {
  useEffect(() => {
    const el = document.getElementById("dragCursor");
    if (!el) return;

    // Custom bubble only makes sense with a fine pointer (mouse/trackpad).
    // Otherwise keep the native cursor and do nothing.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;
    document.body.classList.add("has-drag-cursor");

    let raf = 0;
    let scheduled = false;
    let mx = -200;
    let my = -200;
    // Park off-screen until the first mousemove so it never flashes at 0,0.
    el.style.translate = `${mx}px ${my}px`;

    const place = () => {
      scheduled = false;
      // CSS `translate` property: composited, and independent from the
      // `transform` used for the center/scale animation (no layout thrash).
      el.style.translate = `${mx}px ${my}px`;
    };

    const overCard = (e: MouseEvent) =>
      e.target instanceof Element && !!e.target.closest(".carousel .card");

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!scheduled) {
        scheduled = true;
        raf = requestAnimationFrame(place);
      }
      const on = overCard(e);
      el.classList.toggle("is-visible", on);
      if (!on) el.classList.remove("is-dragging");
    };
    const onDown = (e: MouseEvent) => {
      if (overCard(e)) el.classList.add("is-dragging");
    };
    const onUp = () => el.classList.remove("is-dragging");
    const hide = () => el.classList.remove("is-visible", "is-dragging");
    // `mouseleave` doesn't fire on `document`; pointer leaving the window
    // surfaces as `mouseout` with a null relatedTarget.
    const onOut = (e: MouseEvent) => {
      if (!e.relatedTarget) hide();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    // Release outside the window / alt-tab would otherwise stick states.
    window.addEventListener("blur", hide);
    document.addEventListener("mouseout", onOut);
    // Cards move under a resting pointer while scrolling — hide until the
    // next mousemove re-evaluates instead of freezing mid-screen.
    window.addEventListener("scroll", hide, { passive: true, capture: true });

    const onFineChange = (e: MediaQueryListEvent) => {
      if (e.matches) document.body.classList.add("has-drag-cursor");
      else {
        hide();
        document.body.classList.remove("has-drag-cursor");
      }
    };
    fine.addEventListener?.("change", onFineChange);

    return () => {
      if (scheduled) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("blur", hide);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("scroll", hide, { capture: true });
      fine.removeEventListener?.("change", onFineChange);
      document.body.classList.remove("has-drag-cursor");
    };
  }, []);

  return (
    <div id="dragCursor" className="drag-cursor" aria-hidden="true">
      <span>DRAG</span>
    </div>
  );
}
