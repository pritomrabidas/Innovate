/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        width: 1536,
      },
      colors: {
        primary: "#222222",
        secandari: "#7A7A7A",
        brand: "#32375C",
        navegrey: "#244255",
      },
      fontFamily: {
        nunitoFont: ["Nunito", "sans-serif"],
        popinsFont:["Poppins", "sans-serif"],
        interFont: ["Inter", "sans-serif"],
        poetsen: ["Poetsen One", "sans-serif"],
        lugrasimo: ["Lugrasimo", "cursive"],
        lobster: ["Lobster", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
