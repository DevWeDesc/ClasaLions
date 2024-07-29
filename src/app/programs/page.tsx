import { Footer } from "@/components/Footer";
import React from "react";

export default function Programs() {
  return (
    <>
      <div className="my-32 px-20 flex flex-col gap-32">
        <div className="grid grid-cols-8 gap-10">
          <div className="flex flex-col gap-20 col-span-6">
            <div>
              <p className="text-2xl text-blueFontHeader font-bold">
                O que é o Programa integrar?
              </p>
              <p className="text-xl text-blueFontHeader">
                O programa Integrar tem como objetivo estimular e desenvolver
                nos adolescentes e jovens, competências e habilidades que
                contribuam para a promoção e inserção ao mundo do trabalho,
                proporcionando um espaço de convivência e de fortalecimento da
                autonomia, composto de uma grade curricular básica.
              </p>
            </div>
            <div>
              <p className="text-2xl text-blueFontHeader font-bold">
                Público alvo
              </p>
              <p className="text-xl text-blueFontHeader">
                Adolescentes /Jovens de 17 á 21 anos estudantes de escola
                pública a partir 9º ano do ensino fundamental ou que tenham
                concluído o Ensino Médio.
              </p>
            </div>
          </div>
          <div className="bg-blueDefault text-white rounded-2xl py-6 px-2 flex flex-col gap-4 col-span-2">
            <p className="text-2xl font-bold text-center">Matérias do curso</p>
            <ul className="list-disc ml-14 font-semibold">
              <li>Ética;</li>
              <li>Cidadania;</li>
              <li>Informática;</li>
              <li>Orientação Vocacional;</li>
              <li>Marketing Pessoal;</li>
              <li>Raciocínio Lógico;</li>
              <li>Comunicação Empresarial;</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-blueDefault rounded-2xl text-white py-8 px-8 text-center">
          <p className="text-2xl font-bold">Área de abrangência</p>
          <p className="text-xl">
            Município de Santo André, Grande ABC e adjacências do município de
            São Paulo.
          </p>
        </div>
      </div>
      <Footer sheeetsVisible />
    </>
  );
}
