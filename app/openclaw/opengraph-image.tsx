import { ImageResponse } from "next/og";

export const alt = "Knobase × OpenClaw | Your AI Agent, Right Where You Work";
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
          "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f8f5ff 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Brand badges */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#650BD8",
          }}
        >
          <span style={{ fontSize: 38, fontWeight: 800, color: "#ffffff" }}>
            K
          </span>
        </div>
        <span style={{ fontSize: 36, color: "#d4d4d4", fontWeight: 300 }}>
          ×
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "#10b981",
          }}
        >
          <span style={{ fontSize: 32, fontWeight: 700, color: "#ffffff" }}>
            OC
          </span>
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 700,
          color: "#111111",
          textAlign: "center",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          maxWidth: 900,
        }}
      >
        Invite @openclaw to your workspace.
      </div>
      <div
        style={{
          fontSize: 52,
          fontWeight: 700,
          color: "#650BD8",
          textAlign: "center",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        Work together.
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 22,
          color: "#737373",
          textAlign: "center",
          marginTop: 24,
          maxWidth: 700,
          lineHeight: 1.5,
        }}
      >
        Real-time cursors, @mentions, and full workspace context. Set up in 3
        commands.
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 600, color: "#650BD8" }}>
          knobase.com/openclaw
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#10b981",
            borderRadius: 999,
            padding: "6px 16px",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>
            Live
          </span>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
