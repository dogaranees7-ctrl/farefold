import Link from "next/link";

export function SiteShell({children}:{children:React.ReactNode}) {
  return <div className="site">
    <header className="nav">
      <Link className="logo" href="/">farefold<span>®</span></Link>
      <nav>
        <Link href="/businesses">Businesses</Link><Link href="/branding">Branding</Link><Link href="/products">Products</Link>
        <Link href="/packaging">Packaging</Link><Link href="/custom">Custom</Link><Link href="/guidelines">Guidelines</Link>
      </nav>
      <Link className="navCta" href="/contact">Start a project <b>↗</b></Link>
    </header>
    {children}
    <footer>
      <div className="footerTop"><Link className="logo" href="/">farefold<span>®</span></Link><p>Restaurant brands, packaging & launch systems.<br/>Pakistan first.</p><Link className="footerCta" href="/contact">Tell us what you're building →</Link></div>
      <div className="footerBottom"><span>© 2026 Farefold</span><span>Branding · Packaging · Products · Custom</span><span>Made for restaurants</span></div>
    </footer>
  </div>
}
