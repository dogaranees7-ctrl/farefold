import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { catalogProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Send Farefold the packaging brief for a product direction, custom structure or recurring supply requirement.",
  alternates: { canonical: "/contact" },
};

type Props = {
  searchParams: Promise<{ product?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const productSlug = Array.isArray(params.product) ? params.product[0] : params.product;
  const product = productSlug
    ? catalogProducts.find((item) => item.slug === productSlug) ?? null
    : null;

  return <Contact product={product} />;
}
