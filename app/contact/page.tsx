"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const contacts = [
  {
    icon: Mail,
    label: "General Inquiries",
    description: "For product questions, partnerships, or anything else.",
    email: "info@knobase.com",
  },
  {
    icon: MessageSquare,
    label: "Founder",
    description: "Reach Christopher directly — he reads every email.",
    email: "chris@knobase.com",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-neutral-100 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <FadeUp>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#650BD8]/20 bg-[#650BD8]/5 px-4 py-1.5 text-sm font-medium text-[#650BD8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#650BD8]" />
                Contact
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h1
                className="text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                Get in touch
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-4 text-lg leading-relaxed text-neutral-500">
                We&apos;re a small team and we genuinely read every message.
                Don&apos;t hesitate to reach out.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Contact cards */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl gap-5">
            {contacts.map((item, i) => (
              <FadeUp key={item.email} delay={i * 0.08}>
                <a
                  href={`mailto:${item.email}`}
                  className="group flex items-start gap-5 rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all hover:border-[#650BD8]/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#650BD8]/8 text-[#650BD8] transition-colors group-hover:bg-[#650BD8]/12">
                    <item.icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="text-base font-medium text-[#650BD8] group-hover:underline">
                      {item.email}
                    </span>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Response time note */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <FadeUp>
              <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-7">
                <p className="text-sm leading-relaxed text-neutral-500">
                  <span className="font-semibold text-neutral-700">
                    Response time:
                  </span>{" "}
                  We aim to reply within 24–48 hours on business days. If
                  you&apos;re on the waitlist and have a question about your
                  application, just reply to your confirmation email.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
