import { Meta, StoryObj } from '@storybook/react'
import ProductGridCard from './product-grid-card'

const meta: Meta<typeof ProductGridCard> = {
    component: ProductGridCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProductGridCard>

export const Variants: Story = {
    render: () => (
        <>
            <ProductGridCard />
        </>
    ),
}
