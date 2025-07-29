import AppNavigation from "@/components/shared/app-navigation";
import Footer from "@/components/shared/footer";
import { PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Twin Dream Limited",
    alternateName: "Twin Dream Ltd",
    url: "https://www.twindream.co",
    logo: "https://www.twindream.co/twindream.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "[+254 714 725 468]",
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    description:
      "Twin Dream Limited builds brilliant, bespoke software and AI solutions to solve client needs and creates innovative tools to make technology accessible for all.",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KES",
    },
    sameAs: [],
  };

  return (
    <main>
      <AppNavigation />
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Footer />
    </main>
  );
}
