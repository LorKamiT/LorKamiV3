import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Personajes {
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
