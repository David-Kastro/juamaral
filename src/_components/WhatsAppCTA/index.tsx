import React from "react";
import IconWapp from "@images/wapp.svg";
import Image from "next/image";

interface Props {
  link: string;
  text?: JSX.Element;
}

export const Button = ({ link }: { link: string }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noreferrer"
      className="lg:w-[281px] w-full"
    >
      <button className="lg:py-[16px] py-[10px] lg:w-[281px] w-full bg-[#77BA0B] rounded-[8px] text-white lg:text-[26px] text-[16px] font-bold flex items-center gap-[8px] justify-center lg:mt-0 mt-[6px] hover:scale-105 transition-transform">
        <p>Entrar no grupo</p>
        <Image src={IconWapp} alt="Wapp" />
      </button>
    </a>
  );
};

const WhatsAppCTA: React.FC<Props> = ({ link, text }) => {
  return (
    <div className="py-[24px] lg:px-[50px] px-[30px] relative bg-[#F4F4F4] lg:w-[775px] flex flex-col lg:flex-row border rounded-lg border-solid border-[#E4E4E4] items-center justify-between gap-4">
      <div className="text-left flex flex-col gap-4">
        <p className="font-bold text-[28px] leading-9 text-[#424242]">
          WhatsApp
        </p>
        <p className="text-base leading-7 text-[#424242]">
          {text || (
            <>
              Entre no grupo de WhatsApp para receber{" "}
              <span className="lg:font-bold">
                notificações e materiais de apoio.
              </span>
            </>
          )}
        </p>
      </div>
      <Button link={link} />
    </div>
  );
};

export default WhatsAppCTA;
