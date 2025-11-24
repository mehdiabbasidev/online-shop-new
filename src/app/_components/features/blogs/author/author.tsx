import Image from 'next/image'
import React from 'react'
import { AuthorProps } from './author.types'


const Author: React.FC<AuthorProps> = ({
    authorName,
    authorPostCount,
    authorStartDate,
    authorProfileImage="",
    authorBio,
    variant = "default"
}) => {

    const renderVariants = {
        default: (
            <div>
                <div className="avatar">
                    <Image
                        src={authorProfileImage}
                        alt=""
                        height={50}
                        width={50}
                        className="rounded-full"
                    />
                    <div>
                        <span className="text-[#425A8B]">&nbsp;{authorName}</span>
                        <div className="avatar-details-box">
                            <span>{authorPostCount} <span>posts</span></span>
                            <span>Since <span>{authorStartDate}</span></span>
                        </div>
                    </div>
                </div>
                <div className="pl-[60px]">{authorBio}</div>
            </div>
        ),
        minimal: (
            <div>
                <span className="text-[#425A8B]">By &nbsp;{authorName}</span>
                <div className="avatar-details-box">
                    <span>{authorPostCount} <span>posts</span></span>
                </div>
            </div>
        )
    };

    return renderVariants[variant] || null;
}

export default Author
