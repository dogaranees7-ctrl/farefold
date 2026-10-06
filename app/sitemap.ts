import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import {businessTypes} from "@/lib/data/business-types";
import {productFamilies} from "@/lib/data/product-families";

const guideSlugs=[
  "how-to-build-a-restaurant-brand",
  "choosing-restaurant-colours",
  "how-to-choose-the-right-box",
  "packaging-for-delivery",
  "new-restaurant-branding-checklist",
  "opening-a-cafe-bakery-cloud-kitchen",
  "how-to-plan-packaging-quantities",
  "how-to-make-packaging-feel-premium",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core=["/","/businesses","/branding","/products","/packaging","/custom","/guidelines","/contact"];
  const businessRoutes=businessTypes.filter(x=>x.parentSlug).map(x=>`/businesses/${x.slug}`);
  const productRoutes=productFamilies.filter(x=>x.parentSlug).map(x=>`/products/${x.slug}`);
  const guideRoutes=guideSlugs.map(slug=>`/guidelines/${slug}`);
  const routes=[...core,...businessRoutes,...productRoutes,...guideRoutes];
  return routes.map((path,index)=>({
    url:`${siteConfig.url}${path}`,
    lastModified:new Date(),
    changeFrequency:path==="/"?"monthly":"yearly",
    priority:path==="/" ? 1 : index<8 ? 0.8 : 0.6,
  }));
}
