import { PageWorld } from "@/components/ui/PageWorld";
import { Hero } from "@/components/sections/Hero";
import { StandardVsCustom } from "@/components/sections/StandardVsCustom";
import { ConceptShowcase } from "@/components/sections/ConceptShowcase";
import { Matcher } from "@/components/sections/Matcher";
import { Discovery, type DiscoveryEntry } from "@/components/sections/Discovery";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";
import { siteConfig, services } from "@/lib/site-config";
import {
  foodTypes,
  businessTypes,
  packagingProblems,
  materials,
  getTopLevel,
} from "@/lib/data";

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

  // Real, computed counts — nothing here is a fabricated stat.
  const foodGroupCount = getTopLevel(foodTypes).length;
  const businessGroupCount = getTopLevel(businessTypes).length;
  const problemGroupCount = getTopLevel(packagingProblems).length;
  const materialGroupCount = getTopLevel(materials).length;

  const discoveryEntries: DiscoveryEntry[] = [
    { name: "Foods", description: `${foodGroupCount} food groups`, href: "/foods" },
    { name: "Businesses", description: `${businessGroupCount} business segments`, href: "/businesses" },
    { name: "Solutions", description: `${problemGroupCount} problem categories`, href: "/solutions" },
    { name: "Materials", description: `${materialGroupCount} material families`, href: "/materials" },
    { name: "Lab", description: "Reference environment", href: "/lab" },
  ];

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
      <PageWorld world="home">
        <Hero />
        <StandardVsCustom />
        <ConceptShowcase />
        <Matcher
          foodGroups={getTopLevel(foodTypes).map(({ slug, name }) => ({ slug, name }))}
          businessGroups={getTopLevel(businessTypes).map(({ slug, name }) => ({ slug, name }))}
          problemGroups={getTopLevel(packagingProblems).map(({ slug, name }) => ({ slug, name }))}
        />
        <Discovery entries={discoveryEntries} />
        <FinalCta />
        <Contact />
      </PageWorld>
    </>
  );
}
