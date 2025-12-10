"use client"
import Button from "@/components/Button";
import FontControls from "@/components/FontControls";
import Textarea from "@/components/Textarea";
import { Heart, Palette, ShuffleIcon } from "lucide-react"
import { useState } from "react";

const page = () => {
  const [headFontSize, setHeadFontSize] = useState(48);
  const [headFontWeight, setHeadFontWeight] = useState(700);
  const [headFontText, setHeadFontText] = useState("Typography");
  const [headFontFamily, setHeadFontFamily] = useState("Poppins");

  const [bodyFontSize, setBodyFontSize] = useState(16);
  const [bodyFontWeight, setBodyFontWeight] = useState(300);
  const [bodyFontText, setBodyFontText] = useState("This is a long Typography sentence");
  const [bodyFontFamily, setBodyFontFamily] = useState("Poppins");

  return (
    <main className="flex min-h-[90vh] items-center md:items-start justify-between mx-2 sm:mx-6 gap-5 flex-col md:flex-row">

      {/* left */}
      <div className="text-center space-y-4 flex-1">
        <div className="h-[60vh] sm:h-[78vh] rounded-2xl bg-white/60 overflow-y-scroll shadow-lg border border-neutral-300">
          {/* topbar */}
          <div className="flex items-center gap-1.5 border-b border-neutral-200 shadow-sm px-5 py-2.5">
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
              fontSize={bodyFontSize}
              fontFamily={bodyFontFamily}
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
      <aside className="rounded-2xl bg-white/60 overflow-hidden shadow-lg border border-neutral-300 text-foreground/80 w-full min-w-[340px] max-w-xs ">
        <div className="flex items-center justify-between border-b border-neutral-200 shadow-sm px-6 py-4">
          <div className="flex items-center gap-1.5 ">
            <Palette />
            <span className="font-bold text-xl">Font Settings</span>
          </div>
        </div>
        <div className="overflow-scroll h-full text-center">
          <FontControls
            label="H1"
            title="Header"
            fontFamily={headFontFamily}
            setFontFamily={setHeadFontFamily}
            fontSize={headFontSize}
            setFontSize={setHeadFontSize}
            fontWeight={headFontWeight}
            setFontWeight={setHeadFontWeight}
          />
          <FontControls
            label="P"
            title="Paragraph"
            fontFamily={bodyFontFamily}
            setFontFamily={setBodyFontFamily}
            fontSize={bodyFontSize}
            setFontSize={setBodyFontSize}
            fontWeight={bodyFontWeight}
            setFontWeight={setBodyFontWeight}
          />
          <div className="space-x-2 h-fit py-2">
            <Button variant="outline" size="sm" title="Shuffle Fonts">
              <ShuffleIcon size={14} />
              Shuffle Fonts
            </Button>
            <Button size="sm" title="Save Font Pair">
              <Heart size={16} className="group-hover:fill-white group-hover:text-transparent" />
              Save Pair
            </Button>
          </div>
        </div>
      </aside>
    </main>
  )
}

export default page
