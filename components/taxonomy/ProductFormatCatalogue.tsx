import Link from "next/link";
import { catalogProducts } from "@/lib/data/catalog-products";
import { getCategoryWhatsappOpener, getWhatsappLink } from "@/lib/site-config";

type FormatOption = {
  name: string;
  description: string;
  note: string;
  mark: string;
};

const formatsByFamily: Record<string, FormatOption[]> = {
  "pizza-boxes": [
    { name: "Standard pizza box", description: "Fold-flat box format for takeaway and delivery pizzas.", note: "Size and board grade confirmed against your pizza and delivery needs.", mark: "01" },
    { name: "Vented pizza box", description: "Pizza-box format with ventilation considered for steam release during transit.", note: "Vent pattern and structure depend on the product and journey.", mark: "02" },
    { name: "Branded pizza box", description: "A pizza box with your artwork and brand identity applied to the available print area.", note: "Print process, colours and order quantity need a quote.", mark: "03" },
  ],
  "burger-boxes": [
    { name: "Folded burger carton", description: "Compact carton format for burgers and handheld hot food.", note: "Dimensions, board and grease resistance to be specified.", mark: "01" },
    { name: "Clamshell burger box", description: "One-piece hinged format designed around easy service and opening.", note: "Closure, ventilation and size need confirming.", mark: "02" },
    { name: "Custom printed burger box", description: "Branded carton format for a consistent takeaway presentation.", note: "Artwork and print options confirmed during quotation.", mark: "03" },
  ],
  "cake-boxes": [
    { name: "Cake carton", description: "Box format for bakery counter sales and takeaway.", note: "Footprint and height depend on the cake.", mark: "01" },
    { name: "Window cake box", description: "Presentation box with a viewing window as a design option.", note: "Window material and food-contact suitability must be confirmed.", mark: "02" },
    { name: "Custom bakery box", description: "A branded box specified around your bakery products.", note: "Dimensions, finish and print quantity need a quote.", mark: "03" },
  ],
  "bakery-boxes": [
    { name: "Bakery carton", description: "Takeaway carton for pastries, cookies and baked goods.", note: "Format and dimensions depend on the product mix.", mark: "01" },
    { name: "Window bakery box", description: "Presentation carton with a clear viewing panel as an option.", note: "Window material and specification require confirmation.", mark: "02" },
    { name: "Branded bakery box", description: "Packaging with artwork tailored to your bakery identity.", note: "Print method and quantity need a quote.", mark: "03" },
  ],
  "meal-boxes": [
    { name: "Meal carton", description: "Folded carton format for takeaway meals.", note: "Portion size, board and barrier needs must be specified.", mark: "01" },
    { name: "Compartment meal box", description: "Multi-section format to help keep meal components separate.", note: "Compartments and material depend on the menu.", mark: "02" },
    { name: "Branded meal packaging", description: "Custom printed meal-box format for your business.", note: "Artwork, dimensions and quantity need a quote.", mark: "03" },
  ],
  "takeaway-boxes": [
    { name: "Folded takeaway carton", description: "General-purpose carton format for takeaway service.", note: "Structure and dimensions depend on the food.", mark: "01" },
    { name: "Lock-corner box", description: "Folded format with interlocking panels for a formed carton.", note: "Closure and carrying needs require review.", mark: "02" },
    { name: "Custom printed takeaway box", description: "A branded format developed around your menu and service.", note: "Print options and minimum quantities need a quote.", mark: "03" },
  ],
  "food-containers": [
    { name: "Round container", description: "Round tub format for suitable hot or cold food applications.", note: "Material, lid fit and temperature conditions must be confirmed.", mark: "01" },
    { name: "Rectangular container", description: "Rectangular format for meals, sides and prepared foods.", note: "Capacity, compartments and lid compatibility need specification.", mark: "02" },
    { name: "Compartment container", description: "Multi-section container format for separated food portions.", note: "Material and intended use require confirmation.", mark: "03" },
  ],
  "paper-cups": [
    { name: "Hot-drink cup", description: "Paper cup format for coffee, tea and other hot drinks.", note: "Capacity, lining and lid compatibility must be confirmed.", mark: "01" },
    { name: "Cold-drink cup", description: "Cup format for chilled beverages.", note: "Barrier, size and lid fit need specification.", mark: "02" },
    { name: "Printed paper cup", description: "Branded cup format with artwork options.", note: "Print method, colours and quantity need a quote.", mark: "03" },
  ],
  "paper-bags": [
    { name: "Flat-handle paper bag", description: "Paper carry bag format for counter and takeaway orders.", note: "Bag dimensions, paper weight and handle style need confirming.", mark: "01" },
    { name: "Twisted-handle paper bag", description: "Carry bag format with twisted paper handles.", note: "Load, dimensions and handle construction need review.", mark: "02" },
    { name: "Printed paper bag", description: "Branded paper bag format for customer orders.", note: "Print coverage and quantity need a quote.", mark: "03" },
  ],
  "food-wrapping-paper": [
    { name: "Food wrap sheet", description: "Cut-sheet format for wrapping sandwiches, burgers and other foods.", note: "Food-contact suitability and barrier requirements must be confirmed.", mark: "01" },
    { name: "Grease-resistant wrap", description: "Wrap format to discuss for oily or greasy menu items.", note: "Performance depends on the specified paper and application.", mark: "02" },
    { name: "Printed food wrap", description: "Branded wrapping-paper format for food presentation.", note: "Ink, substrate and intended contact conditions require review.", mark: "03" },
  ],
  "food-trays": [
    { name: "Paperboard tray", description: "Open tray format for serving and takeaway foods.", note: "Dimensions, board and barrier needs require confirmation.", mark: "01" },
    { name: "Snack tray", description: "Handheld tray format for fries, snacks and sides.", note: "Size and grease resistance need specifying.", mark: "02" },
    { name: "Custom printed tray", description: "Tray format with branded panels where suitable.", note: "Print suitability and order quantity need a quote.", mark: "03" },
  ],
};

const defaultFormats: FormatOption[] = [
  { name: "Standard format", description: "A conventional packaging format to discuss for this product family.", note: "Material, dimensions and intended use require confirmation.", mark: "01" },
  { name: "Custom-sized format", description: "A format planned around your product, portion and service workflow.", note: "Structure and feasibility are confirmed during specification.", mark: "02" },
  { name: "Branded format", description: "A packaging option with your artwork and brand identity.", note: "Printing options and order quantities need a quote.", mark: "03" },
];

export function ProductFormatCatalogue({ slug, categoryName }: { slug: string; categoryName: string }) {
  const formats = formatsByFamily[slug] ?? defaultFormats;
  const products = catalogProducts.filter((product) => product.productFamilySlug === slug);
  const opener = getCategoryWhatsappOpener(categoryName);

  return (
    <section aria-labelledby="format-catalogue-heading" className="mt-14 sm:mt-20">
      {products.length > 0 && (
        <div className="mb-16 border-y border-page-border py-6 sm:mb-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="t-tech-sm text-page-accent">Products</p>
              <h2 className="t-display-tight mt-2 text-2xl text-page-ink sm:text-3xl">
                Packaging products in {categoryName.toLowerCase()}
              </h2>
            </div>
            <p className="max-w-[42ch] text-sm leading-6 text-page-ink-soft">
              Browse the current Farefold product directions for this family. Open a product for its packaging brief and request a quote.
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-px border border-page-border bg-page-border sm:grid-cols-2">
            {products.map((product) => (
              <li key={product.id} className="bg-page-bg">
                <Link href={"/products/item/" + product.slug} className="group block h-full">
                  <div className="p-6 sm:p-7">
                    <p className="t-tech-sm text-page-ink-mute">{product.eyebrow}</p>
                    <h3 className="t-display-tight mt-2 text-xl text-page-ink group-hover:underline">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-page-ink-soft">{product.description}</p>
                    <span className="link-rule mt-6 inline-block text-sm text-page-ink">
                      View product <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-col gap-4 border-y border-page-border py-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="t-tech-sm text-page-accent">Explore formats</p>
          <h2 id="format-catalogue-heading" className="t-display-tight mt-2 text-2xl text-page-ink sm:text-3xl">
            Packaging options to discuss
          </h2>
        </div>
        <p className="max-w-[42ch] text-sm leading-6 text-page-ink-soft">
          These are format examples, not live SKUs. We’ll confirm dimensions, materials, print options, pricing and availability for your brief.
        </p>
      </div>

      <ul className="mt-px grid grid-cols-1 gap-px border-x border-b border-page-border bg-page-border sm:grid-cols-2 xl:grid-cols-3">
        {formats.map((format) => (
          <li key={format.mark} className="flex min-h-[19rem] flex-col bg-page-bg p-6 sm:p-7">
            <div className="flex items-start justify-between">
              <span className="t-tech-sm text-page-ink-mute">FORMAT / {format.mark}</span>
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center border border-page-border text-page-accent">
                <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M5 13 20 5l15 8-15 8L5 13Z" />
                  <path d="M5 13v14l15 8V21M35 13v14l-15 8" />
                  <path d="m12 17 15-8M20 21v14" strokeDasharray="2 2" />
                </svg>
              </span>
            </div>
            <h3 className="t-display-tight mt-8 text-xl text-page-ink">{format.name}</h3>
            <p className="mt-3 text-sm leading-6 text-page-ink-soft">{format.description}</p>
            <p className="mt-4 border-l-2 border-page-accent pl-3 text-xs leading-5 text-page-ink-mute">{format.note}</p>
            <Link
              href={getWhatsappLink(`${opener}\n\nFormat I’m interested in: ${format.name}\nPlease confirm specifications, price and availability.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule mt-auto self-start pt-7 text-sm text-page-ink"
            >
              Ask about this format <span aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
