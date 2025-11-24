import { productsGroups } from '@/data/product-groups.data'
import React from 'react'
import { ProductGroup } from './product-group'

const ProductGroups = () => {
    return (
        <div className="mx-auto flex justify-between">
            {productsGroups.map((group, i) => {
                return (
                   <ProductGroup key={group.id} {...group} />
                )
            })}
        </div>
    )
}

export default ProductGroups
