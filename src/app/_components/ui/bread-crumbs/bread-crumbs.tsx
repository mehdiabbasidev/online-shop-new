import React from 'react'
import { BreadCrumbItem, BreadCrumbsProps } from './bread-crumbs.types'
import Link from 'next/link'
const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ items }) => {
    return (
        <div className="breadcrumbs-wrapper">
            <div className="containerD">
                <ul className="breadcrumb-list">
                        {items.map((item, index) => (
                            <li key={`${index}-bread-crumb`} className="breadcrumb-item">
                                <Link href={item.url} >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                   
                </ul>
            </div>
        </div>
    )
}

export default BreadCrumbs
