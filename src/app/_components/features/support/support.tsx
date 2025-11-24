import React from 'react'
import SupportItem from './support-item/support-item'
import { supportItemsData } from '@/data/support-items.data'

const Support = () => {
    return (
        <div className="w-full">
            <ul className="flex flex-wrap items-center justify-center gap-4">
            {supportItemsData.map((item, index) => (
                <SupportItem 
                     key={index}
                     id={item.id}
                     title={item.title}
                     srcImage={item.srcImage}
                     label ={item.label}
                />
            ))}
            </ul>
        </div>
    )
}

export default Support
