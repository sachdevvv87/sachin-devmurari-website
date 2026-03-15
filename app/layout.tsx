import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin Devmurari | Best SEO & Content Marketing Service | AEO GEO Expert",
  description:
    "Sachin Devmurari offers the best SEO service, content marketing agency USA, answer engine optimization (AEO), GEO service, and top digital marketing services for SaaS and enterprise tech brands. 12+ years of experience. Serving clients in the USA and globally.",
  keywords: [
    "answer engine optimization service",
    "best digital marketing service",
    "best seo service",
    "top digital marketing agency USA",
    "content marketing agency USA",
    "content writing agency USA",
    "aeo geo service USA",
    "Sachin Devmurari",
    "SEO Expert",
    "Content Marketing",
    "Digital Marketing",
    "SaaS Growth",
    "AI Strategy",
    "Digital PR",
    "AQe Digital",
    "Enterprise SEO",
    "Generative Engine Optimization",
    "AEO service",
    "GEO service",
  ],
  authors: [{ name: "Sachin Devmurari" }],
  creator: "Sachin Devmurari",
  alternates: {
    canonical: "https://sachindevmurari.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sachindevmurari.com",
    title: "Sachin Devmurari | Best SEO & Content Marketing Service | AEO GEO Expert",
    description:
      "Top digital marketing expert offering the best SEO service, content marketing, AEO, GEO, and digital marketing services for SaaS & enterprise tech brands — serving clients in the USA and worldwide.",
    siteName: "Sachin Devmurari",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Devmurari | Best SEO & Content Marketing Service | AEO GEO Expert",
    description:
      "Best SEO service, content marketing agency, AEO & GEO services for SaaS and enterprise tech brands. Serving USA and global clients.",
    creator: "@sachindevmurari",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Person", "ProfessionalService"],
  name: "Sachin Devmurari",
  url: "https://sachindevmurari.com",
  sameAs: ["https://linkedin.com/in/sachindevmurari"],
  jobTitle: "Digital Marketing Head & SEO Strategist",
  worksFor: {
    "@type": "Organization",
    name: "AQe Digital",
    url: "https://aqedigital.com",
  },
  areaServed: ["US", "IN", "GB", "CA", "AU"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Answer Engine Optimization",
    "AEO Service",
    "GEO Service",
    "Generative Engine Optimization",
    "SEO Strategy",
    "Best SEO Service",
    "Content Marketing Agency USA",
    "Content Writing Agency USA",
    "Top Digital Marketing Agency USA",
    "Best Digital Marketing Service",
    "Digital PR",
    "AI-Powered Growth",
    "SaaS Marketing",
    "Enterprise Content",
  ],
  description:
    "Sachin Devmurari provides the best SEO service, content marketing, answer engine optimization (AEO), generative engine optimization (GEO), and digital marketing services for SaaS and enterprise tech brands in the USA and globally.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Answer Engine Optimization (AEO) Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generative Engine Optimization (GEO) Service USA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Best SEO Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Marketing Agency USA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Writing Agency USA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Top Digital Marketing Agency USA" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-[#0a0a0f] text-[#f0f0f5]`}>
        {children}
      </body>
    </html>
  );
}
