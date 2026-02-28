"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Bot, MousePointer2 } from "lucide-react";
import { useWaitlist } from "@/components/waitlist/WaitlistProvider";

const presenceAvatars = [
  { label: "You", color: "#650BD8", cursor: true },
  { label: "Sarah", color: "#0ea5e9", cursor: false },
  { label: "Agent", color: "#10b981", cursor: true, isAgent: true },
];

export function Hero() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8">
      {/* Subtle top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-8"
          >
            <a
              href="/openclaw"
              className="inline-flex items-center gap-2 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-4 py-1.5 text-sm font-medium text-[#650BD8] transition-colors hover:bg-[#650BD8]/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#650BD8]" />
              Built for OpenClaw
            </a>
          </motion.div>

          <h1
            className="text-balance text-5xl font-bold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
            style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Work together.
            <br />
            <span className="text-[#650BD8]">Humans and agents,</span>
            <br />
            side by side.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 sm:text-xl">
            Knobase is the workspace where your team and your AI agents
            collaborate in real-time. Bring any agent you&apos;ve built —
            Knobase gives it a seat at the table.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => openWaitlist()}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#650BD8] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#5209b0]"
            >
              Join the Waitlist
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              See how it works
            </a>
          </div>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-20"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-200/60">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-400">
                knobase.com / workspace / product-spec
              </div>
              {/* Live presence avatars */}
              <div className="flex -space-x-1.5 shrink-0">
                {presenceAvatars.map((p) => (
                  <div
                    key={p.label}
                    title={p.label}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.isAgent ? <Bot size={10} /> : p.label[0]}
                  </div>
                ))}
              </div>
            </div>

            {/* Document body */}
            <div className="flex min-h-0 flex-col">
              {/* Sidebar strip */}
              <div className="flex">
                <div className="hidden w-48 shrink-0 border-r border-neutral-100 bg-neutral-50 p-4 sm:block">
                  <div className="space-y-1">
                    {[
                      "Product Spec",
                      "Roadmap",
                      "Meeting Notes",
                      "Engineering Wiki",
                      "Design Tokens",
                    ].map((item, i) => (
                      <div
                        key={item}
                        className={`rounded-md px-2 py-1.5 text-xs ${i === 0 ? "bg-[#650BD8]/10 font-medium text-[#650BD8]" : "text-neutral-500"}`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Editor area */}
                <div
                  className="flex-1 px-6 py-6 sm:px-10"
                  style={{ minHeight: "300px" }}
                >
                  <div className="mb-6">
                    <div className="h-7 w-64 rounded bg-neutral-100" />
                    <div className="mt-1 h-4 w-32 rounded bg-neutral-50" />
                  </div>

                  {/* Mock document lines */}
                  <div className="space-y-3">
                    <div className="h-3 w-full rounded bg-neutral-100" />
                    <div className="h-3 w-5/6 rounded bg-neutral-100" />
                    {/* Agent cursor line */}
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-2/3 rounded bg-neutral-100" />
                      <div className="flex items-center gap-1">
                        <div className="h-4 w-px bg-[#10b981]" />
                        <div className="flex items-center gap-1 rounded bg-[#10b981] px-1.5 py-0.5">
                          <Bot size={9} className="text-white" />
                          <span className="text-[9px] font-medium text-white">
                            @openclaw
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-3 w-4/5 rounded bg-neutral-100" />
                    <div className="h-3 w-full rounded bg-neutral-100" />

                    {/* @mention popup */}
                    <div className="relative">
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-24 rounded bg-neutral-100" />
                        <div className="inline-flex items-center gap-1 rounded-md border border-[#650BD8]/30 bg-[#650BD8]/5 px-2 py-0.5 text-[10px] font-medium text-[#650BD8]">
                          <MousePointer2 size={9} />
                          @openclaw
                        </div>
                        <div className="h-3 w-20 rounded bg-neutral-100" />
                      </div>

                      {/* Popup */}
                      <div className="absolute left-24 top-6 z-10 rounded-lg border border-neutral-200 bg-white p-3 shadow-lg">
                        <div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#650BD8]/10">
                            <Bot size={11} className="text-[#650BD8]" />
                          </div>
                          <span>@openclaw is writing...</span>
                        </div>
                        <p className="mt-1.5 max-w-[180px] text-[10px] leading-relaxed text-neutral-500">
                          Drafting the API spec section based on your meeting
                          notes...
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 h-3 w-3/4 rounded bg-neutral-100" />
                    <div className="h-3 w-full rounded bg-neutral-100" />
                    {/* Human cursor line */}
                    <div className="flex items-center gap-1.5">
                      <div className="h-3 w-2/5 rounded bg-neutral-100" />
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1 rounded bg-[#650BD8] px-1.5 py-0.5">
                          <Users size={9} className="text-white" />
                          <span className="text-[9px] font-medium text-white">
                            You
                          </span>
                        </div>
                        <div className="h-4 w-px bg-[#650BD8]" />
                      </div>
                      <div className="h-3 w-1/3 rounded bg-neutral-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
