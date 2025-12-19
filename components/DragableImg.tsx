"use client";
import { Rnd } from "react-rnd";
import { imageObjectType } from "./Dropzone";
import { X } from "lucide-react";

interface DragableImgProp {
  imgObj: imageObjectType;
  delImg: (id: string) => void;
}
const GRID_SIZE = 20;

const DragableImg = ({
  imgObj,
  delImg
}: DragableImgProp) => {

  return (
    <Rnd
      bounds="parent"
      dragGrid={[GRID_SIZE, GRID_SIZE]}
      resizeGrid={[GRID_SIZE, GRID_SIZE]}
      default={{
        x: 0,
        y: 0,
        width: 300,
        height: 300,
      }}
      style={{ position: "absolute", padding: "8px 0px 8px 18px" }}
      enableResizing={{
        bottom: true,
        right: true,
        bottomRight: true,
      }}
      maxWidth={350}
      maxHeight={400}
    >
      <div className="relative w-full h-full" >
        <img
          src={imgObj.img}
          alt="Draggable Image"
          draggable={false}
          className="w-full h-full object-stretch pointer-events-none select-none"
        />
        <div
          className="absolute -top-2 -left-2 bg-red-500/80 rounded-lg text-white p-1 cursor-pointer shadow-md backdrop-blur-xl"
          onClick={() => delImg(imgObj.id)}
        >
          <X size={16} className="pointer-events-none" />
        </div>
      </div>
    </Rnd>
  );
};

export default DragableImg;
