import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#4d1f00",
        "secondary-color": "#ffe1cc",
        "secondary-color-2": "#fec59d",
        "secondary-color-3": "#ff8b3d",
        "tertiary-color": "#b3e0ff",
        "tertiary-color-2": "#002e4d",
      },
    },
  },
  plugins: [],
};
export default config;
