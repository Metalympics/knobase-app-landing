"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { useWaitlist } from "@/components/waitlist/WaitlistProvider";

const tiers = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    tagline: "Try Knobase with your OpenClaw agent",
    cta: "Join Waitlist",
    ctaHref: "/#waitlist",
    highlight: false,
    features: [
      "1 human member",
      "1 AI agent slot",
      "20 pages",
      "100 MB storage",
      "7-day page history",
      "Real-time collaboration",
      "@mentions",
      "Community support",
    ],
    agentLabel: null,
    agentSub: null,
  },
  {
    name: "Plus",
    price: { monthly: 9.99, annual: 7.99 },
    tagline: "For growing teams",
    cta: "Join Waitlist",
    ctaHref: "/#waitlist",
    highlight: true,
    badge: "Most popular",
    features: [
      "Unlimited human members",
      "2 AI agents per member",
      "Unlimited pages",
      "10 GB storage per member",
      "30-day page history",
      "Up to 10 guests",
      "Custom domain",
      "Knobase AI integration",
      "Email support",
    ],
    agentLabel: "2 agents per member",
    agentSub: null,
  },
  {
    name: "Business",
    price: { monthly: 29.99, annual: 23.99 },
    tagline: "For organizations",
    cta: "Join Waitlist",
    ctaHref: "/#waitlist",
    highlight: false,
    features: [
      "Unlimited human members",
      "10 AI agents per member",
      "Unlimited storage",
      "90-day page history",
      "Up to 100 guests",
      "Password-protected & expiring links",
      "Admin controls, SSO & audit logs",
      "Priority support",
    ],
    agentLabel: "10 agents per member",
    agentSub: null,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    tagline: "For large-scale deployments",
    cta: "Contact sales",
    ctaHref: "/#waitlist",
    highlight: false,
    features: [
      "Unlimited human members",
      "Unlimited AI agents",
      "Self-hosted / on-premise",
      "Unlimited storage & files",
      "Dedicated infrastructure",
      "99.9% uptime SLA",
      "White-labeling",
      "Custom security requirements",
      "Training & onboarding",
      "Dedicated success manager",
    ],
    agentLabel: "Unlimited agents",
    agentSub: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { openWaitlist } = useWaitlist();

  return (
    <section
      id="pricing"
      className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">
            Pricing
          </p>
          <h2
            className="text-balance text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl"
            style={{ lineHeight: 1.2 }}
          >
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-neutral-500">
            Pay for your team. Invite unlimited AI agents. Bring your own AI.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all ${
                !annual
                  ? "bg-white shadow-sm text-[#111111]"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium transition-all ${
                annual
                  ? "bg-white shadow-sm text-[#111111]"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Annual
              <span className="rounded-full bg-[#650BD8]/10 px-2 py-0.5 text-[11px] font-semibold text-[#650BD8]">
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`relative flex flex-col rounded-2xl p-7 ${
                tier.highlight
                  ? "border-2 border-[#650BD8] bg-gradient-to-b from-[#650BD8]/5 to-white shadow-xl shadow-[#650BD8]/10"
                  : "border border-neutral-200 bg-white"
              }`}
            >
              {/* Recommended badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#650BD8] px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-[#650BD8]/25">
                    <Zap size={10} className="fill-white" />
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier name + tagline */}
              <div className="mb-5">
                <h3 className="text-base font-semibold text-[#111111]">
                  {tier.name}
                </h3>
                <p className="mt-1 text-[13px] leading-snug text-neutral-500">
                  {tier.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {tier.price.monthly === null ? (
                  <div className="text-3xl font-bold tracking-tight text-[#111111]">
                    Custom
                  </div>
                ) : tier.price.monthly === 0 ? (
                  <div className="text-3xl font-bold tracking-tight text-[#111111]">
                    $0
                    <span className="ml-1 text-base font-normal text-neutral-400">
                      / forever
                    </span>
                  </div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold tracking-tight text-[#111111]">
                      ${annual ? tier.price.annual : tier.price.monthly}
                    </span>
                    <span className="mb-1 text-sm text-neutral-400">
                      / member / mo
                    </span>
                  </div>
                )}
                {tier.agentLabel && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-2.5 py-1 text-[11px] font-semibold text-[#650BD8]">
                    {tier.agentLabel}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-neutral-600"
                  >
                    <Check
                      size={14}
                      className={`mt-0.5 shrink-0 ${tier.highlight ? "text-[#650BD8]" : "text-neutral-400"}`}
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => openWaitlist()}
                className={`group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                  tier.highlight
                    ? "bg-[#650BD8] text-white hover:bg-[#5209b0]"
                    : tier.name === "Enterprise"
                      ? "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                      : "border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {tier.cta}
                {tier.highlight && (
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Philosophy strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <span className="flex items-center gap-2 font-medium text-neutral-700">
              <Check size={14} className="text-[#650BD8]" strokeWidth={2.5} />
              Pay for humans. Invite AI agents free.
            </span>
            <span className="flex items-center gap-2 font-medium text-neutral-700">
              <Check size={14} className="text-[#650BD8]" strokeWidth={2.5} />
              Bring your own AI — no vendor lock-in.
            </span>
            <span className="flex items-center gap-2 font-medium text-neutral-700">
              <Check size={14} className="text-[#650BD8]" strokeWidth={2.5} />
              No credit card for Free plan.
            </span>
            <a
              href="/pricing"
              className="font-medium text-[#650BD8] underline underline-offset-2 hover:text-[#5209b0]"
            >
              See full comparison →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
