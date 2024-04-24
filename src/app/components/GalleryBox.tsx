import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Image from "next/image";
import { CustomImage } from "../data/images";

interface ImageData {
  src: string;
  caption?: string;
}
interface Props {
  currentImage?: string;
  currentIndex?: number;
  images: CustomImage[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GalleryBox = ({
  currentImage,
  currentIndex = 0,
  images,
  setOpen,
}: Props) => {
  const [imageIndex, setImageIndex] = useState(currentIndex);
  if (currentIndex === -1) {
    return null;
  }
  return (
    <div className=" w-full fixed top-0 left-0 min-h-screen bg-[rgba(0,0,0,0.3)] text-white z-[1000]  backdrop-blur-sm flex justify-between">
      <div
        className="text-white text-xl absolute top-4 right-4 p-4 bg-black flex items-center justify-center aspect-square w-12 h-12 cursor-pointer rounded-lg"
        onClick={() => setOpen(false)}
      >
        X
      </div>
      <div
        className="group min-h-screen h-full w-[15%] flex items-center justify-center hover:bg-[rgba(0,0,0,0.1)] transition-all duration-100 cursor-pointer"
        onClick={() => {
          if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
          }
        }}
      >
        <IoIosArrowDropleftCircle className="w-16 h-16 text-[rgba(0,0,0,0.6)] group-active:scale-90 transition-all duration-100 ease-linear" />
      </div>
      <div className="min-h-screen h-full w-[70%] flex flex-col items-center justify-center">
        <div className="bg-[#23232390] w-[80%] aspect-[1920/1080] max-h-[70vh]">
          <Image
            src={`${
              images[imageIndex] ? images[imageIndex].src : "/avatar.png"
            }`}
            className="h-full w-auto aspect-auto mx-auto"
            alt={`${images[imageIndex]?.caption}` || ""}
            width={1000}
            height={1000}
          />
        </div>
        <div className="bg-[#232323] w-[80%] h-16 text-[#cecece] p-2 text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem
          deserunt unde quod autem animi ex cum vel porro dolor?
        </div>
      </div>
      <div
        className="group min-h-screen h-full w-[15%] flex items-center justify-center hover:bg-[rgba(0,0,0,0.1)] transition-all duration-100 cursor-pointer"
        onClick={() => {
          if (imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1);
          }
        }}
      >
        <IoIosArrowDroprightCircle className="w-16 h-16 text-[rgba(0,0,0,0.6)] group-active:scale-90 transition-all duration-100 ease-linear" />
      </div>
    </div>
  );
};

export default GalleryBox;
