import React from "react";
import Image from "next/image";
import JuAmaral from "@images/ju-bio.jpg";

function SectionBio() {
  return (
    <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto mb-20">
      <div className="flex flex-col lg:flex-row justify-center gap-[2.19rem]">
        <div className="lg:w-7/12 w-full">
          <Image src={JuAmaral} alt={"Ju Amaral"} />
        </div>
        <div className="lg:w-5/12 w-full">
          <p className="text-[#232323] text-xl not-italic font-medium leading-7 opacity-80">
            Quem é
          </p>
          <h2 className="text-[#BD4A65] text-3xl lg:text-5xl not-italic font-bold lg:leading-[4rem]">
            JULIANA AMARAL
          </h2>
          <p className="text-[#232323] text-base not-italic font-semibold leading-6">
            Criadora do curso{" "}
            <span className="text-[#BD4A65] font-bold">
              COMUNICAÇÃO NA PRÁTICA
            </span>
          </p>
          <br />
          <p className="text-[#232323] text-base not-italic font-medium leading-6">
            Jornalista e relações públicas brasiliense, pós-graduada em
            marketing empresarial. Mestre de cerimônia em eventos corporativos,
            apresentadora de vídeos institucionais, modelo publicitária e
            criadora do curso online “Comunicação na Prática”.
            <br />
            <br />
            Mais de 20 anos de experiência na área de comunicação social como
            apresentadora, mestre de cerimônia, produtora de eventos, assessora
            de imprensa, repórter, editora de texto, locutora e produtora de
            conteúdo para mídias sociais.
            <br />
            <br />
            Atuou em instituições como Grupo Bandeirantes de Comunicação;
            Ministério da Ciência, Tecnologia e Inovação; Marinha do Brasil;
            Ministério da Defesa; TV Justiça; Banco Central; e Grupo Paulo
            Octávio. Apresentou vídeos institucionais e eventos corporativos
            para o MTur, CGU, MME, ANA, TCU, FUNCEF, CNPQ, Petrobras,
            Eletrobras, Vibra Energia, OEI, CNP, FPA, FPE, IPA, ITI, Seguros
            Holding Brasil , ABDE, Embaixada da Coreia do Sul, Sebrae Nacional,
            Yara Fertilizantes, J&H Sementes, MRV Engenharia, USP, UNICEUB, IESB
            entre outros.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionBio;
