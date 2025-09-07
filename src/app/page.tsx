import Carousel from "@/components/carousel";
import Hero from "@/components/hero";
import ProductCard from "@/components/productsCart";
import Products from "./product/page";



export default async function HomePage() {
  

  return (
    <div>
      <Carousel />
      <Products />
    </div>
  );
}

