"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import type { Template, Category } from "@/lib/api";
import { TemplateGrid } from "@/components/template-grid";

interface TemplatesBrowserProps {
  templates: Template[];
  categories: Category[];
}

const SORT_OPTIONS = [
  { value: "popular", label: "Popular" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Top Rated" },
  { value: "price-low", label: "Price: Low → High" },
  { value: "price-high", label: "Price: High → Low" },
];

export function TemplatesBrowser({ templates, categories }: TemplatesBrowserProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("popular");

  const isFiltered = !!(search || category || sort !== "popular");

  const filtered = useMemo(() => {
    let results = [...templates];

    if (category) {
      results = results.filter((t) => t.category === category);
    }

    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.short_description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.includes(q))
      );
    }

    switch (sort) {
      case "newest":
        results.sort((a, b) => b.created_at.localeCompare(a.created_at));
        break;
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      default: // popular
        results.sort((a, b) => b.review_count - a.review_count);
    }

    return results;
  }, [templates, category, search, sort]);

  const featured = useMemo(
    () => templates.filter((t) => t.featured),
    [templates]
  );
  const trending = useMemo(
    () => templates.filter((t) => t.trending),
    [templates]
  );

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* ── Filters ── */}
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#650BD8] focus:ring-1 focus:ring-[#650BD8]/20 transition"
            />
          </div>

          {/* Category pills + sort */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setCategory("")}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  !category
                    ? "bg-[#650BD8] text-white"
                    : "border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() =>
                    setCategory(category === cat.slug ? "" : cat.slug)
                  }
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    category === cat.slug
                      ? "bg-[#650BD8] text-white"
                      : "border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            <div className="flex-1" />

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-lg border border-neutral-200 bg-white py-1.5 pl-3 pr-8 text-xs font-medium text-neutral-600 outline-none focus:border-[#650BD8] cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={13}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400"
              />
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        {isFiltered ? (
          <TemplateGrid
            templates={filtered}
            heading={`${filtered.length} template${filtered.length !== 1 ? "s" : ""}`}
            emptyMessage="No templates match your filters. Try a different search or category."
          />
        ) : (
          <>
            {featured.length > 0 && (
              <TemplateGrid templates={featured} heading="⭐ Featured" />
            )}
            {trending.length > 0 && (
              <TemplateGrid templates={trending} heading="📈 Trending" />
            )}
            <TemplateGrid templates={filtered} heading="All Templates" />
          </>
        )}
      </div>
    </section>
  );
}
