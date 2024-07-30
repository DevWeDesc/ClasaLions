"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion,
} from "@/components/ui/accordion";

export function AccordionGeneric() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-6">
      <AccordionItem className="relative" value="item-1">
        <AccordionTrigger>
          <p className="text-left">
            Como ser um
            <br />
            jovem aprendiz <br />
            pela Clasa?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Atender aos requisitos: idade 17 a 22, disponibilidade de horário e
          ter participado do programa integrar.
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="relative" value="item-2">
        <AccordionTrigger>
          <p className="text-left">
            Entrei para o programa <br /> integrar, é certeza que <br /> serei
            empregado?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          O Programa Integrar tem como objetivo capacitar os jovens para o mundo
          do trabalho, sendo o primeiro passo para o primeiro emprego do jovem.
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="relative" value="item-3">
        <AccordionTrigger>
          <p className="text-left">
            Precisa estar <br /> estudando para <br /> participar?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Sim, é necessário estar estudando no período noturno ou ter concluído
          o ensino médio.
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="relative" value="item-4">
        <AccordionTrigger>
          <p className="text-left">
            Como me <br /> inscrevo?
          </p>
        </AccordionTrigger>
        <AccordionContent>
          As inscrições são realizadas através do nosso site pelo botão
          inscreva-se. Obs: não realizamos mais inscrições presenciais.
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="relative">
        <AccordionTrigger>
          <p className="text-left">
            Ainda estou <br /> com dúvidas
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Ligue no número (11) 4428-7932 ou Fale no whatsapp (11) 97399-1689
          <div className="h-full top-3 2xl:w-[95vw] left-0 -z-10 bg-yellowButton rounded-r-3xl absolute -right-8" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
