"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Certificado from "public/images/certificado.png";
import Leandro from "public/images/leandro.png";
import Galaxy from "public/images/galaxy.png";
import Fluxo from "public/images/fluxo.png";

function SectionBonus() {
  const [activeCarousel, setActiveCarousel] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setActiveCarousel((val) => (val === 2 ? 0 : activeCarousel + 1));
    }, 10000);
    return () => {
      clearTimeout(timer1);
    };
  }, [activeCarousel]);

  const carousel = [
    {
      title: "Leandro Ladeira",
      content: (
        <div>
          <p className="leading-[28px] text-[#999999] mt-[64px]">
            Leandro Ladeira é um dos maiores nomes do Marketing Digital do
            Brasil. É idealizador do MBR, projeto que impulsionou a carreira da
            influenciadora Cátia Damasceno. Juntos, fizeram mais de 300 mil
            vendas de produtos digitais, faturando mais de 153 milhões de reais.
            O maior case desse nicho no mundo.
          </p>
          <p className="leading-[28px] text-[#999999] mt-[20px]">
            Leandro também é o criador do VTSD, a maior plataforma de ensino de
            produtos digitais que ensina a vender no perpétuo do Brasil, com
            mais de 10 mil alunos.
          </p>
          <p className="leading-[28px] text-[#999999] mt-[20px]">
            Até aqui tudo lindo, falar qualquer um fala, mas provar é que são
            outros quinhentos. Está aí a comprovação das vendas.
          </p>
        </div>
      ),
      img: Leandro,
    },
    {
      title: "Hotmart Galaxy ",
      content: (
        <div>
          <p className="leading-[28px] text-[#999999] mt-[64px]">
            Evento que premia os 25 maiores produtos da plataforma no mundo.
            Muita gente fala que vende muito, mas a verdade é que só esses 25
            podem afirmar isso de verdade, e eu estava lá.
          </p>
        </div>
      ),
      img: Galaxy,
    },
    {
      title: "Evento Fluxo",
      content: (
        <div>
          <p className="leading-[28px] text-[#999999] mt-[64px]">
            O evento acontece anualmente e faz parte da entrega da Mentoria
            Fluxo, nele acontecem diversas palestras e experiências, com
            convidados especiais, que desenvolvem os mentorados na busca de seu
            desenvolvimento pessoal e profissional no mercado digital.
          </p>
        </div>
      ),
      img: Fluxo,
    },
  ];

  return (
    <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto lg:mt-[175px] mt-[80px]">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between">
        <div className="lg:w-[306px]">
          <p className="text-[24px] font-bold">Bônus 1</p>
          <p className="mt-[41px] font-bold text-base leading-[20px]">
            180 dias de acesso <br /> Aplicativo light copy:
          </p>
          <p className="mt-[23px] leading-7 text-[#999999]">
            Esse app te ajuda a escrever as copys, usando como base os elementos
            literários e a lógica das premissas. Você vai escrever suas copy no
            nosso app e isso vai facilitar e muito sua vida.
          </p>
        </div>
        <div className="lg:w-[330px]">
          <p className="text-[24px] font-bold">Bônus 2</p>
          <p className="mt-[41px] font-bold text-base leading-[20px]">
            180 dias de acesso ao meu <br /> swipe file pessoal
          </p>
          <p className="mt-[23px] leading-7 text-[#999999]">
            Vai ter um caminhão de referências para te inspirar a criar seus
            textos. Eu atualizo esse swipe file constantemente, eu acho que esse
            é hoje o meu ativo mais valioso.
          </p>
        </div>
        <div className="lg:w-[384px]">
          <p className="text-[24px] font-bold">Bônus 3</p>
          <p className="mt-[41px] font-bold text-base leading-[20px]">
            4 aulões para aprofundar <br /> sobre formatos de copy:
          </p>
          <div className="flex gap-2 text-[#999999] mt-[23px]">
            <p className="">.</p>
            <p className="mt-1">Copy para anúncios</p>
          </div>
          <div className="flex gap-2 text-[#999999] mt-2">
            <p className="">.</p>
            <p className="mt-1">
              Copy para e-mails, whatsapp, telegram e atuomações
            </p>
          </div>
          <div className="flex gap-2 text-[#999999] mt-2">
            <p className="">.</p>
            <p className="mt-1">Copy para vídeo de vendas</p>
          </div>
          <div className="flex gap-2 text-[#999999] mt-2">
            <p className="">.</p>
            <p className="mt-1">
              Copy para redes sociais: instagram, tiktok, youtube
            </p>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#464646] mt-[70px]"></div>
      <div className="lg:mt-[158px] mt-[80px]">
        <div className="lg:w-[818px] xl:w-[918px] lg:h-[542px] bg-[#121212] flex items-center lg:flex-row flex-col relative py-10">
          <div className="px-[20px] lg:px-0 lg:pl-[52px] xl:pl-[102px]  lg:py-0">
            <p className="w-[204px] text-white text-[24px] lg:text-[28px] font-bold">
              Certificação Light Copy
            </p>
            <div className="lg:w-[308px] xl:w-[408px] mt-[18px] text-[#999999] leading-[28px]">
              <p>
                Ao final do curso você receberá uma certificação de Light Copy,
                que servirá para você como um bônus, mas lembre-se, apenas o
                conhecimento correto do marketing de premissas te tornará um
                verdadeiro copylighter.
              </p>
            </div>
          </div>
          <Image
            src={Certificado}
            alt="Certificado"
            className="lg:absolute lg:-right-32 xl:-right-72 lg:mt-0 mt-8"
          />
        </div>
      </div>
      <div className="lg:flex lg:mt-[170px] mt-[80px] justify-between gap-x-2">
        <div>
          <Image src={carousel[activeCarousel].img} alt="Leandro" />
        </div>
        <div className="lg:w-[510px] lg:h-[546px] relative">
          <p className="lg:text-[56px] text-[30px] lg:mt-0 mt-10">
            {carousel[activeCarousel].title}
          </p>
          {carousel[activeCarousel].content}
          <div className="flex lg:absolute bottom-0">
            <div className="flex mt-[64px] gap-[10px]">
              <button
                className={`w-[102px] bg-[#333333] ${
                  activeCarousel === 0 && "isActive"
                } `}
                onClick={() => setActiveCarousel(0)}
              >
                <div className="w-0 h-full bg-white" />
              </button>
              <button
                className={`w-[102px] h-[3px] bg-[#333333] ${
                  activeCarousel === 1 && "isActive"
                } `}
                onClick={() => setActiveCarousel(1)}
              >
                <div className="w-0 h-full bg-white" />
              </button>
              <button
                className={`w-[102px] h-[3px] bg-[#333333] ${
                  activeCarousel === 2 && "isActive"
                } `}
                onClick={() => setActiveCarousel(2)}
              >
                <div className="w-0 h-full bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBonus;
