import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import {
  getWhatsappLink,
  getMailtoLink,
  quoteBrief,
  whatsappOpener,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Custom Packaging",
  description:
    "How Farefold's custom packaging process works, from first brief to production supply — explore, configure, consult, quote, approve, produce, deliver.",
  alternates: { canonical: "/custom-packaging" },
};

type Stage = { no: string; label: string; body: string };

const stages: Stage[] = [
  { no: "01", label: "Find the problem", body: "Start with the restaurant, the food, the customer and the moment that needs to work better." },
  { no: "02", label: "Shape the idea", body: "We develop the identity, packaging direction and practical touchpoints around the experience you want." },
  { no: "03", label: "Design the system", body: "Brand, boxes, bags, cups, printed pieces and other touchpoints are designed to feel like one restaurant." },
  { no: "04", label: "Make it real", body: "We prepare the packaging and print direction for the formats, quantities and production route your business needs." },
  { no: "05", label: "Launch or refresh", body: "Take the system into a new opening, a rebrand, a new menu, a delivery push or a better everyday customer experience." },
];

export default function CustomPackagingPage() {
  return (
    <div className="bg-[#ffe0a8] text-[#171614]"><div className="mx-auto w-full max-w-[120rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
        <PageHead
          tone="page"
          eyebrow="Custom Packaging"
          headline={
            <>
              Ideas built
              <br />
              <span className="text-[#007a78]">around your restaurant.</span>
            </>
          }
          intro={
            <p>
              Bring us the problem: a new restaurant that needs a complete identity, an existing brand that feels dated, packaging that is not working, or a customer experience that needs a better idea. We turn the brief into a practical system of branding, packaging, print and production.
            </p>
          }
          meta={[["Stages", String(stages.length)]]}
        />

        <ol className="mt-14 grid grid-cols-1 gap-px border border-black/15 bg-black/15 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <li key={stage.no} className="bg-[#ffe0a8]">
              <span className="t-tech-sm text-[#007a78]">{stage.no}</span>
              <h2 className="t-display-tight text-lg text-[#171614]">{stage.label}</h2>
              <p className="text-[0.9rem] leading-6 text-[#171614]-soft">{stage.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 max-w-[64ch] border-t border-black/15 pt-8 sm:mt-20">
          <p className="t-tech-sm text-[#171614]-mute">Starting points</p>
          <p className="mt-3 text-[0.95rem] leading-6 text-[#171614]-soft">
            Not sure where to start? Browse{" "}
            <Link href="/products/branding-custom" className="link-rule text-[#171614]">
              printed &amp; branded formats
            </Link>{" "}
            for a sense of what&apos;s possible, or{" "}
            <Link href="/materials" className="link-rule text-[#171614]">
              Materials
            </Link>{" "}
            for what the structure can be made from.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            href={getWhatsappLink(whatsappOpener)}
            variant="whatsapp"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            WhatsApp about custom packaging
          </Button>
          <Button
            href={getMailtoLink("Custom packaging brief", quoteBrief)}
            variant="primary"
            size="lg"
            icon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Email a brief
          </Button>
        </div>
      </div>
    </div>
  );
}
