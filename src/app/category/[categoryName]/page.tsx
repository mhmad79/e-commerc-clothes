import ProductCard from '@/components/productsCart';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

type CategoryPageProps = {
  params: {
    categoryName: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  // يجب فك تشفير params فقط بعد التأكد أنه موجود
  const decodedCategoryName = decodeURIComponent(params.categoryName);

  const res = await fetch(
    `https://fakestoreapi.com/products/category/${encodeURIComponent(decodedCategoryName)}`
  );

  const products: Product[] = await res.json();

  return (
    <section className="products py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{decodedCategoryName} Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}