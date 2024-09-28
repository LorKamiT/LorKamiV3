import React, { useState } from "react";
import { MdDownloading } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import ImageExpanded from "./ImageExpanded";
import Image from "next/image";

const ImageCard = ({ image, images, index }) => {
  const [loaded, setLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleImageClick = () => {
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <div className="relative w-full overflow-hidden text-center" ref={ref}>
      {!loaded && (
        <div className="loading-icon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <MdDownloading size={48} className=" text-[#727272]" />
        </div>
      )}

      {inView && (
        <div className="relative w-full pt-[100%] overflow-hidden text-center rounded-lg">
          <Image
            src={image.src}
            alt={image.name}
            layout="fill"
            objectFit="cover"
            onLoad={() => setLoaded(true)}
            className={`rounded-lg cursor-pointer top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            onClick={handleImageClick}
          />
        </div>
      )}

      <div className="flex absolute bottom-1 left-1 flex-wrap">
        {image.tags.map((tag, idx) => (
          <span key={idx} className="inline-block bg-gray-700 text-white text-xs px-2 py-1 m-[2px] rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {expanded && (
        <ImageExpanded
          image={image}
          images={images}
          currentImageIndex={index}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default ImageCard;
