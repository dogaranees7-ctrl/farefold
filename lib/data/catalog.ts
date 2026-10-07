import type {ProductAttributes} from "./product";

/**
 * Verified Farefold catalogue records.
 *
 * Keep this list empty until real products are supplied and checked.
 * The website already has the category shelves; real catalogue records
 * can be added here with approved photos, specifications and commercial
 * details without changing the page architecture.
 */
export const catalogProducts:ProductAttributes[]=[];

export function productsForFamily(familySlug:string){
 return catalogProducts.filter(product=>product.productFamilySlug===familySlug);
}
