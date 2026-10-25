import { fetchBlogBySlug } from '@/data/detail-blog.data';
import { notFound } from 'next/navigation';
import { BlogDetailsComponent } from '@/app/_components/features/blogs/blog-details/blog-details';
import BreadCrumbs from '@/app/_components/ui/bread-crumbs/bread-crumbs';
import { BreadCrumbItem } from '@/app/_components/ui/bread-crumbs/bread-crumbs.types';

export default async function BlogDetailsPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const blog = await fetchBlogBySlug(params.slug);


    if (!blog) {
        return notFound(); 
    }

    const breadcrumbItems:BreadCrumbItem[]=[
        { label: "Home", url: "/" },
        { label: "blog", url: "/blog" },
        { label: blog.title, url: blog.slug }
    ]

    return (
        <>
            <BreadCrumbs items={breadcrumbItems} />
            <BlogDetailsComponent {...blog} />
        </>
    )
}



