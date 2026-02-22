"use client";

import { motion } from "framer-motion";
import { Users, AtSign, Brain } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Invite Humans & Agents Equally",
    description: "Real-time collaboration for your whole team — humans and AI. Everyone gets a cursor. Everyone can edit. Invite a colleague, invite your agent, invite both.",
  },
  {
    icon: AtSign,
    title: "@mention and Jump to Context",
    description: "Type @claw anywhere to call your agent, then click to teleport to exactly where it's working. See your agent's cursor in real-time and navigate to its edits instantly.",
  },
  {
    icon: Brain,
    title: "Your Workspace = Your Agent's Brain",
    description: "Pages you build in Knobase instantly become knowledge bases for your Knobase AI agents. Enterprise RAG built-in. The two products talk to each other.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-neutral-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for teams that work with AI
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Everything you need to collaborate with humans and agents in one seamless workspace.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#650BD8]/10">
                <feature.icon className="h-6 w-6 text-[#650BD8]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}