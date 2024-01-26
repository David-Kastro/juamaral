import React from "react";
import CardBonus from "../CardBonus";

function SectionBonus() {
  return (
    <div className="xl:w-container lg:w-[950px] w-[342px] mx-auto">
      <div className="lg:w-[838px] mx-auto">
        <div className="mt-[5.5rem] flex flex-col gap-[2.81rem]">
          <CardBonus
            index={
              <>
                para{" "}
                <span className="text-[#BD4A65] font-extrabold">
                  A PRIMEIRA PESSOA QUE COMPRAR
                </span>
              </>
            }
            title={
              <>
                <span className="text-[#BD4A65] font-extrabold">
                  1 Consultoria exclusiva
                </span>{" "}
                com duração de 40 minutos, presencial ou online.
              </>
            }
            description="Se você for de Brasília, terá este privilégio do encontro presencial. Se você for de fora, faremos online. É uma oportunidade única, de uma consultoria particular exclusiva para você."
          />

          <CardBonus
            index={
              <>
                para as{" "}
                <span className="text-[#BD4A65] font-extrabold">
                  10 PRIMEIRAS PESSOAS QUE COMPRAREM
                </span>
              </>
            }
            title={
              <>
                <span className="text-[#BD4A65] font-extrabold">
                  1 aula ao vivo no zoom.
                </span>{" "}
                Dia e hora a serem marcados.
              </>
            }
            description="Aula ao vivo no Zoom com um seleto grupo de 10 alunos(as) e comigo, para poder tirar todas as dúvidas e aumentar seu conhecimento."
          />

          <CardBonus
            index={1}
            title={
              <>
                <span className="text-[#BD4A65] font-extrabold">E-book:</span>{" "}
                Juliana Amaral - Comunicação na Prática
              </>
            }
            description="Este sairá gratuito para você. É um material que vai potencializar o curso e te ajudar ainda mais."
          />

          <CardBonus
            index={2}
            title={
              <>
                <span className="text-[#BD4A65] font-extrabold">
                  Making off
                </span>{" "}
                das gravações de estúdio e lives Juliana Amaral
              </>
            }
          />

          <CardBonus index={3} title="Exercícios de trava-língua" />

          <CardBonus
            index={4}
            title={
              <>
                Três aulas extras do curso{" "}
                <span className="text-[#BD4A65] font-extrabold">
                  Comunicação na Prática
                </span>
              </>
            }
            description="Conteúdo exclusivo e fechado com 03 aulas extras."
          />
        </div>
      </div>
    </div>
  );
}

export default SectionBonus;
