import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProfileInfo = () => {
    return (
        <div className="flex flex-col gap-4 border-b border-shop-gray-border py-4">
            {/* user info */}
            <div className="avatar">
                <Image
                    src={'/images/other-images/default-avatar.jpg'}
                    alt=""
                    height={50}
                    width={50}
                    className="rounded-full"
                />
                <div className="text-start">
                    <h6 className="text-sm font-semibold text-shop-gray-500">
                        Hello
                        <span className="text-brand"> Steven !</span>
                    </h6>
                    <p className="text-xxs text-shop-gray-900">
                        You have 3 new messages
                    </p>
                </div>
            </div>

            {/* property */}
            <ul className="grid grid-cols-2 grid-rows-3 gap-3 text-start">
                <li>
                    <Link
                        href="user-panel.html"
                        className="text-sm text-shop-gray-400"
                    >
                        My Account
                    </Link>
                </li>
                <li>
                    <Link
                        href="user-panel.html"
                        className="text-sm text-shop-gray-400"
                    >
                        Order Tracking
                    </Link>
                </li>
                <li>
                    <Link
                        href="user-panel.html"
                        className="text-sm text-shop-gray-400"
                    >
                        My Orders
                    </Link>
                </li>
                <li>
                    <Link
                        href="user-panel.html"
                        className="text-sm text-shop-gray-400"
                    >
                        My Wishlist
                    </Link>
                </li>
                <li>
                    <Link
                        href="user-panel.html"
                        className="text-sm text-shop-gray-400"
                    >
                        Setting
                    </Link>
                </li>
                <li>
                    <Link
                        href="login.html"
                        className="text-sm text-shop-gray-400"
                    >
                        Sign out
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileInfo
