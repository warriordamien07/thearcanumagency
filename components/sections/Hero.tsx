"use client";
import { Button } from "../ui/Button";

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
          <Button href="mailto:hello@thearcanum.agency?subject=Enquiry%2C%20The%20Arcanum%20Agency" variant="plum">
            Start a conversation →
          </Button>
          <Button variant="ghost" onClick={copyEmail} ariaLabel="Copy email">
            <span id="copyBtn">hello@thearcanum.agency</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
