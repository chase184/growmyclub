"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import Beam from "./Beam";

const integrations = [
  {
    name: "PodPlay",
    initials: "PP",
    gradientFrom: "from-green-400/20",
    gradientTo: "to-emerald-600/20",
    initialsColor: "text-emerald-400",
    description:
      "Automatically syncs court bookings, member check-ins, and payment data from PodPlay. The moment a player books or visits, GrowMyClub knows — and your analytics update in real time.",
    features: [
      "Real-time booking sync",
      "Court usage analytics",
      "Payment & revenue tracking",
      "Member profile enrichment",
    ],
  },
  {
    name: "CourtReserve",
    initials: "CR",
    gradientFrom: "from-blue-400/20",
    gradientTo: "to-indigo-600/20",
    initialsColor: "text-blue-400",
    description:
      "Connect your CourtReserve account and unlock the full power of GrowMyClub. All your membership data, court reservations, and activity history flow directly into your analytics dashboard.",
    features: [
      "Membership data sync",
      "Reservation history",
      "Activity & visit tracking",
      "Segment enrichment from booking behavior",
    ],
  },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 sm:py-32 bg-[#0F1629] overflow-hidden">
      <Beam className="absolute top-0" />

      {/* Background aurora */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] aurora-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-slate-400 uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Integrations
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Plug in your booking platform.{" "}
            <span className="text-shimmer">Get instant insights.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            GrowMyClub is purpose-built to work with the two most popular
            pickleball booking platforms.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <SpotlightCard className="premium-card p-8 sm:p-10 h-full rounded-3xl">
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.gradientFrom} ${integration.gradientTo} flex items-center justify-center`}>
                      <span className={`${integration.initialsColor} font-bold text-sm`}>{integration.initials}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {integration.name}
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium ml-auto">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
                      Live sync active
                    </span>
                  </div>

                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {integration.description}
                  </p>

                  <ul className="space-y-3">
                    {integration.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-slate-300 text-sm"
                      >
                        <div className="w-4 h-4 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                          <svg className="w-2.5 h-2.5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-slate-500 text-sm"
        >
          Setup takes under 2 minutes. Just connect your account — no CSV
          uploads, no manual data entry, ever.
        </motion.p>
      </div>

      <Beam className="absolute bottom-0" />
    </section>
  );
}
