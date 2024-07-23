// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import primaryImageSwiper from "@/../public/assets/PrimaryPartner.png";
import logoCoop from "@/../public/assets/logoCoop.jpg";
import logoGTI from "@/../public/assets/logoGTI.png";
import logoClube from "@/../public/assets/logoClube.png";
import logoWm from "@/../public/assets/logoWm.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import "./stylesSwiperPartners.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SwiperPartners() {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        className="mySwiperPartner"
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        style={
          {
            "--swiper-navigation-size": "26px",
            "--swiper-navigation-color": "#000",
          } as React.CSSProperties
        }
      >
        <SwiperSlide>
          <Image
            className="object-contain size-28"
            alt="Imagem do carousel"
            src={primaryImageSwiper}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-contain size-28 p-4"
            alt="Imagem do carousel"
            src={logoCoop}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-contain size-28"
            alt="Imagem do carousel"
            src={logoGTI}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-contain size-28"
            alt="Imagem do carousel"
            src={logoClube}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-contain size-28"
            alt="Imagem do carousel"
            src={logoWm}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
