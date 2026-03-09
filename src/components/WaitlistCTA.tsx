"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "./Particles";

export default function WaitlistCTA() {
  const [form, setForm] = useState({
    name: "",
    club: "",
    email: "",
    platform: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState(0);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.club.trim()) newErrors.club = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const existing = JSON.parse(localStorage.getItem("growmyclub_waitlist") || "[]");
    existing.push({ ...form, timestamp: new Date().toISOString() });
    localStorage.setItem("growmyclub_waitlist", JSON.stringify(existing));

    const currentCount = parseInt(localStorage.getItem("growmyclub_counter") || "180", 10);
    const newCount = currentCount + 1;
    localStorage.setItem("growmyclub_counter", String(newCount));
    setPosition(newCount);
    setSubmitted(true);

    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#3B82F6", "#06B6D4", "#10B981", "#8B5CF6", "#F59E0B"],
      });
    } catch {}
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border ${
      errors[field] ? "border-red-500/50" : "border-white/[0.06]"
    } text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 focus:bg-white/[0.05] transition-all duration-300`;

  return (
    <section id="waitlist" className="relative py-24 sm:py-32 bg-[#0A0E1A] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <Particles quantity={40} speed={0.15} size={1} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] aurora-blob" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Card with animated border */}
          <div className="animated-border rounded-3xl bg-[#0D1117] overflow-hidden">
            <div className="relative p-8 sm:p-12">
              {/* Inner glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500/10 blur-[80px] rounded-full" />

              <div className="relative">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                        </span>
                        <span className="text-blue-400">Early Access</span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Be the first to know when we launch
                      </h2>
                      <p className="text-slate-400 mb-8 leading-relaxed">
                        We&apos;re onboarding clubs on PodPlay and CourtReserve
                        worldwide. Join the waitlist and we&apos;ll reach out
                        personally to get you set up.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={inputClass("name")}
                          />
                          <input
                            type="text"
                            placeholder="Club name"
                            value={form.club}
                            onChange={(e) => setForm({ ...form, club: e.target.value })}
                            className={inputClass("club")}
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="Email address"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass("email")}
                        />
                        <select
                          value={form.platform}
                          onChange={(e) => setForm({ ...form, platform: e.target.value })}
                          className={`${inputClass("platform")} ${!form.platform ? "text-slate-600" : ""}`}
                        >
                          <option value="" disabled>Which platform do you use?</option>
                          <option value="podplay">PodPlay</option>
                          <option value="courtreserve">CourtReserve</option>
                          <option value="both">Both</option>
                          <option value="other">Other</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Country / Region"
                          value={form.country}
                          onChange={(e) => setForm({ ...form, country: e.target.value })}
                          className={inputClass("country")}
                        />
                        <button
                          type="submit"
                          className="group relative w-full py-4 rounded-xl bg-electric text-white font-semibold text-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] btn-shine overflow-hidden"
                        >
                          <span className="relative z-10">Join the Waitlist</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </form>

                      <p className="text-xs text-slate-600 text-center mt-4">
                        No spam. No commitment. We&apos;ll reach out when you&apos;re next in line.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="text-6xl mb-6"
                      >
                        🎉
                      </motion.div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        You&apos;re on the list!
                      </h3>
                      <p className="text-slate-400 text-lg mb-8">
                        We&apos;ll be in touch soon, {form.name.split(" ")[0]}.
                      </p>
                      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
                        <span className="text-slate-400">Your waitlist position:</span>
                        <span className="text-white font-bold text-xl text-glow">#{position}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
