import { ArrowIcon } from "./icons";

type CardProps = {
  href?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  arrow?: boolean;
  media?: React.ReactNode;
};

export function Card({ href, eyebrow, title, desc, arrow = true, media }: CardProps) {
  const inner = (
    <>
      {media ? <div style={{ aspectRatio: 1.36 as any, background: "var(--arc-mist)", border: "1px solid var(--arc-mist)" }}>{media}</div> : <div style={{ aspectRatio: 1.36 as any, background: "var(--arc-mist)", border: "1px solid var(--arc-mist)" }} />}
      <div className="card-body">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <h3>{title}</h3>
          {arrow && <span className="card-arrow"><ArrowIcon /></span>}
        </div>
        {desc && <p>{desc}</p>}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className="card">
        {inner}
      </a>
    );
  }
  return <div className="card">{inner}</div>;
}

export function CarouselCard({ title, desc, label }: { title: string; desc: string; label: string }) {
  return (
    <div className="card">
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
        {label}
      </div>
      <div className="card-body">
        <span className="eyebrow">Engagement</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
