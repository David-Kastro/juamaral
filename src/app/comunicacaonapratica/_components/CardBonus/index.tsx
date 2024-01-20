import React from "react";

interface Props {
  index: number | string | React.ReactNode;
  title: string | React.ReactNode;
  description: string;
}

function CardBonus({ description, title, index }: Props) {
  return (
    <div className="w-full flex flex-col p-[2.5rem] rounded-[1.25rem] border-[2px] border-[#BD4A65] items-start gap-[1.31rem]">
      <p className="text-[1rem] leading-[1.75rem] font-extrabold">
        Bônus {index}
      </p>
      <h1 className="font-bold text-[1.625rem]">{title}</h1>
      <p className="text-[1rem] leading-[1.75rem] font-medium">{description}</p>
    </div>
  );
}

export default CardBonus;
