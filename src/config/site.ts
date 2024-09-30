export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LorKami V3",
  description:
    "En cada paso de mi camino, he invertido esfuerzo y dedicación para tejer un tapiz de recuerdos inolvidables. En mi página web personal, anhelo plasmar la belleza de mis vivencias y las joyas de la amistad, creando un espacio donde mis esfuerzos se entrelacen con la calidez de los lazos compartidos ❤️",
  url: "https://lorkamiv3.vercel.app",
  image: "https://lorkamiv3.vercel.app/card.png",
  twitterHandle: "@LorKami2",
  navMenuPrincipal: [
    {
      label: "Inicio",
      href: "/",
      imgmenu: "/Menu/MenuInicio.png",
    },
    {
      label: "Galeria",
      href: "/galeria",
      imgmenu: "/Menu/MenuGaleria.png",
    },
    {
      label: "Guias",
      href: "/guias",
      imgmenu: "/Menu/MenuGuias.png",
    },
    {
      label: "Fichas",
      href: "/fichas",
      imgmenu: "/Menu/MenuFichas.png",
    },
  ],
  navMenuSecundario: [
    {
      label: "Lyrics",
      href: "/lyrics",
    },
    {
      label: "Mapa interactivo",
      href: "/mapainteractivo",
    },
    {
      label: "Proyecto windows",
      href: "/proyectowindows",
    },
    {
      label: "Pagina LorKami V1",
      href: "https://lorkami.vercel.app/",
    },
    {
      label: "Pagina LorKami V2",
      href: "https://lorkamiv2.vercel.app/",
    },
  ],
  guiasMenu: [
    {
      title: "Crear proyecto en VsCode",
      subtitles: [
        { title: "React JS Native", sectionId: "seccion1" },
        { title: "Next JS", sectionId: "seccion2" },
      ],
    },
    {
      title: "Deployar pagina",
      subtitles: [
        { title: "Github", sectionId: "seccion3" },
        { title: "Vercel", sectionId: "seccion4" },
      ],
    },
    {
      title: "Codigos mas usados",
      subtitles: [
        { title: "Metadatos", sectionId: "seccion5" },
        { title: "Font personalizada", sectionId: "seccion6" },
        { title: "Scrollbar", sectionId: "seccion7" },
        { title: "Responsive", sectionId: "seccion8" },
        { title: "Magick", sectionId: "seccion9" },
        { title: "PowerToys", sectionId: "seccion10" },
      ],
    },
  ],
  links: {
    discord: "https://discord.gg/QbZ9UUpc6",
    twitter: "https://x.com/LorKami2",
    github: "https://github.com/LorKami",
  },
};
