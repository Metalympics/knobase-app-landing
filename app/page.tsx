import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Features, Hosting } from "@/components/features";
// import { Pricing } from "@/components/pricing"; // hidden during waitlist period
// import { FAQ } from "@/components/faq"; // hidden during waitlist period
import { CTA } from "@/components/cta";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";
import { FAQPageSchema } from "@/components/structured-data";

/* FAQ data mirrored here for JSON-LD structured data (SEO + AIO) */
const faqStructuredData = [
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <FAQPageSchema faqs={faqStructuredData} />
      <Navigation />
      <Hero />
      <Features />
      <Hosting />
      {/* <Pricing /> hidden during waitlist period */}
      {/* <FAQ /> hidden during waitlist period */}
      <CTA />
      <Waitlist />
      <Footer />
    </main>
  );
}
