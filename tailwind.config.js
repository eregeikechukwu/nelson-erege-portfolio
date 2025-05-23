import animatePlugin from "tailwindcss-animate";
import { tailwindPlugin } from "./app/_lib";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./components/**/*.{js,jsx,mdx}", "./app/**/*.{js,jsx,mdx}"],
  plugins: [tailwindPlugin, animatePlugin],
  theme: {
    extend: {
      screens: {
        sm: "540px", // Change the "sm" breakpoint to 500px
        md: "720px", // Change the "md" breakpoint to 800px
        lg: "1100px", // Change the "lg" breakpoint to 1100px
        xl: "1400px", // Change the "xl" breakpoint to 1400px
        "2xl": "1600px", // Change the "2xl" breakpoint to 1600px
        // "max-cs": { max: "720px" }, // Add a new breakpoint for max-md
        // "max-lg": { max: "1100px" }, // Add a new breakpoint for max-lg
      },
      colors: {},
    },
  },
};

module.exports = tailwindConfig;
