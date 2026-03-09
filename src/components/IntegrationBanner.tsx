"use client";

import { motion } from "framer-motion";
import Beam from "./Beam";

export default function IntegrationBanner() {
  return (
    <section className="relative py-20 bg-[#0F1629]">
      <Beam className="absolute top-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-slate-400 text-sm uppercase tracking-[0.2em] mb-12 font-medium"
        >
          Seamlessly integrates with your existing tools
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-12"
        >
          {/* PodPlay */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="premium-card px-8 py-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-600/20 flex items-center justify-center">
              <span className="text-emerald-400 font-bold text-sm">PP</span>
            </div>
            <div className="text-xl font-bold text-white">PodPlay</div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
              Connected
            </span>
          </motion.div>

          {/* Animated flow line */}
          <div className="hidden sm:block relative w-[160px] h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-blue-500/20 rounded-full" />
            <motion.div
              className="absolute top-0 h-full w-8 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              animate={{ x: ["-32px", "160px"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />
            <motion.div
              className="absolute top-0 h-full w-8 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
              animate={{ x: ["-32px", "160px"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5, delay: 0.5 }}
            />
          </div>

          {/* GrowMyClub center */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="animated-border rounded-2xl px-8 py-5 flex items-center gap-3 bg-[#0F1629]"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V8" />
                <path d="M5 12l7-8 7 8" />
                <path d="M8 17l4-5 4 5" />
              </svg>
            </div>
            <div className="text-xl font-bold text-white">GrowMyClub</div>
          </motion.div>

          {/* Animated flow line */}
          <div className="hidden sm:block relative w-[160px] h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-purple-500/20 rounded-full" />
            <motion.div
              className="absolute top-0 h-full w-8 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              animate={{ x: ["160px", "-32px"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
            />
          </div>

          {/* CourtReserve */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="premium-card px-8 py-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400/20 to-indigo-600/20 flex items-center justify-center">
              <span className="text-blue-400 font-bold text-sm">CR</span>
            </div>
            <div className="text-xl font-bold text-white">CourtReserve</div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
              Connected
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 text-sm max-w-xl mx-auto"
        >
          GrowMyClub automatically syncs player data, court bookings, and
          revenue from your booking platform — no manual imports, no
          spreadsheets.
        </motion.p>
      </div>

      <Beam className="absolute bottom-0" />
    </section>
  );
}
