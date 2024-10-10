"use client";

import { useState } from "react";
import Image from "next/image";

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
interface PersonajesProps {
  personaje: Personajes;
}

export default function Fichas({ personaje }: PersonajesProps) {
  const [showDetails, setShowDetails] = useState(false);

  if (!personaje || !personaje.nombreCompleto) {
    return <div>Error: Personaje inválido xd</div>;
  }

  return (
    <div className="Fichas">
      <div className="Tarjeta">
        <div className="Imagen">
          <Image
            src={personaje.imagen}
            alt={personaje.nombreCompleto}
            width={300}
            height={300}
            className="h-48 w-full object-cover"
          />
        </div>
        <div className="TarjetaInfo">
          <h2 className="nombreCompleto">{personaje.nombreCompleto}</h2>
          <h3 className="Servidor">{personaje.plataforma}</h3>
          <h3 className="apodo">Apodo: {personaje.apodo}</h3>
          <h3 className="edadActual">Edad: {personaje.edadActual}</h3>
          {showDetails && (
            <div className="MasInformación">
              <p>
                <strong>Fecha de nacimiento:</strong>{" "}
                {personaje.fechaNacimiento}
              </p>
              <p>
                <strong>Lugar de nacimiento:</strong>{" "}
                {personaje.lugarNacimiento}
              </p>
              <p>
                <strong>Estado civil:</strong> {personaje.estadoCivil}
              </p>
              <p>
                <strong>Altura:</strong> {personaje.altura}
              </p>
              <p>
                <strong>Peso:</strong> {personaje.peso}
              </p>
              <p>
                <strong>Raza:</strong> {personaje.raza}
              </p>
              <p>
                <strong>Color de ojos:</strong> {personaje.colorOjos}
              </p>
              <p>
                <strong>Color de cabello:</strong> {personaje.colorCabello}
              </p>
              <p>
                <strong>Cicatrices:</strong> {personaje.cicatrices}
              </p>
              <p>
                <strong>Residencia:</strong> {personaje.residencia}
              </p>
              <p>
                <strong>Antecedentes penales:</strong>{" "}
                {personaje.antecedentesPenales}
              </p>
              <p>
                <strong>Historial médico:</strong> {personaje.historialMedico}
              </p>
              <p>
                <strong>Estudios:</strong> {personaje.estudios}
              </p>
              <p>
                <strong>Biografia:</strong> {personaje.historia}
              </p>
              <p>
                <strong>Descripción psicologica:</strong>{" "}
                {personaje.descripcionPsicologica}
              </p>
              <p>
                <strong>Descripción fisica:</strong>{" "}
                {personaje.descripcionFisica}
              </p>
              <p>
                <strong>Aspiraciónes:</strong> {personaje.aspiraciones}
              </p>
              <p>
                <strong>Defectos:</strong> {personaje.defectos}
              </p>
              <p>
                <strong>Virtudes:</strong> {personaje.virtudes}
              </p>
              <p>
                <strong>Miedos:</strong> {personaje.miedos}
              </p>
              <p>
                <strong>Gustos y aficiones:</strong> {personaje.gustosAficiones}
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
