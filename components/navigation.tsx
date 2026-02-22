"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[#650BD8]" />
          <span className="text-lg font-semibold">Knobase</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-neutral-600 hover:text-neutral-900">
            Features
          </a>
          <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900">
            Pricing
          </a>
          <a href="#docs" className="text-sm text-neutral-600 hover:text-neutral-900">
            Docs
          </a>
          <a
            href="https://knobase.ai"
            className="text-sm text-neutral-500 hover:text-neutral-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Looking for Knobase AI? →
          </a>
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="rounded-lg bg-[#650BD8] px-4 py-2 text-sm font-medium text-white hover:bg-[#5209b0]"
          >
            Get started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-sm text-neutral-600">
              Features
            </a>
            <a href="#pricing" className="text-sm text-neutral-600">
              Pricing
            </a>
            <a href="#docs" className="text-sm text-neutral-600">
              Docs
            </a>
            <a
              href="https://knobase.ai"
              className="text-sm text-neutral-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Looking for Knobase AI? →
            </a>
            <a
              href="#"
              className="rounded-lg bg-[#650BD8] px-4 py-2 text-center text-sm font-medium text-white"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}