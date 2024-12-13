import * as React from "react";

interface InstagramSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function InstagramSection({
  title = "Our Instagram",
  subtitle = "Follow our store on Instagram",
  backgroundImage = "/images/Rectangle 17.png",
}: InstagramSectionProps) {
  return (
    <div className="flex flex-col text-xl text-black rounded-none">
      <div className="relative flex flex-col justify-center items-center px-10 py-24 w-full min-h-[450px] bg-cover bg-center max-md:px-5 max-md:py-16">
        <img
          loading="lazy"
          src={backgroundImage}
          alt="Instagram Background"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="relative flex flex-col items-center text-center max-w-full w-[454px] max-md:mb-2.5">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 max-md:text-3xl">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
            {subtitle}
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 mt-5 bg-pink-200 text-black font-medium rounded-full w-[220px] sm:w-[255px] max-md:px-5"
            role="button"
            tabIndex={0}
          >
            Follow Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default InstagramSection;
