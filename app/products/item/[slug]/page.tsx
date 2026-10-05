import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalogProducts } from "@/lib/data";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return catalogProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/item/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <div className="bg-[#f3efe6] text-[#171614]">
      <div className="mx-auto w-full max-w-[120rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
        <Link href="/products" className="link-rule text-sm text-[#171614]">
          ← All products
        </Link>

        <div className="mt-10 grid gap-px border border-black/15 bg-black/15 lg:grid-cols-[1.05fr_.95fr]">
          <div className="bg-[#f3efe6] p-7 sm:p-10 lg:p-14">
            <div><p className="text-xs uppercase tracking-[0.24em] text-[#567000]">${product.eyebrow}</p><h1 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl">${product.name}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">${product.description}</p><div className="mt-8 grid grid-cols-2 gap-px border border-black/15"><div className="p-4"><p className="text-xs uppercase tracking-[0.18em] text-black/40">Status</p><p className="mt-2 text-sm">Quote / specification</p></div><div className="p-4"><p className="text-xs uppercase tracking-[0.18em] text-black/40">Format</p><p className="mt-2 text-sm">Customised to brief</p></div></div></div>
            <div className="mt-10 border-t border-black/15 pt-7">
              <p className="t-tech-sm text-[#557000]">The problem</p>
              <p className="mt-3 max-w-[55ch] text-base leading-7 text-[#171614]">{product.problem}</p>
            </div>
            <div className="mt-8 border-t border-black/15 pt-7">
              <p className="t-tech-sm text-[#557000]">The packaging response</p>
              <p className="mt-3 max-w-[55ch] text-base leading-7 text-[#171614]">{product.solution}</p>
            </div>
          </div>

          <div className="bg-[#f3efe6] p-7 sm:p-10 lg:p-14">
            <div className="mt-6 grid grid-cols-2 gap-px border border-black/15 bg-page-border">
              <div className="bg-[#f3efe6] p-5">
                <p className="t-tech-sm text-[#171614]-mute">CUSTOM</p>
                <p className="mt-2 text-sm text-[#171614]">Structure, print and finish can be developed around the product.</p>
              </div>
              <div className="bg-[#f3efe6] p-5">
                <p className="t-tech-sm text-[#171614]-mute">QUOTE</p>
                <p className="mt-2 text-sm text-[#171614]">Dimensions, quantity, material and pricing are confirmed per brief.</p>
              </div>
            </div>
            <Link href={`/contact?product=${product.slug}`} className="mt-6 inline-flex w-full items-center justify-center border border-page-ink bg-[#171614] px-6 py-4 text-sm text-[#f3efe6]">
              Request this product direction ↗
            </Link>
          </div>
        </div>

        <section aria-labelledby="specification-heading" className="mt-14 border-t border-black/15 pt-10 sm:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-[#557000]">Direction / specification</p>
              <h2 id="specification-heading" className="t-display-tight mt-2 text-2xl text-[#171614] sm:text-4xl">Built around the brief</h2>
            </div>
            <p className="max-w-[46ch] text-sm leading-6 text-[#171614]-soft">These are design directions, not locked production specifications. Final dimensions, materials and print treatment are confirmed during quoting.</p>
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-px border border-black/15 bg-page-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Material direction", product.materialDirection],
              ["Format", product.formatDirection],
              ["Print direction", product.printDirection],
              ["Best suited to", product.useCases.join(" · ")],
            ].map(([term, value]) => (
              <div key={term} className="bg-[#f3efe6] p-5">
                <dt className="t-tech-sm text-[#171614]-mute">{term}</dt>
                <dd className="mt-3 text-sm leading-6 text-[#171614]">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-14 border-t border-black/15 pt-8">
          <Link href={product.familyHref} className="link-rule text-sm text-[#171614]">
            Explore the wider family ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
