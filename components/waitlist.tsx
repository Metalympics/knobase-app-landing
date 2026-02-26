"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "./waitlist-form";

export { WaitlistModal } from "./waitlist/WaitlistModal";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="border-t border-neutral-200 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#650BD8]">
            Early access
          </p>
          <h2
            className="text-balance text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl"
            style={{ lineHeight: 1.2 }}
          >
            Be first to try human-AI
            <br />
            collaboration in Knobase
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-neutral-500">
            Sign up for early access. We&apos;ll email you when your workspace
            is ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <WaitlistForm />
        </motion.div>
      </div>
    </section>
  );
}
