"use client";
import React, { useEffect, useState } from "react";
import IconDrop from "public/images/drop.svg";
import Image from "next/image";
import Acordeon from "@/_components/Acordeon";

function SectionDropDown() {
  const [expandedContent, setExpandedContent] = useState<boolean>(false);
  const [openFirstAccordion, setFirstAccordionOpen] = useState(true);
  const [openSecondAccordion, setSecondAccordionOpen] = useState(false);
  const [openThirdAccordion, setThirdAccordionOpen] = useState(false);

  const handleExpandContent = () => {
    if (!expandedContent) {
      setExpandedContent(true);
      setFirstAccordionOpen(true);
      setSecondAccordionOpen(true);
      setThirdAccordionOpen(true);
    } else {
      setExpandedContent(false);
      setFirstAccordionOpen(false);
      setSecondAccordionOpen(false);
      setThirdAccordionOpen(false);
    }
  };

  //Atualizar estado de ExpandedContent se todos os Accordions estiverem abertos/fechados
  useEffect(() => {
    if (openFirstAccordion && openSecondAccordion && openThirdAccordion) {
      setExpandedContent(true);
    } else {
      setExpandedContent(false);
    }
  }, [openFirstAccordion, openSecondAccordion, openThirdAccordion]);

  return (
    <div className="mt-[87px] xl:w-container lg:w-[950px] w-[342px] mx-auto">
      <div className="lg:w-[838px] mx-auto">
        <h1 className="text-[28px] text-center leading-[34px] font-semibold">
          Aqui você vai encontrar os elementos necessários para transformar uma
          copy rasa em uma Light Copy
        </h1>
        <div className="flex justify-center mt-[34px]">
          <div
            className="select-none flex items-center gap-[8px] border border-[#565656] px-[16px] py-[8px] rounded-full cursor-pointer"
            onClick={() => handleExpandContent()}
          >
            <Image src={IconDrop} alt="IconDrop" />
            <p className="text-[12px]">
              {expandedContent ? "Retrair" : "Expandir"} Conteúdo
            </p>
          </div>
        </div>
        <div className="mt-[90px] flex flex-col gap-[16px]">
          <Acordeon
            title="Os fundamentos da copy tradicional:"
            open={openFirstAccordion}
            setOpen={setFirstAccordionOpen}
          >
            <div className="leading-[28px] text-[#999999]">
              <p>
                Antes de aprender Light Copy, você vai ter que aprender os
                conceitos importantes e fundamentais de uma boa copy. Vamos
                passar pelo básico para deixar todo mundo na mesma página:
              </p>
              <p>
                Persona, mapa de empatia, gatilhos mentais, promessas, títulos,
                oferta, objeções, inimigo em comum, dores e desejos, arquétipos
                e toda a base das teorias tradicionais de copy.
              </p>
              <p>
                Você terá uma verdadeira formação antes de mergulhar fundo no
                jeito inovador do Light Copy.
              </p>
            </div>
          </Acordeon>
          <Acordeon
            title="Os fundamentos da teoria das premissas:"
            open={openSecondAccordion}
            setOpen={setSecondAccordionOpen}
          >
            <div className="leading-[28px] text-[#999999]">
              <p>
                Todo mundo que estuda copy aprende o que eu chamo de marketing
                de promessas. Os professores de copy te ensinam a prometer.
              </p>
              <p className="mt-4">
                No Light Copy você vai aprender o que eu chamo de teoria das
                premissas. Ao invés de prometer, você levanta premissas,
                observações que envolvem a pessoa numa conversa gostosa,
                despretensiosa, interessante, instigante, viciante.
              </p>
              <p className="mt-4">
                Quando a pessoa vai ver, está completamente envolvida no seu
                texto e a conclusão acaba sendo: “PRECISO COMPRAR ESTE
                PRODUTO!!”
              </p>
              <p className="mt-4">
                Por quê? Porque no Marketing de promessa, te ensinam a vender, e
                a verdade é que ninguém gosta de vendedor. No marketing de
                premissas, eu te ensino a deixar a pessoa com vontade de
                comprar, e todo mundo gosta de comprar. Principalmente quando a
                venda não é nada forçada e é feita de um jeito leve.
              </p>
            </div>
          </Acordeon>
          <Acordeon
            title="As técnicas literárias:"
            open={openThirdAccordion}
            setOpen={setThirdAccordionOpen}
          >
            <div className="leading-[28px] text-[#999999]">
              <p>
                Toda a explicação do que são e como usar elementos literários.
                Uma lista com mais de 30 elementos literários, com explicações e
                exemplos práticos. Eu mostro anúncios, e-mails, vídeos de
                vendas, lives, vídeos de youtube. Mostro os elementos sendo
                usados na prática, com campanhas reais, que performaram muito e
                faturaram milhões de reais.
              </p>
            </div>
          </Acordeon>
        </div>
      </div>
    </div>
  );
}

export default SectionDropDown;
