import React from "react";
import Oferta from "../Oferta";
import Image from "next/image";
import Payments from "@images/payment-options.png";

const DEFAULT_LINK =
  "https://pay.hotmart.com/W62061130X?sck=HOTMART_PRODUCT_PAGE&off=i7s5smdz&hotfeature=32&_gl=1*gnqchy*_ga*NjE3Mzc3NjYyLjE2ODcxMDIzMDg.*_ga_GQH2V1F11Q*MTcwNTk2MjMyOS44MS4wLjE3MDU5NjIzMjkuNjAuMC4w&bid=1705962334697";

interface Props {
  link?: string;
  label: string;
  oferta?: boolean;
}

const CTA: React.FC<Props> = ({ link = DEFAULT_LINK, label, oferta }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <a href={link} target="_blank" rel="noreferrer">
        <button className="bg-[#03CBD1] rounded-lg text-lg lg:text-xl font-bold gap-3 text-white py-4 px-6 flex justify-center items-center hover:scale-105 transition-all">
          {label}
        </button>
      </a>
      {!!oferta && <Oferta />}
      <Image src={Payments} alt="Pagamentos" />
    </div>
  );
};

export default CTA;
