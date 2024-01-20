"use client";
import Image from "next/image";
import React, { useState } from "react";
import Iconx from "public/images/x.svg";
import ButtonCustom from "@/_components/ButtonCustom";
import ClintModal from "@/_components/ClintModal";

function SectionMkt() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <div className="mt-[87px] xl:w-container lg:w-[950px] w-[342px] mx-auto">
      <div className="relative">
        <div className="lg:flex">
          <div className="h-[363px] lg:w-[600px] bg-[#0F0F0F] lg:rounded-l-lg flex flex-col items-center justify-center">
            <div className="lg:w-[430px] lg:px-5 px-5 xl:px-0">
              <p className="text-[32px] leading-[28px] font-bold">
                Marketing de <br />
                promessas
              </p>
              <p className="leading-[28px] mt-[21px]">
                Com o marketing pesado, cheio de copy espalhafatosa, menos gente
                compra, as pessoas ficam entediadas, desconfiadas, e as poucas
                que compram, compram se sentindo pressionadas.
              </p>
            </div>
          </div>
          <div className="lg:flex hidden justify-center items-center absolute top-0 w-full h-full">
            <div className="bg-[#817762] w-[72px] h-[72px] flex justify-center items-center rounded-lg">
              <Image src={Iconx} alt="Iconx" className="" />
            </div>
          </div>
          <div className="h-[363px] lg:w-[600px] bg-[linear-gradient(256.16deg,#1E1E1E_0%,rgba(20,20,20,0)_130.13%)] lg:rounded-r-lg flex flex-col items-center justify-center lg:mt-0 mt-10">
            <div className="lg:w-[430px]  lg:px-5 px-5 xl:px-0">
              <p className="text-[32px] leading-[28px] font-bold">
                Marketing de <br /> Premissas
              </p>
              <p className="leading-[28px] mt-[21px]">
                <strong>Com o light copy,</strong> as pessoas se sentem leves,
                envolvidas, entretidas. Mais gente compra, e quem compra, compra
                te amando, desejando até recomendar seu produto para os amigos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[590px] mx-auto mt-[78px]">
        <p className="text-center font-semibold lg:text-[28px] text-[25px] lg:leading-[34px]">
          Eu vou te ensinar a deixar a pessoa com vontade de comprar, e todo
          mundo gosta de comprar. Você gosta!
        </p>
      </div>
      <div className="lg:w-[490px] mt-[40px] mx-auto">
        <p className="text-center text-[#999999] leading-[28px]">
          Nesse exato momento deve estar sorrindo, porque eu nem expliquei
          direito como funciona o light copy e você já está com vontade de
          comprar. Te peguei.
        </p>
      </div>
      <div className="flex justify-center mt-[40px] lg:text-[2rem]">
        <ButtonCustom onClick={handleModal} />
      </div>
      <ClintModal
        type="lightcopy"
        precheckout="https://pay.hotmart.com/A76432148O?off=1te8wxmm"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default SectionMkt;
