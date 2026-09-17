import { WhatsAppIcon, MailIcon, FoldMark } from "@/components/icons";
import {
  siteConfig,
  sheets,
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
    <footer className="substrate border-t border-line bg-paper-2">
      <div className="mx-auto w-full max-w-[112rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <a href="#top" className="group inline-flex items-center gap-3">
              <FoldMark className="h-7 w-7 text-ink transition-colors duration-300 group-hover:text-crease" />
              <span className="t-display-tight text-lg text-ink">Farefold</span>
            </a>
            <p className="mt-5 max-w-[38ch] text-[0.95rem] leading-7 text-ink-soft">
              {siteConfig.description}
            </p>
            <p className="t-tech-sm mt-6 text-ink-mute">
              Issued as nine sheets · Rev A
            </p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="t-tech-sm text-ink-mute">Contents</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {sheets.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="link-rule inline-flex items-baseline gap-3 text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
                  >
                    <span className="t-tech-sm text-ink-mute">{s.no}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="t-tech-sm text-ink-mute">Scope</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {services.map((s) => (
                <li key={s} className="text-[0.95rem] text-ink-soft">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="t-tech-sm text-ink-mute">Issued by</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={getWhatsappLink(whatsappOpener)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={getMailtoLink("Packaging enquiry")}
                  className="flex items-center gap-2.5 text-[0.95rem] break-all text-ink-soft transition-colors hover:text-ink"
                >
                  <MailIcon className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[112rem] flex-col gap-2 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p className="t-tech-sm text-ink-mute">
            &copy; {year} {siteConfig.legalName}
          </p>
          <p className="t-tech-sm text-ink-mute">
            Packaging design · sourcing · print · supply
          </p>
        </div>
      </div>
    </footer>
  );
}
