"use client";

import { useState } from "react";
import { Slant as Hamburger } from "hamburger-react";

import MenuGuias from "@/app/guias/MenuGuias";
import ContenidoGuias from "@/app/guias/ContenidoGuias";

export default function Guias() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="Contenedor-Menu-Guias-Completo">
      <div
        className={`Contenedor-Menu-Guias ${isMenuOpen ? "open bg-page dark:bg-page-dark" : ""}`}
      >
        <MenuGuias />
      </div>
      <div className="Contenedor-Guias">
        <div className="Contenedor-Contenido-Guias">
          <ContenidoGuias />
        </div>
      </div>
      <div
        className={`hamburger-menu text-[#1a1e22] dark:text-[#e8eaee] ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <Hamburger />
      </div>
    </div>
  );
}
