"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useWaitlist } from "@/components/waitlist/WaitlistProvider";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "/templates", label: "Templates" },
  { href: "#pricing", label: "Pricing" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
  // { href: "#docs", label: "Docs" },
  // { href: "#blog", label: "Blog" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { openWaitlist } = useWaitlist();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="h-8 w-8 rounded-lg bg-[#650BD8] flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <span className="text-base font-semibold tracking-tight">
            Knobase
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => openWaitlist()}
            className="rounded-lg bg-[#650BD8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5209b0]"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-md p-1 text-neutral-600 hover:text-neutral-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-neutral-200 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-neutral-100 pt-3">
                <button
                  className="rounded-lg bg-[#650BD8] px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-[#5209b0]"
                  onClick={() => { setIsOpen(false); openWaitlist(); }}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
