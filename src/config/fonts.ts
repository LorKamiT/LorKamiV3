import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Pixelify_Sans as FontPixel,
  Cinzel as FontCinzel,
  Oswald as FontOswald,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPixel = FontPixel({
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const fontCinzel = FontCinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const fontOswald = FontOswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});
