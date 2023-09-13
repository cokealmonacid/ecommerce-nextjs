import { products } from '@/utils/data'
import { Category, Product } from '@/utils/interfaces'
import ProductsWrapper from '@/components/ProductsWrapper'
import { getData } from '@/utils/services'

const Categories = async ({ params }: { params: {slug: string} }) => {
  const categories: Category[] = await getData('categories')
  console.log(categories)
  const category = categories.filter((category: Category) => category.slug === params.slug )[0];
  const productsByCategory = products.filter((product: Product) => product.category_id === category.id);

  return (
    <ProductsWrapper
      title={category.title}
      products={productsByCategory}
    />
  )
}

export default Categories