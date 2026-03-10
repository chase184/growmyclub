import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growmyclub.com"),
  title: {
    default: "GrowMyClub — Analytics & Marketing Automation for Pickleball Clubs",
    template: "%s | GrowMyClub",
  },
  description:
    "GrowMyClub gives pickleball club owners real-time analytics, player segmentation, automated SMS marketing, and retention tools — powered by PodPlay and CourtReserve data.",
  keywords: [
    "pickleball analytics",
    "pickleball club management",
    "pickleball marketing",
    "pickleball retention",
    "PodPlay integration",
    "CourtReserve integration",
    "pickleball SMS automation",
    "club player analytics",
    "pickleball facility dashboard",
    "pickleball club software",
  ],
  authors: [{ name: "GrowMyClub" }],
  creator: "GrowMyClub",
  publisher: "GrowMyClub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://growmyclub.com",
  },
  openGraph: {
    title: "GrowMyClub — Analytics & Marketing Automation for Pickleball Clubs",
    description:
      "GrowMyClub gives pickleball club owners real-time analytics, player segmentation, automated SMS marketing, and retention tools — powered by PodPlay and CourtReserve data.",
    type: "website",
    url: "https://growmyclub.com",
    siteName: "GrowMyClub",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GrowMyClub — Analytics platform for pickleball clubs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowMyClub — Analytics & Marketing Automation for Pickleball Clubs",
    description:
      "Real-time analytics, player segmentation, automated SMS marketing, and retention tools for pickleball clubs.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#0A0E1A",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

// JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GrowMyClub",
  url: "https://growmyclub.com",
  description:
    "Analytics and marketing automation platform built exclusively for pickleball clubs.",
  foundingDate: "2025",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GrowMyClub",
  url: "https://growmyclub.com",
  description:
    "Analytics & Marketing Automation for Pickleball Clubs",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which booking platforms does GrowMyClub work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GrowMyClub currently integrates with PodPlay and CourtReserve — the two most popular booking platforms in the pickleball world. Once connected, your player data, court bookings, and revenue sync automatically in real time.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 2 minutes. You connect your PodPlay or CourtReserve account, and GrowMyClub immediately begins syncing your data. Your dashboard will start populating with real player analytics within moments.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical skills to use GrowMyClub?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. GrowMyClub is designed for club owners and operators, not engineers. The dashboard is intuitive, the SMS campaigns come with pre-built templates, and the retention pipelines use a simple visual builder.",
      },
    },
    {
      "@type": "Question",
      name: "Is my player data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We use industry-standard encryption for data at rest and in transit. Your player data is never shared with third parties, and we comply with applicable privacy regulations.",
      },
    },
    {
      "@type": "Question",
      name: "What does GrowMyClub cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're still finalizing pricing as we onboard our first cohort of clubs. Waitlist members will receive early-bird rates and be grandfathered into those rates permanently.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use GrowMyClub if I run multiple facilities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! GrowMyClub supports multi-facility management. You can view analytics for each location individually or see a consolidated view across all your facilities.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GrowMyClub",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Analytics and marketing automation platform for pickleball clubs. Integrates with PodPlay and CourtReserve.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    description: "Join the waitlist for early access",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
