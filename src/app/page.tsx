import { BannerSwiper } from "@/components/BannerSwiper";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import SwiperGeneric from "@/components/Swiper/SwiperGeneric";
import Image from "next/image";
import sheet from "@/../public/assets/sheet.png";
import SwiperPartners from "@/components/SwiperPartners/SwiperPartners";

export default function Home() {
  return (
    <div className="relative h-full overflow-hidden">
      <Header />
      <div className="my-32 relative mb-80 xl:mb-96">
        <Image
          className="absolute left-10"
          src={sheet}
          alt="Imagem de ilustração do lado do swiper"
        />
        <SwiperGeneric />
        <BannerSwiper />
        <Image
          className="absolute right-10 bottom-[5%] rotate-[170deg]"
          src={sheet}
          alt="Imagem de ilustração do lado do swiper"
        />
      </div>
      <div className="my-32 flex flex-col items-center gap-10 relative mb-32 xl:mb-32">
        <p className="text-5xl text-center text-blueFontHeader font-semibold">
          Parceiros
        </p>
        <SwiperPartners />
      </div>
      <Footer />
    </div>
  );
}
