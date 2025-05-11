// components/ProductCard.tsx
import Image from 'next/image'; // تعديل هنا لاستيراد Image من next/image
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;

};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white flex flex-col items-center justify-between rounded shadow p-4">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="object-contain mb-4"
        layout="intrinsic"      />
        <div>
          <h3 className="font-bold">{product.title}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p>${product.price}</p>
          <Link href={`/product/${product.id}`} className="btn btn-primary mt-4">
            View Details
          </Link>
        </div>
      
      
    </div>
  );
};

export default ProductCard;


