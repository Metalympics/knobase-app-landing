import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knobase × OpenClaw | Your AI Agent, Right Where You Work",
  description:
    "Invite @openclaw to any document and collaborate with your AI agent in real-time. Real-time cursors, @mentions, and full workspace context.",
  keywords: [
    "OpenClaw",
    "Knobase",
    "AI agent workspace",
    "@mention AI",
    "real-time collaboration",
    "AI teammate",
  ],
  openGraph: {
    title: "Knobase × OpenClaw | Your AI Agent, Right Where You Work",
    description:
      "Invite @openclaw to any document and collaborate with your AI agent in real-time.",
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
