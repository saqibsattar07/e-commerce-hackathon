"use client";

import CartBanner from "../components/cart/CartBanner";
import DeliveryFeature from "../components/cart/DeliveryFeatures";

interface CartItemProps {
  image: string;
  name: string;
  price: string;
  quantity: number;
  subtotal: string;
}

interface CartTotalsProps {
  subtotal: string;
  total: string;
}

export default function Cart() {
  const cartItems = [
    {
      image: "images/Asgaard sofa 1.png",
      name: "Asgaard sofa",
      price: "Rs. 250,000.00",
      quantity: 1,
      subtotal: "Rs. 250,000.00",
    },
  ];

  const CartTotals = ({ subtotal, total }: CartTotalsProps) => (
    <div className="flex flex-col px-20 pt-4 pb-20 mx-auto w-full bg-yellow-50 max-md:px-5 max-md:mt-10">
      <h2 className="self-center text-3xl font-semibold text-black">
        Cart Totals
      </h2>
      <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
        <div className="flex flex-col self-start text-base font-medium text-black whitespace-nowrap">
          <div>Subtotal</div>
          <div className="self-start mt-8">Total</div>
        </div>
        <div className="flex flex-col">
          <div className="self-end text-base text-neutral-400">{subtotal}</div>
          <div className="mt-8 text-xl font-medium text-yellow-600">
            {total}
          </div>
        </div>
      </div>
      <button
        className="px-14 py-4 mt-11 mr-2.5 ml-3 text-xl text-black rounded-2xl border border-black border-solid max-md:px-5 max-md:mt-10 max-md:ml-2.5"
        onClick={() => alert("Checking out...")}
      >
        Check Out
      </button>
    </div>
  );

  const CartItem = ({
    image,
    name,
    price,
    quantity,
    subtotal,
  }: CartItemProps) => (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-9 text-base text-neutral-400 max-md:mt-10">
          <img
            loading="lazy"
            src={image}
            alt={name}
            className="object-contain shrink-0 max-w-full rounded-none aspect-square w-[106px]"
          />
          <div className="grow shrink my-auto w-[87px]">{name}</div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
        <div className="flex gap-10 self-stretch my-auto text-base text-black max-md:mt-10 max-md:max-w-full">
          <div className="my-auto basis-auto text-neutral-400">{price}</div>
          <div className="px-3.5 py-1 whitespace-nowrap rounded-md border border-solid border-neutral-400">
            {quantity}
          </div>
          <div className="my-auto basis-auto">{subtotal}</div>
          <button
            aria-label="Remove item"
            className="object-contain shrink-0 self-start w-7 aspect-square"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/8f5c80c62bcc484eb4fc7a62c9e22cd5/96554a9f86bd3fd8c39408fbbd8fa8ea76b10f4a501e0797d8eeff82580216d1?apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5&"
              alt="Remove"
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <CartBanner />
      <div className="flex flex-col rounded-none">
        <div className="px-20 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col justify-center items-center px-16 py-4 w-full text-base font-medium text-black whitespace-nowrap bg-yellow-50 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-wrap gap-5 justify-between max-w-full w-[529px]">
                    <div>Product</div>
                    <div>Price</div>
                    <div className="flex gap-9">
                      <div>Quantity</div>
                      <div>Subtotal</div>
                    </div>
                  </div>
                </div>
                <div className="mt-14 mr-6 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  {cartItems.map((item, index) => (
                    <CartItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <CartTotals subtotal="Rs. 250,000.00" total="Rs. 250,000.00" />
            </div>
          </div>
        </div>
      </div>
      <DeliveryFeature />
    </div>
  );
}
