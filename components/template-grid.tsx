import type { Template } from "@/lib/api";
import { TemplateCard } from "./template-card";

interface TemplateGridProps {
  templates: Template[];
  heading?: string;
  emptyMessage?: string;
}

export function TemplateGrid({ templates, heading, emptyMessage }: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-neutral-500">{emptyMessage ?? "No templates found."}</p>
      </div>
    );
  }

  return (
    <section>
      {heading && (
        <h2 className="mb-6 text-lg font-semibold text-neutral-900">{heading}</h2>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <TemplateCard key={t.slug} template={t} />
        ))}
      </div>
    </section>
  );
}
