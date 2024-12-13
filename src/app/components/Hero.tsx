import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <main className="flex items-center justify-center min-h-screen bg-[#FBEBB5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left mb-8 lg:mb-0 lg:flex-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-medium font-poppins text-gray-900 leading-tight">
                Rocket single seater
              </h1>
              <Link href="/shop">
                <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-md font-medium font-poppins text-lg sm:text-xl hover:bg-gray-800 transition-all">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0 mt-8 lg:mt-0 lg:flex-1">
              <img
                src="images/Rocket_single_seater_1.png"
                alt="Rocket single seater"
                className="w-full max-w-sm sm:max-w-md lg:max-w-full mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
