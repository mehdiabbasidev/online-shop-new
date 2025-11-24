'use client'
import React, { useState } from 'react'
import { RatingProps } from './rate.types'
import { IconStar } from '../icons/icons'

export const Rate: React.FC<RatingProps> = ({
    rate,
    onRatingChange,
    className,
    width = 18,
    height = 18,
    viewBox = '0 0 18 18',
    ratersNumber
}) => {
    var initialRating = 5

    if(rate!=undefined){
        initialRating = rate 
    }

    const [starCount, setStarCount] = useState(initialRating)
    return (
        <div dir="ltr" className={`ltr w-[118px] inline-flex h-[30px]  items-center justify-start gap-0.5 rounded-md px-3 py-1.5 `} >

            {Array.from({ length: starCount }, (_, index) => (
                <button key={`star-${index + 1}`}  >
                    <IconStar
                        fill={'#F4B735'}
                        stroke="#F4B735"
                        width={width}
                        height={height}
                        viewBox={viewBox}
                        strokeWidth={1}
                    />
                    
                </button>

            ))}


            <span>({ratersNumber})</span>


        </div>
    )
}
