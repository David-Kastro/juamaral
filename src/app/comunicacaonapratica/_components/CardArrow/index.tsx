import React from "react";
import Arrow from "public/images/iconarrow.svg";
import Image from "next/image";

interface Props {
  text: string;
  textFuncionalidade?: boolean;
}

function CardArrow({ text, textFuncionalidade }: Props) {
  return (
    <div className="lg:px-[4rem] px-[1.41rem] py-[1rem] lg:py-[1.5rem] bg-[#0F0F0F] rounded-[0.5rem]">
      <div className="flex lg:gap-[2.25rem] gap-[0.66rem] lg:-ml-24 -ml-9">
        <Image src={Arrow} alt="Arrow" className="lg:w-auto w-[1.5rem]" />
        <p className="text-[#D2D2D2] font-bold lg:leading-[2.15625rem] leading-[1.5rem] lg:text-[1.75rem] text-[1rem]">
          {text}
        </p>
      </div>
      {textFuncionalidade && (
        <p className="text-[#676767] lg:text-[1rem] text-[0.75rem] mt-[0.5rem] font-medium">
          *Funcionalidade será disponibilizada no 3° semestre de 2023.
        </p>
      )}
    </div>
  );
}

export default CardArrow;
