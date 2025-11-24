import { ISpecialOffersBannerItem } from "@/app/_components/special-offers-banner/special-offers-banner-item/special-offers-banner-item.types";

export const SpecialOffersBannerData:ISpecialOffersBannerItem[] = [
    {
        title: 'Sale',
        subtitle: '',
        has_percent: true,
        percent: '70',
        description: 'Potted in home',
        button_title: 'Shop now',
        img: 'robot-r.png',
    },
    {
        title: 'Deals',
        subtitle: 'Cactus Collection',
        has_percent: false,
        description: 'Free Shipping',
        button_title: 'Shop now',
        img: 'small-banner-2.png',
    },
    {
        title: 'Hot Trend',
        subtitle: 'Summer 2022',
        has_percent: false,
        description: '',
        button_title: 'more',
        img: 'items.png',
    },
]
