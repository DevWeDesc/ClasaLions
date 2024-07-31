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
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export interface ISwiperPartners {
  data: string[] | StaticImageData[];
}

export default function SwiperPartners({ data }: ISwiperPartners) {
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    if (window) setCurrentPath(window?.location.pathname);
  }, []);
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        className={`mySwiperPartner`}
        slidesPerView={3}
        spaceBetween={50}
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
            width: currentPath.includes("institution") ? "100%" : "50%",
          } as React.CSSProperties
        }
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <Image
              className={`object-contain ${
                currentPath.includes("institution") ? "size-44" : "size-32"
              }`}
              alt="Imagem do carousel"
              src={data}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
