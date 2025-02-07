import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: "#535F78",
        background: "var(--background)",
        foreground: "var(--foreground)",
        customtitle: "#F94A59",
        customwhite: "#F9F9F9",
        custommenu: "#2F2C2A",
        custommenutop: "#FFFFFF",
        squarecolor1: "#648EEE",
        squarecolor2: "#FF3E00",
        squarecolor3: "#77D8D6",
        squarecolor4: "#BA85D6",
        squarecolor5: "#F5EB00",
      },
      fontFamily: {
        sansita: ["Sansita", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
