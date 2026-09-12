export function Section({ id, children, className = "section", style }: { id?: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <section id={id} className={className} style={style}>
      {children}
    </section>
  );
}

export function SectionHead({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {action}
    </div>
  );
}
