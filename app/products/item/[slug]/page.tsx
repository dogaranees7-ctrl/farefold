import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/spec/Sheet";
import { PageWorld } from "@/components/ui/PageWorld";
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

function ProductDiagram({ visual }: { visual: (typeof catalogProducts)[number]["visual"] }) {
  const labels = {
    pizza: ["PIZZA", "SIDES", "SAUCE"],
    coffee: ["CUP 01", "CUP 02", "BAKERY"],
    meal: ["MAIN", "SIDE", "DIP"],
    sauce: ["CLASSIC", "GARLIC", "BBQ"],
    bottle: ["DRINK", "BRAND", "LABEL"],
    sushi: ["MAIN", "ROLL", "DIP"],
    bag: ["CARRY", "BRAND", "HANDLE"],
    bakery: ["BAKERY", "WINDOW", "BRAND"],
  } as const;
  return (
    <div className="border border-page-border bg-page-surface p-8">
      <div className="grid grid-cols-3 gap-3">
        {labels[visual].map((label, index) => (
          <div key={label} className={`flex aspect-square items-center justify-center border border-page-ink text-center ${index === 0 ? "bg-page-ink text-page-bg" : ""}`}>
            <span className="t-tech-sm px-2">{label}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 h-3 w-2/3 border border-page-ink" />
      <div className="mt-2 h-3 w-1/2 border border-page-ink" />
    </div>
  );
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = catalogProducts.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <PageWorld world="shop" className="substrate bg-page-bg py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <Link href="/products" className="link-rule text-sm text-page-ink">
          ← All products
        </Link>

        <div className="mt-8 grid gap-px border border-page-border bg-page-border lg:grid-cols-[1.05fr_.95fr]">
          <div className="bg-page-bg p-7 sm:p-10 lg:p-14">
            <PageHead
              tone="page"
              eyebrow={product.eyebrow}
              headline={product.name}
              intro={<p>{product.description}</p>}
              meta={[
                ["Status", "Quote / specification"],
                ["Format", "Customised to brief"],
              ]}
            />
            <div className="mt-10 border-t border-page-border pt-7">
              <p className="t-tech-sm text-page-accent">The problem</p>
              <p className="mt-3 max-w-[55ch] text-base leading-7 text-page-ink">{product.problem}</p>
            </div>
            <div className="mt-8 border-t border-page-border pt-7">
              <p className="t-tech-sm text-page-accent">The packaging response</p>
              <p className="mt-3 max-w-[55ch] text-base leading-7 text-page-ink">{product.solution}</p>
            </div>
          </div>

          <div className="bg-page-bg p-7 sm:p-10 lg:p-14">
            <ProductDiagram visual={product.visual} />
            <div className="mt-6 grid grid-cols-2 gap-px border border-page-border bg-page-border">
              <div className="bg-page-bg p-5">
                <p className="t-tech-sm text-page-ink-mute">CUSTOM</p>
                <p className="mt-2 text-sm text-page-ink">Structure, print and finish can be developed around the product.</p>
              </div>
              <div className="bg-page-bg p-5">
                <p className="t-tech-sm text-page-ink-mute">QUOTE</p>
                <p className="mt-2 text-sm text-page-ink">Dimensions, quantity, material and pricing are confirmed per brief.</p>
              </div>
            </div>
            <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center border border-page-ink bg-page-ink px-6 py-4 text-sm text-page-bg">
              Request this product direction ↗
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-page-border pt-8">
          <Link href={product.familyHref} className="link-rule text-sm text-page-ink">
            Explore the wider family ↗
          </Link>
        </div>
      </div>
    </PageWorld>
  );
}
