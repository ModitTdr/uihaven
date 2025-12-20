import { X, ZoomIn, ZoomOut } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const ImagePreviewModal = ({
  selectedImg: img,
  setSelectedImg
}: { selectedImg: string, setSelectedImg: React.Dispatch<React.SetStateAction<string | null>> }) => {

  const [zoom, setZoom] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImg(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [setSelectedImg])

  const handleZoom = (mode: "in" | "out") => {
    let newZoom = zoom;
    if (mode === "in") {
      if (zoom < 1.2) {
        newZoom = zoom + 0.05;
      }
    }
    if (mode === "out") {
      if (zoom > 0.7) {
        newZoom = zoom - 0.05;
      }
    }
    setZoom(Math.round(newZoom * 100) / 100);
  }
  console.log(zoom)
  return (
    <div className="w-full h-dvh bg-black/80 absolute top-0 z-2 backdrop-blur-xs ">
      <div className="h-full w-full flex flex-col justify-center items-center relative overflow-hidden">
        <Image
          src={img}
          alt="image"
          layout="fill"
          objectFit="contain"
          style={{ scale: zoom }}
        />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 space-y-2 flex flex-col items-center">
          <p className="bg-neutral-200 py-1 px-4 rounded-md font-semibold">Zoom Level: x{zoom}</p>
          <div className="flex gap-2">
            <div
              className={`bg-neutral-200 border border-neutral-500 text-neutral-700 p-1.5 rounded-lg cursor-pointer shadow-md ${zoom == 1.2 ? "opacity-50 pointer-none" : ""}`}
              onClick={() => handleZoom("in")}
            >
              <ZoomIn />
            </div>
            <div
              className={`bg-neutral-200 border border-neutral-500 text-neutral-700 p-1.5 rounded-lg cursor-pointer shadow-md ${zoom == 0.7 ? "opacity-50 pointer-none" : ""}`}
              onClick={() => handleZoom("out")}
            >
              <ZoomOut />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-8 h-8 absolute top-6 right-6 bg-red-400 rounded-full flex justify-center items-center cursor-pointer shadow-md
      hover:scale-110 hover:bg-red-500 duration-150 ease-in-out active:scale-100 active:bg-red-400"
        onClick={() => setSelectedImg(null)}
      >
        <X size={20} className="text-white" />
      </div>


    </div>
  )
}

export default ImagePreviewModal
