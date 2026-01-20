import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const bg = "rgb(250 250 249)";
  const panel = "rgba(255,255,255,0.95)";
  const border = "rgba(226,232,240,1)";
  const text = "rgb(17 24 39)";
  const muted = "rgb(71 85 105)";
  const ink1 = "rgba(15,76,92,0.95)";
  const ink2 = "rgba(12,45,56,0.95)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: bg,
          padding: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 34,
            background: panel,
            border: `1px solid ${border}`,
            boxShadow: "0 30px 80px -60px rgba(2,6,23,0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px",
          }}
        >
          <div
            style={{
              height: 6,
              width: "100%",
              borderRadius: 999,
              background: "rgba(15,76,92,0.22)",
            }}
          />

          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: 28,
                border: `1px solid ${border}`,
                background: "white",
                boxShadow: "0 10px 30px -20px rgba(2,6,23,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="90" height="90" viewBox="0 0 120 120">
                <defs>
                  <linearGradient id="ink" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={ink1} />
                    <stop offset="100%" stopColor={ink2} />
                  </linearGradient>
                </defs>

                <path
                  d="M28 86V34 M28 34 L70 86 M70 86V34"
                  fill="none"
                  stroke="url(#ink)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M92 50 C88 40 79 34 68 34 C52 34 40 46 40 60 C40 74 52 86 68 86 C82 86 92 77 92 64 V62 H73"
                  fill="none"
                  stroke="url(#ink)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle cx="92" cy="86" r="4.4" fill="rgba(15,76,92,0.55)" />
              </svg>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: -1, color: text }}>
                Nathalia dos Santos Guaraciaba
              </div>
              <div style={{ fontSize: 26, color: muted }}>
                Advogada — OAB/RJ nº 25.832
              </div>
              <div style={{ fontSize: 22, color: muted }}>
                Direito Civil • Rio de Janeiro/RJ
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
            <div style={{ fontSize: 18, color: muted }}>
              Conteúdo informativo. Sem promessa de resultado.
            </div>

            <div
              style={{
                fontSize: 18,
                color: muted,
                border: `1px solid ${border}`,
                padding: "10px 14px",
                borderRadius: 999,
                background: "white",
              }}
            >
              nathaliaguaraciaba.adv.br
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
