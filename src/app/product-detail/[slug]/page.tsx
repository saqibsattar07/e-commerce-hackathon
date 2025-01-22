"use client";

import React, { useState } from "react";
import ProductOverview from "../../components/product-detail/ProductOverview";
import RelatedProducts from "../../components/product-detail/RelatedProducts";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/cartslice";

interface Product {
  id?: number;
  imageSrc: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  sku: string;
  category: string;
  tags: string[];
  colors: { color: string; bgClass: string }[];
  sizes: { label: string; isActive: boolean }[];
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  subtotal: number;
}

const products: Record<string, Product> = {
  "trenton-modular-sofa": {
    title: "Trenton Modular Sofa",
    price: 25000,
    rating: 4.5,
    description: "A versatile modular sofa for any space.",
    sku: "TMS001",
    category: "Sofas",
    tags: ["modular", "sofa", "trenton"],
    imageSrc: "/products/trenton_modular_sofa_3 1.png",
    colors: [
      { color: "purple", bgClass: "bg-violet-500" },
      { color: "black", bgClass: "bg-black" },
      { color: "orange", bgClass: "bg-orange-300" },
    ],
    sizes: [
      { label: "L", isActive: true },
      { label: "XL", isActive: false },
      { label: "XS", isActive: false },
    ],
  },
  "granite-dining-table": {
    title: "Granite dining table with chair",
    price: 25000,
    rating: 4.0,
    description: "A luxurious granite dining table set with chairs.",
    sku: "GDT001",
    category: "Dining Tables",
    tags: ["granite", "dining", "table"],
    imageSrc: "/products/Granite dining table with dining chair 1.png",
    colors: [
      { color: "gray", bgClass: "bg-gray-500" },
      { color: "white", bgClass: "bg-white" },
    ],
    sizes: [
      { label: "M", isActive: true },
      { label: "L", isActive: false },
    ],
  },
  "outdoor-bar-table-and-stool": {
    title: "Outdoor bar table and stool",
    price: 25000,
    rating: 4.2,
    description: "Perfect for outdoor gatherings.",
    sku: "OBTS001",
    category: "Outdoor Furniture",
    tags: ["bar", "outdoor", "stool"],
    imageSrc: "/products/Outdoor bar table and stool 1.png",
    colors: [
      { color: "brown", bgClass: "bg-amber-700" },
      { color: "green", bgClass: "bg-green-500" },
    ],
    sizes: [
      { label: "S", isActive: true },
      { label: "M", isActive: false },
    ],
  },
  "plain-console-with-teak-mirror": {
    title: "Plain console with teak mirror",
    price: 25000,
    rating: 4.7,
    description: "A stunning console with a teak mirror.",
    sku: "PCTM001",
    category: "Consoles",
    tags: ["teak", "mirror", "console"],
    imageSrc: "/products/Plain console with teak mirror 1.png",
    colors: [
      { color: "teak", bgClass: "bg-yellow-800" },
      { color: "walnut", bgClass: "bg-brown-600" },
    ],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "grain-coffee-table": {
    title: "Grain coffee table",
    price: 25000,
    rating: 4.1,
    description: "A minimalistic coffee table with grain texture.",
    sku: "GCT001",
    category: "Coffee Tables",
    tags: ["coffee", "table", "grain"],
    imageSrc: "/products/Grain coffee table 1.png",
    colors: [
      { color: "beige", bgClass: "bg-yellow-300" },
      { color: "brown", bgClass: "bg-amber-700" },
    ],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "kent-coffee-table": {
    title: "Kent coffee table",
    price: 25000,
    rating: 4.3,
    description: "A premium coffee table for modern homes.",
    sku: "KCT001",
    category: "Coffee Tables",
    tags: ["coffee", "table", "kent"],
    imageSrc: "/products/Kent coffee table 1.png",
    colors: [
      { color: "black", bgClass: "bg-black" },
      { color: "white", bgClass: "bg-white" },
    ],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "round-coffee-table": {
    title: "Round coffee table",
    price: 25000,
    rating: 4.5,
    description: "Elegant round coffee table for every space.",
    sku: "RCT001",
    category: "Coffee Tables",
    tags: ["coffee", "table", "round"],
    imageSrc: "/products/Round coffee table_color 2 1.png",
    colors: [
      { color: "gray", bgClass: "bg-gray-400" },
      { color: "blue", bgClass: "bg-blue-500" },
    ],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "teak-coffee-table": {
    title: "Reclaimed teak coffee table",
    price: 25000,
    rating: 4.8,
    description: "Crafted from reclaimed teak wood.",
    sku: "RCT002",
    category: "Coffee Tables",
    tags: ["teak", "coffee", "table"],
    imageSrc: "/products/Reclaimed teak coffee table 1.png",
    colors: [{ color: "natural wood", bgClass: "bg-amber-600" }],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "plain-console": {
    title: "Plain console",
    price: 25000,
    rating: 4.4,
    description: "A sleek and minimalistic console for your space.",
    sku: "PC001",
    category: "Consoles",
    tags: ["console", "plain"],
    imageSrc: "/products/Plain console_ 1.png",
    colors: [{ color: "white", bgClass: "bg-gray-300" }],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "teak-sideboard": {
    title: "Reclaimed teak Sideboard",
    price: 25000,
    rating: 4.6,
    description: "Elegant sideboard crafted from reclaimed teak wood.",
    sku: "TS001",
    category: "Sideboards",
    tags: ["teak", "sideboard", "reclaimed"],
    imageSrc: "/products/Reclaimed teak Sideboard 1.png",
    colors: [{ color: "teak", bgClass: "bg-yellow-800" }],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "sjp-chair": {
    title: "SJP Chair",
    price: 25000,
    rating: 4.2,
    description: "A modern and comfortable chair for your home.",
    sku: "SJP001",
    category: "Chairs",
    tags: ["chair", "modern", "sjp"],
    imageSrc: "/products/SJP_0825  1.png",
    colors: [{ color: "gray", bgClass: "bg-gray-400" }],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "chair-and-table": {
    title: "Bella chair and table",
    price: 25000,
    rating: 4.3,
    description: "A stylish Bella chair and table set for your home.",
    sku: "BCT001",
    category: "Furniture Sets",
    tags: ["chair", "table", "bella"],
    imageSrc: "/products/Bella chair and table 1.png",
    colors: [
      { color: "brown", bgClass: "bg-amber-700" },
      { color: "white", bgClass: "bg-white" },
    ],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "square-side-table": {
    title: "Granite square side table",
    price: 25000,
    rating: 4.1,
    description: "A durable granite square side table.",
    sku: "GST001",
    category: "Side Tables",
    tags: ["granite", "side table", "square"],
    imageSrc: "/products/Granite square side table 2.png",
    colors: [{ color: "gray", bgClass: "bg-gray-500" }],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "asgard-sofa": {
    title: "Asgaard sofa",
    price: 25000,
    rating: 4.5,
    description: "A luxurious Asgaard sofa for ultimate comfort.",
    sku: "AS001",
    category: "Sofas",
    tags: ["sofa", "asgaard"],
    imageSrc: "/products/Asgaard sofa 2.png",
    colors: [{ color: "blue", bgClass: "bg-blue-500" }],
    sizes: [
      { label: "L", isActive: true },
      { label: "XL", isActive: false },
    ],
  },
  "maya-sofa-three-seater": {
    title: "Maya sofa three seater",
    price: 25000,
    rating: 4.7,
    description: "A comfortable Maya sofa for three people.",
    sku: "MSTS001",
    category: "Sofas",
    tags: ["sofa", "maya", "three seater"],
    imageSrc: "/products/Maya sofa three seater 1.png",
    colors: [
      { color: "green", bgClass: "bg-green-500" },
      { color: "gray", bgClass: "bg-gray-300" },
    ],
    sizes: [{ label: "Standard", isActive: true }],
  },
  "outdoor-sofa-set": {
    title: "Outdoor sofa set",
    price: 25000,
    rating: 4.4,
    description: "A durable and elegant outdoor sofa set.",
    sku: "OSS001",
    category: "Outdoor Furniture",
    tags: ["sofa", "outdoor", "set"],
    imageSrc: "/products/Outdoor sofa set 1.png",
    colors: [
      { color: "black", bgClass: "bg-black" },
      { color: "brown", bgClass: "bg-amber-700" },
    ],
    sizes: [
      { label: "M", isActive: true },
      { label: "L", isActive: false },
    ],
  },
};

const ProductPage = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id || Date.now(),
      title: product.title,
      price: product.price,
      quantity,
      subtotal: product.price * quantity,
      image: product.imageSrc,
    };
    dispatch(addProduct(cartItem));
  };

  if (!slug) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  const product = products[slug];

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }


  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/629ecd29b6e1311788a917840a9db258106da010af82b53429c41a97f3d3eefe?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd126b32a2490780bdbd7b6c47a37596813a2a663890cc8d3c1c852a5ce81336?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5", alt: "LinkedIn" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac547bd4addefd8e4b2d50f2cd114a8157c1961189437cc9486cc350f82eadb2?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/74103b59eddb809277f2f1c90b0f6fe6242321fb50015d603656eb0cb18ded6d?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5", alt: "Pinterest" },
  ];


  return (
    <>
      <div className="flex flex-col p-5 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-5 w-full bg-white">
          <div className="flex flex-col w-full lg:w-7/12">
            <img
              loading="lazy"
              src={product.imageSrc}
              alt={product.title}
              className="object-contain w-full aspect-[1.1] rounded-md"
            />
          </div>
          <div className="flex flex-col w-full lg:w-5/12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-black mb-3">
              {product.title}
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl font-medium text-neutral-400 mb-2">
              Rs. {product.price.toFixed(2)}
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-400 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b716153d96851be343bafc84fd9ddc859debe5a756855bb838c029e08b61309?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5"
                alt="Rating stars"
                className="w-20"
              />
              <span className="border-l border-neutral-400 h-6 mx-3" />
              <span>{product.rating} Customer Review</span>
            </div>
            <p className="text-sm text-black mb-6">{product.description}</p>

            <div className="mb-4">
              <span className="text-sm text-neutral-400">Size</span>
              <div className="flex gap-4 mt-3">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
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
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${color.bgClass}`}
                    aria-label={`Select ${color.color} color`}
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
              <button onClick={() => handleAdd(product)} className="px-6 py-2 bg-black text-white text-lg rounded-lg">
                Add To Cart
              </button>
            </div>

            <div className="text-sm text-neutral-400">
              <div className="flex justify-between mb-2">
                <span>SKU</span>
                <span>{product.sku}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Category</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Tags</span>
                <span>
                  {product.tags.length > 0
                    ? product.tags.join(", ")
                    : "No tags available"}
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