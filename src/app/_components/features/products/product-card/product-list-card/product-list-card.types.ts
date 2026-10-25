import { Product } from "@/types/product.types";

export type IProductListCard = Pick<
  Product,
  "product_id" | "img" | "title" | "price" | "rate" | "summary_description"
>;
