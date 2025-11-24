"use client";

import { ProductListData } from "@/data/products.data";
import { useProductQueryParams } from "@/hooks/useProductQueryParams";
import { Grid3X3, List } from "lucide-react";
import { useState } from "react";
import FilterSelect from "../../ui/filter-select";
import FilterModal from "./filter-modal/filter-modal";
import { ToolbarProps } from "./filter-toolbar.types";
import ResultInfo from "./ui/result-info";

export default function FilterToolbar({ view, setView }: ToolbarProps) {
  const [open, setOpen] = useState(false);
  
  const {total, startIndex, endIndex } = useProductQueryParams(ProductListData);

  return (
    <>
      <div className="w-full mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4 6h10m-6 0v12m8 0h4M6 18h14M10 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                />
              </svg>
              All Filters
            </button>

            <div className="flex items-center gap-4 text-sm text-slate-600">
              <ResultInfo total={total} startIndex={startIndex} endIndex={endIndex} />
              <span className="hidden h-5 w-px bg-slate-200 md:inline-block" />

              <FilterSelect
                label="Sort by"
                paramName="SortBy"
                options={["Latest products", "Oldest products", "High price", "Cheap price"]}
                defaultValue="Latest products"
                preferUrl={true}
                syncOnMount={false}
              />
              <span className="hidden h-5 w-px bg-slate-200 md:inline-block" />

              <FilterSelect
                label="Show"
                paramName="perPage"
                options={[5, 10, 20, 50,100,300]}
                suffix="items"
                defaultValue={5}
                preferUrl={false}
                syncOnMount={true}
              />

              <div className="ml-1 flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Grid view"
                  aria-pressed={view === "grid"}
                  onClick={() => setView("grid")}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-md border ${view === "grid"
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:bg-muted/60"
                    }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                
                <button
                  type="button"
                  aria-label="List view"
                  aria-pressed={view === "list"}
                  onClick={() => setView("list")}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-md border ${view === "list"
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:bg-muted/60"
                    }`}
                >
                  <List className="h-4 w-4" />
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <FilterModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
