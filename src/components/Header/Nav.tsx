"use client";
import { ReactElement, useState } from "react";
import { FaBuildingColumns, FaCircleQuestion } from "react-icons/fa6";
import { IoIosBook, IoIosHome } from "react-icons/io";

interface INavData {
  icon: ReactElement;
  text: string;
}
const navData: INavData[] = [
  { icon: <IoIosHome />, text: "Home" },
  { icon: <IoIosBook />, text: "Programas" },
  { icon: <FaBuildingColumns />, text: "Institucional" },
  { icon: <FaCircleQuestion />, text: "Dúvidas frequentes" },
];

export const NavGeneric = () => {
  const [navSelected, setNavSelected] = useState("Home");

  return (
    <div className="w-full flex items-center justify-center xl:gap-16 2xl:gap-32">
      {navData.map((data, index) => (
        <div
          onClick={() => setNavSelected(data.text)}
          key={index}
          className={`transition-all flex items-center gap-1 cursor-pointer relative ${
            navSelected === data.text && "text-yellowButton"
          }`}
        >
          {data.icon} <p className="font-semibold">{data.text}</p>
          {navSelected === data.text && (
            <div className="absolute h-1 w-3/4 rounded-full bg-yellowButton -bottom-7 left-1/2 -translate-x-1/2 transition-all" />
          )}
        </div>
      ))}
    </div>
  );
};

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

export function Nav() {
  const [navSelected, setNavSelected] = useState("Home");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                navSelected === "Home" && "text-yellowButton"
              }`}
            >
              <div className="flex gap-1 items-center">
                <IoIosHome /> Home
              </div>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex items-center gap-1">
              <IoIosBook />
              Programas
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-yellowButton border-b-4 border-b-blueDefault">
            <ul className="flex flex-col w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[570px] text-blueFontHeader">
              <ListItem
                href=""
                className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
              >
                Programa de integração ao mundo do trabalho - Integrar
              </ListItem>
              <ListItem
                href=""
                className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
              >
                Serviço de convivência e fortalecimento de vínculos - SCFV
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex gap-1 items-center">
                <FaBuildingColumns /> Institucional
              </div>
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex gap-1 items-center">
              <FaCircleQuestion /> Dúvidas frequentes
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className=" bg-yellowButton border-b-4 border-b-blueDefault">
            <ul className="flex flex-col w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[570px] text-blueFontHeader">
              <ListItem
                href=""
                className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
              >
                Programa de integração ao mundo do trabalho - Integrar
              </ListItem>
              <ListItem
                href=""
                className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
              >
                Serviço de convivência e fortalecimento de vínculos - SCFV
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
