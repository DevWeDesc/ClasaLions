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
  data: string[] | StaticImageData[] | any[];
}

export default function SwiperPartners({ data }: ISwiperPartners) {
  const [currentPath, setCurrentPath] = useState("");
  const [matches, setMatches] = useState<any>();
  const conditionWidth =
    currentPath.includes("institution") || matches ? "100%" : "60%";

  useEffect(() => {});
  useEffect(() => {
    if (window) {
      setCurrentPath(window?.location.pathname);

      const mediaMatch = window && window.matchMedia("(max-width: 1080px)");
      setMatches(mediaMatch.matches);
      const handler = (e: any) => setMatches(e.matches);
      return () => mediaMatch.removeListener(handler);
    }
  }, []);
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        className={`mySwiperPartner`}
        slidesPerView={matches ? 2 : 3}
        spaceBetween={50}
        centeredSlides={matches ? false : true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        style={
          {
            "--swiper-navigation-size": "26px",
            "--swiper-navigation-color": "#000",
            width: conditionWidth,
            alignItems: "center",
            justifyContent: "center",
          } as React.CSSProperties
        }
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <Image
              className={`object-contain ${
                currentPath.includes("institution") ? "h-36" : "h-32"
              } ${data?.src.toString().includes("Coop") ? "p-4" : "p-0"}`}
              alt="Imagem do carousel"
              src={data}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
