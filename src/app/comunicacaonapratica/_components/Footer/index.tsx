import Container from "../Container/Container";
import React from "react";

interface Props {
  raw?: boolean;
}

function Footer({ raw }: Props) {
  return (
    <div
      className={`h-[96px] ${
        raw
          ? "bg-[#F8F8F8] text-[#1D1D1D]"
          : "bg-[#121212] mt-[171px] text-[#707070]"
      } flex justify-center items-center text-center`}
    >
      <Container>
        <p>© Venda Todo Santo Dia. Todos os direitos reservados</p>
      </Container>
    </div>
  );
}

export default Footer;
