/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "cool-grey": "#8c93a8",
        "space-cadet": "#202448",
        "steel-white": "#f8f7f4",
        "coal-black": "#0c0c0c",
        "ebony": "#4a5240",
        "ash-grey": "#c4cadb"
      },
    },
  },
  safelist: [
    {pattern: /(bg|border|text)-(space-cade|cool-grey|steel-white|coal-black|ebony|ash-grey)/,}
  ],
  plugins: [],
};