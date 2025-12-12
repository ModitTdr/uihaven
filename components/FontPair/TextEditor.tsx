import Textarea from "../Textarea"
import { FontReturn } from "@/hooks/useFont";

type Props = {
  header: FontReturn,
  paragraph: FontReturn,
}
const TextEditor = ({ header, paragraph }: Props) => {
  return (
    <div className="text-center space-y-4">
      <div className="h-[45vh] md:h-[70vh] rounded-2xl bg-white/60 overflow-y-scroll shadow-lg border border-neutral-300">
        {/* topbar */}
        <div className="flex items-center gap-1.5 border-b border-neutral-200 shadow-sm px-5 py-2.5">
          <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
        </div>
        {/* writing space */}
        <div className="p-6">
          <Textarea
            rows={1}
            fontSize={header.size}
            fontFamily={header.family}
            weight={header.weight}
            text={header.text}
            setText={header.setText}
            letterSpacing={header.space}
          />
          <Textarea
            fontSize={paragraph.size}
            fontFamily={paragraph.family}
            weight={paragraph.weight}
            text={paragraph.text}
            setText={paragraph.setText}
            letterSpacing={paragraph.space}
          />
        </div>
      </div>
      <span className="text-muted-foreground text-sm">
        You can edit the text above to test different fonts
      </span>
    </div>
  )
}

export default TextEditor;
