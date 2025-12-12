"use client"
import { useState } from "react"

export type FontConfig = {
  fontFamily: string
  fontSize: number
  fontWeight: number
  displayText: string
}
export type FontReturn = {
  size: number;
  setSize: (size: number) => void;
  weight: number;
  setWeight: (weight: number) => void;
  text: string;
  setText: (text: string) => void;
  family: string;
  setFamily: (family: string) => void;
}

const useFont = ({ fontFamily, fontSize, fontWeight, displayText }: FontConfig): FontReturn => {
  const [family, setFamily] = useState(fontFamily);
  const [size, setSize] = useState(fontSize);
  const [weight, setWeight] = useState(fontWeight);
  const [text, setText] = useState(displayText);

  return { family, setFamily, size, setSize, weight, setWeight, text, setText };
};
export default useFont;


