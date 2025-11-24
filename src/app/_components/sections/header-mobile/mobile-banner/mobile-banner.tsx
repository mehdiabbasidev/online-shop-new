import Link from 'next/link'
import React from 'react'

const MobileBanner = () => {
    return (
        <div className="mobile-banner mt-5 bg-blue-50">
            <div className="block-iphone flex h-64 w-full flex-col gap-2 px-5 py-7 text-start">
                <span className="text-sm text-shop-gray-900">
                    Starting from $899
                </span>
                <h3 className="text-xl font-semibold text-shop-gray-900">
                    iPhone 12 Pro 128Gb
                </h3>
                <p className="color-brand-3 mb-10 text-md text-shop-gray-900">
                    Special Sale
                </p>
                <Link
                    className="text-xxs font-semibold uppercase text-blue-500"
                    href="shop-grid.html"
                >
                    learn more
                </Link>
            </div>
        </div>
    )
}

export default MobileBanner
