import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SmallTag from '@/app/_components/ui/small-tag/small-tag'
import { Rate } from '@/app/_components/ui/rate'
import { IconCompare, IconWishlist } from '@/app/_components/ui/icons/icons'
import { IProductGridCard } from './product-grid-card.types'


const ProductGridCard: React.FC<IProductGridCard> = ({
    title,
    img,
    price,
    rate,
    ratersNumber,
    tag_type,
    discountPercent,
    hasDiscount,
    slug
}) => {
    return (
        <div className="product-card-wrapper group relative h-[420px]">
            <div className="card-tools absolute right-6 hidden flex-col gap-2 group-hover:flex">
                <a className="" href="shop-wishlist.html">
                    <IconWishlist />
                </a>
                <a className="" href="shop-compare.html">
                    <IconCompare />
                </a>
            </div>
            <div className="product-card-image-box">
                {tag_type ? (
                    tag_type && hasDiscount && discountPercent > 0 ? (
                        <SmallTag tag_type={tag_type}>{discountPercent}%</SmallTag>
                    ) : <SmallTag tag_type="success">new</SmallTag>
                ) : null}
                <div className="product-image-wrapper">
                    <Image
                        width={200}
                        height={200}
                        src={`/images/products/${img}`}
                        alt={title}
                        className="h-[200px] w-[200px] object-contain  p-1 bg-gray-50"
                    />
                </div>
            </div>
            <div className="card-content">
                <Link
                    className="product-card-description"
                    href={`/product-details`}
                >
                    {title}
                </Link>

                <div className="product-card-rate-wrapper">
                    <Rate rate={rate} ratersNumber={ratersNumber} />

                </div>
                <div className="product-card-price-info group-hover:hidden">
                    <span className="text-lg font-bold">${((1 - discountPercent / 100) * price).toFixed(2)}</span> &nbsp;
                    <del className="text-shop-gray-500">${price}</del>
                </div>
                <div
                    className={`product-card-buy-button hidden h-[60px] items-center justify-center rounded-md border border-shop-gray-400 px-4 text-center hover:bg-primary-950 hover:text-white group-hover:flex`}
                >
                    <a className="" href={`/products/${slug}`} >
                        Add To Cart
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductGridCard
