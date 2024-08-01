"use client";
import logoHeader from "@/../public/assets/LogoHeader.png";
import { Button } from "../ui/button";
import Image from "next/image";
import { NavigationMenuHeader } from "./NavigationMenuHeader";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [hamburguerOpen, setHamburguerOpen] = useState(false);
  return (
    <div className="z-10 bg-white w-full fixed top-0 xl:px-5 2xl:px-10 border-b-4 border-blueDefault text-blueFontHeader grid grid-cols-3 place-items-center xl:grid-cols-4 items-center gap-10">
      <Image
        src={logoHeader}
        className="object-contain h-20 xl:h-28"
        alt="Logo"
      />
      {hamburguerOpen && (
        <div className="fixed h-screen w-screen top-0 bottom-0 backdrop-brightness-50" />
      )}
      <div
        className={`lg:col-span-2 ${
          hamburguerOpen
            ? "fixed h-screen w-[80%] top-0 right-0 bg-white rounded-tl-3xl transition-all flex justify-center items-center"
            : "hidden xl:flex xl:items-center xl:justify-center"
        }`}
      >
        <NavigationMenuHeader
          closedHamburguer={() => setHamburguerOpen(false)}
          hamburguerOpen={hamburguerOpen}
        />
      </div>

      <div className="w-full flex gap-10 justify-center lg:justify-end items-center">
        <Link target="_blank" href="https://forms.gle/hhcngM3JVNEKu5vE9">
          <Button className="text-xs lg:text-base" variant="header">
            Inscreva-se
          </Button>
        </Link>
        <Link target="_blank" href="https://wa.me/message/PAQSBS4A2N3UK1">
          <Button
            className="hidden lg:block text-xs lg:text-base"
            variant="header"
          >
            Contrate
          </Button>
        </Link>
      </div>
      <div
        onClick={() => setHamburguerOpen((prev) => !prev)}
        className={`xl:hidden w-8 flex flex-col gap-1 relative cursor-pointer ${
          hamburguerOpen && "bg-blueDefault w-14 h-14 rounded-full"
        }`}
      >
        <div
          className={`transition-all h-1 rounded-lg  ${
            hamburguerOpen
              ? "rotate-45 top-1/2 -translate-y-1/2 absolute w-8 bg-white left-1/2 -translate-x-1/2"
              : "w-full bg-blueFontHeader"
          }`}
        />
        <div
          className={`h-1 w-full rounded-lg bg-blueFontHeader ${
            hamburguerOpen && "hidden"
          }`}
        />
        <div
          className={`transition-all h-1 rounded-lg ${
            hamburguerOpen
              ? "-rotate-45 top-1/2 -translate-y-1/2 absolute w-8 bg-white left-1/2 -translate-x-1/2"
              : "w-full bg-blueFontHeader"
          }`}
        />
      </div>
    </div>
  );
};
