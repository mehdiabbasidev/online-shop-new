import { Meta, StoryObj } from '@storybook/react'
import BreadCrumbs from './bread-crumbs'

const meta: Meta<typeof BreadCrumbs> = {
    component: BreadCrumbs,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BreadCrumbs>

export const Variants: Story = {
    render: () => (
        <>

            <BreadCrumbs
                items={[
                    { label: 'Home', url: '/' },
                    { label: 'Shop', url: '/shop' },
                    { label: 'Compare', url: '/shop-compare' },
                ]}
            />
            <BreadCrumbs
                items={[
                    { label: 'products', url: '/products' },
                    { label: 'mobile', url: '/products?group=mobile' },
                    { label: 'iphone16', url: '/products/iphone16' },
                ]}
            />
            {/* <BreadCrumbs titles={['Home', 'Shop', 'Compare']} />
            <BreadCrumbs titles={['products', 'mobile', 'iphone16']} /> */}
        </>
    ),
}
