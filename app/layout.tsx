import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// Three registers, deliberately far apart.
//
// Archivo carries both the display and the body voice — it is one family, but
// its width axis is wide enough that a headline set at wdth 112 and a
// paragraph set at wdth 100 read as different instruments. The width axis is
// requested explicitly; next/font ships weight only by default.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// The technical voice: annotation, dimensions, codes, labels.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// The human sentence in a technical document. Used perhaps five times.
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "food packaging design",
    "restaurant packaging supplier",
    "custom printed food packaging",
    "structural packaging design",
    "dieline design",
    "cloud kitchen packaging",
    "bakery packaging",
    "takeaway packaging supply",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} ${instrument.variable} h-full`}
    >
      <body className="min-h-full">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] bg-[var(--ink)] text-[var(--paper)] px-5 py-3">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
