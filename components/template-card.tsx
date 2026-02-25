"use client";

import Link from "next/link";
import { Star, Bot, FileText, Workflow } from "lucide-react";
import type { Template } from "@/lib/api";

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-amber-500">
      <Star size={13} fill="currentColor" />
      <span className="text-xs font-medium text-neutral-700">{rating.toFixed(1)}</span>
    </span>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const icons: Record<string, string> = {
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
    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600 capitalize">
      <span>{icons[category] ?? "📦"}</span>
      {category}
    </span>
  );
}

export function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group flex flex-col rounded-xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-100"
    >
      {/* Thumbnail placeholder */}
      <div className="relative flex h-40 items-center justify-center rounded-t-xl bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="text-4xl">
          {template.category === "marketing" && "📣"}
          {template.category === "development" && "💻"}
          {template.category === "data" && "📊"}
          {template.category === "design" && "🎨"}
          {template.category === "sales" && "💼"}
          {template.category === "legal" && "⚖️"}
          {template.category === "hr" && "👥"}
          {template.category === "productivity" && "⚡"}
        </div>
        {template.featured && (
          <span className="absolute top-3 right-3 rounded-full bg-[#650BD8] px-2 py-0.5 text-[10px] font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <CategoryBadge category={template.category} />
          <RatingStars rating={template.rating} />
        </div>

        <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-[#650BD8] transition-colors line-clamp-1">
          {template.name}
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-neutral-500 line-clamp-2">
          {template.short_description}
        </p>

        {/* Stats */}
        <div className="mt-3 flex items-center gap-3 text-[11px] text-neutral-400">
          <span className="inline-flex items-center gap-1">
            <Bot size={11} /> {template.agents_count} agents
          </span>
          <span className="inline-flex items-center gap-1">
            <FileText size={11} /> {template.docs_count} docs
          </span>
          {template.workflows_count > 0 && (
            <span className="inline-flex items-center gap-1">
              <Workflow size={11} /> {template.workflows_count}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 flex items-center justify-between border-t border-neutral-100">
          <span className="text-xs text-neutral-500">
            by {template.creator.name}
          </span>
          <span className="text-sm font-semibold text-neutral-900">
            ${template.price}
          </span>
        </div>
      </div>
    </Link>
  );
}
