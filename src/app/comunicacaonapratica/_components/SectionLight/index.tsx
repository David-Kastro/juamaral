import React from "react";

const modulos = [
  "Qual é a sua real motivação?",
  "Vencendo o medo de gravar vídeos",
  "Produção e preparação técnica. Parte I",
  "Produção e preparação técnica. Parte II",
  "Luz, câmera, ação! Parte I",
  "Luz, câmera, ação! Parte II",
  "Pós-gravação. Avaliação e edição de conteúdo",
];

function SectionLight() {
  return (
    <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto">
      <div className="flex flex-col justify-center mt-16">
        <div className=" flex flex-col justify-center gap-2">
          <h2 className="text-center text-[2rem] font-semibold leading-[normal]">
            Como o curso{" "}
            <span className="text-[#BD4A65] font-bold">
              COMUNICAÇÃO NA PRÁTICA
            </span>{" "}
            funciona?
          </h2>
          <p className="text-[#232323] text-center text-base not-italic font-medium leading-7 opacity-80">
            Uma estratégia eficiente e comprovada.
          </p>
        </div>

        <p className="text-lg not-italic font-semibold leading-8 mt-[2rem]">
          <span className="text-[#BD4A65] font-bold">
            COMUNICAÇÃO NA PRÁTICA
          </span>{" "}
          é uma forma rápida e objetiva de aplicar técnicas de comunicação
          audiovisual para gravar vídeos, entrevistas, lives e podcasts, como
          apresentador ou entrevistado. Um verdadeiro manual para melhorar a
          oratória e a comunicação em público.
          <br />
          <br />
          Por meio de exemplos reais e ações usadas por comunicadores
          experientes, você vai aprender conteúdos sobre produção e preparação
          técnica; a melhorar a performance em frente às câmeras; vencer o medo
          da desaprovação; pós-gravação e autoavaliação.
        </p>

        <div className="lg:w-[838px] mx-auto flex flex-col gap-[0.31rem] mt-[2.25rem]">
          {modulos.map((modulo, index) => (
            <Modulo key={modulo + "_" + index} title={modulo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Modulo({ index, title }: { index: number; title: string }) {
  return (
    <div className="px-8 py-4 bg-[#BD4A65]">
      <p className="text-[#E2E2E2] text-base leading-6">
        <span className="font-extrabold">Módulo {index + 1} -</span> {title}
      </p>
    </div>
  );
}

export default SectionLight;
