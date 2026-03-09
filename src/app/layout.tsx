import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GrowMyClub — Analytics & Marketing Automation for Pickleball Clubs",
  description:
    "GrowMyClub gives pickleball club owners real-time analytics, player segmentation, automated SMS marketing, and retention tools — powered by PodPlay and CourtReserve data.",
  openGraph: {
    title: "GrowMyClub — Analytics & Marketing Automation for Pickleball Clubs",
    description:
      "GrowMyClub gives pickleball club owners real-time analytics, player segmentation, automated SMS marketing, and retention tools — powered by PodPlay and CourtReserve data.",
    type: "website",
    url: "https://growmyclub.com",
    siteName: "GrowMyClub",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowMyClub — Analytics & Marketing Automation for Pickleball Clubs",
    description:
      "Real-time analytics, player segmentation, automated SMS marketing, and retention tools for pickleball clubs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
