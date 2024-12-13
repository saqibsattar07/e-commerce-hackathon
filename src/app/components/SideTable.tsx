import Link from "next/link";

const SideTable = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FAF4F4] justify-center md:justify-between items-center p-6 md:p-12 gap-6">
      {/* Side Table 1 */}
      <div className="flex flex-col items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center justify-center w-full h-64">
            <img
              src="images/Granite square side table 1.png"
              alt="Wooden Side Table"
              className="w-auto max-h-full object-cover rounded-md"
            />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-poppins mt-4 text-center">
            Granite Side Table
          </h2>
          <Link
            href="#"
            className="font-medium font-poppins text-gray-900 mt-2 underline underline-offset-4 text-sm sm:text-base md:text-lg hover:text-gray-700 transition"
          >
            View More
          </Link>
        </div>
      </div>

      {/* Side Table 2 */}
      <div className="flex flex-col items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex items-center justify-center w-full h-64">
            <img
              src="images/cloud-sofa-three-seater.png"
              alt="Cloud Sofa Side Table"
              className="w-auto max-h-full object-cover rounded-md"
            />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium font-poppins mt-4 text-center">
            Cloud Sofa Side Table
          </h2>
          <Link
            href="#"
            className="font-medium font-poppins text-gray-900 mt-2 underline underline-offset-4 text-sm sm:text-base md:text-lg hover:text-gray-700 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideTable;
