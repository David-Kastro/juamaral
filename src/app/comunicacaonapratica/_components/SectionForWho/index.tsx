import React from "react";
import CTA from "../CTA";

function SectionForWho() {
  return (
    <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto">
      <div className="flex flex-col justify-center mt-16">
        <div className=" flex flex-col justify-center gap-2">
          <h2 className="text-center text-[2rem] lg:text-[3rem] font-semibold leading-[normal]">
            Quem deve fazer esse curso
          </h2>
          <p className="text-[#232323] text-center text-base not-italic font-medium leading-7 opacity-80">
            Essas são as principais profissões que mais{" "}
            <br className="hidden lg:block" />
            se beneficiam com o curso
          </p>
        </div>

        <p className="max-w-[62.3125rem] mx-auto text-lg not-italic font-semibold leading-8 mt-[2rem]">
          ESSE CURSO É PERFEITO PARA:
          <br />
          <br />
          <span className="text-[#BD4A65] font-bold">
            - Professores e Instrutores:
          </span>{" "}
          aprimore suas habilidades de ensino online, tornando suas aulas mais
          impactantes e memoráveis.
          <br />
          <br />
          <span className="text-[#BD4A65] font-bold">
            - Profissional da saúde:
          </span>{" "}
          aumente o seu prestígio, dê credibilidade à marca pessoal, e amplie o
          campo de influência.
          <br />
          <br />
          <span className="text-[#BD4A65] font-bold">
            - Empreendedores e Empresários:
          </span>{" "}
          construa uma presença forte e autêntica para promover sua marca e seus
          produtos.
          <br />
          <br />
          <span className="text-[#BD4A65] font-bold">- Advogados:</span>{" "}
          aprimore suas habilidades de falar em público e se comunicar diante
          das câmeras, destaque-se no mercado e alavanque novos negócios.
          <br />
          <br />
          <span className="text-[#BD4A65] font-bold">
            - Profissionais de Marketing Digital:
          </span>{" "}
          torne-se uma referência no seu nicho, criando conteúdo envolvente e
          convincente.
          <br />
          <br />
          <span className="text-[#BD4A65] font-bold">
            - Coaches e Consultores:
          </span>{" "}
          estabeleça uma conexão mais profunda com seus clientes, demonstrando
          confiança e empatia.
          <br />
          <br />
          <span className="text-[#BD4A65] font-bold">
            - Artistas e Criadores de Conteúdo:
          </span>{" "}
          ganhe visibilidade e fãs, transmitindo autenticidade e paixão por meio
          das câmeras.
          <br />
          <br />
          <span className="text-[#BD4A65] font-bold">
            - Profissionais de Vendas:
          </span>{" "}
          conquiste a confiança de seus clientes e feche mais negócios com uma
          comunicação poderosa.
        </p>
      </div>
      <div className=" my-20">
        <CTA label="Sim. Quero ter confiança para gravar videoaulas, entrevista, lives e podcast" />
      </div>
    </div>
  );
}

export default SectionForWho;
