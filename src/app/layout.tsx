import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnnouncementBar } from "@/components/announcement-bar";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema } from "@/lib/jsonld";
import { PRODUCTION_URL, SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
    description: "Same-day junk removal in San Diego. Flat-rate pricing. Save $20 on your first appointment.",
    images: [{ url: "/images/photos/truck/junkmd-truck-san-diego-banner-01.jpg", width: 1920, height: 1078 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Same-day junk removal in San Diego. Save $20 on your first appointment.",
    images: ["/images/photos/truck/junkmd-truck-san-diego-banner-01.jpg"],
  },
  icons: { icon: "/images/favicon-src.jpg", apple: "/images/favicon-src.jpg" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        <JsonLd id="ld-business" data={localBusinessSchema()} />
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
