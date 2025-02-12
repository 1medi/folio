import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      gridTemplateColumns:{
        10: "repeat(10, minmax(0, 1fr))",
      },
      screens: {
        "xs": "390px", // Custom breakpoint for extra small screens
      },
    },

  },
  plugins: [],
} satisfies Config;

