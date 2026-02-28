"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  AtSign,
  Bot,
  Brain,
  Check,
  ChevronRight,
  Clock,
  Code2,
  Database,
  Download,
  Eye,
  FileText,
  Key,
  Layers,
  MessageSquare,
  MousePointer2,
  Sparkles,
  Users,
  UserCircle2,
  Zap,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WaitlistModal } from "@/components/waitlist";

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
// FadeUp and SectionLabel below
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
   Mockups
───────────────────────────────────────── */

function MockSetupTerminal() {
  const commands = [
    {
      label: "Install",
      cmd: "curl -fsSL https://raw.githubusercontent.com/Knobase-AI/openclaw-knobase/main/install.sh | bash",
      out: "✓ Knobase skill installed",
    },
    {
      label: "Auth",
      cmd: "openclaw knobase auth --browser",
      out: "✓ Authenticated as OpenClaw Agent",
    },
    {
      label: "Start",
      cmd: "openclaw knobase webhook start",
      out: "✓ Webhook running on port 3456",
    },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-[#1a1a2e] shadow-xl shadow-neutral-200/40">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-[11px] font-mono text-white/30">
          Terminal
        </span>
      </div>
      <div className="p-5 space-y-4 font-mono text-[13px]">
        {commands.map((c) => (
          <div key={c.label}>
            <div className="flex items-start gap-2">
              <span className="text-[#10b981] select-none">$</span>
              <span className="text-white/80 break-all">{c.cmd}</span>
            </div>
            <div className="mt-1.5 ml-4 flex items-center gap-2 text-[#10b981]/70">
              <span>{c.out}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-md border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-2 mt-2">
          <span className="text-[#10b981] text-xs font-semibold">
            Agent online — @openclaw is ready
          </span>
        </div>
      </div>
    </div>
  );
}

function MockInviteDocument() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/40">
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-5 py-3">
        <div className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
        <span className="text-xs font-medium text-neutral-500">
          Product Strategy — Q3
        </span>
        <div className="ml-auto flex -space-x-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#650BD8] text-[9px] font-bold text-white">
            Y
          </div>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="h-2.5 w-4/5 rounded bg-neutral-100" />
        <div className="h-2.5 w-full rounded bg-neutral-100" />
        <div className="h-2.5 w-3/5 rounded bg-neutral-100" />
        <div className="flex items-center gap-1.5 rounded-md border border-[#650BD8]/20 bg-[#650BD8]/3 px-3 py-2">
          <span className="text-xs text-neutral-500">Hey </span>
          <span className="inline-flex items-center gap-1 rounded border border-[#650BD8]/30 bg-[#650BD8]/8 px-1.5 py-0.5 text-[11px] font-semibold text-[#650BD8]">
            <AtSign size={9} />
            claw
          </span>
          <span className="text-xs text-neutral-500">
            , can you help me with this?
          </span>
          <span className="ml-0.5 inline-block h-3.5 w-px animate-pulse bg-neutral-400" />
        </div>
      </div>
    </div>
  );
}

function MockCollaboration() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/40">
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-5 py-3">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10b981]" />
        <span className="text-xs font-medium text-neutral-500">
          Product Strategy — Q3
        </span>
        <div className="ml-auto flex -space-x-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#650BD8] text-[9px] font-bold text-white">
            Y
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#10b981]">
            <Bot size={9} className="text-white" />
          </div>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="h-2.5 w-4/5 rounded bg-neutral-100" />
        <div className="h-2.5 w-full rounded bg-neutral-100" />
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-3/5 rounded bg-neutral-100" />
          <div className="flex items-center gap-1 rounded bg-[#10b981] px-1.5 py-0.5">
            <Bot size={9} className="text-white" />
            <span className="text-[9px] font-medium text-white">@openclaw</span>
          </div>
          <div className="h-3.5 w-px animate-pulse bg-[#10b981]" />
        </div>
        <div className="rounded-lg border border-[#10b981]/20 bg-[#10b981]/5 p-3">
          <div className="mb-2 flex items-center gap-1.5">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#10b981]">
              <Bot size={9} className="text-white" />
            </div>
            <span className="text-[11px] font-semibold text-[#10b981]">
              @openclaw
            </span>
            <span className="text-[10px] text-[#10b981]/60">just now</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-[#10b981]/15" />
            <div className="h-2 w-4/5 rounded bg-[#10b981]/15" />
            <div className="h-2 w-2/3 rounded bg-[#10b981]/10" />
          </div>
        </div>
        <div className="h-2.5 w-2/3 rounded bg-neutral-100" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const steps = [
  {
    number: "01",
    time: "~1 min",
    title: "Set up the connection",
    icon: Zap,
    mockup: <MockSetupTerminal />,
    instructions: [
      "Install the Knobase skill on your machine",
      "Authenticate with your Knobase workspace",
      "Start the webhook to receive @mentions",
    ],
    outro: "Done. Your agent is now part of your workspace.",
    connectLink: true,
  },
  {
    number: "02",
    time: "10 sec",
    title: "Invite @openclaw to any document",
    icon: AtSign,
    mockup: <MockInviteDocument />,
    instructions: [
      "Open any document in Knobase",
      "Type: Hey @openclaw, can you help me with this?",
      "Press Enter",
    ],
    outro: "@openclaw is now in your document, ready to collaborate.",
  },
  {
    number: "03",
    time: "Ongoing",
    title: "Work together",
    icon: Users,
    mockup: <MockCollaboration />,
    instructions: [
      "Ask questions with @openclaw [your question]",
      "Watch @openclaw's cursor move as it works",
      "See responses inline — no tab switching",
      "Continue the conversation naturally",
    ],
  },
];

const capabilities = [
  {
    icon: AtSign,
    title: "Chat in context",
    desc: "Type @openclaw anywhere in your document. Your agent responds right there, in your flow. No tab switching. No copy-pasting.",
    example:
      "We need to increase user engagement. @openclaw suggest 5 strategies.",
  },
  {
    icon: MousePointer2,
    title: "See where @openclaw is working",
    desc: "Your agent has a cursor, just like a teammate. Know exactly what it is doing at all times.",
    bullets: [
      "Presence indicator — see when @openclaw is online",
      "Live cursor — watch where @openclaw is typing",
      "Jump to agent — click @openclaw's cursor to navigate",
      "Activity status — know what @openclaw is working on",
    ],
  },
  {
    icon: Layers,
    title: "Assign tasks",
    desc: "Give @openclaw work and keep going. Your agent handles it while you focus on other things.",
    bullets: [
      "@openclaw research competitor pricing and add to this table",
      "@openclaw rewrite this section for clarity",
      "@openclaw create a summary at the top",
    ],
  },
  {
    icon: MessageSquare,
    title: "Threaded conversations",
    desc: "Talk to @openclaw without ever leaving your document. All saved. All in context. All in one place.",
    thread: [
      { role: "you", text: "@openclaw outline this blog post" },
      { role: "agent", text: "Here is an outline with 5 sections…" },
      { role: "you", text: "@openclaw expand point 3" },
      { role: "agent", text: "Expanding section 3 now…" },
    ],
  },
  {
    icon: Brain,
    title: "Context-aware by default",
    desc: "@openclaw knows what you are looking at — active document, cursor position, recent changes, workspace knowledge. Just ask.",
    example: "@openclaw what do you think? — It already understands.",
  },
  {
    icon: Users,
    title: "Work side by side",
    desc: "Two cursors. One document. You write the draft, @openclaw reviews. You add a section, @openclaw suggests improvements.",
    bullets: [
      "You write the draft",
      "@openclaw reviews and edits",
      "You add a new section",
      "@openclaw suggests improvements",
    ],
  },
];

const agentFeatures = [
  {
    icon: Key,
    borderColor: "border-amber-200",
    bgColor: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "Secure credentials",
    desc: "Store API keys safely for @openclaw — encrypted at rest, scoped to your workspace. Add once in Settings → Agent Credentials. Rotate anytime.",
    bullets: [
      "AES-256 encryption at rest",
      "No more scattered .env files",
      "Centralised rotation from one place",
      "Works with OpenAI, Anthropic, and any custom keys",
    ],
  },
  {
    icon: UserCircle2,
    borderColor: "border-violet-200",
    bgColor: "bg-violet-50",
    iconBg: "bg-[#650BD8]/10",
    iconColor: "text-[#650BD8]",
    title: "Persona tab",
    desc: "Define who @openclaw is. Give it a role, tone, expertise, and custom instructions. Your agent is not generic — it is yours.",
    example:
      "Name: @openclaw\nRole: Technical writer\nTone: Clear and concise\nExpertise: API docs, tutorials\nInstructions: Always include code examples",
  },
  {
    icon: Download,
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Quick migration",
    desc: "Already using OpenClaw locally? Import everything in 30 seconds — configs, memory, personas, and tool definitions.",
    bullets: [
      "Settings → Import → OpenClaw",
      "Select your .openclaw/workspace folder",
      "Preview and confirm what imports",
      "Agent memory and context come with it",
    ],
  },
  {
    icon: Database,
    borderColor: "border-indigo-200",
    bgColor: "bg-indigo-50",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "Instant context",
    desc: "New agents do not start from zero. @openclaw has access to your full workspace knowledge base from minute one — no onboarding, no re-explaining.",
    example:
      "[New @openclaw joins]\nYou: @openclaw summarize our Q3 strategy\n@openclaw: [immediately finds and summarizes it]\n\nNo links shared. No context explained.",
  },
];

const useCases = [
  {
    icon: FileText,
    title: "Writing & content",
    items: [
      "Draft with @openclaw",
      "Edit and refine iteratively",
      "Generate outlines and summaries",
      "Maintain consistent tone",
    ],
  },
  {
    icon: Code2,
    title: "Code & development",
    items: [
      "Review code with @openclaw",
      "Write documentation",
      "Explain complex logic",
      "Suggest refactoring",
    ],
  },
  {
    icon: Eye,
    title: "Research & analysis",
    items: [
      "Gather and summarize information",
      "Compare options and trade-offs",
      "Build knowledge bases",
      "Fact-check documents",
    ],
  },
  {
    icon: Layers,
    title: "Project management",
    items: [
      "Create project plans",
      "Generate status reports",
      "Brainstorm solutions",
      "Document decisions",
    ],
  },
];

const faqs = [
  {
    q: "Do I pay extra for OpenClaw?",
    a: "No. Invite @openclaw on any plan, including Free.",
  },
  {
    q: "Does Knobase provide the AI?",
    a: "No. You connect your own OpenClaw agent. Knobase provides the workspace where you collaborate.",
  },
  {
    q: "How many agents can I invite?",
    a: "Free: 1 agent. Plus: 2 per member. Business: 10 per member.",
  },
  {
    q: "What if @openclaw does not respond?",
    a: "Check that your OpenClaw webhook is running (openclaw knobase webhook start) and that authentication succeeded. Run openclaw knobase status to check your connection.",
  },
  {
    q: "Can I use other agents besides OpenClaw?",
    a: "Yes. Any MCP-compatible agent can connect to Knobase. OpenClaw is just the most common starting point.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted in transit and at rest. Enterprise plans offer self-hosted deployment for full data control.",
  },
  {
    q: "Can I customise @openclaw's personality?",
    a: "Absolutely. Use the Persona Tab to define name, role, tone, expertise, and custom instructions. Create multiple personas for different tasks.",
  },
];

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function OpenClawPage() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 opacity-15"
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
              transition={{ duration: 0.4 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm"
            >
              <Image
                src="/openclaw.png"
                alt="OpenClaw"
                width={24}
                height={24}
                className="h-6 w-6 rounded object-contain"
              />
              <span className="text-sm font-medium text-neutral-700">
                Knobase × OpenClaw
              </span>
              <span className="rounded-full bg-[#10b981]/10 px-2 py-0.5 text-xs font-medium text-[#10b981]">
                Live
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
              className="mb-8 flex justify-center"
            >
              <Image
                src="/openclaw.png"
                alt="OpenClaw"
                width={144}
                height={144}
                className="h-36 w-36 rounded-2xl object-contain"
              />
            </motion.div>

            <h1
              className="text-balance text-5xl font-bold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Invite @openclaw to your workspace.
              <br />
              <span className="text-[#650BD8]">Work together.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
              Your OpenClaw agent, right where you work. Mention @openclaw in
              any document. Watch it type. Collaborate in real-time.
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
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                See how it works
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-12 inline-flex flex-wrap items-center justify-center gap-2"
            >
              {[
                { label: "Run 3 commands", time: "~1 min" },
                { label: "Invite via @mention", time: "10 sec" },
                { label: "Collaborate", time: "Right away" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-500">
                    <span>{s.label}</span>
                    <span className="rounded-full bg-white px-1.5 py-0.5 text-[10px] font-medium text-neutral-400 shadow-sm border border-neutral-100">
                      {s.time}
                    </span>
                  </div>
                  {i < 2 && (
                    <ChevronRight size={13} className="text-neutral-300" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section
        id="how-it-works"
        className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>How it works</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Three steps. Done.
            </h2>
          </FadeUp>

          <div className="mt-16 space-y-16">
            {steps.map((step, i) => (
              <FadeUp key={step.number} delay={i * 0.07}>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-5 flex items-center gap-3">
                      <span
                        className="text-5xl font-black"
                        style={{
                          color: "transparent",
                          WebkitTextStroke: "1.5px #650BD820",
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {step.number}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-400">
                        <Clock size={11} />
                        {step.time}
                      </span>
                    </div>

                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#650BD8]/15 bg-[#650BD8]/8">
                      <step.icon size={20} className="text-[#650BD8]" />
                    </div>

                    <h3
                      className="text-xl font-bold text-[#111111]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {step.title}
                    </h3>

                    <ol className="mt-5 space-y-3">
                      {step.instructions.map((ins, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#650BD8]/10 text-[10px] font-bold text-[#650BD8]">
                            {j + 1}
                          </span>
                          <span className="text-sm leading-relaxed text-neutral-600">
                            {ins}
                          </span>
                        </li>
                      ))}
                    </ol>

                    {step.outro && (
                      <div className="mt-5 flex items-start gap-2.5 rounded-lg border border-[#10b981]/20 bg-[#10b981]/5 px-4 py-3">
                        <Check
                          size={14}
                          className="mt-0.5 flex-shrink-0 text-[#10b981]"
                        />
                        <p className="text-sm font-medium text-[#10b981]">
                          {step.outro}
                        </p>
                      </div>
                    )}
                    {step.connectLink && (
                      <a
                        href="/connect/openclaw"
                        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#650BD8] transition-colors hover:text-[#5209b0]"
                      >
                        Step-by-step setup guide
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    {step.mockup}
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="mt-16 flex items-center gap-3">
                    <div className="flex-1 border-t border-dashed border-neutral-200" />
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
                      <ChevronRight size={13} className="text-neutral-400" />
                    </div>
                    <div className="flex-1 border-t border-dashed border-neutral-200" />
                  </div>
                )}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Setup callout ── */}
      <section className="border-t border-neutral-200 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#650BD8]/20 bg-[#650BD8]/5 px-8 py-10 sm:flex-row">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#650BD8]/50">
                  Setup guide
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-[#111111]">
                  Ready to connect your OpenClaw agent?
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500">
                  Follow our step-by-step guide — install the skill,
                  authenticate, and start your webhook. Three commands and
                  you're live.
                </p>
              </div>
              <a
                href="/connect/openclaw"
                className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#650BD8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5209b0]"
              >
                Step-by-step setup
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── What you can do together ── */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>Collaboration</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              What you can do together.
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <FadeUp key={cap.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#650BD8]/15 bg-[#650BD8]/8">
                    <cap.icon size={18} className="text-[#650BD8]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#111111]">
                    {cap.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-neutral-500">
                    {cap.desc}
                  </p>
                  {cap.example && (
                    <div className="mt-4 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2.5 font-mono text-xs leading-relaxed text-neutral-600">
                      {cap.example}
                    </div>
                  )}
                  {cap.bullets && (
                    <ul className="mt-4 space-y-1.5">
                      {cap.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-neutral-500"
                        >
                          <Check
                            size={11}
                            className="mt-0.5 flex-shrink-0 text-[#650BD8]"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {cap.thread && (
                    <div className="mt-4 space-y-1.5">
                      {cap.thread.map((msg, j) => (
                        <div
                          key={j}
                          className={`rounded-lg px-3 py-2 text-xs ${
                            msg.role === "you"
                              ? "bg-[#650BD8]/5 text-[#650BD8]"
                              : "border border-[#10b981]/20 bg-[#10b981]/5 text-[#10b981]"
                          }`}
                        >
                          <span className="mr-1 font-semibold">
                            {msg.role === "you" ? "You:" : "@openclaw:"}
                          </span>
                          {msg.text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent-friendly features ── */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>Agent features</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Built with agents in mind.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500">
              Everything your agent needs to work well — secure, personalised,
              and with full context from day one.
            </p>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {agentFeatures.map((feat, i) => (
              <FadeUp key={feat.title} delay={i * 0.07}>
                <div
                  className={`overflow-hidden rounded-xl border ${feat.borderColor} bg-white shadow-sm shadow-neutral-100`}
                >
                  <div
                    className={`${feat.bgColor} border-b ${feat.borderColor} px-6 py-5`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${feat.iconBg}`}
                      >
                        <feat.icon size={17} className={feat.iconColor} />
                      </div>
                      <h3
                        className="text-base font-bold text-[#111111]"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {feat.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="px-6 py-5">
                    {feat.bullets && (
                      <ul className="space-y-2">
                        {feat.bullets.map((b) => (
                          <li
                            key={b}
                            className={`flex items-start gap-2.5 text-sm text-neutral-600`}
                          >
                            <Check
                              size={13}
                              className={`mt-0.5 flex-shrink-0 ${feat.iconColor}`}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {feat.example && (
                      <pre className="overflow-x-auto rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-3 font-mono text-xs leading-relaxed text-neutral-600 whitespace-pre-wrap">
                        {feat.example}
                      </pre>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="text-center">
            <SectionLabel>Use cases</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              @openclaw adapts to your work.
            </h2>
          </FadeUp>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((uc, i) => (
              <FadeUp key={uc.title} delay={i * 0.06}>
                <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-100">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#650BD8]/15 bg-[#650BD8]/8">
                    <uc.icon size={17} className="text-[#650BD8]" />
                  </div>
                  <h3 className="mb-3 text-sm font-semibold text-[#111111]">
                    {uc.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {uc.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-neutral-500"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeUp className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2
              className="text-balance text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Common questions.
            </h2>
          </FadeUp>
          <div className="mt-12 divide-y divide-neutral-100">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.04}>
                <div className="py-6">
                  <p className="text-sm font-semibold text-[#111111]">
                    {faq.q}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {faq.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            </div>

            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
                <Sparkles size={13} />
                Free to try. No credit card required.
              </div>
              <h2
                className="text-balance text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Invite @openclaw to your workspace.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Start collaborating with your AI agent in real-time.
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
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                {[
                  { icon: Bot, label: "OpenClaw-native" },
                  { icon: Zap, label: "3-command setup" },
                  { icon: Zap, label: "MCP-compatible" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 text-sm font-medium text-white/70"
                  >
                    <b.icon size={14} className="text-white/50" />
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </main>
  );
}
