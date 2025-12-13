"use client"
import { useState } from "react"

export type fontFamilyType = {
  name: string,
  family: string,
  category: string,
  weights: number[]
}
export type FontConfig = {
  fontFamily: fontFamilyType
  fontSize: number
  fontWeight?: number
  letterSpace: number
  displayText: string
}
export type FontReturn = {
  family: fontFamilyType;
  setNewFamily: (family: fontFamilyType) => void;
  size: number;
  setSize: (size: number) => void;
  weight: number;
  setWeight: (weight: number) => void;
  text: string;
  setText: (text: string) => void;
  space: number;
  setLetterSpace: (space: number) => void;
}

const useFont = ({ fontFamily, fontSize, fontWeight, letterSpace, displayText }: FontConfig): FontReturn => {
  const [family, setFamily] = useState<fontFamilyType>(fontFamily);
  const [weight, setWeight] = useState(
    fontWeight
      ? fontFamily.weights.includes(fontWeight) ? fontWeight : fontFamily.weights[0]
      : fontFamily.weights.includes(300) ? 300 : fontFamily.weights[0]
  );
  const [size, setSize] = useState(fontSize);
  const [text, setText] = useState(displayText);
  const [space, setLetterSpace] = useState(letterSpace);

  const setNewFamily = (newFont: fontFamilyType) => {
    setFamily(newFont);

    if (!newFont.weights.includes(weight)) {
      setWeight(newFont.weights[0]);
    }
  };

  return { family, setNewFamily, size, setSize, weight, setWeight, text, setText, space, setLetterSpace };
};
export default useFont;


