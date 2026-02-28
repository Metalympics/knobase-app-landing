"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { WaitlistForm } from "../waitlist-form";

const STORAGE_KEY = "knobase_waitlist_submitted";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "success" || stored === "duplicate") {
      setSubmitted(true);
    }
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {!submitted && (
              <div className="mb-6 text-center">
                <h2
                  className="text-2xl font-semibold text-[#111111]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Join the Waitlist
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Be the first to experience human-AI collaboration in Knobase.
                </p>
              </div>
            )}

            <WaitlistForm onSubmitted={() => setSubmitted(true)} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
