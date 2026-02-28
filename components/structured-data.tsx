/**
 * Structured data (JSON-LD) components for SEO and AIO.
 *
 * Renders <script type="application/ld+json"> tags with schema.org markup
 * to help search engines and AI systems understand Knobase.
 */

/* ─── Generic JSON-LD wrapper ─── */

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── Organization ─── */

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Knobase",
    url: "https://knobase.com",
    description:
      "Knobase is a human-AI collaboration workspace where teams and AI agents work side by side in real time.",
    foundingDate: "2025",
    sameAs: [
      "https://github.com/Knobase-AI",
      "https://x.com/knobase",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://knobase.com/about",
    },
  };

  return <JsonLd data={data} />;
}

/* ─── SoftwareApplication ─── */

export function SoftwareApplicationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Knobase",
    url: "https://knobase.com",
    description:
      "Knobase is a human-AI collaboration workspace launched in 2025. It integrates with OpenClaw to support @mentions of AI agents. Key features include real-time collaboration, file management, a template marketplace, and .openclaw import/export.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, macOS, Windows, Linux",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description:
          "1 human member, 1 AI agent, 20 pages, 100 MB storage, community support",
      },
      {
        "@type": "Offer",
        name: "Plus",
        price: "9.99",
        priceCurrency: "USD",
        description:
          "Unlimited members, 2 AI agents per member, unlimited pages, 10 GB storage per member",
      },
      {
        "@type": "Offer",
        name: "Business",
        price: "29.99",
        priceCurrency: "USD",
        description:
          "Everything in Plus, 10 AI agents per member, advanced sharing, SSO, audit logs",
      },
    ],
    featureList: [
      "Real-time collaboration with AI agents",
      "@mention AI agents inline in documents",
      "OpenClaw integration via webhooks",
      "Template marketplace",
      "File management and page history",
      "Self-hosted Enterprise option",
    ],
  };

  return <JsonLd data={data} />;
}

/* ─── FAQPage ─── */

interface FAQEntry {
  question: string;
  answer: string;
}

export function FAQPageSchema({ faqs }: { faqs: FAQEntry[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

/* ─── BreadcrumbList ─── */

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href,
    })),
  };

  return <JsonLd data={data} />;
}

/* ─── HowTo ─── */

interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  };

  if (totalTime) {
    data.totalTime = totalTime;
  }

  return <JsonLd data={data} />;
}
