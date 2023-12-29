"use client";
import Script, { ScriptProps } from "next/script";
import useGetCrawlerInterno from "./utils";

export default function ShamelessScript(props: ScriptProps) {
  const isCrawling = useGetCrawlerInterno();

  if (isCrawling) {
    return null;
  }

  return <Script {...props} />;
}
