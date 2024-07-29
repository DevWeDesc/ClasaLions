import { Footer } from "@/components/Footer";
import React from "react";

export default function SCFV() {
  return (
    <>
      <div className="my-32 px-20 flex flex-col gap-28">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold bg-blueDefault text-white py-2 px-8 rounded-full w-fit">
              O que é o serviço de convivência?
            </p>
            <p className="text-xl text-blueFontHeader">
              O Serviço de Convivência e Fortalecimento de Vínculos – promove à
              convivência social, o fortalecimento de vínculos, a participação
              cidadã e a formação geral para o mundo do trabalho. Pautamo-nos no
              público alvo elencado na Tipificação Nacional de Serviços
              Socioassistenciais sendo priorizados os que vivenciam as situações
              de risco social elencadas na Resolução CNAS nº 1/2013, em
              consonância com a Constituição Federal, Lei Orgânica da
              Assistência Social – LOAS, Estatuto da Criança e do Adolescente –
              ECA, Normativas da Política de Assistência Social, em especial a
              Resolução CNAS nº 109/2009, e Orientação Técnicas específicas.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-blueFontHeader font-bold">
              Função social
            </p>
            <p className="text-xl text-blueFontHeader">
              Promover a socialização entre usuários e fortalecer os vínculos
              familiares e comunitários, bem como realizar trabalhar os eixos:
              Eu Comigo, Eu com os outros e Eu com a cidade, em concomitância os
              temas transversais: Meio Ambientes, Atualidades, artes-cultura e
              esportes (jogos coletivos).
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl text-blueFontHeader font-bold">
              Como participar
            </p>
            <p className="text-xl text-blueFontHeader">
              O acesso ao SCFV sedará através procura espontânea, encaminhados
              pelos CRAS, CREAS do município, rede socioassistencial de
              serviços, demais políticas públicas e por meio dos órgão do
              Sistema de Garantia de Direitos.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 bg-blueDefault rounded-2xl text-white py-8 px-8 text-center">
          <p className="text-2xl font-bold">Público alvo</p>
          <p className="text-xl">
            Público Alvo: O SCFV destina-se adolescentes, com idade entre 15 e
            17 anos, sem discriminação de qualquer natureza (gênero, raça,
            etnia, religião, convicção, limitação pessoal ou outra), residentes
            no município de Santo André, matriculados ou não no ensino formal,
            que se encontram em situações de vulnerabilidade social.
          </p>
        </div>
      </div>
      <Footer sheeetsVisible />
    </>
  );
}
