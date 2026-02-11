"use client";

import { CurrentPage } from "@/types/CurrentPage";
import { NextFont } from "next/dist/compiled/@next/font";
import { useRouter } from "next/navigation";

const NavMenu = ({
  fontObject,
  currentPage,
}: {
  fontObject: NextFont;
  currentPage: CurrentPage;
}) => {
  const router = useRouter();
  return (
    <div
      className={`h-10 absolute right-0  flex text-2xl px-7 gap-2 justify-end text-[#B0B0B0] ${fontObject.className}`}
    >
      <div
        onClick={() => router.push("/")}
        className={`p-1 ${currentPage == CurrentPage.HOME ? "text-[#00F600]  hover:text-[#007200] " : "hover:text-[#00F600] "} hover:text-[#00F600] transition-all duration-300 `}
      >
        home
      </div>
      <div
      onClick={()=>router.push("/about")}
        className={`p-1 ${currentPage == CurrentPage.ABOUT ? "text-[#00F600]  hover:text-[#007200] " : "hover:text-[#00F600] "} hover:text-[#00F600] transition-all duration-300 `}
      >
        about
      </div>
    </div>
  );
};

export default NavMenu;
