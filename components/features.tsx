"use client";

import { motion, type Variants } from "framer-motion";
import { Users, AtSign, Brain, Home, Check } from "lucide-react";

const features = [
  {
    icon: Users,
    headline: "Everyone gets an invite.",
    title: "Invite Humans & Agents Equally",
    body: "Your agent isn't a tool you query — it's a collaborator with its own cursor. Invite colleagues to documents. Invite your agent to the same documents. Everyone edits in real-time, sees each other's presence, and builds together.",
    keyPoints: [
      "Real-time cursors for humans and agents",
      "Live presence indicators (who's online, what they're viewing)",
      "Granular permissions: admin, editor, viewer roles",
      "Multi-tenant workspaces for teams",
    ],
  },
  {
    icon: AtSign,
    headline: "Call your agent. Jump to the work.",
    title: "@mention and Jump to Context",
    body: "Type @claw anywhere in your document and your agent responds in context — no tab-switching, no copy-pasting. Then click its cursor to instantly navigate to exactly where it's working. See its thought process unfold in real-time.",
    keyPoints: [
      "Inline AI commands without leaving your flow",
      "Real-time agent cursor tracking",
      "One-click navigation to agent's active location",
      "Context-aware responses (not generic chat)",
    ],
  },
  {
    icon: Brain,
    headline: "Write once. Power every agent.",
    title: "Your Workspace = Your Agent's Brain",
    body: "Pages you build in Knobase become instant knowledge bases for agents built on Knobase AI. Documentation, specs, wikis — all searchable, all referenceable, all agent-ready. Enterprise RAG built-in. Your workspace feeds your agents. Your agents feed your workflow.",
    keyPoints: [
      "Native integration with Knobase AI",
      "Automatic knowledge indexing",
      "Enterprise-grade search (RAG)",
      "Two-way sync: workspace ↔ agents",
    ],
  },
  {
    icon: Home,
    headline: "A home for your agents.",
    title: "Built for OpenClaw",
    body: "Knobase is designed for OpenClaw users who want their agents to have memory, context, and a place to live. Stop copy-pasting. Start co-authoring.",
    keyPoints: [],
    highlight: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Features() {
  return (
    <section id="features" className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">Features</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl" style={{ lineHeight: 1.2 }}>
            Built for teams that work with AI
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            Everything you need to collaborate with humans and agents in one seamless workspace.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        >
          {/* First two feature cards — full-width rows on desktop */}
          {features.slice(0, 2).map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group rounded-xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#650BD8]/10">
                <feature.icon className="h-5 w-5 text-[#650BD8]" strokeWidth={1.75} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {feature.title}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-[#111111]">{feature.headline}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">{feature.body}</p>
              {feature.keyPoints.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {feature.keyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-600">
                      <Check size={15} className="mt-0.5 shrink-0 text-[#650BD8]" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row — full-width large card + small card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 grid gap-6 lg:grid-cols-3"
        >
          {/* Brain feature — spans 2 cols */}
          <motion.div
            variants={cardVariants}
            className="group rounded-xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-lg lg:col-span-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#650BD8]/10">
              <Brain className="h-5 w-5 text-[#650BD8]" strokeWidth={1.75} />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {features[2].title}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-[#111111]">{features[2].headline}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">{features[2].body}</p>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {features[2].keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <Check size={15} className="mt-0.5 shrink-0 text-[#650BD8]" strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Built for OpenClaw — spans 1 col, accent bg */}
          <motion.div
            variants={cardVariants}
            className="group rounded-xl border border-[#650BD8]/20 bg-[#650BD8]/5 p-8 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#650BD8]/15">
              <Home className="h-5 w-5 text-[#650BD8]" strokeWidth={1.75} />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#650BD8]/70">
              {features[3].title}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-[#111111]">{features[3].headline}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{features[3].body}</p>
            <a
              href="https://knobase.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#650BD8] hover:text-[#5209b0]"
            >
              Explore Knobase AI →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}