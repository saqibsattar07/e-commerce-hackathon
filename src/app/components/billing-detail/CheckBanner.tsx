import Link from "next/link";
import React from "react";

const CheckBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('images/Rectangle 1.png')" }}
    >
      <div className="absolute inset-0  opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
        <img
          src="images/Meubel House_Logos-05.png"
          alt="Logo"
          className="mb-2 h-16"
        />
        <div className="text-4xl font-bold">Checkout</div>
        <div className="mt-2 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt; <span>Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default CheckBanner;
