import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  const accent = "#0F4C5C";

  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
          border: "2px solid #E4E4E7",
          borderRadius: 18,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: accent,
            color: "white",
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: -1,
          }}
        >
          NG
        </div>
      </div>
    ),
    size
  );
}
