"use client";
import { PRODUCTS_PER_PAGE } from "@/configs/itemsPerPage";
import { Product } from "@/data/products.types";
import { low, parseCSV, toNum, toNumOrUndef } from "@/utils/helper";
import { useSearchParams } from "next/navigation";

// --------------------------------------------------------------------
export function useProductQueryParams(products: Product[]) {

  const searchParams = useSearchParams();

  const pageFromUrl = Math.max(1, toNum(searchParams.get("page"), 1));

  const perPageRaw = toNum(searchParams.get("perPage"), PRODUCTS_PER_PAGE);
  const perPage = perPageRaw > 0 ? perPageRaw : PRODUCTS_PER_PAGE;

  const sortBy = searchParams.get("SortBy") || "Latest products";

  const minPrice = toNumOrUndef(searchParams.get("minPrice"));
  const maxPrice = toNumOrUndef(searchParams.get("maxPrice"));

  const rateMin = toNumOrUndef(searchParams.get("rate"));

  const tagSingle = searchParams.get("tag") || null;

  const brandsSet = new Set(parseCSV(searchParams.get("brands")).map(low));

  const groupsSet = new Set(parseCSV(searchParams.get("groups")).map(low));

  const tagsSet = new Set(parseCSV(searchParams.get("tags")));

  const inStock = searchParams.get("inStock") === "1";

  const fast = searchParams.get("fast") === "1";

  const today = searchParams.get("today") === "1";

  const discount = searchParams.get("discount") === "1";

  const official = searchParams.get("official") === "1";

  let filtered = [...products];

  if (minPrice !== undefined)
    filtered = filtered.filter(p => Number(p.price) >= minPrice);
  if (maxPrice !== undefined)
    filtered = filtered.filter(p => Number(p.price) <= maxPrice);

  if (rateMin !== undefined)
    filtered = filtered.filter(p => Number(p.rate) >= rateMin);

  if (brandsSet.size) {
    filtered = filtered.filter((p: Product) => {
      const brand = p.brand?.toString().trim().toLowerCase();
      if (brand)
        return brandsSet.has(brand);
      return false;
    });
  }

  if (groupsSet.size) {
    filtered = filtered.filter((p: Product) => {
      const group = p.group?.toString().trim().toLowerCase();
      if (group)
        return groupsSet.has(group);
      return false;
    });
  }

  if (tagsSet.size) {
    const needles = new Set([...tagsSet].map(t => t.toString().trim().toLowerCase()));

    filtered = filtered.filter((p: Product) => {
      const tags = (Array.isArray(p.tags) ? p.tags : (p.tags ? [String(p.tags)] : []))
        .map(t => t.toString().trim().toLowerCase());
      const tagType = p.tag_type?.toString().trim().toLowerCase();

      return tags.some(t => needles.has(t)) || (!!tagType && needles.has(tagType));
    });
  }

  if (tagSingle) {
    filtered = filtered.filter(p => {
      const arr: string[] = Array.isArray((p as any).tags)
        ? (p as any).tags as string[]
        : (p as any).tags ? [String((p as any).tags)] : [];
      if (arr.includes(tagSingle)) return true;
      if ((p as any).tag_type === tagSingle) return true;
      return false;
    });
  }

  if (inStock) filtered = filtered.filter(p => !!(p as any).inStock);
  if (fast) filtered = filtered.filter(p => !!(p as any).fastShipping);
  if (today) filtered = filtered.filter(p => !!(p as any).todayDelivery);
  if (discount) {
    filtered = filtered.filter(p =>
      (typeof (p as any).hasDiscount === "boolean" && (p as any).hasDiscount) ||
      (typeof (p as any).discountPercent === "number" && (p as any).discountPercent > 0)
    );
  }
  if (official) filtered = filtered.filter(p => !!(p as any).officialSeller);

  switch (sortBy) {
    case "Latest products":
      filtered.sort((a: any, b: any) => Number(b.product_id) - Number(a.product_id));
      break;
    case "Oldest products":
      filtered.sort((a: any, b: any) => Number(a.product_id) - Number(b.product_id));
      break;
    case "High price":
      filtered.sort((a: any, b: any) => Number(b.price) - Number(a.price));
      break;
    case "Cheap price":
      filtered.sort((a: any, b: any) => Number(a.price) - Number(b.price));
      break;
  }

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const safePage = Math.min(Math.max(1, pageFromUrl), totalPages);
  const startIndex = (safePage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, total);

  const itemsPage = filtered.slice(startIndex, endIndex);

  return {
    page: safePage,
    perPage,
    startIndex,
    endIndex,
    total,
    totalPages,
    filteredProducts: filtered,
    itemsPage,
    sortBy,
    brandsSet,
    groupsSet,
    tagsSet,
    inStock,
    fast,
    today,
    discount,
    official,
    tag: tagSingle || undefined
  };
}
