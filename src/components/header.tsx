'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link className="text-2xl font-bold" href="/">
          MyStore
        </Link>

        {/* زر الهامبرغر للشاشات الصغيرة */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* قائمة التنقل */}
        <nav
            className={`${
              isOpen ? 'block' : 'hidden'
            } nav-transition absolute top-16 left-0 bg-gray-800 text-center py-4 md:static w-full md:w-auto md:items-center md:space-x-6 md:bg-transparent md:text-left md:p-0 md:block`}
            
        >
          <Link href="/category/electronics" className="block py-2 md:inline-block mx-4">
            Electronics
          </Link>
          <Link href="/category/jewelery" className="block py-2 md:inline-block mx-4">
            Jewelry
          </Link>
          <Link href="/category/men's clothing" className="block py-2 md:inline-block mx-4">
            Men's Clothing
          </Link>
          <Link href="/category/women's clothing" className="block py-2 md:inline-block mx-4">
            Women's Clothing
          </Link>
          <Link href="/cart" className="block py-2 md:inline-block mx-4 text-green-400">
            🛒 Cart
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
