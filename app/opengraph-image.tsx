import { ImageResponse } from "next/og";

export const alt = "Knobase — The workspace where humans and AI collaborate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #f8f5ff 0%, #ffffff 50%, #f0ebff 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 20,
          background: "#650BD8",
          marginBottom: 32,
        }}
      >
        <span style={{ fontSize: 48, fontWeight: 800, color: "#ffffff" }}>
          K
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 56,
          fontWeight: 700,
          color: "#111111",
          textAlign: "center",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          maxWidth: 900,
        }}
      >
        Work together.
      </div>
      <div
        style={{
          fontSize: 56,
          fontWeight: 700,
          color: "#650BD8",
          textAlign: "center",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          maxWidth: 900,
        }}
      >
        Humans and agents, side by side.
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 24,
          color: "#737373",
          textAlign: "center",
          marginTop: 24,
          maxWidth: 700,
          lineHeight: 1.5,
        }}
      >
        Real-time collaboration for teams and AI agents. Built for OpenClaw.
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 600, color: "#650BD8" }}>
          knobase.com
        </span>
      </div>
    </div>,
    { ...size },
  );
}
