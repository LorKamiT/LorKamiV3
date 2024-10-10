import { NextResponse } from "next/server";

const personajes = [
  {
    id: 1,
    imagen: "https://i.imgur.com/k3zFAdh.png",
    posicionImagen: "object-position: 50% 90%;",
    plataforma: "RedM - VangardRP",
    nombreCompleto: "Gunter Bach",
    apodo: "-",
    fechaNacimiento: "12 de enero de 1865",
    edadActual: "25",
    lugarNacimiento: "Alemania",
    estadoCivil: "Soltero",
    residencia:
      "Emigra de Alemania al puerto de Saint Denis, por diferencias politicas, despues de la separación del cargo del Canciller de Otto Bismarck. Ademas de la oposicion al Kaiser Guillermo II.",
    altura: "1.80 m",
    peso: "120 kg",
    raza: "Blanco",
    colorOjos: "Azules",
    colorCabello: "Pelirojo",
    cicatrices: `- Zarpaso en la cara de lado derecho.2`,
    antecedentesPenales: `- Sin antecedentes.`,
    historialMedico: `- Presenta episodios recurrentes de dificultad al respirar, caracterizado como una sensación de opresión en el pecho, tos persistente y silbidos al respirar. Esto parece empeorar por la exposicion al aire frio o al polvo (asma)`,
    estudios: `A los 18 años, Gunter se trasladó a Berlín para estudiar economía en la universidad. Sin embargo, su carácter impulsivo y su falta de interés en la disciplina académica le impidieron completar su carrera. Abandonó los estudios después de dos años y regresó a su pueblo natal, sintiéndose un fracaso pero decidido a encontrar su camino de otra manera.`,
    historia: `- Gunter nació el 12 de enero de 1865 en un pequeño pueblo alemán llamado Oberursel, en el estado de Hesse. Sus padres, Heinrich y Marta Bach, eran personas sencillas que se ganaban la vida trabajando en el campo. Desde pequeño, Gunter tenía un carácter impulsivo, lo que casi siempre lo metía en problemas. A pesar de su falta de tacto con las personas, sus padres siempre lo cuidaron y trataron de dirigir su energía hacia algo productivo.
    Infancia y amigos: Gunter creció en un ambiente rural, rodeado de campos y bosques. Sus mejores amigos eran Fritz y Klaus, dos niños del pueblo con los que compartió incontables aventuras y travesuras. Desde ir a pescar al lago, escalar árboles en el bosque y molestar a las niñas del pueblo. Sin embargo, a medida que Gunter crecía, su tendencia a actuar sin pensar y su lengua afilada le costaron varios amigos y le dieron la reputación de ser un poco imbécil.
    Primer y único amor: Cuando Gunter tenía 16 años, se enamoró de Grete Müller, una joven del pueblo conocida por su belleza y dulzura. Sin embargo, su torpeza social y su tendencia a decir lo primero que le venía a la mente hicieron que Grete lo rechazara tras varios intentos fallidos de salir con ella. Este primer amor no correspondido dejó una marca profunda en Gunter, quien desde entonces adoptó una actitud más cínica hacia el amor.
    Educación y primeros trabajos: Gunter asistió a la escuela del pueblo hasta los 14 años, donde destacó por su inteligencia pero también por su falta de disciplina. Sus maestros veían potencial en él, pero su comportamiento impulsivo a menudo eclipsaba sus logros académicos. Sus padres decidieron enviarlo a una escuela en una ciudad cercana para que pudiera recibir una educación más completa. A pesar de sus dificultades sociales, Gunter logró graduarse con buenas calificaciones. A los 18 años, Gunter se trasladó a Berlín para estudiar economía en la universidad. Sin embargo, su carácter impulsivo y su falta de interés en la disciplina académica le impidieron completar su carrera. Abandonó los estudios después de dos años y regresó a su pueblo natal, sintiéndose un fracaso pero decidido a encontrar su camino de otra manera. Después de dejar la universidad, Gunter comenzó a trabajar con su padre en el campo, aprendiendo sobre agricultura y trabajo duro. En su tiempo libre, desarrolló un interés por la herrería, pasando horas observando al herrero del pueblo, Herr Schmidt. Finalmente, Herr Schmidt accedió a tomar a Gunter como aprendiz. A pesar de su carácter impulsivo, Gunter demostró tener un talento natural para trabajar con el metal, y pronto se convirtió en un aprendiz valioso.
    Eventos significativos: En 1888, la destitución de Otto von Bismarck y la creciente oposición al Kaiser Guillermo II crearon una atmósfera de tensión política en Alemania. Gunter, con su carácter impulsivo y naturaleza rebelde, no pudo quedarse callado y comenzó a expresar abiertamente su descontento con el régimen. Sus opiniones políticas pronto le trajeron problemas, y decidió junto a sus padres que lo mejor sería emigrar para evitar represalias.
    Emigración y tragedia: En 1890, Gunter y sus padres tomaron la difícil decisión de abandonar Alemania y buscar una nueva vida en América. Embarcaron en un barco con destino a Saint Denis, un puerto prometedor donde esperaban encontrar nuevas oportunidades. Durante la travesía, las duras condiciones del viaje, la escasez de alimentos y las malas condiciones higiénicas hicieron estragos en los pasajeros. Heinrich y Marta, debilitados por la malnutrición, sucumbieron a una infección antes de llegar al puerto de Saint Denis. Gunter, devastado por la pérdida de sus padres, se encontró solo en una tierra desconocida.
    Presente: En 1890, Gunter Bach es un hombre marcado por la tragedia y las pérdidas, pero también por una inquebrantable voluntad de sobrevivir. Aunque su naturaleza un poco imbécil y su tendencia a hablar sin pensar todavía le crean problemas, ha aprendido a ser más cauteloso y a valorar las relaciones que va construyendo.`,
    descripcionPsicologica: `-`,
    descripcionFisica: `-`,
    aspiraciones: `-`,
    defectos: `-`,
    virtudes: `-`,
    miedos: `-`,
    gustosAficiones: `-`,
  },
];

export async function GET() {
  return NextResponse.json(personajes);
}
