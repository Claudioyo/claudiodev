import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3.5 font-medium transition";

  const variants = {
    primary:
      "bg-[var(--coffee-dark)] text-[var(--coffee-contrast)] hover:-translate-y-px hover:shadow-lg",
    secondary:
      "border border-[var(--coffee-light)] bg-[var(--surface)] text-[var(--coffee-dark)] hover:-translate-y-px hover:border-[var(--coffee-medium)] hover:shadow-sm",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}