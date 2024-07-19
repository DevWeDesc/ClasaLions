// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import primaryImageSwiper from "@/../public/assets/PrimaryPartner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import "./stylesSwiperPartners.css";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function SwiperPartners() {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        className="mySwiperPartner"
        slidesPerView={3}
        spaceBetween={30}
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
            className="object-contain size-28"
            alt="Imagem do carousel"
            src={primaryImageSwiper}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-contain size-28"
            alt="Imagem do carousel"
            src={primaryImageSwiper}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-contain size-28"
            alt="Imagem do carousel"
            src={primaryImageSwiper}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-contain size-28"
            alt="Imagem do carousel"
            src={primaryImageSwiper}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
