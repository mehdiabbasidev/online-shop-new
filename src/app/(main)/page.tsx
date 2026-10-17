import { AttributeSection } from "../_components/features/attribute-section";
import BigBanner from "../_components/sections/big-banner/big-banner";
import LatestBlogs from "../_components/features/blogs/latest-blogs/latest-blogs";
import ProductGroups from "../_components/features/products/product-groups/product-groups";
import ProductList from "../_components/features/products/product-list/product-list";
import SmallBanner from "../_components/sections/small-banner/small-banner";
import SpecialOffersBanner from "../_components/sections/special-offers-banner/special-offers-banner";
import Support from "../_components/features/support/support";

import type { Metadata } from "next";


export function generateMetadata(): Metadata {
  const title = "فروشگاه درسمن";
  const image =
    "https://darsman.com/images/hero_sectionHome/ImageMan-1060X738.png"; 

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

export default function Home() {
    return (
        <section className="container-fluid mx-auto flex flex-col items-center space-y-[50px] py-16">
            {/* ----------------------- Product Groups Section--------------------------- */}
            <section className="containerD">
                <ProductGroups/>
            </section>

            {/* ----------------------- Attribution Section--------------------------- */}
            <section className="containerD">
               <AttributeSection/>
            </section>

            {/* ----------------------- Products Section--------------------------- */}
            <section className="containerD">
                <ProductList/>
            </section>

            {/* ----------------------- Special Offers Banner Section --------------------------- */}
            <section className="containerD">
                <SpecialOffersBanner/>
            </section>

            {/* ----------------------- Small Banner Section--------------------------- */}
            <section className="containerD">
                <SmallBanner/>
            </section>

            {/* -----------------------  Latest Blogs Section --------------------------- */}
            <section className="containerD">
               <LatestBlogs/>
            </section>

            {/* -----------------------  Support Section --------------------------- */}
            <section className="containerD">
                <Support/> 
            </section>

            {/* ----------------------- Big Banner Section --------------------------- */}
            <section className="containerD">
                <BigBanner/>
            </section>
        </section>
    )
}
