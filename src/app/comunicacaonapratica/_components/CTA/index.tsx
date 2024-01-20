import React from "react";
import Oferta from "../Oferta";
import Image from "next/image";
import Payments from "@images/payment-options.png";

interface Props {
  link: string;
  label: string;
  oferta?: boolean;
}

const CTA: React.FC<Props> = ({ link, label, oferta }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <a href={link} target="_blank" rel="noreferrer">
        <button className="bg-[#03CBD1] rounded-lg text-xl font-bold gap-3 text-white py-4 px-6 flex justify-center items-center hover:scale-105 transition-all">
          {label}
        </button>
      </a>
      {!!oferta && <Oferta />}
      <Image src={Payments} alt="Pagamentos" />
    </div>
  );
};

export default CTA;
