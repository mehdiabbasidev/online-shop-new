import Image from 'next/image'
import Link from 'next/link'

import { navItems } from '@/data/navItem.data'

// import Avatar from '../avatar/avatar'
import { MenuItem } from './menu-item/menu-item'
import ProfileInfo from './profile-info/profile-info'

import { IconClose } from '../../ui/icons/icons'
import MobileBaner from './mobile-banner/mobile-banner'
import HeaderFooter from './header-footer/header-footer'

export const HeaderMobile: React.FC = () => {
    return (
        <>
            <div className="absolute right-0 top-0 z-999 w-[360px] bg-neutral-50 p-8">
                {/* logo && close btn */}
                <div className="flex justify-between border-b border-shop-gray-border pb-4">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="relative inline-block w-32 md:w-40"
                    >
                        <Image
                            src="/images/logo/logo.svg"
                            alt="logo"
                            width={111}
                            height={37}
                            className="object-cover"
                        />
                    </Link>
                    <div>
                        <IconClose strokeWidth={3} />
                    </div>
                </div>
                {/* menu item */}
                <MenuItem />

                {/* profile info */}
                <ProfileInfo />
                {/* mobile baner */}
                <MobileBaner />

                {/* footer */}
                <HeaderFooter />
            </div>
        </>
    )
}
