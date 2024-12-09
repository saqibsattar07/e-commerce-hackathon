import * as React from "react";
import { FaFilter, FaTh, FaBars } from "react-icons/fa";

const FilterControls = () => {
  return (
    <div className="flex flex-col text-black">
      <div className="flex flex-wrap gap-10 px-20 py-6 w-full bg-red-50 max-md:px-5 max-md:max-w-full">
        {/* Filter Section */}
        <div className="flex flex-1 gap-6 my-auto max-md:max-w-full">
          <div className="flex gap-3 my-auto text-xl whitespace-nowrap">
            <FaFilter className="text-xl my-auto" />
            <div>Filter</div>
          </div>

          {/* Results Info */}
          <div className="flex flex-auto gap-6 items-center text-base">
            <FaTh className="text-2xl my-auto" />
            <FaBars className="text-2xl my-auto" />
            <div className="shrink-0 self-stretch w-0.5 border-2 border-solid border-neutral-400 h-[37px]" />
            <div className="self-stretch my-auto basis-auto">
              Showing 16 of 32 results
            </div>
          </div>
        </div>

        {/* Show and Sort Section */}
        <div className="flex flex-1 gap-4 text-xl max-md:max-w-full">
          <div className="my-auto">Show</div>
          <div className="px-5 py-3.5 whitespace-nowrap bg-white h-[55px] text-neutral-400 w-[55px]">
            16
          </div>
          <div className="my-auto">Sort by</div>
          <div className="px-8 py-3.5 whitespace-nowrap bg-white text-neutral-400 max-md:px-5">
            Default
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
