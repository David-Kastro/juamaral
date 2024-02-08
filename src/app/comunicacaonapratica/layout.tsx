import "react-modal-video/css/modal-video.css";
import { Montserrat } from "next/font/google";
import TagScripts, { NoScripts } from "@/_components/Tags";
// import { Suspense } from "react";
// import Tagmanager from "@/_components/Tagmanager";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  description:
    "Entenda porque muitas pessoas sentem vergonha e timidez ao gravar vídeos. Chegou a sua hora de brilhar! Prepare-se para aparecer no vídeo!",
};

export default function Layout({ children }: any) {
  return (
    <>
      <html lang="pt-br">
        <head>
          <TagScripts />
        </head>
        <body className={montserrat.className}>
          <NoScripts />
          {children}
        </body>
      </html>
    </>
  );
}
