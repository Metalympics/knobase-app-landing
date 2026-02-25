import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TemplateGrid } from "@/components/template-grid";
import { getCategories, getTemplatesByCategory } from "@/lib/api";

// ─── Static Params ─────────────────────────────────────────────────

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ name: c.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === name);
  const label = category?.name ?? name;

  return {
    title: `${label} Templates — Knobase Marketplace`,
    description: category?.description ?? `Browse ${label} templates on Knobase.`,
    openGraph: {
      title: `${label} Templates — Knobase Marketplace`,
      description: category?.description ?? `Browse ${label} templates on Knobase.`,
      type: "website",
      url: `https://knobase.com/templates/categories/${name}`,
      siteName: "Knobase",
    },
    alternates: {
      canonical: `https://knobase.com/templates/categories/${name}`,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const [categories, templates] = await Promise.all([
    getCategories(),
    getTemplatesByCategory(name),
  ]);

  const category = categories.find((c) => c.slug === name);
  const label = category?.name ?? name;
  const icon = category?.icon ?? "📦";

  return (
    <main className="min-h-screen bg-white">
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
          <span className="text-neutral-900 font-medium capitalize">{label}</span>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-neutral-200 px-4 pt-12 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="text-4xl">{icon}</span>
          <h1
            className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
            style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            {label} Templates
          </h1>
          {category?.description && (
            <p className="mt-2 max-w-xl text-lg text-neutral-500">
              {category.description}
            </p>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TemplateGrid
            templates={templates}
            emptyMessage={`No ${label} templates yet. Check back soon!`}
          />
        </div>
      </section>

      {/* Other categories */}
      <section className="border-t border-neutral-200 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-5 text-lg font-semibold text-neutral-900">Browse other categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories
              .filter((c) => c.slug !== name)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/templates/categories/${c.slug}`}
                  className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:border-neutral-300"
                >
                  {c.icon} {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
