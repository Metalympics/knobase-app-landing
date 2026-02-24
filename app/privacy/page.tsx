import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const toc = [
  { n: 1, id: "introduction", label: "Introduction" },
  { n: 2, id: "what-we-collect", label: "Information We Collect" },
  { n: 3, id: "how-we-use", label: "How We Use Your Information" },
  { n: 4, id: "ai-agents", label: "AI and Agent Data" },
  { n: 5, id: "storage-security", label: "Data Storage and Security" },
  { n: 6, id: "your-rights", label: "Your Rights" },
  { n: 7, id: "sharing", label: "Data Sharing" },
  { n: 8, id: "children", label: "Children's Privacy" },
  { n: 9, id: "international", label: "International Transfers" },
  { n: 10, id: "cookies", label: "Cookies and Tracking" },
  { n: 11, id: "changes", label: "Changes to This Policy" },
  { n: 12, id: "contact", label: "Contact Us" },
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

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-1.5 mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
      {children}
    </h4>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm leading-relaxed text-neutral-600">{children}</p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 rounded-lg border border-[#650BD8]/15 bg-[#650BD8]/[0.04] px-5 py-4 text-sm leading-relaxed text-neutral-600">
      {children}
    </div>
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

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
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
            Privacy Policy
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

          <div className="space-y-12">
            {/* 1 */}
            <section>
              <H2 id="introduction">1. Introduction</H2>
              <P>
                Knobase (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, store, and protect your
                information when you use our workspace collaboration platform.
              </P>
              <Callout>
                <strong className="text-neutral-700">Important:</strong> Knobase
                provides infrastructure for human-AI collaboration. We do not
                provide AI services ourselves. You connect your own AI agents
                (OpenClaw, etc.) to our platform. Those agents operate under
                your control and your separate agreements with AI providers.
              </Callout>
            </section>

            {/* 2 */}
            <section>
              <H2 id="what-we-collect">2. Information We Collect</H2>

              <H3>2.1 Information You Provide</H3>

              <H4>Account Information</H4>
              <UL
                items={[
                  "Name, email address, password (encrypted)",
                  "Workspace name and settings",
                  "Billing information (if applicable)",
                ]}
              />

              <H4>Workspace Content</H4>
              <UL
                items={[
                  "Documents, pages, and files you create",
                  "Comments and chat messages",
                  "Agent configurations and personas",
                  "API keys (encrypted at rest — we cannot view them)",
                ]}
              />

              <H3>2.2 Information Collected Automatically</H3>

              <H4>Usage Data</H4>
              <UL
                items={[
                  "Login times and IP addresses",
                  "Feature usage and interactions",
                  "Workspace activity (page views, edits)",
                  "Agent connections and activity logs",
                ]}
              />

              <H4>Device Information</H4>
              <UL
                items={[
                  "Browser type and version",
                  "Operating system",
                  "Device identifiers",
                ]}
              />

              <H3>2.3 Information from Third Parties</H3>

              <H4>Payment Processors</H4>
              <UL
                items={[
                  "We use Stripe for billing",
                  "We do not store credit card numbers",
                ]}
              />

              <H4>Authentication Providers</H4>
              <UL
                items={[
                  "If you use SSO / SAML, we receive basic profile information",
                ]}
              />
            </section>

            {/* 3 */}
            <section>
              <H2 id="how-we-use">3. How We Use Your Information</H2>

              <H3>To provide services</H3>
              <UL
                items={[
                  "Host and deliver your workspace",
                  "Enable real-time collaboration",
                  "Connect your AI agents",
                  "Send notifications and updates",
                ]}
              />

              <H3>To improve services</H3>
              <UL
                items={[
                  "Analyse usage patterns",
                  "Fix bugs and improve performance",
                  "Develop new features",
                ]}
              />

              <H3>For security</H3>
              <UL
                items={[
                  "Detect and prevent fraud",
                  "Protect against unauthorised access",
                  "Monitor for abuse",
                ]}
              />

              <H3>For legal compliance</H3>
              <UL
                items={[
                  "Respond to legal requests",
                  "Enforce our Terms of Service",
                ]}
              />
            </section>

            {/* 4 */}
            <section>
              <H2 id="ai-agents">4. AI and Agent Data</H2>
              <Callout>
                <ul className="space-y-2.5">
                  {[
                    <>
                      <strong className="text-neutral-700">
                        We do not provide AI services.
                      </strong>{" "}
                      You connect your own AI agents (OpenClaw, etc.) through
                      MCP.
                    </>,
                    <>
                      <strong className="text-neutral-700">
                        We do not view AI conversations.
                      </strong>{" "}
                      Messages between you and your agents are between you and
                      your agent. We facilitate the connection but do not access
                      the content.
                    </>,
                    <>
                      <strong className="text-neutral-700">
                        We do not train AI models on your data.
                      </strong>
                    </>,
                    <>
                      <strong className="text-neutral-700">
                        Your AI provider&apos;s terms apply.
                      </strong>{" "}
                      Using an AI agent means your data is also processed under
                      that provider&apos;s privacy policy (e.g., OpenAI,
                      Anthropic).
                    </>,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#650BD8]/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Callout>

              <H3>What we do see</H3>
              <UL
                items={[
                  "Metadata: when agents connect, how often they connect",
                  "Workspace content: documents stored in Knobase (not AI message content specifically)",
                  "Agent personas and configurations you save (these are workspace settings)",
                ]}
              />

              <H3>Agent Storage</H3>
              <UL
                items={[
                  "Persona configurations, credentials, and settings are encrypted and stored in your workspace",
                  "We cannot view or access your API keys",
                ]}
              />
            </section>

            {/* 5 */}
            <section>
              <H2 id="storage-security">5. Data Storage and Security</H2>

              <H3>Encryption</H3>
              <UL
                items={[
                  "At rest: AES-256 encryption for all data",
                  "In transit: TLS 1.3 for all connections",
                  "API keys: additional encryption layer, segmented from other data",
                ]}
              />

              <H3>Data Location</H3>
              <UL
                items={[
                  "Primary hosting: AWS / GCP (region disclosed on request)",
                  "Enterprise self-hosted: your own infrastructure",
                ]}
              />

              <H3>Retention</H3>
              <UL
                items={[
                  "Active accounts: data retained while account is active",
                  "Deleted accounts: 30-day grace period, then permanent deletion",
                  "Backups: 90 days (encrypted)",
                ]}
              />

              <H3>Security Measures</H3>
              <UL
                items={[
                  "SOC 2 Type II certified infrastructure",
                  "Regular security audits",
                  "Bug bounty programme",
                  "Incident response plan",
                ]}
              />
            </section>

            {/* 6 */}
            <section>
              <H2 id="your-rights">6. Your Rights (GDPR, CCPA, and others)</H2>
              <UL
                items={[
                  <>
                    <strong className="text-neutral-700">Access:</strong>{" "}
                    Request a copy of your data
                  </>,
                  <>
                    <strong className="text-neutral-700">Correction:</strong>{" "}
                    Update inaccurate information
                  </>,
                  <>
                    <strong className="text-neutral-700">Deletion:</strong>{" "}
                    Delete your account and data
                  </>,
                  <>
                    <strong className="text-neutral-700">Portability:</strong>{" "}
                    Export your workspace data
                  </>,
                  <>
                    <strong className="text-neutral-700">Objection:</strong>{" "}
                    Limit how we process your data
                  </>,
                  <>
                    <strong className="text-neutral-700">Withdrawal:</strong>{" "}
                    Revoke consent for optional features
                  </>,
                ]}
              />
              <H3>How to exercise your rights</H3>
              <P>
                Email{" "}
                <a
                  href="mailto:privacy@knobase.ai"
                  className="text-[#650BD8] hover:underline"
                >
                  privacy@knobase.ai
                </a>{" "}
                or use{" "}
                <strong className="text-neutral-700">
                  Settings → Data → Export / Delete
                </strong>{" "}
                in the app. We respond within 30 days.
              </P>
            </section>

            {/* 7 */}
            <section>
              <H2 id="sharing">7. Data Sharing</H2>
              <p className="mb-4 text-sm font-semibold text-neutral-700">
                We do not sell your data.
              </p>

              <div className="mb-5 overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-50">
                      <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500">
                        Party
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-neutral-500">
                        Data shared
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {[
                      {
                        party: "Service providers",
                        purpose: "Hosting, analytics, support",
                        data: "Encrypted data, limited access",
                      },
                      {
                        party: "AI providers (your choice)",
                        purpose: "Enabling agent connections",
                        data: "Message content (via MCP, direct to provider)",
                      },
                      {
                        party: "Legal authorities",
                        purpose: "Legal compliance",
                        data: "As required by law",
                      },
                      {
                        party: "Enterprise admins",
                        purpose: "Workspace management",
                        data: "Workspace activity (Business / Enterprise only)",
                      },
                    ].map((row) => (
                      <tr key={row.party} className="bg-white">
                        <td className="px-4 py-3 font-medium text-neutral-700">
                          {row.party}
                        </td>
                        <td className="px-4 py-3 text-neutral-500">
                          {row.purpose}
                        </td>
                        <td className="px-4 py-3 text-neutral-500">
                          {row.data}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <P>We require all third parties to:</P>
              <UL
                items={[
                  "Maintain confidentiality",
                  "Use data only for specified purposes",
                  "Implement appropriate security measures",
                ]}
              />
            </section>

            {/* 8 */}
            <section>
              <H2 id="children">8. Children&apos;s Privacy</H2>
              <P>
                Knobase is not intended for children under 13. We do not
                knowingly collect data from children. If you believe a child has
                provided data, contact{" "}
                <a
                  href="mailto:privacy@knobase.ai"
                  className="text-[#650BD8] hover:underline"
                >
                  privacy@knobase.ai
                </a>{" "}
                for deletion.
              </P>
            </section>

            {/* 9 */}
            <section>
              <H2 id="international">9. International Transfers</H2>
              <P>
                If you are in the EU / UK / EEA, we may transfer data to the US
                or other countries. We ensure adequate protection through:
              </P>
              <UL
                items={[
                  "Standard Contractual Clauses (SCCs)",
                  "Adequacy decisions where applicable",
                  "Data Processing Agreements with all sub-processors",
                ]}
              />
            </section>

            {/* 10 */}
            <section>
              <H2 id="cookies">10. Cookies and Tracking</H2>
              <UL
                items={[
                  <>
                    <strong className="text-neutral-700">
                      Essential cookies:
                    </strong>{" "}
                    Required for platform functionality — cannot be disabled
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      Analytics cookies:
                    </strong>{" "}
                    Help us improve the product (opt-out available in Settings)
                  </>,
                  <>
                    <strong className="text-neutral-700">
                      Third-party cookies:
                    </strong>{" "}
                    None for core service
                  </>,
                ]}
              />
              <P>
                Manage your preferences in your browser settings or via{" "}
                <strong className="text-neutral-700">Settings → Privacy</strong>{" "}
                in the app.
              </P>
            </section>

            {/* 11 */}
            <section>
              <H2 id="changes">11. Changes to This Policy</H2>
              <P>We will notify you of significant changes via:</P>
              <UL
                items={[
                  "Email to the account holder",
                  "In-app notification",
                  "Prominent notice on our website",
                ]}
              />
              <P>
                We encourage you to review this policy periodically. Continued
                use after the effective date of any update constitutes
                acceptance.
              </P>
            </section>

            {/* 12 */}
            <section>
              <H2 id="contact">12. Contact Us</H2>
              <UL
                items={[
                  <>
                    <strong className="text-neutral-700">
                      Data Protection Officer:
                    </strong>{" "}
                    <a
                      href="mailto:privacy@knobase.ai"
                      className="text-[#650BD8] hover:underline"
                    >
                      privacy@knobase.ai
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
                  <>
                    <strong className="text-neutral-700">Response time:</strong>{" "}
                    48 hours for privacy inquiries
                  </>,
                ]}
              />
            </section>

            {/* Footer note */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-5">
              <p className="text-xs leading-relaxed text-neutral-400">
                This Privacy Policy applies to all users of Knobase and is
                incorporated by reference into the Knobase Terms of Service.
                Your continued use of Knobase constitutes acceptance of this
                policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
