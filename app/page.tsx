import Card from "@/components/Card";
import SubText from "@/components/SubText";
import TypographedLogo from "@/components/TypographedLogo";
import { JetBrains_Mono, Ubuntu_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono();
const ubuntuMono = Ubuntu_Mono({weight:"400"});
export default function Home() {
  return (
    <div className="bg-[#161616] h-screen cursor-default flex flex-col gap-0 m-0 p-0 ">
      <div className="flex w-screen justify-center p-1">
        <TypographedLogo />
      </div>
      <div className="flex w-screen justify-center">
        <SubText
          fontObject={jetBrainsMono}
          text="Your Linux Command for today..."
          hexColour="707070"
        />
      </div> 
      <div className="flex w-screen p-5 justify-center">
        <Card  fontObject={ubuntuMono} />
      </div>
      <div className="flex w-screen justify-center">
        <SubText
          fontObject={jetBrainsMono}
          text="# See you tomorrow for a new command! "
          hexColour="00F600"
        />
      </div>
    </div>
  );
}
