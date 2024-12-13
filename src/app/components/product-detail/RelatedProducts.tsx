const furnitureItems = [
  {
    img: "images/Trenton modular sofa_3 1.png",
    title: "Trenton modular sofa",
    price: "Rs. 25,000.00",
  },
  {
    img: "images/Granite dining table with dining chair 1.png",
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
  },
  {
    img: "images/Outdoor bar table and stool 1.png",
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
  },
  {
    img: "images/Plain console with teak mirror 1.png",
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
  },
];

const RelatedProducts = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium font-poppins text-center mb-4">
        Related Products
      </h2>
      <p className="text-center font-medium text-sm sm:text-base md:text-lg text-[#9F9F9F] mb-8">
        Find a bright idea to suit your taste with our great selection of
        suspension, floor, and table lights.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {furnitureItems.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center min-h-[350px] bg-white p-4 shadow-md rounded-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto mb-4 h-40 w-auto object-contain"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2">
              {item.title}
            </h3>
            <p className="text-lg sm:text-xl font-medium font-poppins text-gray-700">
              {item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="/view-more"
          className="font-poppins font-medium text-lg sm:text-xl md:text-2xl text-black underline underline-offset-8 hover:text-gray-700 transition-colors cursor-pointer"
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default RelatedProducts;
