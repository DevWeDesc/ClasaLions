import { Footer } from "@/components/Footer";
import React from "react";

export default function FAQ() {
  return (
    <>
      <div className="my-32 px-20 flex flex-col gap-32">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6">
            <p className="text-2xl text-blueFontHeader font-bold">
              FAQ/DÚVIDAS FREQUENTES
            </p>
            <p className="text-xl text-blueFontHeader">
              A CLASA é uma organização da sociedade civil (OSC) sem fins
              lucrativos que atua há mais de 40 anos na promoção do
              desenvolvimento de jovens e adolescentes em situação de
              vulnerabilidade social.
            </p>
            <p className="text-xl text-blueFontHeader">
              Através de diversos programas e serviços, oferece acolhimento,
              orientação, formação profissional e oportunidades de socialização
              aos jovens, contribuindo para sua inclusão social e construção de
              um futuro promissor.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
