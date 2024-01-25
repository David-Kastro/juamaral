import React from "react";
import Footer from "@/_components/Footer";
import Logo from "@images/logo.png";
import Check from "@images/check.svg";
import CheckSmall from "@images/check-mob.svg";
import DownloadIcon from "@images/download.svg";
import Image from "next/image";
import WhatsAppCTA from "@/_components/WhatsAppCTA";
import ProgressBar from "@/_components/ProgressBar";

export const metadata = {
  title: "Inscrição confirmada!",
  description:
    "Caso ainda não tenha entrado no grupo de WhatsApp, faça isso agora.",
};

function PageConfirmado() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between px-3 bg-default pb-16 lg:pb-32">
        <div className="bg-white text-center rounded-2xl mt-3 lg:mt-20 w-full max-w-[1200px] mx-auto relative flex flex-col items-center px-5 py-8 gap-8 lg:pt-28 lg:pb-32 lg:gap-10">
          <div className="bg-white rounded-3xl lg:pt-5 lg:px-14 px-6 lg:absolute lg:-top-12">
            <Image src={Logo} alt="Logo" />
          </div>

          <div className="flex flex-col gap-8 items-center">
            <div className="flex gap-3 lg:gap-6 justify-center items-center text-left">
              <Image className="hidden lg:block" src={Check} alt="check" />
              <Image className="lg:hidden" src={CheckSmall} alt="check small" />
              <h1 className="font-bold lg:text-[1.5rem] lg:leading-[1.75rem] text-[1rem] leading-[1.25rem] text-[#635B4B]">
                Parabéns! O seu e-book
                <br />
                <span className="text-[#BD4A65]">
                  COMUNICAÇÃO NA PRÁTICA
                </span>{" "}
                chegou!
              </h1>
            </div>

            <ProgressBar progress={100} />

            <a
              href="https://juamaral.com.br/ebook-comunicacao-na-pratica.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#03CBD1] rounded-lg text-base font-bold gap-3 text-white py-4 px-6 flex justify-center items-center">
                <Image src={DownloadIcon} alt="Download Icon" />
                Baixar e-book
              </button>
            </a>
          </div>

          <div>
            <WhatsAppCTA
              link="#"
              text={
                <>
                  Entre no grupo de WhatsApp para receber{" "}
                  <span className="font-bold">
                    novidades, dicas e materiais de apoio.
                  </span>
                </>
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageConfirmado;
