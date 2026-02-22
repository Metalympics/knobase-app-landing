"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Work together.
            <br />
            <span className="text-[#650BD8]">Humans and agents, side by side.</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 sm:text-xl">
            Knobase is the workspace where your team collaborates in real-time — 
            and your AI agent has a seat at the table. Not a chatbot. A teammate.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#650BD8] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#5209b0]"
            >
              Start collaborating — Free
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-6 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              See how it works
            </a>
          </div>
        </motion.div>

        {/* Product Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-2xl">
            <div className="aspect-[16/10] w-full bg-gradient-to-br from-neutral-100 to-neutral-50 flex items-center justify-center">
              <p className="text-neutral-400 text-sm">Product Mockup Placeholder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}