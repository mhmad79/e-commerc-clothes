// components/ProductCard.tsx
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-2" />
      <h3 className="font-bold">{product.title}</h3>
      <p>${product.price}</p>
      <Link href={`/product/${product.id}`} className="btn btn-primary mt-4">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
