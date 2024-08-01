// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import primaryImageSwiper from "@/../public/assets/PrimaryImageSwiper.jpg";
import secondaryImageSwiper from "@/../public/assets/SecondaryImageSwiper.jpg";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

import "./stylesSwiper.css";

import { Scrollbar, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SwiperGeneric() {
  const [matches, setMatches] = useState<any>();

  useEffect(() => {
    if (window) {
      const mediaMatch = window && window.matchMedia("(max-width: 1080px)");
      setMatches(mediaMatch.matches);
      const handler = (e: any) => setMatches(e.matches);
      return () => mediaMatch.removeListener(handler);
    }
  });

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
            "--swiper-pagination-bullet-width": "30%",
            "--swiper-pagination-bullet-height": "4px",
            "--swiper-pagination-bullet-horizontal-gap": matches
              ? "10px"
              : "20px",
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
        navigation={matches ? false : true}
        modules={[Scrollbar, Navigation, Scrollbar, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="mySwiperWithBanner"
      >
        <SwiperSlide>
          <Image
            className="object-contain"
            alt="Imagem do carousel"
            src={primaryImageSwiper}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="object-contain"
            alt="Imagem do carousel"
            src={secondaryImageSwiper}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
