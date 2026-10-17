import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export function generateMetadata(): Metadata {
  const title = "محصولات";
  const image = "http://localhost:3000/_next/image?url=%2Fimages%2Fproducts%2FHuawei-Watch-GT-4-46mm.jpg&w=640&q=75";

  const og = `/api/og?title=${encodeURIComponent(title)}&image=${encodeURIComponent(
    image
  )}`;

  return {
    title,
    openGraph: {
      title,
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [og],
    },
  };
}

export default function ProductsPage() {
  return <ProductsClient />;
}
