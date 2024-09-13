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
        page: "linear-gradient(to bottom right, #ffffff, #f3f3f3, #eeeeee)",
        "page-dark":
          "linear-gradient(to bottom right, #0D1117, #111727, #190c29)",
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
