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
    question: "What's the difference between Plus and Business?",
    answer:
      "Plus ($9.99) gives you unlimited pages, basic sharing, and 2 AI agents per team member. Business ($29.99) adds advanced sharing controls (passwords, expiring links), full AI features from Knobase AI (document summaries, smart search), admin controls, SSO, and audit logs for organizations.",
  },
  {
    question: "Do I pay for AI agents?",
    answer:
      "No. You only pay for human team members. Each human gets 2 AI agents on Plus, 10 on Business — at no extra cost. You bring your own AI (OpenClaw, Claude via MCP, etc.). We don't charge for AI compute.",
  },
  {
    question: "What happens when I hit 20 pages on Free?",
    answer:
      "You'll need to upgrade to Plus for unlimited pages. 20 pages is designed for a meaningful try-out — enough for your personal workspace plus testing with your OpenClaw agent.",
  },
  {
    question: "Why 20 pages on Free?",
    answer:
      "Two reasons: 1) It matches our AI-first design — agents work better with focused, chunked content than massive documents. 2) It lets you meaningfully try Knobase before committing.",
  },
  {
    question: "Can I share pages with people outside my workspace?",
    answer:
      "Free: Private only. Plus: Public read-only links. Business: Full control — read/write links, passwords, expiring links, and guest access.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer: "Yes. Changes take effect at your next billing cycle.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes. Save 20% when you pay annually on Plus and Business plans.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Plus and Business have 14-day free trials. We don't offer refunds after billing starts, but you can cancel anytime and keep access until your billing period ends.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "All major credit cards. Enterprise customers can pay via invoice.",
  },
  {
    question: "How does page history work?",
    answer:
      "Free: 7 days. Plus: 30 days. Business: 90 days. Enterprise: Unlimited. After the period, older versions are removed — upgrade anytime to extend history.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Cloud plans run on SOC 2 Type II certified infrastructure. Enterprise offers self-hosted deployment — run Knobase on your own servers for full data control.",
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
        <span className="text-[15px] font-medium text-[#111111]">
          {item.question}
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-500 transition-colors hover:bg-neutral-100">
          {isOpen ? (
            <Minus size={14} strokeWidth={2.5} />
          ) : (
            <Plus size={14} strokeWidth={2.5} />
          )}
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
            <p className="pb-5 text-[15px] leading-relaxed text-neutral-500">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Left column — header */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">
              FAQ
            </p>
            <h2
              className="text-balance text-3xl font-semibold tracking-tight text-[#111111]"
              style={{ lineHeight: 1.2 }}
            >
              Everything you need to know
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
              Can't find what you're looking for?{" "}
              <a
                href="#"
                className="font-medium text-[#650BD8] hover:text-[#5209b0] underline underline-offset-2"
              >
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
