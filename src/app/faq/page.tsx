import { Footer } from "@/components/Footer";
import React from "react";
import { AccordionGeneric } from "./Accordion";

export default function FAQ() {
  return (
    <>
      <div className="my-32 px-20 flex flex-col gap-32">
        <div className="flex flex-col gap-16">
          <div>
            <p className="text-3xl text-blueFontHeader font-bold">
              FAQ/DÚVIDAS <br /> FREQUENTES
            </p>
            <p className="text-xl text-blueFontHeader">
              <strong>A CLASA</strong> é uma organização da sociedade civil{" "}
              <strong>(OSC) sem fins lucrativos</strong>que atua há mais de{" "}
              <strong>40 anos</strong> na promoção do desenvolvimento de{" "}
              <strong>jovens e adolescentes</strong> em situação de
              vulnerabilidade social.
            </p>
            <p className="text-xl text-blueFontHeader mt-5">
              Através de diversos <strong>programas e serviços</strong>, oferece
              acolhimento, orientação,{" "}
              <strong>formação profissional e oportunidades</strong> de
              socialização aos <strong>jovens</strong>, contribuindo para sua
              inclusão social e construção de um{" "}
              <strong>futuro promissor</strong>.
            </p>
          </div>
          <div className="flex flex-col gap-16">
            <AccordionGeneric />
          </div>
        </div>
      </div>
      <Footer sheeetsVisible />
    </>
  );
}
