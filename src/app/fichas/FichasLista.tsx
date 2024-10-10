"use_client";

import { useState, useEffect } from "react";
import Fichas from "./page";

interface Character {
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

export default function FichasLista() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/characters")
      .then((res) => res.json())
      .then((data) => {
        console.log("Characters fetched:", data);
        setCharacters(data);
      })
      .catch((err) => {
        console.error("Error fetching characters:", err);
        setError("Error al cargar los personajes");
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (characters.length === 0) {
    return <div>Cargando...</div>;
  }

  console.log("Characters state:", characters); // Agregamos este log para ver el estado de characters

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {characters
        .filter((character) => character && character.nombreCompleto)
        .map((character) => (
          <Fichas key={character.id} character={character} />
        ))}
    </div>
  );
}
