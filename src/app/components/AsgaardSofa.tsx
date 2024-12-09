import React from "react";

const AsgaardSofa = () => {
  return (
    <div className="bg-[#FFF9E5] flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4">
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="images/Asgaard Sofa 1.png"
            alt="Asgaard Sofa"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="text-center md:text-left mt-6 lg:ml-36 md:mt-0 md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-medium">New Arrivals</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-poppins font-bold mt-2">
            Asgaard Sofa
          </h1>
          <button className="mt-4 px-6 py-2 text-lg sm:text-xl md:text-2xl text-black border border-black rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AsgaardSofa;
