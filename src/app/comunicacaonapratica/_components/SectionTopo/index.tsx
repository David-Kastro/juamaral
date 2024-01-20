"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "public/images/logo.svg";
import IconWapp from "public/images/icon-wapp.svg";
import ClintModal from "@/_components/ClintModal";
import ClintFloatingBtn from "@/_components/ClintFloatingBtn";

interface Props {
  noZap?: boolean;
}

function SectionTopo({ noZap = false }: Props) {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="bg-[url('/images/bg-top.png')] bg-cover lg:pt-[40px] pt-[59px]">
        <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto pb-[280px]">
          {noZap ? (
            <div className="flex justify-center">
              <Image src={Logo} className="lg:w-auto w-[126px]" alt="Logo" />
            </div>
          ) : (
            <div className="flex lg:justify-between justify-center">
              <Image src={Logo} className="lg:w-auto w-[126px]" alt="Logo" />
              <button
                onClick={() => setShowModal(true)}
                className="gap-[16px] items-center w-[182px] h-[48px] border border-[#EAEAEA] justify-center rounded-lg lg:flex hidden"
              >
                <Image src={IconWapp} alt="IconWapp" />
                <p className="uppercase text-[12px] font-bold">
                  Tire sua dúvida
                </p>
              </button>
            </div>
          )}
          <div className="w-fit mx-auto px-[10px] py-[6px] bg-[#292929] lg:mt-[62px] mt-[37px]">
            <p className="text-[15px] text-center">Marketing de Premissas</p>
          </div>
          <div className="lg:w-[920px] mx-auto lg:mt-0 mt-[11px]">
            <h1 className="lg:text-[52px] text-[20px] text-center lg:leading-[63px] leading-[24px] font-semibold">
              Você está prestes a ser apresentado à uma abordagem de comunicação
              diferente de tudo o que você <br className="lg:block hidden" /> já
              viu até hoje.
            </h1>
          </div>
          <div className="lg:mt-[46px] mt-[35px] lg:w-[816px] mx-auto lg:text-base text-[14px] lg:leading-[28px] leading-[20px]">
            <p className="text-center text-[#999999]">
              Aqui vou te explicar o oposto dessa copy pesada, hoje você vai
              aprender o que é a light copy.
            </p>
            <p className="text-center text-[#999999]">
              Sem gatilhos, sem exageros, sem promessas mirabolantes.
            </p>
            <p className="text-center text-[#999999]">
              Sinta-se leve, você não precisa prometer mundos e fundos para
              vender, aliás, isso pode estar <br className="lg:block hidden" />{" "}
              roubando sua autenticidade e, consequentemente, suas vendas.
            </p>
          </div>
        </div>
      </div>
      <ClintModal
        type="lightcopy"
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {!noZap && <ClintFloatingBtn onClick={handleModal} />}
    </>
  );
}

export default SectionTopo;
