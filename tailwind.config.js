import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Sky 500
        secondary: "#10b981", // Emerald 500
        accent: "#3b82f6", // Blue 500
        darkPurple: "#6b21a8", // Purple 700
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [flowbitePlugin],
}
