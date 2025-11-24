import { supportItemsData } from '@/data/support-items.data'
import Image from 'next/image'
import React from 'react'
import { ISupportItem } from './support-item.types'


const SupportItem: React.FC<ISupportItem> = (props) => {
    const {title,srcImage,label}=props;
    return (
        <>
            {
                <li>
                    <div className="flex w-[251px] items-center justify-center gap-4 rounded-lg border border-[#D5DFE4] p-[15px]">
                        <div className="icon-left">
                            <Image
                                width={40}
                                height={40}
                                src={srcImage}
                                alt={title}
                            />
                        </div>
                        <div className="info-right">
                            <h5 className="text-md font-bold leading-[24px] text-[#425a8b]">
                                {title}aaaaaaaaaaaaaaaaaa
                            </h5>
                            <p className="text-sm font-[400] leading-[20px] text-[#8C9EC5]">
                                {label}
                            </p>
                        </div>
                    </div>
                </li>
            }
        </>
    )
}

export default SupportItem
