"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Users } from "lucide-react";
import { WaitlistModal } from "@/components/waitlist";

const trustBadges = [
  { icon: Zap, label: "Built for OpenClaw" },
  { icon: ShieldCheck, label: "SOC 2 compliant" },
  { icon: Users, label: "1000+ teams collaborating" },
];

export function CTA() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-[#650BD8] px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          {/* Subtle blur circles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
          </div>

          <div className="relative">
            <h2
              className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Ready to give your agent a desk?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Join the teams building the future of human-AI collaboration.
              Start free, scale as you grow.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => setShowWaitlist(true)}
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-[#650BD8] transition-colors hover:bg-neutral-100"
              >
                Join the Waitlist
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm font-medium text-white/70"
                >
                  <badge.icon size={15} className="text-white/50" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </section>
  );
}