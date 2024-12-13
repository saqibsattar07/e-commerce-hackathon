"use client";

import * as React from "react";

const ProductItems = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const products = [
    {
      imageSrc: "products/Trenton modular sofa_3 1.png",
      title: "Trenton modular sofa",
      price: "Rs. 25,000.00",
      imageAlt: "Trenton modular sofa",
    },
    {
      imageSrc: "products/Granite dining table with dining chair 1.png",
      title: "Granite dining table with chair",
      price: "Rs. 25,000.00",
      imageAlt: "Granite dining table set",
    },
    {
      imageSrc: "products/Outdoor bar table and stool 1.png",
      title: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      imageAlt: "Outdoor bar table set",
    },
    {
      imageSrc: "products/Plain console with teak mirror 1.png",
      title: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      imageAlt: "Plain console with teak mirror",
    },
    {
      imageSrc: "products/Grain coffee table 1.png",
      title: "Grain coffee table",
      price: "Rs. 25,000.00",
      imageAlt: "Grain coffee table",
    },
    {
      imageSrc: "products/Kent coffee table 1.png",
      title: "Kent coffee table",
      price: "Rs. 25,000.00",
      imageAlt: "Kent coffee table",
    },
    {
      imageSrc: "products/Round coffee table_color 2 1.png",
      title: "Round coffee table",
      price: "Rs. 25,000.00",
      imageAlt: "Round coffee table",
    },
    {
      imageSrc: "products/Reclaimed teak coffee table 1.png",
      title: "Reclaimed teak coffee table",
      price: "Rs. 25,000.00",
      imageAlt: "Reclaimed teak coffee table",
    },
    {
      imageSrc: "products/Plain console_ 1.png",
      title: "Plain console",
      price: "Rs. 25,000.00",
      imageAlt: "Plain console",
    },
    {
      imageSrc: "products/Reclaimed teak Sideboard 1.png",
      title: "Reclaimed teak Sideboard",
      price: "Rs. 25,000.00",
      imageAlt: "Reclaimed teak Sideboard",
    },
    {
      imageSrc: "products/SJP_0825  1.png",
      title: "SJP Chair",
      price: "Rs. 25,000.00",
      imageAlt: "SJP Chair",
    },
    {
      imageSrc: "products/Bella chair and table 1.png",
      title: "Bella chair and table",
      price: "Rs. 25,000.00",
      imageAlt: "Bella chair and table",
    },
    {
      imageSrc: "products/Granite square side table 2.png",
      title: "Granite square side table",
      price: "Rs. 25,000.00",
      imageAlt: "Granite square side table",
    },
    {
      imageSrc: "products/Asgaard sofa 2.png",
      title: "Asgaard sofa",
      price: "Rs. 25,000.00",
      imageAlt: "Asgaard sofa",
    },
    {
      imageSrc: "products/Maya sofa three seater 1.png",
      title: "Maya sofa three seater",
      price: "Rs. 25,000.00",
      imageAlt: "Maya sofa three seater",
    },
    {
      imageSrc: "products/Outdoor sofa set 1.png",
      title: "Outdoor sofa set",
      price: "Rs. 25,000.00",
      imageAlt: "Outdoor sofa set",
    },
  ];

  const totalPages = 3;

  return (
    <div className="flex flex-col rounded-none">
      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 pt-4 w-full bg-white">
        {/* Product Grid */}
        <div className="w-full max-w-[1240px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full cursor-pointer hover:scale-105 transition-transform"
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

        {/* Pagination */}
        <div className="flex gap-3 justify-center mt-10 text-xl text-black">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-5 py-2 rounded-lg transition-all ${
                currentPage === page ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
              }`}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            className="px-5 py-2 bg-[#FFF9E5] rounded-lg"
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
