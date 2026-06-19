import type { Metadata, Viewport } from "next";
import { Sora, Oswald } from "next/font/google";
import "./globals.css";
import { business, seoKeywords, services } from "@/lib/content";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://www.nbsprays.co.uk";
const TITLE = "NB Sprays | Vehicle Bodywork & Paint Repair Specialists, North West England";
const DESCRIPTION =
  "NB Sprays are professional vehicle bodywork and paint repair specialists in North West England. Accident damage repairs, dent removal, scratch repairs, paint correction, respraying and car restoration. Get a quote today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | NB Sprays",
  },
  description: DESCRIPTION,
  keywords: seoKeywords,
  authors: [{ name: business.name }],
  creator: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: business.name,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NB Sprays — vehicle bodywork and paint repair specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Automotive",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: business.name,
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+447467457091",
  email: business.email,
  priceRange: "££",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "North West England",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "North West England",
    addressCountry: "GB",
  },
  sameAs: [business.instagramUrl],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.description },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${sora.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-silver-100 focus:px-5 focus:py-2 focus:text-sm focus:text-ink-900"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
