import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Bot,
  FileText,
  Workflow,
  ShieldCheck,
  RefreshCw,
  Share2,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CTAButton } from "@/components/cta-button";
import { TemplateGrid } from "@/components/template-grid";
import {
  getTemplate,
  getTemplates,
  getTemplateReviews,
  type Template,
} from "@/lib/api";

// ─── Static Params ─────────────────────────────────────────────────

export async function generateStaticParams() {
  const templates = await getTemplates();
  return templates.map((t) => ({ slug: t.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = await getTemplate(slug);
  if (!template) return {};

  return {
    title: `${template.name} — Knobase Template`,
    description: template.short_description,
    openGraph: {
      title: template.name,
      description: template.short_description,
      type: "website",
      url: `https://knobase.com/templates/${template.slug}`,
      siteName: "Knobase",
    },
    twitter: {
      card: "summary_large_image",
      title: template.name,
      description: template.short_description,
    },
    alternates: {
      canonical: `https://knobase.com/templates/${template.slug}`,
    },
  };
}

// ─── JSON-LD Structured Data ──────────────────────────────────────

function TemplateJsonLd({ template }: { template: Template }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: template.name,
    description: template.short_description,
    brand: { "@type": "Brand", name: "Knobase" },
    offers: {
      "@type": "Offer",
      price: template.price,
      priceCurrency: template.currency,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: template.rating,
      reviewCount: template.review_count,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = await getTemplate(slug);
  if (!template) notFound();

  const [reviews, allTemplates] = await Promise.all([
    getTemplateReviews(slug),
    getTemplates({ category: template.category, limit: 4 }),
  ]);

  const related = allTemplates.filter((t) => t.slug !== slug).slice(0, 3);

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

  return (
    <main className="min-h-screen bg-white">
      <TemplateJsonLd template={template} />
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b border-neutral-200 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-neutral-500">
          <Link
            href="/templates"
            className="inline-flex items-center gap-1 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft size={14} />
            Templates
          </Link>
          <span>/</span>
          <span className="capitalize">{template.category}</span>
          <span>/</span>
          <span className="text-neutral-900 font-medium truncate">{template.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 pt-10 pb-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Category & Title */}
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 capitalize mb-3">
                  {categoryIcons[template.category] ?? "📦"} {template.category}
                </span>
                <h1
                  className="mt-2 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
                  style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}
                >
                  {template.name}
                </h1>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                  <span>by <strong className="text-neutral-700">{template.creator.name}</strong></span>
                  <span className="inline-flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="font-medium text-neutral-700">{template.rating.toFixed(1)}</span>
                    <span className="text-neutral-400">({template.review_count} reviews)</span>
                  </span>
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="flex h-56 items-center justify-center rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 sm:h-72">
                <span className="text-6xl">{categoryIcons[template.category] ?? "📦"}</span>
              </div>

              {/* Description */}
              <div className="prose prose-neutral prose-sm max-w-none">
                {template.description.split("\n").map((line, i) => {
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={i} className="mt-8 mb-3 text-lg font-semibold text-neutral-900">
                        {line.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (line.startsWith("- **")) {
                    const match = line.match(/- \*\*(.+?)\*\* — (.+)/);
                    if (match) {
                      return (
                        <div key={i} className="flex items-start gap-2 py-1">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#650BD8]" />
                          <p className="text-sm text-neutral-600">
                            <strong className="text-neutral-800">{match[1]}</strong> — {match[2]}
                          </p>
                        </div>
                      );
                    }
                  }
                  if (line.trim() === "") return null;
                  return (
                    <p key={i} className="text-sm leading-relaxed text-neutral-600">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Right: Purchase card (sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 rounded-xl border border-neutral-200 bg-white p-6 space-y-5">
                {/* Price */}
                <div>
                  <span className="text-3xl font-bold text-neutral-900">${template.price}</span>
                  <span className="ml-1 text-sm text-neutral-400">one-time</span>
                </div>

                {/* CTA */}
                <CTAButton slug={template.slug} price={template.price} className="w-full" />

                {/* Perks */}
                <ul className="space-y-2.5 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <RefreshCw size={14} className="text-[#650BD8]" />
                    Lifetime updates
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#650BD8]" />
                    30-day money-back guarantee
                  </li>
                </ul>

                <hr className="border-neutral-100" />

                {/* What's included */}
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    What&apos;s Included
                  </h4>
                  <div className="space-y-2 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Bot size={14} className="text-[#650BD8]" />
                      {template.agents_count} AI Agent{template.agents_count !== 1 ? "s" : ""}
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={14} className="text-[#650BD8]" />
                      {template.docs_count} Document{template.docs_count !== 1 ? "s" : ""}
                    </div>
                    {template.workflows_count > 0 && (
                      <div className="flex items-center gap-2">
                        <Workflow size={14} className="text-[#650BD8]" />
                        {template.workflows_count} Workflow{template.workflows_count !== 1 ? "s" : ""}
                      </div>
                    )}
                  </div>
                </div>

                <hr className="border-neutral-100" />

                {/* Share */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Share
                  </h4>
                  <div className="flex gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out "${template.name}" on Knobase`)}&url=${encodeURIComponent(`https://knobase.com/templates/${template.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-600"
                      aria-label="Share on Twitter"
                    >
                      𝕏
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://knobase.com/templates/${template.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-600"
                      aria-label="Share on LinkedIn"
                    >
                      <Share2 size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-lg font-semibold text-neutral-900">
              💬 Reviews ({template.review_count})
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-xl border border-neutral-200 bg-white p-5 space-y-2"
                >
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    &ldquo;{review.body}&rdquo;
                  </p>
                  <p className="text-xs text-neutral-400">
                    {review.author} · {review.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-neutral-200 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <TemplateGrid templates={related} heading="Related Templates" />
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
