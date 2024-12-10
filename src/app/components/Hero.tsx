export default function Hero() {
    return (
      <div>
        <main className="flex items-center justify-center min-h-screen bg-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-medium font-poppins text-gray-900 w-full sm:w-[440px] h-auto">
                  Rocket single seater
                </h1>
                <button className="mt-10 px-1 py-2 text-gray-950 font-medium font-poppins text-lg sm:text-xl md:text-2xl underline decoration-2 underline-offset-8">
                  Shop Now
                </button>
              </div>
              <div className="flex-shrink-0 mt-8 lg:mt-0">
                <img
                  src="images/Rocket_single_seater_1.png"
                  alt="Rocket single seater"
                  className="w-full max-w-md mx-auto lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  