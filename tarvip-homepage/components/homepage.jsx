import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { GrSchedule } from "react-icons/gr";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBoxes } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import Image from 'next/image';

const HomeSection = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Binlerce Ürün İçinden Seçin!',
        'Kaliteli ve Güvenilir Ürünler!',
        'Hemen Başlayın ve Keşfedin!'
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-blue-100 p-4 sm:p-8 md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        <div className="order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4 animate-slideInLeft">
            <span ref={typedElement}></span>
          </h1>
          <p className="text-blue-950 mb-8 animate-slideInLeft">
            İstediğiniz ürünü kolayca bulmak için kategoriler arasında gezinebilir, özellikleri karşılaştırabilir ve en uygun seçimi yapabilirsiniz. İstediğiniz ürünü kolayca bulmak için kategoriler arasında gezinebilir, özellikleri karşılaştırabilir ve en uygun seçimi yapabilirsiniz.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center animate-slideInLeft">
              <GrSchedule className="text-blue-950 mr-2 sm:mr-3 text-xl sm:text-2xl" />
              <p className="text-blue-950 text-base sm:text-lg">En Geç 3 Gün İçinde Teslim</p>
            </li>
            <li className="flex items-center animate-slideInLeft">
              <AiOutlineGlobal className="text-blue-950 mr-2 sm:mr-3 text-xl sm:text-2xl" />
              <p className="text-blue-950 text-base sm:text-lg">ISO 9001:2015 Sertifikalı</p>
            </li>
            <li className="flex items-center animate-slideInLeft">
              <BsBoxes className="text-blue-950 mr-2 sm:mr-3 text-xl sm:text-2xl" />
              <p className="text-blue-950 text-base sm:text-lg">15'den fazla süreç, 130'dan fazla malzeme</p>
            </li>
          </ul>
          <div className="mt-8 flex justify-end">
            <button className="mt-8 bg-blue-950 text-white py-2 px-8 sm:py-3 sm:px-12 rounded text-base sm:text-xl hover:bg-blue-900">
              Hemen Başlayın
            </button>
          </div>
          <div className="mt-2 flex justify-end mr-2">
            <MdSecurity className="text-blue-950" />
            <p className="text-blue-950 text-xs sm:text-sm">Bütün Yüklemeler Gizli ve Güvenlidir.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 rounded-sm p-4 sm:p-8 md:p-16 flex justify-center items-center relative w-full h-64 sm:h-full">
          <Image 
            src="/images/resim.png" 
            alt="Example Image" 
            layout="fill" 
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
