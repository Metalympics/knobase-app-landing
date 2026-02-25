import { ImageResponse } from "next/og";
import { getTemplate, getTemplates } from "@/lib/api";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Knobase Template";

export async function generateStaticParams() {
  const templates = await getTemplates();
  return templates.map((t) => ({ slug: t.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = await getTemplate(slug);

  const categoryIcons: Record<string, string> = {
    marketing: "📣",
    development: "💻",
    data: "📊",
    design: "🎨",
    sales: "💼",
    legal: "⚖️",
    hr: "👥",
    productivity: "⚡",
  };

  const icon = template ? (categoryIcons[template.category] ?? "📦") : "📦";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f8f5ff 0%, #ffffff 50%, #f0ebff 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 50,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: "#650BD8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <span style={{ fontSize: 18, fontWeight: 600, color: "#111" }}>
            Knobase
          </span>
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#650BD8",
            color: "white",
            padding: "6px 16px",
            borderRadius: 20,
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Template Marketplace
        </div>

        {/* Icon */}
        <div style={{ fontSize: 56, marginBottom: 16 }}>{icon}</div>

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#111",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {template?.name ?? "Template"}
        </div>

        {/* Description */}
        {template?.short_description && (
          <div
            style={{
              fontSize: 20,
              color: "#737373",
              textAlign: "center",
              maxWidth: 700,
              marginTop: 16,
              lineHeight: 1.5,
            }}
          >
            {template.short_description.length > 120
              ? template.short_description.slice(0, 117) + "..."
              : template.short_description}
          </div>
        )}

        {/* Stats bar */}
        {template && (
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 32,
              fontSize: 16,
              color: "#737373",
            }}
          >
            <span>⭐ {template.rating.toFixed(1)}</span>
            <span>🤖 {template.agents_count} agents</span>
            <span>📄 {template.docs_count} docs</span>
            <span>${template.price}</span>
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}
