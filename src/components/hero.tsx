"use client"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="hero bg-cover bg-center relative text-white" style={{ backgroundImage: "url('/intro.svg')" }}>
      <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>
      <div className="container mx-auto px-4 py-32 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4" data-aos="fade-up">
          Welcome to MyStore
        </h1>
        <p className="text-xl md:text-2xl mb-6" data-aos="fade-up" data-aos-delay="300">
          Discover the best products at amazing prices.
        </p>
        <a href="#shop-now" className="btn btn-primary text-lg py-3 px-6 rounded-full shadow-lg" data-aos="fade-up" data-aos-delay="600">
          Shop Now
        </a>
      </div>
    </section>
  )
}
