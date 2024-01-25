"use client";
import React, { useState } from "react";
import Image from "next/image";
import Depoimento1 from "@images/depoimento1.jpg";
import Depoimento2 from "@images/depoimento2.jpg";
import Depoimento3 from "@images/depoimento3.jpg";
import Depoimento4 from "@images/depoimento4.jpg";
import Depoimento5 from "@images/depoimento5.jpg";
import Depoimento6 from "@images/depoimento6.jpg";
import Depoimento7 from "@images/depoimento7.jpg";
import Depoimento9 from "@images/depoimento9.jpg";
import Depoimento10 from "@images/depoimento10.jpg";
import CTA from "../CTA";
import ModalVideo from "react-modal-video";

const depoimentos = [
  { video: "8baOKTVIU40", thumb: Depoimento1 },
  { video: "rqBpKXRVHKM", thumb: Depoimento2 },
  { video: "H4Ak01vRAiQ", thumb: Depoimento3 },
  { video: "MMbjfng1Q74", thumb: Depoimento4 },
  { video: "N8dfKQXfVJ8", thumb: Depoimento5 },
  { video: "QmHr00PHHYk", thumb: Depoimento6 },
  { video: "BRf_JqqCH6k", thumb: Depoimento7 },
  { video: "xSZ0xSOeRhw", thumb: Depoimento9 },
  { video: "xxd_H8Bsam4", thumb: Depoimento10 },
];

function SectionResultados() {
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState("8baOKTVIU40");
  const handleVideo = (videoLink: string) => {
    setOpen(true);
    setVideo(videoLink);
  };
  return (
    <>
      <div className="lg:mt-[113px] mt-[80px] xl:w-container lg:w-[950px] w-[342px] mx-auto">
        <div className="relative lg:mb-16 mb-12">
          <div className="w-full h-[1px] bg-[#565656]"></div>
          <div className="-mt-[20px] flex justify-center w-full">
            <div className="bg-[#BD4A65] border border-[#7D7D7D] px-[24px] py-[8px] rounded-full">
              <p className="text-[15px] text-white">
                Tire suas próprias conclusões
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center gap-2">
          <h2 className="text-center text-[1.5rem] lg:text-[2rem] font-semibold leading-[normal]">
            Depoimentos de alunos da{" "}
            <span className="text-[#BD4A65] font-bold">Juliana Amaral</span>,
            criadora do curso{" "}
            <span className="text-[#BD4A65] font-bold">
              COMUNICAÇÃO NA PRÁTICA
            </span>
          </h2>
          <p className="text-[#232323] text-center text-base not-italic font-medium leading-7 opacity-80">
            Veja alguns dos resultados de alunos.
          </p>
        </div>
        <div className="flex flex-wrap gap-[2.5rem] justify-center items-center mt-[2.5rem]">
          {depoimentos.map((depoimento) => (
            <div
              key={depoimento.video}
              onClick={() => handleVideo(depoimento.video)}
              className="cursor-pointer"
            >
              <Image src={depoimento.thumb} alt={depoimento.video} />
            </div>
          ))}
        </div>
        <div className=" my-20">
          <CTA label="Sim. Quero ter confiança para gravar videoaulas, entrevista, lives e podcast" />
        </div>
        <div className="mt-[92px] h-[1px] bg-[#565656]"></div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={video}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default SectionResultados;
