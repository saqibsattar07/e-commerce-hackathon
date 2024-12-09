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
      <div className="px-20 py-24 w-full bg-red-50 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {deliveryItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow max-md:mt-10">
                <div className="self-start text-3xl font-medium text-black">
                  {item.title}
                </div>
                <div className="text-xl text-neutral-400">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryFeature;
