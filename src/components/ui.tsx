import Link from "next/link";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="space-y-2">
      {kicker ? (
        <div className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400">
          {kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50">{title}</h2>
      {subtitle ? <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-700/70 bg-slate-900/40 shadow-sm backdrop-blur">
      <div className="p-7">{children}</div>
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/30 px-3 py-1 text-xs font-medium text-slate-200">
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
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-400/30";
  const primary = "text-white hover:opacity-95";
  const outline = "border border-slate-700/70 bg-transparent text-slate-100 hover:bg-slate-900/40";

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
