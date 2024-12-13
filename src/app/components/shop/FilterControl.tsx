import * as React from "react";
import { FaFilter, FaTh, FaBars } from "react-icons/fa";

const FilterControls = () => {
  return (
    <div className="flex flex-col text-black">
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 lg:px-20 py-6 w-full bg-[#FAF4F4]">
        {/* Filter Section */}
        <div className="flex flex-col lg:flex-row flex-1 gap-4 sm:gap-6 items-center flex-wrap">
          <div className="flex gap-2 sm:gap-3 items-center text-sm sm:text-base lg:text-xl whitespace-nowrap">
            <FaFilter className="text-base sm:text-lg lg:text-xl" />
            <div>Filter</div>
          </div>

          {/* Results Info */}
          <div className="flex gap-4 sm:gap-6 items-center text-xs sm:text-sm lg:text-base lg:ml-auto">
            <FaTh className="text-lg sm:text-xl lg:text-2xl" />
            <FaBars className="text-lg sm:text-xl lg:text-2xl" />
            <div className="shrink-0 self-stretch w-0.5 border border-solid border-neutral-400 h-8 sm:h-9" />
            <div className="mt-1.5 self-stretch">Showing 16 of 32 results</div>
          </div>
        </div>

        {/* Show and Sort Section */}
        <div className="flex flex-col lg:flex-row flex-1 gap-4 sm:gap-6 items-center flex-wrap">
          <div className="text-sm sm:text-base lg:text-xl">Show</div>
          <div className="px-4 sm:px-5 py-2.5 sm:py-3.5 bg-white text-neutral-400 text-sm sm:text-base lg:text-xl rounded-md">
            16
          </div>
          <div className="text-sm sm:text-base lg:text-xl">Sort by</div>
          <div className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white text-neutral-400 text-sm sm:text-base lg:text-xl rounded-md">
            Default
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
