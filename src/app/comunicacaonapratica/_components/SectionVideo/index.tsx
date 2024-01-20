"use client";
import React, { useState } from "react";
import IconMsg from "public/images/icon-msg.svg";
import IconHrs from "public/images/icon-hrs.svg";
import IconGarantia from "public/images/icon-garantia.svg";
import IconCheck from "public/images/icon-check.svg";
import IconSuporte from "public/images/icon-suporte.svg";
import IconEscudo from "public/images/icon-escudo.svg";
import IconConclusao from "public/images/icon-conclusao.svg";
import Payments from "public/images/payments.png";
import Boleto from "public/images/boleto.svg";
import Gpay from "public/images/gpay.svg";
import Master from "public/images/master.svg";
import Pix from "public/images/pix.svg";
import Visa from "public/images/visa.svg";
import Applepay from "public/images/applepay.svg";
import Paypal from "public/images/paypal.svg";
import Hot from "public/images/hot.svg";
import ButtonCustom from "@/_components/ButtonCustom";
import Image from "next/image";
import ClintModal from "@/_components/ClintModal";
import AppImage from "@/_components/AppImage";

function SectionVideo() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto -mt-60">
      <div className="flex flex-col items-center justify-center mb-6">
        <a
          href="#video-section"
          className="text-[14px] lg:text-[20px] font-bold mb-3 uppercase block text-center lg:text-left"
        >
          Clique e assista o vídeo
        </a>
        <a
          href="#video-section"
          className="inline-block w-[30px] lg:w-[48px] max-h-[47px] top-8 lg:top-14 inset-x-0 mx-auto"
        >
          <AppImage
            src="/icon-arrow-down.svg"
            dimensions={{
              proportionalHeight: true,
              default: [48, 47],
              sm: 30,
            }}
            alt="Icon arrow down"
          />
        </a>
      </div>
      <div id="video-section" className="w-full">
        <iframe
          className="w-full lg:h-[676px] h-[274px] rounded-2xl"
          src="https://www.youtube.com/embed/2e_wtglreyo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center justify-center mt-[36px] lg:mt-[3.88rem] lg:text-[2rem]">
        <ButtonCustom onClick={handleModal} />
        <Image src={Payments} alt="Pagamentos" className="mt-[2.34rem]" />
      </div>
      <div className="lg:flex justify-center lg:mt-[112px] mt-[50px] items-center">
        <div className="bg-[linear-gradient(141.02deg,#1A1A1A_0%,rgba(26,26,26,0)_111.09%)] rounded-lg py-[72px]  lg:w-[558px] lg:mt-0 mt-10">
          <div className="lg:px-[70px] px-[20px]">
            <p className="text-[28px] font-semibold text-white leading-[34px]">
              Se você quer aprender a escrever copys impossíveis de serem
              ignoradas
            </p>
            <div className="w-full h-[2px] bg-[#565656] mt-[36px]"></div>
            <div className="mt-[36px] flex flex-col gap-[14px]">
              <div className="flex gap-[10px]">
                <Image src={IconCheck} alt="IconCheck" />
                <p className="text-[#999999]">Teoria das Premissas</p>
              </div>
              <div className="flex gap-[10px]">
                <Image src={IconCheck} alt="IconCheck" />
                <p className="text-[#999999]">Técnicas Literárias</p>
              </div>
              <div className="flex gap-[10px]">
                <Image src={IconCheck} alt="IconCheck" />
                <p className="text-[#999999]">
                  Fundamentos da copy tradicional
                </p>
              </div>
              <div className="flex gap-[10px]">
                <Image src={IconCheck} alt="IconCheck" />
                <p className="text-[#999999]">
                  180 dias de acesso ao Aplicativo Light Copy
                </p>
              </div>
              <div className="flex gap-[10px]">
                <Image src={IconCheck} alt="IconCheck" />
                <p className="text-[#999999]">4 aulões sobre formato de copy</p>
              </div>
              <div className="flex gap-[10px]">
                <Image src={IconSuporte} alt="IconSuporte" />
                <p className="text-[#999999]">Suporte técnico</p>
              </div>
              <div className="flex gap-[10px]">
                <Image src={IconEscudo} alt="IconEscudo" />
                <p className="text-[#999999]">Garantia de 7 dias</p>
              </div>
              <div className="flex gap-[10px]">
                <Image src={IconConclusao} alt="IconConclusao" />
                <p className="text-[#999999]">Certificado de conclusão</p>
              </div>
            </div>
          </div>
          <div className="lg:px-[40px] text-base px-[20px] mt-[36px] flex items-center justify-center">
            <ButtonCustom onClick={handleModal} />
          </div>
        </div>
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

export default SectionVideo;
