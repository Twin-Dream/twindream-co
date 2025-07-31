import { notFound } from "next/navigation";
import services from "@/lib/data/services";

import { baseUrl, siteName, defaultKeywords } from "@/lib/data/config";
import type { Metadata } from "next";

interface Params {
  params: Promise<{ id: string }>;
}

// generate all paths
export function generateStaticParams() {
  return services.map((svc) => ({ id: svc.id }));
}

// dynamic metadata
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;

  const svc = services.find((s) => s.id === id);
  if (!svc) {
    return {};
  }

  const canonical = new URL(svc.url, baseUrl);
  const titleTemplate = "%s | Twin Dream Ltd";

  return {
    title: {
      default: `${siteName} | ${svc.seo.title}`,
      template: titleTemplate,
    },
    description: svc.seo.description,
    keywords: [...defaultKeywords, ...svc.seo.keywords],

    openGraph: {
      title: svc.seo.title,
      description: svc.seo.description,
      url: canonical,
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
      title: svc.seo.title,
      description: svc.seo.description,
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
      canonical,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { id } = await params;
  const svc = services.find((s) => s.id === id);
  if (!svc) notFound();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold">{svc.header.h1}</h1>

      {svc.sections.map((sec, i) => (
        <section key={i} className="mt-8">
          <h2 className="text-2xl font-semibold">{sec.h2}</h2>
          <ul className="list-disc pl-5 mt-3 space-y-2">
            {sec.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-12">
        <a
          href={svc.cta.href}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg"
        >
          {svc.cta.text}
        </a>
      </div>
    </main>
  );
}
