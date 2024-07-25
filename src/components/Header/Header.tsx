"use client";
import logoHeader from "@/../public/assets/LogoHeader.png";
import { Button } from "../ui/button";
import Image from "next/image";
import { NavigationMenuHeader } from "./NavigationMenuHeader";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="z-10 bg-white w-full fixed top-0 xl:px-5 2xl:px-10 border-b-4 border-blueDefault text-blueFontHeader flex justify-between xl:grid xl:grid-cols-4 items-center gap-10">
      <Image src={logoHeader} alt="" />
      <div className="col-span-2 hidden xl:flex xl:items-center xl:justify-center">
        <NavigationMenuHeader />
      </div>
      <div className="flex gap-10 justify-end items-center">
        <Link target="_blank" href="https://forms.gle/hhcngM3JVNEKu5vE9">
          <Button variant="header">Inscreva-se</Button>
        </Link>
        <Button variant="header">Contrate</Button>
      </div>
    </div>
  );
};
