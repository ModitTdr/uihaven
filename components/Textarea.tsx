import { memo } from "react";

type Props = {
  rows?: number;
  fontSize: number;
  fontFamily: string;
  weight: number;
  text: string;
  setText: (text: string) => void;
  letterSpacing?: number;
};

const Textarea = ({
  rows = 5,
  fontSize,
  fontFamily,
  weight,
  letterSpacing,
  text,
  setText,
}: Props) => {
  return (
    <textarea
      rows={rows}
      className="w-full resize-none outline-none border-none p-0 focus:ring-0 placeholder-neutral-500 overflow-hidden"
      style={{ fontSize, fontFamily, fontWeight: weight, letterSpacing: `${letterSpacing}em` }}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default memo(Textarea);
