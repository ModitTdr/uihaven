"use client";
import DragableImg from "@/components/DragableImg";
import Dropzone, { imageObjectType } from "@/components/Dropzone";
import { Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [images, setImages] = useState<imageObjectType[]>([]);
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

  const delImg = (id: string) => {
    setImages((prev) => prev.filter((img) => id !== img.id));
  };

  return (
    <div className="min-h-[90dvh] flex justify-start items-center px-6 py-2 flex-col gap-3 mx-auto">
      <Dropzone images={images} setItems={setImages} disabled={images.length >= 8} />
      <div className="flex-1 w-full border border-foreground/20 rounded-md overflow-scroll relative">
        {images.map((image) => (
          <DragableImg imgObj={image} key={image.id} delImg={delImg} />
        ))}
      </div>

      <span className="text-xs text-muted-foreground">
        Images are resizable and draggable. Double click an image to adjust its layer order
      </span>
    </div>
  );
};

export default Page;
