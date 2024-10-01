"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { FaBuildingColumns, FaCircleQuestion } from "react-icons/fa6";
import { IoIosHome, IoIosBook } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SocialMediaImpl } from "../Footer";
import { Button } from "../ui/button";

interface INavigationMenuHeader {
  hamburguerOpen: boolean;
  closedHamburguer: () => void;
}

export const NavigationMenuHeaderMobile = ({
  closedHamburguer,
}: INavigationMenuHeader) => {
  const [accordionOpened, setAccordionOpened] = React.useState(false);
  return (
    <Accordion
      type="single"
      collapsible
      className="xl:hidden relative top-0 w-full flex flex-col justify-between h-full p-2"
    >
      <div
        className={`flex flex-col gap-4 relative ${
          accordionOpened ? "top-10" : "top-24"
        }`}
      >
        <Link
          className="top-10 font-semibold text-sm py-6 border-b-2 pl-4 border-b-blueFontHeader"
          onClick={() => {
            closedHamburguer();
          }}
          href="/"
        >
          <div className="flex gap-1 items-center relative">
            <IoIosHome /> <p>Home</p>
          </div>
        </Link>
        <AccordionItem
          onClick={() => setAccordionOpened((prev) => !prev)}
          className="bg-white relative"
          value="item-2"
        >
          <AccordionTrigger className="text-blueFontHeader border-b-2 border-b-blueFontHeader">
            <p className="text-sm xl:text-xl text-left">
              <div className="flex items-center gap-1 relative">
                <IoIosBook />
                <p>Programas</p>
              </div>
            </p>
          </AccordionTrigger>
          <AccordionContent className="bg-yellowButton">
            <div className="flex flex-col gap-2">
              <Link
                onClick={() => setAccordionOpened(false)}
                className="text-sm py-1 pl-4 border-b-blueFontHeader"
                href="/programs"
              >
                Programa de integração ao mundo do trabalho - Integrar
              </Link>
              <Link
                onClick={() => setAccordionOpened(false)}
                className="text-sm py-1 pl-4 border-b-blueFontHeader"
                href="/scfv"
              >
                Serviço de convivência e fortalecimento de vínculos - SCFV
              </Link>
              <Link
                onClick={() => setAccordionOpened(false)}
                className="text-sm py-1 pl-4 border-b-blueFontHeader"
                href="/learning"
              >
                Programa de aprendizagem - Socioaprendizagem
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <Link
          className="font-semibold text-sm py-6 border-b-2 pl-4 border-b-blueFontHeader"
          onClick={() => {
            closedHamburguer();
          }}
          href="/institution"
        >
          <div className="flex gap-1 items-center">
            <FaBuildingColumns /> Institucional
          </div>
        </Link>
        <Link
          className="font-semibold text-sm py-6 border-b-2 pl-4 border-b-blueFontHeader"
          onClick={() => {
            closedHamburguer();
          }}
          href="/faq"
        >
          <div className="flex gap-1 items-center">
            <FaCircleQuestion /> Dúvidas frequentes
          </div>
        </Link>
      </div>
      {!accordionOpened && (
        <div className="grid grid-cols-2 gap-1 relative">
          <div className="flex flex-col gap-3 bg-blueFontHeader p-2 sm:text-sm rounded-3xl lg:text-base">
            <p className="text-sm text-white text-center font-bold">
              Acompanhe nosso trabalho
            </p>
            <div className="flex justify-between items-center gap-2 px-2">
              {SocialMediaImpl.map((socialMedia, index) => (
                <Link
                  className="text-yellowButton"
                  target="_blank"
                  key={index}
                  href={socialMedia.href}
                >
                  {socialMedia.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-full justify-between">
            <Link
              target="_blank"
              href="https://clasa.conectrh.com.br/p/NovoCandidato/63894819714138304"
            >
              <Button className="text-xs lg:text-base w-full" variant="header">
                Inscreva-se
              </Button>
            </Link>
            <Link target="_blank" href="https://wa.me/message/PAQSBS4A2N3UK1">
              <Button className="text-xs lg:text-base w-full" variant="header">
                Contrate
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Accordion>
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
