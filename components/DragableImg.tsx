"use client";
import { Rnd } from "react-rnd";

const GRID_SIZE = 20;

const DragableImg = ({ img }: { img: string }) => {
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
      style={{ position: "absolute" }}
      enableResizing={{
        bottom: true,
        right: true,
        bottomRight: true,
      }}
      maxWidth={350}
      maxHeight={400}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={img}
          alt="draggable"
          draggable={false}
          className="w-full h-full object-stretch pointer-events-none select-none"
        />
      </div>
    </Rnd>
  );
};

export default DragableImg;
