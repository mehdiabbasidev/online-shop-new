"use client";

import { useUrlHelpers } from "../../../../../hooks/useUrlHelpers";
import { CheckUrl } from "../ui/check-url";


export function FilterAvailability() {
  const { searchParams, setBool } = useUrlHelpers();
  const inStock = searchParams.get("inStock") === "1";
  const fast = searchParams.get("fast") === "1";
  const today = searchParams.get("today") === "1";
  const discount = searchParams.get("discount") === "1";
  const official = searchParams.get("official") === "1";

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-foreground">Availability & Shipping</h4>
      <div className="flex flex-col gap-2">
        <CheckUrl label="In stock" checked={inStock} onChange={v => setBool("inStock", v)} />
        <CheckUrl label="Fast shipping" checked={fast} onChange={v => setBool("fast", v)} />
        <CheckUrl label="Today delivery" checked={today} onChange={v => setBool("today", v)} />
        <CheckUrl label="Discounted" checked={discount} onChange={v => setBool("discount", v)} />
        <CheckUrl label="Official seller" checked={official} onChange={v => setBool("official", v)} />
      </div>
    </div>
  );
}