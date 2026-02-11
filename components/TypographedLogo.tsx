import { Jersey_15 } from "next/font/google";

const jersey15 = Jersey_15({ weight: "400" });

const TypographedLogo = () => {
  return (
    <div
      className={` ${jersey15.className} text-[#00F600] inline text-8xl sm:text-9xl `}
      style={{
        textShadow: "4px 4px 0px black", 
      }}
    >
      Daily NIX
    </div>
  );
};

export default TypographedLogo;
