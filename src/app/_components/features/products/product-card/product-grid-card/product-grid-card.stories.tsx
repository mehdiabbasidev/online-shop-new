import { Meta, StoryObj } from '@storybook/react'
import ProductGridCard from './product-grid-card'

const meta: Meta<typeof ProductGridCard> = {
    component: ProductGridCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProductGridCard>

// export const Variants: Story = {
//     render: () => (
//         <>
//             <ProductGridCard />
//         </>
//     ),
// }



export const Variants: Story = {
    render: () => (
        <>
            <ProductGridCard
                product_id="1"
                title="Sample Product"
                img="sample.jpg"
                price={1000}
                rate={4}
                ratersNumber={10}
                tag_type="success"
                slug="sample-product"
                brand="apple"
                group="mobile"
                tags={["New"]}
                inStock={true}
                fastShipping={true}
                todayDelivery={false}
                hasDiscount={true}
                discountPercent={10}
                officialSeller={true}
            />
        </>
    ),
}
