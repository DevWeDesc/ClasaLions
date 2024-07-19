// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import primaryImageSwiper from "@/../public/assets/PrimaryImageSwiper.png";
import secondaryImageSwiper from "@/../public/assets/SecondaryImageSwiper.png";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./stylesSwiper.css";

import { Scrollbar, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function SwiperGeneric() {
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#1C4F9C",
            "--swiper-pagination-progressbar-size": "100%",
            "--swiper-pagination-bullet-border-radius": "5%",
            "--swiper-pagination-bullet-inactive-color": "#FFF",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-width": "180px",
            "--swiper-pagination-bullet-height": "4px",
            "--swiper-pagination-bullet-horizontal-gap": "20px",
            "--swiper-pagination-bottom": "-2px",
            "--swiper-navigation-sides-offset": "15px",
            "--swiper-navigation-color": "#013773",
            "--swiper-navigation-size": "20px",
          } as React.CSSProperties
        }
        pagination={{
          clickable: true,
        }}
        spaceBetween={100}
        navigation
        modules={[Scrollbar, Navigation, Scrollbar, Pagination]}
        className="mySwiperWithBanner"
      >
        <SwiperSlide>
          <Image alt="Imagem do carousel" src={primaryImageSwiper} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="Imagem do carousel" src={secondaryImageSwiper} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
