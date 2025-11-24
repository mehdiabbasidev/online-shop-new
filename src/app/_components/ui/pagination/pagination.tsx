"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useProductQueryParams } from "@/hooks/useProductQueryParams";
import { ProductListData } from "@/data/products.data"; // ← یا هر دیتایی که داری

const Pagination: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { page: activePage, totalPages } = useProductQueryParams(ProductListData);

  if (totalPages <= 1) return null;

  const hrefFor = (page: number) => {
    const sp = new URLSearchParams(searchParams.toString());

    if (page <= 1) {
      sp.delete("page");
    } else {
      sp.set("page", String(page));
    }

    const qs = sp.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <div className="pagination-list *:flex *:size-8 *:items-center *:justify-center *:rounded-md *:border *:p-1">
        {activePage > 1 && (
          <Link
            className="page-link page-prev page-item"
            href={hrefFor(activePage - 1)}
            scroll={false}
            aria-label="Previous page"
            rel="prev"
          >
            &lt;
          </Link>
        )}

        {pages.map((pageNumber) => {
          const isActive = activePage === pageNumber;
          return (
            <Link
              key={pageNumber}
              href={hrefFor(pageNumber)}
              scroll={false}
              aria-current={isActive ? "page" : undefined}
              className={`${isActive ? "bg-orange-400 text-white" : ""} page-link`}
            >
              {pageNumber}
            </Link>
          );
        })}

        {activePage < totalPages && (
          <Link
            className="page-link page-next page-item"
            href={hrefFor(activePage + 1)}
            scroll={false}
            aria-label="Next page"
            rel="next"
          >
            &gt;
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
