import type { Metadata } from "next";
import { BreadcrumbSchema, HowToSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Connect OpenClaw to Knobase | Setup in 3 Commands",
  description:
    "Step-by-step guide to connect your OpenClaw agent to Knobase. Install the skill, authenticate, and start collaborating with @openclaw in under 1 minute.",
  keywords: [
    "OpenClaw setup",
    "Knobase OpenClaw",
    "AI agent setup",
    "@mention AI",
    "webhook setup",
  ],
  openGraph: {
    title: "Connect OpenClaw to Knobase | Setup in 3 Commands",
    description:
      "Connect your OpenClaw agent to Knobase for @openclaw mentions. Copy-paste setup in under 1 minute.",
    type: "website",
    url: "https://knobase.com/connect/openclaw",
    siteName: "Knobase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect OpenClaw to Knobase | Setup in 3 Commands",
    description:
      "Connect your OpenClaw agent to Knobase for @openclaw mentions. Copy-paste setup.",
  },
  alternates: {
    canonical: "https://knobase.com/connect/openclaw",
  },
};

export default function ConnectOpenClawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://knobase.com" },
          { name: "OpenClaw", href: "https://knobase.com/openclaw" },
          { name: "Connect", href: "https://knobase.com/connect/openclaw" },
        ]}
      />
      {children}
    </>
  );
}
