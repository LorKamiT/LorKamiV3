import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MenuGuias() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      siteConfig.guiasMenu.forEach((menu) => {
        menu.subtitles.forEach((subtitle) => {
          const sectionElement = document.getElementById(subtitle.sectionId);
          if (sectionElement) {
            const { top, bottom } = sectionElement.getBoundingClientRect();
            if (
              top <= window.innerHeight / 2 &&
              bottom >= window.innerHeight / 2
            ) {
              currentSection = subtitle.sectionId;
            }
          }
        });
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="menu">
      <div className="menu-item">
        {siteConfig.guiasMenu.map((menu) => (
          <div key={menu.title} className="">
            <h3 className="MenuLink m-2">{menu.title}</h3>
            <ul className="ml-2">
              {menu.subtitles.map((subtitle) => (
                <li
                  key={subtitle.sectionId}
                  className={`border-l transition-colors dark:border-[#1d2126] dark:text-[#b6bec9] ${
                    activeSection === subtitle.sectionId
                      ? "!border-l border-[#3382d1] bg-[#ebf5ff] text-[#006bd6] hover:translate-x-0.5 dark:border-[#3399ff] dark:bg-[#1d2126] dark:!text-[#66b3ff] dark:hover:bg-[#14181b] dark:hover:!text-white"
                      : "border-[#e8eaee] hover:translate-x-0.5 hover:border-[#1d2126] hover:bg-[#f6f7f8] hover:font-semibold hover:text-[#090b0b] dark:hover:bg-[#14181b] dark:hover:text-white"
                  }`}
                >
                  <Link
                    href={`#${subtitle.sectionId}`}
                    className="block h-full w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(subtitle.sectionId);
                    }}
                  >
                    {subtitle.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
