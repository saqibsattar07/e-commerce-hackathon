import * as React from "react";

const DeliveryFeature = () => {
  const deliveryItems = [
    {
      title: "Free Delivery",
      description: "For all orders over $50, consectetur adipiscing elit.",
    },
    {
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipiscing elit.",
    },
    {
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="mt-2 px-6 py-12 md:px-20 md:py-24 w-full bg-[#FAF4F4]">
        <div className="flex flex-wrap gap-6 justify-between">
          {deliveryItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full md:w-[30%] bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-lg text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryFeature;
