import Link from "next/link";

export function LogoMark({ size = 44 }: { size?: number }) {
  const px = size;
  return (
    <div
      className="grid place-items-center rounded-2xl border shadow-sm"
      style={{
        width: px,
        height: px,
        background: "rgb(var(--surface))",
        borderColor: "rgb(var(--border))",
      }}
      aria-label="Monograma NG"
      title="NG"
    >
      {/* Monograma delicado (stroke) */}
      <svg
        width={Math.floor(px * 0.70)}
        height={Math.floor(px * 0.70)}
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M16 46V18l20 26V18"
          fill="none"
          stroke="rgb(var(--accent))"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 26c-2-5-7-8-13-8-9 0-15 6-15 14s6 14 15 14c6 0 11-3 13-8v-6H39"
          fill="none"
          stroke="rgb(var(--accent))"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* detalhe editorial: ponto pequeno */}
        <circle cx="49.5" cy="46" r="1.6" fill="rgb(var(--accent))" opacity="0.75" />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 no-underline hover:no-underline">
      <div className="transition-transform duration-300 group-hover:scale-[1.02]">
        <LogoMark />
      </div>

      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight" style={{ color: "rgb(var(--text))" }}>
          Nathalia dos Santos Guaraciaba
        </div>
        <div className="text-xs" style={{ color: "rgb(var(--muted))" }}>
          Advogada — OAB/RJ nº 25.832
        </div>
      </div>
    </Link>
  );
}
