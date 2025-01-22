"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ProductItems = () => {
  const router = useRouter();

  const products = [
    {
      imageSrc: "products/trenton_modular_sofa_3 1.png",
      title: "Trenton modular sofa",
      price: "Rs. 25,000.00",
      imageAlt: "Trenton modular sofa",
      slug: "trenton-modular-sofa",
    },
    {
      imageSrc: "products/Granite dining table with dining chair 1.png",
      title: "Granite dining table with chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
      slug: "granite-dining-table",
    },
    {
      imageSrc: "products/Outdoor bar table and stool 1.png",
      title: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      imageAlt: "Outdoor bar table set",
      slug: "outdoor-bar-table-and-stool"
    },
    {
      imageSrc: "products/Plain console with teak mirror 1.png",
      title: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      imageAlt: "Plain console with teak mirror",
      slug: "plain-console-with-teak-mirror"
    },
    {
      imageSrc: "products/Grain coffee table 1.png",
      title: "Grain coffee table",
      price: "Rs. 25,000.00",
      imageAlt: "Grain coffee table",
      slug: "grain-coffee-table"
    },
    {
      imageSrc: "products/Kent coffee table 1.png",
      title: "Kent coffee table",
      price: "Rs. 25,000.00",
      imageAlt: "Kent coffee table",
      slug: "kent-coffee-table"
    },
    {
      imageSrc: "products/Round coffee table_color 2 1.png",
      title: "Round coffee table",
      price: "Rs. 25,000.00",
      imageAlt: "Round coffee table",
      slug: "round-coffee-table"
    },
    {
      imageSrc: "products/Reclaimed teak coffee table 1.png",
      title: "Reclaimed teak coffee table",
      price: "Rs. 25,000.00",
      imageAlt: "Reclaimed teak coffee table",
      slug: "teak-coffee-table"
    },
    {
      imageSrc: "products/Plain console_ 1.png",
      title: "Plain console",
      price: "Rs. 25,000.00",
      imageAlt: "Plain console",
      slug: "plain-console"
    },
    {
      imageSrc: "products/Reclaimed teak Sideboard 1.png",
      title: "Reclaimed teak Sideboard",
      price: "Rs. 25,000.00",
      imageAlt: "Reclaimed teak Sideboard",
      slug: "teak-sideboard"
    },
    {
      imageSrc: "products/SJP_0825  1.png",
      title: "SJP Chair",
      price: "Rs. 25,000.00",
      imageAlt: "SJP Chair",
      slug: "sjp-chair"
    },
    {
      imageSrc: "products/Bella chair and table 1.png",
      title: "Bella chair and table",
      price: "Rs. 25,000.00",
      imageAlt: "Bella chair and table",
      slug: "chair-and-table"
    },
    {
      imageSrc: "products/Granite square side table 2.png",
      title: "Granite square side table",
      price: "Rs. 25,000.00",
      imageAlt: "Granite square side table",
      slug: "square-side-table"
    },
    {
      imageSrc: "products/Asgaard sofa 2.png",
      title: "Asgaard sofa",
      price: "Rs. 25,000.00",
      imageAlt: "Asgaard sofa",
      slug: "asgard-sofa"
    },
    {
      imageSrc: "products/Maya sofa three seater 1.png",
      title: "Maya sofa three seater",
      price: "Rs. 25,000.00",
      imageAlt: "Maya sofa three seater",
      slug: "maya-sofa-three-seater"
    },
    {
      imageSrc: "products/Outdoor sofa set 1.png",
      title: "Outdoor sofa set",
      price: "Rs. 25,000.00",
      imageAlt: "Outdoor sofa set",
      slug: "outdoor-sofa-set"
    },
  ];

  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 pt-4 w-full bg-white">
        <div className="w-full max-w-[1240px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div
                key={product.slug}
                className="w-full cursor-pointer hover:scale-105 transition-transform"
                onClick={() => router.push(`/product-detail/${product.slug}`)}
              >
                <div className="flex flex-col items-center text-black">
                  <img
                    loading="lazy"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-contain w-full aspect-square"
                  />
                  <div className="mt-3.5 text-lg text-center">
                    {product.title}
                  </div>
                  <div className="mt-3 text-xl font-medium text-center">
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
