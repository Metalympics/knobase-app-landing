"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-[#650BD8] px-6 py-16 text-center sm:px-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to give your agent a desk?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Join the teams building the future of human-AI collaboration. 
              Start free, scale as you grow.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-[#650BD8] transition-colors hover:bg-neutral-100"
              >
                Get started — Free forever
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Schedule a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}