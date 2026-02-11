"use client";
import { DocsRedirect, HandleClipboardCopy, setClientCacheAndReturn } from "@/lib/ClientHelpers";
import { CommandElement } from "@/types/CommandElement";
import { NextFont } from "next/dist/compiled/@next/font";
import { useState, useEffect } from "react";
import {testSupabase} from "@/lib/DataFetcherHelpers";

const Card = ({ fontObject }: {
  fontObject: NextFont;
}) => {
  const [commandObject, setCommandObject] = useState<CommandElement | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    
    const fetchCommand = async () => {
      const cmd = await setClientCacheAndReturn();
      setCommandObject(cmd);
    };
    fetchCommand();
  }, []);

  if (!commandObject) return <div className={`${fontObject.className} text-white`}>Loading...</div>;

  return (
    <div className={`${fontObject.className} shadow-[4px_4px_0px_black] w-100 sm:w-130 flex flex-col`}>
      <div
        onClick={() => DocsRedirect(commandObject.documentation)}
        className="cursor-pointer w-full h-15 bg-[#1F1F1F] flex gap-3 p-3 px-6 text-2xl"
      >
        <div className="font-semibold text-3xl text-[#004700]">$</div>
        <div className="text-3xl text-white">{commandObject.base_name}</div>
      </div>

      <div className="p-3 text-xl h-26 text-[#B0B0B0] bg-[#2D2C2C]">
        {commandObject.description}
      </div>

      <div
        onClick={() => setExpanded((p) => !p)}
        className="cursor-pointer w-full h-12 text-xl p-2 px-3 text-[#CFCFCF] bg-[#1F1F1F] self-end"
      >
        {expanded ? "Usage Examples" : "Show Usage Examples ?"}
      </div>

      <div
        className={`${
          expanded ? "max-h-40 opacity-100 " : "p-0 max-h-0 opacity-0"
        } flex flex-col z-99 transition-all duration-300 bg-[#2D2C2C]`}
      >
        {commandObject.usageExamples?.map((example, index) => (
          <div
            key={index}
            onClick={() => HandleClipboardCopy(example.command)}
            className="flex justify-between px-3 cursor-default hover:bg-[#272727]"
          >
            <div className="text-white">{example.command}</div>
            <div className="text-[#5DAF00]"># {example.usage}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
