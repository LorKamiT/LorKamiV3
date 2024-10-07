"use client";

import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

import MenuGuias from "@/app/guias/MenuGuias";
import ContenidoGuias from "@/app/guias/ContenidoGuias";

export default function Guias() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="Contenedor-Menu-Guias-Completo flex h-auto min-h-custom4rem w-full">
      <div
        className={`Contenedor-Menu-Guias border-r border-[#e8eaee] dark:border-[#1d2126] ${isMenuOpen ? "open" : ""}`}
      >
        <MenuGuias />
      </div>
      <div className="Contenedor-Guias flex w-full justify-center">
        <div className="Contenedor-Contenido-Guias flex h-full w-[55%] items-center justify-center p-0">
          <ContenidoGuias />
        </div>
      </div>
      <div
        className={`hamburger-menu hidden cursor-pointer rounded-3xl bg-transparent p-0 text-[#1a1e22] transition-all ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <Hamburger />
      </div>
    </div>
  );
}
