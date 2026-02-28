"use client";

import { motion } from "framer-motion";
import { Sparkles, Wrench, Zap, Shield, Bug } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ChangeType = "new" | "improved" | "fixed" | "security" | "performance";

type Change = {
  type: ChangeType;
  text: string;
};

type Release = {
  version: string;
  date: string;
  tag?: "latest" | "beta";
  summary: string;
  changes: Change[];
};

const tagConfig: Record<
  ChangeType,
  { label: string; icon: React.ElementType; color: string; bg: string }
> = {
  new: {
    label: "New",
    icon: Sparkles,
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-200",
  },
  improved: {
    label: "Improved",
    icon: Wrench,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
  },
  performance: {
    label: "Performance",
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-200",
  },
  security: {
    label: "Security",
    icon: Shield,
    color: "text-green-600",
    bg: "bg-green-50 border-green-200",
  },
  fixed: {
    label: "Fixed",
    icon: Bug,
    color: "text-red-500",
    bg: "bg-red-50 border-red-200",
  },
};

const releases: Release[] = [
  {
    version: "0.1.0",
    date: "February 2026",
    tag: "latest",
    summary: "Initial private beta — the foundation of the Knobase workspace.",
    changes: [
      {
        type: "new",
        text: "Knobase workspace core — create, organize, and link knowledge nodes",
      },
      {
        type: "new",
        text: "OpenClaw integration — connect your AI agents directly to your knowledge base",
      },
      {
        type: "new",
        text: "Real-time collaboration support for co-editing and agent sessions",
      },
      {
        type: "new",
        text: "Template library with pre-built knowledge structures",
      },
      {
        type: "new",
        text: "Waitlist sign-up with personalized onboarding flow",
      },
      {
        type: "security",
        text: "End-to-end encryption for all workspace data at rest and in transit",
      },
    ],
  },
];

function ChangeTag({ type }: { type: ChangeType }) {
  const config = tagConfig[type];
  const Icon = config.icon;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${config.color} ${config.bg}`}
    >
      <Icon size={11} />
      {config.label}
    </span>
  );
}

export default function ChangelogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-neutral-100 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeUp>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-4 py-1.5 text-sm font-medium text-[#650BD8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#650BD8]" />
                Changelog
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1
                className="text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                What&apos;s new
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-4 text-lg leading-relaxed text-neutral-500">
                Every update, improvement, and fix — documented as we ship.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 h-full w-px bg-neutral-200 sm:left-[11px]" />

              <div className="space-y-14">
                {releases.map((release, i) => (
                  <FadeUp key={release.version} delay={i * 0.06}>
                    <div className="relative pl-8 sm:pl-10">
                      {/* Dot */}
                      <div className="absolute left-[-5px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-[#650BD8] bg-white sm:left-[6px]" />

                      {/* Version + date */}
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h2
                          className="text-xl font-bold text-[#111111]"
                          style={{ letterSpacing: "-0.02em" }}
                        >
                          v{release.version}
                        </h2>
                        {release.tag && (
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              release.tag === "latest"
                                ? "bg-[#650BD8]/10 text-[#650BD8]"
                                : "bg-neutral-100 text-neutral-500"
                            }`}
                          >
                            {release.tag}
                          </span>
                        )}
                        <span className="text-sm text-neutral-400">
                          {release.date}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="mb-5 text-sm leading-relaxed text-neutral-500">
                        {release.summary}
                      </p>

                      {/* Changes */}
                      <ul className="space-y-3">
                        {release.changes.map((change, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <ChangeTag type={change.type} />
                            <span className="text-sm leading-relaxed text-neutral-600">
                              {change.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeUp>
                ))}

                {/* End marker */}
                <div className="relative pl-8 sm:pl-10">
                  <div className="absolute left-[-5px] top-1.5 h-[11px] w-[11px] rounded-full border-2 border-neutral-300 bg-white sm:left-[6px]" />
                  <p className="text-sm text-neutral-400 italic">
                    Earlier history coming soon — we&apos;re backfilling as we
                    go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
