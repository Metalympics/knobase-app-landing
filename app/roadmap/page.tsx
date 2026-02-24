"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Circle,
  Clock,
  Code2,
  Eye,
  Layers,
  Lock,
  MonitorSmartphone,
  Network,
  Server,
  Share2,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

/* ─────────────────────────────────────────
   Animation helpers
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
type Phase = {
  id: string;
  status: "done" | "building" | "future";
  label: string;
  horizon: string;
  tagline: string;
  color: string;
  borderColor: string;
  bgColor: string;
  badgeBg: string;
  badgeText: string;
  dotColor: string;
  items: { icon: React.ElementType; title: string; desc: string }[];
};

const phases: Phase[] = [
  {
    id: "now",
    status: "done",
    label: "Now — Beta",
    horizon: "Available today",
    tagline:
      "The foundation is live. Humans and agents collaborate in the same workspace, right now.",
    color: "#10b981",
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    dotColor: "bg-emerald-500",
    items: [
      {
        icon: Zap,
        title: "OpenClaw integration",
        desc: "Connect your OpenClaw agents directly into any workspace. Give your agent a cursor, a seat, and a voice.",
      },
      {
        icon: Share2,
        title: "Advanced sharing & permissions",
        desc: "Granular access control for human members and AI agents alike. You decide who—and what—can see and edit.",
      },
      {
        icon: Store,
        title: "Template marketplace",
        desc: "Start instantly with community-built templates for product specs, research, meeting notes, and more.",
      },
      {
        icon: Network,
        title: "Core collaboration",
        desc: "Real-time multiplayer editing, live presence, @mentions, and persistent context across sessions.",
      },
    ],
  },
  {
    id: "next",
    status: "building",
    label: "Next 3 Months",
    horizon: "Q2 2026",
    tagline:
      "Expanding where you work and which agents you bring. Knobase meets you on every surface.",
    color: "#650BD8",
    borderColor: "border-violet-200",
    bgColor: "bg-violet-50",
    badgeBg: "bg-[#650BD8]/10",
    badgeText: "text-[#650BD8]",
    dotColor: "bg-[#650BD8]",
    items: [
      {
        icon: Server,
        title: "Self-hosted / On-premise",
        desc: "Deploy Knobase entirely within your own infrastructure. Full data sovereignty for enterprises and regulated industries.",
      },
      {
        icon: MonitorSmartphone,
        title: "Mobile & desktop apps",
        desc: "Native apps for iOS, Android, macOS, and Windows. Your workspace—and your agents—always within reach.",
      },
      {
        icon: Bot,
        title: "ChatGPT, Claude & Cursor integrations",
        desc: "Bring the models you already use. Connect any MCP-compatible agent and give it a presence in your workspace.",
      },
      {
        icon: Layers,
        title: "AI features",
        desc: "Inline AI suggestions, agent-drafted summaries, smart linking between documents and knowledge threads.",
      },
    ],
  },
  {
    id: "future",
    status: "future",
    label: "6–12 Months",
    horizon: "H2 2026",
    tagline:
      "The platform opens up. Agents coordinate, builders ship, enterprises deploy with confidence.",
    color: "#6366f1",
    borderColor: "border-indigo-200",
    bgColor: "bg-indigo-50",
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-700",
    dotColor: "bg-indigo-400",
    items: [
      {
        icon: Store,
        title: "Agent marketplace",
        desc: "Discover, install, and share purpose-built agents. One click to add a legal reviewer, a research assistant, a coding partner.",
      },
      {
        icon: Workflow,
        title: "Multi-agent workflows",
        desc: "Orchestrate multiple agents working in parallel across documents. Humans set the goal; agents divide and conquer.",
      },
      {
        icon: Code2,
        title: "Public API",
        desc: "Build on Knobase. Programmatically manage workspaces, spin up agents, and integrate Knobase into your own products.",
      },
      {
        icon: ShieldCheck,
        title: "Enterprise security",
        desc: "SSO, SCIM, audit logs, DLP controls, and custom data-residency options. Security that scales with your organisation.",
      },
    ],
  },
];

const statusMeta = {
  done: {
    icon: CheckCircle2,
    label: "Live",
    className: "text-emerald-600 bg-emerald-100",
  },
  building: {
    icon: Clock,
    label: "In progress",
    className: "text-[#650BD8] bg-[#650BD8]/10",
  },
  future: {
    icon: Circle,
    label: "Planned",
    className: "text-indigo-600 bg-indigo-100",
  },
};

/* ─────────────────────────────────────────
   Phase card
───────────────────────────────────────── */
function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  const meta = statusMeta[phase.status];

  return (
    <FadeUp delay={index * 0.08}>
      <div
        className={`rounded-2xl border ${phase.borderColor} bg-white overflow-hidden shadow-sm shadow-neutral-100`}
      >
        {/* Phase header */}
        <div
          className={`${phase.bgColor} border-b ${phase.borderColor} px-7 py-6`}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${meta.className}`}
                >
                  <meta.icon size={11} />
                  {meta.label}
                </span>
                <span className="text-xs text-neutral-400">
                  {phase.horizon}
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#111111]"
                style={{ letterSpacing: "-0.02em" }}
              >
                {phase.label}
              </h3>
              <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-neutral-500">
                {phase.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Items grid */}
        <div className="grid gap-px bg-neutral-100 sm:grid-cols-2">
          {phase.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 + i * 0.06 }}
              className="flex items-start gap-4 bg-white px-7 py-5"
            >
              <div
                className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: `${phase.color}12`,
                  border: `1px solid ${phase.color}25`,
                }}
              >
                <item.icon size={15} style={{ color: phase.color }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#111111]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* ── Opening Vision ── */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" />

        {/* Subtle radial glow */}
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
              Product roadmap
            </motion.div>

            <h1
              className="text-balance text-5xl font-bold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Not AI tools.
              <br />
              Not chatbots.
              <br />
              <span className="text-[#650BD8]">True collaboration.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
              We believe the future isn&apos;t humans{" "}
              <em className="not-italic font-medium text-neutral-700">using</em>{" "}
              AI. It&apos;s humans{" "}
              <em className="not-italic font-medium text-neutral-700">
                working with
              </em>{" "}
              AI. Here&apos;s how we&apos;re building toward that.
            </p>

            {/* Timeline progress strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-12 inline-flex items-center gap-0 rounded-full border border-neutral-200 bg-neutral-50 p-1"
            >
              {[
                { label: "Beta", color: "bg-emerald-500", active: true },
                { label: "Q2 2026", color: "bg-[#650BD8]", active: false },
                { label: "H2 2026", color: "bg-indigo-400", active: false },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <div
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                      step.active
                        ? "bg-white text-neutral-800 shadow-sm"
                        : "text-neutral-400"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${step.color}`}
                    />
                    {step.label}
                  </div>
                  {i < 2 && <div className="mx-1 h-px w-5 bg-neutral-200" />}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Today vs Tomorrow ── */}
      <section className="border-t border-neutral-200 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="mb-10 text-center">
            <SectionLabel>The shift we&apos;re making</SectionLabel>
          </FadeUp>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Today */}
            <FadeUp delay={0.05}>
              <div className="h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Where we are today
                </p>
                <ul className="space-y-4">
                  {[
                    "AI lives in sidebars.",
                    "You copy, paste, switch tabs.",
                    "AI generates, you edit.",
                    "Siloed. Disjointed. Inefficient.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-300" />
                      <span className="text-sm leading-relaxed text-neutral-500">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Tomorrow */}
            <FadeUp delay={0.1}>
              <div className="h-full rounded-2xl border border-[#650BD8]/20 bg-[#650BD8]/3 p-8">
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#650BD8]/70">
                  Where we&apos;re going
                </p>
                <ul className="space-y-4">
                  {[
                    "AI agents are teammates.",
                    "They sit beside you in the same document.",
                    "You see their cursor. They see yours.",
                    "You @mention them like any colleague.",
                    "You guide, they execute. Together.",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#650BD8]" />
                      <span className="text-sm leading-relaxed text-neutral-600">
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Roadmap phases ── */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.id} phase={phase} index={i} />
          ))}
        </div>
      </section>

      {/* ── Vision pillars ── */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center mb-3">
            <SectionLabel>What this looks like in practice</SectionLabel>
          </FadeUp>
          <FadeUp className="text-center mb-12" delay={0.05}>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
              True human‑AI collaboration
            </p>
          </FadeUp>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Transparency over black boxes",
                desc: "See where your agent works. Understand its reasoning. Guide the process, don't just review output.",
              },
              {
                icon: Zap,
                title: "Human-led innovation",
                desc: "The best ideas come from people. AI provides the horsepower—research, iteration, execution at machine speed. Humans provide vision and judgment.",
              },
              {
                icon: Network,
                title: "Shared context, amplified potential",
                desc: "No more explaining repeatedly. Your workspace is the shared brain. Both human and agent draw from the same knowledge, work toward the same goals.",
              },
              {
                icon: Layers,
                title: "Knowledge as living infrastructure",
                desc: "Organisations sit on expertise. We turn that expertise into collaborative assets—AI-accessible, human-editable, continuously improving.",
              },
              {
                icon: Users,
                title: "The agent-native workplace",
                desc: "Every knowledge worker has AI teammates as standard. Not as tools to query, but as collaborators to invite.",
              },
              {
                icon: Lock,
                title: "Always human-led",
                desc: "Every feature we ship expands what humans can direct, not what AI can do unsupervised. You stay in the driver's seat.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#650BD8]/15 bg-[#650BD8]/8">
                    <item.icon size={18} className="text-[#650BD8]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing vision CTA ── */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-[#650BD8] px-8 py-16 sm:px-16 sm:py-20"
          >
            {/* Ambient orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl" />
            </div>

            <div className="relative text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
                <Sparkles size={13} />
                The ultimate promise
              </div>

              <h2
                className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Humans and AI, side by side,
                <br />
                amplifying each other&apos;s
                <br />
                full potential.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Knobase is the operating system for the agent-native workplace.
                Not a chatbot in a separate tab—a collaborator in the same room,
                with the same context, working toward the same goals.
              </p>

              {/* Three milestones */}
              <div className="mt-12 flex flex-wrap items-start justify-center gap-6 text-left">
                {[
                  {
                    step: "01",
                    title: "See their cursor",
                    desc: "Agents with real presence. You know where they're working, what they see, how they reason.",
                  },
                  {
                    step: "02",
                    title: "Same knowledge, same goals",
                    desc: "One shared workspace. No context lost. Human and agent always on the same page.",
                  },
                  {
                    step: "03",
                    title: "Neither could do it alone",
                    desc: "Human vision × AI execution. What neither could achieve separately, achieved together.",
                  },
                ].map((m) => (
                  <div
                    key={m.step}
                    className="w-52 rounded-xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm"
                  >
                    <p className="text-xs font-bold text-white/40 mb-2">
                      {m.step}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {m.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/60">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-[#650BD8] transition-colors hover:bg-neutral-100"
                >
                  Start building today — Free
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg border border-white/25 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                >
                  Schedule a demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
