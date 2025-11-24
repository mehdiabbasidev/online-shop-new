"use client";
import { useProductQueryParams } from "@/hooks/useProductQueryParams";
import React from "react";
import ProductListCard from "../product-card/product-list-card/product-list-card";
import { FilteredProductsProps } from "./filtered-products.types";

const FilteredProductsListView: React.FC<FilteredProductsProps> = ({ products }) => {
  const { itemsPage } = useProductQueryParams(products);
  return (
    <div className="flex flex-col gap-4">
      {itemsPage.map((item) => (
        <ProductListCard key={item.product_id} {...item} />
      ))}
    </div>
  );
};

export default FilteredProductsListView;

