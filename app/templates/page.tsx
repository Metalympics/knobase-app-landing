import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getTemplates, getCategories } from "@/lib/api";
import { TemplatesBrowser } from "@/components/templates-browser";

export const metadata: Metadata = {
  title: "Templates — Knobase Marketplace",
  description:
    "Browse AI agent templates, workflows, and document packs. Find the perfect starting point for your team and get productive instantly.",
  openGraph: {
    title: "Templates — Knobase Marketplace",
    description:
      "Browse AI agent templates, workflows, and document packs.",
    type: "website",
    url: "https://knobase.com/templates",
    siteName: "Knobase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Templates — Knobase Marketplace",
    description:
      "Browse AI agent templates, workflows, and document packs.",
  },
  alternates: {
    canonical: "https://knobase.com/templates",
  },
};

export default async function TemplatesPage() {
  const [allTemplates, categories] = await Promise.all([
    getTemplates(),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="border-b border-neutral-200 px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-4 py-1.5 text-sm font-medium text-[#650BD8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#650BD8]" />
            Marketplace
          </div>
          <h1
            className="text-balance text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl"
            style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Templates & Agent Packs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500">
            Pre-built agents, documents, and workflows to launch faster. Browse, preview, and import into your workspace.
          </p>
        </div>
      </section>

      {/* Client-side browsing with filters */}
      <TemplatesBrowser templates={allTemplates} categories={categories} />

      <Footer />
    </main>
  );
}
