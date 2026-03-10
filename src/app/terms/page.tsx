import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "GrowMyClub terms of service — the rules of using our platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] text-white">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-400 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> March 2025
          </p>
          <p>
            Welcome to GrowMyClub. By accessing or using our platform, you agree
            to be bound by these Terms of Service. Please read them carefully.
          </p>
          <h2 className="text-2xl font-semibold text-white pt-4">Use of Service</h2>
          <p>
            GrowMyClub provides analytics and marketing automation tools for
            pickleball club owners. You may use our service only in compliance
            with these terms and all applicable laws.
          </p>
          <h2 className="text-2xl font-semibold text-white pt-4">Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the security of your account
            credentials and for all activities that occur under your account. You
            must ensure you have the necessary rights and consent to share player
            data with our platform.
          </p>
          <h2 className="text-2xl font-semibold text-white pt-4">Data Ownership</h2>
          <p>
            You retain full ownership of your data. We process your data solely
            to provide the services described on our platform. We do not claim
            ownership of any player data synced through your booking platform
            integrations.
          </p>
          <h2 className="text-2xl font-semibold text-white pt-4">Contact Us</h2>
          <p>
            For questions about these Terms of Service, contact us at{" "}
            <a href="mailto:legal@growmyclub.com" className="text-blue-400 hover:underline">
              legal@growmyclub.com
            </a>.
          </p>
        </div>
        <div className="mt-12">
          <a href="/" className="text-blue-400 hover:underline">&larr; Back to home</a>
        </div>
      </div>
    </main>
  );
}
