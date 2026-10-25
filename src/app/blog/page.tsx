import { BLOGS_PER_PAGE } from '@/configs/itemsPerPage';
import { BlogsData } from '@/data/blogs.data';

import { BreadCrumbItem } from '../_components/ui/bread-crumbs/bread-crumbs.types';
import AllBlogs from '../_components/features/blogs/all-blogs/all-blogs';
import BigBanner from '../_components/sections/big-banner/big-banner';
import BreadCrumbs from '../_components/ui/bread-crumbs/bread-crumbs';
import Pagination from '../_components/ui/pagination/pagination';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  const title = "مقالات";
  const image = "http://localhost:3000/_next/image?url=%2Fimages%2Fblog-img%2Fblog-0.jpg&w=3840&q=75"; 

  const og = `/api/og?title=${encodeURIComponent(title)}&image=${encodeURIComponent(
    image
  )}`;

  return {
    title,
    openGraph: {
      title,
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [og],
    },
  };
}


export default async function Blog(
    props: { searchParams: Promise<Record<string, string | string[] | undefined>> }
) {
    const searchParams = await props.searchParams;


    const breadcrumbItems: BreadCrumbItem[] = [
        { label: "Home", url: "/" },
        { label: "blog", url: "/blog" }
    ];
    const blogsPerPage = BLOGS_PER_PAGE
    const activePage = Number(searchParams.page) || 1;
    const startIndex = (activePage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const visibleBlogs = BlogsData.slice(startIndex, endIndex);


    return (
        <>
            <section>
                <BreadCrumbs items={breadcrumbItems} />
            </section>

            <section>
                <AllBlogs visibleBlogs={visibleBlogs} />
            </section>

            <section className="containerD my-6 p-2">
                <Pagination totalItems={BlogsData.length} activePage={activePage} itemPerPage={blogsPerPage} />
            </section>

            <section className="!mx-0 !w-full bg-green-200 !px-0">
                <BigBanner />
            </section>
        </>
    )
}
