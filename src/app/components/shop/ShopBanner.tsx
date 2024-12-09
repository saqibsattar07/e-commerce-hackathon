import React from 'react';

const ShopBanner = () => {
  return (
    <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('images/Rectangle 1.png')" }}>
      <div className="absolute inset-0  opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
      <img src="images/Meubel House_Logos-05.png" alt="Logo" className="mb-2 h-16" />
        <div className="text-4xl font-bold">Shop</div>
        <div className="mt-2 text-sm">
          <a href="/" className="hover:underline">Home</a> &gt; <span>Shop</span>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
