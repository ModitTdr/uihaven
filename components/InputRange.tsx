type Props = {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
};

const InputRange = ({
  min = 1,
  max = 100,
  step = 10,
  value,
  onChange,
}: Props) => {
  return (
    <input
      type="range"
      className="bg-transparent cursor-pointer w-full"
      min={min}
      max={max}
      step={step}
      value={value}
      aria-label="Range input"
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
};

export default InputRange;
