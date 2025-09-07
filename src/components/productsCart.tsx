// components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

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
    <div className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
      {/* Product Image */}
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="p-6 W-[300px] h-[300px] rounded-t-lg"
        />
      </div>

      {/* Product Info */}
      <div className="px-5 pb-5">
        <h5 className="text-lg font-semibold tracking-tight text-white">
          {product.title}
        </h5>

        {/* Rating */}
        <div className="flex items-center mt-2.5 mb-5">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
            5.0
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            ${product.price}
          </span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
