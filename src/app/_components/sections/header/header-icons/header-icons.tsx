import React from 'react'
import {
    IconAccount,
    IconCart,
    IconCompare,
    IconWishlist,
} from '@/app/_components/ui/icons/icons'
import Link from 'next/link'


export const HeaderIcons = () => {
    return (
        <div className="header-icons-wrapper">
            <div className="header-icons">
                <Link href="/user-panel" className="header-icons-link">
                    <IconAccount className="" />
                    <span className="header-icons-text">Account</span>
                </Link>
            </div>
            <div className="header-icons">
                <Link href="/shop-wishlist" className="header-icons-link">
                    <div className="relative">
                        <span className={`header-icons-link__badge`}>0</span>
                        <IconWishlist className="" />
                    </div>
                    <span className="header-icons-text">Wishlist</span>
                </Link>
            </div>
            <div className="header-icons">
                <Link href="/shop-cart" className="header-icons-link">
                    <div className="relative">
                        <span className={`header-icons-link__badge`}>0</span>
                        <IconCart className="" />
                    </div>
                    <span className="header-icons-text"> Cart</span>
                </Link>
            </div>
            <div className="header-icons">
                <Link href="/shop-compare" className="header-icons-link">
                    <IconCompare className="" />
                    <span className="header-icons-text">Compare</span>
                </Link>
            </div>
        </div>
    )
}
