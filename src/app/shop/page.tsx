import ShopBanner from '../components/shop/ShopBanner'
import FilterControls from '../components/shop/FilterControl'
import ProductItems from '../components/shop/ProductItems'
import DeliveryFeature from '../components/shop/DeliveryFeature'

const Shop = () => {
  return (
    <div>
        <ShopBanner />
        <FilterControls />
        <ProductItems />
        <DeliveryFeature />
    </div>
  )
}

export default Shop