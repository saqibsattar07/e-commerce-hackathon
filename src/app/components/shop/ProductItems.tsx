"use client"

import * as React from "react";

const ProductItems = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const products = [
    {
      imageSrc:
        "products/Trenton modular sofa_3 1.png",
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imageAlt: "Trenton modular sofa",
    },
    {
      imageSrc:
        "products/Granite dining table with dining chair 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Outdoor bar table and stool 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Plain console with teak mirror 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Grain coffee table 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Kent coffee table 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Round coffee table_color 2 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Reclaimed teak coffee table 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Plain console_ 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Reclaimed teak Sideboard 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/SJP_0825  1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Bella chair and table 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Granite square side table 2.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Asgaard sofa 2.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Maya sofa three seater 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc:
        "products/Outdoor sofa set 1.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
  ];

  const totalPages = 3;

  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col items-center px-20 pt-4 w-full bg-white max-md:px-5 max-md:max-w-full">
        {/* Product Grid */}
        <div className="w-full max-w-[1240px] max-md:max-w-full">
          <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
            {products.map((product, index) => (
              <div key={index} className="w-full">
                <div className="flex flex-col items-start text-black">
                  <img
                    loading="lazy"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-contain w-full aspect-square"
                  />
                  <div className="mt-3.5 text-base">{product.title}</div>
                  <div className="mt-3 text-2xl font-medium">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex gap-5 justify-between mt-28 max-w-full text-xl text-black whitespace-nowrap w-[392px] max-md:mt-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-7 ${
                currentPage === page ? "bg-amber-100" : "bg-yellow-50"
              } rounded-xl h-[60px] w-[60px] max-md:px-5`}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            className="px-7 py-4 font-light bg-yellow-50 rounded-xl max-md:px-5"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
