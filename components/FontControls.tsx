import { useEffect, useState } from "react";
import { fontFamilies } from "@/data/fonts";
import InputRange from "./InputRange";

export type fontFamilyType = {
  name: string,
  family: string,
  category: string,
  weights: number[]
}
type Props = {
  fontFamily: string;
  setNewFamily: (v: fontFamilyType) => void;
  fontSize: number;
  setFontSize: (v: number) => void;
  fontWeights: number[];
  fontWeight: number;
  setFontWeight: (v: number) => void;
  letterSpace: number;
  setLetterSpace: (v: number) => void;
  label: string;
  title: string;
};

export default function FontControls({
  fontFamily,
  setNewFamily,
  fontSize,
  setFontSize,
  fontWeights,
  fontWeight,
  setFontWeight,
  letterSpace,
  setLetterSpace,
  label,
  title,
}: Props) {
  const [maxFontSize, setMaxFontSize] = useState(96);
  const minFontWeight = Math.min(...fontWeights), maxFontWeight = Math.max(...fontWeights), stepFontWeight = 100;
  const minLetterSpace = -0.1, maxLetterSpace = 0.1, stepLetterSpace = 0.01;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxFontSize(52);
      } else if (window.innerWidth < 1024) {
        setMaxFontSize(72);
      } else {
        setMaxFontSize(96);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="px-6 py-3 space-y-4 border-b border-muted-background">
      <div className="flex items-center justify-start gap-2">
        <div className="bg-red-200 w-7 h-7 flex items-center justify-center rounded-md text-xs font-bold text-foreground/50">
          {label}
        </div>
        <h2>{title}</h2>
      </div>
      <select
        className="w-full border border-background text-muted-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
        value={fontFamily}
        onChange={(e) => {
          const font = fontFamilies.find((font) => font.family === e.target.value);
          if (font) {
            setNewFamily(font);
          }
        }}
      >
        {
          fontFamilies.map((font) => (
            <option key={font.name} value={font.family}>{font.name}</option>
          ))
        }
      </select>

      {/* font size */}
      <div className="pb-3 flex flex-col">
        <span className="text-xs text-muted-foreground pointer-events-none">
          Font Size
        </span>
        <InputRange
          min={label === "H1" ? 36 : 12}
          max={label === "H1" ? maxFontSize : 32}
          step={4}
          value={fontSize}
          onChange={setFontSize}
        />
        <div
          id="size"
          className="w-full flex justify-between text-xs text-muted-foreground pointer-events-none"
        >
          <span>{label === "H1" ? 36 : 12}px</span>
          <span>{maxFontSize}px</span>
        </div>
      </div>
      {/* font weight */}
      <div className="pb-3 flex flex-col">
        <span className="text-xs text-muted-foreground pointer-events-none">
          Font Weight
        </span>
        <InputRange
          min={minFontWeight}
          max={maxFontWeight}
          step={stepFontWeight}
          value={fontWeight}
          onChange={setFontWeight}
        />
        <div
          id="size"
          className="w-full flex justify-between text-xs text-muted-foreground pointer-events-none"
        >
          <span>{minFontWeight}</span>
          <span>{maxFontWeight}</span>
        </div>
      </div>
      {/* letter spacing */}
      <div className="pb-3 flex flex-col">
        <span className="text-xs text-muted-foreground pointer-events-none">
          Letter Spacing
        </span>
        <InputRange
          min={minLetterSpace}
          max={maxLetterSpace}
          step={stepLetterSpace}
          value={letterSpace}
          onChange={setLetterSpace}
        />
        <div
          id="size"
          className="w-full flex justify-between text-xs text-muted-foreground pointer-events-none"
        >
          <span>{minLetterSpace}em</span>
          <span>{maxLetterSpace}em</span>
        </div>
      </div>
    </div>
  );
}
