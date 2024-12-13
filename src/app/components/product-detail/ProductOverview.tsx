import * as React from "react";

const ProductOverview = () => {
  const descriptions = [
    "Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
    "Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
  ];

  const images = [
    {
      src: "product-detail/cloud sofa three seater.png",
      alt: "Product image 1",
    },
    {
      src: "product-detail/cloud sofa three seater_1.png",
      alt: "Product image 2",
    },
  ];

  type TabProps = {
    label: string;
    isActive?: boolean;
  };

  const Tab: React.FC<TabProps> = ({ label, isActive = false }) => {
    return (
      <div
        className={`flex-1 text-center cursor-pointer pb-2 border-b-2 ${
          isActive
            ? "text-black border-black"
            : "text-neutral-400 border-transparent"
        }`}
      >
        {label}
      </div>
    );
  };

  type ProductDescriptionProps = {
    description: string;
  };

  const ProductDescription: React.FC<ProductDescriptionProps> = ({
    description,
  }) => {
    return (
      <div className="mt-6 text-base text-neutral-600 max-w-full px-4 md:px-8 lg:px-16">
        {description}
      </div>
    );
  };

  type ImageGridProps = {
    images: { src: string; alt: string }[];
  };

  const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
      <div className="mt-8 w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-[#FFF9E5] p-4 rounded-lg flex justify-center items-center"
            >
              <img
                loading="lazy"
                src={image.src}
                alt={image.alt}
                className="object-contain w-full h-auto max-h-[400px] rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="border-b border-zinc-300" />

      {/* Tabs */}
      <div className="flex justify-center mt-8 gap-4 px-4 md:px-8 lg:px-16">
        <Tab label="Description" isActive={true} />
        <Tab label="Additional Information" />
        <Tab label="Reviews [5]" />
      </div>

      {/* Descriptions */}
      {descriptions.map((description, index) => (
        <ProductDescription key={index} description={description} />
      ))}

      {/* Images */}
      <ImageGrid images={images} />

      {/* Divider */}
      <div className="self-stretch mt-12 border-t border-zinc-300" />
    </div>
  );
};

export default ProductOverview;
