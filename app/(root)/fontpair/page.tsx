"use client";
import TextEditor from "@/components/FontPair/TextEditor";
import FontSetting from "@/components/FontPair/FontSetting";
import useFont from "@/hooks/useFont";

const Page = () => {
  const header = useFont({
    fontFamily: "Poppins",
    fontSize: 48,
    fontWeight: 700,
    letterSpace: 0.01,
    displayText: "Typography",
  });
  const paragraph = useFont({
    fontFamily: "Monospace",
    fontSize: 16,
    fontWeight: 300,
    letterSpace: -0.025,
    displayText: "This is a long Typography sentence",
  });

  return (
    <div className="min-h-[90vh] mx-2 sm:mx-6 py-1 gap-1 grid grid-cols-1 md:grid-cols-[65%_1fr] lg:grid-cols-[72%_1fr] overflow-hidden">
      {/* left- text_editor */}
      <TextEditor header={header} paragraph={paragraph} />
      {/* right */}
      <FontSetting header={header} paragraph={paragraph} />
    </div>
  );
};

export default Page;
