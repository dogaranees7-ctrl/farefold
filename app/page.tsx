import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Sequence } from "@/components/sections/Sequence";
import { Library } from "@/components/sections/Library";
import { Industries } from "@/components/sections/Industries";
import { Materials } from "@/components/sections/Materials";
import { BrandSystem } from "@/components/sections/BrandSystem";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { siteConfig, services } from "@/lib/site-config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    knowsAbout: services,
  };

  return (
    <>
      {/* Escaping "<" keeps a stray tag in the payload from closing the
          script element, per the Next.js JSON-LD guidance. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Method />
      <Sequence />
      <Library />
      <Industries />
      <Materials />
      <BrandSystem />
      <Process />
      <Contact />
    </>
  );
}
