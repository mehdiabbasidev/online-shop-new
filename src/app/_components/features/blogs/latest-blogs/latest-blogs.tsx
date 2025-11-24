import { BlogsData } from "@/data/blogs.data"
import { BlogCard } from "../blog-card";


const LatestBlogs = () => {
    return (
        <>
            {/* category title */}
            <div className="flex flex-col gap-2 border-b border-shop-gray-border pb-5">
                <h2 className="text-3xl text-shop-gray-900">
                    Latest Blog & Events
                </h2>
                <span className="text-md text-shop-gray-500">
                    From our blog, forum
                </span>
            </div>
            {/* blog card wrapper*/}
            <div className="mt-9 flex w-full flex-wrap  justify-center gap-5">
                {BlogsData.slice(0, 4).map((blog, index) => (
                <BlogCard
                        key={blog.id}
                        id={blog.id}
                        srcImage={blog.srcImage}
                        label={blog.label}
                        title={blog.title}
                        date={blog.date}
                        visit_number={blog.visit_number}
                        slug={blog.slug}
                    />
                ))}
            </div>
        </>
    )
}

export default LatestBlogs




