"use client";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image"; 
import styles from './ProductSlider.module.css'; // Stiller için ek dosya

export default function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/data/slidableServices.json");
        if (!res.ok) {
          throw new Error("Veri alımı başarısız");
        }
        const data = await res.json();
        setProducts(data);
        setIsLoaded(true);
      } catch (err) {
        setError(err.message);
        setIsLoaded(true);
      }
    };

    fetchProducts();
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-w-7xl">
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className="lg:flex lg:flex-col items-center justify-center w-full mx-auto lg:px-12">
      <Splide
        options={{
          type: "loop",
          perPage: 6,
          perMove: 1,
          pagination: false,
          rewind: true,
          arrows: true,
          gap: "1rem",
          padding: "1rem",
          breakpoints: {
            1200: { perPage: 5, gap: "0.5rem", padding: "0.5rem" },
            991: { perPage: 4, gap: "0.5rem", padding: "0.5rem" },
            768: { perPage: 2, gap: "0.5rem", padding: "0.5rem" },
            640: { 
              perPage: 2,
              perMove: 2,
              direction: 'ltr', // mobilde yatay yönlendirme
              height: 'auto',
              gap: "0.5rem",
              padding: "0.5rem",
            },
          },
        }}
        aria-label="Ürün Galerisi"
        className={`w-full ${styles.splide}`} // Özel stil sınıfı
      >
        {products.map((product) => (
          <SplideSlide key={product.id} className="flex justify-center mb-4 ">
            <div className="flex flex-row md:flex-col grid justify-center lg:justify-between items-center border rounded-lg font-sans h-full p-2 bg-blue-900 w-full md:max-w-sm lg:max-w-xs xl:max-w-xs">
              <div className="flex flex-col items-center gap-y-2 md:w-full">
                <div className="flex justify-center items-center w-24 lg:w-44 h-20 md:h-40 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start md:items-center md:w-full pl-4 md:pl-0">
                <div className="lg:flex flex-row md:flex-col justify-between items-center w-full">
                  <p className="font-semibold text-blue-50 lg:text-lg lg:mt-2 mr-2 md:mr-0 md:mb-2 h-12 mt-2">
                    {product.title}
                  </p>
                  <button className="text-blue-50 px-2 py-1 rounded w-auto md:w-full">İncele</button>
                </div>
                <div className="hidden md:block mt-2">
                  <button className="bg-blue-50 text-blue-900 font-bold px-2 py-1 rounded w-full">Teklif Verin</button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
