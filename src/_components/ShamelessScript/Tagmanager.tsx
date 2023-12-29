"use client";
import TagManager from "react-gtm-module";
import useGetCrawlerInterno from "./utils";

export default function Tagmanager() {
  useGetCrawlerInterno((isCrawling) => {
    if (!isCrawling) {
      TagManager.initialize({ gtmId: "GTM-N73KWRD" });
    }
  });

  return null;
}
