import ProductCard from '@/components/productsCart';
import { notFound } from 'next/navigation';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export default async function CategoryPage({ params }: { params: { categoryName: string } }) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`);

    if (!res.ok) {
      // إذا كان هناك خطأ في الاستعلام أو الفئة غير موجودة
      notFound();
      return; // لا حاجة للاستمرار في تنفيذ الكود بعد استخدام notFound()
    }

    const products: Product[] = await res.json();

    if (products.length === 0) {
      notFound(); // عرض صفحة 404 في حالة عدم وجود منتجات
      return;
    }

    return (
      <div>
        <section className="products py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{params.categoryName} Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    // التعامل مع الأخطاء الأخرى
    console.error('Error fetching category data:', error);
    notFound();
  }
}
