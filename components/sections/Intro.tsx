import { ArrowIcon } from "../ui/icons";

export function Intro() {
  return (
    <section
      className="section"
      aria-label="The Arcanum Agency is a Web Design & Development Studio"
      style={{
        borderTop: "1px solid var(--arc-mist)",
        borderBottom: "1px solid var(--arc-mist)",
        paddingBlock: "var(--arc-section)",
        marginLeft: "calc(-1 * var(--arc-pad))",
        marginRight: "calc(-1 * var(--arc-pad))",
        paddingLeft: "var(--arc-pad)",
        paddingRight: "var(--arc-pad)",
        width: "calc(100% + 2 * var(--arc-pad))",
      }}
    >
      <style>{`
      .intro-grid{display:grid;gap:clamp(24px,4vw,48px);align-items:stretch}
      @media(min-width:900px){.intro-grid{grid-template-columns:0.92fr 1.08fr;align-items:stretch}}
      @media(max-width:899px){.intro-grid{grid-template-columns:1fr 86px;gap:16px;align-items:end}}
      .intro-copy{align-self:center;padding-block:8px}
      .intro-copy h2{font-family:var(--arc-display);font-size:clamp(24px,3.2vw,38px);line-height:1.05;letter-spacing:-0.03em;margin:0;text-transform:uppercase;max-width:18ch}
      .intro-copy p{color:#5a5870;font-size:clamp(16px,1.4vw,18px);line-height:26px;max-width:42ch;margin:14px 0 0}
      .intro-mark{justify-self:center;align-self:center;display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:220px;padding:16px}
      .intro-mark img{width:min(100%,200px);height:auto;aspect-ratio:200.546/225;object-fit:contain;object-position:center;opacity:0.95;display:block;transform:none}
      .intro-mark .logo-desktop{display:none !important}
      .intro-mark .logo-mobile{display:block !important; width:min(100%,200px);height:auto}
      @media(min-width:900px){
        .intro-mark{justify-self:stretch;align-self:start;min-height:0;height:auto;padding:0;display:flex;align-items:flex-start;justify-content:flex-end;overflow:visible;margin-top:-18px;margin-right:-8px}
        .intro-mark img{width:min(100%,240px);transform:translateY(-6px)}
      }
      @media(max-width:899px){.intro-mark{min-height:0;height:auto;padding:0;align-self:end;justify-self:end;margin-top:0;aspect-ratio:auto} .intro-mark img{width:72px} }
      `}</style>
      <div className="intro-grid">
        <div className="intro-copy">
          <h2>The Arcanum Agency is a Web Design &amp; Development Studio.</h2>
          <p>We build brand identities, ecommerce experiences, and the search and AI discovery systems behind them, for businesses that want to be unmistakable.</p>
          <a href="#about" className="btn btn--ghost" style={{ marginTop: 20 }}>
            Know more <ArrowIcon />
          </a>
        </div>
        <div className="intro-mark" aria-hidden="true">
          <img className="logo-mobile" src="/assets/logo_mobile.svg" alt="" width={200} height={225} />
        </div>
      </div>
    </section>
  );
}
