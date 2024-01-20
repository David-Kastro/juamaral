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
            description="Lorem ipsum dolor sit amet. Et voluptatem molestias vel perspiciatis molestiae ab consequatur neque vel omnis asperiores. Ea incidunt natus non soluta voluptatem qui enim consequuntur qui dolorem recusandae id facilis praesentium est voluptatem illum rem distinctio internos!"
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
            description="Lorem ipsum dolor sit amet. Et voluptatem molestias vel perspiciatis molestiae ab consequatur neque vel omnis asperiores. Ea incidunt natus non soluta voluptatem qui enim consequuntur qui dolorem recusandae id facilis praesentium est voluptatem illum rem distinctio internos!"
          />

          <CardBonus
            index={1}
            title={
              <>
                <span className="text-[#BD4A65] font-extrabold">E-book:</span>{" "}
                Juliana Amaral - Comunicação na Prática
              </>
            }
            description="Lorem ipsum dolor sit amet. Et voluptatem molestias vel perspiciatis molestiae ab consequatur neque vel omnis asperiores. Ea incidunt natus non soluta voluptatem qui enim consequuntur qui dolorem recusandae id facilis praesentium est voluptatem illum rem distinctio internos!"
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
            description="Lorem ipsum dolor sit amet. Et voluptatem molestias vel perspiciatis molestiae ab consequatur neque vel omnis asperiores. Ea incidunt natus non soluta voluptatem qui enim consequuntur qui dolorem recusandae id facilis praesentium est voluptatem illum rem distinctio internos!"
          />

          <CardBonus
            index={3}
            title="Exercícios de trava-língua"
            description="Lorem ipsum dolor sit amet. Et voluptatem molestias vel perspiciatis molestiae ab consequatur neque vel omnis asperiores. Ea incidunt natus non soluta voluptatem qui enim consequuntur qui dolorem recusandae id facilis praesentium est voluptatem illum rem distinctio internos!"
          />

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
            description="Lorem ipsum dolor sit amet. Et voluptatem molestias vel perspiciatis molestiae ab consequatur neque vel omnis asperiores. Ea incidunt natus non soluta voluptatem qui enim consequuntur qui dolorem recusandae id facilis praesentium est voluptatem illum rem distinctio internos!"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionBonus;
