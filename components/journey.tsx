"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDot } from "lucide-react";

const milestones = [
  {
    period: "Q4 2024",
    title: "The idea",
    description:
      "Started building the infrastructure for human-agent collaboration — before most teams had even tried deploying an AI agent.",
    status: "done" as const,
  },
  {
    period: "Q2 2025",
    title: "Knobase AI — private beta",
    description:
      "Our first product launched in private beta. Early users onboarded, AI conversations flowing, and the first real signal that the knowledge problem was worth solving.",
    status: "done" as const,
  },
  {
    period: "Nov 2025",
    title: "Knobase AI — public beta",
    description:
      "Opened the doors. 1,000+ users onboarded, 16,000+ AI conversations across research, education, healthcare, and professional services.",
    status: "done" as const,
    stat: "1,000+ users",
  },
  {
    period: "Q1 2026",
    title: "Workspace (beta)",
    description:
      "The full knowledge layer for human-agent collaboration. Purpose-built for teams that work alongside AI every day.",
    status: "current" as const,
    stat: "You are here",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#650BD8]">
      {children}
    </p>
  );
}

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Journey() {
  return (
    <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <FadeUp className="text-center">
          <SectionLabel>Our journey</SectionLabel>
          <h2
            className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Built with proof, not promises.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
            Workspace isn&apos;t our first product — it&apos;s our most
            ambitious one. Here&apos;s what we&apos;ve learned along the way.
          </p>
        </FadeUp>

        <div className="relative mt-16">
          {/* Vertical connector line */}
          <div className="absolute left-[18px] top-0 hidden h-full w-px bg-neutral-200 sm:block" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <FadeUp key={m.period} delay={i * 0.08}>
                <div className="flex gap-5 sm:gap-8">
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    {m.status === "current" ? (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#650BD8] bg-white">
                        <CircleDot size={16} className="text-[#650BD8]" />
                      </div>
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white">
                        <CheckCircle2 size={16} className="text-neutral-400" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 pb-2">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                        {m.period}
                      </span>
                      {m.stat && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            m.status === "current"
                              ? "bg-[#650BD8]/10 text-[#650BD8]"
                              : "bg-neutral-100 text-neutral-600"
                          }`}
                        >
                          {m.stat}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`mt-1 text-base font-semibold ${
                        m.status === "current"
                          ? "text-[#650BD8]"
                          : "text-[#111111]"
                      }`}
                    >
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                      {m.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
