import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return (
    <div
      className={`${className} max-w-[320px] lg:max-w-[940px] xl:max-w-[1200px] mx-auto`}
    >
      {children}
    </div>
  );
}

export default Container;
