import logoFooter from "@/../public/assets/LogoFooter.png";
import sheetFooter from "@/../public/assets/sheetFooter.png";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FooterSheets } from "./FooterSheets";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="relative w-full flex justify-between font-semibold bg-blueDefault px-24 py-10 text-white">
      <Image src={sheetFooter} className="absolute -top-20 -left-48" alt="" />
      <Image src={logoFooter} alt="" />
      <div className="z-10">
        <p>Avenida Dom Jorge Marcos de Oliveira n° 50</p>
        <p>Vila Guiomar - Santo André - SP</p>
        <p>4428-7932</p>
        <p>clasa@clasa.org.br</p>
      </div>
      <div className="flex flex-col gap-3">
        <p>Acompanhe nosso trabalho</p>
        <div className="flex justify-center items-center gap-2">
          <FiInstagram className="text-2xl" />
          <FiFacebook className="text-2xl" />
          <FiLinkedin className="text-2xl" />
        </div>
      </div>
      <Image
        src={sheetFooter}
        className="absolute -top-20 -right-48 rotate-[115deg] bg-blue"
        alt=""
      />

      <FooterSheets />
    </div>
  );
};
