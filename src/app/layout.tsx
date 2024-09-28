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
import BotonArriba from "../components/BotonArriba";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/LogoLK.svg",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.image}`,
        width: 1920,
        height: 1080,
        alt: "OpenGraph Image",
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.image}`],
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
          "min-h-screen bg-page antialiased dark:bg-page-dark",
          fontSans.variable,
          fontMono.variable,
          fontPixel.variable,
          fontCinzel.variable,
          fontOswald.variable,
        )}
      >
        <Providers>
          <Navbar />
          <BotonArriba />
          {children}
        </Providers>
      </body>
    </html>
  );
}
