"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  Download,
  Github,
  Key,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { WaitlistModal } from "@/components/waitlist";

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
      initial={{ opacity: 0, y: 20 }}
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
   CommandBlock – reusable copy-pasteable terminal block
───────────────────────────────────────── */

function CommandBlock({
  command,
  expectedOutput,
  showOutput = true,
}: {
  command: string;
  expectedOutput?: string;
  showOutput?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-[#1a1a2e] shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] text-white/30 font-mono">Terminal</span>
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <>
              <Check size={12} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Command */}
      <div className="p-4 overflow-x-auto">
        <code className="block whitespace-pre font-mono text-sm text-white/90">
          <span className="text-[#10b981]">$ </span>
          {command}
        </code>
      </div>

      {/* Expected output */}
      {showOutput && expectedOutput && (
        <div className="border-t border-white/10 bg-white/5 px-4 py-3">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-white/30">
            Expected output
          </p>
          <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-white/60">
            {expectedOutput}
          </pre>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   MultiCommandBlock – for quick reference with "Copy All"
───────────────────────────────────────── */

const quickRefCommands = `# Install
curl -fsSL https://raw.githubusercontent.com/Knobase-AI/openclaw-knobase/main/install.sh | bash

# Authenticate (browser)
openclaw knobase auth --browser

# Authenticate (API key)
openclaw knobase auth

# Start webhook
openclaw knobase webhook start

# Check status
openclaw knobase status

# View logs
openclaw knobase logs

# Stop webhook
openclaw knobase webhook stop

# Update skill
openclaw knobase update

# Uninstall
openclaw knobase uninstall`;

function QuickRefBlock() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(quickRefCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-[#1a1a2e] shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-[11px] font-mono text-white/30">
          All Available Commands
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <>
              <Check size={12} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy All
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-white/80">
        {quickRefCommands.split("\n").map((line, i) => (
          <div key={i}>
            {line.startsWith("#") ? (
              <span className="text-white/30">{line}</span>
            ) : line.trim() ? (
              <>
                <span className="text-[#10b981]">$ </span>
                <span>{line}</span>
              </>
            ) : (
              "\u00A0"
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}

/* ─────────────────────────────────────────
   Troubleshooting Accordion
───────────────────────────────────────── */

const troubleshootingItems = [
  {
    question: "Command not found?",
    command: `# Make sure openclaw is installed
which openclaw

# If not found, add to PATH or reinstall
export PATH="$PATH:$HOME/.openclaw/bin"`,
  },
  {
    question: "Port already in use?",
    command: `# Use a different port
openclaw knobase webhook start --port 3001`,
  },
  {
    question: "Authentication failed?",
    command: `# Reset and try again
openclaw knobase auth --reset
openclaw knobase auth --browser`,
  },
];

function AccordionItem({
  question,
  command,
}: {
  question: string;
  command: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCmd = () => {
    const lines = command
      .split("\n")
      .filter((l) => !l.startsWith("#") && l.trim())
      .join("\n");
    navigator.clipboard.writeText(lines);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[15px] font-medium text-[#111111]">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} className="text-neutral-400" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-[#1a1a2e]">
                <div className="flex items-center justify-end border-b border-white/10 px-4 py-2">
                  <button
                    onClick={copyCmd}
                    className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={12} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-white/80">
                  {command.split("\n").map((line, i) => (
                    <div key={i}>
                      {line.startsWith("#") ? (
                        <span className="text-white/30">{line}</span>
                      ) : line.trim() ? (
                        <>
                          <span className="text-[#10b981]">$ </span>
                          <span>{line}</span>
                        </>
                      ) : (
                        "\u00A0"
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────
   Step data
───────────────────────────────────────── */

const stepData = [
  {
    number: "01",
    icon: Download,
    title: "Install the Knobase skill",
    description:
      "Run this command to install the OpenClaw skill on your machine.",
    command:
      "curl -fsSL https://raw.githubusercontent.com/Knobase-AI/openclaw-knobase/main/install.sh | bash",
    output: `🚀 Installing Knobase Skill for OpenClaw...

✓ Node.js detected
✓ Git detected
✓ Skill installed to ~/.openclaw/skills/knobase

Next: Authenticate with Knobase`,
  },
  {
    number: "02",
    icon: Key,
    title: "Choose how to authenticate",
    description: null, // handled with tabs
    tabs: [
      {
        label: "Browser (recommended)",
        command: "openclaw knobase auth --browser",
        output: `Opening browser to app.knobase.com/auth/openclaw...

✓ Browser authentication complete
✓ Token saved locally
✓ Ready to use!`,
      },
      {
        label: "API Key",
        command: "openclaw knobase auth",
        output: `🔌 Knobase Authentication

Choose method:
  [1] Browser authentication (recommended)
  [2] API key

Enter choice [1]: 2

Enter your Knobase API Key: kb_sk_xxxxxxxx
Enter your Workspace ID: ws_xxxxxxxx

✓ Authenticated as: OpenClaw Agent
✓ Agent ID: knobase_agent_xxxx
✓ Connected to workspace: My Workspace`,
      },
    ],
  },
  {
    number: "03",
    icon: Zap,
    title: "Start receiving @mentions",
    description:
      "Run this to start listening for @openclaw mentions from Knobase.",
    command: "openclaw knobase webhook start",
    output: `🚀 Knobase webhook server running

Agent ID: knobase_agent_a1b2c3d4-e5f6-7890-abcd-ef1234567890
Webhook URL: http://localhost:3456/webhook/knobase
Health Check: http://localhost:3456/health

📱 Notifications will be sent to your configured channel

Press Ctrl+C to stop`,
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Test your connection",
    description: "Send a test notification to make sure everything works.",
    command: "openclaw knobase status",
    output: `🔍 Knobase Connection Status

Agent ID: knobase_agent_a1b2c3d4...
Status: ✅ Connected
Workspace: My Workspace
Webhook: ✅ Running on port 3456
API: ✅ Healthy
Last seen: 2 seconds ago`,
  },
];

/* ─────────────────────────────────────────
   Inline copy button for one-line commands
───────────────────────────────────────── */

function InlineCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
      aria-label="Copy command"
    >
      {copied ? (
        <>
          <Check size={12} className="text-[#10b981]" />
          <span className="text-[#10b981]">Copied!</span>
        </>
      ) : (
        <>
          <Copy size={12} />
          Copy
        </>
      )}
    </button>
  );
}

/* ─────────────────────────────────────────
   Quick Reference cards
───────────────────────────────────────── */

const quickCards = [
  {
    label: "Install",
    cmd: "curl -fsSL https://raw.githubusercontent.com/Knobase-AI/openclaw-knobase/main/install.sh | bash",
  },
  { label: "Auth", cmd: "openclaw knobase auth --browser" },
  { label: "Start", cmd: "openclaw knobase webhook start" },
  { label: "Status", cmd: "openclaw knobase status" },
];

/* ─────────────────────────────────────────
   StepCard with auth tabs support
───────────────────────────────────────── */

function StepCard({ step }: { step: (typeof stepData)[number] }) {
  const [activeTab, setActiveTab] = useState(0);

  const hasTabs = !!step.tabs;
  const currentCommand = hasTabs
    ? step.tabs![activeTab].command
    : step.command!;
  const currentOutput = hasTabs ? step.tabs![activeTab].output : step.output!;

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#650BD8]/10">
          <step.icon size={22} className="text-[#650BD8]" strokeWidth={2} />
        </span>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#650BD8]/40">
            Step {step.number}
          </span>
          <h3 className="text-xl font-semibold text-[#111111]">{step.title}</h3>
        </div>
      </div>

      {/* Description */}
      {step.description && (
        <p className="mb-5 text-[15px] leading-relaxed text-neutral-500">
          {step.description}
        </p>
      )}

      {/* Auth tabs */}
      {hasTabs && (
        <div className="mb-5">
          <p className="mb-3 text-[15px] leading-relaxed text-neutral-500">
            Two options — pick whichever suits you:
          </p>
          <div className="flex gap-2">
            {step.tabs!.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === i
                    ? "bg-[#650BD8] text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Command block */}
      <CommandBlock
        command={currentCommand}
        expectedOutput={currentOutput}
        showOutput
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */

export default function OpenClawPage() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        {/* ── Hero ── */}
        <section className="relative px-4 pt-24 pb-12 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#650BD8]/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <div className="mb-6 flex justify-center">
                <Image
                  src="/openclaw.png"
                  alt="OpenClaw"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-xl object-contain"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.03}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#10b981]/20 bg-[#10b981]/5 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10b981] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
                </span>
                <span className="text-sm font-medium text-[#10b981]">
                  One-Command Setup
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1
                className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl"
                style={{ lineHeight: 1.1 }}
              >
                Connect OpenClaw to
                <br />
                Knobase in 3 Commands
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-500">
                Copy-paste setup for instant{" "}
                <code className="rounded border border-[#650BD8]/20 bg-[#650BD8]/5 px-1.5 py-0.5 text-sm font-semibold text-[#650BD8]">
                  @openclaw
                </code>{" "}
                mentions. Type it anywhere in your document and your agent
                responds inline.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#commands"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#650BD8] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5209b0]"
                >
                  View Setup Steps
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://github.com/Knobase-AI/openclaw-knobase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Step-by-Step Commands ── */}
        <section
          id="commands"
          className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-[900px]">
            <FadeUp>
              <div className="mb-16 text-center">
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">
                  Step-by-step
                </p>
                <h2
                  className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl"
                  style={{ lineHeight: 1.2 }}
                >
                  Up and running in under a minute
                </h2>
              </div>
            </FadeUp>

            <div className="space-y-12">
              {stepData.map((step, i) => (
                <FadeUp key={step.number} delay={i * 0.05}>
                  <StepCard step={step} />
                </FadeUp>
              ))}
            </div>

            {/* One-liner for power users */}
            <FadeUp delay={0.2}>
              <div className="mt-16 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                <div className="mb-4">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                    Advanced
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#111111]">
                  One-command setup
                </h3>
                <p className="mt-1 mb-5 text-sm text-neutral-500">
                  For power users who want to run everything at once. Only use
                  if you understand each step.
                </p>
                <CommandBlock
                  command="curl -fsSL https://raw.githubusercontent.com/Knobase-AI/openclaw-knobase/main/install.sh | bash && openclaw knobase auth --browser && openclaw knobase webhook start"
                  showOutput={false}
                />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Quick Reference ── */}
        <section className="border-t border-neutral-200 bg-[#fafafa] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[900px]">
            <FadeUp>
              <div className="mb-10 text-center">
                <h2
                  className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl"
                  style={{ lineHeight: 1.2 }}
                >
                  Quick reference
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-neutral-500">
                  All commands in one place.
                </p>
              </div>
            </FadeUp>

            {/* Card grid */}
            <FadeUp delay={0.05}>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {quickCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#650BD8]/60">
                      {card.label}
                    </p>
                    <div className="flex items-center gap-2 rounded-md bg-neutral-50 px-3 py-2">
                      <code className="flex-1 font-mono text-[13px] text-neutral-700 overflow-x-auto">
                        {card.cmd}
                      </code>
                      <InlineCopyButton text={card.cmd} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Full reference block */}
            <FadeUp delay={0.1}>
              <QuickRefBlock />
            </FadeUp>
          </div>
        </section>

        {/* ── Troubleshooting ── */}
        <section className="border-t border-neutral-200 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[700px]">
            <FadeUp>
              <div className="mb-8 text-center">
                <h2
                  className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl"
                  style={{ lineHeight: 1.2 }}
                >
                  Troubleshooting
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.05}>
              <div>
                {troubleshootingItems.map((item) => (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    command={item.command}
                  />
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── CTA Footer ── */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="mx-auto max-w-3xl rounded-2xl bg-[#650BD8] px-8 py-20 text-center sm:px-16">
              <h2
                className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                style={{ lineHeight: 1.2 }}
              >
                Ready to connect your agent?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
                Join thousands of developers using Knobase. Set up in under a
                minute.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => setShowWaitlist(true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#650BD8] transition-colors hover:bg-white/90"
                >
                  Join Waitlist
                  <ArrowRight size={16} />
                </button>
                <a
                  href="https://github.com/Knobase-AI/openclaw-knobase/blob/main/SKILL.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  View Documentation
                </a>
              </div>
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
      />
    </>
  );
}
