import NavMenu from "@/components/NavMenu";
import SubText from "@/components/SubText";
import TypographedLogo from "@/components/TypographedLogo";
import { JetBrains_Mono } from "next/font/google";
import { CurrentPage } from "@/types/CurrentPage";

const jetBrainsMono = JetBrains_Mono();

const AboutPage = () => {
  return (
    <div className="bg-[#161616] h-screen cursor-default flex flex-col gap-0 m-0 p-0 relative">
      <NavMenu currentPage={CurrentPage.ABOUT} fontObject={jetBrainsMono} />

      
    </div>
  );
};

export default AboutPage;
