import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Twin Dream Ltd | Custom Software Solutions in Kenya",
  description:
    "Twin Dream Limited engineers high-quality, intelligent software and AI solutions for businesses. We deliver on time and on budget. Your vision, engineered.",
  openGraph: {
    title: "Twin Dream Ltd | Custom Software Solutions in Kenya",
    description:
      "Twin Dream Limited engineers high-quality, intelligent software and AI solutions for businesses. We deliver on time and on budget. Your vision, engineered.",
    url: "https://twindream.co",
    siteName: "Twin Dream",
    locale: "en_US",
    type: "website",
  },

  keywords: [
    "web application development",
    "mobile app developers Kenya",
    "AI consulting",
    "machine learning models",
    "product prototyping",
    "technology strategy",
    "software engineering philosophy",
    "tech innovation Kenya",
    "AI development team",
    "Twin Dream vision",
    "company profile",
    "custom software development Kenya",
    "AI solutions Kenya",
    "machine learning company Nairobi",
    "bespoke software",
    "MVP development",
    "tech consulting Kenya",
    "Twin Dream Limited",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
