"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Minus, Plus, ArrowRight, Zap, Bot } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WaitlistModal } from "@/components/waitlist";

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

const tiers = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    tagline: "Try Knobase with your OpenClaw agent",
    cta: "Join Waitlist",
    ctaNote: "No credit card required",
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
    agentLabel: "1 agent",
    agentSub: "included",
  },
  {
    name: "Plus",
    price: { monthly: 9.99, annual: 7.99 },
    tagline: "For growing teams",
    cta: "Join Waitlist",
    ctaNote: "No credit card required",
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
    agentSub: "included",
  },
  {
    name: "Business",
    price: { monthly: 29.99, annual: 23.99 },
    tagline: "For organizations",
    cta: "Join Waitlist",
    ctaNote: "No credit card required",
    ctaHref: "/#waitlist",
    highlight: false,
    features: [
      "Unlimited human members",
      "10 AI agents per member",
      "Unlimited storage",
      "90-day page history",
      "Up to 100 guests",
      "Password-protected shares",
      "Expiring links",
      "Admin controls & audit logs",
      "SSO (SAML) + SCIM",
      "Priority support",
    ],
    agentLabel: "10 agents per member",
    agentSub: "included",
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    tagline: "For large-scale deployments",
    cta: "Contact sales",
    ctaNote: "Custom contract & SLA",
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
    agentSub: "included",
  },
];

type CellValue = boolean | string | null;

interface TableRow {
  label: string;
  free: CellValue;
  plus: CellValue;
  business: CellValue;
  enterprise: CellValue;
  section?: string;
}

const tableRows: TableRow[] = [
  // Members & Agents
  {
    label: "Human members",
    free: "1",
    plus: "Unlimited",
    business: "Unlimited",
    enterprise: "Unlimited",
    section: "Members & Agents",
  },
  {
    label: "AI agent slots",
    free: "1",
    plus: "2 per member",
    business: "10 per member",
    enterprise: "Unlimited",
  },
  // Pages & Storage
  {
    label: "Pages",
    free: "20",
    plus: "Unlimited",
    business: "Unlimited",
    enterprise: "Unlimited",
    section: "Pages & Storage",
  },
  {
    label: "Storage",
    free: "100 MB",
    plus: "10 GB/member",
    business: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    label: "Page history",
    free: "7 days",
    plus: "30 days",
    business: "90 days",
    enterprise: "Unlimited",
  },
  {
    label: "File uploads",
    free: false,
    plus: "5 MB/file",
    business: "5 MB/file, unlimited",
    enterprise: "Unlimited",
  },
  // Sharing
  {
    label: "Private pages",
    free: true,
    plus: true,
    business: true,
    enterprise: true,
    section: "Sharing",
  },
  {
    label: "Share to workspace",
    free: false,
    plus: true,
    business: true,
    enterprise: true,
  },
  {
    label: "Public share (read-only)",
    free: false,
    plus: true,
    business: true,
    enterprise: true,
  },
  {
    label: "Public share (read/write)",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  {
    label: "Password-protected shares",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  {
    label: "Expiring links",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  {
    label: "Guest access",
    free: false,
    plus: "10 guests",
    business: "100 guests",
    enterprise: "Unlimited",
  },
  // Integrations
  {
    label: "Knobase AI connected",
    free: false,
    plus: true,
    business: true,
    enterprise: true,
    section: "Integrations & AI",
  },
  {
    label: "AI document summary",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  {
    label: "Smart search",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  // Admin
  {
    label: "Custom domain",
    free: false,
    plus: true,
    business: true,
    enterprise: true,
    section: "Admin & Security",
  },
  {
    label: "Admin controls",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  {
    label: "Audit logs",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  {
    label: "SSO (SAML)",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  {
    label: "SCIM provisioning",
    free: false,
    plus: false,
    business: true,
    enterprise: true,
  },
  {
    label: "Self-hosted / on-premise",
    free: false,
    plus: false,
    business: false,
    enterprise: true,
  },
  // Support
  {
    label: "Support",
    free: "Community",
    plus: "Email",
    business: "Priority",
    enterprise: "Dedicated",
    section: "Support",
  },
];

const faqs = [
  {
    q: "Do I pay for AI agents?",
    a: "No. You pay per human team member. Each human can invite a set number of AI agents at no extra cost — 2 on Plus, 10 on Business. You bring your own AI (OpenClaw, Claude, or any custom build) — we don't charge for AI compute.",
  },
  {
    q: "What's the difference between Plus and Business?",
    a: "Business adds advanced sharing (password-protected shares, expiring links, up to 100 guests), full Knobase AI features (document summaries, smart search), admin controls, audit logs, and SSO. Plus is great for teams who need the basics done well.",
  },
  {
    q: "Does Knobase provide AI agents?",
    a: "No. Knobase is a workspace platform — we don't build or sell agents. You bring your own, built on OpenClaw, Knobase AI, or any platform of your choice. Knobase is where they live and collaborate alongside your team.",
  },
  {
    q: "What happens when I hit the 20-page limit on Free?",
    a: "You'll need to upgrade to Plus for unlimited pages. The 20-page limit on Free is designed for trialing Knobase with your OpenClaw agent.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes — save 20% when you pay annually on Plus and Business plans.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes. Changes take effect at your next billing cycle.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 14-day free trial on Plus and Business. After billing starts, we don't offer refunds, but you can cancel anytime.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Cloud plans run on SOC 2 Type II certified infrastructure. Enterprise plans include self-hosted options for full data sovereignty.",
  },
];

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <Check
          size={16}
          className={highlight ? "text-[#650BD8]" : "text-neutral-400"}
          strokeWidth={2.5}
        />
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <X size={14} className="text-neutral-200" strokeWidth={2} />
      </div>
    );
  if (value === null)
    return <div className="text-center text-xs text-neutral-400">—</div>;
  return (
    <div
      className={`text-center text-xs font-medium ${highlight ? "text-[#650BD8]" : "text-neutral-600"}`}
    >
      {value}
    </div>
  );
}

function FAQItem({
  item,
  index,
}: {
  item: { q: string; a: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
      className="border-b border-neutral-200 last:border-0"
    >
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium text-[#111111]">{item.q}</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 transition-colors hover:bg-neutral-100">
          {open ? (
            <Minus size={14} strokeWidth={2.5} />
          ) : (
            <Plus size={14} strokeWidth={2.5} />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-relaxed text-neutral-500">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-neutral-200 px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" />
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-4 py-1.5 text-sm font-medium text-[#650BD8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#650BD8]" />
              Simple, transparent pricing
            </div>
            <h1
              className="text-balance text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Pay for your team.
              <br />
              <span className="text-[#650BD8]">AI agents are free.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-500">
              Unlimited AI agents on every paid plan. Bring agents from any
              platform — Knobase is the workspace, not the AI.
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
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className={`relative flex flex-col rounded-2xl p-7 ${
                  tier.highlight
                    ? "border-2 border-[#650BD8] bg-gradient-to-b from-[#650BD8]/5 to-white shadow-xl shadow-[#650BD8]/10"
                    : "border border-neutral-200 bg-white"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#650BD8] px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-[#650BD8]/25">
                      <Zap size={10} className="fill-white" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-base font-semibold text-[#111111]">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-neutral-500">
                    {tier.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-1">
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
                  {annual &&
                    tier.price.monthly !== null &&
                    tier.price.monthly > 0 && (
                      <p className="mt-1 text-[12px] text-neutral-400">
                        Billed annually · $
                        {(Number(tier.price.annual) * 12).toFixed(0)}/yr per
                        member
                      </p>
                    )}
                </div>

                {/* Agent ratio pill */}
                <div className="mb-6 mt-3">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-2.5 py-1">
                    <Bot size={11} className="text-[#650BD8]" />
                    <span className="text-[11px] font-semibold text-[#650BD8]">
                      {tier.agentLabel}
                    </span>
                  </div>
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
                <div className="space-y-2">
                  <button
                    onClick={() => setShowWaitlist(true)}
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                      tier.highlight
                        ? "bg-[#650BD8] text-white hover:bg-[#5209b0]"
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
                  <p className="text-center text-[11px] text-neutral-400">
                    {tier.ctaNote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent Ratio Callout ── */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50"
          >
            <div className="border-b border-neutral-200 px-8 py-5">
              <h3 className="text-base font-semibold text-[#111111]">
                Agent ratio guide
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                See how many agents you can bring for a given team size.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Plan
                    </th>
                    <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Humans
                    </th>
                    <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Agents
                    </th>
                    <th className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    {
                      tier: "Free",
                      humans: "1",
                      agents: "1",
                      label: "Solo + 1 AI assistant",
                    },
                    {
                      tier: "Plus",
                      humans: "5",
                      agents: "10",
                      label: "5 people + 10 specialist agents",
                    },
                    {
                      tier: "Plus",
                      humans: "20",
                      agents: "40",
                      label: "20 people + AI workforce",
                    },
                    {
                      tier: "Business",
                      humans: "10",
                      agents: "100",
                      label: "10 people + extensive automation",
                    },
                    {
                      tier: "Business",
                      humans: "50",
                      agents: "500",
                      label: "Enterprise AI–human collaboration",
                    },
                    {
                      tier: "Enterprise",
                      humans: "∞",
                      agents: "∞",
                      label: "No limits",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-neutral-100/50 transition-colors"
                    >
                      <td className="px-6 py-3 font-medium text-[#111111]">
                        {row.tier}
                      </td>
                      <td className="px-6 py-3 text-neutral-600">
                        {row.humans}
                      </td>
                      <td className="px-6 py-3 font-semibold text-[#650BD8]">
                        {row.agents}
                      </td>
                      <td className="px-6 py-3 text-neutral-500">
                        {row.label}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="border-t border-neutral-200 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">
              Compare
            </p>
            <h2
              className="text-balance text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl"
              style={{ lineHeight: 1.2 }}
            >
              Everything in one table
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-6 py-4 text-left text-[13px] font-semibold text-neutral-600 w-2/5">
                    Feature
                  </th>
                  {["Free", "Plus", "Business", "Enterprise"].map((name) => (
                    <th
                      key={name}
                      className={`px-4 py-4 text-center text-[13px] font-semibold ${
                        name === "Plus" ? "text-[#650BD8]" : "text-neutral-600"
                      }`}
                    >
                      {name}
                      {name === "Plus" && (
                        <span className="ml-1.5 rounded-full bg-[#650BD8]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[#650BD8]">
                          ★
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <React.Fragment key={i}>
                    {row.section && (
                      <tr
                        key={`section-${row.section}`}
                        className="bg-neutral-50/80"
                      >
                        <td
                          colSpan={5}
                          className="px-6 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400"
                        >
                          {row.section}
                        </td>
                      </tr>
                    )}
                    <tr
                      className="border-t border-neutral-100 hover:bg-neutral-50/50 transition-colors"
                    >
                      <td className="px-6 py-3.5 text-[13px] text-neutral-700">
                        {row.label}
                      </td>
                      <td className="px-4 py-3.5">
                        <Cell value={row.free} />
                      </td>
                      <td className="px-4 py-3.5 bg-[#650BD8]/[0.02]">
                        <Cell value={row.plus} highlight />
                      </td>
                      <td className="px-4 py-3.5">
                        <Cell value={row.business} />
                      </td>
                      <td className="px-4 py-3.5">
                        <Cell value={row.enterprise} />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">
                FAQ
              </p>
              <h2
                className="text-balance text-3xl font-semibold tracking-tight text-[#111111]"
                style={{ lineHeight: 1.2 }}
              >
                Questions about pricing
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                Can&apos;t find what you&apos;re looking for?{" "}
                <a
                  href="#"
                  className="font-medium text-[#650BD8] underline underline-offset-2 hover:text-[#5209b0]"
                >
                  Chat with us
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-2">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.q} item={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-sell Knobase AI ── */}
      <section className="border-t border-neutral-200 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#650BD8]/20 bg-[#650BD8]/5 px-8 py-8 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#650BD8]/60">
                Also from Knobase
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[#111111]">
                Knobase AI
              </h3>
              <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-neutral-500">
                Build custom AI agents trained on your knowledge — no code
                required. Starting at $20/mo.
              </p>
            </div>
            <a
              href="https://knobase.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#650BD8]/25 bg-white px-5 py-2.5 text-sm font-medium text-[#650BD8] transition-colors hover:bg-[#650BD8]/5"
            >
              Learn more about Knobase AI
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Footer ── */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              Ready to collaborate with AI?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-neutral-500">
              Join the waitlist — no credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => setShowWaitlist(true)}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#650BD8] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#5209b0]"
              >
                Join the Waitlist
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <button
                onClick={() => setShowWaitlist(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                Contact sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </main>
  );
}
