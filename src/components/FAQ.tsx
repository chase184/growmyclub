"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Which booking platforms does GrowMyClub work with?",
    answer:
      "GrowMyClub currently integrates with PodPlay and CourtReserve — the two most popular booking platforms in the pickleball world. Once connected, your player data, court bookings, and revenue sync automatically in real time. We're exploring additional integrations based on waitlist feedback.",
  },
  {
    question: "How long does setup take?",
    answer:
      "About 2 minutes. You connect your PodPlay or CourtReserve account, and GrowMyClub immediately begins syncing your data. Your dashboard will start populating with real player analytics within moments — no CSV imports, no manual data entry required.",
  },
  {
    question: "Do I need technical skills to use GrowMyClub?",
    answer:
      "Not at all. GrowMyClub is designed for club owners and operators, not engineers. The dashboard is intuitive, the SMS campaigns come with pre-built templates, and the retention pipelines use a simple visual builder. If you can use a booking platform, you can use GrowMyClub.",
  },
  {
    question: "Is my player data secure?",
    answer:
      "Absolutely. We use industry-standard encryption for data at rest and in transit. Your player data is never shared with third parties, and we comply with applicable privacy regulations. You remain the owner of your data at all times.",
  },
  {
    question: "What does GrowMyClub cost?",
    answer:
      "We're still finalizing pricing as we onboard our first cohort of clubs. Waitlist members will receive early-bird rates and be grandfathered into those rates permanently. Join the waitlist now to lock in the best possible deal.",
  },
  {
    question: "Can I use GrowMyClub if I run multiple facilities?",
    answer:
      "Yes! GrowMyClub supports multi-facility management. You'll be able to view analytics for each location individually or see a consolidated view across all your facilities. Each facility can have its own messaging campaigns and retention pipelines tailored to its unique player base.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass-card overflow-hidden transition-colors" style={isOpen ? { borderColor: "rgba(59, 130, 246, 0.2)" } : {}}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-white hover:text-blue-400 transition-colors"
      >
        <span className="text-base font-medium pr-4">{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0A0E1A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked{" "}
            <span className="text-gradient">questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
