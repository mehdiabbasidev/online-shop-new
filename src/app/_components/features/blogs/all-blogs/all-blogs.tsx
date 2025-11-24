"use client";
import React from 'react'
import { AllBlogsProps } from './all-blogs.types';
import { BlogCard } from '../blog-card';


const AllBlogs: React.FC<AllBlogsProps> = ({ visibleBlogs }) => {
    return (
        <>
            <div className="containerD p-2">
                <div className="flex flex-col gap-2 border-b border-shop-gray-border pb-5">
                    <h1 className="text-3xl font-bold text-shop-gray-900">
                        Blogs
                    </h1>
                </div>
            </div>
            <div className="containerD mb-5">
                <div className="mt-9 flex w-full flex-wrap justify-center gap-5">
                    {visibleBlogs.map((blog) => (
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
            </div>
        </>
    )
}

export default AllBlogs;
