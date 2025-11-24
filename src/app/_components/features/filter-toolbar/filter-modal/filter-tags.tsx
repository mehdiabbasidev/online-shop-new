"use client";

import { useMemo } from "react";
import { useUrlHelpers } from "../../../../../hooks/useUrlHelpers";

const TAGS = [
  "Electronics", "Video", "Cellphone", "Indoor", "Games",
  "VGA Card", "USB", "Lightning", "Camera", "Bestseller", "New", "Discount"
];

export function FilterTags() {
  
  const { searchParams, toggleCSV } = useUrlHelpers();

  const tags = useMemo(() => {
    const v = searchParams.get("tags");
    return new Set((v ?? "").split(",").map(s => s.trim()).filter(Boolean));
  }, [searchParams]);

  return (
    <div className="lg:col-span-2">
      <h4 className="mb-3 text-sm font-medium text-foreground">Product tags</h4>
      <div className="flex flex-wrap gap-2">
        {TAGS.map(t => {
          const active = tags.has(t);
          return (
            <button
              key={t}
              type="button"
              onClick={() => toggleCSV("tags", t)}
              className={`rounded-md border px-3 py-1 text-sm ${active ? "bg-[#B2C2E1] text-black" : "text-[#425A8B] hover:bg-[#B2C2E1] hover:text-black"}`}
              aria-pressed={active}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}