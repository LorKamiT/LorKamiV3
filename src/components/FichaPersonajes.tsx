"use client";

import { useEffect, useState } from "react";
import Fichas from "./Fichas";
import { Personajes } from "../types";

export default function FichaPersonajes() {
  const [personajes, setPersonajes] = useState<Personajes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        const response = await fetch("/api/personajes");
        if (!response.ok) {
          throw new Error("Error al cargar los personajes");
        }
        const data: Personajes[] = await response.json();
        setPersonajes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonajes();
  }, []);

  if (loading) {
    return <div>Cargando personajes...</div>;
  }

  if (personajes.length === 0) {
    return <div>No se encontraron personajes</div>;
  }

  return (
    <div className="flex h-full w-full items-center justify-center pt-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {personajes.map((personaje) => (
          <Fichas key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </div>
  );
}
