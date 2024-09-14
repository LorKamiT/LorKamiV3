import Image from "next/image";
import React from "react";
import { MdClose } from "react-icons/md";

const ImageExpanded = ({ image, onClose }) => {
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-svh bg-black/80 flex justify-center items-center">
      <div className="fixed flex justify-center items-center w-full h-full max-w-screen-[95svw] max-h-screen-[95svh]">
        <Image src={image.src} alt={image.name} className="absolute object-contain w-full h-full" width={1920} height={1080} />
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">
          <MdClose />
        </button>
      </div>
    </div>
  );
};

export default ImageExpanded;
