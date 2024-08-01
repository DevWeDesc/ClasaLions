import { Footer } from "@/components/Footer";
import Image from "next/image";
import imageClasa from "@/../public/assets/ImageClasaSantoAndre.jpg";
import { About } from "./About";

export default function Institution() {
  return (
    <>
      <div className="mt-20 lg:mt-[92px]">
        <Image
          src={imageClasa}
          className="h-52 lg:h-auto object-cover"
          alt="Imagem de ilustração do lado do swiper"
        />
        <About />
      </div>
      <Footer sheeetsVisible={false} />
    </>
  );
}
