import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const bg = "rgb(250 250 249)";
  const border = "rgba(226,232,240,1)";
  const ink1 = "rgba(15,76,92,0.95)";
  const ink2 = "rgba(12,45,56,0.95)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: bg,
          borderRadius: 18,
          border: `1px solid ${border}`,
          boxShadow: "0 10px 30px -20px rgba(2,6,23,0.35)",
        }}
      >
        <svg width="50" height="50" viewBox="0 0 120 120">
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
    ),
    size
  );
}
