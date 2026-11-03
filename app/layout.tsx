import type {Metadata} from "next";
import {siteConfig} from "@/lib/site-config";
import "./globals.css";

const title=`${siteConfig.name} — ${siteConfig.tagline}`;
export const metadata:Metadata={
 ...(siteConfig.url?{metadataBase:new URL(siteConfig.url),alternates:{canonical:siteConfig.url}}:{}),
 title:{default:title,template:`%s | ${siteConfig.name}`},
 description:siteConfig.description,
 keywords:["restaurant branding","restaurant packaging","custom food packaging","restaurant launch","Pakistan packaging","food business branding"],
 openGraph:{type:"website",...(siteConfig.url?{url:siteConfig.url}:{}),siteName:siteConfig.name,title,description:siteConfig.description,locale:"en_PK"},
 twitter:{card:"summary",title,description:siteConfig.description},
 robots:{index:true,follow:true}
};
export default function RootLayout({children}:LayoutProps<"/">){return <html lang="en" className="h-full"><body className="min-h-full"><a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] bg-[var(--ink)] text-[var(--paper)] px-5 py-3">Skip to content</a>{children}</body></html>}
