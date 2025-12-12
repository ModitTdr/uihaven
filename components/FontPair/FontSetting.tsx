import { Heart, Palette, ShuffleIcon } from "lucide-react"
import FontControls from "../FontControls"
import Button from "../Button"
import { FontReturn } from "@/hooks/useFont";

type Props = {
  header: FontReturn,
  paragraph: FontReturn,
}
const FontSetting = ({ header, paragraph }: Props) => {
  return (
    <aside className="rounded-2xl bg-white/60 overflow-hidden shadow-lg border border-neutral-300 text-foreground/80 w-full md:max-w-xs flex flex-col-reverse md:flex-col justify-self-center">
      <div className="flex items-center justify-between border-t md:border-b border-neutral-200 shadow-sm px-6 py-3">
        <div className="flex items-center gap-1.5 text-sm md:text-xl">
          <Palette />
          <span className="font-bold">Font Settings</span>
        </div>
      </div>
      <div className="overflow-scroll h-[30vh] md:h-[80vh]">
        <FontControls
          label="H1"
          title="Header"
          fontFamily={header.family}
          setFontFamily={header.setFamily}
          fontSize={header.size}
          setFontSize={header.setSize}
          fontWeight={header.weight}
          setFontWeight={header.setWeight}
        />
        <FontControls
          label="P"
          title="Paragraph"
          fontFamily={paragraph.family}
          setFontFamily={paragraph.setFamily}
          fontSize={paragraph.size}
          setFontSize={paragraph.setSize}
          fontWeight={paragraph.weight}
          setFontWeight={paragraph.setWeight}
        />
        <div className="gap-2 h-fit mx-2 my-2 flex flex-wrap justify-center">
          <Button variant="outline" size="sm" title="Shuffle Fonts">
            <ShuffleIcon size={14} />
            Shuffle Fonts
          </Button>
          <Button size="sm" title="Save Font Pair">
            <Heart
              size={16}
              className="group-hover:fill-white group-hover:text-transparent"
            />
            Save Pair
          </Button>
        </div>
      </div>
    </aside>
  )
}

export default FontSetting
