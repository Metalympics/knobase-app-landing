"use client";

import { ArrowRight } from "lucide-react";
import { getImportUrl } from "@/lib/api";

interface CTAButtonProps {
  slug: string;
  price: number;
  className?: string;
}

export function CTAButton({ slug, price, className = "" }: CTAButtonProps) {
  const url = getImportUrl(slug);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-lg bg-[#650BD8] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#5209b0] ${className}`}
    >
      Get Template — ${price}
      <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
