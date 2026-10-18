"use client";

import { ProductListData } from "@/data/products.data";
import { useState } from "react";
import FilterToolbar from "../_components/features/filter-toolbar/filter-toolbar";
import FilteredProductsGridView from "../_components/features/products/filtered-products/filtered-products-grid-view";
import FilteredProductsListView from "../_components/features/products/filtered-products/filtered-products-list-view";
import Pagination from "../_components/ui/pagination/pagination";
import { useProductQueryParams } from "@/hooks/useProductQueryParams";


export default function ProductsClient() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const { total, page, perPage } = useProductQueryParams(ProductListData);

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
        {/* <Pagination /> */}
        <Pagination totalItems={total} activePage={page} itemPerPage={perPage} />
      </section>
    </div>
  );
}








