import { NextFont } from "next/dist/compiled/@next/font";

const SubText = ({ text, hexColour, fontObject }: { text: string; hexColour: string , fontObject : NextFont}) => {
  return (
    <div className={`${fontObject.className} sm:text-lg text-wrap `} style={{ color: `#${hexColour}` }}>
      {text}
    </div>
  );
};

export default SubText;
