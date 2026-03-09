"use client";

import { motion } from "framer-motion";

export default function Beam({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-px ${className}`}>
      {/* Static line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      {/* Animated beam traveling across */}
      <motion.div
        className="absolute top-0 h-px w-[200px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), rgba(6, 182, 212, 0.6), transparent)",
        }}
        animate={{
          x: ["-200px", "calc(100vw + 200px)"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear",
        }}
      />
    </div>
  );
}
