"use client"
import Textarea from "@/components/Textarea";
import { Palette } from "lucide-react"
import { useState } from "react";

const page = () => {
  const [headFontSize, setHeadFontSize] = useState(52);
  const [headFontWeight, setHeadFontWeight] = useState(700);
  const [headFontText, setHeadFontText] = useState("Typography");
  const [headFontFamily, setHeadFontFamily] = useState("Poppins");

  const [bodyFontSize, setBodyFontSize] = useState(16);
  const [bodyFontWeight, setBodyFontWeight] = useState(300);
  const [bodyFontText, setBodyFontText] = useState("This is a long Typography sentence");

  return (
    <main className="flex min-h-[90vh] items-center justify-between mx-6 gap-8">

      {/* left */}
      <div className="w-full max-w-2/3 text-center space-y-4">
        <div className="h-[70vh] rounded-2xl bg-white/60 overflow-y-scroll shadow-lg border border-neutral-300">
          {/* topbar */}
          <div className="flex items-center gap-1.5 border-b border-neutral-200 shadow-sm px-6 py-4">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
          </div>

          {/* editor */}
          <div className="p-6">
            <Textarea
              rows={1}
              fontSize={headFontSize}
              fontFamily={headFontFamily}
              weight={headFontWeight}
              text={headFontText}
              setText={setHeadFontText}
            />
            <Textarea
              rows={1}
              fontSize={bodyFontSize}
              fontFamily={headFontFamily}
              weight={bodyFontWeight}
              text={bodyFontText}
              setText={setBodyFontText}
            />
          </div>

        </div>
        <span className="text-muted-foreground text-sm">
          You can edit the text above to test different fonts
        </span>
      </div>

      {/* right */}
      <aside className="rounded-2xl bg-white/60 overflow-hidden shadow-lg border border-neutral-300 text-foreground/80 flex-1">
        <div className="flex items-center gap-1.5 border-b border-neutral-200 shadow-sm px-6 py-4">
          <Palette />
          <span className="font-bold text-xl">Styling</span>
        </div>
        <div className="px-6 py-4 space-y-4">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-red-200 w-fit flex items-center justify-center px-1 py-0.5 rounded-md font-bold text-foreground/50">H1</div>
            <h2>Header Font</h2>
          </div>
          <select
            id="headFont"
            className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
            onChange={e => setHeadFontFamily(e.target.value)}
          >
            <option value="Poppins">Poppins</option>
            <option value="serif">Serif</option>
            <option value="sans-serif">Sans-Serif</option>
            <option value="monospace">Monospace</option>
          </select>

          <div>
            <div className="flex justify-between mb-2 text-xs text-muted-foreground pointer-events-none">
              <span>Font Size</span>
              <span id="size">96px</span>
            </div>
            <input
              type="range"
              id="size"
              className="appearance-none bg-transparent cursor-pointer w-full
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-runnable-track]:bg-primary/80
                [&::-moz-range-track]:rounded-full
                [&::-moz-range-track]:bg-primary/80"
              min="36"
              max="96"
              step="4"
              value={headFontSize}
              onChange={(e) => setHeadFontSize(parseInt(e.target.value))}
            />
          </div>
          <div>
            <div className="flex justify-between mb-2 text-xs text-muted-foreground pointer-events-none">
              <span>Font Weight</span>
              <span id="size">900</span>
            </div>
            <input
              type="range"
              id="size"
              className="appearance-none bg-transparent cursor-pointer w-full
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-runnable-track]:bg-primary/80
                [&::-moz-range-track]:rounded-full
                [&::-moz-range-track]:bg-primary/80"
              min="100"
              max="900"
              step="100"
              value={headFontWeight}
              onChange={(e) => setHeadFontWeight(parseInt(e.target.value))}
            />
          </div>
        </div>
      </aside>
    </main>
  )
}

export default page
