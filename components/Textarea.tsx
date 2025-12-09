type Props = {
  rows: number
  fontSize: number
  fontFamily: string
  weight: number
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

const Textarea = ({ rows = 5, fontSize, fontFamily, weight, text, setText }: Props) => {
  return (
    <textarea
      rows={rows}
      className={`w-full resize-none outline-none border-none p-0 focus:ring-0 placeholder-neutral-500 overflow-hidden`}
      style={{ fontSize: `${fontSize}px`, fontWeight: `${weight}`, fontFamily: `${fontFamily}` }}
      placeholder={text}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  )
}

export default Textarea
