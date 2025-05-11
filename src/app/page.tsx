import Hero from "@/components/hero";
import ProductCard from "@/components/productsCart";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export default async function HomePage() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  const displayCount = 10;
  const randomProducts = getRandomProducts(products, displayCount);

  return (
    <div>
      <Hero />
      <section className="products py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {randomProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function getRandomProducts(products: Product[], count: number): Product[] {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}