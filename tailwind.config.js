/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgButton: "var(--bg-button)",
        background: "var(--background)",
        bgFooter: "var(--bg-footer)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      fontFamily: {
        minionPro: ["MinionPro", "sans-serif"],
        sunn: ["Sunn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
