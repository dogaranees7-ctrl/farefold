import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, MailIcon, ArrowRightIcon } from "@/components/icons";
import {
  siteConfig,
  getWhatsappLink,
  getMailtoLink,
  quoteBrief,
  whatsappOpener,
} from "@/lib/site-config";
import type { CatalogProduct } from "@/lib/data";

type ContactProps = {
  product?: CatalogProduct | null;
};

const fields = [
  "Business name and type",
  "What you serve — top three items",
  "Packaging you need, or the problem you have",
  "Approximate monthly volume",
  "Design and print, or supply only",
  "Timeline and delivery location",
];

export function Contact({ product = null }: ContactProps) {
  const selectedBrief = product
    ? [
        `Product direction: ${product.name}`,
        `Product code: ${product.id}`,
        `Family: ${product.familyHref.replace("/products/", "")}`,
        "",
        quoteBrief,
      ].join("\n")
    : quoteBrief;

  const selectedWhatsappOpener = product
    ? `Hi Farefold — I would like to request the "${product.name}" packaging direction. Here is what I serve and roughly what I need:`
    : whatsappOpener;

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#ffd9c2] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#7b3d20]">Farefold / Project enquiry</p>
              {product ? (
                <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl">Quote the<br />{product.name}.</h1>
              ) : (
                <h1 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl">Tell us what<br />you want to build.</h1>
              )}
              <p className="mt-7 max-w-xl text-lg leading-8 text-black/60">Start with the restaurant and the problem. Tell us whether you are launching, rebranding, improving packaging, or looking for a better customer experience.</p>
              <p className="mt-10 max-w-md text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#171614]">Good packaging does not just hold food. It solves something.</p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative border border-black/15 bg-[#fffaf4]">
              <div className="flex items-baseline justify-between gap-4 px-6 pt-8 sm:px-10">
                <p className="t-tech-sm text-[#7b3d20]">Farefold · work order</p>
                <p className="t-tech-sm text-[#7b3d20]">FF / 09</p>
              </div>

              <div className="px-6 sm:px-10">
                <div className="border-dashed mt-5 text-[#171614]/30" />
              </div>

              <div className="px-6 py-8 sm:px-10">
                <p className="t-tech text-black/40">What we&apos;ll ask for</p>

                {product ? (
                  <div className="mt-5 border border-black/15 bg-[#ffd9c2] px-4 py-4">
                    <p className="t-tech-sm text-[#7b3d20]">Selected product direction</p>
                    <p className="mt-1 text-base font-medium text-[#171614]">{product.name}</p>
                    <p className="mt-1 text-sm leading-6 text-black/60">{product.description}</p>
                  </div>
                ) : null}

                <ol className="mt-5">
                  {fields.map((f, i) => (
                    <li
                      key={f}
                      className="flex items-baseline gap-4 border-b border-black/10 py-3 last:border-0"
                    >
                      <span className="t-tech-sm shrink-0 text-[#7b3d20]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.95rem] leading-6 text-[#171614]">{f}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-6 text-[0.9rem] leading-6 text-black/60">
                  Both buttons below open with these details already written out
                  {product ? " for the selected product direction" : ""}. Fill in what you know and send it. Missing a few is fine.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={getWhatsappLink(selectedWhatsappOpener)}
                    variant="whatsapp"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ArrowRightIcon className="h-4 w-4" />}
                    className="sm:flex-1"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    href={getMailtoLink("Farefold project enquiry", selectedBrief)}
                    variant="primary"
                    size="lg"
                    icon={<ArrowRightIcon className="h-4 w-4" />}
                    className="sm:flex-1"
                  >
                    Email brief
                  </Button>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:gap-10">
                  <a
                    href={getWhatsappLink(selectedWhatsappOpener)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-rule t-tech-sm inline-flex items-center gap-2.5 text-black/60 transition-colors hover:text-[#171614]"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    {siteConfig.whatsappDisplay}
                  </a>
                  <a
                    href={getMailtoLink("Farefold project enquiry", selectedBrief)}
                    className="link-rule t-tech-sm inline-flex items-center gap-2.5 text-black/60 transition-colors hover:text-[#171614]"
                  >
                    <MailIcon className="h-4 w-4 shrink-0" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
