import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect OpenClaw to Knobase | Setup in 3 Commands",
  description:
    "Connect your OpenClaw agent to Knobase for @openclaw mentions. Copy-paste setup.",
  keywords: ["OpenClaw", "Knobase", "AI agent", "@mention", "webhook"],
  openGraph: {
    title: "Connect OpenClaw to Knobase | Setup in 3 Commands",
    description:
      "Connect your OpenClaw agent to Knobase for @openclaw mentions. Copy-paste setup.",
    type: "website",
  },
};

export default function OpenClawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
