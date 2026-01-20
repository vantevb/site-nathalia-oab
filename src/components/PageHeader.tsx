import Link from "next/link";

type Crumb = { label: string; href: string };

export default function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  return (
    <header className="space-y-3">
      {crumbs?.length ? (
        <nav className="flex flex-wrap items-center gap-2 text-sm" aria-label="Breadcrumb">
          {crumbs.map((c, idx) => (
            <span key={c.href} className="flex items-center gap-2">
              <Link
                href={c.href}
                className="font-semibold hover:underline"
                style={{ color: "rgb(var(--accent))" }}
              >
                {c.label}
              </Link>
              {idx < crumbs.length - 1 ? (
                <span aria-hidden="true" style={{ color: "rgb(var(--muted))" }}>
                  /
                </span>
              ) : null}
            </span>
          ))}
        </nav>
      ) : null}

      {eyebrow ? (
        <div
          className="text-xs font-semibold tracking-[0.22em] uppercase"
          style={{ color: "rgb(var(--muted))" }}
        >
          {eyebrow}
        </div>
      ) : null}

      <h1 className="text-3xl font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
        {title}
      </h1>

      {description ? (
        <p className="max-w-3xl text-sm leading-relaxed" style={{ color: "rgb(var(--muted))" }}>
          {description}
        </p>
      ) : null}

      <div className="h-[2px] w-full" style={{ backgroundColor: "rgba(15,76,92,0.18)" }} />
    </header>
  );
}
