import Container from "@/_components/Container/Container";
import React from "react";

function CongratsTopo() {
  return (
    <div className="mt-14 mb-20 flex justify-center items-center text-[#FFFFFF] text-center">
      <Container className="flex flex-col justify-center items-center">
        <p className="text-[32px] leading-[40px] font-bold text-center">
          <span className="text-[44px] leading-[34px] text-[#FFB74B]">
            Parabéns,
          </span>
          <br />
          você acabou de entrar no Clubê
          <br />
          Seu acesso será enviado em instantes para o e-mail cadastrado.
        </p>
        <div className="font-bold w-fit mt-8 text-xl leading-[34px] text-center text-white p-2 px-4 bg-[#3B3B3B]">
          Enquanto isso, você precisa ver…
        </div>
      </Container>
    </div>
  );
}

export default CongratsTopo;
