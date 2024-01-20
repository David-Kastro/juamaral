import React from "react";

interface Props {
  title: string;
  tema: string;
  disabled?: boolean;
}

function CardEncontro({ tema, title, disabled }: Props) {
  return (
    <div className="px-[2rem] py-[2.5rem] bg-[#0F0F0F] rounded-[1rem] border border-[#E9E0D199] min-h-[234px] w-[287px] relative">
      <p className="text-[#DCDCDC] font-bold text-[1.125rem]">{title}</p>
      <p className="text-[#FFF] font-bold text-[1rem] mt-[0.62rem]">Tema:</p>
      <p className="text-[#DCDCDC] text-[1rem] leading-[1.5rem]">{tema}</p>
      {disabled ? (
        <div className="px-[1rem] py-[0.5rem] rounded-[3rem] border border-[#f3b456] absolute bottom-5">
          <p className="text-[#fff] text-[0.81rem] text-center font-extrabold">
            Gravação disponível.
          </p>
        </div>
      ) : (
        <div className="px-[1rem] py-[0.5rem] rounded-[3rem] border border-[#E9E0D199] bg-[#232323] absolute bottom-5">
          <p className="text-[#FFB931] text-[0.81rem] text-center font-extrabold">
            Você poderá participar.
          </p>
        </div>
      )}
    </div>
  );
}

export default CardEncontro;
