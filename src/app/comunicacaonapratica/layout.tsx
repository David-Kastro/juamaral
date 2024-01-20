import "react-modal-video/css/modal-video.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Light Copy | Vendas",
  description:
    "Entenda tudo sobre essa nova abordagem de comunicação “inofensiva”, que justamente por não mostrar as garras do marketing digital, vende muito",
};

export default function Layout({ children }: any) {
  return (
    <>
      <main className={montserrat.className}>{children}</main>
    </>
  );
}
