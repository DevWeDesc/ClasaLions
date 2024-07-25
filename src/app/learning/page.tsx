import { Footer } from "@/components/Footer";
import React from "react";

export default function Learning() {
  return (
    <>
      <div className="my-32 px-20 flex flex-col gap-32">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6">
            <p className="text-2xl text-blueFontHeader font-bold">
              O que é o Programa de aprendizagem?
            </p>
            <p className="text-xl text-blueFontHeader">
              O Programa de Aprendizagem- sócioaprendizagem visa a inserção de
              jovens no mercado de trabalho estabelecido pela Lei de
              Aprendizagem 10.097/2000, por um contrato especial de trabalho com
              duração de no máximo 24 meses, por meio de ações que assegurem aos
              adolescentes e jovens o direito à profissionalização, oportunidade
              do primeiro emprego, elevação da escolaridade e permanência
              escolar, geração de renda e o estímulo ao empreendedorismo,
              contribuindo desta forma para sua autonomia e melhoria da
              qualidade de vida.
            </p>
          </div>
          <div className="h-full bg-blueDefault text-white rounded-2xl py-6 px-2 flex flex-col gap-4 col-span-2">
            <p className="text-2xl font-bold text-center"> Cursos</p>
            <ul className="list-disc ml-14 font-semibold">
              <li>administrativa;</li>
              <li>logística; </li>
              <li>produção; </li>
              <li>farmácia; </li>
              <li>operador de caixa; </li>
              <li>varejo;</li>
            </ul>
          </div>
          <div className="col-span-8">
            <p className="text-2xl text-blueFontHeader font-bold">
              Vantagens do programa de aprendizagem
            </p>
            <p className="text-xl text-blueFontHeader">
              Além de atuar com os quesitos técnico-profissional os jovens têm a
              oportunidade de desenvolverem suas múltiplas habilidades, além de
              suas competências técnicas e praticando atividades envolvendo a
              participação da família, com supervisão qualificada e o
              acompanhamento social.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-blueDefault rounded-2xl text-white py-8 px-8 text-center">
          <p className="text-2xl font-bold">Como ser um aprendiz?</p>
          <p className="text-xl">
            Para tornar-se um aprendiz, deve ter idade entre 16 e 22 anos de
            idade o jovem, estar regularmente matriculado em unidade escolar da
            rede pública de ensino, frequentando a partir do 9ª ano do ensino
            fundamental ou concluído o ensino médio e preferencialmente tenha
            concluído o curso de Programa de Integração do Mundo do Trabalho,
            oferecido gratuitamente pela CLASA.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
