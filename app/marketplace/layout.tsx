import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenClaw Marketplace | Share & Sell Your Agent Configurations",
  description:
    "The first marketplace where OpenClaw power users can package, share, and sell their agent configurations. Browse 50+ setups or publish your own.",
  keywords: [
    "OpenClaw marketplace",
    "AI agent templates",
    "sell OpenClaw setup",
    "share agent configurations",
    "Knobase marketplace",
    ".openclaw files",
  ],
  openGraph: {
    title: "OpenClaw Marketplace | Share & Sell Your Agent Configurations",
    description:
      "Browse, share, and sell OpenClaw agent configurations. Earn passive income from your setups or contribute to the community for free.",
    type: "website",
  },
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
