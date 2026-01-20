import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: { slug: string } }) {
  const bg = "rgb(250 250 249)";
  const panel = "rgba(255,255,255,0.95)";
  const border = "rgba(226,232,240,1)";
  const text = "rgb(17 24 39)";
  const muted = "rgb(71 85 105)";
  const ink1 = "rgba(15,76,92,0.95)";
  const ink2 = "rgba(12,45,56,0.95)";

  let meta;
  try {
    meta = getPostBySlug(params.slug).meta;
  } catch {
    meta = { title: "Conteúdo", date: "", tags: [], excerpt: "", slug: params.slug };
  }

  const title = String(meta.title || "Conteúdo").slice(0, 92);
  const date = meta.date ? String(meta.date) : "";
  const tags = Array.isArray(meta.tags) ? meta.tags.slice(0, 3) : [];

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

          <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
            <div
              style={{
                width: 116,
                height: 116,
                borderRadius: 28,
                border: `1px solid ${border}`,
                background: "white",
                boxShadow: "0 10px 30px -20px rgba(2,6,23,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: "0 0 auto",
                marginTop: 2,
              }}
            >
              <svg width="88" height="88" viewBox="0 0 120 120">
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

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ fontSize: 18, color: muted }}>
                Conteúdos • Direito Civil
              </div>

              <div
                style={{
                  fontSize: 54,
                  fontWeight: 800,
                  letterSpacing: -1,
                  lineHeight: 1.08,
                  color: text,
                }}
              >
                {title}
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {date ? (
                  <div
                    style={{
                      fontSize: 18,
                      color: muted,
                      border: `1px solid ${border}`,
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "white",
                    }}
                  >
                    {date}
                  </div>
                ) : null}

                {tags.map((t) => (
                  <div
                    key={t}
                    style={{
                      fontSize: 18,
                      color: muted,
                      border: `1px solid ${border}`,
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "white",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 20, color: muted, marginTop: 6 }}>
                Nathalia dos Santos Guaraciaba • OAB/RJ nº 25.832
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
