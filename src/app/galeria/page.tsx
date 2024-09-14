"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import TagSelector from "./TagSelector";
import ImageCard from "./ImageCard";

const Galeria = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // Obtener imágenes desde la API
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/get-images");
      const data = await res.json();
      console.log("Imágenes recibidas:", data.images); // Verifica los datos recibidos
      setImages(data.images);
    };

    fetchImages();
  }, []);

  const filteredImages = images.filter((image) => {
    if (!image.name) return false; // Validar si 'name' existe antes de convertir a minúsculas

    const lowerCaseName = image.name.toLowerCase(); // Convertir nombre a minúsculas
    const searchMatch = lowerCaseName.includes(searchTerm.toLowerCase()); // Búsqueda insensible a mayúsculas y minúsculas

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
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className="Tags0 mb-4">
          <TagSelector
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </div>
        <div className="grid grid-cols-1 gap-[1rem] lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filteredImages.map((image, index) => {
            console.log("Image src:", image.src); // Verifica si la ruta de la imagen es correcta
            return (
              <ImageCard
                key={index}
                image={image}
                images={images}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
