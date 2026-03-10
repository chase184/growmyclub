import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GrowMyClub privacy policy — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] text-white">
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-400 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> March 2025
          </p>
          <p>
            GrowMyClub (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our platform and website.
          </p>
          <h2 className="text-2xl font-semibold text-white pt-4">Information We Collect</h2>
          <p>
            We collect information you provide directly, including your name,
            email address, club name, and booking platform preferences when you
            join our waitlist. When you use our platform, we process player data
            synced from your connected booking platform (PodPlay or
            CourtReserve).
          </p>
          <h2 className="text-2xl font-semibold text-white pt-4">How We Use Your Information</h2>
          <p>
            We use your information to provide our analytics and marketing
            automation services, communicate with you about your account, and
            improve our platform. We do not sell your personal data to third
            parties.
          </p>
          <h2 className="text-2xl font-semibold text-white pt-4">Data Security</h2>
          <p>
            We use industry-standard encryption for data at rest and in transit.
            Your player data is stored securely and access is restricted to
            authorized personnel only.
          </p>
          <h2 className="text-2xl font-semibold text-white pt-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@growmyclub.com" className="text-blue-400 hover:underline">
              privacy@growmyclub.com
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
