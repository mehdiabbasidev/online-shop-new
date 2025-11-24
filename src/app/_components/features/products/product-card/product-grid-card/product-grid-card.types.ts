import { TagStatus } from "@/app/_components/types/tag-status.type"



export interface IProductGridCard {
  product_id: string
  title: string
  img?: string
  price: number
  rate?: number
  ratersNumber?: number
  tag_type?: TagStatus
  slug?: string
  brand: "apple" | "samsung" | "xiaomi" | "huawei" | "asus" | "lenovo" | "hp";
  group: "mobile" | "laptop" | "accessory" | "tablet" | "smartwatch" | "audio" | "camera";
  tags: string[];              
  inStock: boolean;            
  fastShipping: boolean;       
  todayDelivery: boolean;      
  hasDiscount: boolean;        
  discountPercent: number;     
  officialSeller: boolean;
  summary_description?: string;     
  description?: string;     
}



