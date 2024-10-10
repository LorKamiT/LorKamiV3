"use client";

import FichaPersonajes from "../../components/FichaPersonajes";

import { Personajes } from "";

interface CharacterCardProps {
  personaje: Personajes;
}

export default function Page() {
  return <FichaPersonajes />;
}
