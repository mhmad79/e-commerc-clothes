'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  // قائمة الفئات مع الروابط المعدلة
  const categories = [
    { name: 'Electronics', slug: 'electronics' },
    { name: 'Jewelry', slug: 'jewelery' },
    { name: "Men's Clothing", slug: "men's clothing" },
    { name: "Women's Clothing", slug: "women's clothing" },
  ]

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link className="text-2xl font-bold" href="/">
          MyStore
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } nav-transition absolute top-16 left-0 bg-gray-800 text-center py-4 md:static w-full md:w-auto md:items-center md:space-x-6 md:bg-transparent md:text-left md:p-0 md:block`}
        >
          {/* روابط الفئات */}
          {categories.map(({ name, slug }) => (
            <Link
              key={slug}
              href={`/category/${encodeURIComponent(slug)}`}
              className="block py-2 md:inline-block mx-4"
            >
              {name}
            </Link>
          ))}
          
          {/* رابط السلة */}
          <Link
            href="/cart"
            className="block py-2 md:inline-block mx-4 text-green-400"
          >
            🛒 Cart
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
