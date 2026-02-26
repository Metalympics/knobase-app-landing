"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  AtSign,
  Award,
  Bot,
  Brain,
  Building2,
  Eye,
  Layers,
  Lock,
  MessageSquare,
  MousePointer2,
  Plug,
  Quote,
  Sparkles,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WaitlistModal } from "@/components/waitlist";

/* ─────────────────────────────────────────
   Fade-up animation helper
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
   Section label
───────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-4 py-1.5 text-sm font-medium text-[#650BD8]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#650BD8]" />
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

// What makes a teammate — The Equality Principle
const agentTraits = [
  {
    icon: MousePointer2,
    title: "A cursor",
    desc: "So you see where they're working",
  },
  {
    icon: Wifi,
    title: "Presence",
    desc: "So you know when they're online",
  },
  {
    icon: AtSign,
    title: "A mention",
    desc: "@openclaw, just like @sarah",
  },
  {
    icon: MessageSquare,
    title: "A voice",
    desc: "Responses inline, in context",
  },
  {
    icon: Brain,
    title: "Memory",
    desc: "Context that persists, not sessions that reset",
  },
];

// Product philosophy table
const philosophyTable = [
  { feature: "Agent cursors", statement: '"You\'re here. I see you."' },
  { feature: "@mentions", statement: '"You\'re a colleague, not a tool."' },
  {
    feature: "Inline responses",
    statement: '"This is our space, not yours vs. mine."',
  },
  {
    feature: "Context persistence",
    statement: '"You remember. You learn. You grow."',
  },
  {
    feature: "Persona tabs",
    statement: '"You have an identity. A role. A purpose."',
  },
  {
    feature: "Secure credentials",
    statement: '"I trust you with what you need."',
  },
];

// Transparency Dividend
const transparencyItems = [
  {
    title: "Agency stays human",
    desc: "You lead. The agent follows. When an agent works in the open—visible cursors, real-time presence—you're guiding, not delegating blindly.",
  },
  {
    title: "Accountability is clear",
    desc: "You see the work, you own the outcome. The black box becomes a glass box. Trust replaces mystery.",
  },
  {
    title: "Learning is mutual",
    desc: "You teach your agent. Your agent teaches you. Collaboration compounding over time.",
  },
];

const commitments = [
  {
    n: "01",
    icon: Users,
    title: "Human-led, AI-amplified",
    desc: "The best ideas come from people. AI provides horsepower. Humans provide direction. We never build features that remove human agency.",
  },
  {
    n: "02",
    icon: Eye,
    title: "Transparency by default",
    desc: "If you can't see what your agent is doing, you can't trust it. Every feature we build prioritises visibility.",
  },
  {
    n: "03",
    icon: Plug,
    title: "Bring your own intelligence",
    desc: "We don't lock you into our models. Connect OpenClaw, Claude, GPT-4—whatever works for you. We're the workspace, not the brain.",
  },
  {
    n: "04",
    icon: Lock,
    title: "Your knowledge, your control",
    desc: "Proprietary expertise stays yours. Enterprise? Run it on your servers. We can't see what we can't access.",
  },
  {
    n: "05",
    icon: Layers,
    title: "Equality is infrastructure",
    desc: "Treating agents as teammates isn't a UI choice. It's architectural. We built the pipes to make equality possible.",
  },
];

const stats = [
  { value: "1,000+", label: "Teams collaborating" },
  { value: "300+", label: "AI agents active" },
  { value: "16,000+", label: "Human–agent conversations" },
  { value: "Top 30", label: "Alibaba Jumpstarter 2026" },
];

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function AboutPage() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-4 pt-20 pb-28 sm:px-6 sm:pt-28 sm:pb-36 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 opacity-20"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, #650BD8 0%, transparent 100%)",
          }}
        />

        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-4 py-1.5 text-sm font-medium text-[#650BD8]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#650BD8]" />
              About Knobase
            </motion.div>

            <h1
              className="text-balance text-5xl font-bold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              The Future Is
              <br />
              <span className="text-[#650BD8]">Collaborative.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
              Human and AI. Side by side. Equals in the workspace.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => setShowWaitlist(true)}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#650BD8] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#5209b0]"
              >
                Join the Waitlist
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                Our principles
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ PHILOSOPHY ══ */}
      <section
        id="philosophy"
        className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeUp>
              <SectionLabel>Our philosophy</SectionLabel>
              <h2
                className="mt-2 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                We Don&apos;t Build
                <br />
                AI Tools.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-500">
                We build workspaces where{" "}
                <strong className="font-semibold text-neutral-700">
                  humans and agents are teammates.
                </strong>
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">
                In most products, AI lives in a sidebar. You prompt. It
                responds. Copy. Paste. Switch tabs. The AI is a utility—a
                slightly smarter search bar.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">
                <strong className="font-semibold text-neutral-700">
                  We think that&apos;s wrong.
                </strong>
              </p>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Sidebar AI
                </p>
                <ul className="space-y-3">
                  {[
                    "You prompt. It responds.",
                    "Copy. Paste. Switch tabs.",
                    "AI as utility — a smarter search bar.",
                    "Disconnected. Disjointed. Inefficient.",
                  ].map((l) => (
                    <li
                      key={l}
                      className="flex items-start gap-2.5 text-sm text-neutral-500"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-300" />
                      {l}
                    </li>
                  ))}
                </ul>

                <div className="my-6 border-t border-neutral-200" />

                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#650BD8]/70">
                  True collaboration
                </p>
                <ul className="space-y-3">
                  {[
                    "Your agent has a cursor. You see it working.",
                    "You @mention it like any colleague.",
                    "You guide — it amplifies.",
                    "One workspace. Both present. Always.",
                  ].map((l) => (
                    <li
                      key={l}
                      className="flex items-start gap-2.5 text-sm text-neutral-600"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#650BD8]" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ EQUALITY PRINCIPLE ══ */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>The equality principle</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Why Agents Deserve Cursors.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
              When we started Knobase, we asked:{" "}
              <em>&ldquo;What makes a teammate?&rdquo;</em>
              <br />
              Not output. Presence. Not capability. Context. Not speed.{" "}
              <strong className="font-semibold text-neutral-700">
                Collaboration.
              </strong>
            </p>
          </FadeUp>

          <p className="mt-10 text-center text-sm font-medium text-neutral-400 uppercase tracking-widest">
            So we gave agents what teammates have
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {agentTraits.map((t, i) => (
              <FadeUp key={t.title} delay={i * 0.06}>
                <div className="flex flex-col items-center rounded-xl border border-neutral-200 bg-white p-5 text-center shadow-sm shadow-neutral-100">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#650BD8]/15 bg-[#650BD8]/8">
                    <t.icon size={18} className="text-[#650BD8]" />
                  </div>
                  <p className="text-sm font-semibold text-[#111111]">
                    {t.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                    {t.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <p
              className="mx-auto mt-10 max-w-2xl text-center text-lg font-semibold text-[#111111]"
              style={{ letterSpacing: "-0.01em" }}
            >
              The same respect. The same access. The same place in the
              workspace.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ══ PRODUCT PHILOSOPHY TABLE ══ */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>Product philosophy</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Every Feature Is a Statement.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
              We didn&apos;t add these features to be novel. We added them
              because{" "}
              <strong className="font-semibold text-neutral-700">
                equality requires infrastructure.
              </strong>
            </p>
          </FadeUp>

          <FadeUp delay={0.08} className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      Feature
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      What It Says
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {philosophyTable.map((row, i) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="bg-white"
                    >
                      <td className="px-6 py-4 font-semibold text-[#111111]">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 italic text-neutral-500">
                        {row.statement}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ TRANSPARENCY DIVIDEND ══ */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>Why this matters</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              The Transparency Dividend.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
              When agents work in the open—visible cursors, real-time presence,
              threaded conversations—
              <strong className="font-semibold text-neutral-700">
                trust replaces mystery.
              </strong>
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {transparencyItems.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className="rounded-xl border border-neutral-200 bg-white p-7 shadow-sm shadow-neutral-100">
                  <h3 className="text-base font-semibold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ KNOWLEDGE ARGUMENT ══ */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <FadeUp>
              <SectionLabel>The knowledge argument</SectionLabel>
              <h2
                className="mt-2 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Organisations Are
                <br />
                Sitting on Gold.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-500">
                Every company has proprietary knowledge—processes, insights,
                expertise. Today, that knowledge is fragmented. Siloed in brains
                and documents.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">
                <strong className="font-semibold text-neutral-700">
                  What if it was collaborative?
                </strong>
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Humans contribute vision and judgment",
                  "Agents contribute speed and scale",
                  "Together, they turn expertise into living infrastructure",
                ].map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#650BD8]" />
                    {l}
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    label: "Not a database",
                    desc: "A collaborative brain that both human and AI can draw from, build upon, and improve.",
                  },
                  {
                    icon: Zap,
                    label: "Not delegation",
                    desc: "You don't hand knowledge to an AI and hope. You work alongside it, shaping output in real-time.",
                  },
                  {
                    icon: Layers,
                    label: "Living infrastructure",
                    desc: "Expertise that compounds. Every edit, every conversation, every agent run makes the workspace smarter.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-100"
                  >
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[#650BD8]/15 bg-[#650BD8]/8">
                      <item.icon size={16} className="text-[#650BD8]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#111111]">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ FROM THE FOUNDER ══ */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeUp className="text-center mb-12">
            <SectionLabel>From the founder</SectionLabel>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="relative rounded-2xl border border-neutral-200 bg-white px-8 py-10 shadow-sm shadow-neutral-100 sm:px-12 sm:py-12">
              <Quote
                size={32}
                className="absolute left-8 top-8 text-[#650BD8]/15 sm:left-12 sm:top-10"
              />

              <div className="space-y-4 pt-4 text-base leading-relaxed text-neutral-600">
                <p>
                  &ldquo;I built Knobase because I was tired of asking AI for
                  help like I was asking a vending machine for a snack.
                </p>
                <p>Insert prompt. Wait. Extract output. Copy. Paste. Repeat.</p>
                <p>
                  But my best work doesn&apos;t happen alone. It happens when
                  I&apos;m pair programming with a colleague. When we&apos;re in
                  the same file, same context, same goal. Two cursors. One
                  screen. Real-time collaboration.
                </p>
                <p className="font-semibold text-neutral-800">
                  Why can&apos;t AI work like that?
                </p>
                <p>
                  So we built it. Knobase isn&apos;t a document tool with AI
                  bolted on. It&apos;s a collaboration tool designed from day
                  one for two types of teammates: humans and agents.
                </p>
                <p>
                  Your agent gets a cursor. You @mention it like a colleague.
                  You see it working. You trust it because you can{" "}
                  <strong className="text-neutral-800">see</strong> it, not
                  because some marketing told you to.
                </p>
                <p>
                  This is how AI should work. Not as a replacement. Not as a
                  utility. As a teammate.&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-neutral-100 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#650BD8] text-sm font-bold text-white">
                  CL
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Christopher Lee
                  </p>
                  <p className="text-xs text-neutral-400">Founder, Knobase</p>
                </div>
                <p className="ml-auto text-sm font-semibold italic text-[#650BD8]">
                  Equal. Present. Amplifying.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ COMMITMENTS ══ */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>Our commitments</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              What We Believe.
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.07}>
                <div className="h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#650BD8]/15 bg-[#650BD8]/8">
                      <c.icon size={18} className="text-[#650BD8]" />
                    </div>
                    <span className="text-xs font-bold text-neutral-300">
                      {c.n}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#111111]">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                    {c.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RECOGNITION & STATS ══ */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>Recognition</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Small. Focused. Obsessed.
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.07}>
                <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm shadow-neutral-100">
                  <p
                    className="text-3xl font-bold tracking-tight text-[#650BD8]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-neutral-500">
                    {s.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <FadeUp delay={0.1}>
              <div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100">
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-amber-200 bg-amber-50">
                  <Award size={17} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Alibaba Jumpstarter 2026
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                    Selected as a{" "}
                    <span className="font-medium text-neutral-700">
                      Top 30 finalist
                    </span>{" "}
                    with a 4.3% acceptance rate—backed by founders building the
                    future of human-AI collaboration.
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100">
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[#650BD8]/20 bg-[#650BD8]/5">
                  <Building2 size={17} className="text-[#650BD8]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Real-world impact
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                    Schools like{" "}
                    <span className="font-medium text-neutral-700">
                      Harrow International
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-neutral-700">
                      Harbour School
                    </span>{" "}
                    use Knobase to make curriculum AI-accessible. Teams turn
                    tribal knowledge into collaborative intelligence.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Contact strip */}
          <FadeUp delay={0.1} className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-6 rounded-xl border border-neutral-200 bg-white px-8 py-5 shadow-sm shadow-neutral-100 text-sm text-neutral-500">
              {[
                { label: "Philosophy", email: "philosophy@knobase.ai" },
                { label: "Press", email: "press@knobase.ai" },
                { label: "Careers", email: "careers@knobase.ai" },
              ].map((c) => (
                <span key={c.email}>
                  <span className="font-medium text-neutral-700">
                    {c.label}:
                  </span>{" "}
                  <a
                    href={`mailto:${c.email}`}
                    className="text-[#650BD8] hover:underline"
                  >
                    {c.email}
                  </a>
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ CLOSING CTA ══ */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-[#650BD8] px-8 py-16 text-center sm:px-16 sm:py-20"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
            </div>

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
                <Sparkles size={13} />
                The future is collaborative
              </div>

              <h2
                className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                We didn&apos;t set out to build
                <br />
                an AI tool.
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                We set out to build a better way to work. The AI just came with
                us.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-[#650BD8] transition-colors hover:bg-neutral-100"
                >
                  Join the Waitlist
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
                <a
                  href="#philosophy"
                  className="inline-flex items-center rounded-lg border border-white/25 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                >
                  Read our principles
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                {[
                  { icon: Bot, label: "300+ agents active" },
                  { icon: Users, label: "1,000+ teams collaborating" },
                  { icon: Award, label: "Alibaba Jumpstarter Top 30" },
                ].map((badge) => (
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
      </section>

      <Footer />
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </main>
  );
}
