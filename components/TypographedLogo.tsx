import { Jersey_15 } from "next/font/google";

const jersey15 = Jersey_15({ weight: "400" });

const TypographedLogo = () => {
  return (
    <div
      className={` ${jersey15.className} drop-shadow-[4px_4px_0px_black] text-[#00F600] inline text-8xl sm:text-9xl `}
    >
      Daily NIX
    </div>
  );
};

export default TypographedLogo;
