'use client';

import { useCart } from "../context/CartContext";
import Image from 'next/image';

export default function CartPage() {
  const { cartItems } = useCart();

  // نحسب التوتل هنا
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return <div className="p-6">Your cart is empty.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center mb-4 border p-4 rounded">
          {/* استخدم Image بدلاً من img */}
          <Image 
            src={item.image} 
            alt={item.title} 
            width={64} 
            height={64} 
            className="object-contain mr-4"
          />
          <div>
            <h2 className="text-lg">{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}

      {/* عرض التوتل في الأسفل */}
      <div className="mt-6 text-right text-xl font-bold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
