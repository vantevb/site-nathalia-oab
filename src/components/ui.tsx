import Link from "next/link";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export function Card({
  title,
  children,
  footer,
}: {
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="p-8">
        {title ? <h2 className="text-base font-semibold tracking-tight text-slate-900">{title}</h2> : null}
        <div className={title ? "mt-3" : ""}>{children}</div>
      </div>
      {footer ? <div className="border-t border-slate-200 p-6">{footer}</div> : null}
    </section>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition";
  const primary =
    "text-white shadow-sm hover:opacity-95";
  const outline =
    "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50";

  return (
    <Link
      href={href}
      className={[base, variant === "primary" ? primary : outline].join(" ")}
      style={variant === "primary" ? { backgroundColor: "rgb(var(--accent))" } : undefined}
    >
      {children}
    </Link>
  );
}
