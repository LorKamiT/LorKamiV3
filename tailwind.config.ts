import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
      },
      backgroundImage: {
        page: "radial-gradient(circle, #ebebeb, #efefef, #f2f2f2, #f6f6f6, #fafafa, #fbfbfb, #fbfbfb, #fcfcfc, #f9f9f9, #f7f7f7, #f4f4f4, #f2f2f2)",
        "page-dark":
          "radial-gradient(circle, #111727, #101624, #0f1521, #0f141e, #0e131b, #0d121a, #0d111a, #0c1019, #0c0f1a, #0d0d1c, #0f0b1d, #12091d)",
      },
      textColor: {
        nuevooscuro: "#2d2d2d",
        "nuevooscuro-dark": "#ffffff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
