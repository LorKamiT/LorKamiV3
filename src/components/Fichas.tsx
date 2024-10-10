"use client";

import { useState } from "react";
import Image from "next/image";
import { Personajes } from "../types";

interface PersonajesProps {
  personaje: Personajes;
}

export default function Fichas({ personaje }: PersonajesProps) {
  const [showDetails, setShowDetails] = useState(false);

  if (!personaje || !personaje.nombreCompleto) {
    return <div>Error: Personaje inválido</div>;
  }

  return (
    <div className="Ficha-Caja mb-5 flex w-full items-center justify-center">
      <div className="Tarjeta-Contenedor fle w-[70%] flex-wrap items-center justify-center gap-5">
        <div className="Ficha-Tarjeta shadow-boxfichalight dark:shadow-boxfichadark min-w-[300px] overflow-hidden rounded-md text-black transition-all dark:text-white">
          <div className="Imagen">
            <Image
              src={personaje.imagen}
              alt={personaje.nombreCompleto}
              width={600}
              height={600}
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="TarjetaInfo p-4">
            <h2 className="nombreCompleto text-xl font-bold">
              {personaje.nombreCompleto}
            </h2>
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
                  <strong>Estado civil:</strong> {personaje.lugarNacimiento}
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
                  <strong>Residencia:</strong> {personaje.lugarNacimiento}
                </p>
                <p>
                  <strong>Antecedentes penales:</strong>{" "}
                  {personaje.antecedentesPenales}
                </p>
                <p>
                  <strong>Historial médico:</strong>{" "}
                  <p className="text-justify">{personaje.historialMedico}</p>
                </p>
                <p>
                  <strong>Estudios:</strong>{" "}
                  <p className="text-justify">{personaje.estudios}</p>
                </p>
                <p>
                  <strong>Biografia:</strong>{" "}
                  <p className="text-justify">{personaje.historia}</p>
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
                  <strong>Gustos y aficiones:</strong>{" "}
                  {personaje.gustosAficiones}
                </p>
              </div>
            )}
          </div>
          <div className="Boton">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex w-full cursor-pointer items-center justify-center rounded-md border-0 bg-[#1871cc] p-4 text-[0.7rem] font-bold uppercase text-white transition-all hover:bg-[#1258a8] dark:bg-[#82c3f8] dark:text-[#091520] dark:hover:bg-[#42a5f5]"
            >
              {showDetails ? "Ocultar detalles" : "Mostrar más"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
