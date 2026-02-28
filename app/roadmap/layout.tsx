import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Knobase Roadmap | What We're Building Next",
  description:
    "See what's coming to Knobase — upcoming features, integrations, and milestones. Track our progress from real-time collaboration to marketplace launch.",
  keywords: [
    "Knobase roadmap",
    "product roadmap",
    "AI workspace features",
    "upcoming features",
  ],
  openGraph: {
    title: "Knobase Roadmap | What We're Building Next",
    description:
      "See what's coming to Knobase — upcoming features, integrations, and milestones.",
    type: "website",
    url: "https://knobase.com/roadmap",
    siteName: "Knobase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knobase Roadmap | What We're Building Next",
    description:
      "Upcoming features, integrations, and milestones for Knobase.",
  },
  alternates: {
    canonical: "https://knobase.com/roadmap",
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://knobase.com" },
          { name: "Roadmap", href: "https://knobase.com/roadmap" },
        ]}
      />
      {children}
    </>
  );
}
