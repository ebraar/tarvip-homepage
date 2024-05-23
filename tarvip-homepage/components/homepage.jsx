import { GrSchedule } from "react-icons/gr";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsBoxes } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import Image from 'next/image';

const HomeSection = () => {
    return (
        <div className="bg-blue-100 p-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl font-bold text-blue-950 mb-12">
                Binlerce Ürün Arasından İstediğiniz Ürünü Bulmak İçin Hemen Başlayın!
              </h1>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <GrSchedule className="text-blue-950 mr-3 text-2xl" />
                  <p className="text-blue-950 text-lg">En Geç 3 Gün İçinde Teslim</p>
                </li>
                <li className="flex items-center">
                  <AiOutlineGlobal className="text-blue-950 mr-3 text-2xl" />
                  <p className="text-blue-950 text-lg">ISO 9001:2015 Sertifikalı</p>
                </li>
                <li className="flex items-center">
                  <BsBoxes className="text-blue-950 mr-3 text-2xl" />
                  <p className="text-blue-950 text-lg">15'den fazla süreç, 130'dan fazla malzeme</p>
                </li>
              </ul>
              <div className="mt-8 flex justify-end">
              <button className="mt-8 bg-blue-950 text-white py-3 px-12 rounded text-xl hover:bg-blue-900">
                Hemen Başlayın
              </button>
              </div>
              <div className="mt-2 flex justify-end mr-2">
            <MdSecurity className="text-blue-950" />
            <p className="text-blue-950 text-xs">Bütün Yüklemeler Gizli ve Güvenlidir.</p>
          </div>
            </div>
            <div className="rounded-sm p-16 flex justify-center items-center relative w-full h-full">
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