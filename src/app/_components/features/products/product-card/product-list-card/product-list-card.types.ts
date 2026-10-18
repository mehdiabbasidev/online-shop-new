import { Product } from "@/types/product.types";

export type IProductListCard = Pick<
  Product,
  "product_id" | "img" | "title" | "price" | "rate" | "summary_description"
>;



// export interface IProductListCard {
//   product_id: string;
//   img: string;
//   title: string;
//   price: number;
//   rate?: number
//   summary_description?: string;
// };