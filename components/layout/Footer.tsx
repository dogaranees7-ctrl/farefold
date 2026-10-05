import Link from "next/link";
import { WhatsAppIcon, MailIcon, FoldMark } from "@/components/icons";
import {
  siteConfig,
  siteMap,
  services,
  getWhatsappLink,
  getMailtoLink,
  whatsappOpener,
} from "@/lib/site-config";

// The colophon. A drawing set ends with a contents list and the details of
// who issued it, so this one does too.

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#f6f0e6]">
      <div className="mx-auto w-full max-w-[120rem] px-5 py-16 sm:px-8 lg:px-14 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link href="/#top" className="group inline-flex items-center gap-3">
              <FoldMark className="h-7 w-7 text-[#171614] transition-colors duration-300 group-hover:text-[#7d4b35]" />
              <span className="font-semibold tracking-[-0.03em] text-lg text-[#171614]">Farefold</span>
            </Link>
            <p className="mt-5 max-w-[38ch] text-[0.95rem] leading-7 text-[#171614]-soft">
              {siteConfig.description}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] mt-6 text-[#171614]-mute">
              Restaurant branding · packaging · ideas
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#171614]-mute">Contents</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {siteMap.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-rule inline-flex items-baseline gap-3 text-[0.95rem] text-[#171614]-soft transition-colors hover:text-[#171614]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#171614]-mute">Scope</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {services.map((s) => (
                <li key={s} className="text-[0.95rem] text-[#171614]-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#171614]-mute">Issued by</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={getWhatsappLink(whatsappOpener)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[0.95rem] text-[#171614]-soft transition-colors hover:text-[#171614]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={getMailtoLink("Farefold enquiry")}
                  className="flex items-center gap-2.5 text-[0.95rem] break-all text-[#171614]-soft transition-colors hover:text-[#171614]"
                >
                  <MailIcon className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex w-full max-w-[112rem] flex-col gap-2 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#171614]-mute">
            &copy; {year} {siteConfig.legalName}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#171614]-mute">
            Branding · packaging · print · launch
          </p>
        </div>
      </div>
    </footer>
  );
}
