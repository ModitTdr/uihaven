"use client";

import { useEffect, useState } from "react";
import InputRange from "./InputRange";

type Props = {
  fontFamily: string;
  setFontFamily: (v: string) => void;
  fontSize: number;
  setFontSize: (v: number) => void;
  fontWeight: number;
  setFontWeight: (v: number) => void;
  label: string;
  title: string;
};

export default function FontControls({
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  fontWeight,
  setFontWeight,
  label,
  title,
}: Props) {
  const [maxFontSize, setMaxFontSize] = useState(96);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxFontSize(48);
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
    <div className="px-6 py-3 space-y-4 border border-muted-background">
      <div className="flex items-center justify-start gap-2">
        <div className="bg-red-200 w-7 h-7 flex items-center justify-center rounded-md text-xs font-bold text-foreground/50">{label}</div>
        <h2>{title}</h2>
      </div>
      <select
        className="w-full border border-background text-muted-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
        value={fontFamily}
        onChange={e => setFontFamily(e.target.value)}
      >
        <option value="Poppins">Poppins</option>
        <option value="serif">Serif</option>
        <option value="sans-serif">Sans-Serif</option>
        <option value="monospace">Monospace</option>
      </select>

      <div className="pb-3 flex flex-col">
        <span className="text-xs text-muted-foreground pointer-events-none">Font Size</span>
        <InputRange
          min={label === "H1" ? 36 : 12}
          max={label === "H1" ? maxFontSize : 32}
          step={4}
          value={fontSize}
          onChange={setFontSize}
        />
        <div id="size" className="w-full flex justify-between text-xs text-muted-foreground pointer-events-none">
          <span>{label === "H1" ? 36 : 12}px</span>
          <span>{maxFontSize}px</span>
        </div>
      </div>
      <div className="pb-3 flex flex-col">
        <span className="text-xs text-muted-foreground pointer-events-none">Font Weight</span>
        <InputRange
          min={300}
          max={700}
          step={100}
          value={fontWeight}
          onChange={setFontWeight}
        />
        <div id="size" className="w-full flex justify-between text-xs text-muted-foreground pointer-events-none">
          <span>300</span>
          <span>700</span>
        </div>

      </div>
    </div>

  );
}
