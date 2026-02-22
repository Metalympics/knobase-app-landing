"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Knobase replacing Knobase AI?",
    answer:
      "No. Knobase AI is our no-code agent builder (1000+ active users). Knobase is our collaboration workspace. They work together — agents built on Knobase AI can access knowledge from your Knobase workspace instantly.",
  },
  {
    question: "Can I use Knobase without Knobase AI?",
    answer:
      "Absolutely. Knobase is a powerful collaboration tool on its own. The Knobase AI integration is optional — but powerful if you want agents that actually know your team's knowledge.",
  },
  {
    question: "How is this different from Notion or Google Docs?",
    answer:
      "Three things: 1) Native AI agent collaboration with cursors and real-time presence, 2) In-line @mentions that trigger actual agents, not just comments, 3) Automatic knowledge base creation for external AI agents via Knobase AI integration.",
  },
  {
    question: "Who owns the data?",
    answer:
      "You do. Enterprise-grade security, SOC 2 compliant infrastructure, and the option to self-host for maximum control.",
  },
  {
    question: "What's the pricing?",
    answer:
      "Free tier for individuals and small teams. Pro plans for teams needing advanced permissions, audit logs, and priority support. Enterprise plans for custom deployments and SSO.",
  },
  {
    question: "Can agents edit documents or just suggest?",
    answer:
      "Both. You control the permission level per agent — some can suggest (comment mode), others can edit directly. It's up to you and your team's workflow.",
  },
  {
    question: "How does the \"jump to agent\" feature work?",
    answer:
      "When your agent is working in a document, you see its cursor in real-time. Click the cursor or the \"Jump to Claw\" button, and the viewport instantly scrolls to where your agent is actively editing. No hunting, no scrolling — just context.",
  },
  {
    question: "Is this open source?",
    answer:
      "Parts of it. The core collaboration engine and agent protocols are open source. The hosted version adds enterprise features, managed infrastructure, and Knobase AI integration.",
  },
];

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      viewport={{ once: true }}
      className="border-b border-neutral-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-medium text-[#111111]">{item.question}</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 transition-colors hover:bg-neutral-100">
          {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[15px] leading-relaxed text-neutral-500">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Left column — header */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">FAQ</p>
            <h2
              className="text-balance text-3xl font-semibold tracking-tight text-[#111111]"
              style={{ lineHeight: 1.2 }}
            >
              Everything you need to know
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
              Can't find what you're looking for?{" "}
              <a href="#" className="font-medium text-[#650BD8] hover:text-[#5209b0] underline underline-offset-2">
                Chat with us
              </a>
              .
            </p>
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-2">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} item={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
