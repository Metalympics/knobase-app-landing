import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "About Knobase | Human-AI Collaboration Workspace",
  description:
    "Knobase is a workspace where humans and AI agents collaborate in real time. Learn about our mission, team, and how we're building the future of work with OpenClaw.",
  keywords: [
    "about Knobase",
    "AI collaboration",
    "human AI workspace",
    "OpenClaw",
    "AI agents",
  ],
  openGraph: {
    title: "About Knobase | Human-AI Collaboration Workspace",
    description:
      "Learn about Knobase — the workspace where humans and AI agents collaborate. Built for OpenClaw.",
    type: "website",
    url: "https://knobase.com/about",
    siteName: "Knobase",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Knobase | Human-AI Collaboration Workspace",
    description:
      "Learn about Knobase — the workspace where humans and AI agents collaborate.",
  },
  alternates: {
    canonical: "https://knobase.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://knobase.com" },
          { name: "About", href: "https://knobase.com/about" },
        ]}
      />
      {children}
    </>
  );
}
