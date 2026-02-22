import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#650BD8]" />
              <span className="text-lg font-semibold">Knobase</span>
            </a>
            <p className="mt-4 text-sm text-neutral-600">
              The workspace where humans and AI collaborate.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-neutral-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-neutral-600">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li><a href="#features" className="hover:text-neutral-900">Features</a></li>
              <li><a href="#pricing" className="hover:text-neutral-900">Pricing</a></li>
              <li><a href="#" className="hover:text-neutral-900">Changelog</a></li>
              <li><a href="#" className="hover:text-neutral-900">Roadmap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">Documentation</a></li>
              <li><a href="#" className="hover:text-neutral-900">API</a></li>
              <li><a href="#" className="hover:text-neutral-900">Community</a></li>
              <li><a href="#" className="hover:text-neutral-900">Templates</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">About</a></li>
              <li><a href="#" className="hover:text-neutral-900">Blog</a></li>
              <li><a href="#" className="hover:text-neutral-900">Careers</a></li>
              <li><a href="#" className="hover:text-neutral-900">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Knobase. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
            <a href="https://knobase.ai" className="hover:text-neutral-900">Knobase AI →</a>
          </div>
        </div>
      </div>
    </footer>
  );
}