import React from "react";
import { CardAbout, ICardAbout } from "./CardAbout";
import { Button } from "@/components/ui/button";
import { TbNotes } from "react-icons/tb";
import Image from "next/image";
import logoCebas from "@/../public/assets/cebasLogo.png";
import logoCmdca from "@/../public/assets/cmdcaLogo.png";
import logoCmas from "@/../public/assets/cmasLogo.jpg";
import Link from "next/link";

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
      <div className="w-4/5 m-auto flex flex-col gap-28">
        <div className="flex flex-col gap-4 text-blueFontHeader pt-24">
          <h3 className="text-3xl font-bold">Quem somos</h3>
          <p className="text-lg font-medium">
            <strong>CLASA - Casa Lions de Adolescentes de Santo André</strong>,
            Fundada em <strong>10/07/1975</strong> administrada pelo{" "}
            <strong>
              Lions Clube Santo André Jardim e Lions Clube Santo André Centro
            </strong>
            , é uma organização da sociedade civil{" "}
            <strong>(OSC) sem fins lucrativos</strong> que atua na política de
            <strong>assistência social</strong> com{" "}
            <strong>programas, serviços e projetos</strong> no desenvolvimento
            dos adolescentes, jovens famílias e comunidade, por meio de práticas
            socioeducativas e o fortalecimento de competências e habilidades
            essenciais, que contribuam para o seu protagonismo no{" "}
            <strong>mundo do trabalho.</strong>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 m-auto">
          {ValuesAboutImpl.map((valueAbout, index) => (
            <CardAbout
              key={index}
              title={valueAbout.title}
              content={valueAbout.content}
            />
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blueFontHeader">
            ODS - Objetivos de desenvolvimento sustentável
          </h2>
          <p className="text-lg font-medium text-blueFontHeader">
            As ODS (Objetivos de Desenvolvimento Sustentável) são uma agenda
            global da ONU com 17 objetivos e 169 metas para serem alcançados até
            2030, visando erradicar a pobreza, proteger o planeta e garantir
            prosperidade para todos. Esses objetivos são cruciais pois promovem
            a colaboração internacional para enfrentar desafios globais de
            maneira coordenada e eficaz.{" "}
            <Link
              target="_blank"
              href="/assets/pdfs/ConheçatodasasODS.pdf"
              className="text-sm relative"
            >
              Conheça todas as ODS{" "}
              <TbNotes className="absolute -right-10 top-1/2 -translate-y-1/2 rounded-full p-2 bg-yellowButton text-4xl hover:bg-yellowButton/85 cursor-pointer" />
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <div className="bg-blueDefault p-6 rounded-3xl">
            <p className="text-2xl text-white font-bold">
              É importante destacar que a instituição CLASA a instituição está
              alinhada aos cinco dos Objetivos de Desenvolvimento Sustentável
              (ODS) definidos pela Organização das Nações Unidas (ONU).
            </p>
          </div>
          <li className="list-none text-blueFontHeader font-bold text-xl">
            <ul>01 – Erradicação da Pobreza</ul>
            <ul>03 – Saúde e bem estar</ul>
            <ul>04 – Educação de Qualidade</ul>
            <ul>08 – Trabalho Descente e crescimento econômico</ul>
            <ul>10 – Redução da Desigualdade</ul>
          </li>
        </div>
        <div className="flex flex-col gap-12">
          <div className="bg-blueDefault p-6 rounded-3xl">
            <p className="text-3xl text-white font-bold text-center">
              Transparência
            </p>
          </div>
          <p className="text-xl text-blueDefault font-bold">
            A CLASA está comprometida com a transparência e a prestação de
            contas à comunidade. Acreditamos que a abertura e a responsabilidade
            são essenciais para construir a confiança e a legitimidade.
          </p>
          <div className="flex flex-col items-center justify-center gap-8">
            <p className="text-2xl text-blueDefault font-bold">
              Documentos importantes
            </p>
            <div className="grid grid-cols-2 gap-20 m-auto">
              <Link
                target="_blank"
                href="/assets/pdfs/ClasaRelatorioIgualdadeSalarial.pdf"
                className="text-sm relative flex items-center gap-2 "
                //  className="flex items-center gap-2 relative">
              >
                <p className="text-blueDefault text-xl font-bold max-w-32">
                  Relatório de igualdade salárial
                </p>
                <TbNotes className="text-yellowButton rounded-full p-2 bg-blueFontHeader text-6xl hover:bg-blueFontHeader/85 cursor-pointer" />
              </Link>
              <Link
                target="_blank"
                href="/assets/pdfs/ClasaRelatoriodeAtividades2023.pdf"
                className="text-sm relative flex items-center gap-2 "
                //  className="flex items-center gap-2 relative">
              >
                <p className="text-blueDefault text-xl font-bold max-w-32">
                  Relatório de atividades de 2023
                </p>
                <TbNotes className="text-yellowButton rounded-full p-2 bg-blueFontHeader text-6xl hover:bg-blueFontHeader/85 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div className="bg-blueDefault p-6 rounded-3xl">
            <p className="text-3xl text-white font-bold text-center">
              Política de Privacidade e Proteção de Dados Pessoais <br /> (LGPD)
            </p>
          </div>
          <div className="grid grid-cols-8 gap-10">
            <p className="col-span-6 text-xl text-blueDefault font-bold text-center">
              Na CLASA - Casa Lions de Adolescentes de Santo André, estamos
              comprometidos com a privacidade e a proteção dos dados pessoais de
              nossos beneficiários, colaboradores, parceiros e visitantes do
              nosso site. Nossa política de privacidade está em conformidade com
              a Lei Geral de Proteção de Dados Pessoais (LGPD) - Lei nº
              13.709/2018.
            </p>{" "}
            <Link
              target="_blank"
              href="/assets/pdfs/ALeiGeraldeProtecaodeDados.pdf"
              className="col-span-2 bg-blueDefault px-6 rounded-3xl flex items-center text-white font-bold text-xl"
            >
              <p> Lei geral de proteção de dados (LGPD)</p>
              <TbNotes className="w-32 text-yellowButton rounded-full p-2 bg-blueFontHeader text-6xl hover:bg-blueFontHeader/85 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-blueDefault p-6 rounded-3xl">
            <p className="text-3xl text-white font-bold text-center">
              Certificações
            </p>
          </div>
          <div className="flex items-center gap-24 justify-center mt-16">
            <Image
              alt=""
              src={logoCebas}
              className="p-2 object-contain size-44 border-4 flex rounded-full border-blue-200"
            />
            <Image
              alt=""
              src={logoCmdca}
              className="object-contain size-44 border-4 flex rounded-full border-blue-200"
            />
            <Image
              alt=""
              src={logoCmas}
              className="p-2 object-contain size-44 border-4 flex rounded-full border-blue-200"
            />
          </div>
          <p className="text-3xl mt-20 text-blueDefault font-bold text-center">
            Parceiros
          </p>
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-3xl text-blueDefault font-bold text-center">
            Contatos
          </p>
          <div className="bg-blueDefault p-6 rounded-full text-center text-white text-xl font-bold flex flex-col gap-2">
            <p>Telefone: (11) 4428-7932</p>
            <p>Whatsapp: (11) 97399-1689</p>
            <p>Email: contato@clasa.org.br</p>
          </div>
        </div>
      </div>
      <div className="bg-blueDefault p-6 mt-6">
        <p className="text-xl text-white font-bold text-center">
          Onde estamos localizados:
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.430678400741!2d-46.54689020612146!3d-23.66055157890996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42facb7a6905%3A0xeca45768a364ca4b!2sAv.%20Dom%20Jorge%20Marcos%20de%20Oliveira%2C%2050%20-%20Vila%20Guiomar%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009090-480!5e0!3m2!1spt-BR!2sbr!4v1722257529895!5m2!1spt-BR!2sbr"
        className="border-none w-full h-96"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
