import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const imageDir = path.join(process.cwd(), "public/Galeria");

  // Función recursiva para obtener imágenes de subcarpetas
  const getImagesFromFolder = (folderPath: string, folderName: string) => {
    const files = fs.readdirSync(folderPath);
    const images: {
      src: string; // Ruta completa de la imagen
      name: string;
      tags: string[];
      folder: string;
    }[] = [];

    files.forEach((fileName) => {
      const fullPath = path.join(folderPath, fileName);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        // Si es una carpeta, llamamos recursivamente para obtener las imágenes
        images.push(
          ...getImagesFromFolder(fullPath, path.join(folderName, fileName)),
        );
      } else {
        // Procesamos la imagen
        const imageName = fileName;
        const baseName = imageName.replace(/\.[^/.]+$/, "");

        let tags = baseName.split(" ").slice(2);

        tags = tags.map((tag) =>
          tag
            .split("-")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
            )
            .join(" "),
        );

        images.push({
          src: `/Galeria/${folderName}/${fileName}`, // Ruta completa de la imagen
          name: imageName,
          tags: tags,
          folder: folderName,
        });
      }
    });

    return images;
  };

  // Obtener todas las imágenes, incluyendo subcarpetas
  const images = getImagesFromFolder(imageDir, "");

  return NextResponse.json({ images });
}
