"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntegrationBanner from "@/components/IntegrationBanner";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import IntegrationsSection from "@/components/IntegrationsSection";
import InsightsShowcase from "@/components/InsightsShowcase";
import HowItWorks from "@/components/HowItWorks";
import WaitlistCTA from "@/components/WaitlistCTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] relative">
      {/* Film grain / noise overlay for premium feel */}
      <div className="noise-overlay" />

      <Navbar />
      <Hero />
      <IntegrationBanner />
      <StatsBar />
      <Features />
      <IntegrationsSection />
      <InsightsShowcase />
      <HowItWorks />
      <WaitlistCTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
