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
            <BreadCrumbs titles={['Home', 'Shop', 'Compare']} />
            <BreadCrumbs titles={['products', 'mobile', 'iphone16']} />
        </>
    ),
}
