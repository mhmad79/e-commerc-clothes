"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from '@/app/context/CartContext';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const [cartStatus, setCartStatus] = useState("");
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });

    setCartStatus('✅ تم إضافة المنتج إلى السلة!');
    setTimeout(() => setCartStatus(''), 3000);
  };

  return (
    <div className="w-full max-w-sm bg-gray-900 border border-gray-800 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
      {/* Product Image */}
        <div className="flex justify-center cursor-pointer">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="p-6 w-[300px] h-[300px] rounded-t-lg"
          />
        </div>

      {/* Product Info */}
      <div className="px-5 pb-5">
        <h5 className="text-lg font-semibold tracking-tight max-h-7 text-white">
          {product.title}
        </h5>

        {/* Rating & Price */}
<div className="flex items-center justify-between mt-16 mb-5">
  {/* النجوم */}
  <div className="flex items-center">
    {Array(4).fill(0).map((_, i) => (
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

  {/* السعر */}
  <span className="text-2xl font-semibold text-white">${product.price}</span>
</div>


      
        <div className="flex flex-col gap-3">
          <button
            onClick={(e) => {
              e.preventDefault(); 
              handleAddToCart();
            }}
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Add to Cart
          </button>

          {cartStatus && (
            <div className="mt-2 text-green-400 font-medium">{cartStatus}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
