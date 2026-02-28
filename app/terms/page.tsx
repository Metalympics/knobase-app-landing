import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BreadcrumbSchema } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Terms of Service — Knobase",
  description:
    "Read the Knobase Terms of Service. Covers account usage, AI agent responsibilities, data ownership, privacy, payment terms, and more.",
  openGraph: {
    title: "Terms of Service — Knobase",
    description:
      "Knobase Terms of Service — account usage, AI agent responsibilities, and data ownership.",
    type: "website",
    url: "https://knobase.com/terms",
    siteName: "Knobase",
  },
  alternates: {
    canonical: "https://knobase.com/terms",
  },
};

const toc = [
  { n: 1, id: "acceptance", label: "Acceptance of Terms" },
  { n: 2, id: "description", label: "Description of Service" },
  { n: 3, id: "registration", label: "Account Registration" },
  { n: 4, id: "acceptable-use", label: "Acceptable Use" },
  { n: 5, id: "content-ownership", label: "Content and Ownership" },
  { n: 6, id: "ai-agents", label: "AI and Agent Responsibility" },
  { n: 7, id: "privacy-security", label: "Privacy and Security" },
  { n: 8, id: "payment", label: "Payment Terms" },
  { n: 9, id: "termination", label: "Termination" },
  { n: 10, id: "disclaimers", label: "Disclaimers and Limitations" },
  { n: 11, id: "indemnification", label: "Indemnification" },
  { n: 12, id: "governing-law", label: "Governing Law and Disputes" },
  { n: 13, id: "changes", label: "Changes to Terms" },
  { n: 14, id: "enterprise", label: "Enterprise and Self-Hosted" },
  { n: 15, id: "contact", label: "Contact Information" },
  { n: 16, id: "misc", label: "Miscellaneous" },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-4 text-lg font-semibold text-[#111111] scroll-mt-24"
      style={{ letterSpacing: "-0.01em" }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 mt-5 text-sm font-semibold text-[#111111]">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm leading-relaxed text-neutral-600">{children}</p>
  );
}

function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-3 space-y-1.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-600"
        >
          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function OL({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="mb-3 space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600"
        >
          <span className="flex-shrink-0 font-semibold text-neutral-400">
            {i + 1}.
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "https://knobase.com" },
          { name: "Terms of Service", href: "https://knobase.com/terms" },
        ]}
      />
      <Navigation />

      {/* Header */}
      <section className="relative border-b border-neutral-200 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" />
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-[#650BD8]">Legal</p>
          <h1
            className="mt-2 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-neutral-500">
            Effective Date:{" "}
            <span className="font-medium text-neutral-700">
              February 24, 2026
            </span>{" "}
            · Last Updated:{" "}
            <span className="font-medium text-neutral-700">
              February 24, 2026
            </span>
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* TOC */}
          <nav className="mb-14 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Contents
            </p>
            <ol className="grid gap-1 sm:grid-cols-2">
              {toc.map(({ n, id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex items-center gap-2 text-sm text-neutral-500 hover:text-[#650BD8] transition-colors"
                  >
                    <span className="w-5 flex-shrink-0 text-right text-xs text-neutral-300">
                      {n}.
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-12">
            {/* 1 */}
            <section>
              <H2 id="acceptance">1. Acceptance of Terms</H2>
              <P>
                By accessing or using Knobase, you agree to these Terms. If you
                disagree, do not use the service.
              </P>
              <H3>Definitions</H3>
              <UL
                items={[
                  <>
                    <strong className="text-neutral-700">
                      &ldquo;Knobase&rdquo;
                    </strong>{" "}
                    — The workspace collaboration platform
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      &ldquo;You&rdquo; / &ldquo;User&rdquo;
                    </strong>{" "}
                    — Individual or entity using Knobase
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      &ldquo;Content&rdquo;
                    </strong>{" "}
                    — Documents, data, files, or materials you upload
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      &ldquo;Agent&rdquo;
                    </strong>{" "}
                    — AI assistant you connect via MCP (e.g., OpenClaw)
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      &ldquo;Workspace&rdquo;
                    </strong>{" "}
                    — Your collaborative environment in Knobase
                  </>,
                ]}
              />
            </section>

            {/* 2 */}
            <section>
              <H2 id="description">2. Description of Service</H2>
              <H3>Knobase provides</H3>
              <UL
                items={[
                  "Real-time document collaboration",
                  "AI agent integration infrastructure (you bring your own AI)",
                  "Workspace management and organisation",
                  "Team collaboration features",
                ]}
              />
              <H3>We do not provide</H3>
              <UL
                items={[
                  "AI or LLM services (you connect your own)",
                  "Content creation (you and your agents create content)",
                  "Legal, financial, or professional advice",
                ]}
              />
            </section>

            {/* 3 */}
            <section>
              <H2 id="registration">3. Account Registration</H2>
              <H3>Requirements</H3>
              <UL
                items={[
                  "Provide accurate information",
                  "Maintain password security",
                  "Be at least 13 years old (16 for EU users)",
                  "One account per person (no automated account creation)",
                ]}
              />
              <H3>Responsibility</H3>
              <P>You are responsible for all activity under your account.</P>
              <H3>Termination</H3>
              <P>We may suspend accounts for:</P>
              <UL
                items={[
                  "Terms violations",
                  "Abuse or illegal activity",
                  "Non-payment (after 30-day grace period)",
                ]}
              />
            </section>

            {/* 4 */}
            <section>
              <H2 id="acceptable-use">4. Acceptable Use</H2>
              <H3>You may</H3>
              <UL
                items={[
                  "Create and collaborate on documents",
                  "Connect AI agents you control",
                  "Invite team members",
                  "Share content according to your permissions",
                ]}
              />
              <H3>You may not</H3>
              <UL
                items={[
                  "Use the service for illegal purposes",
                  "Upload malware, spam, or harmful content",
                  "Attempt to breach security measures",
                  "Scrape or bulk-export data without authorisation",
                  "Harass, abuse, or discriminate against users",
                  "Resell or redistribute access without permission",
                  "Use the service to train AI models on others' data without consent",
                ]}
              />
              <H3>AI Agent Usage</H3>
              <UL
                items={[
                  "You are responsible for your agent's actions",
                  "Agents must not violate these Terms",
                  "You must have authorisation to connect any AI service",
                  "You comply with your AI provider's terms of use (e.g., OpenAI, Anthropic)",
                ]}
              />
            </section>

            {/* 5 */}
            <section>
              <H2 id="content-ownership">5. Content and Ownership</H2>
              <H3>Your Content</H3>
              <UL
                items={[
                  "You retain ownership of all content you create",
                  "You grant us a limited licence to host and display it for platform operation",
                  "You represent you have rights to upload all content",
                ]}
              />
              <H3>Our Content</H3>
              <UL
                items={[
                  "Platform code, design, and trademarks are owned by Knobase",
                  "You receive a limited licence to use the platform",
                ]}
              />
              <H3>Public Content</H3>
              <UL
                items={[
                  "Content you share publicly may be viewed by others",
                  "You are responsible for public content shared by your agents",
                ]}
              />
            </section>

            {/* 6 */}
            <section>
              <H2 id="ai-agents">6. AI and Agent Responsibility</H2>
              <OL
                items={[
                  <>
                    <strong className="text-neutral-700">
                      We do not provide AI.
                    </strong>{" "}
                    You connect your own AI agents (OpenClaw, etc.) via MCP.
                    Your relationship with those AI providers is separate.
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      You are responsible for your agents.
                    </strong>{" "}
                    All agent output is your responsibility. You control what
                    agents can access and must monitor and manage agent
                    behaviour.
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      No liability for AI output.
                    </strong>{" "}
                    We do not control what agents say or do, do not verify agent
                    accuracy, and are not liable for agent-generated content.
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      Content generated by agents
                    </strong>{" "}
                    is considered your content. You are responsible for
                    reviewing and approving it, and it is subject to the same
                    content rules as human-created content.
                  </>,
                ]}
              />
            </section>

            {/* 7 */}
            <section>
              <H2 id="privacy-security">7. Privacy and Security</H2>
              <H3>Your obligations</H3>
              <UL
                items={[
                  "Keep account credentials secure",
                  "Report security incidents promptly",
                  "Comply with applicable data protection laws",
                  "Obtain necessary consents for data you upload",
                ]}
              />
              <H3>Our commitments</H3>
              <UL
                items={[
                  "Maintain reasonable security measures",
                  "Process data per our Privacy Policy",
                  "Notify you of material security breaches",
                ]}
              />
            </section>

            {/* 8 */}
            <section>
              <H2 id="payment">8. Payment Terms</H2>
              <H3>Billing</H3>
              <UL
                items={[
                  "Fees charged in advance monthly or annually",
                  "Prices subject to change with 30-day notice",
                  "Auto-renewal unless cancelled",
                ]}
              />
              <H3>Refunds</H3>
              <UL
                items={[
                  "14-day free trial on Plus and Business plans",
                  "No refunds after trial period",
                  "Prorated refund for annual plans if cancelled within 30 days",
                ]}
              />
              <H3>Downgrades</H3>
              <P>Downgrades take effect at the next billing cycle.</P>
              <H3>Free Plan</H3>
              <P>
                May include feature limitations, usage caps, and advertising (if
                applicable).
              </P>
            </section>

            {/* 9 */}
            <section>
              <H2 id="termination">9. Termination</H2>
              <H3>By You</H3>
              <UL
                items={[
                  "Cancel anytime in Settings",
                  "Data export available before deletion",
                  "30-day grace period to recover account",
                ]}
              />
              <H3>By Us</H3>
              <UL
                items={[
                  "Immediate termination for Terms violations",
                  "30-day notice for non-payment or inactivity",
                  "Data deletion per Privacy Policy",
                ]}
              />
              <H3>Effect</H3>
              <P>
                All licences terminate upon account closure; you must cease
                using the service.
              </P>
            </section>

            {/* 10 */}
            <section>
              <H2 id="disclaimers">10. Disclaimers and Limitations</H2>
              <H3>&ldquo;As Is&rdquo; Service</H3>
              <P>
                Knobase is provided &ldquo;as is&rdquo; without warranties of
                any kind.
              </P>
              <H3>No Guarantee of</H3>
              <UL
                items={[
                  "Uninterrupted service",
                  "Error-free operation",
                  "Security of all data",
                  "Specific results from AI agents",
                ]}
              />
              <H3>Liability Limitation</H3>
              <P>
                To the maximum extent permitted by law, we are not liable for
                indirect, incidental, or consequential damages. Total liability
                is limited to the amount paid in the past 12 months (or $100 if
                on a free plan). We are not liable for AI-generated content or
                actions.
              </P>
              <H3>Force Majeure</H3>
              <P>
                We are not liable for failures beyond our reasonable control,
                including outages, natural disasters, or third-party service
                disruptions.
              </P>
            </section>

            {/* 11 */}
            <section>
              <H2 id="indemnification">11. Indemnification</H2>
              <P>
                You agree to indemnify and hold harmless Knobase from claims
                arising from:
              </P>
              <UL
                items={[
                  "Your use of the service",
                  "Your content",
                  "Your agents' actions",
                  "Your violation of these Terms",
                  "Your violation of third-party rights",
                ]}
              />
            </section>

            {/* 12 */}
            <section>
              <H2 id="governing-law">
                12. Governing Law and Dispute Resolution
              </H2>
              <H3>Governing Law</H3>
              <P>
                These Terms are governed by the laws of the applicable
                jurisdiction.
              </P>
              <H3>Disputes</H3>
              <UL
                items={[
                  "Contact us first to seek informal resolution",
                  "Binding arbitration applies for unresolved disputes (except small claims or injunctive relief)",
                  "No class-action arbitrations",
                ]}
              />
              <H3>Time Limit</H3>
              <P>Claims must be filed within one year of the occurrence.</P>
            </section>

            {/* 13 */}
            <section>
              <H2 id="changes">13. Changes to Terms</H2>
              <P>
                We may update these Terms. Changes are effective 30 days after
                posting (or immediately for critical security changes).
                Continued use of Knobase after changes constitutes acceptance.
              </P>
            </section>

            {/* 14 */}
            <section>
              <H2 id="enterprise">14. Enterprise and Self-Hosted</H2>
              <H3>Enterprise Customers</H3>
              <P>
                Enterprise customers are subject to additional terms set out in
                their Enterprise Agreement.
              </P>
              <H3>Self-Hosted Deployments</H3>
              <P>If you self-host Knobase, you are responsible for:</P>
              <UL
                items={[
                  "Infrastructure security",
                  "Compliance within your environment",
                  "Data backups",
                  "Updates and patches",
                ]}
              />
            </section>

            {/* 15 */}
            <section>
              <H2 id="contact">15. Contact Information</H2>
              <UL
                items={[
                  <>
                    <strong className="text-neutral-700">Legal:</strong>{" "}
                    <a
                      href="mailto:legal@knobase.ai"
                      className="text-[#650BD8] hover:underline"
                    >
                      legal@knobase.ai
                    </a>
                  </>,
                  <>
                    <strong className="text-neutral-700">Support:</strong>{" "}
                    <a
                      href="mailto:support@knobase.ai"
                      className="text-[#650BD8] hover:underline"
                    >
                      support@knobase.ai
                    </a>
                  </>,
                ]}
              />
            </section>

            {/* 16 */}
            <section>
              <H2 id="misc">16. Miscellaneous</H2>
              <UL
                items={[
                  <>
                    <strong className="text-neutral-700">Severability:</strong>{" "}
                    If any provision is found invalid, the remaining Terms
                    continue in full force.
                  </>,
                  <>
                    <strong className="text-neutral-700">Waiver:</strong>{" "}
                    Failure to enforce any right does not constitute a waiver of
                    future breaches.
                  </>,
                  <>
                    <strong className="text-neutral-700">Assignment:</strong> We
                    may assign these Terms; you may not without our consent.
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      Entire Agreement:
                    </strong>{" "}
                    These Terms together with the Privacy Policy constitute the
                    entire agreement between you and Knobase.
                  </>,
                ]}
              />
            </section>

            {/* Footer note */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5">
              <p className="text-xs leading-relaxed text-neutral-400">
                By using Knobase, you acknowledge that you have read,
                understood, and agree to these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
