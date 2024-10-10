"use client";

import { useState } from "react";
import Image from "next/image";

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
interface CharacterCardProps {
  character: Character;
}

export default function Fichas({ character }: CharacterCardProps) {
  console.log("Character prop received:", character);

  const [showDetails, setShowDetails] = useState(false);

  if (!character || !character.nombreCompleto) {
    console.error("Invalid character prop:", character);
    return <div>Error: Personaje inválido</div>;
  }

  return (
    <div className="Fichas">
      <div className="Tarjeta">
        <div className="Imagen">
          <Image
            src={character.imagen}
            alt={character.nombreCompleto}
            width={300}
            height={300}
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="TarjetaInfo">
          <h2 className="nombreCompleto">{character.nombreCompleto}</h2>
          <h3 className="Servidor">{character.plataforma}</h3>
          <h3 className="apodo">Apodo: {character.apodo}</h3>
          <h3 className="edadActual">Edad: {character.edadActual}</h3>
          {showDetails && (
            <div className="MasInformación">
              <p>
                <strong>Fecha de nacimiento:</strong>{" "}
                {character.fechaNacimiento}
              </p>
              <p>
                <strong>Lugar de nacimiento:</strong>{" "}
                {character.lugarNacimiento}
              </p>
              <p>
                <strong>Estado civil:</strong>
              </p>
              <p>
                <strong>Altura:</strong>
              </p>
              <p>
                <strong>Peso:</strong>
              </p>
              <p>
                <strong>Raza:</strong>
              </p>
              <p>
                <strong>Color de ojos:</strong>
              </p>
              <p>
                <strong>Color de cabello:</strong>
              </p>
              <p>
                <strong>Cicatrices:</strong>
              </p>
              <p>
                <strong>Residencia:</strong>
              </p>
              <p>
                <strong>Antecedentes penales:</strong>
              </p>
              <p>
                <strong>Historial médico:</strong>
              </p>
              <p>
                <strong>Estudios:</strong>
              </p>
              <p>
                <strong>Biografia:</strong>
              </p>
              <p>
                <strong>Descripción psicologica:</strong>
              </p>
              <p>
                <strong>Descripción fisica:</strong>
              </p>
              <p>
                <strong>Aspiraciónes:</strong>
              </p>
              <p>
                <strong>Defectos:</strong>
              </p>
              <p>
                <strong>Virtudes:</strong>
              </p>
              <p>
                <strong>Miedos:</strong>
              </p>
              <p>
                <strong>Gustos y aficiones:</strong>
              </p>
            </div>
          )}
        </div>
        <div className="Boton">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full"
          >
            {showDetails ? "Ocultar detalles" : "Mostrar más"}
          </button>
        </div>
      </div>
    </div>
  );
}
