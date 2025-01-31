"use client";

import * as React from "react";
import CartBanner from "../components/cart/CartBanner";
import DeliveryFeature from "../components/cart/DeliveryFeatures";
import Link from "next/link";
import { clearCart, removeState } from "../redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(removeState(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const subtotal = cartItems
    .reduce(
      (sum, item) =>
        sum + parseFloat(String(item.subtotal).replace(/[^0-9.-]+/g, "")),
      0
    )
    .toFixed(2);
  const total = subtotal;

  return (
    <>
      <CartBanner />
      <div className="flex flex-col">
        <div className="px-5 py-10 w-full bg-white sm:px-8 md:px-16 lg:px-20">
          <div className="flex flex-col gap-8 lg:flex-row">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="text-xl font-medium text-gray-700">
                  Your cart is empty!
                </h2>
                <Link href="/" className="mt-4 text-yellow-600 underline">
                  Continue shopping
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex flex-col w-full lg:w-2/3">
                  {/* Header Row */}
                  <div className="hidden lg:flex justify-between items-center px-4 py-2 text-base font-medium text-black bg-yellow-50">
                    <span>Product</span>
                    <span className="ml-20">Price</span>
                    <div className="flex gap-8">
                      <span className="mr-40">Quantity</span>
                      <span className="mr-auto">Subtotal</span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="mt-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-6 mb-6 border-b border-neutral-200 pb-6 lg:flex-row lg:items-center"
                      >
                        {/* Product Image and Name */}
                        <div className="flex items-center gap-4 lg:w-1/3">
                          <img
                            loading="lazy"
                            src={item.image}
                            alt={item.title}
                            className="w-24 h-24 object-cover rounded-md"
                          />
                          <span className="text-base font-medium text-black truncate">
                            {item.title}
                          </span>
                        </div>

                        {/* Price, Quantity, and Subtotal */}
                        <div className="flex flex-col gap-4 lg:flex-row lg:w-2/3 lg:items-center lg:justify-between">
                          <span className="text-neutral-500">{item.price}</span>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 border border-neutral-400 rounded-md">
                              {item.quantity}
                            </span>
                          </div>
                          <span className="text-black font-medium">
                            {item.subtotal}
                          </span>
                          <button
                            onClick={() => handleRemove(item.id)}
                            aria-label="Remove item"
                            className="focus:outline-none focus:ring-2 focus:ring-yellow-600"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96554a9f86bd3fd8c39408fbbd8fa8ea76b10f4a501e0797d8eeff82580216d1?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5"
                              alt="Remove item"
                              className="w-6 h-6"
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Clear Cart Button */}
                  <button
                    onClick={handleClearCart}
                    className="w-full px-6 py-3 mt-4 text-xl font-medium text-center text-white bg-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* Cart Totals */}
                <div className="flex flex-col w-full lg:w-1/3 bg-yellow-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-black text-center">
                    Cart Totals
                  </h2>

                  <div className="flex justify-between mt-8 text-base font-medium">
                    <span>Subtotal</span>
                    <span className="text-neutral-500">Rs. {subtotal}</span>
                  </div>

                  <div className="flex justify-between mt-4 text-xl font-bold">
                    <span>Total</span>
                    <span className="text-yellow-600">Rs. {total}</span>
                  </div>

                  <Link href="/checkout">
                    <button className="w-full px-6 py-3 mt-6 text-xl font-medium text-center text-black border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600">
                      Check Out
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <DeliveryFeature />
    </>
  );
};

export default Cart;
