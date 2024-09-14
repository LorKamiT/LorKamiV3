"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LKLogo from "../../public/LogoLK.png";

export default function Navbar() {
  const pathname = usePathname();
  const [currentImage, setCurrentImage] = useState("/Menu/MenuInicio.png");
  const [imageVisible, setImageVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (image: string) => {
    setImageVisible(false);

    setTimeout(() => {
      setCurrentImage(image);

      setTimeout(() => {
        setImageVisible(true);
      }, 100);
    }, 200);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-40 flex h-[4rem] w-full justify-center p-2">
      <div className="sticky flex h-full w-[98%] flex-row items-center justify-between">
        <div className="Logo z-41 flex h-full w-[50%] flex-row justify-start lg:w-[10%]">
          <Image
            src={LKLogo}
            alt="LkLogo"
            width={70}
            height={70}
            className="object-contain"
          />
          <div className="flex h-full items-center justify-center">
            <ThemeSwitch />
          </div>
        </div>

        <div
          className="Hamburger z-41 flex h-full w-[10%] cursor-pointer items-center justify-end"
          onClick={toggleMenu}
        >
          <div className="group flex flex-col items-center justify-center space-y-2">
            <span
              className={`block h-[3px] w-7 transform bg-black transition-all duration-300 ease-in-out dark:bg-white ${
                isOpen
                  ? "rotate-[-30deg] group-hover:-translate-x-1 group-hover:rotate-0"
                  : "group-hover:-translate-x-1"
              }`}
            ></span>
            <span
              className={`block h-[3px] w-7 transform bg-black transition-all duration-300 ease-in-out dark:bg-white ${
                isOpen
                  ? "rotate-[-30deg] group-hover:translate-x-1 group-hover:rotate-0"
                  : "group-hover:translate-x-1"
              }`}
            ></span>
          </div>
        </div>

        <div
          className={`fixed left-0 top-0 flex h-[100svh] w-full transform items-center justify-center bg-page transition-transform duration-1000 dark:bg-page-dark ${
            isOpen
              ? "translate-y-0"
              : "-translate-y-full translate-x-[50%] rotate-45 scale-50"
          }`}
        >
          <div className="MenuBox flex h-full w-[95%] flex-row items-center justify-center">
            <div className="MenuLinks flex h-full w-[100%] flex-col items-end justify-center text-nuevooscuro dark:text-nuevooscuro-dark">
              {siteConfig.navMenuPrincipal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => handleMouseEnter(link.imgmenu)}
                  onClick={toggleMenu}
                  className={`MenuLink relative flex origin-center overflow-hidden pr-10 font-oswald text-7xl font-bold uppercase transition-all hover:text-sky-200 md:text-9xl ${
                    pathname === link.href
                      ? "text-sky-500 dark:text-sky-300"
                      : ""
                  }`}
                >
                  <p className="AnimSube">{link.label}</p>
                  <p className="AnimBaja">{link.label}</p>
                </Link>
              ))}

              {siteConfig.navMenuSecundario.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`pr-10 font-oswald text-xl font-bold uppercase transition-all hover:text-sky-200 md:text-2xl ${
                    pathname === link.href
                      ? "text-sky-500 dark:text-sky-300"
                      : ""
                  } `}
                >
                  <p>{link.label}</p>
                </Link>
              ))}
            </div>

            <div className="MenuImgCambiante hidden h-full w-[85%] lg:flex">
              {currentImage && (
                <Image
                  src={currentImage}
                  alt="Imagen del Menú"
                  width={1018}
                  height={1428}
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    imageVisible ? "opacity-100" : "opacity-0"
                  }`}
                  key={currentImage}
                />
              )}
            </div>

            <div className="MenuSociales hidden h-full w-[35%] items-end md:flex">
              <div className="Iconos hidden w-[50%] flex-col items-center justify-center gap-4 text-4xl text-nuevooscuro dark:text-nuevooscuro-dark sm:flex sm:h-full lg:h-[30%]">
                <Link
                  aria-label="Discord"
                  href={siteConfig.links.discord}
                  target="_blank"
                >
                  <FaDiscord className="h-16 w-16 transition-all hover:scale-110 hover:text-sky-500 lg:h-9 lg:w-9" />
                </Link>
                <Link
                  aria-label="X"
                  href={siteConfig.links.twitter}
                  target="_blank"
                >
                  <FaXTwitter className="h-16 w-16 transition-all hover:scale-110 hover:text-sky-500 lg:h-9 lg:w-9" />
                </Link>
                <Link
                  aria-label="Github"
                  href={siteConfig.links.github}
                  target="_blank"
                >
                  <FaGithub className="h-16 w-16 object-cover transition-all hover:scale-110 hover:text-sky-500 lg:h-9 lg:w-9" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
