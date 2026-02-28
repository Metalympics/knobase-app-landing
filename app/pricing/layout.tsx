import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Knobase Pricing | AI Collaboration Plans for Teams",
  description:
    "Explore Knobase pricing plans: Free, Plus ($9.99/mo), Business ($29.99/mo), and Enterprise. Bring your own AI agent at no extra cost. Compare features.",
  keywords: [
    "Knobase pricing",
    "AI workspace pricing",
    "collaboration tool pricing",
    "OpenClaw plans",
  ],
  openGraph: {
    title: "Knobase Pricing | AI Collaboration Plans for Teams",
    description:
      "Explore Knobase pricing plans. Bring your own AI agent at no extra cost. Compare features and choose the plan that fits your team.",
    type: "website",
    url: "https://knobase.com/pricing",
    siteName: "Knobase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knobase Pricing | AI Collaboration Plans",
    description:
      "Free, Plus, Business, and Enterprise plans. Bring your own AI agent at no extra cost.",
  },
  alternates: {
    canonical: "https://knobase.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://knobase.com" },
          { name: "Pricing", href: "https://knobase.com/pricing" },
        ]}
      />
      {children}
    </>
  );
}
