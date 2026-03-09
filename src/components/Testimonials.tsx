"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import Beam from "./Beam";

const testimonials = [
  {
    quote:
      "I had no idea 30% of my members were at risk of churning. GrowMyClub showed me in the first 5 minutes — and the automated win-back campaign brought 12 of them back that week.",
    name: "Mike T.",
    club: "Coastal Pickleball Club",
    location: "San Diego, CA",
  },
  {
    quote:
      "Before GrowMyClub, I was running my club off spreadsheets and gut feeling. Now I can see exactly what's driving revenue and which players need attention. It's a game-changer.",
    name: "Sarah L.",
    club: "Maple Leaf Pickleball",
    location: "Vancouver, BC",
  },
  {
    quote:
      "The SMS automation alone saves me 10 hours a week. New visitors get a welcome sequence, at-risk members get a nudge — all without me lifting a finger. Wish I'd had this years ago.",
    name: "James K.",
    club: "Melbourne Pickleball Centre",
    location: "Melbourne, AU",
  },
];

const stars = Array(5).fill(null);

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0F1629] overflow-hidden">
      <Beam className="absolute top-0" />

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
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            Testimonials
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Built by operators,{" "}
            <span className="text-shimmer">for operators</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <SpotlightCard
                className="premium-card p-8 h-full rounded-2xl"
                spotlightColor="rgba(59, 130, 246, 0.06)"
              >
                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {stars.map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-slate-300 leading-relaxed mb-6 text-[15px]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-sm font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-slate-500 text-xs">{testimonial.club} &middot; {testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <Beam className="absolute bottom-0" />
    </section>
  );
}
