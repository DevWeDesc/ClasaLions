// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import primaryImageSwiper from "@/../public/assets/PrimaryImageSwiper.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Scrollbar, Navigation } from "swiper/modules";
import Image from "next/image";

export default function SwiperGeneric() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
          enabled: true,
        }}
        modules={[Scrollbar, Navigation]}
        navigation
        className="mySwiper"
      >
        <SwiperSlide>
          <Image alt="Imagem do carousel" src={primaryImageSwiper} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="Imagem do carousel" src={primaryImageSwiper} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
