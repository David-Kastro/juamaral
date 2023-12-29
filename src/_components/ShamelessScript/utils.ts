"use client";
import { useEffect, useState } from "react";

export default function useGetCrawlerInterno(
  callback?: (isCrowling: boolean) => void
) {
  const [isCrowling, setIsCrowling] = useState(true);
  useEffect(() => {
    if (typeof (navigator as any).userAgentData != "undefined") {
      let retorno = false;
      (navigator as any).userAgentData.brands.forEach(function (item: any) {
        if (
          item.brand.toLowerCase() == "lighthouse" ||
          item.brand.toLowerCase() == "gtmetrix"
        ) {
          retorno = true;
        }
      });
      if (!retorno) {
        retorno =
          window.navigator.userAgent.indexOf("GTmetrix") !== -1 ? true : false;
      }

      setIsCrowling(retorno);
    } else {
      if (
        window.navigator.userAgent.indexOf("GTmetrix") !== -1 ||
        window.navigator.userAgent.indexOf("Lighthouse") !== -1
      ) {
        setIsCrowling(true);
      } else {
        setIsCrowling(false);
      }
    }
  }, []);

  if (!!callback) {
    callback(isCrowling);
  }

  return isCrowling;
}
