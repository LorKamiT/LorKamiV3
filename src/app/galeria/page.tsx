"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import TagSelector from "./TagSelector";
import ImageCard from "./ImageCard";

// Esta función simula la importación de imágenes
const images = require.context(
  "../../../public/Galeria/",
  true,
  /\.(gif|webp)$/,
);

const imagesList = images.keys().map((image) => {
  const parts = image.split("/");
  const imageName = parts[parts.length - 1];

  // Eliminar la extensión del archivo
  const baseName = imageName.replace(/\.[^/.]+$/, "");

  // Dividir el nombre en palabras usando espacios, pero mantener grupos de palabras conectadas por guiones como una etiqueta
  let tags = baseName.split(" ").slice(2); // Omitir las dos primeras partes si son números o nombres sin relevancia

  // Convertir cada etiqueta, manejando los guiones para formar una sola etiqueta
  tags = tags.map((tag) =>
    tag
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "),
  );

  return {
    src: images(image),
    name: imageName,
    tags: tags, // Etiquetas procesadas
    folder: parts[parts.length - 2], // Carpeta a la que pertenece la imagen
  };
});

const Galeria = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredImages = imagesList.filter((image) => {
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
          {filteredImages.map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              images={images}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
