import React from "react";
import { Button } from "@/_components/WhatsAppCTA";

export interface StepType {
  type?: "default" | "whatsapp";
  highlight?: "none" | "light" | "extra";
  title?: string | JSX.Element;
  text?: string | JSX.Element;
  hideStep?: boolean;
}

interface Props {
  steps: StepType[];
  link?: string;
}

const Steps: React.FC<Props> = ({ link = "", steps: rawSteps }) => {
  const steps = rawSteps.map((step) => {
    return {
      type: step.type || "default",
      highlight: step.highlight || "none",
      title: step.title,
      text: step.text,
      hideStep: !!step.hideStep,
    };
  });

  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      {steps.map((step, index) => (
        <div
          key={`step_${index}`}
          className={`py-[24px] lg:px-[50px] px-[30px] relative ${
            step.highlight === "extra" ? "bg-[#03CBD11A]" : "bg-[#F4F4F4]"
          } lg:w-[775px] flex flex-col ${
            step.type === "whatsapp" && step.highlight !== "extra"
              ? "lg:flex-row"
              : ""
          } border border-solid rounded-lg ${
            (step.highlight === "none" && "border-[#E4E4E4]") ||
            (step.highlight === "light" && "border-[#03CBD1]") ||
            (step.highlight === "extra" && "border-[#03CBD1]")
          } ${
            step.highlight === "extra" ? "items-left" : "items-center"
          } justify-between gap-4 relative`}
        >
          {!step.hideStep && (
            <div className="absolute bg-[#03CBD1] text-white font-black px-5 py-1 rounded-[10px] left-6 lg:left-12 -top-4">
              Passo {index + 1}
            </div>
          )}
          <div
            className={`w-full text-left flex flex-col gap-4 ${
              !step.hideStep ? "pt-5" : ""
            }`}
          >
            <p className="font-bold text-[22px] lg:text-[28px] lg:leading-9 leading-7 text-[#424242] max-w-[470px]">
              {step.title || (step.type === "whatsapp" && "WhatsApp") || ""}
            </p>
            <p className="text-[0.85rem] leading-5 lg:text-base lg:leading-7 text-[#424242]">
              {step.text ||
                (step.type === "whatsapp" && (
                  <>
                    Entre no grupo de WhatsApp para receber{" "}
                    <span className="font-bold">
                      novidades, dicas e materiais de apoio.
                    </span>
                  </>
                )) ||
                ""}
            </p>
          </div>
          {step.type === "whatsapp" && <Button link={link} />}
        </div>
      ))}
    </div>
  );
};

export default Steps;
