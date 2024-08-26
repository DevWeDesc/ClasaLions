"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion,
} from "@/components/ui/accordion";
import { FaQuestion } from "react-icons/fa6";

export function AccordionGeneric() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-6">
      <AccordionItem className="bg-blueDefault  relative" value="item-1">
        <AccordionTrigger>
          <p className="text-sm lg:text-2xl text-left">
            Como ser um
            <br />
            jovem aprendiz <br />
            pela Clasa?
          </p>
          <FaQuestion className="size-10 lg:size-20 p-2 absolute right-1/4 lg:right-1/3 text-blueDefault bg-white rounded-full" />
        </AccordionTrigger>
        <AccordionContent className="bg-yellowButton">
          Atender aos requisitos: idade 17 a 22, disponibilidade de horário e
          ter participado do programa integrar.
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-blueDefault  relative" value="item-2">
        <AccordionTrigger>
          <p className="text-sm lg:text-xl text-left">
            Entrei para o programa <br /> integrar, é certeza que <br /> serei
            empregado?
          </p>
          <FaQuestion className="size-10 lg:size-20 p-2 absolute right-1/4 lg:right-1/3 text-blueDefault bg-white rounded-full" />
        </AccordionTrigger>
        <AccordionContent className="bg-yellowButton">
          O Programa Integrar tem como objetivo capacitar os jovens para o mundo
          do trabalho, sendo o primeiro passo para o primeiro emprego do jovem.
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-blueDefault  relative" value="item-3">
        <AccordionTrigger>
          <p className="text-sm lg:text-xl text-left">
            Precisa estar <br /> estudando para <br /> participar?
          </p>
          <FaQuestion className="size-10 lg:size-20 p-2 absolute right-1/4 lg:right-1/3 text-blueDefault bg-white rounded-full" />
        </AccordionTrigger>
        <AccordionContent className="bg-yellowButton">
          Sim, é necessário estar estudando no período noturno ou ter concluído
          o ensino médio.
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-blueDefault  relative" value="item-4">
        <AccordionTrigger>
          <p className="text-sm lg:text-xl text-left">
            Como me <br /> inscrevo?
          </p>
          <FaQuestion className="size-10 lg:size-20 p-2 absolute right-1/4 lg:right-1/3 text-blueDefault bg-white rounded-full" />
        </AccordionTrigger>
        <AccordionContent className="bg-yellowButton">
          As inscrições são realizadas através do nosso site pelo botão
          inscreva-se. Obs: não realizamos mais inscrições presenciais.
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="bg-blueDefault relative">
        <AccordionTrigger>
          <p className="text-sm lg:text-xl text-left">
            Ainda estou <br /> com dúvidas
          </p>
          <FaQuestion className="size-10 lg:size-20 p-2 absolute right-1/4 lg:right-1/3 text-blueDefault bg-white rounded-full" />
        </AccordionTrigger>
        <AccordionContent className="bg-yellowButton">
          Ligue no número (11) 4428-7932 ou Fale no whatsapp (11) 97399-1689
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
