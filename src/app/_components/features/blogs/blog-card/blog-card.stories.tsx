import { Meta, StoryObj } from '@storybook/react'
import { BlogsData } from '@/data/blogs.data'
import { BlogCard } from './blog-card'



const meta: Meta<typeof BlogCard> = {
    component: BlogCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BlogCard>

export const Variants: Story = {
    render: () => (
        <>
            {BlogsData.slice(0, 2).map((blog, index) => (
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
        </>
    ),
}
