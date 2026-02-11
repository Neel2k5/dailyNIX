import NavMenu from "@/components/NavMenu";
import SubText from "@/components/SubText";
import TypographedLogo from "@/components/TypographedLogo";
import { JetBrains_Mono } from "next/font/google";
import { CurrentPage } from "@/types/CurrentPage";
import AboutHLinkCard from "@/components/AboutHLinkCard";
import { FaCommentDots, FaGithub } from "react-icons/fa";
const jetBrainsMono = JetBrains_Mono();

const AboutPage = () => {
  return (
    <div className="bg-[#161616] h-screen cursor-default flex flex-col m-0 p-0 relative">
      <NavMenu currentPage={CurrentPage.ABOUT} fontObject={jetBrainsMono} />

      <div className="flex flex-col md:flex-row items-center justify-center pt-10 px-10 gap-10  ">
        <div className="shrink-0 flex items-center">
          <TypographedLogo />
        </div>

        <div className="max-w-lg text-center md:text-left">
          <SubText
            hexColour="707070"
            text="Learn a new Linux command every day, with a short description and five examples you can try in your terminal."
            fontObject={jetBrainsMono}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pt-10 px-10 gap-10  ">
        <AboutHLinkCard
        fontObject={jetBrainsMono}
          icon={<FaGithub />}
          title="Github"
          description="Check out the github repository of the project"
          link="https://github.com/Neel2k5/dailyNIX"
        />
        <AboutHLinkCard
        fontObject={jetBrainsMono}
          icon={<FaCommentDots />}
          title="Feedback"
          description="Help make this app better! Submit your thoughts and feedback."
          link="https://forms.gle/nJStjfDNL64BkB3r6"
        />
      </div>
    </div>
  );
};

export default AboutPage;
