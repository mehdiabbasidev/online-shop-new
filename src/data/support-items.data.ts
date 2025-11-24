import { ISupportItem } from "@/app/_components/support/support-item/support-item.types";

export const supportItemsData:ISupportItem[]= [
    {
        id:"1",
        srcImage: '/images/support/delivery.svg',
        title: 'Free Delivery',
        label: 'From all orders over $10',
    },
    {
        id:"2",
        srcImage: '/images/support/support.svg',
        title: 'Support 24/7',
        label: 'Shop with an expert',
    },
    {
        id:"3",
        srcImage: '/images/support/voucher.svg',
        title: 'Gift voucher',
        label: 'Refer a friend',
    },
    {
        id:"4",
        srcImage: '/images/support/return.svg',
        title: 'Return & Refund',
        label: 'Free return over $200',
    },
    {
        id:"5",
        srcImage: '/images/support/secure.svg',
        title: 'Secure payment',
        label: '100% Protected',
    },
]