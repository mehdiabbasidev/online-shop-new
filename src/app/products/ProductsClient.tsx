"use client";

import { ProductListData } from "@/data/products.data";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import FilterToolbar from "../_components/features/filter-toolbar/filter-toolbar";
import FilteredProductsGridView from "../_components/features/products/filtered-products/filtered-products-grid-view";
import FilteredProductsListView from "../_components/features/products/filtered-products/filtered-products-list-view";
import Pagination from "../_components/ui/pagination/pagination";

export default function ProductsClient() {
  const sp = useSearchParams(); // اگر فعلاً استفاده نمی‌کنی می‌تونی حذفش کنی
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div>
      <section>
        <FilterToolbar view={view} setView={setView} />
      </section>

      <section className="containerD my-4 p-2">
        {view === "grid" ? (
          <FilteredProductsGridView products={ProductListData} />
        ) : (
          <FilteredProductsListView products={ProductListData} />
        )}
      </section>

      <section className="containerD my-6 p-2">
        <Pagination />
      </section>
    </div>
  );
}
