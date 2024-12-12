import ShopBanner from "../components/shop/ShopBanner";
import FilterControls from "../components/shop/FilterControl";
import ProductItems from "../components/shop/ProductItems";
import DeliveryFeature from "../components/shop/DeliveryFeature";

const Shop = () => {
  return (
    <>
      <ShopBanner />
      <FilterControls />
      <ProductItems />
      <DeliveryFeature />
    </>
  );
};

export default Shop;
