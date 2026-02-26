"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Bot, AtSign, Cloud, Building2 } from "lucide-react";
import { WaitlistModal } from "@/components/waitlist";

/* ─────────────────────────────────────────
   Inline UI Mockups
───────────────────────────────────────── */

function MockInvite() {
  const members = [
    {
      initials: "SC",
      name: "Sarah Chen",
      sub: "Editor",
      color: "#0ea5e9",
      isAgent: false,
    },
    {
      initials: "MK",
      name: "Marcus K.",
      sub: "Editor",
      color: "#f59e0b",
      isAgent: false,
    },
    {
      initials: "",
      name: "@openclaw",
      sub: "AI Agent",
      color: "#10b981",
      isAgent: true,
    },
    {
      initials: "",
      name: "@aria",
      sub: "AI Agent",
      color: "#650BD8",
      isAgent: true,
    },
  ];
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/40 overflow-hidden">
      <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-5 py-3">
        <span className="text-xs font-semibold text-neutral-600">
          Workspace Members
        </span>
        <button className="rounded-md bg-[#650BD8] px-3 py-1.5 text-[11px] font-medium text-white">
          + Invite
        </button>
      </div>
      <div className="p-3 space-y-1">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-neutral-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: m.color }}
              >
                {m.isAgent ? <Bot size={14} /> : m.initials}
              </div>
              <div>
                <p className="text-[13px] font-medium text-neutral-800">
                  {m.name}
                </p>
                <p className="text-[11px] text-neutral-400">{m.sub}</p>
              </div>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                m.isAgent
                  ? "bg-[#10b981]/10 text-[#10b981]"
                  : "bg-neutral-100 text-neutral-500"
              }`}
            >
              {m.isAgent ? "Agent" : "Member"}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-100 bg-neutral-50 px-5 py-3">
        <div className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-400">
          Invite by email or name…
        </div>
      </div>
    </div>
  );
}

function MockMention() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/40 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-5 py-3">
        <div className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
        <span className="text-xs font-medium text-neutral-500">
          Product Roadmap — Q3
        </span>
      </div>
      <div className="p-5 space-y-3">
        <div className="h-2.5 w-4/5 rounded bg-neutral-100" />
        <div className="h-2.5 w-full rounded bg-neutral-100" />
        <div className="flex flex-wrap items-center gap-1.5">
          <div className="h-2.5 w-16 rounded bg-neutral-100" />
          <span className="inline-flex items-center gap-1 rounded-md border border-[#650BD8]/30 bg-[#650BD8]/8 px-2 py-0.5 text-[11px] font-semibold text-[#650BD8]">
            <AtSign size={9} />
            claw
          </span>
          <div className="h-2.5 w-24 rounded bg-neutral-100" />
        </div>
        <div className="mt-1 rounded-lg border border-[#10b981]/25 bg-[#10b981]/5 p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-5 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
              <Bot size={10} className="text-white" />
            </div>
            <span className="text-[11px] font-semibold text-[#10b981]">
              @openclaw is responding…
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-[#10b981]/15" />
            <div className="h-2 w-4/5 rounded bg-[#10b981]/15" />
            <div className="h-2 w-3/5 rounded bg-[#10b981]/10" />
          </div>
        </div>
        <div className="h-2.5 w-3/4 rounded bg-neutral-100" />
      </div>
    </div>
  );
}

function MockPresence() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/40 overflow-hidden">
      <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-5 py-3">
        <span className="text-xs font-semibold text-neutral-600">
          Active Now
        </span>
        <span className="text-[11px] font-medium text-[#10b981]">3 online</span>
      </div>
      <div className="p-4 space-y-2">
        {[
          {
            label: "Y",
            name: "You",
            loc: "Introduction",
            color: "#650BD8",
            isAgent: false,
          },
          {
            label: "",
            name: "@openclaw",
            loc: "Section 3 → Writing…",
            color: "#10b981",
            isAgent: true,
          },
          {
            label: "S",
            name: "Sarah",
            loc: "Conclusion",
            color: "#0ea5e9",
            isAgent: false,
          },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-lg bg-neutral-50 px-3 py-2.5"
          >
            <div
              className="h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
              style={{ backgroundColor: p.color }}
            >
              {p.isAgent ? <Bot size={12} /> : p.label}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium text-neutral-700">
                {p.name}
              </p>
              <p className="text-[11px] text-neutral-400 truncate">{p.loc}</p>
            </div>
            {p.isAgent && (
              <button className="rounded-md border border-[#650BD8]/20 bg-[#650BD8]/5 px-2 py-1 text-[10px] font-medium text-[#650BD8] whitespace-nowrap">
                Jump →
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-100 p-4 space-y-1.5">
        <div className="h-2 w-full rounded bg-neutral-100" />
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-1/2 rounded bg-neutral-100" />
          <div className="h-3 w-px bg-[#10b981]" />
          <div className="flex items-center gap-1 rounded bg-[#10b981]/15 px-1.5 py-0.5">
            <Bot size={8} className="text-[#10b981]" />
            <span className="text-[9px] font-medium text-[#10b981]">@openclaw</span>
          </div>
        </div>
        <div className="h-2 w-3/4 rounded bg-neutral-100" />
      </div>
    </div>
  );
}

function MockIntegrations() {
  const agents = [
    { name: "@openclaw", origin: "OpenClaw", color: "#10b981", initials: "" },
    { name: "@aria", origin: "Knobase AI", color: "#650BD8", initials: "" },
    { name: "@scout", origin: "Custom build", color: "#f59e0b", initials: "" },
  ];
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-200/40 overflow-hidden">
      <div className="border-b border-neutral-100 bg-neutral-50 px-5 py-3">
        <span className="text-xs font-semibold text-neutral-600">
          Your Agents in This Workspace
        </span>
      </div>
      <div className="p-5 space-y-3">
        {agents.map((a) => (
          <div
            key={a.name}
            className="flex items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: a.color }}
              >
                <Bot size={15} className="text-white" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-neutral-800">
                  {a.name}
                </p>
                <p className="text-[11px] text-neutral-400">
                  Built on {a.origin}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-[#650BD8]/8 px-2.5 py-1 text-[10px] font-medium text-[#650BD8]">
              Active
            </span>
          </div>
        ))}
        <div className="rounded-lg border border-dashed border-neutral-200 px-4 py-3 text-center">
          <span className="text-[11px] font-medium text-neutral-400">
            + Invite another agent…
          </span>
        </div>
      </div>
      <div className="border-t border-neutral-100 bg-neutral-50 px-5 py-3">
        <p className="text-center text-[10px] text-neutral-400">
          Bring agents from any platform — Knobase is the workspace, not the
          agent.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Feature row data
───────────────────────────────────────── */

const featureRows = [
  {
    step: "01",
    tag: "Team Collaboration",
    headline: "Invite agents like you invite teammates.",
    body: "Your agent isn't a tool you query — it's a collaborator with its own cursor and presence. Add agents to your workspace the same way you'd add a colleague. Set permissions, assign roles, and let everyone work together.",
    points: [
      "Agents appear alongside humans in the members list",
      "Granular permissions: admin, editor, viewer roles",
      "Real-time presence: see who (and what) is online",
      "Multi-tenant workspaces for teams",
    ],
    imageRight: false,
    Mockup: MockInvite,
  },
  {
    step: "02",
    tag: "@Mention",
    headline: "@openclaw and chat in context.",
    body: "Type @openclaw anywhere in your document and your agent responds right there — no tab-switching, no copy-pasting. Context-aware. Instant. Like a DM, but inside your actual work.",
    points: [
      "Inline AI commands without leaving your flow",
      "Agent sees the full document context",
      "Responds directly in the document",
      "Switch between agents mid-thought",
    ],
    imageRight: true,
    Mockup: MockMention,
    link: { href: "/openclaw", label: "Learn how to connect your OpenClaw agent" },
  },
  {
    step: "03",
    tag: "Live Presence",
    headline: "See exactly where your agents are working.",
    body: "Watch your agent's cursor in real-time. One click jumps your view directly to where it's actively editing. No hunting, no scrolling — just context, instantly.",
    points: [
      "Live cursor for every agent in the workspace",
      "Activity panel shows current location per agent",
      "One-click 'Jump to agent' navigation",
      "Visual diff as the agent writes",
    ],
    imageRight: false,
    Mockup: MockPresence,
  },
  {
    step: "04",
    tag: "Bring Your Own Agent",
    headline: "One workspace. Any agent you build.",
    body: "Knobase doesn't build agents — it gives yours a home. Bring agents from OpenClaw, Knobase AI, or anything custom-built. They show up as collaborators, not plugins.",
    points: [
      "Works with agents from OpenClaw, Knobase AI, or custom builds",
      "Run multiple agents in the same document simultaneously",
      "No lock-in — use whatever agent you already have",
      "Your data stays yours, regardless of which agent accesses it",
    ],
    imageRight: true,
    Mockup: MockIntegrations,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">
            How it works
          </p>
          <h2
            className="text-balance text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl"
            style={{ lineHeight: 1.2 }}
          >
            Built for teams that work with AI
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            From inviting your first agent to running a full AI-powered team — a
            complete workflow.
          </p>
        </div>

        {/* Alternating feature rows */}
        <div className="space-y-28">
          {featureRows.map(
            ({ step, tag, headline, body, points, imageRight, Mockup, link }) => (
              <motion.div
                key={step}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                {/* Text */}
                <div className={imageRight ? "lg:order-1" : "lg:order-2"}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#650BD8]/40">
                      {step}
                    </span>
                    <span className="h-px w-10 bg-[#650BD8]/20" />
                    <span className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                      {tag}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl"
                    style={{ lineHeight: 1.2 }}
                  >
                    {headline}
                  </h3>
                  {link && (
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-[#650BD8] hover:text-[#5209b0] transition-colors"
                    >
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  )}
                  <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
                    {body}
                  </p>
                  <ul className="mt-7 space-y-2.5">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-neutral-600"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-[#650BD8]"
                          strokeWidth={2.5}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup */}
                <div className={imageRight ? "lg:order-2" : "lg:order-1"}>
                  <Mockup />
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Hosting section (capstone — step 5)
───────────────────────────────────────── */

const cloudBullets = [
  "Managed by us",
  "Instant setup",
  "Automatic updates",
  "99.9% uptime SLA",
];

const selfHostedBullets = [
  "Run on your servers",
  "Full data control",
  "Custom integrations",
  "Compliance ready",
];

const sharedBullets = [
  "Real-time collab",
  "Agent-ready workspace",
  "Full API access",
  "Enterprise security",
];

export function Hosting() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <section
      id="hosting"
      className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">
            Step 05
          </p>
          <h2
            className="text-balance text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl"
            style={{ lineHeight: 1.2 }}
          >
            Choose how you host Knobase
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-neutral-500">
            Same product. Full flexibility. Deploy where it makes sense for your
            team.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col rounded-2xl border-2 border-[#650BD8]/25 bg-gradient-to-b from-[#650BD8]/5 to-white p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#650BD8]/10">
              <Cloud className="h-6 w-6 text-[#650BD8]" strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-semibold text-[#111111]">☁️ Cloud</h3>
            <p className="mt-1.5 text-sm text-neutral-500">
              Hosted and managed by Knobase.
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {cloudBullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-neutral-600"
                >
                  <Check
                    size={14}
                    className="shrink-0 text-[#650BD8]"
                    strokeWidth={2.5}
                  />
                  {b}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowWaitlist(true)}
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#650BD8] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5209b0]"
            >
              Join the Waitlist
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
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
            </button>
          </motion.div>

          {/* Self-hosted */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100">
              <Building2
                className="h-6 w-6 text-neutral-600"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-[#111111]">
              🏢 Self-Hosted
            </h3>
            <p className="mt-1.5 text-sm text-neutral-500">
              Deploy on your own infrastructure.
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {selfHostedBullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-neutral-600"
                >
                  <Check
                    size={14}
                    className="shrink-0 text-neutral-500"
                    strokeWidth={2.5}
                  />
                  {b}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowWaitlist(true)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              Contact Sales
            </button>
          </motion.div>
        </div>

        {/* Both include strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-sm font-medium text-neutral-500">
              Both include:
            </span>
            {sharedBullets.map((b, i) => (
              <span
                key={b}
                className="flex items-center gap-1.5 text-sm text-neutral-600"
              >
                <Check size={13} className="text-[#650BD8]" strokeWidth={2.5} />
                {b}
                {i < sharedBullets.length - 1 && (
                  <span className="ml-3 hidden text-neutral-300 sm:inline">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <WaitlistModal isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </section>
  );
}
