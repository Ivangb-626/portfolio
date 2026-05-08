import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iván González Blázquez | Portfolio Front-end",
  description:
    "Portfolio profesional de Iván González Blázquez: experiencia, formación en Ingeniería Informática (UPV/EHU) y competencias en desarrollo de software.",
  keywords: [
    "Iván González Blázquez",
    "portfolio front-end",
    "ingeniería del software",
    "UPV/EHU",
    "desarrollo web",
    "Next.js",
  ],
  authors: [{ name: "Iván González Blázquez" }],
  creator: "Iván González Blázquez",
  metadataBase: new URL("https://ivangonzalezblazquez.vercel.app"),
  alternates: {
    canonical: "https://ivangonzalezblazquez.vercel.app",
  },
  openGraph: {
    title: "Iván González Blázquez | Portfolio Front-end",
    description:
      "Experiencia profesional, trayectoria académica y competencias técnicas de Iván González Blázquez.",
    url: "https://ivangonzalezblazquez.vercel.app",
    siteName: "Portfolio de Iván González Blázquez",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-slate-950 antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
