import ProductsWrapper from '@/components/ProductsWrapper'
import { products } from '@/utils/data'

const Products = () => {
  return (
    <ProductsWrapper
      title={"ultimos productos"}
      products={products}
    />
  )
}

export default Products