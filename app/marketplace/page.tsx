"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Download,
  Package,
  Rocket,
  Share2,
  Tag,
  Users,
  Zap,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useWaitlist } from "@/components/waitlist/WaitlistProvider";

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   Mock template data
───────────────────────────────────────── */
type FilterTab = "All" | "Free" | "Paid" | "Popular" | "Newest";

const mockTemplates = [
  {
    id: 1,
    title: "SEO Content Agent Pack",
    creator: "alexdev",
    initials: "AD",
    price: 49,
    downloads: 312,
    tag: "Paid",
    popular: true,
  },
  {
    id: 2,
    title: "Customer Support Triage",
    creator: "miaowen",
    initials: "MW",
    price: 0,
    downloads: 891,
    tag: "Free",
    popular: true,
  },
  {
    id: 3,
    title: "Research & Summarizer Workflow",
    creator: "jsmith",
    initials: "JS",
    price: 29,
    downloads: 145,
    tag: "Paid",
    popular: false,
  },
  {
    id: 4,
    title: "Code Review Assistant",
    creator: "tanaka_k",
    initials: "TK",
    price: 0,
    downloads: 543,
    tag: "Free",
    popular: true,
  },
  {
    id: 5,
    title: "Sales Outreach Automator",
    creator: "priya_r",
    initials: "PR",
    price: 99,
    downloads: 78,
    tag: "Paid",
    popular: false,
  },
  {
    id: 6,
    title: "Meeting Notes Agent",
    creator: "luca_b",
    initials: "LB",
    price: 0,
    downloads: 1204,
    tag: "Free",
    popular: true,
  },
];

/* ─────────────────────────────────────────
   Hero Section
───────────────────────────────────────── */
function HeroSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative overflow-hidden bg-[#111111] px-4 pt-24 pb-20 sm:px-6 sm:pt-32 sm:pb-28 lg:px-8">
      {/* Background blur accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#650BD8]/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#650BD8]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
        >
          <Image
            src="/openclaw.png"
            alt="OpenClaw"
            width={20}
            height={20}
            className="h-5 w-5 rounded object-contain"
          />
          OpenClaw Marketplace
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/openclaw.png"
            alt="OpenClaw"
            width={120}
            height={120}
            className="h-28 w-28 rounded-2xl object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-balance text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
          style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          Sell Your OpenClaw Setup.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
        >
          Start by sharing with the community — free, instant, one click.
          Selling unlocks soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#browse"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-[#111111] transition-colors hover:bg-neutral-100"
          >
            Browse Setups
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#share"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            Share Your Setup
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 text-sm text-white/35"
        >
          Be a pioneer of the OpenClaw community
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Share Section
───────────────────────────────────────── */
const shareReasons = [
  {
    icon: Users,
    title: "Someone needs exactly what you built",
    body: "That SEO agent pack you spent 3 weeks tuning? A dev somewhere is starting from scratch on the same problem. One export changes that.",
  },
  {
    icon: Zap,
    title: "One command. Instant community impact.",
    body: "Export your agents, prompts, and workflows into a single .openclaw file. We handle API key sanitization. You just hit publish.",
  },
  {
    icon: Share2,
    title: "Build a name in the OpenClaw ecosystem",
    body: "The developers who gave back built the biggest followings. Forks, feedback, and reputation compound fast when your work is public.",
  },
];

function ShareSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section
      id="share"
      className="bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <FadeUp className="mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-4 py-1.5 text-sm font-medium text-[#650BD8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#650BD8]" />
            Share Your Setup
          </div>
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — headline + CTA */}
          <FadeUp>
            <h2
              className="text-balance text-3xl font-bold text-[#111111] sm:text-4xl"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Your config is someone else&apos;s
              breakthrough.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-500">
              The OpenClaw community runs on shared knowledge. Package your best
              agent setups as a{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-[#650BD8]">
                .openclaw
              </code>{" "}
              file and let others fork and build on your work — for free.
            </p>

            <blockquote className="mt-8 border-l-2 border-[#650BD8]/30 pl-5 text-base italic leading-relaxed text-neutral-500">
              &ldquo;I learned everything from free templates. Now I publish
              every setup I finish. The forks are the best feedback loop I&apos;ve
              ever had.&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => openWaitlist()}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#650BD8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5209b0]"
              >
                Share Your Setup — It&apos;s Free
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <a
                href="#browse"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-[#650BD8]"
              >
                Browse community setups →
              </a>
            </div>
          </FadeUp>

          {/* Right — reason cards */}
          <div className="flex flex-col gap-4">
            {shareReasons.map((reason, i) => (
              <FadeUp key={reason.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-xl border border-neutral-100 bg-neutral-50 p-5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white">
                    <reason.icon size={16} className="text-[#650BD8]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">{reason.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">{reason.body}</p>
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

/* ─────────────────────────────────────────
   Browse Section
───────────────────────────────────────── */
function BrowseSection() {
  const [filter, setFilter] = useState<FilterTab>("All");

  const tabs: FilterTab[] = ["All", "Popular", "Newest"];

  const filtered = mockTemplates.filter((t) => {
    if (filter === "All") return t.tag === "Free";
    if (filter === "Popular") return t.popular && t.tag === "Free";
    if (filter === "Newest") return t.tag === "Free";
    return t.tag === "Free";
  });

  return (
    <section
      id="browse"
      className="bg-neutral-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-10 text-center">
          <h2
            className="text-3xl font-bold text-[#111111] sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Community Setups
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-neutral-500">
            Real configurations from real OpenClaw users. Fork any setup with
            one click and it&apos;s live in your workspace.
          </p>
        </FadeUp>

        {/* Filter tabs */}
        <FadeUp delay={0.05}>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === tab
                    ? "bg-[#650BD8] text-white"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:border-[#650BD8]/30 hover:text-[#650BD8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Template grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((template, i) => (
            <FadeUp key={template.id} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-md">
                {/* Thumbnail placeholder */}
                <div className="mb-4 h-32 w-full rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                  <Package size={28} className="text-neutral-300" />
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-[#111111] leading-snug">
                    {template.title}
                  </h3>
                  {template.price === 0 ? (
                    <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                      Free
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-[#650BD8]/10 px-2 py-0.5 text-xs font-medium text-[#650BD8]">
                      ${template.price}
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-[10px] font-bold text-neutral-500">
                    {template.initials}
                  </div>
                  <span className="text-xs text-neutral-400">
                    @{template.creator}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-xs text-neutral-400">
                    <Download size={11} />
                    {template.downloads.toLocaleString()}
                  </span>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-[#650BD8] py-2 text-xs font-medium text-white transition-colors hover:bg-[#5209b0]">
                    Fork This Setup
                  </button>
                  <button className="flex-1 rounded-lg border border-neutral-200 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
                    View Details
                  </button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-10 text-center">
          <p className="text-sm text-neutral-500">
            Built something worth sharing?{" "}
            <a
              href="#waitlist-cta"
              className="font-medium text-[#650BD8] hover:underline"
            >
              Publish your setup →
            </a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   How It Works
───────────────────────────────────────── */
const steps = [
  {
    number: "1",
    icon: Package,
    title: "Export",
    description:
      "Connect OpenClaw to Knobase. One command packages your agents, prompts, and workflows into a .openclaw file. API keys are scrubbed automatically.",
  },
  {
    number: "2",
    icon: Rocket,
    title: "Publish",
    description:
      "Write a short description, add a screenshot, and hit publish. Your setup is live and forkable by the community in seconds.",
  },
  {
    number: "3",
    icon: Users,
    title: "Community forks it",
    description:
      "Anyone can fork your setup with one click and deploy it straight to their workspace. You get credit, followers, and feedback.",
  },
];

function HowItWorksSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <FadeUp className="mb-14 text-center">
          <h2
            className="text-3xl font-bold text-[#111111] sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            How The Marketplace Works
          </h2>
        </FadeUp>

        <div className="relative grid gap-8 sm:grid-cols-3">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-neutral-200 sm:block" />

          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <step.icon size={24} className="text-[#650BD8]" />
                </div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Step {step.number}
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#111111]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Waitlist CTA
───────────────────────────────────────── */
function WaitlistCTASection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section
      id="waitlist-cta"
      className="bg-neutral-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <FadeUp>
          <h2
            className="text-3xl font-bold text-[#111111] sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to share your setup?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-500">
            Knobase Workspace is launching soon. Be among the first to publish
            your OpenClaw configurations and help shape the community library.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => openWaitlist()}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#650BD8] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#5209b0]"
            >
              Join the Waitlist — Publish Early
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            Just browsing?{" "}
            <a
              href="#browse"
              className="font-medium text-neutral-600 hover:text-[#650BD8] hover:underline"
            >
              Explore community setups →
            </a>
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-neutral-400">
            <span>Free to publish</span>
            <span>·</span>
            <span>One-click fork</span>
            <span>·</span>
            <span>Instant deployment</span>
            <span>·</span>
            <span>No credit card required</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FAQ
───────────────────────────────────────── */
const faqs = [
  {
    q: "What exactly is a .openclaw file?",
    a: "It's a portable package of your OpenClaw agent configuration — prompts, tool definitions, workflows, and settings — with API keys stripped out. Anyone with OpenClaw and Knobase can fork it into their own workspace with one click.",
  },
  {
    q: "Is sharing really free? Are there any restrictions?",
    a: "Completely free. No listing fees, no usage limits, no strings. You publish, the community forks, everyone benefits.",
  },
  {
    q: "Who owns my setup after I publish it?",
    a: "You do, always. Forkers get a license to use and modify it in their own workspace. You can update, unpublish, or change anything at any time.",
  },
  {
    q: "Can I share part of my setup and keep the rest private?",
    a: "Yes. You choose exactly which agents, prompts, and workflows to include in a .openclaw file. Nothing is exported without your explicit selection.",
  },
  {
    q: "When is selling available?",
    a: "Earning is coming soon. Join the waitlist and you'll be the first to know when creator monetization goes live — and you'll get early access to set up your listings before the public launch.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-[#111111] sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Frequently Asked Questions
          </h2>
        </FadeUp>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.04}>
              <div className="rounded-xl border border-neutral-200 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[#111111] transition-colors hover:bg-neutral-50"
                >
                  {faq.q}
                  <span
                    className={`ml-4 shrink-0 text-neutral-400 transition-transform ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="border-t border-neutral-100 px-6 py-4 text-sm leading-relaxed text-neutral-500">
                    {faq.a}
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Earning Coming Soon
───────────────────────────────────────── */
function EarningComingSoon() {
  const { openWaitlist } = useWaitlist();

  return (
    <section id="sell" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-8 py-14 text-center sm:px-16">
            {/* Subtle background pattern */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#650BD8]/5 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#650BD8]/5 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-1.5 text-sm font-medium text-neutral-500">
                <Clock size={13} className="text-neutral-400" />
                Coming Soon
              </div>

              <h2
                className="text-balance text-3xl font-bold text-neutral-400 sm:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Earn from your setups.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
                Set your own price. Keep 100%. When someone forks your setup,
                you earn. We take 0% commission. Creator monetization is in
                active development.
              </p>

              <ul className="mx-auto mt-8 flex max-w-sm flex-col gap-3 text-left">
                {[
                  "You set the price — $19 to $199",
                  "100% revenue to you, 0% commission",
                  "One-click purchase and deploy for buyers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-400">
                    <Check size={14} className="shrink-0 text-neutral-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <button
                  onClick={() => openWaitlist()}
                  className="group inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:border-[#650BD8]/40 hover:text-[#650BD8]"
                >
                  Notify me when earning launches
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ShareSection />
      <BrowseSection />
      <HowItWorksSection />
      <WaitlistCTASection />
      <FAQSection />
      <EarningComingSoon />
      <Footer />
    </main>
  );
}
