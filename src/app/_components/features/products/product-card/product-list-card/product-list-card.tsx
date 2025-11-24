import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProductListCard } from "./product-list-card.types";


export default function ProductListCard(props: IProductListCard) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
      <div className="flex-shrink-0">
        <Image
          width={120}
          height={120}
          src={`/images/products/${props.img}`}
          alt={props.title}
          className="object-contain  p-1 bg-gray-50"
        />
      </div>
      <div className="flex-grow">
        <Link href={`/products/${props.product_id}`}>
          <h3 className="text-lg font-semibold text-primary-600 hover:underline">
            {props.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">
          {props.summary_description}
        </p>
        <div className="flex items-center mt-2">

          <span className="text-sm font-medium text-gray-900">
            ${props.price}
          </span>
        </div>
      </div>
    </div>
  );
}