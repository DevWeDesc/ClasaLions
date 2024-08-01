import sheetSwiper from "@/../public/assets/sheetswiperr.png";
import Image from "next/image";

export const BannerSwiper = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-full xl:w-[88%] m-auto grid xl:grid-cols-2 gap-1 bg-white">
      <div className="relative flex flex-col items-center justify-center w-full text-white py-8 bg-blueDefault left-2 xl:left-0 rounded-l-3xl">
        <Image
          className="w-10 xl:w-20 absolute left-7 top-16"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute bottom-8 left-20 rotate-45"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute top-8 left-40 rotate-12"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute bottom-4 left-52 -rotate-45"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <p className="text-center text-3xl xl:text-6xl font-bold z-10">
          Mais de <br /> 15.000
        </p>
        <p className="font-semibold text-sm xl:text-lg text-center z-10">
          Jovens inseridos no <br /> mercado de <br /> trabalho
        </p>
        <Image
          className="w-10 xl:w-20 absolute top-8 right-10 rotate-45"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute top-1/2 -translate-y-1/2 right-40 rotate-90"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute bottom-4 right-16 rotate-12"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center w-full text-white py-8 bg-blueDefault right-2 xl:right-0 rounded-r-3xl">
        <Image
          className="w-10 xl:w-20 absolute left-10 bottom-16 rotate-45"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute left-32 top-4 bottom-16 rotate-12"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute left-44 top-1/2 -rotate-45"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <p className="text-center text-3xl xl:text-6xl font-bold z-10">
          Mais de <br /> 500
        </p>
        <p className="font-semibold text-sm xl:text-lg text-center z-10">
          Jovens <br /> capacitados <br /> anualmente
        </p>
        <Image
          className="w-10 xl:w-20 absolute right-7 top-16"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute bottom-8 right-20 -rotate-45"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute top-8 right-40 rotate-45"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
        <Image
          className="w-10 xl:w-20 absolute bottom-20 right-52 -rotate-90"
          src={sheetSwiper}
          alt="Imagem de folha com informações de jovens da Clasa"
        />
      </div>
    </div>
  );
};
