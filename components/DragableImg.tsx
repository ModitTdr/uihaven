"use client";
import { Rnd } from "react-rnd";
import { imageObjectType } from "./Dropzone";
import { ArrowDownRight, X } from "lucide-react";

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
      <div className="relative w-full h-full" >
        <img
          src={imgObj.img}
          alt="Draggable Image"
          draggable={false}
          className="w-full h-full object-stretch pointer-events-none select-none"
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
