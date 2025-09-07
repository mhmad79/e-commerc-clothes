import ProductCard from '@/components/productsCart';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

type Props = {
  params: Promise<{
    categoryName: string;
  }>;
};

// دالة لتوليد المسارات الثابتة
export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories: string[] = await res.json();
  return categories.map((cat) => ({ categoryName: cat }));
}

export default async function CategoryPage({ params }: Props) {
  // انتظار params لأنّه تم تحويله إلى Promise في App Router
  const { categoryName } = await params;

  // فك تشفير اسم الفئة
  const decodedCategoryName = decodeURIComponent(categoryName);

  // جلب المنتجات الخاصة بالفئة من الـ API
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${encodeURIComponent(decodedCategoryName)}`
  );

  if (!res.ok) {
    throw new Error("فشل في جلب المنتجات");
  }

  const products: Product[] = await res.json();

  return (
    <section className="products py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{decodedCategoryName} Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}