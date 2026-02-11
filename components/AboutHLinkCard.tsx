"use client";

import { DocsRedirect } from "@/lib/ClientHelpers";
import { NextFont } from "next/dist/compiled/@next/font";
import { JSX } from "react";

const AboutHLinkCard = ({
  icon,
  title,
  description,
  link,
  fontObject
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  fontObject:NextFont
}) => {
  return (
    <div className="bg-[#202020] h-50 w-45 flex flex-col p-4 shadow-[4px_4px_0px_black] gap-1 rounded-lg">
      <div className="flex text-white justify-center text-7xl">
        {icon}
      </div>
      <h3 onClick={()=>DocsRedirect(link)} className={`${fontObject.className} text-white hover:text-3xl text-2xl hover:text-[#00F600] transition-all duration-200 `}>{title}</h3>
      <p className={`${ fontObject.className} text-[#707070] text-xs `}>{description}</p>
    </div>
  );
};

export default AboutHLinkCard;
