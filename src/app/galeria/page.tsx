"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import TagSelector from "./TagSelector";
import ImageCard from "./ImageCard";

interface ImageData {
  src: string;
  name: string;
  tags: string[];
  folder: string;
}

const Galeria = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Obtener imágenes desde la API
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/get-images");
      const data = await res.json();
      setImages(data.images);
    };

    fetchImages();
  }, []);

  // Filtrar imágenes según el término de búsqueda y las etiquetas seleccionadas
  const filteredImages = images.filter((image) => {
    const lowerCaseName = image.name.toLowerCase();
    const searchMatch = lowerCaseName.includes(searchTerm.toLowerCase());

    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) =>
        image.tags.some(
          (imageTag) => imageTag.toLowerCase() === tag.toLowerCase(),
        ),
      );

    return searchMatch && tagsMatch;
  });

  return (
    <div className="z-20 flex h-auto w-full items-center justify-center">
      <div className="Caja mt-20 flex h-auto w-[85%] flex-col">
        <SearchBar setSearchTerm={setSearchTerm} placeholder={undefined} />
        <div className="Tags0 mb-4">
          <TagSelector
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </div>
        <div className="grid grid-cols-1 gap-[1rem] lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredImages.map((image, index) => {
            return (
              <ImageCard
                key={index}
                image={image}
                images={filteredImages} // Pasar la lista filtrada de imágenes a ImageCard
                index={index} // Pasar el índice basado en la lista filtrada
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
