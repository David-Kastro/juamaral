import React, { useEffect } from "react";
import Footer from "@/_components/Footer";
import Logo from "@images/logo.png";
import Image from "next/image";
import ProgressBar from "@/_components/ProgressBar";
import Steps, { StepType } from "@/_components/Steps";

const WHATS_LINK = "#";

export const metadata = {
  title: "Inscrição quase confirmada!",
  description: "Falta só você entrar no grupo para garantir seu e-book",
};

const steps: StepType[] = [
  {
    title: "Verifique seu E-mail",
    highlight: "light",
    text: (
      <>
        Pronto! Em instantes você vai receber o e-book{" "}
        <span className="font-bold">COMUNICAÇÃO NA PRÁTICA</span>. Verifique em
        sua caixa ou no spam, para que não fique sem o conteúdo.
      </>
    ),
  },
  {
    type: "whatsapp",
  },
  {
    type: "whatsapp",
    highlight: "extra",
    title: "Por que entrar nesse grupo é indispensável?",
    text: "Por lá, eu vou compartilhar materiais exclusivos, links das lives, conteúdos e dicas. Dessa forma, você não irá perder nada.",
    hideStep: true,
  },
];

function PageConfirme() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = WHATS_LINK;
  //   }, 10000);
  // }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between px-3 bg-default pb-16 lg:pb-32">
        <div className="bg-white text-center rounded-2xl mt-3 lg:mt-20 w-full max-w-[1200px] mx-auto relative flex flex-col items-center px-5 py-8 gap-8 lg:pt-28 lg:pb-32 lg:gap-10">
          <div className="bg-white rounded-3xl lg:pt-5 lg:px-14 px-6 lg:absolute lg:-top-12">
            <Image src={Logo} alt="Logo" />
          </div>

          <div className="w-full flex flex-col gap-3 items-center">
            <h1 className="lg:text-[52px] lg:leading-[56px] font-bold text-[#635B4B] text-[24px] leading-[32px] pb-7">
              Agora siga o passo
              <br /> a passo...
            </h1>
            <ProgressBar progress={90} />
            <p className=" font-bold text-sm leading-[18px] text-[#B9B9B9]">
              Você está quase lá
            </p>
          </div>

          <div>
            <Steps steps={steps} link={WHATS_LINK} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageConfirme;
