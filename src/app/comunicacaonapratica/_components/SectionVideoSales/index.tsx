"use client";
import React, { useState } from "react";
import CTA from "../CTA";

function SectionVideo() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto -mt-60">
      <div id="video-section" className="w-full">
        <iframe
          className="w-full lg:h-[676px] h-[274px] rounded-2xl"
          src="https://www.youtube.com/embed/s5narwknQiE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center justify-center mt-[24px] lg:text-[2rem]">
        <CTA
          label={
            "Sim. Quero elevar o nível da oratória e dominar a arte de gravar vídeos"
          }
          oferta={true}
        />
      </div>
      <div className="mt-[92px] h-[1px] bg-[#565656]"></div>
    </div>
  );
}

export default SectionVideo;
