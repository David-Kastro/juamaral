import Image from "next/image";
import React from "react";
import Arrow from "@images/arrow-curved.svg";
// import ButtonCustom from "@/_components/ButtonCustom";

function Oferta() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex lg:flex-row flex-col justify-center mt-[2rem] relative">
        <Image
          src={Arrow}
          alt="Arrow curved"
          className="absolute left-[20%] hidden lg:block"
        />
        <div className="px-[1.5rem] py-[1rem] pb-[1.5rem] bg-[#ffffff] rounded-[1.6875rem] border-[3px] border-solid border-[#BD4A6580] lg:w-[27.9375rem]">
          <div className="flex gap-[.9rem] items-center">
            <h1 className="lg:text-[1.75rem] text-[1.25rem] font-bold">
              Compre agora mesmo
            </h1>
          </div>

          {/* valor */}
          <div className="lg:px-[3rem] mt-[1.5rem] lg:mt-[2.13rem]">
            <p className="text-[#818181] font-bold text-[1rem]">Total</p>
            <div className="bg-[#BD4A6533] rounded-[1.6875rem] lg:py-[1.5rem] py-[.6rem] px-[0.94rem]">
              <p className="font-bold text-[#70C747] lg:text-[2.22688rem] text-[1.5rem] text-center">
                R$ 997,00
              </p>
            </div>
            <p className="text-center text-[#7F9F6B] text-[1.14669rem]">
              12x de <span className="font-bold">R$ 99,50 *</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oferta;
