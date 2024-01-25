import "react-modal-video/css/modal-video.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  description:
    "Entenda porque muitas pessoas sentem vergonha e timidez ao gravar vídeos. chegou a sua hora de brilhar! Prepare-se para aparecer no vídeo!",
};

export default function Layout({ children }: any) {
  return (
    <>
      <main className={montserrat.className}>{children}</main>
    </>
  );
}
