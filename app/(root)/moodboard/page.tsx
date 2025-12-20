"use client";
import DragableImg from "@/components/DragableImg";
import Dropzone, { imageObjectType } from "@/components/Dropzone";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import { useState } from "react";

const Page = () => {
  const [images, setImages] = useState<imageObjectType[]>([]);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const delImg = (id: string) => {
    setImages((prev) => prev.filter((img) => id !== img.id));
  };

  return (
    <div className="min-h-[90dvh] flex justify-start items-center px-2 py-2 flex-col gap-3 mx-auto">
      {
        selectedImg && <ImagePreviewModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      }
      <Dropzone images={images} setItems={setImages} disabled={images.length >= 8} />
      <div className="flex-1 w-full border border-foreground/20 rounded-md overflow-hidden relative">
        {images.map((image) => (
          <DragableImg imgObj={image} key={image.id} delImg={delImg} setSelectedImg={setSelectedImg} />
        ))}
      </div>

      <span className="text-xs text-muted-foreground text-center">
        Images are resizable and draggable.
      </span>
    </div>
  );
};

export default Page;
