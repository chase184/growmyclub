"use client";

import { motion } from "framer-motion";
import BrowserMockup from "./BrowserMockup";
import Particles from "./Particles";
import TextReveal from "./TextReveal";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 animated-grid opacity-50" />

        {/* Perspective grid at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] perspective-grid" />

        {/* Particles */}
        <Particles quantity={100} speed={0.2} size={1.2} />

        {/* Aurora blobs */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-500/15 aurora-blob" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 aurora-blob-2" />
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/8 aurora-blob" style={{ animationDelay: "-10s" }} />

        {/* Radial spotlight from center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-radial from-blue-500/8 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-8 animated-border"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Now in Early Access — Join 200+ clubs on the waitlist</span>
        </motion.div>

        {/* Headline with text reveal */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-tight leading-[1.05] mb-6">
          <TextReveal delay={0.2}>The Analytics Platform</TextReveal>
          <br />
          <TextReveal delay={0.4}>Built for</TextReveal>{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-shimmer text-glow"
          >
            Pickleball Clubs
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          GrowMyClub connects to your booking platform and gives you the
          insights, automation, and messaging tools to grow your club — without
          the guesswork.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <button
            onClick={() => scrollTo("#waitlist")}
            className="group relative px-8 py-4 rounded-full bg-electric text-white font-semibold text-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:scale-[1.03] active:scale-[0.98] btn-shine"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => scrollTo("#features")}
            className="px-8 py-4 rounded-full border border-white/[0.1] text-white font-medium text-lg hover:bg-white/[0.05] hover:border-white/[0.2] transition-all backdrop-blur-sm"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Social proof marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-3 text-sm text-slate-500 mb-16"
        >
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#0A0E1A] bg-gradient-to-br from-slate-600 to-slate-700"
              />
            ))}
          </div>
          <span>Trusted by club owners on PodPlay & CourtReserve</span>
        </motion.div>

        {/* Dashboard Mockup with floating elements */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Large glow behind mockup */}
          <div className="absolute -inset-20 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10 rounded-3xl blur-3xl" />

          {/* Floating stat cards */}
          <motion.div
            className="absolute -left-4 sm:-left-12 top-1/4 z-20 float"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="glass rounded-xl px-4 py-3 shadow-xl shadow-black/20">
              <div className="text-[10px] text-slate-400 mb-1">Player Retention</div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">91%</span>
                <span className="text-xs text-emerald-400 font-medium">+5.2%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 sm:-right-12 top-1/3 z-20 float float-delay-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            <div className="glass rounded-xl px-4 py-3 shadow-xl shadow-black/20">
              <div className="text-[10px] text-slate-400 mb-1">Active Players</div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">342</span>
                <span className="text-xs text-emerald-400 font-medium">+28</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-2 sm:-right-8 bottom-1/4 z-20 float float-delay-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <div className="glass rounded-xl px-4 py-3 shadow-xl shadow-black/20">
              <div className="text-[10px] text-slate-400 mb-1">Revenue</div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">$23.4K</span>
                <span className="text-xs text-emerald-400 font-medium">+12%</span>
              </div>
            </div>
          </motion.div>

          <BrowserMockup
            src="/dashboard-hero.png"
            alt="GrowMyClub Facility Dashboard"
            animate={false}
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E1A] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
