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
                  className={`border-l border-[#e8eaee] transition-colors dark:border-[#1d2126] dark:text-[#b6bec9] ${
                    activeSection === subtitle.sectionId
                      ? "border-[#3399ff] bg-[#ebf5ff] text-[#006bd6] transition-colors hover:translate-x-0.5 hover:bg-[#d6ebff] dark:border-[#3399ff] dark:bg-[#1d2126] dark:text-[#66b3ff] dark:hover:bg-[#14181b] dark:hover:text-white"
                      : "hover:translate-x-0.5 hover:border-[#1d2126] hover:bg-[#f6f7f8] hover:font-semibold hover:text-[#090b0b] dark:hover:bg-[#14181b] dark:hover:text-white"
                  }`}
                >
                  <Link href={`#${subtitle.sectionId}`} className="">
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
