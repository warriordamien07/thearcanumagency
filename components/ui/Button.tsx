import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "plum" | "ghost" | "paper";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

export function Button({ children, href, variant = "ghost", type = "button", onClick, className = "", ariaLabel }: Props) {
  const cls = `btn btn--${variant} ${className}`.trim();
  if (href) {
    // mailto or anchor
    if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) {
      return (
        <a href={href} className={cls} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
