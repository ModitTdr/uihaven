"use client";
import DragableImg from "@/components/DragableImg";
import Dropzone from "@/components/Dropzone"
import { Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [images, setImages] = useState<string[]>([]);
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (images.length === 1 && !hasShownToast.current) {
      toast(
        <span className="text-sm">Images are resizeable</span>,
        {
          icon: <Info size={18} />,
        }
      );
      hasShownToast.current = true;
    }
  }, [images.length]);

  return (
    <div className="min-h-[90dvh] flex justify-start items-center p-6 flex-col gap-4 mx-auto">
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
