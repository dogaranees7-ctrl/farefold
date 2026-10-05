import { SheetHead } from "@/components/spec/Sheet";
import { Reveal } from "@/components/Reveal";
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

function PunchHole({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-3.5 w-3.5 rounded-full border border-ink/25 bg-kraft-pale ${className}`}
    />
  );
}

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
      className="substrate scroll-mt-24 bg-kraft-pale py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[112rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SheetHead
              sheet="09"
              discipline="Work order"
              tone="kraft"
              headline={
                <>
                  Tell us what
                  <br />
                  you serve.
                </>
              }
              intro={
                <p>
                  That is genuinely the first question, and most of the answer
                  follows from it. Send the menu, the volumes and where it has
                  to get to, and you&apos;ll get back a structure, a material
                  and a straight answer on what it costs to make.
                </p>
              }
            />

            <Reveal delay={200}>
              <p className="t-editorial mt-12 max-w-[20ch] text-[1.8rem] leading-[1.15] text-ink sm:text-[2.3rem]">
                Good packaging doesn&apos;t just hold food. It solves something.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <div className="relative border border-ink/25 bg-paper">
              <PunchHole className="-top-[7px] left-[12%]" />
              <PunchHole className="-top-[7px] left-1/2 -translate-x-1/2" />
              <PunchHole className="-top-[7px] right-[12%]" />

              <div className="flex items-baseline justify-between gap-4 px-6 pt-8 sm:px-10">
                <p className="t-tech-sm text-kraft-deep">Farefold · work order</p>
                <p className="t-tech-sm text-crease">FF / 09</p>
              </div>

              <div className="px-6 sm:px-10">
                <div className="rule-perf mt-5 text-ink/30" />
              </div>

              <div className="px-6 py-8 sm:px-10">
                <p className="t-tech text-ink-mute">What we&apos;ll ask for</p>

                {product ? (
                  <div className="mt-5 border border-kraft-deep/25 bg-kraft-pale px-4 py-4">
                    <p className="t-tech-sm text-kraft-deep">Selected product direction</p>
                    <p className="mt-1 text-base font-medium text-ink">{product.name}</p>
                    <p className="mt-1 text-sm leading-6 text-ink-soft">{product.description}</p>
                  </div>
                ) : null}

                <ol className="mt-5">
                  {fields.map((f, i) => (
                    <li
                      key={f}
                      className="flex items-baseline gap-4 border-b border-line py-3 last:border-0"
                    >
                      <span className="t-tech-sm shrink-0 text-kraft-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.95rem] leading-6 text-ink">{f}</span>
                    </li>
                  ))}
                </ol>

                <p className="mt-6 text-[0.9rem] leading-6 text-ink-soft">
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
                    href={getMailtoLink("Packaging brief — quote request", selectedBrief)}
                    variant="primary"
                    size="lg"
                    icon={<ArrowRightIcon className="h-4 w-4" />}
                    className="sm:flex-1"
                  >
                    Email brief
                  </Button>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:gap-10">
                  <a
                    href={getWhatsappLink(selectedWhatsappOpener)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-rule t-tech-sm inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-ink"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    {siteConfig.whatsappDisplay}
                  </a>
                  <a
                    href={getMailtoLink("Packaging enquiry")}
                    className="link-rule t-tech-sm inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-ink"
                  >
                    <MailIcon className="h-4 w-4 shrink-0" />
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
