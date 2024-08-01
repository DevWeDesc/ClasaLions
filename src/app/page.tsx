import { BannerSwiper } from "@/components/BannerSwiper";
import { Footer } from "@/components/Footer";
import SwiperGeneric from "@/components/Swiper/SwiperGeneric";
import Image from "next/image";
import sheet from "@/../public/assets/sheet.png";
import SwiperPartners from "@/components/SwiperPartners/SwiperPartners";
import { PartnersData } from "@/data/PertnersData";

export default function Home() {
  return (
    <>
      <div className="mt-20 xl:my-32 relative mb-[440px] xl:mb-96">
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
      <div className="xl:my-32 flex flex-col items-center xl:gap-10 relative xl:mb-32">
        <p className="text-3xl xl:text-5xl text-center text-blueFontHeader font-semibold">
          Parceiros
        </p>
        <SwiperPartners data={PartnersData} />
      </div>
      <Footer sheeetsVisible />
    </>
  );
}
