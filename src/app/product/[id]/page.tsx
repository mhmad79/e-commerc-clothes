'use client';

import { useCart } from '@/app/context/CartContext';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [cartStatus, setCartStatus] = useState<string>(''); // لتخزين حالة السلة (تمت الإضافة)

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((data: Product) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });

      // تحديث حالة السلة
      setCartStatus('تم إضافة المنتج إلى السلة!');

      // بعد 3 ثوانٍ، اختفاء الرسالة
      setTimeout(() => {
        setCartStatus('');
      }, 3000); // الرسالة ستختفي بعد 3 ثوانٍ
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        {/* استخدام Flexbox لتنسيق الصورة والنص */}
        <div className="flex items-center justify-between mb-8">
          {/* عرض الصورة على اليمين */}
          <div className="flex-shrink-0 mr-8">
            <Image
              src={product.image}
              alt={product.title}
              width={256} // عرض الصورة
              height={256} // ارتفاع الصورة
              className="object-contain"
              unoptimized={false} // تحسين الصورة
            />
          </div>
          
          {/* النص على اليسار */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <button
              onClick={handleAddToCart}
              className="mt-4 btn btn-primary"
            >
              Add to Cart
            </button>

            {/* عرض رسالة عندما يتم إضافة المنتج إلى السلة */}
            {cartStatus && (
              <div className="mt-4 text-green-600 font-semibold">{cartStatus}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
