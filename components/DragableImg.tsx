"use client";
import { Rnd } from "react-rnd";
import { imageObjectType } from "./Dropzone";
import { ArrowDownRight, X } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

interface DragableImgProp {
  imgObj: imageObjectType;
  delImg: (id: string) => void;
  setSelectedImg?: React.Dispatch<React.SetStateAction<string | null>>
}

const DragableImg = ({
  imgObj,
  delImg,
  setSelectedImg,
}: DragableImgProp) => {
  const [size, setSize] = useState({ width: 300, height: 300 });
  const lastTapRef = useRef(0);
  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const aspect = img.naturalWidth / img.naturalHeight;

    const maxWidth = 300;
    const width = maxWidth;
    const height = width / aspect;
    setSize({ width, height });
  }

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (now - lastTapRef.current < DOUBLE_TAP_DELAY) {
      if (setSelectedImg) {
        setSelectedImg(imgObj.img);
      }
    }
    lastTapRef.current = now;
  };
  return (
    <Rnd
      lockAspectRatio
      bounds="parent"
      size={{ width: size.width, height: size.height }}
      onResizeStop={(_e, _, ref) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
      style={{ position: "absolute", background: "rgba(0,0,0,0.04)" }}
      maxWidth={350}
      maxHeight={400}
      enableResizing={{
        bottomRight: true,
      }}
      resizeHandleComponent={{
        bottomRight: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '20px',
              height: '20px',
              position: 'absolute',
              bottom: '10px',
              right: '10px',
              backgroundColor: '#4CAF50',
              borderRadius: '30% 30% 0% 30%',
              cursor: 'se-resize',
              zIndex: 2,
            }}
          >
            <ArrowDownRight size={14} color="white" />
          </div>
        ),
      }}
    >
      <div
        className="relative w-full h-full"
        onDoubleClick={() => setSelectedImg && setSelectedImg(imgObj.img)}
        onTouchEnd={handleDoubleTap}
      >
        <Image
          src={imgObj.img}
          alt="Draggable Image"
          draggable={false}
          width={size.width}
          height={size.height}
          className="w-full h-full object-cover pointer-events-none select-none"
          onLoad={handleImgLoad}
        />
        <div
          className="absolute top-0 left-0 bg-red-500/80 rounded-tl-none rounded-lg text-white p-1 cursor-pointer shadow-md backdrop-blur-xl"
          onClick={() => delImg(imgObj.id)}
          onTouchStart={() => delImg(imgObj.id)}
        >
          <X size={16} />
        </div>
      </div>
    </Rnd>
  );
};

export default DragableImg;
