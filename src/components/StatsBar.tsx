"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: 4300, prefix: "", suffix: "+", label: "Players Tracked", icon: "👥" },
  { value: 23, prefix: "$", suffix: "K+", label: "Avg Monthly Revenue Tracked", icon: "💰" },
  { value: 91, prefix: "", suffix: "%", label: "Player Retention Rate", icon: "🔄" },
  { value: 2, prefix: "", suffix: " min", label: "Average Setup Time", icon: "⚡" },
];

export default function StatsBar() {
  return (
    <section className="relative py-24 bg-[#0A0E1A] overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center relative group"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative glass-card py-8 px-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 text-glow">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
