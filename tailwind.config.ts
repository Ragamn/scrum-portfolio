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
      },
      fontFamily: {
        sansita: ["Sansita", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
