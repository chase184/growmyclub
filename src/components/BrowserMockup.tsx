"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  className?: string;
  animate?: boolean;
}

export default function BrowserMockup({
  src,
  alt,
  className = "",
  animate = true,
}: BrowserMockupProps) {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative ${className}`}
      >
        <BrowserFrame src={src} alt={alt} />
      </motion.div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <BrowserFrame src={src} alt={alt} />
    </div>
  );
}

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <>
      {/* Glow behind */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-cyan-500/20 rounded-3xl scale-105" />

      {/* Browser frame */}
      <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0D1117] shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161B22] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-white/[0.06] text-[11px] text-slate-400 font-mono">
              app.growmyclub.com
            </div>
          </div>
          <div className="w-[52px]" />
        </div>

        {/* Content */}
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </>
  );
}
