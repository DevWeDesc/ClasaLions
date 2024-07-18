"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FaBuildingColumns, FaCircleQuestion } from "react-icons/fa6";
import { IoIosHome, IoIosBook } from "react-icons/io";

export const NavigationMenuHeader = () => {
  const [navSelected, setNavSelected] = React.useState(["Home"]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                navSelected.includes("Home") && "text-yellowButton"
              }`}
            >
              <div className="flex gap-1 items-center relative">
                <IoIosHome /> <p> Home</p>
                {navSelected.includes("Home") && (
                  <div className="absolute w-4/5 left-1/2 -bottom-6 -translate-x-1/2 h-1 rounded-full bg-yellowButton"></div>
                )}
              </div>
            </NavigationMenuLink>
          </Link>
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
                href="/"
                className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
              >
                Programa de integração ao mundo do trabalho - Integrar
              </ListItem>
              <ListItem
                href="/"
                className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
              >
                Serviço de convivência e fortalecimento de vínculos - SCFV
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex gap-1 items-center">
                <FaBuildingColumns /> Institucional
              </div>
            </NavigationMenuLink>
          </Link>
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
                href="/"
                className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
              >
                Programa de integração ao mundo do trabalho - Integrar
              </ListItem>
              <ListItem
                href="/"
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
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
