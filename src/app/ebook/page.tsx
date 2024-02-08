import React from "react";
import Image from "next/image";
import Footer from "@/_components/Footer";
import Logo from "@images/logo-white.png";
import CheckIcon from "@images/check-icon.svg";

export const metadata = {
  title: "Garanta seu E-book",
  description:
    "Tenha acesso a segredos e dicas para desbloquear sua confiança ao falar diante das câmeras, construir conexões mais profundas e fazer suas ideias brilharem.",
};

function PageCaptura() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col pb-20">
        <div className="w-full bg-topo min-h-[45rem] text-white">
          <div className="flex max-w-[1200px] mx-auto px-6 py-10">
            <div className="w-full lg:w-[60%] flex flex-col gap-5">
              <Image src={Logo} alt="Logo" />
              <h1
                id="form"
                className="text-[1rem] lg:text-[1.375rem] font-semibold"
              >
                Você já sentiu aquele{" "}
                <span className="text-[#03CBD1]">
                  frio na barriga na hora de se expressar?{" "}
                </span>
                Ou talvez tenha desejado{" "}
                <span className="text-[#03CBD1]">
                  transmitir suas ideias com mais clareza e impacto?
                </span>{" "}
                Se sim, você não está sozinho! A boa notícia é que estou aqui
                para te ajudar a{" "}
                <span className="text-[#03CBD1]">
                  transformar sua comunicação de uma vez por todas.
                </span>
              </h1>
              <form
                action="/email/index.php"
                method="POST"
                className="flex flex-col gap-4 lg:gap-5 max-w-[32rem]"
              >
                <input type="text" name="name" placeholder="Nome" required />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#03CBD1] rounded-lg text-base font-bold gap-3 text-white py-4 px-6 flex justify-center items-center"
                >
                  Quero fazer parte agora!
                </button>
              </form>
            </div>
            <div className="w-[40%] hidden lg:block"></div>
          </div>
        </div>

        <div className="flex flex-col max-w-[1000px] text-[#2E2E2E] mx-auto px-6 mt-16">
          <h2 className="text-[1.75rem] leading-9 lg:text-[2.375rem] lg:leading-10 font-bold mb-6">
            No e-book &quot;
            <span className="text-[#BD4A65]">Comunicação na Prática</span>
            &quot;...
          </h2>
          <p className="text-[1.125rem] lg:text-[1.375rem] font-medium">
            você terá acesso a segredos e dicas que vão além do comum. É como
            descobrir um mapa do tesouro para desbloquear sua confiança ao falar
            diante das câmeras, construir conexões mais profundas e fazer suas
            ideias brilharem.
            <br />
            <br />
            <span className="text-[#BD4A65] font-bold">Você vai aprender:</span>
          </p>

          <div className="flex flex-col gap-6 lg:gap-9 mt-10">
            <div className="flex items-center gap-5 lg:gap-8">
              <Image
                className="max-w-[28px] lg:max-w-[42px]"
                src={CheckIcon}
                alt="check icon"
              />
              <p className="text-[1.125rem] lg:text-[1.75rem] font-medium leading-6 lg:leading-9">
                Maneiras de superar aquele nervosismo chato ao falar em público
                e diante das câmeras.
              </p>
            </div>

            <div className="flex items-center gap-5 lg:gap-8">
              <Image
                className="max-w-[28px] lg:max-w-[42px]"
                src={CheckIcon}
                alt="check icon"
              />
              <p className="text-[1.125rem] lg:text-[1.75rem] font-medium leading-6 lg:leading-9">
                Como fortalecer laços e relacionamentos por meio de uma
                comunicação autêntica.
              </p>
            </div>

            <div className="flex items-center gap-5 lg:gap-8">
              <Image
                className="max-w-[28px] lg:max-w-[42px]"
                src={CheckIcon}
                alt="check icon"
              />
              <p className="text-[1.125rem] lg:text-[1.75rem] font-medium leading-6 lg:leading-9">
                Dicas práticas para arrasar em entrevistas e lives.
              </p>
            </div>

            <div className="flex items-center gap-5 lg:gap-8">
              <Image
                className="max-w-[28px] lg:max-w-[42px]"
                src={CheckIcon}
                alt="check icon"
              />
              <p className="text-[1.125rem] lg:text-[1.75rem] font-medium leading-6 lg:leading-9">
                Segredos para expressar suas ideias com clareza e melhorar a
                comunicação.
              </p>
            </div>
          </div>

          <div className="rounded-[0.625rem] bg-[#EFEFEF] mt-10 lg:mt-20 flex flex-col p-6 gap-5 lg:gap-6">
            <p className="text-center text-[1.25rem] lg:text-[1.75rem] not-italic font-bold leading-7 lg:leading-9">
              Chegou a hora de liberar o comunicador excepcional que existe
              dentro de você! Vamos nessa juntos? 🚀
            </p>
            <a href="#form">
              <button className="w-full bg-[#BD4A65] rounded-lg text-[1rem] lg:text-[1.5rem] font-bold gap-3 text-white py-4 px-6 flex justify-center items-center">
                Quero fazer parte agora!
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageCaptura;
