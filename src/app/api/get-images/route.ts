import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const imageFolder = path.join(process.cwd(), "public/Galeria");
  const categories = await fs.readdir(imageFolder);
  const images = [];

  for (const category of categories) {
    const categoryPath = path.join(imageFolder, category);

    // Verificar si es un directorio antes de intentar leer su contenido
    const stat = await fs.lstat(categoryPath);

    if (stat.isDirectory()) {
      const categoryImages = await fs.readdir(categoryPath);

      for (const fileName of categoryImages) {
        const tags = fileName.replace(/\.[^/.]+$/, "").split(" ");
        images.push({
          src: `/Galeria/${category}/${fileName}`,
          tags: tags,
        });
      }
    } else {
      // Si no es un directorio, podría ser una imagen directamente en la carpeta 'Galeria'
      const tags = category.replace(/\.[^/.]+$/, "").split(" ");
      images.push({
        src: `/Galeria/${category}`,
        tags: tags,
      });
    }
  }

  return NextResponse.json({ images });
}
