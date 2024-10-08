import logoFooter from "@/../public/assets/LogoFooter.png";
import sheetFooter from "@/../public/assets/sheetFooter.png";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FooterSheets } from "./FooterSheets";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface SocialMedia {
  icon: ReactElement;
  href: string;
}

export const SocialMediaImpl: SocialMedia[] = [
  {
    href: "https://www.instagram.com/clasa.oficial?igsh=MTR0MWZtN2NwZ2Rjcg==",
    icon: <FiInstagram className="text-2xl hover:text-white/85" />,
  },
  {
    href: "https://www.facebook.com/share/UZHDV4EKZe1LPqJ2/?mibextid=qi2Omg",
    icon: <FiFacebook className="text-2xl hover:text-white/85" />,
  },
  {
    href: "https://www.linkedin.com/company/clasalions/",
    icon: <FiLinkedin className="text-2xl hover:text-white/85" />,
  },
];

interface IFooter {
  sheeetsVisible: boolean;
}

export const Footer = ({ sheeetsVisible }: IFooter) => {
  return (
    <div className="relative w-full flex gap-10 xl:gap-0 justify-between font-semibold bg-blueDefault xl:px-24 py-10 text-white">
      <Image
        src={logoFooter}
        alt="Logo do rodapé"
        className="size-16 xl:size-32"
      />
      <div className="z-10 text-[10px] sm:text-xs lg:text-base">
        <p>Avenida Dom Jorge Marcos de Oliveira n° 50</p>
        <p>Vila Guiomar - Santo André - SP</p>
        <p>4428-7932</p>
        <p>clasa@clasa.org.br</p>
      </div>
      <div className="flex flex-col gap-3  text-[10px] sm:text-xs lg:text-base">
        <p>Acompanhe nosso trabalho</p>
        <div className="flex justify-center items-center gap-2">
          {SocialMediaImpl.map((socialMedia, index) => (
            <Link target="_blank" key={index} href={socialMedia.href}>
              {socialMedia.icon}
            </Link>
          ))}
        </div>
      </div>

      {sheeetsVisible && (
        <>
          <Image
            src={sheetFooter}
            className="hidden xl:block absolute -top-20 -left-48"
            alt=""
          />
          <Image
            src={sheetFooter}
            className="hidden xl:block absolute -top-20 -right-48 rotate-[115deg] bg-blue"
            alt="Logo rodapé"
          />{" "}
        </>
      )}

      <FooterSheets />
    </div>
  );
};
