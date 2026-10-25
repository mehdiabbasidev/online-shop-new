import React from 'react'
import { Button } from '../button'
import { TagProps } from './tag.types'

const Tag: React.FC<TagProps> = ({ tag_title }) => {
    return (
        <Button
            variant="secondary"
            className="my-2 w-fit gap-2 bg-shop-gray-border! px-2! py-4!"
        >
            <span className="text-3xl leading-4 text-teal-600">&#x2022;</span>
            <span className="text-lg font-normal leading-[18px] text-shop-gray-900">
                {tag_title}
            </span>
        </Button>
    )
}

export default Tag
