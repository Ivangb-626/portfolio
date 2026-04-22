import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iván González Blázquez | Software Developer in Spain",
  description: "Professional portfolio of Iván González Blázquez - Full-Stack Software Developer based in Madrid, Spain. Specializing in React, Next.js, Node.js, Python, and modern web technologies.",
  keywords: [
    "software developer Spain",
    "programmer Madrid",
    "full-stack developer",
    "web developer España",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Node.js",
    "Python developer",
    "Iván González Blázquez"
  ],
  authors: [{ name: "Iván González Blázquez" }],
  creator: "Iván González Blázquez",
  publisher: "Iván González Blázquez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ivangonzalezblazquez.vercel.app"),
  alternates: {
    canonical: "https://ivangonzalezblazquez.vercel.app",
  },
  openGraph: {
    title: "Iván González Blázquez | Software Developer",
    description: "Full-Stack Software Developer based in Madrid, Spain. Specializing in modern web technologies and scalable applications.",
    url: "https://ivangonzalezblazquez.vercel.app",
    siteName: "Iván González Blázquez Portfolio",
    locale: "es_ES",
    type: "website",
    countryName: "Spain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iván González Blázquez | Software Developer",
    description: "Full-Stack Software Developer based in Madrid, Spain.",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="geo.region" content="ES-MD" />
        <meta name="geo.placename" content="Madrid" />
        <meta name="geo.position" content="40.4168;-3.7038" />
        <meta name="ICBM" content="40.4168, -3.7038" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
