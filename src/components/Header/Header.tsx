import logoHeader from "@/../public/assets/LogoHeader.png";
import { Nav } from "./Nav";
import { Button } from "../ui/button";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="z-10 bg-white w-full fixed top-0 xl:px-5 2xl:px-10 border-b-4 border-blueDefault text-blueFontHeader flex justify-between xl:grid xl:grid-cols-4 items-center gap-10">
      <Image src={logoHeader} alt="" />
      <div className="col-span-2 hidden xl:flex xl:items-center xl:justify-center">
        <Nav />
      </div>
      <div className="flex gap-10 justify-end items-center">
        <Button variant="header">Inscreva-se</Button>
        <Button variant="header">Contrate</Button>
      </div>
    </div>
  );
};
