"use client";
import { Button } from "../ui/Button";
import { ArrowIcon } from "../ui/icons";

export function Hero() {
  const copyEmail = async () => {
    const email = "hello@thearcanum.agency";
    const btn = document.getElementById("copyBtn") as HTMLButtonElement | null;
    try {
      await navigator.clipboard.writeText(email);
      if (btn) {
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = email), 2000);
      }
    } catch {
      location.href = "mailto:" + email;
    }
  };

  return (
    <section className="hero">
      <div>
        <h1 className="display">CURRENTLY WORKING PRIVATELY.</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          We keeps a small, chosen client list. No open roster. Reach out and we’ll tell you if there’s room.
        </p>
        <div className="hero-actions">
          <Button href="mailto:hello@thearcanum.agency?subject=Request%20a%20consultation%20-%20The%20Arcanum%20Agency" variant="plum">
            Request a consultation <ArrowIcon />
          </Button>
          <Button variant="ghost" onClick={copyEmail} ariaLabel="Copy email address to clipboard">
            <span id="copyBtn">hello@thearcanum.agency</span>
          </Button>
        </div>
        <p className="hero-meta" style={{ marginTop: 12, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>Currently working privately — limited engagements, by referral</p>
      </div>
    </section>
  );
}
