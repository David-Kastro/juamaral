"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@images/logo-white.png";
import IconWapp from "@images/icon-wapp.svg";

function SectionTopo() {
  return (
    <>
      <div className="bg-[url('/images/bg-topo-sales.jpg')] bg-cover bg-bottom lg:pt-[40px] pt-[59px] text-white">
        <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto pb-[280px]">
          <div className="flex lg:justify-between justify-center">
            <Image
              src={Logo}
              className="lg:w-[257px] lg:h-[40px] w-[126px] h-[20px]"
              alt="Logo"
            />
            <button
              onClick={() => {}}
              className="gap-[16px] items-center w-[182px] h-[48px] border border-[#EAEAEA] justify-center rounded-lg lg:flex hidden"
            >
              <Image src={IconWapp} alt="IconWapp" />
              <p className="uppercase text-[12px] font-bold">Tire sua dúvida</p>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 lg:mt-[5rem] gap-[1rem]">
            <div className="mx-auto lg:mt-0 mt-[11px]">
              <h1 className="lg:text-[52px] text-[20px] text-center lg:leading-[63px] leading-[24px] font-extrabold">
                COMUNICAÇÃO NA PRÁTICA
              </h1>
            </div>
            <div>
              <p className="text-[#EDEDED] lg:text-center text-[1rem] lg:text-[1.625rem] font-semibold leading-6 lg:leading-8">
                Qualquer pessoa pode gravar um vídeo para a internet.
                <br />
                <span className="text-[#03CBD1] font-bold">VOCÊ TAMBÉM.</span>
              </p>
            </div>
            <div className="max-w-[41.5rem] text-[#EDEDED] text-[0.875rem] lg:text-base not-italic font-medium leading-5 lg:leading-7">
              <p className="lg:text-center">
                Entenda porque muitas pessoas sentem vergonha e timidez ao
                gravar vídeos. chegou a sua hora de brilhar! Prepare-se para
                aparecer no vídeo!
              </p>
            </div>
            <div className="text-[#EDEDED] text-[0.875rem] lg:text-base not-italic font-semibold leading-5 lg:leading-7">
              <p className="lg:text-center">
                <span className="text-[#03CBD1] text-[1rem] lg:text-[1.625rem] font-bold leading-6 lg:leading-8">
                  Assista à aula e aprenda:
                </span>
                <br />
                1. A elaborar um roteiro profissional para gravar vídeos de
                entrevista, live, podcast e outros.
                <br />
                2. Como vencer o medo da exposição e se sentir seguro para falar
                em frente às câmeras.
                <br />
                3. A elevar o nível da oratória e dominar a arte de gravar
                vídeos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTopo;
