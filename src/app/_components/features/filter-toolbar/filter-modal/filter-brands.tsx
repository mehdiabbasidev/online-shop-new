"use client";

import { useMemo } from "react";
import { useUrlHelpers } from "../../../../../hooks/useUrlHelpers";
import { CheckUrl } from "../ui/check-url";


const BRANDS = ["apple", "samsung", "xiaomi", "huawei", "asus", "lenovo", "hp"];

export function FilterBrands() {
  const { searchParams, toggleCSV } = useUrlHelpers();
  
  const brands = useMemo(() => {
    const brandsValue = searchParams.get("brands");
    return new Set((brandsValue ?? "").split(",").map(s => s.trim()).filter(Boolean));
  }, [searchParams]);

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-foreground">Brands</h4>
      <div className="flex flex-col gap-2">
        {BRANDS.map(brand => (
          <CheckUrl
            key={brand}
            label={brand[0].toUpperCase() + brand.slice(1)}
            checked={brands.has(brand)}
            onChange={() => toggleCSV("brands", brand)}
          />
        ))}
      </div>
    </div>
  );
}