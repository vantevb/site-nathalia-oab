import Link from "next/link";

export function LogoMark({ size = 44 }: { size?: number }) {
  const px = size;

  return (
    <div
      className="grid place-items-center rounded-[18px] border bg-white shadow-[0_10px_30px_-20px_rgba(2,6,23,0.35)]"
      style={{
        width: px,
        height: px,
        borderColor: "rgb(var(--border))",
      }}
      aria-label="Monograma NG"
      title="NG"
    >
      {/* Monograma NG — monoline delicado (editorial) */}
      <svg
        width={Math.floor(px * 0.72)}
        height={Math.floor(px * 0.72)}
        viewBox="0 0 120 120"
        role="img"
        aria-hidden="true"
      >
        <defs>
          {/* leve variação (quase imperceptível) pro traço parecer premium */}
          <linearGradient id="ink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(15,76,92,0.95)" />
            <stop offset="100%" stopColor="rgba(12,45,56,0.95)" />
          </linearGradient>
        </defs>

        {/* N */}
        <path
          d="M28 86V34
             M28 34 L70 86
             M70 86V34"
          fill="none"
          stroke="url(#ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* G (aberta, editorial) */}
        <path
          d="M92 50
             C88 40 79 34 68 34
             C52 34 40 46 40 60
             C40 74 52 86 68 86
             C82 86 92 77 92 64
             V62
             H73"
          fill="none"
          stroke="url(#ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* detalhe: ponto mínimo (assinatura) */}
        <circle cx="92" cy="86" r="2.2" fill="rgba(15,76,92,0.55)" />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 no-underline hover:no-underline">
      <div className="transition-transform duration-300 ease-out group-hover:scale-[1.03]">
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
