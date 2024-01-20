import SectionTopoSales from "./_components/SectionTopoSales";
import SectionVideoSales from "./_components/SectionVideoSales";
import SectionResultados from "./_components/SectionResultados";
import SectionBonusSales from "./_components/SectionBonusSales";
import Footer from "@/_components/Footer";
import SectionLight from "./_components/SectionLight";
import SectionForWho from "./_components/SectionForWho";
import SectionBio from "./_components/SectionBio";

function Principal() {
  return (
    <div className="text-[#232323]">
      <SectionTopoSales />
      <SectionVideoSales />
      <SectionLight />
      <SectionBonusSales />
      <SectionResultados />
      <SectionForWho />
      <SectionBio />
      {/* <SectionLeandro /> */}
      <Footer />
    </div>
  );
}

export default Principal;
