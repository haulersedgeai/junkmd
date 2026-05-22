import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Save20Bar } from "@/components/save-20-bar";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema } from "@/lib/jsonld";
import { PRODUCTION_URL, SITE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "JunkMD+ is San Diego's top-rated junk removal company. Same-day and next-day service, flat-rate pricing, eco-friendly disposal. Family-owned since 2012. Save $20 on your first appointment.",
  keywords: [
    "junk removal san diego",
    "dumpster rental san diego",
    "furniture removal",
    "appliance removal",
    "estate cleanout",
    "hoarder cleanout",
    "demolition san diego",
    "junkmd",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PRODUCTION_URL,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Same-day and next-day junk removal in San Diego. Flat-rate pricing. Save $20 on your first appointment.",
    images: [{ url: "/images/truck-hero.webp", width: 1024, height: 534 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Same-day and next-day junk removal in San Diego. Save $20 on your first appointment.",
    images: ["/images/truck-hero.webp"],
  },
  icons: {
    icon: "/images/favicon-src.jpg",
    apple: "/images/favicon-src.jpg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0E1A0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd id="ld-business" data={localBusinessSchema()} />
        <Save20Bar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
