import { ProductListData } from "@/data/products.data"
import ProductGridCard from "../product-card/product-grid-card/product-grid-card"

const ProductList = () => {
    return (
        <>
            <div className='my-2'>
                <h3 className="mb-2 text-center text-[32px] font-bold leading-10 text-shop-gray-900">
                    Featured Products
                </h3>
                <p className="text-center text-md font-normal text-shop-gray-500">
                    The best products from Spring
                </p>
            </div>

            <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                {ProductListData.map((item, i) => (
                    <ProductGridCard
                        key={item.product_id}
                        product_id={item.product_id}
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        discount={item.discount}
                        rate={item.rate}
                        ratersNumber={item.ratersNumber}
                        tag_type={item.tag_type}
                        slug={item.slug}
                    />
                ))}
            </div>
        </>
    )
}

export default ProductList