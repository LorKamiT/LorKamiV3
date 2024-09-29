"use client";

import React, { useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";

export default function BotonArriba() {
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) {
        setShowScrollTopBtn(true);
      } else {
        setShowScrollTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`fixed bottom-0 left-0 z-53 m-4 flex h-12 w-12 rotate-[-90deg] items-center justify-center rounded-[50px] opacity-0 transition-all duration-75 ${showScrollTopBtn ? "scale-100 cursor-pointer border border-black bg-white text-black opacity-100 dark:border-white dark:bg-transparent dark:text-white" : ""} active:rotate-[-10deg] active:scale-[0.9]`}
      onClick={scrollToTop}
    >
      <MdPlayArrow size="1.6rem" />
    </div>
  );
}
