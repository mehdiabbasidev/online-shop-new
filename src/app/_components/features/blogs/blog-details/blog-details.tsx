import Image from "next/image";
import { FC } from "react";
import { IBlogDetailsProps } from "./blog-details.types";

import Tag from "@/app/_components/ui/tag/tag"
// import Author from "../author/author";
import Author from "@/app/_components/features/blogs/author/author";

export const BlogDetailsComponent: FC<IBlogDetailsProps> = (props) => {
    const {  srcImage, label, title, content, readingTime, author } = props;
    return (
        <>

            {/* blog title & details */}
            <section className="containerD my-4">
                <div>
                    <Tag tag_title={label} />

                    {/* blog title */}
                    <h1 className="mb-6 mt-[15px] text-3xl font-bold leading-[41px] text-[#425a8b]">
                        {title}
                    </h1>

                    {/* blog author info */}
                    {
                        (author ?
                            <div className="flex items-center gap-4">
                                <Author
                                    authorName={author.authorName}
                                    authorPostCount={author.authorPostCount}
                                    authorStartDate={author.authorStartDate}
                                    authorProfileImage={author.authorProfileImage}
                                    authorBio={author.authorBio}
                                    variant="minimal"
                                />
                            </div> : "")
                    }
                </div>
            </section>

            {/* blog image */}
            <section className="containerD my-5">
                <div className="relative h-full w-full">
                    <Image
                        src={`/images/blog-img/${srcImage}`}
                        alt={title}
                        fill={true}
                        className="!static h-full w-full object-cover"
                    />
                </div>
            </section>

            {/* blog content */}
            <section className="containerD my-5 py-4">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-sans text-[#212529]">{content}</p>
                </div>
            </section>
            <div className="containerD my-5 border border-b-4 border-secondary-300"></div>
            
            {/* blog author info */}
            {
                (author ?
                    <section className="containerD">
                        <Author
                            authorName={author.authorName}
                            authorPostCount={author.authorPostCount}
                            authorStartDate={author.authorStartDate}
                            authorProfileImage={author.authorProfileImage}
                            authorBio={author.authorBio}
                            variant="default"
                        />
                        <br />
                    </section>
                    : "")
            }
        </>
    )

}