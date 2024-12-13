"use client";

import * as React from "react";
import DeliveryFeature from "../components/billing-detail/DeliveryFeature";
import CheckBanner from "../components/billing-detail/CheckBanner";

interface InputFieldProps {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  className?: string;
}

interface DropdownFieldProps {
  label: string;
  value: string;
  id: string;
}

interface ProductItemProps {
  name: string;
  quantity: number;
  price: string;
}

const DropdownField: React.FC<DropdownFieldProps> = ({ label, value, id }) => {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="self-start text-base font-medium text-black"
      >
        {label}
      </label>
      <div className="flex gap-5 justify-between px-5 py-4 mt-4 bg-white rounded-lg border border-solid border-neutral-400 text-neutral-400">
        <select
          id={id}
          className="w-full bg-transparent outline-none"
          aria-label={label}
        >
          <option>{value}</option>
        </select>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1ac5ba21e65fda52836aee9325e8795969b7f85c738d0e19b9a31c7e2387db?placeholderIfAbsent=true&apiKey=8f5c80c62bcc484eb4fc7a62c9e22cd5"
          alt=""
          className="object-contain w-5 h-5"
        />
      </div>
    </div>
  );
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  id,
  placeholder,
  className = "",
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label
        htmlFor={id}
        className="self-start text-base font-medium text-black"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="mt-4 h-[50px] bg-white rounded-lg border border-solid border-neutral-400 px-4 outline-none"
        aria-label={label}
      />
    </div>
  );
};

const ProductItem: React.FC<ProductItemProps> = ({ name, quantity, price }) => {
  return (
    <div className="flex flex-col gap-4 border-b border-neutral-200 pb-4">
      <div className="flex justify-between">
        <span className="font-medium text-black">{name}</span>
        <span className="text-neutral-400">x{quantity}</span>
      </div>
      <div className="flex justify-between text-black">
        <span className="font-semibold">Subtotal</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

const CheckoutUI: React.FC = () => {
  const products = [
    {
      name: "Asgaard sofa",
      quantity: 1,
      price: "Rs. 250,000.00",
    },
  ];

  return (
    <>
      <CheckBanner />
      <form
        className="flex flex-col w-full bg-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-8 px-4 py-8 md:flex-row md:px-8 lg:px-20">
          {/* Billing Details */}
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-black">
              Billing details
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="w-full md:w-1/2">
                <InputField label="First Name" id="firstName" />
              </div>
              <div className="w-full md:w-1/2">
                <InputField label="Last Name" id="lastName" />
              </div>
            </div>
            <InputField
              label="Company Name (Optional)"
              id="companyName"
              className="mt-4"
            />
            <DropdownField
              label="Country / Region"
              value="Sri Lanka"
              id="country"
            />
            <InputField label="Street address" id="street" />
            <InputField label="Town / City" id="city" />
            <DropdownField
              label="Province"
              value="Western Province"
              id="province"
            />
            <InputField label="ZIP code" id="zipCode" type="text" />
            <InputField label="Phone" id="phone" type="tel" />
            <InputField label="Email address" id="email" type="email" />
          </div>

          {/* Order Summary */}
          <div className="flex flex-col w-full md:w-1/2">
            <div className="bg-gray-50 p-6 rounded-lg">
              {products.map((product, index) => (
                <ProductItem key={index} {...product} />
              ))}
              <div className="flex justify-between mt-4 text-lg font-bold text-yellow-600">
                <span>Total</span>
                <span>{products[0].price}</span>
              </div>
              <fieldset className="mt-6">
                <legend className="sr-only">Payment Method</legend>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    id="bankTransfer"
                    name="payment"
                    className="w-4 h-4"
                    defaultChecked
                  />
                  <label htmlFor="bankTransfer" className="text-black">
                    Direct Bank Transfer
                  </label>
                </div>
                <p className="mt-2 text-sm text-neutral-400">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    className="w-4 h-4"
                  />
                  <label htmlFor="cash" className="text-black">
                    Cash On Delivery
                  </label>
                </div>
              </fieldset>
              <button
                type="submit"
                className="w-full py-3 mt-6 text-white bg-black rounded-lg"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </form>
      <DeliveryFeature />
    </>
  );
};

export default CheckoutUI;
