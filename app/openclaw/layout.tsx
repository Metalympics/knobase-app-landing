import type { Metadata } from "next";
import {
  FAQPageSchema,
  BreadcrumbSchema,
  HowToSchema,
} from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Knobase × OpenClaw | Your AI Agent, Right Where You Work",
  description:
    "Invite @openclaw to any document and collaborate with your AI agent in real-time. Real-time cursors, @mentions, and full workspace context.",
  keywords: [
    "OpenClaw",
    "Knobase",
    "AI agent workspace",
    "@mention AI",
    "real-time collaboration",
    "AI teammate",
  ],
  openGraph: {
    title: "Knobase × OpenClaw | Your AI Agent, Right Where You Work",
    description:
      "Invite @openclaw to any document and collaborate with your AI agent in real-time.",
    type: "website",
    url: "https://knobase.com/openclaw",
    siteName: "Knobase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knobase × OpenClaw | Your AI Agent, Right Where You Work",
    description:
      "Invite @openclaw to any document and collaborate with your AI agent in real-time. Real-time cursors, @mentions, and full workspace context.",
  },
  alternates: {
    canonical: "https://knobase.com/openclaw",
  },
};

/* JSON-LD FAQ data for search engines and AI systems */
const openclawFaqs = [
  {
    question: "Do I pay extra for OpenClaw?",
    answer: "No. Invite @openclaw on any plan, including Free.",
  },
  {
    question: "Does Knobase provide the AI?",
    answer:
      "No. You connect your own OpenClaw agent. Knobase provides the workspace where you collaborate.",
  },
  {
    question: "How many agents can I invite?",
    answer: "Free: 1 agent. Plus: 2 per member. Business: 10 per member.",
  },
  {
    question: "What if @openclaw does not respond?",
    answer:
      "Check that your OpenClaw webhook is running (openclaw knobase webhook start) and that authentication succeeded. Run openclaw knobase status to check your connection.",
  },
  {
    question: "Can I use other agents besides OpenClaw?",
    answer:
      "Yes. Any MCP-compatible agent can connect to Knobase. OpenClaw is just the most common starting point.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest. Enterprise plans offer self-hosted deployment for full data control.",
  },
  {
    question: "Can I customise @openclaw's personality?",
    answer:
      "Absolutely. Use the Persona Tab to define name, role, tone, expertise, and custom instructions. Create multiple personas for different tasks.",
  },
];

export default function OpenClawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://knobase.com" },
          { name: "OpenClaw", href: "https://knobase.com/openclaw" },
        ]}
      />
      <HowToSchema
        name="Connect OpenClaw to Knobase"
        description="Set up your OpenClaw agent to collaborate in your Knobase workspace in under 1 minute."
        steps={[
          {
            name: "Install the Knobase skill",
            text: "Run: curl -fsSL https://raw.githubusercontent.com/Knobase-AI/openclaw-knobase/main/install.sh | bash",
            url: "https://knobase.com/connect/openclaw",
          },
          {
            name: "Authenticate with your workspace",
            text: "Run: openclaw knobase auth --browser",
            url: "https://knobase.com/connect/openclaw",
          },
          {
            name: "Start the webhook",
            text: "Run: openclaw knobase webhook start — your agent is now online and ready to receive @mentions.",
            url: "https://knobase.com/connect/openclaw",
          },
        ]}
        totalTime="PT1M"
      />
      <FAQPageSchema faqs={openclawFaqs} />
      {children}
    </>
  );
}
