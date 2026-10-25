import Image from 'next/image'
import React from 'react'

import { ISpecialOffersBannerItem } from '@/app/_components/sections/special-offers-banner/special-offers-banner-item/special-offers-banner-item.types';
import { Button } from '@/app/_components/ui/button';


const SpecialOffersBannerItem: React.FC<ISpecialOffersBannerItem> = (props) => {
    const {title,subtitle,has_percent,percent,description,button_title,img}=props;
    return (
        <div
            className={`relative flex min-h-[350px] w-full justify-between gap-3 rounded-lg bg-other-3 px-10 py-12 sm:w-[480px] lg:p-4 [@media(min-width:999px)]:w-full`}
        >
            <div className="absolute bottom-0 right-0 mt-auto self-end pr-4">
                <Image
                    width={300}
                    height={300}
                    src={`/images/items/${img}`}
                    alt=""
                />
            </div>
            <div className="absolute left-0 top-0 flex flex-col gap-2 px-10 py-12">
                <h4 className="text-[29px] font-bold leading-[41px] text-shop-gray-1000 lg:text-[48px]">
                    {title}
                </h4>
                <div className="mb-4 flex flex-col items-start gap-2">
                    {has_percent && (
                        <span className="text-2xl font-bold leading-[41px] text-shop-gray-900 lg:text-[32px]">
                            {percent} % OFF
                        </span>
                    )}

                    <span className="text-2xl font-bold leading-[41px] text-shop-gray-500 lg:text-[32px]">
                        {subtitle}
                    </span>
                    <p className="text-xl font-bold leading-[21px] text-shop-gray-500 lg:text-[24px]">
                        {description}
                    </p>
                </div>
                <Button className="w-fit!" variant="warning">
                    {button_title}
                </Button>
            </div>
        </div>
    )
}

export default SpecialOffersBannerItem
