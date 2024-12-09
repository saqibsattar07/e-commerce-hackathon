const SideTable = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FAF4F4] justify-between items-center p-6 md:p-12 gap-6">
      <div className="flex flex-col items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/3">
        <img 
          src="images/Granite square side table 1.png" 
          alt="Wooden Side Table" 
          className="w-full h-auto object-cover" 
        />
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-poppins mt-2">
          Side table
        </h2>
        <a href="#" className="font-medium font-poppins text-gray-900 mt-1 underline underline-offset-4 text-sm sm:text-base md:text-lg">
          View More
        </a>
      </div>
      <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3">
        <img 
          src="images/Cloud sofa three seater + ottoman_3 1.png" 
          alt="Sofa Side Table" 
          className="w-full h-auto object-cover" 
        />
        <h2 className="text-lg sm:text-xl md:text-2xl font-poppins font-medium mt-2">
          Side table
        </h2>
        <a href="#" className="font-medium font-poppins text-gray-900 mt-1 underline underline-offset-4 text-sm sm:text-base md:text-lg">
          View More
        </a>
      </div>
    </div>
  );
};

export default SideTable;
