import Link from "next/link";
import React from "react";

const AsgaardSofa = () => {
  return (
    <div className="bg-[#FFF9E5] flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="images/asgaard_sofa.png"
            alt="Asgaard Sofa"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
        <div className="text-center md:text-left mt-6 md:ml-12 lg:ml-16 md:mt-0 md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-medium">
            New Arrivals
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-poppins font-bold mt-2">
            Asgaard Sofa
          </h1>
          <Link href="/product-detail">
            <button className="mt-4 px-6 py-2 text-lg sm:text-xl md:text-2xl text-black border border-black rounded hover:bg-black hover:text-white transition-colors">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsgaardSofa;
