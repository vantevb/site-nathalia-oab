import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const accent = "#0F4C5C";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "64px",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        {/* top bar */}
        <div style={{ height: 10, background: accent, borderRadius: 999 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1, color: "#09090B" }}>
            Nathalia dos Santos Guaraciaba
          </div>

          <div style={{ fontSize: 28, color: "#3F3F46", lineHeight: 1.4 }}>
            Advogada — OAB/RJ nº 25.832
          </div>

          <div style={{ fontSize: 26, color: "#3F3F46" }}>
            Direito Civil • Niterói • São Gonçalo • Rio de Janeiro/RJ
          </div>

          <div style={{ marginTop: 10, fontSize: 22, color: "#52525B" }}>
            Conteúdo informativo. Sem promessa de resultado.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 14,
                height: 14,
                background: accent,
                borderRadius: 999,
              }}
            />
            <div style={{ fontSize: 22, color: "#3F3F46" }}>site-nathalia-oab.vercel.app</div>
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#71717A",
              border: "1px solid #E4E4E7",
              padding: "10px 14px",
              borderRadius: 999,
              background: "#FAFAFA",
            }}
          >
            Atuação institucional
          </div>
        </div>
      </div>
    ),
    size
  );
}
