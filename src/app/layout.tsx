import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import {
  fontSans,
  fontMono,
  fontPixel,
  fontCinzel,
  fontOswald,
} from "@/config/fonts";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/LogoLK.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          "bg-page dark:bg-page-dark min-h-screen antialiased",
          fontSans.variable,
          fontMono.variable,
          fontPixel.variable,
          fontCinzel.variable,
          fontOswald.variable,
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
