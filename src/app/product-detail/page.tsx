"use client";

import React, { useState } from "react";
import ProductOverview from "../components/product-detail/ProductOverview";
import RelatedProducts from "../components/product-detail/RelatedProducts";

interface ColorOption {
  color: string;
  bgClass: string;
}

interface SizeOption {
  label: string;
  isActive: boolean;
}

interface SocialIcon {
  src: string;
  alt: string;
}

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const colors: ColorOption[] = [
    { color: "purple", bgClass: "bg-violet-500" },
    { color: "black", bgClass: "bg-black" },
    { color: "orange", bgClass: "bg-orange-300" },
  ];

  const sizes: SizeOption[] = [
    { label: "L", isActive: true },
    { label: "XL", isActive: false },
    { label: "XS", isActive: false },
  ];

  const socialIcons: SocialIcon[] = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/629ecd29b6e1311788a917840a9db258106da010af82b53429c41a97f3d3eefe?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5",
      alt: "Social media icon 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd126b32a2490780bdbd7b6c47a37596813a2a663890cc8d3c1c852a5ce81336?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5",
      alt: "Social media icon 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac547bd4addefd8e4b2d50f2cd114a8157c1961189437cc9486cc350f82eadb2?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5",
      alt: "Social media icon 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/74103b59eddb809277f2f1c90b0f6fe6242321fb50015d603656eb0cb18ded6d?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5",
      alt: "Social media icon 4",
    },
  ];

  const handleSizeSelect = (size: string) => {
    console.log("Selected size:", size);
  };

  const handleColorSelect = (color: string) => {
    console.log("Selected color:", color);
  };

  // Example data for demonstration
  const productData = {
    title: "Example Product",
    price: 99.99,
    rating: 4.5,
    description: "This is an example product.",
    sku: "example-sku",
    category: "Example Category",
    tags: ["tag1", "tag2"],
  };

  return (
    <>
      <div className="flex flex-col p-5 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-5 w-full bg-white">
          <div className="flex flex-col w-full lg:w-7/12">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e42021ae3a815bdeb470a2baf0636c749375262e745db1e29731037dea9335a1?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5"
              alt="Asgaard sofa product image"
              className="object-contain w-full aspect-[1.1] rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-5/12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-black mb-3">
              {productData.title}
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl font-medium text-neutral-400 mb-2">
              ${productData.price.toFixed(2)}
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-400 mb-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b716153d96851be343bafc84fd9ddc859debe5a756855bb838c029e08b61309?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5"
                alt="Product rating stars"
                className="object-contain w-20"
              />
              <span className="border-l border-neutral-400 h-6 mx-3" />
              <span>{productData.rating} Customer Review</span>
            </div>
            <p className="text-sm text-black mb-6">{productData.description}</p>

            <div className="mb-4">
              <span className="text-sm text-neutral-400">Size</span>
              <div className="flex gap-4 mt-3">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => handleSizeSelect(size.label)}
                    className={`px-4 py-1 rounded-md ${
                      size.isActive ? "bg-amber-100" : "bg-red-50"
                    }`}
                    aria-label={`Select size ${size.label}`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-sm text-neutral-400">Color</span>
              <div className="flex gap-4 mt-3">
                {colors.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorSelect(option.color)}
                    className={`w-8 h-8 rounded-full ${option.bgClass}`}
                    aria-label={`Select ${option.color} color`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-5 items-center mb-6">
              <div className="flex items-center border border-neutral-400 px-4 py-2 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-lg"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button className="px-6 py-2 bg-black text-white text-lg rounded-lg">
                Add To Cart
              </button>
            </div>

            <div className="text-sm text-neutral-400">
              <div className="flex justify-between mb-2">
                <span>SKU</span>
                <span>{productData.sku}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Category</span>
                <span>{productData.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Tags</span>
                <span>
                  {productData.tags?.join(", ") || "No tags available"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-10">
          <span className="text-neutral-400">Share:</span>
          <div className="flex gap-3">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className="w-6 h-6"
              />
            ))}
          </div>
        </div>
      </div>
      <ProductOverview />
      <RelatedProducts />
    </>
  );
};

export default ProductPage;
