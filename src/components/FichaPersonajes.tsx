"use client";

import { useEffect, useState } from "react";
import Fichas from "../app/fichas/page";

interface Personajes {
  id: number;
  imagen: string;
  posicionImagen: string;
  plataforma: string;
  nombreCompleto: string;
  apodo: string;
  fechaNacimiento: string;
  edadActual: string;
  lugarNacimiento: string;
  estadoCivil: string;
  residencia: string;
  altura: string;
  peso: string;
  raza: string;
  colorOjos: string;
  colorCabello: string;
  cicatrices: string;
  antecedentesPenales: string;
  historialMedico: string;
  estudios: string;
  historia: string;
  descripcionPsicologica: string;
  descripcionFisica: string;
  aspiraciones: string;
  defectos: string;
  virtudes: string;
  miedos: string;
  gustosAficiones: string;
}

export default function Page() {
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
        console.log(data);
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {personajes.map((personaje) => (
        <Fichas key={personaje.id} personaje={personaje} />
      ))}
    </div>
  );
}
