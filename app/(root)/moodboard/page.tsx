"use client";
import DragableImg from "@/components/DragableImg";
import Dropzone from "@/components/Dropzone"
import { useState } from "react";

const Page = () => {
  const [images, setImages] = useState<string[]>([]);
  return (
    <div className="min-h-[90vh] flex justify-start items-center p-6 flex-col gap-4 container mx-auto">
      <Dropzone images={images} setItems={setImages} disabled={images.length >= 8} />
      <div className="flex-1 w-full border border-foreground/20 rounded-md px-5 py-4 overflow-hidden">
        {
          images.map((image, index) => (
            <DragableImg img={image} key={index} />
          ))
        }
      </div>

    </div>
  )
}

export default Page;
