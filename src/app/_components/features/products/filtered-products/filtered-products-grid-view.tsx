"use client";
import { useProductQueryParams } from "@/hooks/useProductQueryParams";
import React from "react";
import ProductGridCard from "../product-card/product-grid-card/product-grid-card";
import { FilteredProductsProps } from "./filtered-products.types";

const FilteredProductsGridView: React.FC<FilteredProductsProps> = ({ products }) => {
  const { itemsPage } = useProductQueryParams(products);
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      {itemsPage.map((item) => (
         <ProductGridCard key={item.product_id} {...item} />
      ))}
    </div>
  );
};

export default FilteredProductsGridView;

