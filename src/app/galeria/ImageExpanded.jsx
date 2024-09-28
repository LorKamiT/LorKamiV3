import Image from "next/image";
import React, { useState, useEffect } from "react";
import { MdClose, MdChevronLeft, MdChevronRight, MdDownloading } from "react-icons/md";

const ImageExpanded = ({ onClose, images, currentImageIndex, isVideo  }) => {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);

  useEffect(() => {
    setLoading(true);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose]);

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const videoData = isVideo ? isVideo : null;

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center">
      <div className="relative flex justify-center items-center w-full h-full max-w-screen-[95svw] max-h-screen-[95svh]">
        
        {loading && (
          <div className="absolute inset-0 bg-black/80 animate-pulse flex justify-center items-center">
            <span className="text-white"><MdDownloading size={88} className=" text-[#727272]" /></span>
          </div>
        )}

{videoData ? (
          <iframe
            width="100%"
            height="100%"
            src={videoData.url}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute w-full h-full"
          ></iframe>
        ) : (
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].name}
          className={`absolute object-contain w-full h-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
          width={1980}
          height={1080}
          onLoad={handleImageLoad}
        />
                )}
        
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">
          <MdClose />
        </button>
        
        <button
          onClick={handlePrevious}
          className="absolute left-4 text-white text-4xl"
        >
          <MdChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 text-white text-4xl"
        >
          <MdChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ImageExpanded;
