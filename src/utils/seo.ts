// SEO utilities for JSON‑LD generation
// These helpers return plain objects that can be stringified and placed in a <script type="application/ld+json"> tag.

export interface FAQItem {
  question: string;
  answer: string;
}

/** Generate FAQPage schema from an array of FAQ items */
export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: i.answer,
      },
    })),
  };
}

/** Generate Service schema for a solar service card */
export function generateServiceSchema({ name, description, url, image }: { name: string; description: string; url: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    ...(image ? { image } : {}),
    provider: {
      "@type": "Organization",
      name: "MS Green Solar",
      url: "https://www.msgreensolar.com",
    },
  };
}

/** Generate LocalBusiness schema for contact page */
export function generateLocalBusinessSchema({ name, url, telephone, address }: { name: string; url: string; telephone: string; address: { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string; addressCountry: string } }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    telephone,
    address,
    sameAs: [
      "https://www.facebook.com/msgreensolar",
      "https://www.instagram.com/msgreensolar",
      "https://www.linkedin.com/company/msgreensolar",
    ],
  };
}
