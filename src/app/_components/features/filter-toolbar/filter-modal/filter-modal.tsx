"use client";

import { Filter, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useUrlHelpers } from "../../../../../hooks/useUrlHelpers";
import { FilterAvailability } from "./filter-availability";
import { FilterBrands } from "./filter-brands";
import { FilterGroups } from "./filter-groups";
import { FilterPrice } from "./filter-price";
import { FilterRating } from "./filter-rating";
import { FilterTags } from "./filter-tags";
import SelectedFilterModal from "./selected-filter-modal";


type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FilterModal({ open, onClose }: Props) {
  
  const { searchParams, clearKeys, toggleCSV, setSingle, setBool } = useUrlHelpers();

  useEffect(() => {
    if (!open) 
      return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const clearAll = useCallback(() => {
    clearKeys([
      "brands", "groups", "tags", "inStock", "fast", "today", "discount", "official",
      "rate", "minPrice", "maxPrice"
    ]);
  }, [clearKeys]);

  if (!open) 
    return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 overflow-auto bg-black/50">
      <div className="mt-10 w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg">
        <header className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Advanced Filters</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={clearAll}
              className="px-3 py-1.5 text-sm rounded-md border hover:bg-muted/30 text-muted-foreground"
              type="button"
            >
              Clear all
            </button>
            <button
              aria-label="Close filters"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted/30"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="px-6 py-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FilterBrands />
            <FilterPrice />
            <FilterAvailability />
            <FilterRating />
            <FilterGroups />
            <FilterTags />
            <SelectedFilterModal
              searchParams={searchParams}
              toggleCSV={toggleCSV}
              setSingle={setSingle}
              setBool={setBool}
            />
          </div>
        </div>
      </div>
    </div>
  );
}