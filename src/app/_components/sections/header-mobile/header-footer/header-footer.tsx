import Link from 'next/link'
import React from 'react'

const HeaderFooter = () => {
    return (
        <>
            <div className="mt-30 py-4 text-xs text-shop-gray-900">
                Copyright 2022 © Ecom - Marketplace Template.
                <br />
                Designed by
                <Link
                    href="http://alithemes.com"
                    className="text-blue-300"
                    target="_blank"
                >
                    &nbsp; AliThemes
                </Link>
            </div>
        </>
    )
}

export default HeaderFooter
