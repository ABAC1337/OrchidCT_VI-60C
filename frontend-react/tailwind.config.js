/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#6C5CE7",
        "primary-dark": "#5a4bd1",
        "primary-light": "#e0dcfc",
        "background-light": "#F8F9FE",
        "background-dark": "#131121",
        "text-main": "#2D3436",
        "text-muted": "#636E72",
        "text-secondary": "#636e72",
      },
      fontFamily: {
        "display": ["Outfit", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px",
      },
    },
  },
  plugins: [],
}
