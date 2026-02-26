"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const ROLES = [
  { value: "developer", label: "Developer" },
  { value: "expert", label: "Domain Expert" },
  { value: "educator", label: "Educator" },
  { value: "researcher", label: "Researcher" },
  { value: "enterprise", label: "Enterprise" },
  { value: "investor", label: "Investor" },
  { value: "other", label: "Other" },
];

export function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    organization: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "duplicate">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus(data.message === "Already on waitlist" ? "duplicate" : "success");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch {
      setError("Failed to connect. Please try again.");
      setStatus("idle");
    }
  };

  if (status === "success" || status === "duplicate") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="py-8 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#10b981]/10">
          <Check size={28} className="text-[#10b981]" strokeWidth={2.5} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-[#111111]">
          {status === "duplicate" ? "You're already on the list!" : "You're on the list!"}
        </h3>
        <p className="mt-2 text-sm text-neutral-500">
          {status === "duplicate"
            ? "We already have your signup. We'll email you when Knobase is ready."
            : "We'll email you when Knobase is ready for you."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-3.5">
      <input
        type="text"
        required
        placeholder="Full name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 transition-colors focus:border-[#650BD8] focus:outline-none focus:ring-1 focus:ring-[#650BD8]/30"
      />

      <input
        type="email"
        required
        placeholder="Email address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 transition-colors focus:border-[#650BD8] focus:outline-none focus:ring-1 focus:ring-[#650BD8]/30"
      />

      <select
        required
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        className="w-full appearance-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] transition-colors focus:border-[#650BD8] focus:outline-none focus:ring-1 focus:ring-[#650BD8]/30"
        style={{
          color: form.role ? undefined : "#a3a3a3",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="" disabled>
          Select your role...
        </option>
        {ROLES.map((role) => (
          <option key={role.value} value={role.value}>
            {role.label}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Organization (optional)"
        value={form.organization}
        onChange={(e) => setForm({ ...form, organization: e.target.value })}
        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-neutral-400 transition-colors focus:border-[#650BD8] focus:outline-none focus:ring-1 focus:ring-[#650BD8]/30"
      />

      {error && (
        <p className="text-center text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#650BD8] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5209b0] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Joining..." : "Join Waitlist"}
        {status !== "submitting" && (
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        )}
      </button>
    </form>
  );
}
