import React from "react";
import { CardAbout, ICardAbout } from "./CardAbout";

const ValuesAboutImpl: ICardAbout[] = [
  {
    title: "Missão",
    content:
      "Promover, defender e garantir os direitos de adolescentes e jovens em situações socialmente vulneráveis, fortalecendo vínculos familiares e comunitários, facilitando a integração ao trabalho e promovendo seu desenvolvimento humano e social.",
  },
  {
    title: "Visão",
    content:
      "Ser reconhecida como referência entre as entidades de assistência social com programas de aprendizagem.",
  },
  {
    title: "Valores",
    content: `Liberdade Ética; Excelência; Equidade; Pertencimento; Justiça social; Diversidade; Trabalho em equipe.`,
  },
];

export const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 text-blueFontHeader w-4/5 m-auto py-24">
        <h3 className="text-3xl font-bold">Quem somos</h3>
        <p className="text-lg font-medium">
          CLASA - Casa Lions de Adolescentes de Santo André, Fundada em
          10/07/1975 administrada pelo Lions Clube Santo André Jardim e Lions
          Clube Santo André Centro, é uma organização da sociedade civil (OSC)
          sem fins lucrativos que atua na política de assistência social com
          programas, serviços e projetos no desenvolvimento dos adolescentes,
          jovens famílias e comunidade, por meio de práticas socioeducativas e o
          fortalecimento de competências e habilidades essenciais, que
          contribuam para o seu protagonismo no mundo do trabalho.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 w-4/5 m-auto">
        {ValuesAboutImpl.map((valueAbout, index) => (
          <CardAbout
            key={index}
            title={valueAbout.title}
            content={valueAbout.content}
          />
        ))}
      </div>
      <div className="w-4/5 py-24 m-auto">
        <h2 className="text-3xl font-bold text-blueFontHeader">
          ODS - Objetivos de desenvolvimento sustentável
        </h2>
        <p className="text-lg font-medium text-blueFontHeader">
          As ODS (Objetivos de Desenvolvimento Sustentável) são uma agenda
          global da ONU com 17 objetivos e 169 metas para serem alcançados até
          2030, visando erradicar a pobreza, proteger o planeta e garantir
          prosperidade para todos. Esses objetivos são cruciais pois promovem a
          colaboração internacional para enfrentar desafios globais de maneira
          coordenada e eficaz.
        </p>
      </div>
    </div>
  );
};
