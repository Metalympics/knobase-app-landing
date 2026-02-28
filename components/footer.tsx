import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Youtube } from "lucide-react";

const footerNav = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Changelog", href: "/changelog" },
  ],
  Integrations: [{ label: "OpenClaw", href: "/openclaw" }],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-4 pt-16 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand — spans 2 cols */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/Knobase_Logo.png"
                alt="Knobase"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              The workspace where humans and AI agents collaborate in real-time.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://x.com/knobase_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-600"
                aria-label="X (Twitter)"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://www.instagram.com/knobase.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-600"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.youtube.com/@knobase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-600"
                aria-label="YouTube"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-[#111111]">
                {section}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Knobase, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-400">
            <Link
              href="/privacy"
              className="transition-colors hover:text-neutral-700"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-neutral-700"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
