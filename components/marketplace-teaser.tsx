"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const sharePerks = [
  "Help others skip weeks of setup and tuning",
  "Build your reputation in the OpenClaw community",
  "Get followers, feedback, and forks",
];

export function MarketplaceTeaser() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[#650BD8]">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            For OpenClaw Power Users
          </div>

          <h2
            className="text-balance text-4xl font-bold text-white sm:text-5xl"
            style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Share Your OpenClaw Setup
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            You&apos;ve spent weeks perfecting your agent configurations.
            Package them as a{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-white">
              .openclaw
            </code>{" "}
            file and let the community fork and build on your work — for free.
          </p>
        </motion.div>

        {/* Main share card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-12 rounded-2xl bg-white p-8 shadow-xl sm:p-10"
        >
          <h3
            className="text-xl font-bold text-[#111111] sm:text-2xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Give back. One export away.
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600">
            That SEO agent team you spent 3 weeks tuning? The workflow that
            saves you 10 hours a week? Someone out there is struggling to build
            exactly that. One export and they can fork it instantly.
          </p>

          <ul className="mt-6 space-y-3">
            {sharePerks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm text-neutral-700">
                <Check size={15} className="shrink-0 text-[#650BD8]" />
                {perk}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href="/marketplace"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#650BD8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5209b0]"
            >
              Browse the Marketplace
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
