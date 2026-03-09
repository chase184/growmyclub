"use client";

import { motion } from "framer-motion";
import BrowserMockup from "./BrowserMockup";
import Beam from "./Beam";

const features = [
  {
    title: "Your Club's Vital Signs, At a Glance",
    description:
      "See what's really happening at your facility. Track active players, revenue, player lifetime value, and retention rate — all benchmarked vs. prior periods so you know if you're growing.",
    bullets: [
      "Active player tracking",
      "Revenue monitoring",
      "Retention %",
      "LTV per player",
    ],
    image: "/dashboard-facility.png",
    imageAlt: "Facility Dashboard",
    badge: "Dashboard",
  },
  {
    title: "Know Every Player in Your Club",
    description:
      "Your full member database, automatically segmented. Instantly identify who's active, who's at risk of churning, and who hasn't returned in 90+ days — then take action.",
    bullets: [
      "Auto-segmentation (Active, Visitor, At Risk, Inactive, Prospect)",
      "Play style & rating data",
      "Lifetime spend tracking",
      "Smart search & filtering",
    ],
    image: "/dashboard-players.png",
    imageAlt: "Player Intelligence",
    badge: "Intelligence",
  },
  {
    title: "Automated SMS Campaigns That Run Themselves",
    description:
      "Set up once, run forever. GrowMyClub's drip campaigns automatically reach the right players at the right time — winning back at-risk members, nurturing new visitors, and upselling your loyal players.",
    bullets: [
      "Win-Back campaigns",
      "Re-engagement for lapsed players (90+ days)",
      "New visitor nurture sequences",
      "Membership upsell automation",
    ],
    image: "/dashboard-messages.png",
    imageAlt: "Auto Messages",
    badge: "Automation",
  },
  {
    title: "Two-Way SMS With Your Members",
    description:
      "Have real conversations with your players. Every automated message can turn into a real dialogue — handle questions, take feedback, and build genuine relationships at scale.",
    bullets: [
      "Unified SMS inbox",
      "Two-way messaging",
      "Message history per player",
      "Twilio-powered reliability",
    ],
    image: "/dashboard-conversations.png",
    imageAlt: "Conversations",
    badge: "Messaging",
  },
];

function RetentionPipeline() {
  const nodes = [
    { label: "New Visitor", color: "from-blue-500 to-blue-600", glow: "shadow-blue-500/20" },
    { label: "3 Visits", color: "from-cyan-500 to-cyan-600", glow: "shadow-cyan-500/20" },
    { label: "Upgrade Prompt", color: "from-purple-500 to-purple-600", glow: "shadow-purple-500/20" },
    { label: "Active Member", color: "from-emerald-500 to-emerald-600", glow: "shadow-emerald-500/20" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="premium-card p-8 sm:p-12 glow-blue overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/40"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex items-center gap-3 sm:gap-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2, type: "spring" }}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`px-5 py-3 rounded-xl bg-gradient-to-r ${node.color} text-white text-sm font-medium shadow-lg ${node.glow} whitespace-nowrap cursor-default`}
              >
                {node.label}
              </motion.div>
              {i < nodes.length - 1 && (
                <div className="hidden sm:flex items-center mx-2">
                  <div className="relative w-[50px] h-[2px]">
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
                    <motion.div
                      className="absolute top-0 h-full w-4 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                      animate={{ x: ["-16px", "50px"] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.3,
                        repeatDelay: 1,
                      }}
                    />
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {i < nodes.length - 1 && (
                <div className="sm:hidden">
                  <svg width="24" height="30" viewBox="0 0 24 30">
                    <path d="M12 0v22l-6-6M12 22l6-6" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-[#0A0E1A] overflow-hidden">
      {/* Background aurora */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] aurora-blob" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] aurora-blob-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-slate-400 uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Features
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Everything your club needs,{" "}
            <span className="text-shimmer">in one place</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Built specifically for pickleball — not adapted from generic gym
            software.
          </p>
        </motion.div>

        {/* Feature rows */}
        <div className="space-y-40">
          {features.map((feature, i) => (
            <div key={feature.title}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-20`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 w-full relative"
                >
                  {/* Large glow */}
                  <div className="absolute -inset-10 bg-blue-500/5 rounded-3xl blur-3xl" />
                  <BrowserMockup
                    src={feature.image}
                    alt={feature.imageAlt}
                    animate={false}
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="flex-1"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-blue-400 uppercase tracking-widest mb-4 font-medium">
                    {feature.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.bullets.map((bullet, j) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.08 }}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5 shrink-0">
                          <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Beam divider between features */}
              {i < features.length - 1 && (
                <div className="mt-40">
                  <Beam />
                </div>
              )}
            </div>
          ))}

          {/* Beam before pipeline */}
          <Beam />

          {/* Feature 5: Retention Pipelines */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 w-full">
              <RetentionPipeline />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex-1"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-purple-400 uppercase tracking-widest mb-4 font-medium">
                Pipelines
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Retention Pipelines That Never Sleep
              </h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Build visual automation workflows based on real player behavior.
                When a player goes at risk, the pipeline triggers automatically
                — no manual intervention needed.
              </p>
              <ul className="space-y-4">
                {[
                  "Visual pipeline builder",
                  "Behavior-based triggers",
                  "Automated segmentation updates",
                  "Works 24/7 in background",
                ].map((bullet, j) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.08 }}
                    className="flex items-start gap-3 text-slate-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5 shrink-0">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
