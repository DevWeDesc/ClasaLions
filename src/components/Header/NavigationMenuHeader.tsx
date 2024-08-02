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
import process from "process";

interface INavigationMenuHeader {
  hamburguerOpen: boolean;
  closedHamburguer: () => void;
}

export const NavigationMenuHeader = ({
  hamburguerOpen,
  closedHamburguer,
}: INavigationMenuHeader) => {
  const [navSelect, setNavSelected] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href.substring(
        process.env.NEXT_PUBLIC_URL_DEV?.length as number
      );
      setNavSelected(currentUrl);
    }
  }, []);

  const conditionalStyle = (href: string) => navSelect === href;

  return (
    <NavigationMenu className="hidden w-full h-full xl:flex flex-col items-center justify-center">
      <NavigationMenuList className="flex-col gap-10  xl:flex-row lg:text-center">
        <NavigationMenuItem>
          <Link
            onClick={() => {
              setNavSelected("/");
              closedHamburguer();
            }}
            href="/"
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                conditionalStyle("/") && "text-yellowButton"
              }`}
            >
              <div className="flex gap-1 items-center relative">
                <IoIosHome /> <p>Home</p>
                {conditionalStyle("/") && (
                  <div className="absolute w-4/5 left-1/2 -bottom-6 -translate-x-1/2 h-1 rounded-full bg-yellowButton"></div>
                )}
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${conditionalStyle("/programs") && "text-yellowButton"}`}
        >
          <NavigationMenuTrigger>
            <div className="flex items-center gap-1 relative">
              <IoIosBook />
              <p>Programas</p>
              {conditionalStyle("/programs") && (
                <div className="absolute w-4/5 left-1/2 -bottom-6 -translate-x-1/2 h-1 rounded-full bg-yellowButton"></div>
              )}
            </div>
            <NavigationMenuContent className="bg-yellowButton border-b-4 border-b-blueDefault">
              <ul className="flex flex-col w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[570px] text-blueFontHeader">
                <ListItem
                  onClick={() => {
                    setNavSelected("/programs");
                    closedHamburguer();
                  }}
                  href="/programs"
                  className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
                >
                  Programa de integração ao mundo do trabalho - Integrar
                </ListItem>
                <ListItem
                  onClick={() => {
                    setNavSelected("/programs");
                    closedHamburguer();
                  }}
                  href="/scfv"
                  className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
                >
                  Serviço de convivência e fortalecimento de vínculos - SCFV
                </ListItem>
                <ListItem
                  onClick={() => {
                    setNavSelected("/programs");
                    closedHamburguer();
                  }}
                  href="/learning"
                  className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
                >
                  Programa de aprendizagem - Socioaprendizagem
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link onClick={closedHamburguer} href="/institution">
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
          <NavigationMenuContent className="bg-yellowButton border-b-4 border-b-blueDefault">
            <ul className="flex flex-col w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2 lg:w-[570px] text-blueFontHeader">
              <ListItem
                onClick={closedHamburguer}
                href="/faq"
                className="hover:bg-white/10 cursor-pointer text-blueFontHeader font-semibold"
              >
                FAQ/Dúvidas frequentes
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
