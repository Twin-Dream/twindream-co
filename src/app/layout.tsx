import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "http://twindream.co";
const siteName = "Twin Dream";

export const metadata: Metadata = {
  title: "Twin Dream Ltd | Custom Software Solutions",
  description:
    "Twin Dream Limited engineers high-quality, intelligent software and AI solutions for businesses. We deliver on time and on budget. Your vision, engineered.",
  openGraph: {
    title: "Twin Dream Ltd | Custom Software Solutions in Kenya",
    description:
      "Twin Dream Limited engineers high-quality, intelligent software and AI solutions for businesses. We deliver on time and on budget. Your vision, engineered.",
    url: new URL(baseUrl),
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-small.png`,
        width: 600,
        height: 314,
        alt: siteName,
      },
      {
        url: `${baseUrl}/og-large.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    title: "Twin Dream Ltd | Custom Software Solutions in Kenya",
    description:
      "Twin Dream Limited engineers high-quality, intelligent software and AI solutions for businesses. We deliver on time and on budget. Your vision, engineered.",
    card: "summary_large_image",
    images: [
      {
        url: `${baseUrl}/twitter-cover.png`,
        width: 1500,
        height: 500,
        alt: siteName,
      },
    ],
  },

  icons: {
    icon: "/twindream.svg",
    apple: "/twindream.svg",
    other: [{ rel: "icon", url: "/twindream.svg", type: "image/svg" }],
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: new URL(baseUrl),
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
  const gaId = String(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

      <GoogleAnalytics gaId={gaId!} />
    </html>
  );
}
