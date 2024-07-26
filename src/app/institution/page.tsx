import { Footer } from "@/components/Footer";
import Image from "next/image";
import imageClasa from "@/../public/assets/ImageClasaSantoAndre.jpg";
import { About } from "./About";

export default function Institution() {
  return (
    <>
      <div className="my-[92px] relative mb-80 xl:mb-96">
        <Image
          src={imageClasa}
          className="object-cover"
          alt="Imagem de ilustração do lado do swiper"
        />
        <About />
      </div>
      <Footer />
    </>
  );
}
